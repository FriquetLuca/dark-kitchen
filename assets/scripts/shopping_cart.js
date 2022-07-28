// let clickableCaddy = document.getElementsByClassName('shop');
// for (e of clickableCaddy) {
//     e.addeventlistener("click", function(){

//     })
// }

// function LignePanier (nom, qte, prix)
// {
//     this.nomArticle = nom;
//     this.qteArticle = qte;
//     this.prixArticle = prix;
//     this.ajouterQte = function(qte)
//     {
//         this.qteArticle += qte;
//     }
//     this.getPrixLigne = function()
//     {
//         let resultat = this.prixArticle * this.qteArticle;
//         return resultat;
//     }
//     this.getNom = function() 
//     {
//         return this.nomArticle;
//     }
// }

// function Panier()
// {
//     this.liste = [];
//     this.ajouterArticle = function(nom, qte, prix)
//     { 
//         let index = this.getArticle(nom);
//         if (index == -1) this.liste.push(new LignePanier(nom, qte, prix));
//         else this.liste[index].ajouterQte(qte);
//     }
//     this.getPrixPanier = function()
//     {
//         let total = 0;
//         for(let i = 0 ; i < this.liste.length ; i++)
//             total += this.liste[i].getPrixLigne();
//         return total;
//     }
//     this.getArticle = function(nom)
//     {
//         for(let i = 0 ; i <this.liste.length ; i++)
//             if (nom == this.liste[i].getCode()) return i;
//         return -1;
//     }
//     this.supprimerArticle = function(nom)
//     {
//         let index = this.getArticle(nom);
//         if (index > -1) this.liste.splice(index, 1);
//     }
// }

