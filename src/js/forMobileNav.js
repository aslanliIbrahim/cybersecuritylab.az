const navPhone = document.querySelector(".nav-phone");
const biList = document.querySelector(".bi-list");
const navPhoneArea = document.querySelector(".nav-phone-area");

//for mobile

const HelloMob = document.querySelectorAll(".for-click-mob");


navPhone.addEventListener("click", function() {
    // navPhoneArea.classList.toggle("click");

    // if ( biList.classList.contains("bi-list")) {
    //     biList.classList.remove("bi-x-lg")
    // } else {
    //     biList.classList.add("bi-x-lg")
    //     // biList.classList.remove("bi-list")
    // }

    if (navPhoneArea.classList.contains("click")) {

        navPhoneArea.classList.remove("click")
        biList.classList.remove("bi-x-lg")
        biList.classList.add("bi-list")

    } else {
        navPhoneArea.classList.add("click")
        biList.classList.add("bi-x-lg")
        biList.classList.remove("bi-list")
    }
    
})

HelloMob.forEach(forMob=>{
    
    console.log(forMob, "formob");
    const mobSubMenu = document.querySelector(".mob-sub-menu")
    

    forMob.addEventListener("click", function() {
        
        // mobSubMenu.classList.toggle("mob-sub-block")
        const mobSubMenuActive = document.querySelectorAll(".mob-sub-menu.mob-sub-block")
        
        if (mobSubMenu.classList.contains("mob-sub-block")) {
            mobSubMenu.classList.remove("mob-sub-block")
           

        } else {

            for (let a = 0; a < mobSubMenuActive.length; a++) {
                mobSubMenuActive[a].classList.remove("mob-sub-block")
            }

            mobSubMenu.classList.add("mob-sub-block");

        }
    })

    
})






