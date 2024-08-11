document.addEventListener('DOMContentLoaded', function () {

    const numeroDeEnlaces = document.createElement("span")
    const direccionDeEnlace = document.createElement("span")
    const enlaceDePrueba = document.createElement("span")
    const enlaces3erParrafo = document.createElement("span")

    document.getElementById("info").innerHTML = "Pasa el mouse para resaltar las respuestas!!"
    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces de la página :

    const enlacesTotales = document.querySelectorAll("a")

    document.getElementById("info").appendChild(numeroDeEnlaces).innerHTML = ` <br></br> Número de enlaces: ${enlacesTotales.length}`
    numeroDeEnlaces.addEventListener("mouseenter", ()=>{
        enlacesTotales.forEach((a)=>{
            a.style.background = "yellow"
        })
    })
    numeroDeEnlaces.addEventListener("mouseleave", ()=>{
        enlacesTotales.forEach((a)=>{
            a.style.background = ""
        })
    })

    // Incluye aquí el código necesario para mostrar en el párrafo "info", la dirección del penúltimo enlace de la página :

    const posicionPenultimoEnlace = enlacesTotales.length - 2
    const direccionEnlace = enlacesTotales[posicionPenultimoEnlace].getAttribute("href")
        document.getElementById("info").appendChild(direccionDeEnlace).innerHTML = ` <br> Dirección del penúltimo enlace: ${direccionEnlace}`
        direccionDeEnlace.addEventListener("mouseenter",()=>{
          enlacesTotales[posicionPenultimoEnlace].style.background = "yellow"
        })
        direccionDeEnlace.addEventListener("mouseleave",()=>{
            enlacesTotales[posicionPenultimoEnlace].style.background = ""
          })

    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces que apuntan a http://prueba/ :
    const count = []
     enlacesTotales.forEach((a)=>{
        if(a.getAttribute("href")==="http://prueba/"){
            count.push(a)
        }
    })
    document.getElementById("info").appendChild(enlaceDePrueba).innerHTML = ` <br> Número de enlaces que apuntan a http://prueba/ : ${count.length}`
    enlaceDePrueba.addEventListener("mouseenter",()=>{
        count.forEach((c)=>{
            c.style.background= "yellow"
        })
      })
      enlaceDePrueba.addEventListener("mouseleave",()=>{
        count.forEach((c)=>{
            c.style.background= ""
        })
      })
    
    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces del tercer párrafo :
      const parrafosTotales = document.querySelectorAll("p") //3er parrafo en la posición 2
      const totalEnlaces3erParrafo = parrafosTotales[2].querySelectorAll("a")

      document.getElementById("info").appendChild(enlaces3erParrafo).innerHTML = ` <br> Número de enlaces en el tercer párrafo: ${totalEnlaces3erParrafo.length}`

      enlaces3erParrafo.addEventListener("mouseenter", ()=>{
        totalEnlaces3erParrafo.forEach((p)=>{
            p.style.background = "yellow"
        })
      })
      enlaces3erParrafo.addEventListener("mouseleave", ()=>{
        totalEnlaces3erParrafo.forEach((p)=>{
            p.style.background = ""
        })
      })


});