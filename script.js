const button = document.getElementById('cta-button');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  message.textContent = 'Thanks for trying the demo!';
});
