import './styles.css';
import { setupDropdown } from './dropdown';

document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(setupDropdown);
});
