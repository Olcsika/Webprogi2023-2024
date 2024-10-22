function init()
{
    document.body.appendChild(sliderMaker("Sorok: ","sorok", 1, 10));
    document.body.appendChild(sliderMaker("Oszlopok","oszlopok", 1, 10));
    let tabla = document.createElement("table");
    tabla.id="tabla";
    document.body.appendChild(tabla);
    tablaMeret();
}
function tablaMeret()
{
    document.getElementById("tabla").innerHTML = "";
    const oszlop = document.getElementById("oszlopok").value;
    const sor = document.getElementById("sorok").value;
    for(let i = 0; i < sor; i++)
    {
        let tempSor = document.createElement("tr");
        for (let k = 0; k < oszlop; k++)
        {
            let tempCella = document.createElement("td");

            tempCella.addEventListener("dblclick", function(){
            this.classList.toggle("kattintott");
            this.appendChild(inputKeszit(""))
            this.children[0].focus();
            
        })
            tempSor.appendChild(tempCella);
            
        }
        document.getElementById("tabla").appendChild(tempSor);
         
    }
}

function inputKeszit(ertek)
{
    let input = document.createElement("input");
    
    input.type = "text";
    input.placeholder = "szoveg";
    if(ertek !== "")
    {
        input.value = ertek;
    }

    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          //input.value = event;
          //console.log(event)
          this.parentElement.classList.toggle("kattintott");
          this.parentElement.innerHTML= this.value
         
        }
      });

    return input;
}
//TASK
/*
ne legyen egy cellában több input
ne keljen belekattintani
méretváltoztatás ne tünjön el
lehessen szerkeszteni
*/
function kattintas()
{


}

function sliderMaker(label, id, min, max)
{
    //<input type="range" min="1" max="100" value="50" class="slider" id="myRange">
    let slider = document.createElement("input");
    slider.setAttribute("type", "range");
    slider.setAttribute("min", min);
    slider.setAttribute("max", max);
    slider.id=id;
    slider.addEventListener("input", tablaMeret);

    let cimke = document.createElement("label");
    cimke.innerHTML=label;
    cimke.for=id;

    let doboz = document.createElement("div");
    doboz.appendChild(cimke);
    doboz.appendChild(slider);
    return doboz;
}