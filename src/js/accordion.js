const accordion = document.getElementsByClassName("contentbx");
const contents = document.getElementsByClassName("content");
const labell = document.getElementsByClassName("label");

for (let i = 0; i < accordion.length; i++) {
  const helloo = document.querySelector(".hello");

  accordion[i].addEventListener("click", function () {
    // this.classList.toggle("border-bottom");

    helloo.classList.toggle("hello-transform");

    for (let h = 0; h < labell.length; h++) {
      labell[i].classList.toggle("border-bottom");
    }
    for (let j = 0; j < contents.length; j++) {
      contents[i].classList.toggle("content-active");
    }
  });
}

const items = document.querySelectorAll(".accordion-top button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

// const common = document.getElementsByClassName("payment-information");
// const paymentDown = document.getElementsByClassName("common-down");

// for (let i = 0; i < common.length; i++) {

//     const commonRight = document.querySelector(".common-right")

//     common[i].addEventListener("click", function() {

//         commonRight.classList.toggle("common-right-active");

//         for (let j = 0; j < paymentDown.length; j++) {

//             paymentDown[i].classList.toggle("common-down-active");

//         }
//     })

// }

// commonRight.forEach(e => {

//     const commonDown = document.querySelector(".common-down");
//     const cmnRight = document.querySelector(".common-right")

//     // console.log(commonDown);
//     // console.log(cmnRight);

//     cmnRight.addEventListener("click", function() {

//         // e.classList.toggle("common-right-active");
//         // commonDown.classList.toggle("common-down-active");

//         // if (cmnRight.classList.contains("common-right-active")) {

//         //     cmnRight.classList.remove("common-right-active");
//         //     commonDown.classList.remove("common-down-active");
//         //     console.log("if area");

//         // } else {
//         //     cmnRight.classList.add("common-right-active");
//         //     commonDown.classList.add("common-down-active");
//         //     console.log("else area");

//         // }

//         // cmnRight.classList.toggle("common-right-active");

//     })

// });

// for (let i = 0; i < commonRight.length; i++) {

//     const commonDown = document.querySelector(".common-down");
//     const cmnRight = document.querySelector(".common-right")

//     console.log(commonDown);
//     console.log(cmnRight);

//     cmnRight.addEventListener("click", function(){

//         // this.classList.toggle("common-right-active")
//         // console.log("hello");

//     })
// }
