// Initialize AOS (Animate On Scroll) library
AOS.init({ duration: 1000 });

// Theme Toggle Functionality
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

// "Scroll to Top" Button Functionality
const topBtn = document.getElementById('topBtn');
window.onscroll = function() {
  // Show the button when scrolling down 300px
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.style.display = 'block';
  } else {
    topBtn.style.display = 'none';
  }
};

topBtn.onclick = function() {
  // Smoothly scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Typing Effect Functionality
const text = ['Sarathkumar Dunnapapagari', 'a Developer', 'a Cloud Enthusiast'];
let i = 0; // Current string index in the 'text' array
let j = 0; // Current character index in the string
const typing = document.querySelector('.typing');

function type() {
  if (j < text[i].length) {
    // Add the next character
    typing.textContent += text[i][j++];
    setTimeout(type, 100); // Wait 100ms
  } else {
    // Wait 1.5s after finishing the word
    setTimeout(() => {
      typing.textContent = ''; // Clear the text
      j = 0; // Reset character index
      i = (i + 1) % text.length; // Move to the next string (looping back to 0)
      type(); // Start typing the new string
    }, 1500);
  }
}

// Start the typing effect
type();