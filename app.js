$ (document).ready(function(){

var personne=["Julien","Emilie","Dimitri","Franck","Romain","Elodie","Océane","Morel","Grégory","Raphael","Marco","Mouad","Florian","Maxime","Jordy"];
var table=[1,2,3,4,5];
var idTable=0;

function shuffle(personne) {
    var j, x, i;
    for (i = personne.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = personne[i - 1];
        personne[i - 1] = personne[j];
        personne[j] = x;
    }
}

$(".choix").click(function(){
shuffle(personne);
$("#inserer").html("");
	for (var i=0; i< personne.length; i++){
		var nomPersonne= personne[i];
		console.log(nomPersonne+idTable);

		if (idTable>=5){
			idTable=1;
		}else{
			idTable++;
		}
	$("#tableau").append("<tr><td>"+ nomPersonne +"</td><td>"+ idTable + "</td></tr>");
	}


});
});	


