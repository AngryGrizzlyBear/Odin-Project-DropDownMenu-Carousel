export function setupDropdown(dropdownElement) {
  const toggleButton = dropdownElement.querySelector('.dropdown-toggle');
  const menu = dropdownElement.querySelector('.dropdown-menu');

  toggleButton.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('visible');
  });

  document.addEventListener('click', (e) => {
    if (!dropdownElement.contains(e.target)) {
      menu.classList.remove('visible');
    }
  });
}
