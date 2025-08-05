import React, { useRef, useState } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import PromptBox from './chatgpt-prompt-input';
import GooglePlacesAutocomplete from './GooglePlacesAutocomplete';
import { useNavigate } from 'react-router-dom';
// @ts-ignore
import { Avatar, AvatarImage, AvatarFallback } from './avatar';
import { Loader } from '@googlemaps/js-api-loader';
import { useEffect } from 'react';
import { Confetti } from './confetti';
import TypewriterText from './TypewriterText';
// @ts-ignore
import CustomReport from './CustomReport';

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-4"
      ref={containerRef}
    >
      <div
        className="py-4 md:py-8 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: string | React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
        position: 'relative',
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4 ">
        {children}
      </div>
    </motion.div>
  );
};

const InitialTypewriterMessage = React.memo(() => {
  const [showSecondMessage, setShowSecondMessage] = React.useState(false);

  // Simple timer to show second message after 5 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondMessage(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-4">
      {/* First message bubble */}
      <div className="bg-gray-800 rounded-lg p-4 text-base md:text-lg font-mono text-[#C7C7C7]">
        {!showSecondMessage ? (
          <Typewriter
            words={["Welcome to Bot & Table—where our 'bots' help fill your tables. Our AI found restaurants are missing $3,200+ monthly in hidden revenue."]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={32}
            deleteSpeed={50}
            delaySpeed={0}
          />
        ) : (
          <div>Welcome to Bot & Table—where our 'bots' help fill your tables. Our AI found restaurants are missing $3,200+ monthly in hidden revenue.</div>
        )}
      </div>

      {/* Second message bubble */}
      {showSecondMessage && (
        <div className="bg-gray-800 rounded-lg p-4 text-base md:text-lg font-mono text-[#C7C7C7]">
          <Typewriter
            words={["Receive your exclusive Restaurant Profit Optimization Report—a detailed, personalized analysis worth $500 that reveals your hidden revenue streams and the exact roadmap to capture them."]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={32}
            deleteSpeed={50}
            delaySpeed={0}
          />
        </div>
      )}
    </div>
  );
});

// Add utility functions at the top:
function formatCurrency(value: string): string {
  if (!value) return '';
  const num = value.replace(/[^\d]/g, '');
  if (!num) return '';
  return '$' + Number(num).toLocaleString();
}
function formatNumber(value: string) {
  if (!value) return '';
  const num = value.replace(/[^\d]/g, '');
  if (!num) return '';
  return Number(num).toLocaleString();
}

export default function HeroScrollDemo({ onHeadingMount }: { onHeadingMount?: () => void }) {
  const [step, setStep] = useState(1); // 1: select, 2: confirm, 3: reviews
  const [selectedPlace, setSelectedPlace] = useState<google.maps.places.PlaceResult | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [mainTyped, setMainTyped] = useState(false);
  const [showConfirmTypewriter, setShowConfirmTypewriter] = useState(false);
  const [showReviewTypewriter, setShowReviewTypewriter] = useState(false);
  const [reviews, setReviews] = useState<any[]>([]);
  const [loadingReviews, setLoadingReviews] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [userSecondAnswer, setUserSecondAnswer] = useState('');
  const [userSecondAnswers, setUserSecondAnswers] = useState<string[]>([]);
  // In state for step 3 timing:
  const [showReviewMessage, setShowReviewMessage] = useState(false);
  const [showFirstQuestion, setShowFirstQuestion] = useState(false);
  const [showFirstInput, setShowFirstInput] = useState(false);
  // Add state for the new message and timing after user answer in step 3:
  const [showPostAnswerMessage, setShowPostAnswerMessage] = useState(false);
  // Add state for the post-answer message in step 4:
  const [showPostMarketingMessage, setShowPostMarketingMessage] = useState(false);
  // Add state for step 4 timing:
  const [showSecondQuestion, setShowSecondQuestion] = useState(false);
  const [showSecondInput, setShowSecondInput] = useState(false);
  // In state:
  const [showListSizeField, setShowListSizeField] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', revenue: '', hasList: '', listSize: '' });

  // Form and report state
  const [showFormIntro, setShowFormIntro] = useState(false);
  const [formIntroDone, setFormIntroDone] = useState(false);
  const [submittedFormData, setSubmittedFormData] = useState<{name: string; email: string; revenue: string; hasList: string; listSize: string} | null>(null);

  // Debug component lifecycle
  useEffect(() => {
    console.log('HeroScrollDemo component mounted');
    return () => {
      console.log('HeroScrollDemo component unmounted');
    };
  }, []);

  // Debug step changes with more detail
  useEffect(() => {
    console.log('Step changed to:', step, 'at', new Date().toISOString());
    console.trace('Step change stack trace');
  }, [step]);

  // Debug form state changes
  useEffect(() => {
    console.log('showFormIntro changed to:', showFormIntro);
  }, [showFormIntro]);

  useEffect(() => {
    console.log('formIntroDone changed to:', formIntroDone);
  }, [formIntroDone]);

  useEffect(() => {
    if (step === 5) {
      setShowFormIntro(true);
      setFormIntroDone(false);
      // Fallback: show form after 1.5 seconds if typewriter doesn't complete
      const fallbackTimer = setTimeout(() => {
        console.log('Fallback: showing form after timeout');
        setFormIntroDone(true);
      }, 1500);
      return () => clearTimeout(fallbackTimer);
    } else {
      setShowFormIntro(false);
      setFormIntroDone(false);
    }
  }, [step]);

  const stepRef = useRef(step);
  useEffect(() => { stepRef.current = step; }, [step]);
  
  // Remove the problematic history management that's causing resets
  // useEffect(() => {
  //   if (step > 1) {
  //     window.history.pushState({ funnelStep: step }, '', window.location.pathname);
  //   }
  // }, [step]);
  // useEffect(() => {
  //   const onPopState = (e: PopStateEvent) => {
  //     if (e.state && typeof e.state.funnelStep === 'number') {
  //       setStep(e.state.funnelStep);
  //     }
  //   };
  //   window.addEventListener('popstate', onPopState);
  //   return () => window.removeEventListener('popstate', onPopState);
  // }, []);
  // useEffect(() => {
  //   window.history.replaceState({ funnelStep: stepRef.current }, '', window.location.pathname);
  // }, []);

  React.useEffect(() => {
    if (mainTyped) {
      const timer = setTimeout(() => setShowPrompt(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [mainTyped]);

  // When entering step 2, animate in the confirmation typewriter
  React.useEffect(() => {
    if (step === 2 && selectedPlace) {
      setShowConfirmTypewriter(false);
      const timer = setTimeout(() => setShowConfirmTypewriter(true), 200);
      return () => clearTimeout(timer);
    }
  }, [step, selectedPlace]);

  // When entering step 3, animate in the review typewriter
  React.useEffect(() => {
    if (step === 3) {
      setShowReviewTypewriter(false);
      const timer = setTimeout(() => setShowReviewTypewriter(true), 200);
      return () => clearTimeout(timer);
    }
  }, [step]);

  // In useEffect, when entering step 3:
  React.useEffect(() => {
    if (step === 3) {
      setShowReviewMessage(true);
      setShowFirstQuestion(false);
      setShowFirstInput(false);
      const qTimer = setTimeout(() => setShowFirstQuestion(true), 3500);
      const inputTimer = setTimeout(() => setShowFirstInput(true), 4500);
      return () => {
        clearTimeout(qTimer);
        clearTimeout(inputTimer);
      };
    }
  }, [step]);

  // When entering step 4, control timing
  React.useEffect(() => {
    if (step === 4) {
      setShowSecondQuestion(false);
      setShowSecondInput(false);
      const qTimer = setTimeout(() => setShowSecondQuestion(true), 500);
      const inputTimer = setTimeout(() => setShowSecondInput(true), 1500);
      return () => {
        clearTimeout(qTimer);
        clearTimeout(inputTimer);
      };
    }
  }, [step]);

  // Handle user second answer submit
  const handleUserSecondAnswerSubmit = () => {
    if (userSecondAnswer.trim()) {
      setUserSecondAnswers([...userSecondAnswers, userSecondAnswer.trim()]);
      setUserSecondAnswer('');
    }
  };

  // Fetch reviews when entering step 3
  React.useEffect(() => {
    if (step === 3 && selectedPlace && selectedPlace.place_id) {
      setLoadingReviews(true);
      const loader = new Loader({
        apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        version: 'weekly',
        libraries: ['places'],
      });
      loader.load().then(() => {
        const mapDiv = document.createElement('div');
        const service = new window.google.maps.places.PlacesService(mapDiv);
        service.getDetails({
          placeId: selectedPlace.place_id!,
          fields: ['reviews'],
        }, (result: any, status: any) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK && result && result.reviews) {
            setReviews(result.reviews.slice(0, 1));
          } else {
            setReviews([]);
          }
          setLoadingReviews(false);
        });
      });
    }
  }, [step, selectedPlace]);

  // Handle user answer submit (on Enter or blur)
  const handleUserAnswerSubmit = () => {
    if (userAnswer.trim()) {
      setUserAnswers([...userAnswers, userAnswer.trim()]);
      setUserAnswer('');
      setStep(4); // Immediately go to the next screen/question
    }
  };

  // In the effect that handles userAnswers (step 3):
  React.useEffect(() => {
    if (step === 3 && userAnswers.length > 0) {
      setShowPostAnswerMessage(true);
      const timer = setTimeout(() => {
        setShowPostAnswerMessage(false);
        setStep(4);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [step, userAnswers]);

  // In the effect that handles userSecondAnswers (step 4):
  React.useEffect(() => {
    if (step === 4 && userSecondAnswers.length > 0) {
      setShowPostMarketingMessage(true);
      const timer = setTimeout(() => {
        setShowPostMarketingMessage(false);
        setStep(5);
      }, 5000); // Increased delay by 1 second
      return () => clearTimeout(timer);
    }
  }, [step, userSecondAnswers]);

  // Remove all the modal-related useEffect hooks
  // useEffect(() => {
  //   console.log('Step changed to:', step);
  //   if (step === 5 && !modalTriggeredRef.current) {
  //     console.log('Step 5 reached, opening modal...');
  //     modalTriggeredRef.current = true;
  //     const timer = setTimeout(() => {
  //       console.log('Setting showLeadModal to true');
  //       setShowLeadModal(true);
  //     }, 1000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [step]);

  // Remove the fallback useEffect and debug useEffect for modal

  // Step 3: Review + Q1
  if (step === 3) {
    return (
      <ContainerScroll titleComponent={
        <>
          <h1 className="text-4xl font-semibold text-black dark:text-white">
            See How Much Revenue Your <br />
            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              Restaurant Is Losing
            </span>
          </h1>
        </>
      }>
        <div className="flex flex-col items-center justify-center w-full h-full">
          {showReviewMessage && (
            <>
              {/* Robot message: 'Awesome, look's like you have some fantastic reviews' */}
              <div className="flex items-center gap-4 max-w-2xl mx-auto mt-4 w-full">
                <div className="flex-shrink-0 flex items-center justify-center">
                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center">
                    <img src="/assets/bot-table-robot.svg" alt="Bot & Table Robot" className="w-10 h-10 md:w-16 md:h-16" style={{ objectFit: 'contain' }} />
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="bg-[#232526] rounded-xl px-5 py-4 shadow-inner border border-[#333] text-left w-full">
                    <span className="text-base md:text-lg font-mono text-[#C7C7C7]">
                      <Typewriter
                        words={["Awesome, look's like you have some fantastic reviews"]}
                        loop={1}
                        cursor
                        cursorStyle="|"
                        typeSpeed={32}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                    </span>
                  </div>
                </div>
              </div>
              {/* Review card */}
              <div className="flex flex-col gap-6 max-w-2xl mx-auto mt-8 w-full h-[32rem] md:h-[36rem] relative overflow-y-auto">
                {loadingReviews ? (
                  <div className="text-center text-gray-500">Loading reviews...</div>
                ) : reviews.length === 0 ? (
                  <div className="text-center text-gray-500">No reviews found.</div>
                ) : (
                  reviews.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1.2 }}
                      className="flex items-start gap-4 bg-white rounded-xl shadow p-6 mt-4"
                    >
                      <Avatar>
                        {typeof reviews[0].profile_photo_url === 'string' && typeof reviews[0].author_name === 'string' ? (
                          <AvatarImage src={typeof reviews[0].profile_photo_url === 'string' ? reviews[0].profile_photo_url : ''} alt={typeof reviews[0].author_name === 'string' ? reviews[0].author_name : 'Reviewer'} />
                        ) : (
                          <AvatarFallback>{typeof reviews[0].author_name === 'string' && reviews[0].author_name[0] ? reviews[0].author_name[0] : '?'}</AvatarFallback>
                        )}
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-semibold text-lg text-gray-900">{reviews[0].author_name}</div>
                        <div className="flex items-center gap-1 mb-1">
                          <span className="text-yellow-500">{'★'.repeat(Math.round(reviews[0].rating))}</span>
                          <span className="text-gray-400 text-sm">{reviews[0].relative_time_description}</span>
                        </div>
                        <div className="text-gray-700 text-base">{(reviews[0].text || '').length > 250 ? (reviews[0].text || '').slice(0, 250) + '…' : (reviews[0].text || '')}</div>
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </>
          )}
          {showFirstQuestion && (
            <div className="flex items-center gap-4 max-w-2xl mx-auto mt-8 w-full">
              <div className="flex-shrink-0 flex items-center justify-center">
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center">
                  <img src="/assets/bot-table-robot.svg" alt="Bot & Table Robot" className="w-10 h-10 md:w-16 md:h-16" style={{ objectFit: 'contain' }} />
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="bg-[#232526] rounded-xl px-5 py-4 shadow-inner border border-[#333] text-left w-full">
                  <span className="text-base md:text-lg font-mono text-[#C7C7C7]">
                    <Typewriter
                      words={["Do you currently have a process to automate getting more google reviews?"]}
                      loop={1}
                      cursor
                      cursorStyle="|"
                      typeSpeed={32}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </div>
              </div>
            </div>
          )}
          {/* Q1 input and answer bubble */}
          {showFirstInput && showFirstQuestion && userAnswers.length === 0 ? (
            <div className="w-full max-w-2xl mx-auto sticky bottom-0 bg-transparent pt-2 pb-2 z-10">
              <input
                type="text"
                value={userAnswer || ''}
                onChange={e => setUserAnswer(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') { setUserAnswers([userAnswer.trim()]); setUserAnswer(''); setStep(4); } }}
                onBlur={() => { if (userAnswer.trim()) { setUserAnswers([userAnswer.trim()]); setUserAnswer(''); setStep(4); } }}
                placeholder="Type your answer..."
                className="w-full rounded-xl border-2 border-[#bfc8d5] focus:border-[#db5439] shadow-md px-4 py-3 text-lg text-gray-900 placeholder-gray-400 bg-white transition-all duration-200"
                style={{ outline: "none", boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06)' }}
              />
            </div>
          ) : null}
          {userAnswers.length > 0 && showPostAnswerMessage && (
            <div className="flex items-center gap-4 max-w-2xl mx-auto mt-4 w-full">
              <div className="flex-shrink-0 flex items-center justify-center">
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center">
                  <img src="/assets/bot-table-robot.svg" alt="Bot & Table Robot" className="w-10 h-10 md:w-16 md:h-16" style={{ objectFit: 'contain' }} />
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="bg-[#232526] rounded-xl px-5 py-4 shadow-inner border border-[#333] text-left w-full">
                  <span className="text-base md:text-lg font-mono text-[#C7C7C7]">
                    <Typewriter
                      words={["Very Nice, that's great to know! The average restaurant loses $2,400 monthly just from missed calls"]}
                      loop={1}
                      cursor
                      cursorStyle="|"
                      typeSpeed={32}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </ContainerScroll>
    );
  }
  // Step 4: Q2
  if (step === 4) {
    return (
      <ContainerScroll titleComponent={
        <>
          <h1 className="text-4xl font-semibold text-black dark:text-white">
            See How Much Revenue Your <br />
            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              Restaurant Is Losing
            </span>
          </h1>
        </>
      }>
        <div className="flex flex-col items-center justify-center w-full h-full">
          {/* Q2 robot message */}
          {showSecondQuestion && (
          <div className="flex items-center gap-4 max-w-2xl mx-auto mt-8 w-full">
            <div className="flex-shrink-0 flex items-center justify-center">
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center">
                <img src="/assets/bot-table-robot.svg" alt="Bot & Table Robot" className="w-10 h-10 md:w-16 md:h-16" style={{ objectFit: 'contain' }} />
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="bg-[#232526] rounded-xl px-5 py-4 shadow-inner border border-[#333] text-left w-full">
                <span className="text-base md:text-lg font-mono text-[#C7C7C7]">
                  <Typewriter
                    words={["What about AI marketing? AI marketing that Keep guests engaged with personalized SMS and Email messages year around?"]}
                    loop={1}
                    cursor
                    cursorStyle="|"
                    typeSpeed={32}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </div>
            </div>
          </div>
          )}
          {/* Q2 input and answer bubble */}
          {showSecondInput && showSecondQuestion && userSecondAnswers.length === 0 ? (
            <div className="w-full max-w-2xl mx-auto sticky bottom-0 bg-transparent pt-2 pb-2 z-10">
              <input
                type="text"
                value={userSecondAnswer || ''}
                onChange={e => setUserSecondAnswer(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') { setUserSecondAnswers([userSecondAnswer.trim()]); setUserSecondAnswer(''); /* setStep(5) or finish */ } }}
                onBlur={() => { if (userSecondAnswer.trim()) { setUserSecondAnswers([userSecondAnswer.trim()]); setUserSecondAnswer(''); /* setStep(5) or finish */ } }}
                placeholder="Type your answer..."
                className="w-full rounded-xl border-2 border-[#bfc8d5] focus:border-[#db5439] shadow-md px-4 py-3 text-lg text-gray-900 placeholder-gray-400 bg-white transition-all duration-200"
                style={{ outline: "none", boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06)' }}
              />
            </div>
          ) : null}
          {userSecondAnswers.length > 0 && showPostMarketingMessage && (
            <div className="flex items-center gap-4 max-w-2xl mx-auto mt-4 w-full">
              <div className="flex-shrink-0 flex items-center justify-center">
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center">
                  <img src="/assets/bot-table-robot.svg" alt="Bot & Table Robot" className="w-10 h-10 md:w-16 md:h-16" style={{ objectFit: 'contain' }} />
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="bg-[#232526] rounded-xl px-5 py-4 shadow-inner border border-[#333] text-left w-full">
                  <span className="text-base md:text-lg font-mono text-[#C7C7C7]">
                    <Typewriter
                      words={["Thanks that's great to know, 65% of guests want to hear from restaurants weekly. AI Marketing makes it easy to stay in touch."]}
                      loop={1}
                      cursor
                      cursorStyle="|"
                      typeSpeed={32}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </ContainerScroll>
    );
  }
  // Step 5: Form intro + inline form
  if (step === 5) {
    return (
      <ContainerScroll titleComponent={
        <>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-semibold mb-2">See How Much Revenue Your</div>
            <div className="text-4xl md:text-[6rem] font-bold leading-none">Restaurant Is Losing</div>
          </div>
        </>
      }>
        <div className="flex flex-col items-center justify-center w-full h-full" style={{ minHeight: 0 }}>
          {showFormIntro && (
            <div className="flex items-center gap-4 max-w-2xl mx-auto mt-4 w-full mb-6">
              <div className="flex-shrink-0 flex items-center justify-center">
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center">
                  <img src="/assets/bot-table-robot.svg" alt="Bot & Table Robot" className="w-10 h-10 md:w-16 md:h-16" style={{ objectFit: 'contain' }} />
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="bg-zinc-900 rounded-xl px-6 py-4 shadow-lg w-full text-left">
                  <span className="text-base md:text-lg font-mono text-[#C7C7C7]">
                    <Typewriter
                      words={["Thanks for the information, one last step before we build your free custom report."]}
                      loop={1}
                      cursor
                      cursorStyle="|"
                      typeSpeed={32}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      onLoopDone={() => setFormIntroDone(true)}
                    />
                  </span>
                </div>
              </div>
            </div>
          )}
          
          {/* Inline form that appears after the typewriter message */}
          {formIntroDone && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-lg mx-auto"
            >
              <InlineLeadForm onSubmit={(data) => {
                console.log('Lead form submitted:', data);
                setSubmittedFormData(data);
                setStep(6); // Move to report step
              }} />
            </motion.div>
          )}
        </div>
      </ContainerScroll>
    );
  }

  // Step 6: Custom Report Display
  if (step === 6 && submittedFormData) {
    return (
      <ContainerScroll titleComponent={
        <>
          <div className="text-center">
                            <div className="text-2xl font-bold mb-2">Your Personalized</div>
            <div className="text-4xl md:text-[6rem] font-bold leading-none">Revenue Report</div>
            </div>
        </>
      }>
        <div className="flex flex-col items-center justify-start w-full h-full p-4 overflow-y-auto">
          <div className="w-full max-w-4xl">
                      <CustomReport 
            formData={submittedFormData}
            restaurantData={{
              name: selectedPlace?.name,
              rating: selectedPlace?.rating || 4.2,
              reviewCount: selectedPlace?.user_ratings_total || 127,
              address: selectedPlace?.formatted_address || selectedPlace?.vicinity,
              phone: selectedPlace?.formatted_phone_number,
              website: selectedPlace?.website,
              photosCount: selectedPlace?.photos?.length ? Math.max(selectedPlace.photos.length * 3, 25) : 23, // Estimate total photos (API only returns subset)
              hasLimitedPhotoData: true, // Flag to indicate we're estimating
              photos: selectedPlace?.photos || [], // Pass actual photos for gallery
              responseRate: 0.15, // This would come from Google My Business API
              // Remove hardcoded lastReviewDays and monthlyReviews - let CustomReport calculate them
              hasDescription: selectedPlace?.name ? true : false, // Simplified check
              hasHours: selectedPlace?.opening_hours ? true : false,
              hasPhone: selectedPlace?.formatted_phone_number ? true : false,
              hasWebsite: selectedPlace?.website ? true : false
            }}
          />
          </div>
        </div>
      </ContainerScroll>
    );
  }

  // Step 1: Initial selection
  return (
    <div className="relative">
      <ContainerScroll
        titleComponent={<MainHeading onMount={onHeadingMount} />}
      >
        <div className="flex flex-col items-center justify-center w-full h-full">
          {/* Only show the initial typewriter message in the first step */}
          <div className="flex items-start gap-4 md:gap-6 p-0 md:p-0 max-w-2xl mx-auto mt-4" style={{ minHeight: 120 }}>
            {/* Robot SVG as profile image */}
            <div className="flex-shrink-0 flex items-center justify-center mt-2">
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center">
                <img
                  src="/assets/bot-table-robot.svg"
                  alt="Bot & Table Robot"
                  className="w-10 h-10 md:w-16 md:h-16"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
            {/* Typewriter animated text */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="bg-[#232526] rounded-xl px-5 py-4 shadow-inner border border-[#333]">
                <InitialTypewriterMessage />
              </div>
            </div>
          </div>
          <div className="mt-8 w-full max-w-lg mx-auto fade-in">
            <h2 className="text-3xl font-bold text-center mb-4" style={{ color: '#db5439' }}>
              Get Your Free Report
            </h2>
            <GooglePlacesAutocomplete onPlaceSelected={(place: google.maps.places.PlaceResult) => {
              setSelectedPlace(place);
              setStep(3); // Go to step 3 as originally designed
            }} />

          </div>
        </div>
      </ContainerScroll>
      
      {/* Scroll Down Button */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={() => {
            const testimonialsSection = document.querySelector('[data-section="testimonials"]');
            if (testimonialsSection) {
              const rect = testimonialsSection.getBoundingClientRect();
              const offsetTop = window.pageYOffset + rect.top - 120; // 120px offset to show the full heading
              window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
              });
            }
          }}
          className="group transition-all duration-300 p-3"
          aria-label="Scroll to see more content"
        >
          <svg 
            className="w-6 h-6 text-orange-600 animate-bounce" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

// Inline Lead Form Component
function InlineLeadForm({ onSubmit }: { onSubmit: (data: { name: string; email: string; revenue: string; hasList: string; listSize: string }) => void }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [revenue, setRevenue] = useState('');
  const [hasList, setHasList] = useState('');
  const [listSize, setListSize] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !revenue || !hasList || (hasList === 'yes' && !listSize)) {
      setError('Please fill out all required fields.');
      return;
    }
    setError('');
    onSubmit({ name, email, revenue, hasList, listSize });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
      <h3 className="text-xl font-bold text-center mb-4 text-gray-800">Get Your FREE Custom Report</h3>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <input
            type="text"
            className="w-2/5 rounded-lg border-2 border-[#bfc8d5] focus:border-[#db5439] px-3 py-2 text-base"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <input
            type="email"
            className="w-3/5 rounded-lg border-2 border-[#bfc8d5] focus:border-[#db5439] px-3 py-2 text-base"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <input
          type="text"
          className="rounded-lg border-2 border-[#bfc8d5] focus:border-[#db5439] px-3 py-2 text-base"
          placeholder="Monthly Revenue (e.g. $10,000)"
          value={revenue}
          onChange={e => {
            const value = e.target.value;
            // Remove all non-digits
            const digits = value.replace(/[^\d]/g, '');
            // Format with commas and dollar sign
            if (digits) {
              const formatted = '$' + digits.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
              setRevenue(formatted);
            } else {
              setRevenue('');
            }
          }}
          required
        />
        <div>
          <label className="block font-semibold mb-1 text-gray-700">Do you have a marketing list?</label>
          <div className="flex gap-2">
            <button 
              type="button" 
              className={`px-4 py-2 rounded-lg font-semibold text-base shadow transition ${hasList === 'yes' ? 'bg-[#db5439] text-white' : 'bg-gray-200 text-gray-700'}`} 
              onClick={() => { setHasList('yes'); }}
            >
              Yes
            </button>
            <button 
              type="button" 
              className={`px-4 py-2 rounded-lg font-semibold text-base shadow transition ${hasList === 'no' ? 'bg-[#db5439] text-white' : 'bg-gray-200 text-gray-700'}`} 
              onClick={() => { setHasList('no'); setListSize(''); }}
            >
              No
            </button>
          </div>
          {hasList === 'yes' && (
            <input
              type="text"
              className="mt-2 rounded-lg border-2 border-[#bfc8d5] focus:border-[#db5439] px-3 py-2 text-base w-full"
              placeholder="How big is your list? (e.g. 1,500)"
              value={listSize}
              onChange={e => {
                const value = e.target.value;
                // Remove all non-digits
                const digits = value.replace(/[^\d]/g, '');
                // Format with commas
                if (digits) {
                  const formatted = digits.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                  setListSize(formatted);
                } else {
                  setListSize('');
                }
              }}
              required
            />
          )}
        </div>
        {error && <div className="text-red-600 text-sm text-center">{error}</div>}
        <button 
          type="submit" 
          className="mt-2 px-8 py-3 rounded-lg bg-[#db5439] text-white font-bold text-xl shadow hover:bg-[#b53e28] transition w-full"
        >
          Get My Report
        </button>
      </form>
    </div>
  );
}

// MainHeading component triggers the confetti callback on mount and passes the heading's bounding rect
const MainHeading = ({ onMount }: { onMount?: (rect: DOMRect) => void }) => {
  const headingRef = React.useRef<HTMLHeadingElement>(null);
  React.useEffect(() => {
    if (onMount && headingRef.current) {
      onMount(headingRef.current.getBoundingClientRect());
    }
    // eslint-disable-next-line
  }, []); // Only run once on mount
  return (
    <h1 ref={headingRef} className="text-4xl md:text-6xl font-bold text-center mb-4">
      See How Much Revenue Your Restaurant Is Losing
    </h1>
  );
}; 