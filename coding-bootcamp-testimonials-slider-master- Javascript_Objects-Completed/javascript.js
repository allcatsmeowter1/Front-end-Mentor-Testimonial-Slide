const testimonial = [
 {
  quote: `“ I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future. ”`,
  person: 'Tanya Sinclair',
  job:'UX Engineer',
  img: 'images/image-tanya.jpg',
},

{
    quote: `“ If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
    person: 'John Tarkpor',
    job:'Junior Front-End Developer',
    img: 'images/image-john.jpg' 
},
];

let currentSlide = 0;
let totalSlides = testimonial.length;
const testimonialContainer = document.getElementById("testimonialContainer");
const quoteElement = document.getElementById('testimonialQuotes');
const personElement = document.getElementById('nameElement');
const jobElement = document.getElementById('jobElement');
const imgElement = document.getElementById('testimonialImage');


const displayTestimonial = () => {
 quoteElement.innerText = testimonial[currentSlide].quote;
 personElement.innerText = testimonial[currentSlide].person;
 jobElement.innerText = testimonial[currentSlide].job;
 imgElement.src = testimonial[currentSlide].img;
};
const nextBtn = document.getElementById("toggleNext");
const prevBtn = document.getElementById("togglePrev");

nextBtn.addEventListener("click", () => {
  if (currentSlide <= totalSlides - 1){
    currentSlide = (currentSlide + 1) % totalSlides;
    displayTestimonial();
  }

});
prevBtn.addEventListener("click", () => {
 if  (currentSlide <= totalSlides - 1){ 
 currentSlide = (currentSlide + 1) % totalSlides;
  displayTestimonial();
}
});
window.onload = displayTestimonial;
