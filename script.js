

// Search-box

let navbar = document.querySelector('.navbar');
let searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  navbar.classList.toggle('on-search');
  searchBtn.classList.toggle('on-search');
});




// Initialize Swiper2

  var swiper = new Swiper("#Swiper2", {
    slidesPerView: "auto",
    spaceBetween: 80,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Initialize Swiper3
 
    var swiper = new Swiper("#Swiper3", {
      slidesPerView: "2",
      spaceBetween: 80,
      slidesPerGroup: 2,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    });
 