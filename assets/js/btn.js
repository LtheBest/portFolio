document.querySelectorAll(".toggleButton").forEach(function (button) {
  button.addEventListener("click", function () {
    const moreContent = this.previousElementSibling; // Sélectionne l'élément "more-content" juste avant le bouton
    const chevronIcon = this.querySelector("#chevronIcon");
    const isHidden =
      moreContent.style.display === "none" || moreContent.style.display === "";

    if (isHidden) {
      moreContent.style.display = "grid";
      this.firstChild.nodeValue = "Voir moins";
      chevronIcon.className = "fas fa-chevron-up";
    } else {
      moreContent.style.display = "none";
      this.firstChild.nodeValue = "Voir plus ";
      chevronIcon.className = "fas fa-chevron-down";
    }
  });
});

function toggleText() {
  var text = document.getElementById("moreText");
  var button = document.getElementById("toggleButton");
  var icon = document.getElementById("chevronIcon");
  if (text.style.display === "none") {
    text.style.display = "block"; 
    button.innerHTML =
      'Voir moins <i id="chevronIcon" class="fas fa-chevron-up"></i>'; 
  } else {
    text.style.display = "none"; 
    button.innerHTML =
      'Voir plus <i id="chevronIcon" class="fas fa-chevron-down"></i>'; 
  }
}
