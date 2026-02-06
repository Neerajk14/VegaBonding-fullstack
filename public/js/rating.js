(() => {
  'use strict'
const stars = document.querySelectorAll(".rating i");
  const ratingInput = document.getElementById("rating-value");

  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      const value = index + 1;
      ratingInput.value = value;

      stars.forEach(s => s.classList.remove("active"));
      for (let i = 0; i < value; i++) {
        stars[i].classList.add("active");
      }
    });
  });
   
})()