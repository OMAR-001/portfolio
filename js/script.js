// Declare typingSpeed variable only once
const typingSpeed = 100; // Adjust the typing speed in milliseconds

// Typing effect for the welcome message
const typingMessage = document.getElementById("typing-message");
const welcomeMessage = "Welcome to My Portfolio!";
let typingIndex = 0;

function typeMessage() {
  if (typingIndex < welcomeMessage.length) {
    typingMessage.textContent += welcomeMessage.charAt(typingIndex);
    typingIndex++;
    setTimeout(typeMessage, typingSpeed);
  }
}

// Start the typing effect when the page loads
document.addEventListener("DOMContentLoaded", () => {
  typeMessage();
  typeAboutMeHeading(); // Start typing About Me heading
});

// Typing effect for the about me heading
const aboutMeHeading = document.getElementById("about-me-heading");
const aboutMeHeadingText = "About Me";
let aboutMeHeadingIndex = 0;

function typeAboutMeHeading() {
  if (aboutMeHeadingIndex < aboutMeHeadingText.length) {
    aboutMeHeading.textContent += aboutMeHeadingText.charAt(aboutMeHeadingIndex);
    aboutMeHeadingIndex++;
    setTimeout(typeAboutMeHeading, typingSpeed);
  }
}

// Toggle navbar menu for small screens
const navbarToggle = document.getElementById("navbar-toggle");
const navbarMenu = document.getElementById("navbarNav");

navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("show");
});
