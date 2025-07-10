import React from 'react';

const formatCurrency = (value) => {
  if (!value) return '';
  // Remove all non-digit characters
  const numeric = value.replace(/[^\d]/g, '');
  if (!numeric) return '';
  // Format with commas
  return '$' + Number(numeric).toLocaleString();
};

const formatNumberWithCommas = (value) => {
  if (!value) return '';
  return Number(value).toLocaleString();
};

const QuestionStep = ({ question, value, onChange, showError, darkMode }) => {
  const questionColor = darkMode ? '#7CFCB5' : '#27a1c2';
  const inputBg = darkMode ? '#232526' : '#fff';
  const inputBorder = darkMode ? '#333' : '#db5439';
  const inputText = darkMode ? '#fff' : '#222';
  const placeholder = darkMode ? '#aaa' : '#888';
  
  // Handler to format and restrict input
  const handleInputChange = (e) => {
    const raw = e.target.value.replace(/[^\d]/g, '');
    onChange(raw); // Store only the numeric value
  };

  // Special handling for marketing list question
  if (question.toLowerCase().includes('marketing list')) {
    const isYes = value && value.yes;
    return (
      <div style={{ width: '100%' }}>
        <div style={{ color: questionColor, fontWeight: 700, fontSize: 22, marginBottom: 24, textAlign: 'center', fontFamily: 'monospace' }}>{question}</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 18 }}>
          <button
            type="button"
            style={{
              background: isYes ? '#7CFCB5' : inputBg,
              color: isYes ? '#181A1B' : inputText,
              border: `1px solid ${inputBorder}`,
              borderRadius: 8,
              padding: '10px 24px',
              fontWeight: 600,
              fontSize: 16,
              cursor: 'pointer',
              outline: 'none',
              boxShadow: isYes ? '0 0 0 2px #7CFCB5' : 'none',
              transition: 'all 0.2s',
            }}
            onClick={() => onChange({ yes: true, count: value && value.count ? value.count : '' })}
          >
            Yes
          </button>
          <button
            type="button"
            style={{
              background: value === 'no' ? '#7CFCB5' : inputBg,
              color: value === 'no' ? '#181A1B' : inputText,
              border: `1px solid ${inputBorder}`,
              borderRadius: 8,
              padding: '10px 24px',
              fontWeight: 600,
              fontSize: 16,
              cursor: 'pointer',
              outline: 'none',
              boxShadow: value === 'no' ? '0 0 0 2px #7CFCB5' : 'none',
              transition: 'all 0.2s',
            }}
            onClick={() => onChange('no')}
          >
            No
          </button>
        </div>
        {isYes && (
          <div style={{ marginTop: 8 }}>
            <div style={{ color: questionColor, fontWeight: 500, fontSize: 16, marginBottom: 8, textAlign: 'center', fontFamily: 'monospace' }}>How many people are on your list?</div>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={formatNumberWithCommas(value.count || '')}
              onChange={e => {
                // Only allow numbers
                const raw = e.target.value.replace(/[^\d]/g, '');
                onChange({ yes: true, count: raw });
              }}
              style={{
                width: '100%',
                background: inputBg,
                color: inputText,
                border: `1px solid ${inputBorder}`,
                borderRadius: 8,
                fontSize: 18,
                padding: '12px 16px',
                fontFamily: 'monospace',
                marginBottom: 8,
              }}
              placeholder="Enter number of people"
            />
            {showError && !value.count && (
              <div style={{ color: '#db5439', marginTop: 4, fontSize: 15 }}>Please enter the number of people.</div>
            )}
          </div>
        )}
        {showError && !value && (
          <div style={{ color: '#db5439', marginTop: 4, fontSize: 15 }}>Please select Yes or No.</div>
        )}
      </div>
    );
  }

  // Special handling for AI usage question
  if (question.toLowerCase().includes('currently use ai')) {
    return (
      <div style={{ width: '100%' }}>
        <div style={{ color: questionColor, fontWeight: 700, fontSize: 22, marginBottom: 24, textAlign: 'center', fontFamily: 'monospace' }}>{question}</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 18 }}>
          <button
            type="button"
            style={{
              background: value === 'yes' ? '#7CFCB5' : inputBg,
              color: value === 'yes' ? '#181A1B' : inputText,
              border: `1px solid ${inputBorder}`,
              borderRadius: 8,
              padding: '10px 24px',
              fontWeight: 600,
              fontSize: 16,
              cursor: 'pointer',
              outline: 'none',
              boxShadow: value === 'yes' ? '0 0 0 2px #7CFCB5' : 'none',
              transition: 'all 0.2s',
            }}
            onClick={() => onChange('yes')}
          >
            Yes
          </button>
          <button
            type="button"
            style={{
              background: value === 'no' ? '#7CFCB5' : inputBg,
              color: value === 'no' ? '#181A1B' : inputText,
              border: `1px solid ${inputBorder}`,
              borderRadius: 8,
              padding: '10px 24px',
              fontWeight: 600,
              fontSize: 16,
              cursor: 'pointer',
              outline: 'none',
              boxShadow: value === 'no' ? '0 0 0 2px #7CFCB5' : 'none',
              transition: 'all 0.2s',
            }}
            onClick={() => onChange('no')}
          >
            No
          </button>
        </div>
        {showError && !value && (
          <div style={{ color: '#db5439', marginTop: 4, fontSize: 15 }}>Please select Yes or No.</div>
        )}
      </div>
    );
  }

  // Special handling for business type question
  if (question.toLowerCase().includes('type of business')) {
    return (
      <div style={{ width: '100%' }}>
        <div style={{ color: questionColor, fontWeight: 700, fontSize: 22, marginBottom: 24, textAlign: 'center', fontFamily: 'monospace' }}>{question}</div>
        <input
          type="text"
          value={value || ''}
          onChange={e => onChange(e.target.value)}
          style={{
            width: '100%',
            background: inputBg,
            color: inputText,
            border: `1px solid ${inputBorder}`,
            borderRadius: 8,
            fontSize: 18,
            padding: '12px 16px',
            fontFamily: 'monospace',
            marginBottom: 8,
          }}
          placeholder="e.g. Nail salon, Restaurant, Retail store"
        />
        {showError && !value && (
          <div style={{ color: '#db5439', marginTop: 4, fontSize: 15 }}>Please enter your business type.</div>
        )}
      </div>
    );
  }

  return (
    <div style={{ width: '100%' }}>
      <h2 style={{ color: questionColor, fontWeight: 700, fontSize: 22, marginBottom: 24, textAlign: 'center', fontFamily: 'monospace' }}>
        {question}
      </h2>
      <input
        type="text"
        value={formatCurrency(value)}
        onChange={handleInputChange}
        style={{
          width: '100%',
          padding: '16px',
          borderRadius: 12,
          border: `1px solid ${inputBorder}`,
          fontSize: 18,
          outline: 'none',
          marginBottom: 8,
          background: inputBg,
          color: inputText,
          fontFamily: 'monospace',
        }}
        placeholder="$0"
        autoComplete="off"
      />
      {showError && !value && (
        <div style={{ color: '#db5439', marginTop: 8, fontSize: 15, textAlign: 'center' }}>
          This field is required.
        </div>
      )}
    </div>
  );
};

const LIGHT_GREEN = '#7CFCB5';
const DARK_BG = '#181A1B';

export default QuestionStep; 