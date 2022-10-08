const accordion = document.getElementsByClassName("contentbx");
const contents = document.getElementsByClassName("content");
const labell = document.getElementsByClassName("label");


for (let i = 0; i < accordion.length; i++) {
    const helloo = document.querySelector(".hello");

    accordion[i].addEventListener("click", function () {

        // this.classList.toggle("border-bottom");

        helloo.classList.toggle("hello-transform");

        for (let h = 0; h < labell.length; h++) {
           labell[i].classList.toggle("border-bottom")
        }
        for (let j = 0; j < contents.length; j++) {
            contents[i].classList.toggle("content-active");
        }
        
    })
    
}  