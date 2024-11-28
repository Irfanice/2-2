import { toggleVisibility } from './App.js';

const toggleButton = document.getElementById('toggleButton');
const message = document.getElementById('message');

toggleButton.addEventListener('click', () => {
    toggleVisibility(message);
});
