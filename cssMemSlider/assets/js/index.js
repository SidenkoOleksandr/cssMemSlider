const slides = document.querySelectorAll(".slide-item");
const dots = document.querySelectorAll(".dot");
let index = 0;

const activeSlide = (n) => {
  for (slide of slides) {
    slide.classList.remove("active");
  }
  slides[n].classList.add("active");
};

const activeDotSlide = (n) => {
  for (dot of dots) {
    dot.classList.remove("active");
  }
  dots[n].classList.add("active");
};

dots.forEach((item, indexDot) => {
  item.addEventListener("click", () => {
    index = indexDot;
    activeSlide(index);
    activeDotSlide(index);
  });
});
