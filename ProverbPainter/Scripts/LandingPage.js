import { ChangeAvatar } from './ChangeAvatar.js';

function main() {
  document
    .getElementById('nickname')
    .addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        EnterLobby();
      }
    });

  ChangeAvatar();

  var regenerateAvatarButton = document.querySelector('.regenerateAvatar');
  if (regenerateAvatarButton) {
    regenerateAvatarButton.addEventListener('click', ChangeAvatar);
  }

  var lobbyButton = document.querySelector('.startButton');
  if (lobbyButton) {
    lobbyButton.addEventListener('click', EnterLobby);
  }
}

function EnterLobby() {
  let nickname = document.getElementById('nickname').value;
  localStorage.setItem('nickname', nickname);
  window.location.href = 'lobby.html';
}

document.addEventListener('DOMContentLoaded', main);
