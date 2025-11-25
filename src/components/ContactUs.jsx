import React, { useState } from 'react';

const WhatsAppContactForm = () => {
  const [name, setName] = useState('');
  const myNumber = '8688148518';

  const generateWhatsAppLink = () => {
    const msg = encodeURIComponent(`Hello, my name is ${name}`);
    return `https://wa.me/${myNumber}?text=${msg}`;
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftPanel}>
        <h2 style={styles.heading}>Let's Chat on WhatsApp!</h2>
        <p style={styles.subText}>
          Drop your name below and we’ll start the conversation.
        </p>
        {/* Optional: insert illustration or brand visual here */}
      </div>
      <div style={styles.rightPanel}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <a
          href={generateWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          Chat Now
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    maxWidth: '800px',
    margin: '10%',
    padding: '2rem',
    background: '#f9f9f9',
    borderRadius: '8px',
  },
  leftPanel: {
    flex: 1,
    paddingRight: '1rem',
  },
  rightPanel: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  heading: {
    color: '#333',
    marginBottom: '0.5rem',
  },
  subText: {
    color: '#555',
  },
  input: {
    padding: '0.75rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '1rem',
  },
  button: {
    padding: '0.75rem',
    background: '#25D366',
    color: '#fff',
    borderRadius: '4px',
    textAlign: 'center',
    fontWeight: 'bold',
    textDecoration: 'none',
    fontSize: '1rem',
  },
};

export default WhatsAppContactForm;
