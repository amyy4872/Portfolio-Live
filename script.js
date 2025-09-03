// Typing effect
const nameText = "AMIT KUMAR SHAW"; 
const nameElement = document.getElementById("typed-name");

let i = 0;
let isDeleting = false;
const typeSpeed = 250;  
const deleteSpeed = 100; 
const pauseAtEnd = 1000; 
const pauseAtStart = 500; 

function typeWriter() {
  if (!isDeleting && i <= nameText.length) {
    nameElement.textContent = nameText.substring(0, i);
    i++;
    setTimeout(typeWriter, typeSpeed);
    return;
  }
  if (isDeleting && i >= 0) {
    nameElement.textContent = nameText.substring(0, i);
    i--;
    setTimeout(typeWriter, deleteSpeed);
    return;
  }
  if (i === nameText.length) {
    isDeleting = true;
    setTimeout(typeWriter, pauseAtEnd);
    return;
  }
  if (i < 0) {
    isDeleting = false;
    i = 0;
    setTimeout(typeWriter, pauseAtStart);
    return;
  }
}
window.onload = typeWriter;

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
