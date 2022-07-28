// Notre panier permettra de stocker les articles choisis par le client. 
// Il sera constitué de « lignes panier ». 
// Chaque ligne sera dédiée à un article choisi et comprendra : le code produit, la quantité, et le prix unitaire.

// Les opérations réalisables par le client avec cet objet seront :

// ajouter un article ;
// retirer un article ;
// calculer le prix d'une ligne ;
// calculer le prix total du panier.
// On aura donc un objet Panier qui sera une collection d'objets LignePanier.



// function LignePanier (code, qte, prix)
// {
//     this.codeArticle = code;
//     this.qteArticle = qte;
//     this.prixArticle = prix;
//     this.ajouterQte = function(qte)
//     {
//         this.qteArticle += qte;
//     }
//     this.getPrixLigne = function()
//     {
//         var resultat = this.prixArticle * this.qteArticle;
//         return resultat;
//     }
//     this.getCode = function() 
//     {
//         return this.codeArticle;
//     }
// }



// function Panier()
// {
//     this.liste = [];
//     this.ajouterArticle = function(code, qte, prix)
//     { 
//         var index = this.getArticle(code);
//         if (index == -1) this.liste.push(new LignePanier(code, qte, prix));
//         else this.liste[index].ajouterQte(qte);
//     }
//     this.getPrixPanier = function()
//     {
//         var total = 0;
//         for(var i = 0 ; i < this.liste.length ; i++)
//             total += this.liste[i].getPrixLigne();
//         return total;
//     }
//     this.getArticle = function(code)
//     {
//         for(var i = 0 ; i <this.liste.length ; i++)
//             if (code == this.liste[i].getCode()) return i;
//         return -1;
//     }
//     this.supprimerArticle = function(code)
//     {
//         var index = this.getArticle(code);
//         if (index > -1) this.liste.splice(index, 1);
//     }
// }


// function ajouter()
// {
//     var code = parseInt(document.getElementById("id").value);
//     var qte = parseInt(document.getElementById("qte").value);
//     var prix = parseInt(document.getElementById("prix").value);
//     var monPanier = new Panier();
//     monPanier.ajouterArticle(code, qte, prix);
//     var tableau = document.getElementById("tableau");
//     var longueurTab = parseInt(document.getElementById("nbreLignes").innerHTML);
//     if (longueurTab > 0)
//     {
//         for(var i = longueurTab ; i > 0  ; i--)
//         {
//             monPanier.ajouterArticle(parseInt(tableau.rows[i].cells[0].innerHTML), parseInt(tableau.rows[i].cells[1].innerHTML), parseInt(tableau.rows[i].cells[2].innerHTML));
//             tableau.deleteRow(i);
//         }
//     }
//     var longueur = monPanier.liste.length;
//     for(var i = 0 ; i < longueur ; i++)
//     {
//         var ligne = monPanier.liste[i];
//         var ligneTableau = tableau.insertRow(-1);
//         var colonne1 = ligneTableau.insertCell(0);
//         colonne1.innerHTML += ligne.getCode();
//         var colonne2 = ligneTableau.insertCell(1);
//         colonne2.innerHTML += ligne.qteArticle;
//         var colonne3 = ligneTableau.insertCell(2);
//         colonne3.innerHTML += ligne.prixArticle;
//         var colonne4 = ligneTableau.insertCell(3);
//         colonne4.innerHTML += ligne.getPrixLigne();
//         var colonne5 = ligneTableau.insertCell(4);
//         colonne5.innerHTML += "<button class=\"btn btn-primary\" type=\"submit\" onclick=\"supprimer(this.parentNode.parentNode.cells[0].innerHTML)\"><span class=\"glyphicon glyphicon-remove\"></span> Retirer</button>";
//     }
//     document.getElementById("prixTotal").innerHTML = monPanier.getPrixPanier();
//     document.getElementById("nbreLignes").innerHTML = longueur;
// }

// function supprimer(code)
// {
//     var monPanier = new Panier();
//     var tableau = document.getElementById("tableau");
//     var longueurTab = parseInt(document.getElementById("nbreLignes").innerHTML);
//     if (longueurTab > 0)
//     {
//         for(var i = longueurTab ; i > 0  ; i--)
//         {
//             monPanier.ajouterArticle(parseInt(tableau.rows[i].cells[0].innerHTML), parseInt(tableau.rows[i].cells[1].innerHTML), parseInt(tableau.rows[i].cells[2].innerHTML));
//             tableau.deleteRow(i);
//         }
//     }
//     monPanier.supprimerArticle(code);
//     var longueur = monPanier.liste.length;
//     for(var i = 0 ; i < longueur ; i++)
//     {
//         var ligne = monPanier.liste[i];
//         var ligneTableau = tableau.insertRow(-1);
//         var colonne1 = ligneTableau.insertCell(0);
//         colonne1.innerHTML += ligne.getCode();
//         var colonne2 = ligneTableau.insertCell(1);
//         colonne2.innerHTML += ligne.qteArticle;
//         var colonne3 = ligneTableau.insertCell(2);
//         colonne3.innerHTML += ligne.prixArticle;
//         var colonne4 = ligneTableau.insertCell(3);
//         colonne4.innerHTML += ligne.getPrixLigne();
//         var colonne5 = ligneTableau.insertCell(4);
//         colonne5.innerHTML += "<button class=\"btn btn-primary\" type=\"submit\" onclick=\"supprimer(this.parentNode.parentNode.cells[0].innerHTML)\"><span class=\"glyphicon glyphicon-remove\"></span> Retirer</button>";
//     }
//     document.getElementById("prixTotal").innerHTML = monPanier.getPrixPanier();
//     document.getElementById("nbreLignes").innerHTML = longueur;
// }

let clickableCaddy = document.querySelectorAll('.dinner__item__command__shop');

// Pour 1 click sur le bouton avec la classe "dinner__item__command__shop" extraire le nom, le prix x qte 
// (de la div correspondante) et donner x 1  pour qte
// Transférer ce qui a été extrait dans une div liée au bouton shopping cart
// Ajouter un sigle - à coté de qte pour pour retirer 1 à qte et supprimer div si ça arrive à 0
// pour chaque click dans la même div incrémenter qte de 1
// pour 1 click dans une autre autre div répéter et transférer dans une nouvelle div liée au bouton shopping cart 
// Créer une dernière div ds la div liée au bouton shopping cart pour le prix total 
// (soit le total des div précédentes où on a fait qte x prix des div du dessus)

for (const caddy of clickableCaddy) {
    caddy.addEventListener ("click", function(e) {
        takeDinner()

    })
}

function takeDinner() {
    let dinner = document.querySelector('.dinner__item');
    console.log(dinner);

    


}