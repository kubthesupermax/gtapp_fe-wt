document.addEventListener("DOMContentLoaded", () => {
  const registerBtn = document.getElementById("registerBtn");
  const popup = document.getElementById("registerPopup");
  const closeBtn = document.querySelector(".close-btn");

  // When the register button is clicked, show the popup
  registerBtn.addEventListener("click", () => {
    popup.classList.remove("hidden");
  });

  // Close the popup when the close button is clicked
  closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
  });

  // Close the popup when clicking outside the popup content
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.add("hidden");
    }
  });
});
