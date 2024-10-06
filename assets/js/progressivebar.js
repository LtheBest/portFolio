document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll('.progress-done');
  function loadProgressBars(bars) {
    bars.forEach((bar) => {
      const done = bar.getAttribute('data-done');
      setTimeout(() => {
        bar.style.width = done + '%';
      }, 1000); 
    });
  }
  const aboutSection = document.querySelector('#about');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadProgressBars(document.querySelectorAll('.skills-container .progress-done'));
        observer.unobserve(aboutSection); 
      }
    });
  });

  observer.observe(aboutSection);

  document.querySelector('.toggleButton').addEventListener('click', function() {
    const moreContent = document.querySelector('.more-content');
    const chevronIcon = this.querySelector('#chevronIcon');
    
    if (moreContent.style.display === 'none' || moreContent.style.display === '') {
      moreContent.style.display = 'grid'; 
      this.firstChild.nodeValue = 'Voir moins';
      chevronIcon.className = 'fas fa-chevron-up';
      loadProgressBars(document.querySelectorAll('.more-content .progress-done'));
    } else {
      moreContent.style.display = 'none';
      this.firstChild.nodeValue = 'Voir plus ';
      chevronIcon.className = 'fas fa-chevron-down';
    }
  });
});
