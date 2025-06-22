import React, { useState } from 'react';
const Consent: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(true);
  const handleConsent = () => {
    setIsModalVisible(false);
  };

  if (!isModalVisible) return null;

  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        <h2 style={styles.header}>Consent Required</h2>
        <p style={styles.description}>
          This AI-powered calculator uses Google Gemini Splash AI to process your input drawings and expressions.
          By continuing, you agree to Gemini Splash consent.
        </p>
        <div style={styles.buttonContainer}>
          <button style={styles.button} onClick={handleConsent}>I Agree</button>
        </div>
      </div>
    </div>
  );
};
const styles: { [key: string]: React.CSSProperties } = {
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000, 
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '30px 40px',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    maxWidth: '500px',
    width: '100%',
    animation: 'fadeIn 0.3s ease-out',
  },
  header: {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#333',
  },
  description: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '20px',
    lineHeight: '1.5',
    padding: '0 10px',
  },
  buttonContainer: {
    marginTop: '20px',
  },
  button: {
    padding: '12px 25px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: 'black',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s',
  },
  buttonHover: {
    backgroundColor: '#45a049',
  },
 
};


export default Consent;
