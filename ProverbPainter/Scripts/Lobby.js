function main() {
  var avatar = localStorage.getItem('avatar');
  var nickname = localStorage.getItem('nickname');

  var lobbyTestDisplay = document.getElementById('displayData');

  if (lobbyTestDisplay && nickname) {
    lobbyTestDisplay.textContent = nickname;
  } else {
    lobbyTestDisplay.textContent = 'No data found in local storage.';
  }

  console.log('avatar', avatar);
  avatar.style.backgroundImage = `url('../${randomImage}')`;
}

document.addEventListener('DOMContentLoaded', main);
