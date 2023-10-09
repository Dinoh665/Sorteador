
const button = document.querySelector("button")


function generateNumber() {
    const min = Math.ceil(document.querySelector(".in1").value)
    const max = Math.floor(document.querySelector(".in2").value)    

    const result = Math.floor(Math.random() * (max - min  + 1)) + min;

    console.log(min)
    console.log(max)

    alert(result)
}

button.addEventListener("click", generateNumber)

