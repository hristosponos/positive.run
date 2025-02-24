document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor behavior

    let targetID = this.getAttribute("href"); // Get the target section ID
    let targetSection = document.querySelector(targetID);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "center" // Scrolls to the center
      });
    }
  });
});
