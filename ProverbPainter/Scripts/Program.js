import { ChangeAvatar } from './ChangeAvatar.js';

function main() {
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

document.addEventListener('DOMContentLoaded', function () {
  var avatar = localStorage.getItem('avatar');
  var nickname = localStorage.getItem('nickname');

  var lobbyTestDisplay = document.getElementById('displayData');

  if (lobbyTestDisplay && nickname) {
    lobbyTestDisplay.textContent = nickname;
  } else {
    lobbyTestDisplay.textContent = 'No data found in local storage.';
  }
});

document.addEventListener('DOMContentLoaded', main);
