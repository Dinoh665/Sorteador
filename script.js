
const button = document.querySelector("button")
const resultado = document.querySelector(".resultado")

function generateNumber() {
    const min = Math.ceil(document.querySelector(".in1").value)
    const max = Math.floor(document.querySelector(".in2").value)
    

    const result = Math.floor(Math.random() * (max - min  + 1)) + min;

    console.log(min)
    console.log(max)

    if(min >= max){
        resultado.innerHTML = "O primeiro número deve ser MENOR que o segundo"
    }else{
        resultado.innerHTML = result
    }

    

}

button.addEventListener("click", generateNumber)

