

// Search-box

let navbar = document.querySelector('.navbar');
let searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  navbar.classList.toggle('on-search');
  searchBtn.classList.toggle('on-search');
});




// Initialize Swiper

  var swiper = new Swiper("#Swiper2", {
    slidesPerView: "auto",
    spaceBetween: 80,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
