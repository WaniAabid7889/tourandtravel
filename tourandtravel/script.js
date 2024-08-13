let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

let formBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let videoBtn = document.querySelector('.navbar')

let menu = document.querySelector('#menu-bar');

let navbar = document.querySelector('.navbar');
videoBtn = document.querySelectorAll('.vid-btn');


window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');

    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    loginForm.classList.remove('active');
}

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});
videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classlist.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

// var swiper = new swiper(".review-slider", {
//     spaceBetween: 20,
//     loop:true,
//     autoplay:{
//         delay:2500,
//         disableOnInyeraction: false,
//     },
// breakpoints:{
//     640: {
//         slidesPerView: 1,
//     },
//     768: {
//         slidesPerView: 2,
//     },
//     1024: {
//         slidesPerView: 3,
//     },
// },
// });

// var swiper = new swiper(".brand-slider", {
//     spaceBetween: 20,
//     loop:true,
//     autoplay:{
//         delay:2500,
//         disableOnInyeraction: false,
//     },
//     breakpoints:{
//         450: {
//             slidesPerView: 2},
//         450: {
//             slidesPerView: 3,
//         },
//         991: {
//             slidesPerView: 4,
//         },
//         1200: {
//             slidesPerView: 5,
//         },
//     }
// });

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}