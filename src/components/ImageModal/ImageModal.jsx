import Modal from 'react-modal';
import PropTypes from 'prop-types';
import React from 'react';
import './ImageModal.css';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    background: 'transparent',
    padding: 'none',
    border: 'none',
    transform: 'translate(-50%, -50%)',
   
  },
};


export const ImageModal = ({ isOpen, image, description, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      contentLabel='Large size of image'
      style={customStyles}
      closeTimeoutMS={300}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onClose}
      
    >
      <img src={image} alt={description}/> 
    </Modal>
  )
}


ImageModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,            
    description: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };  
 