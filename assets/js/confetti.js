window.onload = function() {
    const end = Date.now() + 15 * 1000; // 15 secondes d'animation

    const colors = ["#bb0000", "#ffffff"]; // Couleurs des confettis

    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors,
        });

        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors,
        });

        // Continue l'animation tant que la durée n'est pas atteinte
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
};