function showSection() {
  const tabs = document.querySelectorAll('.app_tabs-item a');
  const sections = document.querySelectorAll('section');
  const header = document.querySelector('.app_title');

  tabs.forEach(tab => {
      tab.addEventListener('click', event => {
          event.preventDefault();
          sections.forEach(section => section.classList.add('hidden'));
          const sectionId = tab.dataset.section;
          const targetSection = document.getElementById(sectionId);
          if (targetSection) {
              targetSection.classList.remove('hidden');
          }
          const headerText = tab.getAttribute('aria-label');
          if (header) {
              header.textContent = headerText;
          }
          tabs.forEach(t => t.parentElement.classList.remove('is-active'));
          tab.parentElement.classList.add('is-active');
      });
  });
}

document.addEventListener('DOMContentLoaded', showSection);