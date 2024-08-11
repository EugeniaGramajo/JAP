const div = document.getElementById("button-container")
const button = document.getElementById("button")


div.addEventListener("click",(e)=>{
    if(e.target===button){
            alert('Hola!')
    }
    else {
         alert("Hola! Soy el div")   
    }

})