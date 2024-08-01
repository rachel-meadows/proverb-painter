import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/Common.css';
import '../assets/Lobby.css';
import { addPlayer } from '../services/playerService';

function Lobby() {
  const navigate = useNavigate();

  const userName = useState(localStorage.getItem('nickname') || 'Loading...');
  const avatarImg = useState(localStorage.getItem('avatar') || '');
  const roomId = "1"; // Todo
  const isAdmin = true; // Todo

  const avatar = document.querySelector('.common-avatar');
  avatar.style.backgroundImage = `url('../${avatarImg}')`;

  async function EnterGame(e) {
      e.preventDefault();
      await addPlayer(localStorage.getItem('nickname'), localStorage.getItem('avatar'), roomId, isAdmin);
    navigate('/game');
  }

  const urlFieldRef = useRef(null);

  const copyToClipboard = (e) => {
    const inputElement = e.target.parentNode.previousSibling;
    inputElement.select();
    document.execCommand('copy');
  };

  return (
    <div className="lobbyContainer">
      <div className="playersList">
        <h1 className="centreText">Players: 0 / 6</h1>
        <div className="common-horizontalFlex">
          <div className="common-avatar smallAvatar"></div>
          <p className="displayData">{userName}</p>
        </div>
      </div>
      <form className="lobbyButtons" onSubmit={EnterGame}>
        <h2>Invite:</h2>
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <input
            type="text"
            id="inviteLink"
            className="url-field"
            value="https://example.com"
            ref={urlFieldRef}
            readOnly
          />
          <span
            id="inviteLink"
            onClick={copyToClipboard}
            className="outerCopyIcon"
          >
            📄<span className="innerCopyIcon">📄</span>
          </span>
        </div>
        <br />
        <button className="common-startButton" type="submit">
          Start game
        </button>
      </form>
    </div>
  );
}

export default Lobby;
