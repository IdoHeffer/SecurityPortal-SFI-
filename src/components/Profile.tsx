import React, { useState } from 'react';
import Badge from './Badge';
import Modal from './Modal'; // Import the Modal
import { Developer } from '../types';
import '../styles/Profile.css';

interface ProfileProps {
  developer: Developer;
}

const Profile: React.FC<ProfileProps> = ({ developer }) => {
  const achievements = [
    {
      title: 'Storage Accounts Master',
      description: 'You have unlocked the hidden potential of Azure Storage Accounts. No secret stays hidden!',
      iconSrc: process.env.PUBLIC_URL + '/img/Storage_Accounts_Master_badge.jpg'
    },
    {
      title: 'VM Guardian',
      description: 'Protected and secured all virtual machines from malicious threats like a true knight!',
      icon: process.env.PUBLIC_URL + '/img/Vm Gurdian.jpeg'
    },
    {
      title: 'Azure Defender',
      description: 'Secured all critical Azure resources. Nothing escapes your watchful eye!',
      icon: process.env.PUBLIC_URL + '/img/AzureDefender2.jpg'
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState<any>(null);

  const handleAchievementClick = (achievement: any) => {
    setSelectedAchievement(achievement);
    setShowModal(true);
  };

  return (
    <div className="container mt-4 text-center">
      <h1 className="mb-4">Profile</h1>
      
      <div className="profile-photo mb-4">
        <img
          src="https://via.placeholder.com/150"
          alt={`${developer.name}'s profile`}
          className="rounded-circle"
          width="150"
          height="150"
        />
      </div>
      
      <div className="progress mb-4" style={{ width: '50%', margin: '0 auto' }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${developer.progress}%` }}
          aria-valuenow={developer.progress}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      <p>{developer.progress}% to next level</p>

      <div className="mt-4">
        <Badge developer={developer} />
      </div>

      <div className="achievements mt-5">
        <h2>Skills & Achievements</h2>
        <div className="achievement-list mt-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="achievement-item d-flex align-items-center mb-3"
              onClick={() => handleAchievementClick(achievement)} // Handle click event
              style={{ cursor: 'pointer' }} // Add pointer cursor for indication
            >
              {achievement.iconSrc ? (
                <img
                  src={achievement.iconSrc}
                  alt={achievement.title}
                  className="achievement-icon-left"
                />
              ) : (
                <i className={`${achievement.icon} achievement-icon`} style={{ fontSize: '24px' }}></i>
              )}
              <div className="achievement-content">
                <h5>{achievement.title}</h5>
                <p className="mb-0">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        achievement={selectedAchievement}
      />
    </div>
  );
};

export default Profile;
