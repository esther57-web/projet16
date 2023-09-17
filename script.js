let email = document.getElementById("input")
const notifyBtn = document.querySelector("button")
const advertMin = document.querySelector(".errorMin")
const advertMax = document.querySelector(".errorMax")


notifyBtn.addEventListener("click", () => {
    if (email.value === "" || !email.value.includes(".") || !email.value.includes("@") && window.innerWidth <= 800) {
        advertMin.style.display = "block"
        advertMax.style.display = "none"
        email.style.borderColor = "red"
        event.preventDefault()
    }

    if (email.value === "" || !email.value.includes(".") || !email.value.includes("@") && window.innerWidth >= 800) {
        advertMax.style.display = "flex"
        advertMin.style.display = "none"
        email.style.borderColor = "red"
        event.preventDefault()
    }
    
})

let facebook = document.getElementById("logo1")
let facebook2 = "images/facebook-white.svg"


function handleClick() {
    facebook.addEventListener("mouseup", () => {
        facebook.src = facebook2
    })
}

function handleRelease() {
    facebook.removeEventListener("mousedown", () => {
        facebook = "images/facebook-176-svgrepo-com.svg"
    })
}

