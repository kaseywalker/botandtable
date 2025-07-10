import React from 'react';

const isValidEmail = email => /.+@.+\..+/.test(email);

const ContactStep = ({ name, email, onNameChange, onEmailChange, showError, darkMode }) => {
  const headingColor = darkMode ? '#7CFCB5' : '#27a1c2';
  const inputBg = darkMode ? '#232526' : '#fff';
  const inputBorder = darkMode ? '#333' : '#db5439';
  const inputText = darkMode ? '#fff' : '#222';
  const placeholder = darkMode ? '#aaa' : '#888';
  return (
    <div style={{ width: '100%' }}>
      <h2 style={{ color: headingColor, fontWeight: 700, fontSize: 22, marginBottom: 24, textAlign: 'center', fontFamily: 'monospace' }}>
        Enter Your Name & Email
      </h2>
      <input
        type="text"
        value={name}
        onChange={e => onNameChange(e.target.value)}
        style={{
          width: '100%',
          padding: '14px',
          borderRadius: 12,
          border: `1px solid ${inputBorder}`,
          fontSize: 18,
          outline: 'none',
          marginBottom: 8,
          background: inputBg,
          color: inputText,
          fontFamily: 'monospace',
        }}
        placeholder="Your Name"
        autoComplete="off"
      />
      {showError && !name && (
        <div style={{ color: '#db5439', marginBottom: 8, fontSize: 15, textAlign: 'center' }}>
          Name is required.
        </div>
      )}
      <input
        type="email"
        value={email}
        onChange={e => onEmailChange(e.target.value)}
        style={{
          width: '100%',
          padding: '14px',
          borderRadius: 12,
          border: `1px solid ${inputBorder}`,
          fontSize: 18,
          outline: 'none',
          marginBottom: 8,
          background: inputBg,
          color: inputText,
          fontFamily: 'monospace',
        }}
        placeholder="Your Email"
        autoComplete="off"
      />
      {showError && (!email || !isValidEmail(email)) && (
        <div style={{ color: '#db5439', fontSize: 15, textAlign: 'center' }}>
          { !email ? 'Email is required.' : 'Please enter a valid email.' }
        </div>
      )}
    </div>
  );
};

export default ContactStep; 