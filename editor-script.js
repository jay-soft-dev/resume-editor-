document.addEventListener("DOMContentLoaded", () => {

    // -------------------------------------------------------------
    // 1. AUTO-CLEAR PLACEHOLDER LOGIC
    // -------------------------------------------------------------
    const editableElements = document.querySelectorAll('#resumeCanvas [contenteditable="true"], .editable-field, .resume-paper [contenteditable="true"], [contenteditable="true"]');

    editableElements.forEach(element => {
        // Save initial sample text
        element.dataset.initialText = element.innerText.trim();

        // Clear text on focus if it matches the initial placeholder text
        element.addEventListener("focus", function () {
            const currentText = this.innerText.trim();
            if (currentText === this.dataset.initialText) {
                this.innerText = "";
            }
        });

        // Restore initial text on blur if empty; otherwise update saved initial text
        element.addEventListener("blur", function () {
            const currentText = this.innerText.trim();
            if (currentText === "") {
                this.innerText = this.dataset.initialText;
            } else {
                this.dataset.initialText = currentText;
            }
        });
    });

    // -------------------------------------------------------------
    // 2. SIDEBAR TAB SWITCHING LOGIC
    // -------------------------------------------------------------
    const toolText = document.getElementById("toolText");
    const toolThemes = document.getElementById("toolThemes");

    const panelText = document.getElementById("panelText");
    const panelThemes = document.getElementById("panelThemes");

    const closePanels = document.querySelectorAll(".close-panel");

    if (toolText && panelText) {
        toolText.addEventListener("click", () => {
            panelText.classList.add("active");
            if (panelThemes) panelThemes.classList.remove("active");
            toolText.classList.add("active");
            if (toolThemes) toolThemes.classList.remove("active");
        });
    }

    if (toolThemes && panelThemes) {
        toolThemes.addEventListener("click", () => {
            panelThemes.classList.add("active");
            if (panelText) panelText.classList.remove("active");
            toolThemes.classList.add("active");
            if (toolText) toolText.classList.remove("active");
        });
    }

    closePanels.forEach(btn => {
        btn.addEventListener("click", () => {
            if (panelText) panelText.classList.remove("active");
            if (panelThemes) panelThemes.classList.remove("active");
        });
    });

    // -------------------------------------------------------------
    // 3. DYNAMIC THEME COLOR CHANGE ENGINE
    // -------------------------------------------------------------
    const themeOptions = document.querySelectorAll(".theme-option");
    const resName = document.getElementById("resName");

    themeOptions.forEach(option => {
        option.addEventListener("click", () => {
            const chosenColor = option.getAttribute("data-color");
            if (resName && chosenColor) {
                resName.style.color = chosenColor;
            }
        });
    });

    // -------------------------------------------------------------
    // 4. PDF DOWNLOAD LOGIC
    // -------------------------------------------------------------
    const downloadBtn = document.getElementById('downloadPdfBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            const element = document.getElementById('resumeCanvas');
            if (element) {
                const opt = {
                    margin: 0.5,
                    filename: 'My_Resume.pdf',
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 2 },
                    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
                };
                html2pdf().set(opt).from(element).save();
            }
        });
    }
});