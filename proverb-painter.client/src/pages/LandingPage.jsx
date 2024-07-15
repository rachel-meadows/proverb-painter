import { ping } from '../services/healthcheckService';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import '../assets/Common.css';
import '../assets/LandingPage.css';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkHealth = async () => {
      try {
        await ping();
      } catch (error) {
        console.error('Error reaching backend API.');
      }
    };

    checkHealth();
  }, []);

  const EnterLobby = (e) => {
    e.preventDefault();
    let nickname = document.getElementById('nickname').value;
    localStorage.setItem('nickname', nickname);
    navigate('/lobby');
  };

  return (
    <body>
      <div className="landingPage-pageContainer">
        <div className="landingPage-topContainer">
          <h1>Proverb Painter</h1>
          <h2>A picture is worth a thousand words...</h2>
        </div>
        <div className="landingPage-bottomContainer">
          <div className="landingPage-leftContainer">
            <div className="common-horizontalFlex">
              <div className="common-avatar">
                <button className="landingPage-regenerateAvatar">⟳</button>
              </div>
              <form id="landingPage-enterLobby" onSubmit={EnterLobby}>
                <input
                  type="text"
                  id="nickname"
                  name="nickname"
                  placeholder="Nickname"
                />
                <button className="common-startButton" type="submit">
                  Start
                </button>
              </form>
            </div>
          </div>
          <div className="landingPage-rightContainer">
            <p>
              Start a game and try to figure out what proverb is on display. You
              get points for guessing right, making a drawing that other people
              guess, and coming up with funny guesses!
            </p>
          </div>
        </div>
        <script src="../Scripts/LandingPage.js" type="module"></script>
      </div>
    </body>
  );
}

function main() {
  document.getElementById('nickname');

  ChangeAvatar();

  var regenerateAvatarButton = document.querySelector('.regenerateAvatar');
  if (regenerateAvatarButton) {
    regenerateAvatarButton.addEventListener('click', ChangeAvatar);
  }
}

function ChangeAvatar() {
  const avatar = document.querySelector('.avatar');

  const avatars = [
    '/avatars/Avatar1.jpeg',
    '/avatars/Avatar2.jpeg',
    '/avatars/Avatar3.jpeg',
    '/avatars/Avatar4.jpeg',
    '/avatars/Avatar5.jpeg',
    '/avatars/Avatar6.jpeg',
  ];

  const randomIndex = Math.floor(Math.random() * avatars.length);
  const randomImage = avatars[randomIndex];

  localStorage.setItem('avatar', randomImage);
  if (avatar) avatar.style.backgroundImage = `url('${randomImage}')`;
}

document.addEventListener('DOMContentLoaded', main);

export default App;
