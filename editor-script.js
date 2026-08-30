document.addEventListener("DOMContentLoaded", () => {
    // Sidebar Tab Switching Logic
    const toolText = document.getElementById("toolText");
    const toolThemes = document.getElementById("toolThemes");

    const panelText = document.getElementById("panelText");
    const panelThemes = document.getElementById("panelThemes");

    const closePanels = document.querySelectorAll(".close-panel");

    toolText.addEventListener("click", () => {
        panelText.classList.add("active");
        panelThemes.classList.remove("active");
        toolText.classList.add("active");
        toolThemes.classList.remove("active");
    });

    toolThemes.addEventListener("click", () => {
        panelThemes.classList.add("active");
        panelText.classList.remove("active");
        toolThemes.classList.add("active");
        toolText.classList.remove("active");
    });

    closePanels.forEach(btn => {
        btn.addEventListener("click", () => {
            panelText.classList.remove("active");
            panelThemes.classList.remove("active");
        });
    });

    // Dynamic Theme Color Change Engine
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

    // PDF Download Logic
    const downloadBtn = document.getElementById('downloadPdfBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            const element = document.getElementById('resumeCanvas');
            const opt = {
                margin: 0.5,
                filename: 'My_Resume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().set(opt).from(element).save();
        });
    }
});