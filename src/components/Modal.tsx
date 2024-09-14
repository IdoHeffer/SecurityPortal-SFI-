import React from 'react';
import '../styles/Modal.css';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  achievement: { title: string; description: string; iconSrc?: string; icon?: string };
}

const Modal: React.FC<ModalProps> = ({ show, onClose, achievement }) => {
  if (!show) return null; // Don't render if the modal is not open

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        {achievement.iconSrc ? (
          <img
            src={achievement.iconSrc}
            alt={achievement.title}
            className="achievement-icon-large"
          />
        ) : (
          <i className={`${achievement.icon} achievement-icon-large`}></i>
        )}
        <h2>{achievement.title}</h2>
        <p>{achievement.description}</p>
      </div>
    </div>
  );
};

export default Modal;
