document.addEventListener('DOMContentLoaded', () => {
    
    // Select all dropdown elements in the navbar
    const dropdowns = document.querySelectorAll('.dropdown-wrapper');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            // Close all other open dropdowns first
            dropdowns.forEach(other => {
                if (other !== dropdown) {
                    other.classList.remove('open');
                }
            });

            // Toggle current dropdown open/close
            dropdown.classList.toggle('open');
            
            // Prevent click from bubbling up to document
            e.stopPropagation();
        });
    });

    // Close dropdowns when clicking anywhere outside
    document.addEventListener('click', () => {
        dropdowns.forEach(dropdown => dropdown.classList.remove('open'));
    });

    // Keyboard Navigation: Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            dropdowns.forEach(dropdown => dropdown.classList.remove('open'));
        }
    });

    // Carousel Scroll Logic
    const carouselTrack = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (carouselTrack && prevBtn && nextBtn) {
        nextBtn.addEventListener('click', () => {
            carouselTrack.scrollBy({ left: 300, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            carouselTrack.scrollBy({ left: -300, behavior: 'smooth' });
        });
    }
});