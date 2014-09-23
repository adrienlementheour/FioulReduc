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

///////////////////////////////////////////////////////
////// FONCTION POUR FAIRE INITIALISER LE TICKET //////
///////////////////////////////////////////////////////
function bodyTicket(){
	var heightBodyTicket = $("#ticket-fixed").height();
	TweenMax.set($("#content-ticket-fixed"), {y: "-"+heightBodyTicket+"px"});
	bodyTicketScroll();
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

///////////////////////////////////////////////////////////////////////////
// FONCTION POUR GERER LE CLIC SUR LES CHECKBOXS DU TABLEAU DE LIVRAISON //
///////////////////////////////////////////////////////////////////////////
function tableLivraison(){
	TweenMax.set($(".table-livraison td:not(.inactive)"), {cursor: "pointer"});
	$(".table-livraison td").click(function(){
		if(!$(this).hasClass("inactive")) {
			if(!$(this).hasClass("active")){
				$("input[type=checkbox]", this).prop('checked', true);
				$(this).addClass("active");
			}else{
				$("input[type=checkbox]", this).prop('checked', false);
				$(this).removeClass("active");
			}
		}
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


//////////////////////////////////////////////////////////////////////////////////////////
////// FONCTION POUR GERER LA POSITION D'UN DETAIL RELIÉ À UN ELEMENT DE FORMULAIRE /////
//////////////////////////////////////////////////////////////////////////////////////////
function detailRelie(){
	if($(".has-detail-relie").length){
		$(".has-detail-relie").each(function(index) {
			var idDetailRelie = $(this).attr("id");
			var detailRelie = $("#detail-"+idDetailRelie);
			if($(window).width()>1200){
				var positionTopElemForm = $(this).position().top-10;
			}else{
				var positionTopElemForm = $(this).position().top-40;
			}
			TweenMax.set(detailRelie, {top: positionTopElemForm+"px"});
		});
	}
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

$(document).bind('touchmove', function(e) { 
   var myScroll = $(document).scrollTop();
   positionTicketScroll(myScroll);
});

function animer(myScroll){
	positionTicketScroll(myScroll);
	detailRelie();
	
	requestAnimFrame(function(){
		myScroll = $(document).scrollTop();
		animer(myScroll);
	});
	
}

$( window ).resize(function() {
	if($("body").hasClass("cycle")){
		heightTicket();
	}
});

$(document).ready(function(){	
	if($("body").hasClass("cycle")){
		heightTicket();
		bodyTicket();
		codeReduction();
		details();
		customSelect();
		overflowCuvesTicket();
		tableLivraison();
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
});