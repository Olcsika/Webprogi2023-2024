//alert("CSő")

$.ajax({url:"https://fakestoreapi.com/products", 
    dataType: 'json',
    success:function(data){
        console.log(data)
        data.forEach(product => {
            console.log(product)
            let kartya = termekKarty(product.title,product.image,product.description)
            $("#termekLista").append(kartya)
        });
    }
});
function termekKarty(nev,kepurl,leiras)
{
    let keret = jQuery("<div>") 
    keret.prop("class","card")
    keret.addClass("col-3");   

    let kep = jQuery("<img>")
    kep.prop("src",kepurl)
    kep.prop("class","card-img-top")
    kep.prop("alt",nev)

    let cardText=jQuery("<p>")
    cardText.prop("class","card-text")
    cardText.text(leiras)
    
    let cardBody=jQuery("<div>")
    cardBody.prop("class","card-body")

    let cardTitle=jQuery("<h5>")
    cardTitle.prop("class","card-title")
    cardTitle.text(nev)

    cardBody.append(cardText)
    cardBody.append(cardTitle)
    keret.append(kep)
    keret.append(cardBody)

    return keret;
    

   
    


/*
    <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  /div>
</div>*/
}