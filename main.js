// THEME
function toggleTheme()
{
    let theme = document.getElementsByTagName('link')[1];
    let currentBtn = document.getElementById('dark__theme');
    if (theme.getAttribute('href') == './assets/css/style-light-theme.css')
    {
        theme.setAttribute('href', './assets/css/style-dark-theme.css');
        currentBtn.setAttribute('src', 'assets/img/moon.png');

    }
    else
    {
        theme.setAttribute('href', './assets/css/style-light-theme.css');
        currentBtn.setAttribute('src', 'assets/img/sun.png');
    }
}

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
        categories: ["pizza", "fruit"],
    },
    {
        name: "Pizza Chorizo", 
        picture: "assets/img/pchorizo.jpg", 
        ingredients: ["pâte", "sauce tomate", "fromages râpés","chorizo","poivron","ognion", "olives noires" , "huile d'olive"], 
        price: 5,
        categories: ["pizza"],
    },  
    {
        name: "Brochette Boeuf", 
        picture: "assets/img/broboeuf.jpeg", 
        ingredients: ["Poivre", "Sel", "Boeuf", "Sauce"],
        price: 4,
        categories: ["brochette"],
    },
    {
        name: "Brochette Vegan", 
        picture: "assets/img/brovegan.jpg", 
        ingredients: ["sel" , "poivre", "Mangue", "Avocat"],
        price: 7,
        categories: ["brochette", "végétarien", "vegan", "fruit"],
    },
    {
        name: "Brochette Agneau", 
        picture: "assets/img/broagneau.jpg", 
        ingredients: ["sel" , "poivre", "Sauce", "Agneau"],
        price: 7,
        categories: ["brochette"]
    }, 
    {
        name: "Brochette Canard", 
        picture: "assets/img/brocanard.jpeg", 
        ingredients: ["Sel", "Poivre", "Assaisonnement", "Canard"],
        price: 9,
        categories: ["brochette"]
    }, 
    {
        name: "Brochette Poulet", 
        picture: "assets/img/bropoulet.jpg", 
        ingredients: ["Poulet", "Sauce", "Tomates", "Sel"],
        price: 9,
        categories: ["brochette"],
    },
    {
        name: "Pizza Legume", 
        picture: "assets/img/pizzalegume.jpg", 
        ingredients: [ "Pâte", "Poivrons", "Tomates", "Maïs", "Oignons Rouges"],
        price: 5,
        categories: ["pizza", "vegan", "végétarien"],
    },   
    {
        name: "Pizza Saumon", 
        picture: "assets/img/pizzasaumon.jpg", 
        ingredients: [ "Saumon", "sel", "poivre", "Garniture"],
        price: 4,
        categories: ["pizza","végétarien"]
    },
    {
        name: "Pizza Vegan", 
        picture: "assets/img/pizzavegan.jpg", 
        ingredients: [ "Tomates", "Salades", "Olives", "Poivrons","Piment"],
        price: 6,
        categories: ["pizza", "vegan", "végétarien"]
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
        shop.setAttribute('name', item.name);
        shop.setAttribute('price', `${item.price}`);
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

const shopped = {};
const recreateShopElementList = () => {
    let itemContainer = document.querySelector('.shoppingcart__item');
    for(let i = itemContainer.childNodes.length - 1; i >= 0; i--)
    {
        itemContainer.removeChild(itemContainer.children[i]);
    }
    for(let menuName in shopped)
    {
        let writing = true;
        let caddy = shopped[menuName];
        let shopItem = document.createElement('div');
            shopItem.classList.add('shoppingcart__item__item');
            shopItem.setAttribute('qty', '1');

            let shopN = document.createElement('p');
            shopN.classList.add('shoppingcart__item__item__name');
            shopN.innerHTML = caddy.name;
            shopItem.appendChild(shopN);
            
            let shopQty = document.createElement('p');
            shopQty.classList.add('shoppingcart__item__item__quantity');
            shopQty.innerHTML = `<span>Quantité</span> : ${caddy.quantity}`;
            shopItem.appendChild(shopQty);

            let shopPr = document.createElement('p');
            shopPr.classList.add('shoppingcart__item__item__price');
            shopPr.innerHTML = `<span>Prix</span> : ${caddy.price * caddy.quantity} €`;
            shopItem.appendChild(shopPr);


            let btnContnr = document.createElement('div');
            btnContnr.classList.add('shoppingcart__item__item__btns');

            let addBtn = document.createElement('button');
            addBtn.classList.add('shoppingcart__item__item__btns__add');
            addBtn.innerHTML = "+";
            addBtn.addEventListener ("click", function(e) {
                caddy.quantity++;
                shopQty.innerHTML = `<span>Quantité</span> : ${caddy.quantity}`;
                shopPr.innerHTML = `<span>Prix</span> : ${caddy.price * caddy.quantity} €`;
                computeShopPrice();
            });
            btnContnr.appendChild(addBtn);

            let removeBtn = document.createElement('button');
            removeBtn.classList.add('shoppingcart__item__item__btns__remove');
            removeBtn.innerHTML = "-";
            removeBtn.addEventListener ("click", function(e) {
                caddy.quantity--;
                if(caddy.quantity <= 0)
                {
                    writing = false;
                    delete shopped[menuName];
                    recreateShopElementList();
                }
                else
                {
                    shopQty.innerHTML = `<span>Quantité</span> : ${caddy.quantity}`;
                    shopPr.innerHTML = `<span>Prix</span> : ${caddy.price * caddy.quantity} €`;
                    computeShopPrice();
                }
            });
            btnContnr.appendChild(removeBtn);
            
            shopItem.appendChild(btnContnr);
        if(writing)
        {
            itemContainer.appendChild(shopItem);
        }
    }
    computeShopPrice();
}
const computeShopPrice = () => {
    let total = 0;
    for(const menu in shopped)
    {
        total += shopped[menu].price * shopped[menu].quantity;
    }
    let shopTotalP = document.querySelector('.shoppingcart__footer__content__total');
    shopTotalP.innerHTML = `Total: ${total}€`;
};

// Shopping list
let clickableCaddy = document.querySelectorAll('.dinner__item__command__shop');
for (const caddy of clickableCaddy) {
    caddy.addEventListener ("click", function(e) {
        let cPath = e.composedPath();
        let shopBtn;
        if(cPath[0].classList[0] === 'dinner__item__command__shop')
        {
            shopBtn = e.composedPath()[0];
        }
        else
        {
            shopBtn = e.composedPath()[1];
        }
        let shopMenuName = shopBtn.name;
        let shopPrice = shopBtn.getAttribute('price');
        if(shopped[shopMenuName] !== undefined)
        {
            shopped[shopMenuName].quantity++;
        }
        else
        {
            shopped[shopMenuName] = {
                name: shopMenuName,
                price: shopPrice,
                quantity: 1
            };
        }
        recreateShopElementList();
    });
}

const clickOnShoppingCart =() =>{
    let shoppingCart = document.getElementsByClassName('container')
    if(shoppingCart[0].style.display == "none"){
        shoppingCart[0].style.display = "inline"
    } else {
        shoppingCart[0].style.display = "none"
    }
}
const displayShoppingCart = document.querySelector('nav').lastElementChild.firstElementChild
displayShoppingCart.addEventListener('click', clickOnShoppingCart)
clickOnShoppingCart(); // Initialize the shopping card......