var factoriel=parseInt(prompt("Entrez le factoriel à calculer")), resultat=1 ;
// on utilise parseInt() pour convertir le caractère en un nombre, même si cela n’est pas nécessaire.
for (var i=1 ; i<=factoriel ; i++) {resultat*=i ;} // calcul le résultat.
alert("Le résultat de " + factoriel +"5 est : " + resultat); // affiche le résultat