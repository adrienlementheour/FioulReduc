///////////////
// variables //
///////////////

/////////////////////////////////////////////////////////////////////////
/////// FONCTION POUR OUVRIR ET FERMER LE BLOC COMMANDE DE LA HOME //////
/////////////////////////////////////////////////////////////////////////
function ouvertureFermetureBlocCommandeHome(type){
	if (type=="ouverture") {
		if (!$("#bloc-commande").hasClass("bloc-ouvert")){
			$("#bloc-commande").addClass("bloc-ouvert");
			TweenMax.to($("#masque-form-home"), 0.5, {height: "240px", ease:Cubic.easeInOut});
		}
	}else {
		if (!$("#bloc-commande").hasClass("bloc-ouvert")){
			$("#bloc-commande").addClass("bloc-ouvert");
			TweenMax.to($("#masque-form-home"), 0.5, {height: "240px", ease:Cubic.easeInOut});
		}else{
			$("#bloc-commande").removeClass("bloc-ouvert");
			TweenMax.to($("#masque-form-home"), 0.5, {height: "50px", ease:Cubic.easeInOut});
		}
	}
}

$(document).ready(function(){
	if($("body").hasClass("home")){
		// Dépliage du bloc "commandez votre fioul"
		$("a#fil-commande").click(function(){
			ouvertureFermetureBlocCommandeHome();
			return false;
		});
		$("#order-zipcode").focusin(function(){
			ouvertureFermetureBlocCommandeHome("ouverture");
			return false;
		});
		
		// Clic sur le bandeau des références
		$("ul.refs").click(function(){
			window.location.href = "#";
			return false;
		});
	}
});

$( window ).resize(function() {

});