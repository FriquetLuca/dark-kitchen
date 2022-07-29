const clickOnShoppingCart =(e) =>{
    let shoppingCart = document.getElementsByClassName('container')
    if(shoppingCart[0].style.display == "none"){
        shoppingCart[0].style.display = "inline"
    } else {
        shoppingCart[0].style.display = "none"
    }
    
}

const displayShoppingCart = document.querySelector('nav').lastElementChild.firstElementChild
displayShoppingCart.addEventListener('click', clickOnShoppingCart)