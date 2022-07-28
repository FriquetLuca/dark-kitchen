
// DATABASE -------------------------------------------------
const collection = [
    {
        name: "Pizza Ananas", 
        picture: "assets/img/pananas.jpg", 
        ingredients: ["farine", "levure de boulanger", "sel", "huile d'olive", "crème de sésame noir", "tomates fraîches", "oignon rouge", "poivron rouge, mozzarella" , "chiffonnade de jambon ou blanc de poulet", "coriandre", "ananas"],
        price: 2,
        categories: ["pizza"]
    },
    {
        name: "Pizza Chorizo", 
        picture: "assets/img/pchorizo.jpg", 
        ingredients: ["pâte", "sauce tomate", "fromages râpés","chorizo","poivron","ognion", "olives noires" , "huile d'olive"], 
        price: 5,
        categories: ["pizza"]
    },  
    {
        name: "Pâtes Carbonara", 
        picture: "assets/img/pacarbo.jpg", 
        ingredients: ["Poivre", "Sel", "Parmigiano Reggiano Galbani" ,"Pancetta", "jaunes d'oeufs", "Spaghetti"],
        price: 4,
        categories: ["pate"],
    },
    {
        name: "Pâtes Bolognaise", 
        picture: "assets/img/pabolo.jpg", 
        ingredients: ["spaghettis", "boeuf haché","carotte", "champignons" , "tomates pelées", "oignons", "gousses d’ail" , "huile", "thym", "laurier" ,"sel" , "poivre"],
        price: 7,
        categories: ["pate"],
    },
    {
        name: "Steak Frite", 
        picture: "assets/img/fristeak.jpg", 
        ingredients: ["boeuf", "Pommes de terre", "Beurre", "Huile", "Sel", "Poivre"],
        price: 7,
        categories: ["frite"]
    }, 
    {
        name: "Moule Frite", 
        picture: "assets/img/frimoule.jpg", 
        ingredients: ["moules","échalotes", "persil", "ail", "beurre", "vin blanc", "sel", "poivre", "pommes de terre", "Huile"],
        price: 9,
        categories: ["frite",]
    }, 
    {
        name: "Maki Thon", 
        picture: "assets/img/mathon.jpg", 
        ingredients: ["Riz", "Eau", "Vinaigre", "Sel", "Sucre", "nori", "Soja", "Concombre", "thon"],
        price: 9,
        categories: ["maki"],
    },
    {
        name: "Maki Saumon", 
        picture: "assets/img/masaumon.jpg", 
        ingredients: [ "riz", "vinaigre", "sucre", "sel", "nori", "saumon", "avocat", "citron", "soja", "wasabi"],
        price: 5,
        categories: ["maki"],
    },   
    {
        name: "Oeuf au plat", 
        picture: "assets/img/oeufplat.jpg", 
        ingredients: [ "oeuf", "beurre", "sel", "poivre"],
        price: 4,
        categories: ["oeuf"]
    },  {
        name: "Oeuf a la coque", 
        picture: "assets/img/oeufcoque.jpg", 
        ingredients: [ "oeuf", "beurre", "sel", "poivre", "persil"],
        price: 6,
        categories: ["oeuf"]
    },
] 

// END DATABASE ------------------------------------------


// FILTER------------------------------------------------------
const oeufs = document.querySelectorAll('.button__oeuf');
for(let oeuf of oeufs) {
    oeuf.addEventListener("click", (event) => {
        let allcards = document.querySelectorAll(".frite , .maki , .pizza , .pate");
        for(let itemsoeuf of allcards) {
            
            if(oeuf.checked) {
            itemsoeuf.style.display = "none";
            }

            else {
                itemsoeuf.style.display = "block";
            }
        }
    } );
    
}

const frites = document.querySelectorAll('.button__frite');
for(let frite of frites) {
    frite.addEventListener("click", (event) => {
        let allcards = document.querySelectorAll(".oeuf , .maki , .pizza , .pate");
        for(let itemsfrite of allcards) {
            
            if(frite.checked) {
            itemsfrite.style.display = "none";
            }

            else {
                itemsfrite.style.display = "block";
            }
        }
    } );
    
}

const pates = document.querySelectorAll('.button__pate');
for(let pate of pates) {
    pate.addEventListener("click", (event) => {
        let allcards = document.querySelectorAll(".oeuf , .maki , .pizza , .frite");
        for(let itemspate of allcards) {
            
            if(pate.checked) {
            itemspate.style.display = "none";
            }

            else {
                itemspate.style.display = "block";
            }
        }
    } );
    
}

const pizzas = document.querySelectorAll('.button__pizza');
for(let pizza of pizzas) {
    pizza.addEventListener("click", (event) => {
        let allcards = document.querySelectorAll(".oeuf , .maki , .frite , .pate");
        for(let itemspizza of allcards) {
            
            if(pizza.checked) {
            itemspizza.style.display = "none";
            }

            else {
                itemspizza.style.display = "block";
            }
        }
    } );
    
}

const makis = document.querySelectorAll(".button__maki");
for(let maki of makis) {
    maki.addEventListener("click", (event) => {
        let allcards = document.querySelectorAll(".oeuf , .pizza , .frite , .pate");
        for(let itemsmaki of allcards) {
            
            if(maki.checked) {
            itemsmaki.style.display = "none";
            }

            else {
                itemsmaki.style.display = "block";
            }
        }
    } );
    
}

//END  FILTER -----------------------------------

