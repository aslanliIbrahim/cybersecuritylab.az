const forJsBtn = document.querySelectorAll(".forjsbtn");
const forPanel = document.querySelectorAll(".right-one")
const panelArr = [...forPanel]
const btnArr = [...forJsBtn]




btnArr.forEach(btn => {
    btn.addEventListener("click", function(){
        const currentBtnActive = document.querySelectorAll(".forjsbtn.btnActive");
        const cureentHello = btn.querySelectorAll(".hello")
        const currentHello = document.querySelectorAll(".hello.cart")
        if (btn.classList.contains("btnActive")) {
            btn.classList.remove("btnActive");
            for (let x = 0; x < currentHello.length; x++) {
                currentHello[x].classList.remove("cart");
            }
        } else {

            for (let j = 0; j < cureentHello.length; j++) {
                cureentHello[j].classList.add("cart")
            }
            btn.classList.add("btnActive");
            for (let i = 0; i < currentBtnActive.length; i++) {
                currentBtnActive[i].classList.remove("btnActive")
            }
            for (let h = 0; h < currentHello.length; h++) {
                currentHello[h].classList.remove("cart");
            }
        }

        const rightFirst = document.getElementById("right-first");
        const rf = rightFirst.getAttribute("data-panel-id");

        const rightSecond = document.getElementById("right-second");
        const rfs = rightSecond.getAttribute("data-panel-id")

        const rightThreed = document.getElementById("right-three");
        const rft = rightThreed.getAttribute("data-panel-id")


        const rightFourty = document.getElementById("right-four");
        const rff = rightFourty.getAttribute("data-panel-id")

        const currentimgclass = document.querySelector(".right-one");
        // console.log(crrImgval, "this is right side id");
        

        const btnattr = btn.getAttribute("data-for-panel");

        if (btnattr === rf) {
            currentimgclass.classList.add("ok");
        } else if(btnattr === rfs){
            currentimgclass.classList.add("ok");
        }else if(btnattr === rft){
            currentimgclass.classList.add("ok");
        }else if(btnattr === rff){
            currentimgclass.classList.add("ok");
        }else{
            console.log("hello");
        }
        
    })
})


btnArr.forEach(bttn => {
    
    // panelArr.forEach(panel => {
    //     console.log(panel.getAttribute("data-panel-id"));
    // })


})
