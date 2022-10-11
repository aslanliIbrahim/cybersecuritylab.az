const leftButton = document.querySelector(".left-button")
const rightButton = document.querySelector(".right-button")

leftButton.addEventListener("click", function(){
    if (rightButton.classList.contains("backGroundColor") || rightButton.classList.contains("backGroundColor")) {
        this.classList.remove("backGroundColor")
        rightButton.classList.remove("backGroundColor")
        this.classList.add("backGroundColor");
    }else{
        this.classList.add("backGroundColor");
    }
})

rightButton.addEventListener("click", function(){

    if (leftButton.classList.contains("backGroundColor") || rightButton.classList.contains("backGroundColor")) {
        this.classList.remove("backGroundColor")
        leftButton.classList.remove("backGroundColor")
        this.classList.add("backGroundColor");
    }else{
        this.classList.add("backGroundColor");
    }
})