const people = [
 {
  img:
   "https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959121/person-1_aufeoq.jpg",
  name: "peter doe",
  job: "product manager",
  text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis? `,
 },
 {
  img:
   "https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959131/person-2_ipcjws.jpg",
  name: "susan doe",
  job: "developer",
  text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
 },
 {
  img:
   "https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959131/person-3_rxtqvi.jpg",
  name: "emma doe",
  job: "designer",
  text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
 },
];


const container = document.querySelector('.slide-container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

container.innerHTML = people.map((person, slideIndex) => {
 const { img, name, job, text } = person;
 let position = 'next';
 if (slideIndex === 0) {
  position = 'active';
 }
 if (slideIndex === people.length - 1) {
  position = 'last';
 }
 return `
         <article class="slide ${position}" >
          <img
            src="${img}"
            class="img"
            alt="${name}"
          />
          <h4>${name}</h4>
          <p class="title">${job}</p>
          <p class="text">
            ${text}
          </p>
          <div class="quote-icon">
            <i class="fa fa-quote-right"></i>
          </div>
        </article>`
}).join("");

const startSlider = (type) => {
 const active = document.querySelector('.active');
 const last = document.querySelector('.last');
 let next = active.nextElementSibling;
 if (!next) {
  next = container.firstElementChild;
 }
 active.classList.remove('active');
 next.classList.remove('next');
 last.classList.remove('last');


 if (type == "prev") {
  active.classList.add('next');
  last.classList.add('active');

  next = last.previousElementSibling;
  if (!next) {
   next = container.lastElementChild;
  }
  next.classList.add('last');
  return;
 }

 active.classList.add('last');
 last.classList.add('next');
 next.classList.add('active');
}

nextBtn.addEventListener('click', () => {
 startSlider();
})

prevBtn.addEventListener('click', () => {
 startSlider('prev');
})