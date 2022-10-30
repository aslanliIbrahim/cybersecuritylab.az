const buttons = document.querySelectorAll(".for-click");
buttons.forEach(button => {

  const arrowNav = button.querySelector(".arrow-nav");
  const subMenu = button.querySelector(".sub-menu");
  const salam = button.querySelector(".salam");
  
  salam.addEventListener('click', function() {
    arrowNav.classList.toggle('arrow-nav-rotate');
    subMenu.classList.toggle('sub-menu-active')
  });
});