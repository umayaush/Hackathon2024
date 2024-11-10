'use client';

import React from 'react';

const Modal = ({ isOpen, closeModal, phrase, meaning, context, example }) => {
  if (!isOpen) return null;

  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.modal}>
        <button style={modalStyles.closeButton} onClick={closeModal}>X</button>
        <h2>Details</h2>
        <div style={modalStyles.content}>
          <h3>Phrase: {phrase}</h3>
          <p><strong>Meaning:</strong> {meaning}</p>
          <p><strong>Context:</strong> {context}</p>
          <p><strong>Example:</strong> {example}</p>
        </div>
      </div>
    </div>
  );
};

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    maxWidth: '600px',
    width: '100%',
    boxSizing: 'border-box',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '16px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  content: {
    marginTop: '20px',
    textAlign: 'left',
  }
};

export default Modal;
