function bodyTicketScroll(){TweenMax.to($("#content-ticket-fixed"),1.5,{y:"-6px",ease:Cubic.easeInOut}),TweenMax.to($("#top-body-ticket"),2,{className:"ticket-here",ease:Cubic.easeInOut})}function heightTicket(){if($(window).width()>=768){var t=$("#bloc-cycle").height();$("#ticket").css("height",t+"px")}else $("#ticket").css("height","auto")}function bodyTicket(){var t=$("#ticket-fixed").height();TweenMax.set($("#content-ticket-fixed"),{y:"-"+t+"px"}),bodyTicketScroll()}function codeReduction(){TweenMax.set($("#code-reduction"),{display:"none"}),$("a#btn-code-reduction").click(function(){return TweenMax.set($("#code-reduction"),{display:"inline-block"}),TweenMax.set($("a#btn-code-reduction"),{display:"none"}),!1}),$("#btn-code-reduction-retour").click(function(){return TweenMax.set($("#code-reduction"),{display:"none"}),TweenMax.set($("a#btn-code-reduction"),{display:"inline-block"}),!1})}function details(){$(".has-detail").click(function(){var t=$(this).closest(".bloc-blanc-ombre");$(".part-details .detail-cycle.optionnel.active",t).removeClass("active");var e=".detail-"+$(this).attr("id");$(".part-details .detail-cycle.optionnel"+e).addClass("active")})}function customSelect(){$("html").hasClass("no-touch")&&$(".select-customisable").length&&(TweenMax.set($(".select-customisable"),{opacity:"0","pointer-events":"none"}),TweenMax.set($(".select-customise"),{opacity:"1"}),TweenMax.set($("ul.select-customise"),{display:"block"}),$("ul.select-customise li a").click(function(){$(".radio-paiement")[0].checked=!0;var t=$(this).closest(".controls");$("> .active",t).removeClass("active"),$(this).closest(".radio-block").addClass("active");var e=$(this).closest("li"),i=$(this).closest("ul.select-customise"),a=i.attr("id"),o=$("#"+a+"-custom");if(!e.hasClass("selected")){$("li.selected",i).removeClass("selected"),e.addClass("selected");var s=e.index();$("option:eq("+s+")",o).prop("selected",!0),animTicket();var n=e.index();switch(n){case 0:$(".has-tooltip-commande").eq(0).attr("data-original-title",""),$(".has-tooltip-commande").eq(1).attr("data-original-title","+ 10€"),$(".has-tooltip-commande").eq(2).attr("data-original-title","+ 15€"),$(".has-tooltip-commande").eq(3).attr("data-original-title","+ 20€"),$(".has-tooltip-commande").eq(4).attr("data-original-title","+ 25€");break;case 1:$(".has-tooltip-commande").eq(0).attr("data-original-title","- 10€"),$(".has-tooltip-commande").eq(1).attr("data-original-title",""),$(".has-tooltip-commande").eq(2).attr("data-original-title","+ 5€"),$(".has-tooltip-commande").eq(3).attr("data-original-title","+ 10€"),$(".has-tooltip-commande").eq(4).attr("data-original-title","+ 15€");break;case 2:$(".has-tooltip-commande").eq(0).attr("data-original-title","- 15€"),$(".has-tooltip-commande").eq(1).attr("data-original-title","- 5€"),$(".has-tooltip-commande").eq(2).attr("data-original-title",""),$(".has-tooltip-commande").eq(3).attr("data-original-title","+ 5€"),$(".has-tooltip-commande").eq(4).attr("data-original-title","+ 10€");break;case 3:$(".has-tooltip-commande").eq(0).attr("data-original-title","- 20€"),$(".has-tooltip-commande").eq(1).attr("data-original-title","- 10€"),$(".has-tooltip-commande").eq(2).attr("data-original-title","- 5€"),$(".has-tooltip-commande").eq(3).attr("data-original-title",""),$(".has-tooltip-commande").eq(4).attr("data-original-title","+ 5€");break;case 4:$(".has-tooltip-commande").eq(0).attr("data-original-title","- 25€"),$(".has-tooltip-commande").eq(1).attr("data-original-title","- 15€"),$(".has-tooltip-commande").eq(2).attr("data-original-title","- 10€"),$(".has-tooltip-commande").eq(3).attr("data-original-title","- 5€"),$(".has-tooltip-commande").eq(4).attr("data-original-title","")}e.tooltip("hide")}if(e.hasClass("has-detail")){var l=$(this).closest(".bloc-blanc-ombre");$(".part-details .detail-cycle.optionnel.active",l).removeClass("active");var c=".detail-"+e.attr("id");$(".part-details .detail-cycle.optionnel"+c).addClass("active")}return!1}))}function overflowCuvesTicket(){var t=$("#cuves-ticket li.cuve-ticket").size();t>2?TweenMax.set($("#overflow-cuves"),{display:"block"}):TweenMax.set($("#overflow-cuves"),{display:"none"}),$("a#btn-overflow-cuves").click(function(){return $("#cuves-ticket").hasClass("open")?($("#cuves-ticket").removeClass("open"),$(".txt-btn",this).text("Voir le détail"),TweenMax.to($(".ic-bottom",this),.3,{rotation:0,ease:Cubic.easeOut})):($("#cuves-ticket").addClass("open"),$(".txt-btn",this).text("Masquer le détail"),TweenMax.to($(".ic-bottom",this),.3,{rotation:-180,ease:Cubic.easeOut})),!1})}function tableLivraison(){TweenMax.set($(".table-livraison td:not(.inactive)"),{cursor:"pointer"}),$(".table-livraison td").click(function(){$(this).hasClass("inactive")||($(this).hasClass("active")?($("input[type=checkbox]",this).prop("checked",!1),$(this).removeClass("active")):($("input[type=checkbox]",this).prop("checked",!0),$(this).addClass("active")))})}function animTicket(){if($(window).width()>=768){var t;t=new TimelineMax,t.to($("#content-bloc-ticket-fixed"),.3,{rotationX:5,rotationY:3,skewX:"1deg",delay:.2,ease:Cubic.easeOut}),t.to($("#content-bloc-ticket-fixed"),.7,{rotationX:0,rotationY:0,skewX:"0deg",ease:Back.easeOut});var e;e=new TimelineMax,e.to($("#ombre-ticket-fixed"),.3,{opacity:.6,delay:.5,ease:Cubic.easeOut}),e.to($("#ombre-ticket-fixed"),.7,{opacity:1,ease:Back.easeOut})}var i=parseFloat($("#prix-total-ticket-anim").text().replace(",",".")),a=i.toString().replace(".",","),o=i-100,s=o.toString().replace(".",","),n=2,l=0===n?1:10*n;$("#prix-total-ticket-anim").prop("number",a).animateNumber({number:o*l,numberStep:function(t,e){var i=Math.floor(t)/l,a=$(e.elem);n>0&&(i=i.toFixed(n),i=i.toString().replace(".",",")),a.text(i)}},800)}function positionTicketScroll(t){if($("body").hasClass("cycle"))if($(window).width()>=768){var e=$("#top-body-ticket").offset().top-$("header").height()+4,i=$("#top-body-ticket").offset().top+4,a=310,o=$("#avis-footer").offset().top-$("#ticket-fixed").height()-a;$(window).width()>1150?(TweenMax.set($("#content-ticket-fixed"),{rotation:1.5}),t>=e&&t<o+$("header").height()?TweenMax.set($("#ticket-fixed"),{position:"fixed",top:"70px"}):(TweenMax.set($("#ticket-fixed"),{position:"absolute"}),e>t?TweenMax.set($("#ticket-fixed"),{top:"15px"}):TweenMax.set($("#ticket-fixed"),{top:o-33-$("header").height()+"px"}))):(TweenMax.set($("#content-ticket-fixed"),{rotation:0}),t>=i&&t<o+$("header").height()?TweenMax.set($("#ticket-fixed"),{position:"fixed",top:"16px"}):(TweenMax.set($("#ticket-fixed"),{position:"absolute"}),i>t?TweenMax.set($("#ticket-fixed"),{top:"15px"}):TweenMax.set($("#ticket-fixed"),{top:o-160})))}else TweenMax.set($("#ticket-fixed"),{position:"relative",top:0}),TweenMax.set($("#content-ticket-fixed"),{rotation:0})}function fixBloc(t,e,i){var a=$(document).scrollTop();a>=e&&i>a&&$(window).width()>979?($(t).css("position","fixed"),$(t).css("top","0px")):($(t).css("position","absolute"),e>a?$(t).css("top",e+"px"):$(t).css("top",i+"px"))}function detailRelie(){$(".has-detail-relie").length&&$(".has-detail-relie").each(function(t){var e=$(this).attr("id"),i=$("#detail-"+e);if($(window).width()>1200)var a=$(this).position().top-10;else var a=$(this).position().top-40;TweenMax.set(i,{top:a+"px"})})}function compteur(){var t=1456622570,e=1456622470,i=new Odometer({el:$(".compteur")[0],theme:"train-station",value:e});i.render(),setInterval(function(){t>=e&&i.update(e++)},3e3)}function animer(t){positionTicketScroll(t),detailRelie(),requestAnimFrame(function(){t=$(document).scrollTop(),animer(t)})}window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}(),$(document).bind("touchmove",function(t){var e=$(document).scrollTop();positionTicketScroll(e)}),$(window).resize(function(){$("body").hasClass("cycle")&&heightTicket()}),$(document).ready(function(){$("body").hasClass("cycle")&&(heightTicket(),bodyTicket(),codeReduction(),details(),customSelect(),overflowCuvesTicket(),tableLivraison(),$("label.radio").click(function(){if(!$(this).hasClass("active")){if($(".active",$(this).closest(".controls")).removeClass("active"),$(this).addClass("active"),$(this).hasClass("has-tooltip-fioul")&&$(this).tooltip("hide"),$(this).hasClass("has-tooltip-livraison")){var t=$(this).index();switch(t){case 0:$(".has-tooltip-livraison").eq(0).attr("data-original-title",""),$(".has-tooltip-livraison").eq(1).attr("data-original-title","+ 100€"),$(".has-tooltip-livraison").eq(2).attr("data-original-title","+ 200€");break;case 1:$(".has-tooltip-livraison").eq(0).attr("data-original-title","- 100€"),$(".has-tooltip-livraison").eq(1).attr("data-original-title",""),$(".has-tooltip-livraison").eq(2).attr("data-original-title","+ 100€");break;case 2:$(".has-tooltip-livraison").eq(0).attr("data-original-title","- 200€"),$(".has-tooltip-livraison").eq(1).attr("data-original-title","- 100€"),$(".has-tooltip-livraison").eq(2).attr("data-original-title","")}$(this).tooltip("hide")}animTicket()}}),$("#radio-a-la-livraison").click(function(){$("ul#select-paiement li").removeClass("selected"),$("ul#select-paiement li").first().addClass("selected"),$("#select-paiement-custom option:eq(0)").prop("selected",!0)}))});