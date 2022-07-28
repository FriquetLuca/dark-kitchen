// Set every checkbox to false by default
let inputs = document.getElementsByTagName('input');
for (let i = 0; i < inputs.length; i++)
{
    if (inputs[i].type == 'checkbox')
    {
        inputs[i].checked = false;
    }
}

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
        categories: ["pâtes"],
    },
    {
        name: "Pâtes Bolognaise", 
        picture: "assets/img/pabolo.jpg", 
        ingredients: ["spaghettis", "boeuf haché","carotte", "champignons" , "tomates pelées", "oignons", "gousses d’ail" , "huile", "thym", "laurier" ,"sel" , "poivre"],
        price: 7,
        categories: ["pâtes"],
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
        categories: ["frite"]
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
    },
    {
        name: "Oeuf a la coque", 
        picture: "assets/img/oeufcoque.jpg", 
        ingredients: [ "oeuf", "beurre", "sel", "poivre", "persil"],
        price: 6,
        categories: ["oeuf"]
    },
];

function createCategoryHTML()
{
    const generateCategories = () => {
        let x = [];
        for(let element of collection)
        {
            for(let item of element.categories)
            {
                x.push(item);
            }
        }
        const uniqueElement = (value, index, self) => {
            return self.indexOf(value) === index;
        }
        return x.filter(uniqueElement);
    }
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    let cats = generateCategories();
    const btnFilt = document.querySelector('.button__filter');
    for(let cat of cats)
    {
        const button1 = document.createElement('div');
        button1.classList.add('button1');
        button1.innerHTML = `
        <p class="button__title">${capitalizeFirstLetter(cat)}</p>
        <label class="switch">
            <input type="checkbox" class="button__filter">
            <span class="slider round"></span>
        </label>
        `;
        btnFilt.appendChild(button1);
    }
}
createCategoryHTML();
// END DATABASE ------------------------------------------

const getCategoryItems = (catt) => {
    const getClasses = (cat) => {
        let result = '';
        for(let i = 0; i < cat.length; i++)
        {
            if(i != cat.length - 1)
            {
                result = `${result}.${cat[i]}, `;
            }
            else
            {
                result = `${result}.${cat[i]}`;
            }
        }
        return result;
    };
    return document.querySelectorAll(getClasses(catt));
}
// FILTER------------------------------------------------------
// Hover element
const filterButtons = document.querySelectorAll('.button__filter > .button1');
for(let filterBtn of filterButtons)
{
    filterBtn.addEventListener("click", () => {
        const menus = document.querySelectorAll('.dinner__item');
        for(let menu of menus)
        {
            menu.style.display = 'block';
        }
        for(let fBtn of filterButtons)
        {
            let pName = fBtn.querySelector('.button__title');
            let cBox = fBtn.querySelector('.switch > .button__filter');
            if(cBox.checked)
            {
                const nodeIncluded = (nodeList, includedValue) => {
                    for(let item of nodeList)
                    {
                        if(`${item}`.toLowerCase() == `${includedValue}`.toLowerCase())
                        {
                            return true;
                        }
                    }
                    return false;
                };
                for(let menu of menus)
                {
                    if(!nodeIncluded(menu.classList, pName.innerHTML)) // Not included
                    {
                        menu.style.display = 'none';
                    }
                }
            }
        }
    });
}

//END  FILTER -----------------------------------

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
        let name = createItem('h1', 'dinner__item__content__name');
        name.innerText = item.name;
        let ingredients = createItem('p', 'dinner__item__content__ingredients');
        ingredients.innerText = appendIngredients(item.ingredients);
        
        contentDiv.appendChild(name);
        contentDiv.appendChild(ingredients);
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
        let picture = createItem('img', 'dinner__item__picture');
        picture.setAttribute('src', item.picture);
        picture.setAttribute('alt', item.name.toUpperCase());
        let content = createItem('div', 'dinner__item__content');
        // Create the content
        createDinnerContent(content, item);
        let command = createItem('div', 'dinner__item__command');
        let price = createItem('p', 'dinner__item__command__price');
        price.innerText = `${item.price} €`;
        let shop = createItem('button', 'dinner__item__command__shop');
        let shopImg = createItem('img', 'dinner__item__command__shop__icon');
        shopImg.setAttribute('src', 'assets/img/shopping-cart.png');
        shopImg.setAttribute('alt', 'shopping cart');
        shop.appendChild(shopImg);
        command.appendChild(price);
        command.appendChild(shop);
        dinnerDiv.appendChild(picture);
        dinnerDiv.appendChild(content);
        dinnerDiv.appendChild(command);
    };
    /**
     * Create the dinner HTML element.
     * @param {*} item The actual database dinner item passed.
     * @return {HTMLElement} The generated dinner HTML element.
     */
    const initializeDinnerElement = (item) => {
        let dinnerItem = createItem('div', 'dinner__item');
        createDinner(dinnerItem, item);
        return dinnerItem;
    };
    let dinnerContainer = document.querySelector('#dinner');
    for(let item of dinnerDatabase)
    {
        dinnerContainer.appendChild(initializeDinnerElement(item));
    }
}

initializeDinner(collection);