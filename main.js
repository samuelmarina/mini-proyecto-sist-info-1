var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide-item");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  // dots[slideIndex-1].className += " active";
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

function addSkills(){
  const wrapper = document.getElementById("bars")
  var bars = "";
  console.log(wrapper);

  skills.forEach(item => {
    bars += '<h2>' + item.name + '</h2><div class="skill-container"><div class="skills" style="background-color: #00587a; width: ' + item.level + ';">' + item.level + '</div></div>'
  })

  wrapper.innerHTML = bars;
  console.log(bars);
}

addSkills();

