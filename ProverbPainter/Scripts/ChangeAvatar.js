function ChangeAvatar() {
  const avatar = document.querySelector('.avatar');

  const avatars = [
    'Public/images/Avatar1.jpeg',
    'Public/images/Avatar2.jpeg',
    'Public/images/Avatar3.jpeg',
    'Public/images/Avatar4.jpeg',
    'Public/images/Avatar5.jpeg',
    'Public/images/Avatar6.jpeg',
  ];

  const randomIndex = Math.floor(Math.random() * avatars.length);
  const randomImage = avatars[randomIndex];

  avatar.style.backgroundImage = `url('${randomImage}')`;
}
