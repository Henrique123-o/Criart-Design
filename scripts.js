let count = 1;

document.getElementById("radio1").checked = true;

setInterval( function(){

    nextImage();
   
}, 6000)

function nextImage(){
    count++;
    if(count>3){
        count = 1;
    }


    document.getElementById("radio"+count).checked = true;
}



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


/* menu*/
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks){
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";

      this.handleClick = this.handleClick.bind(this);
  }

  animateLinks(){
      this.navLinks.forEach((link, index) => {
          link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                index / 7 + 0.3
              }s`);
        });
  }

  handleClick(){
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
  }

  addClickEvent(){
      this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init(){
      if(this.mobileMenu){
        this.addClickEvent();
      }

      return this;
  }
}


const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);

mobileNavbar.init();

/*menu*/