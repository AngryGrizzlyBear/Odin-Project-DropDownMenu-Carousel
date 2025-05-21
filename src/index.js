import './styles.css';
import { setupDropdown } from './dropdown';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.dropdown').forEach((dropdownElement) => {
    setupDropdown(dropdownElement);
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-menu.visible').forEach((menu) => {
      menu.classList.remove('visible');
    });
  });
});
