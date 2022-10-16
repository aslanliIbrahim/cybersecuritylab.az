const navPhone = document.querySelector(".nav-phone");
const biList = document.querySelector(".bi-list");
const navPhoneArea = document.querySelector(".nav-phone-area");


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






