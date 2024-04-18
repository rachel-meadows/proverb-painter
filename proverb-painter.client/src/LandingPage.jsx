import { useNavigate } from 'react-router-dom';
import './Common.css';

function App() {
    const navigate = useNavigate();

    const EnterLobby = (e) => {
        e.preventDefault();
        let nickname = document.getElementById('nickname').value;
        localStorage.setItem('nickname', nickname);
        navigate('/lobby');
    };

    return (
        <body>
            <div className="pageContainer">
                <div className="topContainer">
                    <h1>Proverb Painter</h1>
                    <h2>A picture is worth a thousand words...</h2>
                </div>
                <div className="bottomContainer">
                    <div className="leftContainer">
                        <div className="horizontalFlex">
                            <div className="avatar">
                                <button className="regenerateAvatar">
                                    ⟳
                                </button>
                            </div>
                            <form id="enterLobby" onSubmit={EnterLobby}>
                                <input type="text" id="nickname" name="nickname" placeholder="Nickname" />
                                <button className="startButton" type="submit">Start</button>
                            </form>
                        </div>
                    </div>
                    <div className="rightContainer">
                        <p>Start a game and try to figure out what proverb is on display. You get points
                            for guessing right, making a drawing that other people guess, and coming up with funny
                            guesses!</p>
                    </div>
                </div>
                <script src="../Scripts/LandingPage.js" type="module"></script>
            </div>
        </body>
    );
}

function main() {
    document
        .getElementById('nickname')

    ChangeAvatar();

    var regenerateAvatarButton = document.querySelector('.regenerateAvatar');
    if (regenerateAvatarButton) {
        regenerateAvatarButton.addEventListener('click', ChangeAvatar);
    }
}

function ChangeAvatar() {
    const avatar = document.querySelector('.avatar');

    const avatars = [
        'public/avatars/Avatar1.jpeg',
        'public/avatars/Avatar2.jpeg',
        'public/avatars/Avatar3.jpeg',
        'public/avatars/Avatar4.jpeg',
        'public/avatars/Avatar5.jpeg',
        'public/avatars/Avatar6.jpeg',
    ];

    const randomIndex = Math.floor(Math.random() * avatars.length);
    const randomImage = avatars[randomIndex];

    localStorage.setItem('avatar', randomImage);
    avatar.style.backgroundImage = `url('${randomImage}')`;
}

document.addEventListener('DOMContentLoaded', main);


export default App;