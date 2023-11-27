 // Sticky Navbar
 let header = document.querySelector('header');
 let menu = document.querySelector('#menu-icon');
 let navbar = document.querySelector('.navbar');
  
  
 window.addEventListener('scroll', () => {
     header.classList.toggle('shadow', window.scrollY > 0);
 });
  
 menu.onclick = () => {
     navbar.classList.toggle('active');
 }
 window.onscroll = () => {
     navbar.classList.remove('active');
 }


 // Light Mode
//  let lightmode = document.querySelector("#lightmode")

//  lightmode.onclick = ()=>{
//      if(lightmode.classList.contains("bx-sun")){
//          lightmode.classList.replace('bx-sun','bx-moon');
//           document.body.classList.remove('active');
//      }else{
//          lightmode.classList.replace('bx-moon','bx-sun');
//          document.body.classList.add('active');
//      }
//  }
// document.getElementById("menu-icon").addEventListener("click", function () {
//     this.classList.toggle("active");
// });

//  function toggleDarkMode() {
//     const darkModeStyle = document.getElementById('dark-mode-style');
//     const themeStyle = document.getElementById('theme-style');
//     const darkModeToggle = document.getElementById('dark-mode-toggle');

//     if (darkModeStyle.disabled) {
//         darkModeStyle.disabled = false;
//         themeStyle.disabled = true;
//         darkModeToggle.innerHTML = '<i class="bx bx-sun"></i> Bright Mode';
//     } else {
//         darkModeStyle.disabled = true;
//         themeStyle.disabled = false;
//         darkModeToggle.innerHTML = '<i class="bx bx-moon"></i> Dark Mode';
//     }
// }

 
// Cypress.on('uncaught:exception', (err, runnable) => {
//  // returning false here prevents Cypress from failing the test
//  return false
// })




