function main() {
  var avatarImg = localStorage.getItem('avatar');
  var nickname = localStorage.getItem('nickname');

  var lobbyTestDisplay = document.getElementById('displayData');

  if (lobbyTestDisplay && nickname) {
    lobbyTestDisplay.textContent = nickname;
  } else {
    lobbyTestDisplay.textContent = 'No data found in local storage.';
  }

  const avatar = document.querySelector('.avatar');
  avatar.style.backgroundImage = `url('../${avatarImg}')`;
}

document.addEventListener('DOMContentLoaded', main);
