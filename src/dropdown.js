export function setupDropdown(dropdownElement, options = { trigger: 'click' }) {
  const toggleButton = dropdownElement.querySelector('.dropdown-toggle');
  const menu = dropdownElement.querySelector('.dropdown-menu');
  if (!toggleButton || !menu) return;

  if (options.trigger === 'hover') {
    dropdownElement.addEventListener('mouseenter', () => {
      menu.classList.add('visible');
    });

    dropdownElement.addEventListener('mouseleave', () => {
      menu.classList.remove('visible');
    });
  } else {
    toggleButton.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('visible');
    });
  }
}
