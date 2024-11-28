// Utility function to toggle the visibility of an element
export function toggleVisibility(element) {
  if (element.classList.contains('hidden')) {
      element.classList.remove('hidden');
  } else {
      element.classList.add('hidden');
  }
}
