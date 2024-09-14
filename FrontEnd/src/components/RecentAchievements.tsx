import React from 'react';

const RecentAchievements: React.FC = () => {
  return (
    <div className="recent-achievements mb-4">
      <h2>Recent Achievements</h2>
      <ul>
        {/* Example achievements */}
        <li>VM Guardian - Achieved on 2024-09-10</li>
        <li>Azure Defender - Achieved on 2024-09-08</li>
      </ul>
    </div>
  );
};

export default RecentAchievements;
