function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove('hidden');
    }

    const links = document.querySelectorAll('.tabs2 ul li');
    links.forEach(link => {
        link.classList.remove('is-active');
    });

    const activeLink = Array.from(links).find(link => link.querySelector('a').getAttribute('onclick').includes(sectionId));
    if (activeLink) {
        activeLink.classList.add('is-active');
    }
}