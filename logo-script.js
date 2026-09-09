function generateLogo() {
    const name = document.getElementById('brandName').value;
    const tag = document.getElementById('tagline').value;
    const icon = document.getElementById('iconSelect').value;
    const font = document.getElementById('fontSelect').value;
    const primaryColor = document.getElementById('primaryColor').value;
    const bgColor = document.getElementById('bgColor').value;

    const logoCard = document.getElementById('logoCard');
    const logoTitle = document.getElementById('logoTitle');
    const logoSubtitle = document.getElementById('logoSubtitle');
    const logoIcon = document.getElementById('logoIcon');

    // Live Styles Updating
    logoCard.style.backgroundColor = bgColor;
    
    logoTitle.innerText = name || "My Brand";
    logoTitle.style.color = primaryColor;
    logoTitle.style.fontFamily = font;

    logoSubtitle.innerText = tag || "";
    logoSubtitle.style.color = primaryColor;
    logoSubtitle.style.fontFamily = font;

    logoIcon.innerText = icon;
}

// Download Canvas Image
function downloadPNG() {
    const logoCard = document.getElementById('logoCard');

    html2canvas(logoCard, { scale: 3 }).then(canvas => {
        const a = document.createElement('a');
        a.href = canvas.toDataURL('image/png');
        a.download = 'My-Logo.png';
        a.click();
    });
}