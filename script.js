document.addEventListener("DOMContentLoaded", () => {
    const dropdownWrappers = document.querySelectorAll(".dropdown-wrapper");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const carouselTrack = document.getElementById("carouselTrack");

    // Mega Menu Dropdowns Toggle
    dropdownWrappers.forEach(wrapper => {
        wrapper.addEventListener("click", (e) => {
            e.stopPropagation();
            dropdownWrappers.forEach(w => {
                if (w !== wrapper) w.classList.remove("open");
            });
            wrapper.classList.toggle("open");
        });
    });

    // Close Dropdowns on Clicking Outside
    document.addEventListener("click", () => {
        dropdownWrappers.forEach(w => w.classList.remove("open"));
    });

    // Template Scroll Controls
    if (carouselTrack && prevBtn && nextBtn) {
        nextBtn.addEventListener("click", () => {
            carouselTrack.scrollBy({ left: 300, behavior: "smooth" });
        });

        prevBtn.addEventListener("click", () => {
            carouselTrack.scrollBy({ left: -300, behavior: "smooth" });
        });
    }

    // Dynamic Edit Template Button Redirect
    const editButtons = document.querySelectorAll(".btn-edit-hover");
    editButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.stopPropagation();
            const card = button.closest(".template-card");
            const templateId = card.getAttribute("data-template");

            // Redirects to editor.html with template ID
            window.location.href = `editor.html?template=${templateId}`;
        });
    });
});