//////////////////////////////////////////////////
//////////////// REQUESTANIMFRAME ////////////////
//////////////////////////////////////////////////
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
          function(callback){
            window.setTimeout(callback, 1000/60);
          };
})();

///////////////////////////////////////////////////////
////////// FONCTION POUR GERER LES TOOLTIPS ///////////
///////////////////////////////////////////////////////
function tooltip(){
	$(".has-tooltip").tooltip();
}

///////////////////////////////////////////////////////
/////////// FONCTION POUR GERER LES MODALS ////////////
///////////////////////////////////////////////////////
function modal(){
	$(".has-modal").click(function() {
		$(".modal").modal('toggle');
	});
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
// FONCTION POUR GERER LES ZONES DE FORMULAIRE QUI FONT APPARAITRE DES DETAILS SPECIFIQUES EN SIDEBAR //
////////////////////////////////////////////////////////////////////////////////////////////////////////
function details(){
	$(".has-detail").click(function(){
		var blocParent = $(this).closest(".bloc-blanc-ombre");
		// on enlève les details optionnels déjà affichés dans la sidebar
		$(".part-details .detail-cycle.optionnel.active", blocParent).removeClass("active")
		// on affiche les details correspondant à l'option de formulaire active
		var classDetail = ".detail-"+$(this).attr("id");
		$(".part-details .detail-cycle.optionnel"+classDetail).addClass("active");
	});
}

///////////////////////////////////////////////////////////////////////
////////// FONCTION POUR ANIMER UN CHANGEMENT SUR LE TICKET ///////////
///////////////////////////////////////////////////////////////////////
function animTicket(){	
	if($(window).width()>=768){
		var tlAnimTicket;
		tlAnimTicket = new TimelineMax();
		tlAnimTicket.to($("#content-bloc-ticket-fixed"), 0.3, {rotationX: 5, rotationY: 3, skewX:"1deg", delay: 0.2, ease:Cubic.easeOut});
		tlAnimTicket.to($("#content-bloc-ticket-fixed"), 0.7, {rotationX: 0, rotationY: 0, skewX:"0deg", ease:Back.easeOut});
		
		var tlAnimOmbreTicket;
		tlAnimOmbreTicket = new TimelineMax();
		tlAnimOmbreTicket.to($("#ombre-ticket-fixed"), 0.3, {opacity: 0.6, delay: 0.5, ease:Cubic.easeOut});
		tlAnimOmbreTicket.to($("#ombre-ticket-fixed"), 0.7, {opacity: 1, ease:Back.easeOut});
	}
	
	// Animer le prix du ticket //
	var currentTicketPrice = parseFloat($("#prix-total-ticket-anim").text().replace(",", "."));
	var currentTicketPriceComma = (currentTicketPrice.toString()).replace(".", ",");
	var newTicketPrice = currentTicketPrice-100;
	var newTicketPriceComma = (newTicketPrice.toString()).replace(".", ",");
	
	// how many decimal places allows
	var decimal_places = 2;
	var decimal_factor = decimal_places === 0 ? 1 : decimal_places * 10;
	
	$("#prix-total-ticket-anim").prop("number", currentTicketPriceComma).animateNumber({
	      number: newTicketPrice * decimal_factor,
	
	      numberStep: function(now, tween) {
	        var floored_number = Math.floor(now) / decimal_factor,
	            target = $(tween.elem);
	
	        if (decimal_places > 0) {
	          // force decimal places even if they are 0
	          floored_number = floored_number.toFixed(decimal_places);
	
	          // replace '.' separator with ','
	          floored_number = floored_number.toString().replace('.', ',');
	        }
	
	        target.text(floored_number);
	      }
	    },
	    800
	  );
}

/////////////////////////////////////////////////////////
// FONCTION POUR GERER LA POSITION DU TICKET AU SCROLL //
/////////////////////////////////////////////////////////
function positionTicketScroll(myScroll){
	if($("body").hasClass("cycle")){
		if($(window).width()>=768){
			var debutScroll = ($("#top-body-ticket").offset().top)-($("header").height())+4;
			var debutScrollResp = ($("#top-body-ticket").offset().top)+4;
			var offsetBottomTicket = 310;
			var finScroll = $("#avis-footer").offset().top-$("#ticket-fixed").height()-offsetBottomTicket;
			if($(window).width()>1150){
				TweenMax.set($("#content-ticket-fixed"), {rotation: 1.5});
				if (myScroll>=debutScroll && myScroll<finScroll+$("header").height()) {
					TweenMax.set($("#ticket-fixed"), {position: "fixed", top: "70px"});
				} else {
					$("#ticket-fixed").css("position","absolute");
					TweenMax.set($("#ticket-fixed"), {position: "absolute"});
					if (myScroll<debutScroll) {
						TweenMax.set($("#ticket-fixed"), {top: "15px"});
					} else {
						TweenMax.set($("#ticket-fixed"), {top: finScroll-33-$("header").height()+"px"}); /* Je ne sais pas d'où viens le 33 :) */
					}
				}
			}else{
				TweenMax.set($("#content-ticket-fixed"), {rotation: 0});
				if (myScroll>=debutScrollResp && myScroll<finScroll+$("header").height()) {
					TweenMax.set($("#ticket-fixed"), {position: "fixed", top: "16px"});
				} else {
					$("#ticket-fixed").css("position","absolute");
					TweenMax.set($("#ticket-fixed"), {position: "absolute"});
					if (myScroll<debutScrollResp) {
						TweenMax.set($("#ticket-fixed"), {top: "15px"});
					} else {
						TweenMax.set($("#ticket-fixed"), {top: finScroll-160}); /* Je ne sais pas d'où viens le 33 :) */
					}
				}
			}
		}else{
			TweenMax.set($("#ticket-fixed"), {position: "relative", top: 0});
			TweenMax.set($("#content-ticket-fixed"), {rotation: 0});
		}
	}
}

//////////////////////////////////////////////////
////////// FONCTION POUR FIXER UN BLOC ///////////
//////////////////////////////////////////////////
function fixBloc(id_string, scrollBegin, scrollEnd) {
	var myScroll = $(document).scrollTop();
	if (myScroll>=scrollBegin && myScroll<scrollEnd && $(window).width()>979) {
		$(id_string).css("position","fixed");
		$(id_string).css("top","0px");
	} else {
		$(id_string).css("position","absolute");
		if (myScroll<scrollBegin) {
			$(id_string).css("top",scrollBegin+"px");
		} else {
			$(id_string).css("top",scrollEnd+"px");
		}
	}
}

//////////////////////////////////////////////////
/////////// MOIS HIGHCHARTS EN FRANÇAIS //////////
//////////////////////////////////////////////////
Highcharts.setOptions({
	lang: {
	months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
	shortMonths: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aout', 'Sept', 'Oct', 'Nov', 'Déc'],
	weekdays: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
	decimalPoint: ",",
	loading: "Chargement en cours...",
	thousandsSep: " "
	}
});

///////////////////////////////////////////////////////
////////// FONCTION AFFICHER LE SELECT CUSTOM /////////
///////////////////////////////////////////////////////
function customSelect(){
	if(($("html").hasClass("no-touch"))&&($(".select-customisable").length)){
		TweenMax.set($(".select-customisable"), {opacity: "0", "pointer-events": "none"});
		TweenMax.set($(".select-customise"), {opacity: "1"});
		TweenMax.set($("ul.select-customise"), {display: "block"});
		$("ul.select-customise li a").click(function(){
			$(".radio-paiement")[0].checked = true;
			var controls = $(this).closest(".controls");
			$("> .active", controls).removeClass("active");
			$(this).closest(".radio-block").addClass("active");
			var liClique = $(this).closest("li");
			var ulClique = $(this).closest("ul.select-customise");
			var idUlClique = ulClique.attr("id");
			var selectCusto = $("#"+idUlClique+"-custom");
			if(!liClique.hasClass("selected")){
				$("li.selected", ulClique).removeClass("selected");
				liClique.addClass("selected");
				var indexLi = liClique.index();
				$("option:eq("+indexLi+")", selectCusto).prop("selected", true);
				animTicket();
				
				// mettre à jour les valeurs de tooltip
				var indexLiPaiement = liClique.index();
				switch (indexLiPaiement) {
					case 0:
						$(".has-tooltip-commande").eq(0).attr("data-original-title", "");
						$(".has-tooltip-commande").eq(1).attr("data-original-title", "+ 10€");
						$(".has-tooltip-commande").eq(2).attr("data-original-title", "+ 15€");
						$(".has-tooltip-commande").eq(3).attr("data-original-title", "+ 20€");
						$(".has-tooltip-commande").eq(4).attr("data-original-title", "+ 25€");
						break;
					case 1:
						$(".has-tooltip-commande").eq(0).attr("data-original-title", "- 10€");
						$(".has-tooltip-commande").eq(1).attr("data-original-title", "");
						$(".has-tooltip-commande").eq(2).attr("data-original-title", "+ 5€");
						$(".has-tooltip-commande").eq(3).attr("data-original-title", "+ 10€");
						$(".has-tooltip-commande").eq(4).attr("data-original-title", "+ 15€");
						break;
					case 2:
						$(".has-tooltip-commande").eq(0).attr("data-original-title", "- 15€");
						$(".has-tooltip-commande").eq(1).attr("data-original-title", "- 5€");
						$(".has-tooltip-commande").eq(2).attr("data-original-title", "");
						$(".has-tooltip-commande").eq(3).attr("data-original-title", "+ 5€");
						$(".has-tooltip-commande").eq(4).attr("data-original-title", "+ 10€");
						break;
					case 3:
						$(".has-tooltip-commande").eq(0).attr("data-original-title", "- 20€");
						$(".has-tooltip-commande").eq(1).attr("data-original-title", "- 10€");
						$(".has-tooltip-commande").eq(2).attr("data-original-title", "- 5€");
						$(".has-tooltip-commande").eq(3).attr("data-original-title", "");
						$(".has-tooltip-commande").eq(4).attr("data-original-title", "+ 5€");
						break;
					case 4:
						$(".has-tooltip-commande").eq(0).attr("data-original-title", "- 25€");
						$(".has-tooltip-commande").eq(1).attr("data-original-title", "- 15€");
						$(".has-tooltip-commande").eq(2).attr("data-original-title", "- 10€");
						$(".has-tooltip-commande").eq(3).attr("data-original-title", "- 5€");
						$(".has-tooltip-commande").eq(4).attr("data-original-title", "");
						break;
				}
				liClique.tooltip("hide");
			}
			// afficher detail specifique
			if (liClique.hasClass("has-detail")){
				var blocParent = $(this).closest(".bloc-blanc-ombre");
				// on enlève les details optionnels déjà affichés dans la sidebar
				$(".part-details .detail-cycle.optionnel.active", blocParent).removeClass("active")
				// on affiche les details correspondant à l'option de formulaire active
				var classDetail = ".detail-"+liClique.attr("id");
				$(".part-details .detail-cycle.optionnel"+classDetail).addClass("active");
			}
			return false;
		});
	}
}

//////////////////////////////////////////////////////////////////////////////////////////
/////////// FONCTION POUR DECTECTER SI IL Y A PLUS DE DEUX CUVES DANS LE TICKET //////////
//////////////////////////////////////////////////////////////////////////////////////////
function overflowCuvesTicket(){
	var nbLiCuves = $("#cuves-ticket li.cuve-ticket").size();
	if(nbLiCuves > 2){
		// si il y a plus de deux cuves dans le ticket, on affiche le bouton pour voir le détail
		TweenMax.set($("#overflow-cuves"), {display: "block"});
	}else {
		TweenMax.set($("#overflow-cuves"), {display: "none"});
	}
	
	$("a#btn-overflow-cuves").click(function() {
		if (!$("#cuves-ticket").hasClass("open")) {
			$("#cuves-ticket").addClass("open");
			$(".txt-btn", this).text("Masquer le détail");
			TweenMax.to($(".ic-bottom", this), 0.3, {rotation: -180, ease:Cubic.easeOut});
		}else{
			$("#cuves-ticket").removeClass("open");
			$(".txt-btn", this).text("Voir le détail");
			TweenMax.to($(".ic-bottom", this), 0.3, {rotation: 0, ease:Cubic.easeOut});
		}
		return false;
	});
}

///////////////////////////////////////////////////////
/////////// FONCTION POUR ANIMER LE COMPTEUR //////////
///////////////////////////////////////////////////////
function compteur(){
	// valeur max compteur
	var valeurMaxCompteur = 1456622570;
	// valeur compteur init
	var valeurCompteur = 1456622470;
    var compteur = new Odometer({ el: $('.compteur')[0], theme: 'train-station', value: valeurCompteur });
    compteur.render();

    setInterval(function(){
    	if (valeurCompteur <= valeurMaxCompteur) {
    		compteur.update(valeurCompteur++);	
    	}
    }, 3000);
}

///////////////////////////////////////////////////////
////// FONCTION POUR FAIRE INITIALISER LE TICKET //////
///////////////////////////////////////////////////////
function bodyTicket(){
	var heightBodyTicket = $("#ticket-fixed").height();
	TweenMax.set($("#content-ticket-fixed"), {y: "-"+heightBodyTicket+"px"});
	bodyTicketScroll();
}

///////////////////////////////////////////////////////
////// FONCTION POUR FAIRE APPARAITRE LE TICKET ///////
///////////////////////////////////////////////////////
function bodyTicketScroll(){
	TweenMax.to($("#content-ticket-fixed"), 1.5, {y: "-6px", ease:Cubic.easeInOut});
	TweenMax.to($("#top-body-ticket"), 2, {className:"ticket-here", ease:Cubic.easeInOut});
}

function heightTicket(){
	if($(window).width()>=768){
		var heightBlocCycle = $("#bloc-cycle").height();
		$("#ticket").css("height",heightBlocCycle+"px");
	}else {
		$("#ticket").css("height", "auto");
	}
}

//////////////////////////////////////////////////////////////////
////// FONCTION POUR OUVRIR ET FERMER LE CODE DE REDUCTION ///////
//////////////////////////////////////////////////////////////////
function codeReduction(){
	TweenMax.set($("#code-reduction"), {display: "none"});
	
	$("a#btn-code-reduction").click(function() {
		TweenMax.set($("#code-reduction"), {display: "inline-block"});
		TweenMax.set($("a#btn-code-reduction"), {display: "none"});
		return false;
	});
	
	$("#btn-code-reduction-retour").click(function() {
		TweenMax.set($("#code-reduction"), {display: "none"});
		TweenMax.set($("a#btn-code-reduction"), {display: "inline-block"});
		return false;
	});
}


/////////////////////////////////////////////////////////////////////////
/////////// FONCTION POUR OUVRIR ET FERMER LE MENU RESPONSIVE //////////
/////////////////////////////////////////////////////////////////////////
function ouvertureFermetureMenuResponsive(){
	if (!$("body").hasClass("menu-ouvert")){
		TweenMax.to($(".big-container"), 0.3, {x: "250px", ease:Cubic.easeInOut});
		$("body").addClass("menu-ouvert");
		TweenMax.fromTo ($("#masque-container"), 0.3, {opacity:0}, {opacity:1,display:'block', ease:Cubic.easeInOut});
		$("a#bouton-menu-responsive").addClass("active");
	}else{
		TweenMax.to($(".big-container"), 0.3, {x: "0", ease:Cubic.easeInOut});
		$("body").removeClass("menu-ouvert");
		TweenMax.fromTo ($("#masque-container"), 0.3, {opacity:1}, {opacity:0,display:'none'});
		$("a#bouton-menu-responsive").removeClass("active");
	}
}

/////////////////////////////////////////////////////////////////////////
/////// FONCTION POUR OUVRIR ET FERMER LE BLOC COMMANDE DE LA HOME //////
/////////////////////////////////////////////////////////////////////////
function ouvertureFermetureBlocCommandeHome(type){
	if($(window).width()>480){
		if (type=="ouverture") {
			if (!$("#bloc-commande").hasClass("bloc-ouvert")){
				$("#bloc-commande").addClass("bloc-ouvert");
				TweenMax.to($("#masque-form-home"), 0.5, {height: "260px", ease:Cubic.easeInOut});
			}
		}else {
			if (!$("#bloc-commande").hasClass("bloc-ouvert")){
				$("#bloc-commande").addClass("bloc-ouvert");
				TweenMax.to($("#masque-form-home"), 0.5, {height: "260px", ease:Cubic.easeInOut});
			}else{
				$("#bloc-commande").removeClass("bloc-ouvert");
				TweenMax.to($("#masque-form-home"), 0.5, {height: "50px", ease:Cubic.easeInOut});
			}
		}
	}else{
		if (type=="ouverture") {
			if (!$("#bloc-commande").hasClass("bloc-ouvert")){
				$("#bloc-commande").addClass("bloc-ouvert");
				TweenMax.to($("#masque-form-home"), 0.5, {height: "380px", ease:Cubic.easeInOut});
			}
		}else {
			if (!$("#bloc-commande").hasClass("bloc-ouvert")){
				$("#bloc-commande").addClass("bloc-ouvert");
				TweenMax.to($("#masque-form-home"), 0.5, {height: "380px", ease:Cubic.easeInOut});
			}else{
				$("#bloc-commande").removeClass("bloc-ouvert");
				TweenMax.to($("#masque-form-home"), 0.5, {height: "80px", ease:Cubic.easeInOut});
			}
		}
	}
}

$(document).bind('touchmove', function(e) { 
   var myScroll = $(document).scrollTop();
   positionTicketScroll(myScroll);
});

function animer(myScroll){
	if(($(window).width()>1024)&&(!$("html").hasClass("lt-ie9"))) {
		if (myScroll>=$(document).height()-$(window).height()-471) {
			var xPos = -(myScroll-$(document).height()+$(window).height());
			TweenMax.set($("#journal"), {y:xPos, rotation: 12});
		} else {
			TweenMax.set($("#journal"), {y:250, rotation: 12});
		}
	}else if($(window).width()>480) {
		if (myScroll>=$(document).height()-$(window).height()-471) {
			var xPos = -(myScroll-$(document).height()+$(window).height());
			TweenMax.set($("#journal"), {y:xPos, rotation: 0});
		} else {
			TweenMax.set($("#journal"), {y:250, rotation: 0});
		}
	}else {
		TweenMax.set($("#journal"), {y:0, rotation: 0});
	}
	
	positionTicketScroll(myScroll);
	
	requestAnimFrame(function(){
		myScroll = $(document).scrollTop();
		animer(myScroll);
	});
	
}

$( window ).resize(function() {
	if($("body").hasClass("home")){
		if($(window).width()>480) {
			if ($("#bloc-commande").hasClass("bloc-ouvert")){
				$("#masque-form-home").css("height","260px");
			}else{
				$("#masque-form-home").css("height","50px");
			}
		}else{
			if ($("#bloc-commande").hasClass("bloc-ouvert")){
				$("#masque-form-home").css("height","380px");
			}else{
				$("#masque-form-home").css("height","80px");
			}
		}
	}
	
	if ($("body").hasClass("menu-ouvert")){
		TweenMax.to($(".big-container"), 0.5, {x: "0", ease:Cubic.easeInOut});
		TweenMax.fromTo ($("#masque-container"), 0.3, {opacity:1}, {opacity:0,display:'none'});
		$("body").removeClass("menu-ouvert");
		$("a#bouton-menu-responsive").removeClass("active");
	}
	$("li.has-dropdown.dd-open").removeClass("dd-open");
	
	if($("body").hasClass("cycle")){
		heightTicket();
	}
});

$(document).ready(function(){
	myScroll = $(document).scrollTop();
	animer(myScroll);
	tooltip();
	modal();
	
	$("a#bouton-menu-responsive").click(function(){
		ouvertureFermetureMenuResponsive();
		return false;
	});
	$("#masque-container").click(function(){
		ouvertureFermetureMenuResponsive();
		return false;
	});
	
	$(".alert .close").click(function(){
		$("body").removeClass("alerte");
	});
	
	$(".has-tooltip-fioul").mouseenter(function() {
		if(!$(this).hasClass("active")){
			if($(this).attr("data-original-title").charAt(0) == "-"){
				// Tooltip orange si chiffre negatif
				$(".has-tooltip-fioul").tooltip('destroy');
				$(".has-tooltip-fioul").tooltip({
					template: '<div class="tooltip tooltip-ticket"><div class="tooltip-negatif"><div class="tooltip-inner"></div></div><div class="traits-tooltip"><div class="trait-fin dessus"></div><div class="trait-gras"></div></div></div>',
					trigger: "manual"
				});
			}else{
				$(".has-tooltip-fioul").tooltip('destroy');
				$(".has-tooltip-fioul").tooltip({
					template: '<div class="tooltip tooltip-ticket"><div class="tooltip-inner"></div><div class="traits-tooltip"><div class="trait-fin dessus"></div><div class="trait-gras"></div></div></div>',
					trigger: "manual"
				});
			}
			$(this).tooltip('show');
		}else {
			$(this).tooltip('hide');
		}
	})
	.mouseleave(function() {
		$(this).tooltip('hide');
	});
	
	$(".has-tooltip-livraison").mouseenter(function() {
		if(!$(this).hasClass("active")){
			if($(this).attr("data-original-title").charAt(0) == "-"){
				// Tooltip orange si chiffre negatif
				$(".has-tooltip-livraison").tooltip('destroy');
				$(".has-tooltip-livraison").tooltip({
					template: '<div class="tooltip tooltip-ticket"><div class="tooltip-negatif"><div class="tooltip-inner"></div></div><div class="traits-tooltip"><div class="trait-fin dessus"></div><div class="trait-gras"></div></div></div>',
					trigger: "manual"
				});
			}else {
				$(".has-tooltip-livraison").tooltip('destroy');
				$(".has-tooltip-livraison").tooltip({
					template: '<div class="tooltip tooltip-ticket"><div class="tooltip-inner"></div><div class="traits-tooltip"><div class="trait-fin dessus"></div><div class="trait-gras"></div></div></div>',
					trigger: "manual"
				});
			}
			$(this).tooltip('show');
		}else {
			$(this).tooltip('hide');
		}
	})
	.mouseleave(function() {
		$(this).tooltip('hide');
	});
	
	$(".has-tooltip-commande").mouseenter(function() {
		if(!$(this).hasClass("selected")){
			if($(this).attr("data-original-title").charAt(0) == "-"){
				// Tooltip orange si chiffre negatif
				$(".has-tooltip-commande").tooltip('destroy');
				$(".has-tooltip-commande").tooltip({
					template: '<div class="tooltip tooltip-ticket"><div class="tooltip-negatif"><div class="tooltip-inner"></div></div><div class="traits-tooltip"><div class="trait-fin dessus"></div><div class="trait-gras"></div></div></div>',
					trigger: "manual"
				});
			}else{
				$(".has-tooltip-commande").tooltip('destroy');
				$(".has-tooltip-commande").tooltip({
					template: '<div class="tooltip tooltip-ticket"><div class="tooltip-inner"></div><div class="traits-tooltip"><div class="trait-fin dessus"></div><div class="trait-gras"></div></div></div>',
					trigger: "manual"
				});
			}
			$(this).tooltip('show');
		}else {
			$(this).tooltip('hide');
		}
	})
	.mouseleave(function() {
		$(this).tooltip('hide');
	});
	
	if($("body").hasClass("cycle")){
		heightTicket();
		bodyTicket();
		codeReduction();
		details();
		customSelect();
		overflowCuvesTicket();
		$("label.radio").click(function(){
			if (!$(this).hasClass("active")) {
				$(".active", $(this).closest(".controls")).removeClass("active");
				$(this).addClass("active");
				if($(this).hasClass("has-tooltip-fioul")){
					$(this).tooltip('hide');
				}
				if($(this).hasClass("has-tooltip-livraison")){
					// mettre à jour les valeurs de tooltip
					var indexRadioLivraison = $(this).index();
					switch (indexRadioLivraison) {
						case 0:
							$(".has-tooltip-livraison").eq(0).attr("data-original-title", "");
							$(".has-tooltip-livraison").eq(1).attr("data-original-title", "+ 100€");
							$(".has-tooltip-livraison").eq(2).attr("data-original-title", "+ 200€");
							break;
						case 1:
							$(".has-tooltip-livraison").eq(0).attr("data-original-title", "- 100€");
							$(".has-tooltip-livraison").eq(1).attr("data-original-title", "");
							$(".has-tooltip-livraison").eq(2).attr("data-original-title", "+ 100€");
							break;
						case 2:
							$(".has-tooltip-livraison").eq(0).attr("data-original-title", "- 200€");
							$(".has-tooltip-livraison").eq(1).attr("data-original-title", "- 100€");
							$(".has-tooltip-livraison").eq(2).attr("data-original-title", "");
							break;
					}
					$(this).tooltip('hide');
				}
				
				///////////// A ENLEVER DANS LE FUTUR, SERT À MONTRER L'ANIMATION SUR LE TICKET /////////////
				animTicket();
			}
		});
		$("#radio-a-la-livraison").click(function(){
			$("ul#select-paiement li").removeClass("selected");
			$("ul#select-paiement li").first().addClass("selected");
			$("#select-paiement-custom option:eq(0)").prop("selected", true);
		});
	}
	
	if($("body").hasClass("home")){
		// Animation du compteur - odometer
		compteur();
		// Dépliage du bloc "commandez votre fioul"
		$("#order-zipcode").focusin(function(){
			ouvertureFermetureBlocCommandeHome("ouverture");
			return false;
		});
		
		// Clic sur les btn dropdown
		$("a.btn-dropdown").click(function(){
			$(this).parent().toggleClass("dd-open");
			return false;
		});
		
		// Clic sur le bouton pour revenir en haut de la page
		$("a#btn-retour-haut").click(function(){
			$('html, body').animate({scrollTop : 0}, 300);
			return false;
		});
		
		// Clic sur le bandeau des références
		$("ul.refs").click(function(){
			window.location.href = "#";
			return false;
		});
		
		// HighCharts
		// cercles sur les axes 
		Highcharts.wrap(Highcharts.Tick.prototype, 'getMarkPath', function (prev, x, y, tickLength, tickWidth, horiz, renderer) {
	        var path = renderer.arc(x, y, Math.round(tickLength / 2), 0, -Math.PI /2 , 3 * Math.PI / 2).d.split(' ');
	        return path;
	    });
	    Highcharts.wrap(Highcharts.Tick.prototype, 'render', function (prev, index, old, opacity) {
	        prev.apply(this, Array.prototype.slice.call(arguments, 1));
	        if(this && this.mark) {
	            this.mark.attr({
	                fill: "#ffffff",
	                opacity: 0.25
	            });
	        }
	    });   
		// création du graphe
		var myChart = new Highcharts.Chart({
			title: {
				text: ''
			},
			chart: {
			    backgroundColor: '',
			    renderTo: 'part-graph'
			},
			tooltip: {
	            backgroundColor: '',
	            borderWidth: 0,
	            borderColor: null,
	            useHTML:true,
	            shadow:false,
	            shape: 'square',
	            style: {
	            	padding: '0',
	            	'border-radius': '5px',
	            },
	            formatter: function() {
		            var fioulVal = this.y;
		            var dayVal = Highcharts.dateFormat('Le %e %B %Y',new Date(this.x));
	            	if (this.key == 'last') {
	            	    return '<div class="graphTooltip today"><h5>AUJOURD’HUI</h5><strong>' + fioulVal.toString().replace(".",",") + ' <span>€</span>';
	            	} else {
	            		return '<div class="graphTooltip"><h5>'+dayVal+'</h5><strong>' + fioulVal.toString().replace(".",",") + ' <span>€/litre</span></strong><p>Prix moyen national fioulreduc <br />pour 1000 litres de fioul standard <a href="#">En savoir +</a></div>';
	            	}
                }
		    },
		    xAxis: {
		    	labels: {
	    	        style: {
	    	            color: "#a6d8f2",
	    	            font: '1em "lato-italic", sans-serif'
	    	        }
		    	},
		    	/* SI ON VOULAIT UNE GRILLE FINE
		    	 minorGridLineColor:"rgba(255,255,255,0.1)",
		    	 minorGridLineWidth: 1,
		    	 minorTickLength: 0,
		    	 minorTickInterval: 10 * 24 * 3600000, */
		        type: 'datetime',
		        dateTimeLabelFormats:{
		           month: '%b %y'
		        },
		        minRange: 364 * 24 * 3600000, 
                tickmarkPlacement: 'on',
                gridLineWidth: 1,
                endOnTick:true,
                startOnTick:false,
                gridLineWidth: 1,
                gridLineColor:"rgba(255,255,255,0.1)",
                lineColor:"rgba(255,255,255,0)",
                tickWidth:3,
                tickLength: 3,
                tickPosition: 'inside',
                // SAISIE DE L'INDEX DE DÉBUT
                min: Date.UTC(2012, 11, 17)
               
		    },
		    yAxis: {
		        title: {
		            text: ''
		        },
		        labels: {
			        style: {
			            color: "#a6d8f2",
			            font: '1em "lato-italic", sans-serif'
			        }
		        },
		        /* SI ON VOULAIT UNE GRILLE FINE
		        minorGridLineColor:"rgba(255,255,255,0.1)",
		        minorGridLineWidth: 1,
		        minorTickLength: 0,
		        minorTickInterval: 'auto', */
		        tickmarkPlacement: 'on',
		        gridLineWidth: 1,
		        gridLineColor:"rgba(255,255,255,0.1)",
		        lineColor:"rgba(255,255,255,0)",
		        endOnTick:true,
		        startOnTick:false,
		        tickWidth:3,
		        tickLength: 3,
		        tickPosition: 'inside',
		    },
		    credits: {
		           enabled: false
		    },
		    legend: {
		        enabled: false
		    },
		    series: [{
	    		color: {
		    	    linearGradient: {},
		    	    stops: [
		    	        [0.1, '#ef4d00'],
		    	        [0.3, '#f78800'],
		    	        [0.6, '#ffb700'],
		    	        [0.9, '#ffffff']
		    	    ]
		    	},
		    	states: {
                    hover: {
                        lineWidthPlus: 0,
                        halo: {
                        	size: 0,
                        	attributes: {
                        	    fill: '',
                        	    stroke: ''
                        	}
                        }
                    }
                },
		    	lineWidth: 6,
		    	shadow: {
		    	    color: 'rgba(3,9,25,0.15)',
		    	    width: 15,
		    	    offsetX: 0,
		    	    offsetY: 15
		    	},
		    	marker: {
                    fillColor: '#ffffff',
                    lineWidth: 0,
                    lineColor: null,
                    radius:4,
                    radiusPlus:0,
                    states: {
                        hover: {
                            radiusPlus: 0,
                            lineWidth: 10,
                            lineWidthPlus: 5,
                            lineColor: 'rgba(255,255,255,0.2)',
                        }
                    }
	            },
		        // SAISIE DES POINTS ET DE L'INTERVALLE
		        pointInterval: 15 * 24 * 3600 * 1000,
		        pointStart: Date.UTC(2013, 0, 01),
		        data: [0.838, 0.848, 0.846, 0.855, 0.879, 0.899, 0.871, 0.888, 0.886, 0.857, 0.859, 0.857, 0.861, 0.868, 0.879, 0.877, 0.868, 0.877, 0.879, 0.899, 0.913, 0.914, 0.892, 0.877, 0.879, 0.877, 0.853, 0.858, 0.877, 0.875, 0.874, 
		        	/* Dernier point avec Halo */ 
		        	{y:0.895, name: 'last', marker:{
		        		enabled: true,
		        		radius:22,
		        		fillColor: {
				            radialGradient: {cx: 0.5, cy: 0.5, r: 0.5},
				            stops: [
				                [0, 'rgba(255,255,255,1)'],
				                [0.08, 'rgba(255,255,255,1)'],
				                [0.15, 'rgba(255,255,255,0.2)'],
				                [1, 'rgba(255,255,255,0)']
				            ]
			        	},
			        	states: {
			        	    hover: {
			        	        radius: 22,
			        	        lineWidth: 0,
			        	        lineWidthPlus: 0,
			        	        lineColor: 'null',
			        	        fillColor: {
			        	            radialGradient: {cx: 0.5, cy: 0.5, r: 0.5},
			        	            stops: [
			        	                [0, 'rgba(255,255,255,1)'],
			        	                [0.08, 'rgba(255,255,255,1)'],
			        	                [0.15, 'rgba(255,255,255,0.2)'],
			        	                [1, 'rgba(255,255,255,0)']
			        	            ]
			        	        }
			        	    }
			        	}
			        }}
		        ]
		    }],
		    plotOptions: {
		        line: {
		            marker: {
		                enabled: false,
		                states: {
		                    select: {
		                    	enabled: false,
		                    }
		                }
		            },
		            states: {
		                select: {
		                	enabled: false,
		                }
		            }
		        },
		        series: {
                    allowPointSelect: false,
                	events: {
                		afterAnimate: function () {
                		  	// afficher la dernière bulle par défaut
                		  	this.chart.tooltip.refresh(this.chart.series[0].data[this.chart.series[0].data.length-1]);
                		},
                        mouseOut: function () {
                            // afficher la dernière bulle par défaut
                            this.chart.tooltip.refresh(this.chart.series[0].data[this.chart.series[0].data.length-1]);
                            this.series.chart.tooltip.show();
                        }
                    }
                } 
		    },
		    exporting: {
		        enabled: false
		    },
		});
	}
});