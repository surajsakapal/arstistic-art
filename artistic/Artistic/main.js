const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.querySelector("i");
const readMore = document.getElementById('readbtn')



menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

readMore.addEventListener("click",(e)=>{
  if(readText.style.display === "none"){
  readText.style.display = "block"
  readMore.innerText = "Read Less"
  }
  else{
    readText.style.display = "none"
    readMore.innerText = "Read More"
  }
})

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

document.getElementById('contactForm').addEventListener('submit', function(event) {

  event.preventDefault();

  fetch(this.action, {
    method: this.method,
    body: new FormData(this)
  }).then(response => {
    if (response.ok) {

      setTimeout(() => {
        this.reset();
      }, 5000);
    } else {
      console.error('Form submission failed:', response.statusText);
    }
  }).catch(error => console.error('Form submission error:', error));
});

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000);    
}


