document.getElementById('downloadBtn').addEventListener('click', function() {
    const cvs = [
        "assets/cv/CV_Dev.pdf",
        "assets/cv/CV_TECH.pdf",
        "assets/cv/CV_DevOps.pdf",
        "assets/cv/CV_TEST.pdf"
    ];

    // Sélectionne un CV au hasard
    const randomCv = cvs[Math.floor(Math.random() * cvs.length)];

    // Applique l'animation
    this.classList.add('downloading');

    setTimeout(() => {
        // Redirige vers le CV sélectionné
        window.location.href = randomCv;
    }, 1000); 
});
