import React from 'react';

const RestaurantStep = ({ value, onChange, showError, darkMode }) => {
  const headingColor = darkMode ? '#7CFCB5' : '#27a1c2';
  const inputBg = darkMode ? '#232526' : '#fff';
  const inputBorder = darkMode ? '#333' : '#db5439';
  const inputText = darkMode ? '#fff' : '#222';
  const placeholder = darkMode ? '#aaa' : '#888';
  return (
    <div style={{ width: '100%' }}>
      <h2 style={{ color: headingColor, fontWeight: 700, fontSize: 24, marginBottom: 24, textAlign: 'center', fontFamily: 'monospace' }}>
        Enter Your Restaurant
      </h2>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
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
        placeholder="Type your restaurant name..."
        autoComplete="off"
      />
      {showError && !value && (
        <div style={{ color: '#db5439', marginTop: 8, fontSize: 15, textAlign: 'center' }}>
          Please select your restaurant.
        </div>
      )}
    </div>
  );
};

export default RestaurantStep; 