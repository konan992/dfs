const nomClient = "Awa";
const nomProduit = "Ordinateur";
const prixUnitaire = 250000;
const quantite = 2;
const fraisLivraison = 5000;
const tauxTVA = 18 / 100;

console.log("--- REÇU DE COMMANDE ---");

console.log("Client :", nomClient);
console.log("Produit :", nomProduit);
console.log("Prix unitaire :", prixUnitaire, "FCFA");

const montantTotalProduits = prixUnitaire * quantite;
const montantTVA = montantTotalProduits * tauxTVA;
const montantTTC = montantTotalProduits + montantTVA;
const montantFinalAPayer = montantTTC + fraisLivraison;
const prixMoyenTTC = montantTTC / quantite;

console.log("Quantité :", quantite);
console.log("Montant hors taxe :", montantTotalProduits, "FCFA");
console.log(`Montant TVA (${tauxTVA * 100}%) :`, montantTVA, "FCFA");
console.log("Montant TTC :", montantTTC, "FCFA");
console.log("Frais de livraison :", fraisLivraison, "FCFA");
console.log("Prix moyen par produit (TTC) :", prixMoyenTTC, "FCFA");
console.log("TOTAL À PAYER :", montantFinalAPayer, "FCFA");