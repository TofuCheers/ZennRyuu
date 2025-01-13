// Platform button interaction
const platforms = document.querySelectorAll('.platform');

platforms.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const platformName = button.getAttribute('data-platform');
    alert(`You clicked on ${platformName}!`);
  });
});

// Smooth animation for profile card
const profileCard = document.querySelector('.profile-card');
profileCard.addEventListener('mouseover', () => {
  profileCard.style.boxShadow = '0 15px 25px rgba(0, 0, 0, 0.3)';
});
profileCard.addEventListener('mouseout', () => {
  profileCard.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
});