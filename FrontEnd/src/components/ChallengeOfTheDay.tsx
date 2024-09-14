import React from 'react';
import '../styles/ChallengeOfTheDay.css';

const ChallengeOfTheDay: React.FC = () => {
  const code = `
    const API_KEY = 'secret-api-key'; // Replace this secret key
    const config = {
      endpoint: 'https://example.com',
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + API_KEY
      }
    };

    fetch(config.endpoint, config).then(response => response.json()).then(data => console.log(data));
  `;

  return (
    <div className="challenge-container">
      <h1>Challenge of the Day</h1>
      <p>Your task is to find and replace the secret in the code below. Good luck!</p>
      <br></br>
      <br></br>
      <div className="vscode-editor">
        <div className="window-buttons">
          <div className="window-button"></div>
          <div className="window-button yellow"></div>
          <div className="window-button green"></div>
        </div>
        <pre>
          <code>
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default ChallengeOfTheDay;
