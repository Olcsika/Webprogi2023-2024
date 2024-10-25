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
            this.appendChild(inputKeszit(""));
            //console.log(this.children[0]);
            this.children[0].focus();

        })
            tempSor.appendChild(tempCella);
        }
        document.getElementById("tabla").appendChild(tempSor);
    }
}
function tablaMeret_old()
{
    document.getElementById("tabla").innerHTML = "";
    const oszlop = document.getElementById("oszlopok").value;
    const sor = document.getElementById("sorok").value;
    console.log(document.getElementById("tabla").children.length)

    if(sor>document.getElementById("tabla").children.length)
    {
        for(let i = document.getElementById("tabla").children.length; i<sor;i++)
        {
            let tempSor = document.createElement("tr");
            for (let k = 0; k < oszlop; k++)
            {
                let tempCella = document.createElement("td");
    
                tempCella.addEventListener("dblclick", function(){
                this.classList.toggle("kattintott");
                this.appendChild(inputKeszit(""));
                //console.log(this.children[0]);
                this.children[0].focus();
    
            })
                tempSor.appendChild(tempCella);
            }
            document.getElementById("tabla").appendChild(tempSor);
        }
    }
    
    if(sor<document.getElementById("tabla").children.length)
    {
        
        while(sor<document.getElementById("tabla").children.length);
        {
            document.getElementById("tabla").lastChild.remove();
            
        }        
    }
    if(oszlop>document.getElementById("tabla").children[0].children.length)
        {
            
            while(oszlop>document.getElementById("tabla").children[0].children.length);
            {
                
            }        
        }
    /*for(let i = 0; i < sor; i++)
    {
        let tempSor = document.createElement("tr");
        for (let k = 0; k < oszlop; k++)
        {
            let tempCella = document.createElement("td");

            tempCella.addEventListener("dblclick", function(){
            this.classList.toggle("kattintott");
            this.appendChild(inputKeszit(""));
            //console.log(this.children[0]);
            this.children[0].focus();

        })
            tempSor.appendChild(tempCella);
        }
        document.getElementById("tabla").appendChild(tempSor);
    }*/
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
          //console.log(event);
          this.parentElement.classList.toggle("kattintott");
          this.parentElement.innerHTML = this.value;
          
        }
      });

    return input;
}

/*
Feladatok:
- ne legyen egy cellaba tobb input.
- ne kelljen belekattintani.
- meretvaltoztatasnal ne tunjon el a szoveg.
- lehessen szerkeszteni az inputot.
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