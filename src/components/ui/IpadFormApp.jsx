import React, { useState, useEffect, useRef } from 'react';
import RestaurantStep from './RestaurantStep';
import QuestionStep from './QuestionStep';
import ContactStep from './ContactStep';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import TypewriterText from './TypewriterText';
import GooglePlacesAutocomplete from './GooglePlacesAutocomplete';
import '../../App.css';
import ReportPage from '../ReportPage';
import { useNavigate } from 'react-router-dom';

const questions = [
  'What is your average monthly revenue?',
  'Do you currently have a marketing list?',
  'Does your business currently use AI?',
  // Add more questions as needed
];

const DARK_BG = '#181A1B';
const LIGHT_GREEN = '#7CFCB5';
const GRAY_TEXT = '#C7C7C7';
const INPUT_BG = '#232526';
const INPUT_BORDER = '#333';
const BUTTON_BG = '#232526';
const BUTTON_TEXT = '#fff';
const BUTTON_DISABLED_BG = '#333';
const BUTTON_DISABLED_TEXT = '#888';

// Replace the old N8N_WEBHOOK_URL with the new backend endpoint
const N8N_WEBHOOK_URL = '/api/business-type';

const IpadFormApp = () => {
  const [showReport, setShowReport] = useState(false);
  const [formData, setFormData] = useState({
    restaurant: '',
    answers: Array(questions.length).fill(''),
    name: '',
    email: '',
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [showError, setShowError] = useState(false);
  const [typewriterDone, setTypewriterDone] = useState(false);
  const [showSecondTypewriter, setShowSecondTypewriter] = useState(false);
  const [secondTypewriterDone, setSecondTypewriterDone] = useState(false);
  const navigate = useNavigate();

  const steps = [
    'Restaurant',
    ...questions.map((_, i) => `Q${i + 1}`),
    'NameEmail',
  ];

  // Helper to check if current step is the AI usage question
  const isAIUsageStep = steps[currentStep].startsWith('Q') && questions[parseInt(steps[currentStep].slice(1)) - 1].toLowerCase().includes('currently use ai');

  const isStepValid = () => {
    if (steps[currentStep] === 'Restaurant') {
      return !!formData.restaurant;
    }
    if (steps[currentStep].startsWith('Q')) {
      const qIdx = parseInt(steps[currentStep].slice(1)) - 1;
      const answer = formData.answers[qIdx];
      // Special validation for marketing list question
      if (questions[qIdx].toLowerCase().includes('marketing list')) {
        if (!answer) return false;
        if (typeof answer === 'object' && answer.yes) {
          return !!answer.count;
        }
        return answer === 'no';
      }
      return !!answer;
    }
    if (steps[currentStep] === 'NameEmail') {
      const isValidEmail = email => /.+@.+\..+/.test(email);
      return !!formData.name && !!formData.email && isValidEmail(formData.email);
    }
    return true;
  };

  const handleNext = async () => {
    if (!isStepValid()) {
      setShowError(true);
      return;
    }
    setShowError(false);
    setCurrentStep(s => Math.min(steps.length - 1, s + 1));
  };

  const handleSeeReport = () => {
    if (!isStepValid()) {
      setShowError(true);
      return;
    }
    setShowError(false);
    // Extract only serializable fields from restaurant
    const { restaurant, ...rest } = formData;
    let safeRestaurant = {};
    if (restaurant) {
      // Filter reviews to only serializable fields
      let safeReviews = [];
      if (Array.isArray(restaurant.reviews)) {
        safeReviews = restaurant.reviews.map(r => ({
          author_name: r.author_name,
          rating: r.rating,
          text: r.text,
          relative_time_description: r.relative_time_description,
        }));
      }
      // Filter photos to only serializable fields (object with url string)
      let safePhotos = [];
      if (Array.isArray(restaurant.photos)) {
        safePhotos = restaurant.photos.map(p => {
          if (typeof p === 'string') return { url: p };
          if (p && typeof p.getUrl === 'function') {
            try {
              return { url: p.getUrl() };
            } catch {
              return undefined;
            }
          }
          if (p && typeof p.url === 'string') return { url: p.url };
          if (p && typeof p.photo_reference === 'string') return { url: p.photo_reference };
          return undefined;
        }).filter(Boolean);
      }
      safeRestaurant = {
        name: restaurant.name || restaurant.displayName?.text || '',
        address: restaurant.formatted_address || restaurant.vicinity || restaurant.address || '',
        phone: restaurant.formatted_phone_number || restaurant.international_phone_number || '',
        website: restaurant.website || '',
        hours: restaurant.opening_hours || {},
        lat: restaurant.geometry?.location?.lat?.() || restaurant.geometry?.location?.lat || '',
        lng: restaurant.geometry?.location?.lng?.() || restaurant.geometry?.location?.lng || '',
        reviews: safeReviews,
        photos: safePhotos,
        place_id: restaurant.place_id || '',
        url: restaurant.url || '',
      };
    }
    const safeFormData = {
      ...rest,
      restaurant: safeRestaurant,
    };
    navigate('/report', { state: { formData: safeFormData } });
  };

  const handleBack = () => {
    setShowError(false);
    setCurrentStep(s => Math.max(0, s - 1));
  };

  // For Google Autocomplete: only advance when a place is selected
  const handleRestaurantSelect = (place) => {
    setFormData(f => ({ ...f, restaurant: place }));
    setTimeout(() => setCurrentStep(s => Math.min(steps.length - 1, s + 1)), 300); // slight delay for UX
  };

  // Add effect to trigger second typewriter after a delay
  useEffect(() => {
    if (typewriterDone && !showSecondTypewriter) {
      const timer = setTimeout(() => setShowSecondTypewriter(true), 2000); // 2s delay
      return () => clearTimeout(timer);
    }
  }, [typewriterDone, showSecondTypewriter]);

  // Add a ref for CSSTransition node
  const nodeRef = useRef(null);

  // Add ref for keyboard event
  const containerRef = useRef(null);

  // Keyboard: allow Enter to advance
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' && !showReport && !isAIUsageStep && currentStep > 0) {
        if (isStepValid()) {
          if (currentStep < steps.length - 1) {
            handleNext();
          } else {
            handleSeeReport();
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStep, isAIUsageStep, showReport, isStepValid, handleNext, handleSeeReport, steps.length]);

  const renderStep = () => {
    if (steps[currentStep] === 'Restaurant') {
      // Remove the restaurant input from here, as it is now always visible above
      return null;
    }
    if (steps[currentStep].startsWith('Q')) {
      const qIdx = parseInt(steps[currentStep].slice(1)) - 1;
      // For AI usage question, auto-advance on answer
      if (questions[qIdx].toLowerCase().includes('currently use ai')) {
        return (
          <QuestionStep
            question={questions[qIdx]}
            value={formData.answers[qIdx]}
            onChange={val => {
              setFormData(f => ({
                ...f,
                answers: f.answers.map((a, i) => i === qIdx ? val : a)
              }));
              // Auto-advance to next step after a short delay
              setTimeout(() => setCurrentStep(s => Math.min(steps.length - 1, s + 1)), 300);
            }}
            showError={showError}
            darkMode={true}
          />
        );
      }
      return (
        <QuestionStep
          question={questions[qIdx]}
          value={formData.answers[qIdx]}
          onChange={val => setFormData(f => ({
            ...f,
            answers: f.answers.map((a, i) => i === qIdx ? val : a)
          }))}
          showError={showError}
          darkMode={true}
        />
      );
    }
    if (steps[currentStep] === 'NameEmail') {
      return (
        <ContactStep
          name={formData.name}
          email={formData.email}
          onNameChange={val => setFormData(f => ({ ...f, name: val }))}
          onEmailChange={val => setFormData(f => ({ ...f, email: val }))}
          showError={showError}
          darkMode={true}
        />
      );
    }
    return null;
  };

  return (
    <div ref={containerRef} style={{ minHeight: '100%', width: '100%', background: DARK_BG, borderRadius: 28, color: GRAY_TEXT, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: 0 }}>
      {!showReport && (
        <>
          {/* Typewriter Text and Generating Animation */}
          {currentStep === 0 && (
            <div style={{ width: '100%', margin: '32px 0 0 0', textAlign: 'left', padding: '0 24px' }}>
              {/* First paragraph typewriter */}
              {!typewriterDone && (
                <>
                  <TypewriterText
                    text="Our AI found restaurants like yours are missing $3,200+ monthly in hidden revenue. Discover your exact number in 60 seconds."
                    speed={36}
                    className="block text-base md:text-lg font-mono"
                    style={{ color: GRAY_TEXT, fontFamily: 'monospace', textAlign: 'left' }}
                    onAnimationEnd={() => setTypewriterDone(true)}
                  />
                  {/* Generating animation while typewriter is running */}
                  <div style={{ color: LIGHT_GREEN, fontFamily: 'monospace', marginTop: 8, fontSize: 16 }}>
                    Generating
                    <span className="inline-block align-baseline ml-1">
                      <span className="dot dot1">.</span>
                      <span className="dot dot2">.</span>
                      <span className="dot dot3">.</span>
                    </span>
                  </div>
                </>
              )}
              {/* After first finishes, show static text */}
              {typewriterDone && (
                <>
                  <div className="block text-base md:text-lg font-mono" style={{ color: GRAY_TEXT, fontFamily: 'monospace', textAlign: 'left' }}>
                    Our AI found restaurants like yours are missing $3,200+ monthly in hidden revenue. Discover your exact number in 60 seconds.
                  </div>
                </>
              )}
              {/* Second paragraph typewriter, only after delay */}
              {showSecondTypewriter && !secondTypewriterDone && (
                <>
                  <TypewriterText
                    text="Enter your restaurant to get your free report."
                    speed={36}
                    className="block text-base md:text-lg font-mono"
                    style={{ color: GRAY_TEXT, fontFamily: 'monospace', textAlign: 'left', marginTop: 16 }}
                    onAnimationEnd={() => setSecondTypewriterDone(true)}
                  />
                  {/* Generating animation while second typewriter is running */}
                  <div style={{ color: LIGHT_GREEN, fontFamily: 'monospace', marginTop: 20, fontSize: 16 }}>
                    Generating
                    <span className="inline-block align-baseline ml-1">
                      <span className="dot dot1">.</span>
                      <span className="dot dot2">.</span>
                      <span className="dot dot3">.</span>
                    </span>
                  </div>
                </>
              )}
              {/* After second finishes, show static text */}
              {showSecondTypewriter && secondTypewriterDone && (
                <div className="block text-base md:text-lg font-mono" style={{ color: '#db5439', fontFamily: 'monospace', textAlign: 'left', marginTop: 16 }}>
                  Enter your restaurant to get your free report.
                </div>
              )}
              {/* Restaurant input field always visible under intro text */}
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 24 }}>
                <GooglePlacesAutocomplete
                  value={formData.restaurant}
                  onChange={() => {}}
                  onPlaceSelected={handleRestaurantSelect}
                  darkMode={true}
                  style={{
                    width: '80%',
                    maxWidth: 320,
                    minWidth: 180,
                    margin: '0 auto',
                    marginTop: 0,
                    marginBottom: 8,
                    fontSize: 16,
                    borderRadius: 10,
                    background: '#232526',
                    color: '#fff',
                    border: '1px solid #333',
                    fontFamily: 'monospace',
                    padding: '10px 14px',
                  }}
                  inputStyle={{
                    background: '#232526',
                    color: '#fff',
                    border: '1px solid #333',
                    borderRadius: 10,
                    fontFamily: 'monospace',
                    fontSize: 16,
                    padding: '10px 14px',
                  }}
                  placeholder="Type your restaurant name..."
                />
                {showError && !formData.restaurant && (
                  <div style={{ color: '#db5439', marginTop: 8, fontSize: 15, textAlign: 'center' }}>
                    Please select your restaurant.
                  </div>
                )}
              </div>
              {/* Spacing for layout consistency */}
              {(!showSecondTypewriter || (showSecondTypewriter && !secondTypewriterDone)) && <div style={{ height: 32 }} />}
              {showSecondTypewriter && secondTypewriterDone && <div style={{ height: 0 }} />}
            </div>
          )}
          {/* Step Content with Fade Transition */}
          <div style={{ width: '100%', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 180 }}>
            <TransitionGroup style={{ width: '100%' }} component={null}>
              <CSSTransition key={currentStep} classNames="fade" timeout={350} nodeRef={nodeRef}>
                <div ref={nodeRef} style={{ width: '100%' }}>
                  {/* Only gate the first step (restaurant input) behind the typewriter sequence */}
                  {(currentStep === 0
                    ? showSecondTypewriter && secondTypewriterDone
                    : true
                  ) ? renderStep() : null}
                  {/* Progress Bar directly under the step content */}
                  <div style={{ width: '100%', padding: '0 24px', marginTop: 18 }}>
                    <div style={{
                      height: 10,
                      borderRadius: 5,
                      background: '#222',
                      overflow: 'hidden',
                      boxShadow: '0 1px 4px rgba(39,161,194,0.08)',
                    }}>
                      <div style={{
                        width: `${((currentStep + 1) / steps.length) * 100}%`,
                        height: '100%',
                        background: `linear-gradient(90deg, ${LIGHT_GREEN} 60%, #27a1c2 100%)`,
                        borderRadius: 5,
                        transition: 'width 0.4s cubic-bezier(.4,1.3,.6,1)',
                      }} />
                    </div>
                  </div>
                  {/* Navigation Button directly below progress bar */}
                  {currentStep > 0 && !isAIUsageStep && (
                    currentStep < steps.length - 1 ? (
                      <button
                        style={{
                          background: 'linear-gradient(90deg, #27a1c2 0%, #7CFCB5 100%)',
                          color: '#fff',
                          border: 'none',
                          borderRadius: 999,
                          padding: '14px 44px',
                          fontWeight: 700,
                          fontSize: 20,
                          cursor: 'pointer',
                          boxShadow: '0 2px 12px #27a1c233',
                          letterSpacing: '0.01em',
                          transition: 'background 0.2s, transform 0.1s',
                          outline: 'none',
                          opacity: !isStepValid() ? 0.6 : 1,
                          marginTop: 150,
                          display: 'block',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                        }}
                        onClick={handleNext}
                        disabled={!isStepValid()}
                      >
                        Next
                      </button>
                    ) : (
                      <button
                        style={{
                          background: 'linear-gradient(90deg, #27a1c2 0%, #7CFCB5 100%)',
                          color: '#fff',
                          border: 'none',
                          borderRadius: 999,
                          padding: '14px 44px',
                          fontWeight: 700,
                          fontSize: 20,
                          cursor: 'pointer',
                          boxShadow: '0 2px 12px #27a1c233',
                          letterSpacing: '0.01em',
                          transition: 'background 0.2s, transform 0.1s',
                          outline: 'none',
                          opacity: !isStepValid() ? 0.6 : 1,
                          marginTop: 150,
                          display: 'block',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                        }}
                        onClick={handleSeeReport}
                        disabled={!isStepValid()}
                      >
                        See Report
                      </button>
                    )
                  )}
                </div>
              </CSSTransition>
            </TransitionGroup>
          </div>
        </>
      )}
      {/* REMOVE any rendering of ReportPage here */}
      {/* Only render the funnel steps and UI */}
    </div>
  );
};

export default IpadFormApp; 