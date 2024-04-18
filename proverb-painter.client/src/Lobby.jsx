import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Common.css';
import './Lobby.css';

function Lobby() {
    const navigate = useNavigate();

    const userName = useState(localStorage.getItem('nickname') || 'Loading...');
    const avatarImg = useState(localStorage.getItem('avatar') || '');

    const avatar = document.querySelector('.avatar');
    avatar.style.backgroundImage = `url('../${avatarImg}')`;

    const EnterGame = (e) => {
        e.preventDefault();
        navigate('/game');
    };

    const urlFieldRef = useRef(null);

    const copyToClipboard = () => {
        urlFieldRef.current.select();
        document.execCommand("copy");
        alert("Copied the URL: " + urlFieldRef.current.value);
    };

    return (
        <div className="lobbyContainer">
            <div className="playersList">
                <h1 className="centreText">Players: 0 / 6</h1>
                <div className="horizontalFlex">
                    <div className="avatar smallAvatar"></div>
                    <div id="displayData">{userName}</div>
                </div>
            </div>
            <form className="lobbyButtons" onSubmit={EnterGame}>
                <h2>Invite:</h2>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <input
                        type="text"
                        className="url-field"
                        value="https://example.com"
                        ref={urlFieldRef}
                        readOnly
                    />
                    <i
                        className="fas fa-copy copy-icon"
                        style={{ position: 'absolute', right: '10px', cursor: 'pointer' }}
                        onClick={copyToClipboard}
                    ></i>
                </div>
                <br/>
                <button className="startButton" type="submit">Start game</button>
            </form>
        </div>
    );
}

export default Lobby;