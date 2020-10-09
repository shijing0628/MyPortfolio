// sticky nav bar to the top. Didn't use it for now
// $(document).ready(function(){
//     $(window).on('scroll', function(){
//         var scroll = $(window).scrollTop();
//         if(scroll>=90){
//             $('.sticky').addClass('stickyadd');
//         }else{
//             $('.sticky').removeClass('stickyadd');
//         }
//     })

// using js library to impliment the type writer effect
// var typed = new Typed(".element",{
//     strings:["Brenda!", "a Full-Stack Web Developer!", "an UI/UX Designer!", "an artist of painting!"],
//     smartBackspace:true,
//     typeSpeed:100,
//     loop:true,
//     backSpeed:100,
//     loopCount:Infinity,
//     startDelay:1000
// })
// $(".owl-carousel").owlCarousel({
//  loop:true,
//  autoplay:true,
//  autoplayTimeout:5000,
//  items:1,
//  dots:true,
// });
// })
// using Es6 to impliment the type writer effect
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word, and loop index
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}
