import { toggleVisibility } from './app.js';

const toggleButton = document.getElementById('toggleButton');
const message = document.getElementById('message');

toggleButton.addEventListener('click', () => {
    toggleVisibility(message);
});
