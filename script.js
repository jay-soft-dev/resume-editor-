// Nav Item Dropdown toggle logic
document.addEventListener('DOMContentLoaded', () => {
    const navItemWrapper = document.querySelector('.nav-item-wrapper');

    navItemWrapper.addEventListener('click', (e) => {
        navItemWrapper.classList.toggle('open');
        e.stopPropagation();
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        navItemWrapper.classList.remove('open');
    });
});