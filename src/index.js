import './styles.css';
import { setupDropdown } from './dropdown';


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.dropdown[data-trigger="click"]').forEach((el) => {
        setupDropdown(el, { trigger: 'click' });
    });

    document.querySelectorAll('.dropdown[data-trigger="hover"]').forEach((el) => {
        setupDropdown(el, { trigger: 'hover' });
    });

    // Global click listener to close all dropdowns (only for click-based dropdowns)
    document.addEventListener('click', () => {
        document.querySelectorAll('.dropdown[data-trigger="click"] .dropdown-menu.visible')
            .forEach((menu) => {
                menu.classList.remove('visible');
            });
    });
});