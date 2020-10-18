//Slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("slide-item");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

const skills = [
  {
    name: "React Native",
    level: "80%"
  },
  {
    name: "JavaScript",
    level: "70%"
  },
  {
    name: "Java",
    level: "80%"
  },
  {
    name: "Git",
    level: "90%"
  }
]

//Skills
function addSkills(){
  const wrapper = document.getElementById("bars")
  var bars = "";

  skills.forEach(item => {
    bars += '<h2>' + item.name + '</h2><div class="skill-container"><div class="skills" style="background-color: #00587a; width: ' + item.level + ';">' + item.level + '</div></div>'
  })

  wrapper.innerHTML = bars;
}

addSkills();

//Form submit
function send() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if(!name || !email || !message) {
    return alert("One of the fields is empty. Try again")
  }

  console.log("Name: " + name, "Email: " + email, "Message: " + message);
  
  alert("Message sent")
}

