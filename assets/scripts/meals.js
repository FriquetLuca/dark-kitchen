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