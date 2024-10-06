document.getElementById('downloadBtn').addEventListener('click', function() {
    this.classList.add('downloading');
    setTimeout(() => {
        window.location.href = this.getAttribute('href');
    }, 1000); 
});