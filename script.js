document.addEventListener("DOMContentLoaded", () => {
    // 1. MEGA MENU DROPDOWNS LOGIC
    const dropdownWrappers = document.querySelectorAll(".dropdown-wrapper");

    dropdownWrappers.forEach(wrapper => {
        wrapper.addEventListener("click", (e) => {
            dropdownWrappers.forEach(w => {
                if (w !== wrapper) w.classList.remove("open");
            });
            wrapper.classList.toggle("open");
        });
    });

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".dropdown-wrapper")) {
            dropdownWrappers.forEach(w => w.classList.remove("open"));
        }
    });

    // 2. CAROUSEL SCROLL CONTROLS
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const carouselTrack = document.getElementById("carouselTrack");

    if (carouselTrack && prevBtn && nextBtn) {
        nextBtn.addEventListener("click", (e) => {
            e.preventDefault();
            carouselTrack.scrollBy({ left: 300, behavior: "smooth" });
        });

        prevBtn.addEventListener("click", (e) => {
            e.preventDefault();
            carouselTrack.scrollBy({ left: -300, behavior: "smooth" });
        });
    }

    // 3. EDIT TEMPLATE & CREATE MENU OPTIONS REDIRECT
    const editButtons = document.querySelectorAll(".btn-edit-hover");
    editButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.stopPropagation();
            const card = button.closest(".template-card");
            if (card) {
                const templateId = card.getAttribute("data-template");
                window.location.href = `editor.html?template=${templateId}`;
            }
        });
    });

    // Create Mega Menu List Items Redirect Logic (Updated for Logo Page)
    const createMenuOptions = document.querySelectorAll(".mega-menu-container .menu-column ul li"); 
    createMenuOptions.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const optionText = item.textContent.trim();
            
            // Redirect to logo.html if user clicks on "Logo" or "Generate Logo"
            if (optionText === "Logo" || optionText === "Generate Logo") {
                window.location.href = "logo.html";
            } else {
                // Redirect other options to editor.html with type parameter
                const optionSlug = optionText.toLowerCase().replace(/\s+/g, '-');
                window.location.href = `editor.html?type=${optionSlug}`;
            }
        });
    });

    // 4. SIGN IN & SIGN UP MODAL & TAB LOGIC
    const authModal = document.getElementById("authModal");
    const openAuthBtn = document.getElementById("openAuthBtn");
    const closeAuthModal = document.getElementById("closeAuthModal");
    const aiAssistantBtn = document.querySelector(".ai-assistant-btn");

    const tabSignInBtn = document.getElementById("tabSignInBtn");
    const tabSignUpBtn = document.getElementById("tabSignUpBtn");
    const signInView = document.getElementById("signInView");
    const signUpView = document.getElementById("signUpView");

    const radioEmail = document.getElementById("radioEmail");
    const radioPhone = document.getElementById("radioPhone");
    const emailSignUpForm = document.getElementById("emailSignUpForm");
    const phoneSignUpForm = document.getElementById("phoneSignUpForm");

    // Modal Display Functions
    function showModal() {
        if (authModal) authModal.classList.add("active");
    }

    function hideModal() {
        if (authModal) authModal.classList.remove("active");
    }

    if (openAuthBtn) openAuthBtn.addEventListener("click", (e) => { e.preventDefault(); showModal(); });
    if (aiAssistantBtn) aiAssistantBtn.addEventListener("click", (e) => { e.preventDefault(); showModal(); });
    if (closeAuthModal) closeAuthModal.addEventListener("click", hideModal);

    window.addEventListener("click", (e) => {
        if (e.target === authModal) hideModal();
    });

    // Switch between Sign In and Sign Up Tabs
    if (tabSignInBtn && tabSignUpBtn) {
        tabSignInBtn.addEventListener("click", () => {
            tabSignInBtn.classList.add("active");
            tabSignUpBtn.classList.remove("active");
            signInView.classList.add("active");
            signUpView.classList.remove("active");
        });

        tabSignUpBtn.addEventListener("click", () => {
            tabSignUpBtn.classList.add("active");
            tabSignInBtn.classList.remove("active");
            signUpView.classList.add("active");
            signInView.classList.remove("active");
        });
    }

    // Switch between Email and Phone OTP Sign Up options
    if (radioEmail && radioPhone) {
        radioEmail.addEventListener("change", () => {
            emailSignUpForm.classList.remove("hidden");
            phoneSignUpForm.classList.add("hidden");
        });

        radioPhone.addEventListener("change", () => {
            phoneSignUpForm.classList.remove("hidden");
            emailSignUpForm.classList.add("hidden");
        });
    }
});