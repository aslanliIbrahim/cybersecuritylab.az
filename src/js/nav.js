const button = document.querySelectorAll(".for-click");
const arrowNav = document.querySelectorAll(".arrow-nav");
const subMenu = document.querySelectorAll(".sub-menu");

for (let i = 0; i < button.length; i++) {

    button[i].addEventListener('click', function(e){
        
      for (let j = 0; j < arrowNav.length; j++) {

        if (arrowNav[i].classList.contains("arrow-nav-rotate")) {
            
            arrowNav[j].classList.remove('arrow-nav-rotate');
            for (let h = 0; h < subMenu.length; h++) {
                subMenu[h].classList.add('sub-menu-active');
                subMenu[h].classList.add('sub-menu');

            }

        }else{
            
            arrowNav[j].classList.add('arrow-nav-rotate');
            for (let h = 0; h < subMenu.length; h++) {
                subMenu[h].classList.add('sub-menu-active');
                subMenu[h].classList.remove('sub-menu');

            }

        }
      }
    })
}



// button.forEach((el)=>{
//     el.addEventListener("click",(e)=>{
//         console.log(e.target.getAttribute('data-id'));

//     })
// })




