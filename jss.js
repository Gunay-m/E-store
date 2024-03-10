// Hoisting
const mehsullarinYerleseceyiYer = document.querySelector("#mehsullar")



window.addEventListener("DOMContentLoaded", getMelumatlariGetir)



async function getMelumatlariGetir() {
    const unvan = "https://fakestoreapi.com/products"

    try {
        const cavab = await fetch(unvan) // sayta muraciet gonderir
        // Promisin 3 novu: pending, fulfilled, reject
        // JSON-JavaScript Object Notation 
        const mehsullar = await cavab.json()
        console.log(mehsullar)
        // const dess=mehsullar[i].description.split(" ")
        for (let i = 0; i < mehsullar.length; i++) {
            mehsullarinYerleseceyiYer.innerHTML += `<div class="col-12 col-md-6 col-lg-3">
            <div class="card mt-2 p-2">
            <img src=" ${mehsullar[i].image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${mehsullar[i].title}</h5>
                    <p class="card-text">${mehsullar[i].description.slice(0,100)+"..."}</p>
                    <p>${" Price: "+ mehsullar[i].price+" $"}</p>
                    <p>${" Rating: "+ mehsullar[i].rating.rate}</p>
                    <p>${" Views : "+ mehsullar[i].rating.count}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            
            </div>`

        }
    }

    catch (xeta) {

        console.log("xeta", xeta.message)
    }

}



// load, DOMContentLoaded



