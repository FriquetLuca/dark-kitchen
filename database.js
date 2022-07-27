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
        ingredients: ["pâte à pain", "sauce tomate", "fromages râpés","chorizo","poivron","ognion", "olives noires" , "huile d'olive"], 
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

// let oeufs = document.getElementsByClassName('button_oeuf');
// for(let oeuf of oeufs)
// {
//   if(oeuf.clicked)
//   {
//     alert("Oeuf");
//   }
// }

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





// if(document.getElementsByClassName('button.oeuf').clicked == true) {
//     alert("Oeuf");
// }

//oeuf, frite, pate, pizza, sale, rapide

/**
 * Inject the HTML that will handle the list of meals people could buy based on a database.
 * @param {*} dinnerDatabase Database of different meals.
 */
 function initializeDinner(dinnerDatabase)
 {
     /**
      * Create an HTML elements with fast class naming
      * @param {string} tagName The name of the HTML tag to create
      * @param  {...string} classes Names of HTML classes 
      * @returns A new HTML element.
      */
     const createItem = (tagName, ...classes) => {
         const newElement = document.createElement(tagName);
         newElement.classList.add(...classes);
         return newElement;
     };
     /**
      * Create a string that combine all ingredients.
      * @param {string[]} ingredients The array containing all the ingredients.
      * @returns The newly made list of ingredients.
      */
     const appendIngredients = (ingredients) => {
         let result = '';
         for(let i = 0; i < ingredients.length; i++)
         {
             if(i == 0)
             {
                 // Make it so the first letter is upper case for the first ingredient
                 result = `${ingredients[i][0].toUpperCase()}${ingredients[i].slice(i + 1, ingredients.length)}`;
             }
             else if(i == ingredients.length - 1)
             {
                 // Since it's the last ingredient, another way of writing that string must exist
                 result = `${result} et ${ingredients[i]}.`;
             }
             else // It's a default case where we combine the result and the new ingredients, then assign it to the result
             {
                 result = `${result}, ${ingredients[i]}`;
             }
         }
         return result;
     }
     /**
      * 
      * @param {*} contentDiv The HTML element with class 'dinner_item_content'.
      * @param {*} item The actual database dinner item passed.
      */
     const createDinnerContent = (contentDiv, item) => {
         let name = createItem('h1', 'dinner_item_content_name');
         name.innerText = item.name;
         let ingredients = createItem('p', 'dinner_item_content_ingredients');
         ingredients.innerText = appendIngredients(item.ingredients);
         let price = createItem('p', 'dinner_item_content_price');
         price.innerText = `${item.price} €`;
         let shop = createItem('p', 'dinner_item_content_shop');
         shop.innerText = 'Shop';
         contentDiv.appendChild(name);
         contentDiv.appendChild(ingredients);
         contentDiv.appendChild(price);
         contentDiv.appendChild(shop);
     }
     /**
      * Create the basic hierarchy of the dinner element.
      * @param {HTMLElement} dinnerDiv The HTML element with class 'dinner_item'.
      * @param {*} item The actual database dinner item passed.
      */
     const createDinner = (dinnerDiv, item) => {
         for(let category of item.categories)
         {
             dinnerDiv.classList.add(category);
         }
         let picture = createItem('img', 'dinner_item_picture');
         picture.setAttribute('src', item.picture);
         picture.setAttribute('alt', item.name.toUpperCase());
         let content = createItem('div', 'dinner_item_content');
         // Create the content
         createDinnerContent(content, item);
         dinnerDiv.appendChild(picture);
         dinnerDiv.appendChild(content);
     };
     /**
      * Create the dinner HTML element.
      * @param {*} item The actual database dinner item passed.
      * @return {HTMLElement} The generated dinner HTML element.
      */
     const initializeDinnerElement = (item) => {
         console.log(item);
         let dinnerItem = createItem('div', 'dinner_item');
         createDinner(dinnerItem, item);
         return dinnerItem;
     };
     let dinnerContainer = document.querySelector('#dinner');
     for(let item of dinnerDatabase)
     {
         dinnerContainer.appendChild(initializeDinnerElement(item));
     }
 };

 initializeDinner(collection);




