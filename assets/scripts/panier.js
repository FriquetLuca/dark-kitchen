function LignePanier (qte, prix)
{
    this.qteArticle = qte;
    this.prixArticle = prix;
    this.ajouterQte = function(qte)
    {
        this.qteArticle += qte;
    }
    this.getPrixLigne = function()
    {
        var resultat = this.prixArticle * this.qteArticle;
        return resultat;
    }
}

function Panier()
{
    this.liste = [];
    this.ajouterArticle = function(qte, prix)
    { 
        let index = this.getArticle(code);
        if (index == -1) this.liste.push(new LignePanier(qte, prix));
        else this.liste[index].ajouterQte(qte);
    }
    this.getPrixPanier = function()
    {
        let total = 0;
        for(let i = 0 ; i < this.liste.length ; i++)
            total += this.liste[i].getPrixLigne();
        return total;
    }
}