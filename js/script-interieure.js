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

/////////////////////////////////////////////////////////
// FONCTION POUR GERER LA POSITION DU BLOC DE COMMANDE //
/////////////////////////////////////////////////////////
function positionBlocCommandeInte(myScroll){
	if($("body").hasClass("interieure")){
		if($(window).width()>979){
			var debutScroll = ($("#bloc-commande-inte").offset().top)-($("header").height())+4;
			var debutScrollResp = ($("#bloc-commande-inte").offset().top)+4;
			var offsetBottomTicket = 195;
			var finScroll = $("#avis-footer").offset().top-$("#bloc-commande-inte-fixed").height()-offsetBottomTicket;
			console.log(finScroll);
			//console.log("myScroll : "+myScroll)
			if (myScroll>=debutScroll && myScroll<finScroll+$("header").height()) {
				TweenMax.set($("#bloc-commande-inte-fixed"), {position: "fixed", top: "70px"});
			} else {
				TweenMax.set($("#bloc-commande-inte-fixed"), {position: "absolute"});
				if (myScroll<debutScroll) {
					TweenMax.set($("#bloc-commande-inte-fixed"), {top: "15px"});
				} else {
					if ($(window).width()>1024) {
						TweenMax.set($("#bloc-commande-inte-fixed"), {top: finScroll-33-$("header").height()+"px"}); /* Je ne sais pas d'où viens le 33 :) */
					}else {
						TweenMax.set($("#bloc-commande-inte-fixed"), {top: finScroll-106-$("header").height()+"px"}); /* Je ne sais pas d'où viens le 33 :) */
					}
					
				}
			}
		}else{
			TweenMax.set($("#bloc-commande-inte-fixed"), {position: "relative", top: 0});
		}
	}
}

$(document).bind('touchmove', function(e) { 
   var myScroll = $(document).scrollTop();
   positionBlocCommandeInte(myScroll);
});

function animer(myScroll){
	positionBlocCommandeInte(myScroll);

	requestAnimFrame(function(){
		myScroll = $(document).scrollTop();
		animer(myScroll);
	});
	
}

$(document).ready(function(){	
	if($("body").hasClass("interieure")){
		
	}
});