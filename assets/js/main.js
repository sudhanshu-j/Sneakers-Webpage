// Show Menu

const navMenu = document.getElementById("nav-menu"), // Menu container
  navToggle = document.getElementById("nav-toggle"), // Toggle button (hamburger icon)
  navClose = document.getElementById("nav-close");   // Close button (X icon)

/* Menu show */
if (navToggle) {
  // Check if the navToggle element exists
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu"); 
    // Add the 'show-menu' class to display the menu
  });
}

/* Menu hidden */
if (navClose) {
  // Check if the navClose element exists
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    // Remove the 'show-menu' class to hide the menu
  });
}

// REMOVE MENU MOBILE

const navLink = document.querySelectorAll(".nav-link");
// Select all navigation links

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on a nav-link, remove the 'show-menu' class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
// Add a click event listener to each nav-link to trigger `linkAction`

// SWIPER SNEAKERS

let swiperImg = new Swiper(".h-swiper", {
  loop: true,                // Enable looping for infinite scrolling
  spaceBetween: true,        // Space between slides
  grabCursor: true,          // Change cursor to "grab" style
  centeredSlides: true,      // Center the active slide

  // Pagination
  pagination: {
    el: ".swiper-pagination", // Target the pagination container
    type: "fraction",         // Display fraction pagination (e.g., 1/5)
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next", // Target the next button
    prevEl: ".swiper-button-prev", // Target the previous button
  },
});

let swiperTitles = new Swiper(".titles", {
  loop: true,                // Enable looping
  spaceBetween: true,        // Space between slides
  grabCursor: true,          // Change cursor to "grab" style
  centeredSlides: true,      // Center the active slide
});

swiperImg.controller.control = swiperTitles;
// Synchronize swiperImg with swiperTitles
swiperTitles.controller.control = swiperImg;
// Synchronize swiperTitles with swiperImg

// CHANGE BACKGROUND HEADER

const scrollHeader = () => {
  const header = document.getElementById("header");
  // Get the header element
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
  // Add 'bg-header' class if the scroll position is greater than or equal to 50
};
window.addEventListener("scroll", scrollHeader);
// Add a scroll event listener to the window to trigger `scrollHeader`
