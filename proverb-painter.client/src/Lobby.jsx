import { useState } from 'react';
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

    return (
        <div>
            <div className="lobbyContainer">
                <div className="playersList">
                    <h1 className="centreText">Players: 0 / 6</h1>
                    <div className="horizontalFlex">
                        <div className="avatar smallAvatar"></div>
                        <div id="displayData">{userName}</div>
                    </div>
                </div>
                <form className="lobbyButtons" onSubmit={EnterGame}>
                    <h2>Invite</h2>
                    <button className="startButton" type="submit">Start game</button>
                </form>
            </div>
        </div>
    );
}

export default Lobby;