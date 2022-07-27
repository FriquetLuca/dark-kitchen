const collection = [
    {
        name: "Pizza Ananas", 
        picture: "assets/img/pananas.jpg", 
        ingredients: ["farine", "levure de boulanger", "sel", "huile d'olive", "crème de sésame noir", "tomates fraîches", "oignon rouge", "poivron rouge, mozzarella, chiffonnade de jambon ou blanc de poulet, coriandre, ananas"],
        price: 2,
        categories: ["pizza", "salé"]
    },
    {
        name: "Pizza Chorizo", 
        picture: "assets/img/pchorizo.jpg", 
        ingredients: ["pâte à pain de chez le boulanger", "sauce tomate", "fromages râpés","chorizo","poivron","ognion", "olives noires" , "huile d'olive"], 
        price: 5,
        categories: ["pizza", "salé"]
    },  
    {
        name: "Pâtes Carbonara", 
        picture: "assets/img/pacarbo.jpg", 
        ingredients: ["Poivre", "Sel", "Parmigiano Reggiano Galbani" ,"Pancetta", "jaunes d'oeufs", "Spaghetti"],
        price: 4,
        categories: "pate",
    },
    {
        name: "Pâtes Bolognaise", 
        picture: "assets/img/pabolo.jpg", 
        ingredients: ["spaghettis", "boeuf haché","carotte", "champignons" , "tomates pelées", "oignons", "gousses d’ail" , "huile", "thym", "laurier" ,"sel" , "poivre"],
        price: 7,
        categories: "pate",
    },
    {
        name: "Steak Frite", 
        picture: "assets/img/fristreak.jpg", 
        ingredients: ["boeuf", "Pommes de terre", "Beurre", "Huile", "Sel", "Poivre"],
        price: 7,
        categories: ["frite", "salé"]
    }, 
    {
        name: "Moule Frite", 
        picture: "assets/img/frimoule.jpg", 
        ingredients: ["moules","échalotes", "persil", "ail", "beurre", "vin blanc", "sel", "poivre", "pommes de terre", "Huile"],
        price: 9,
        categories: ["frite", "salé"]
    }, 
    {
        name: "Maki Thon", 
        picture: "assets/img/mathon.jpg", 
        ingredients: ["Riz", "Eau", "Vinaigre", "Sel", "Sucre", "nori", "Soja", "Concombre", "thon"],
        price: 9,
        categories: "maki",
    },
    {
        name: "Maki Saumon", 
        picture: "assets/img/masaumon.jpg", 
        ingredients: [ "riz", "vinaigre", "sucre", "sel", "nori", "saumon", "avocat", "citron", "soja", "wasabi"],
        price: 5,
        categories: "maki",
    },   
    {
        name: "Oeuf au plat", 
        picture: "assets/img/oeufplat.jpg", 
        ingredients: [ "oeuf", "beurre", "sel", "poivre"],
        price: 4,
        categories: ["oeuf","rapide"]
    },  {
        name: "Oeuf a la coque", 
        picture: "assets/img/oeufplat.jpg", 
        ingredients: [ "oeuf", "beurre", "sel", "poivre", "persil"],
        price: 6,
        categories: ["oeuf", "rapide"]
    },
] 

// let oeufs = document.getElementsByClassName('button_oeuf');
// for(let oeuf of oeufs)
// {
//   if(oeuf.clicked)
//   {
//     alert("Oeuf");
//   }
// }

const oeufs = document.querySelectorAll('.button_oeuf');
for(let oeuf of oeufs) {
    console.log(oeuf.checked)
    oeuf.addEventListener("click", (event) => {
        let allcards = document.querySelectorAll(".oeuf");
        for(let itemsoeuf of allcards) {
            
        }
    } );
    
}


// if(document.getElementsByClassName('button.oeuf').clicked == true) {
//     alert("Oeuf");
// }

//oeuf, frite, pate, pizza, sale, rapide




