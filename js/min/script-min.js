function tooltip(){$(".has-tooltip").tooltip()}function modal(){$(".has-modal").click(function(){$(".modal").modal("toggle")})}function details(){$(".has-detail").click(function(){var t=$(this).closest(".bloc-blanc-ombre");$(".part-details .detail-cycle.optionnel.active",t).removeClass("active");var e=".detail-"+$(this).attr("id");$(".part-details .detail-cycle.optionnel"+e).addClass("active")})}function animTicket(){if($(window).width()>=768){var t;t=new TimelineMax,t.to($("#content-bloc-ticket-fixed"),.3,{rotationX:5,rotationY:3,skewX:"1deg",delay:.2,ease:Cubic.easeOut}),t.to($("#content-bloc-ticket-fixed"),.7,{rotationX:0,rotationY:0,skewX:"0deg",ease:Back.easeOut});var e;e=new TimelineMax,e.to($("#ombre-ticket-fixed"),.3,{opacity:.6,delay:.5,ease:Cubic.easeOut}),e.to($("#ombre-ticket-fixed"),.7,{opacity:1,ease:Back.easeOut})}var i=parseFloat($("#prix-total-ticket-anim").text().replace(",",".")),o=i.toString().replace(".",","),a=i-100,s=a.toString().replace(".",","),l=2,n=0===l?1:10*l;$("#prix-total-ticket-anim").prop("number",o).animateNumber({number:a*n,numberStep:function(t,e){var i=Math.floor(t)/n,o=$(e.elem);l>0&&(i=i.toFixed(l),i=i.toString().replace(".",",")),o.text(i)}},800)}function positionTicketScroll(t){if($("body").hasClass("cycle"))if($(window).width()>=768){var e=$("#top-body-ticket").offset().top-$("header").height()+4,i=$("#top-body-ticket").offset().top+4,o=310,a=$("#avis-footer").offset().top-$("#ticket-fixed").height()-o;$(window).width()>1150?(TweenMax.set($("#content-ticket-fixed"),{rotation:1.5}),t>=e&&t<a+$("header").height()?TweenMax.set($("#ticket-fixed"),{position:"fixed",top:"70px"}):($("#ticket-fixed").css("position","absolute"),TweenMax.set($("#ticket-fixed"),{position:"absolute"}),e>t?TweenMax.set($("#ticket-fixed"),{top:"15px"}):TweenMax.set($("#ticket-fixed"),{top:a-33-$("header").height()+"px"}))):(TweenMax.set($("#content-ticket-fixed"),{rotation:0}),t>=i&&t<a+$("header").height()?TweenMax.set($("#ticket-fixed"),{position:"fixed",top:"16px"}):($("#ticket-fixed").css("position","absolute"),TweenMax.set($("#ticket-fixed"),{position:"absolute"}),i>t?TweenMax.set($("#ticket-fixed"),{top:"15px"}):TweenMax.set($("#ticket-fixed"),{top:a-160})))}else TweenMax.set($("#ticket-fixed"),{position:"relative",top:0}),TweenMax.set($("#content-ticket-fixed"),{rotation:0})}function fixBloc(t,e,i){var o=$(document).scrollTop();o>=e&&i>o&&$(window).width()>979?($(t).css("position","fixed"),$(t).css("top","0px")):($(t).css("position","absolute"),e>o?$(t).css("top",e+"px"):$(t).css("top",i+"px"))}function customSelect(){$("html").hasClass("no-touch")&&$(".select-customisable").length&&(TweenMax.set($(".select-customisable"),{opacity:"0","pointer-events":"none"}),TweenMax.set($(".select-customise"),{opacity:"1"}),TweenMax.set($("ul.select-customise"),{display:"block"}),$("ul.select-customise li a").click(function(){$(".radio-paiement")[0].checked=!0;var t=$(this).closest(".controls");$("> .active",t).removeClass("active"),$(this).closest(".radio-block").addClass("active");var e=$(this).closest("li"),i=$(this).closest("ul.select-customise"),o=i.attr("id"),a=$("#"+o+"-custom");if(!e.hasClass("selected")){$("li.selected",i).removeClass("selected"),e.addClass("selected");var s=e.index();$("option:eq("+s+")",a).prop("selected",!0),animTicket();var l=e.index();switch(l){case 0:$(".has-tooltip-commande").eq(0).attr("data-original-title",""),$(".has-tooltip-commande").eq(1).attr("data-original-title","+ 10€"),$(".has-tooltip-commande").eq(2).attr("data-original-title","+ 15€"),$(".has-tooltip-commande").eq(3).attr("data-original-title","+ 20€"),$(".has-tooltip-commande").eq(4).attr("data-original-title","+ 25€");break;case 1:$(".has-tooltip-commande").eq(0).attr("data-original-title","- 10€"),$(".has-tooltip-commande").eq(1).attr("data-original-title",""),$(".has-tooltip-commande").eq(2).attr("data-original-title","+ 5€"),$(".has-tooltip-commande").eq(3).attr("data-original-title","+ 10€"),$(".has-tooltip-commande").eq(4).attr("data-original-title","+ 15€");break;case 2:$(".has-tooltip-commande").eq(0).attr("data-original-title","- 15€"),$(".has-tooltip-commande").eq(1).attr("data-original-title","- 5€"),$(".has-tooltip-commande").eq(2).attr("data-original-title",""),$(".has-tooltip-commande").eq(3).attr("data-original-title","+ 5€"),$(".has-tooltip-commande").eq(4).attr("data-original-title","+ 10€");break;case 3:$(".has-tooltip-commande").eq(0).attr("data-original-title","- 20€"),$(".has-tooltip-commande").eq(1).attr("data-original-title","- 10€"),$(".has-tooltip-commande").eq(2).attr("data-original-title","- 5€"),$(".has-tooltip-commande").eq(3).attr("data-original-title",""),$(".has-tooltip-commande").eq(4).attr("data-original-title","+ 5€");break;case 4:$(".has-tooltip-commande").eq(0).attr("data-original-title","- 25€"),$(".has-tooltip-commande").eq(1).attr("data-original-title","- 15€"),$(".has-tooltip-commande").eq(2).attr("data-original-title","- 10€"),$(".has-tooltip-commande").eq(3).attr("data-original-title","- 5€"),$(".has-tooltip-commande").eq(4).attr("data-original-title","")}e.tooltip("hide")}if(e.hasClass("has-detail")){var n=$(this).closest(".bloc-blanc-ombre");$(".part-details .detail-cycle.optionnel.active",n).removeClass("active");var r=".detail-"+e.attr("id");$(".part-details .detail-cycle.optionnel"+r).addClass("active")}return!1}))}function overflowCuvesTicket(){var t=$("#cuves-ticket li.cuve-ticket").size();t>2?TweenMax.set($("#overflow-cuves"),{display:"block"}):TweenMax.set($("#overflow-cuves"),{display:"none"}),$("a#btn-overflow-cuves").click(function(){return $("#cuves-ticket").hasClass("open")?($("#cuves-ticket").removeClass("open"),$(".txt-btn",this).text("Voir le détail"),TweenMax.to($(".ic-bottom",this),.3,{rotation:0,ease:Cubic.easeOut})):($("#cuves-ticket").addClass("open"),$(".txt-btn",this).text("Masquer le détail"),TweenMax.to($(".ic-bottom",this),.3,{rotation:-180,ease:Cubic.easeOut})),!1})}function afficherMotDePasse(){$(".afficher-mdp").click(function(){var t=$(this).attr("id").replace("afficher-","");$(this).is(":checked")?$("#"+t).attr("type","text"):$("#"+t).attr("type","password")})}function detailRelie(){$(".has-detail-relie").length&&$(".has-detail-relie").each(function(t){var e=$(this).attr("id"),i=$("#detail-"+e);if($(window).width()>1200)var o=$(this).position().top-10;else var o=$(this).position().top-40;TweenMax.set(i,{top:o+"px"})})}function compteur(){var t=1456622570,e=1456622470,i=new Odometer({el:$(".compteur")[0],theme:"train-station",value:e});i.render(),setInterval(function(){t>=e&&i.update(e++)},3e3)}function bodyTicket(){var t=$("#ticket-fixed").height();TweenMax.set($("#content-ticket-fixed"),{y:"-"+t+"px"}),bodyTicketScroll()}function bodyTicketScroll(){TweenMax.to($("#content-ticket-fixed"),1.5,{y:"-6px",ease:Cubic.easeInOut}),TweenMax.to($("#top-body-ticket"),2,{className:"ticket-here",ease:Cubic.easeInOut})}function heightTicket(){if($(window).width()>=768){var t=$("#bloc-cycle").height();$("#ticket").css("height",t+"px")}else $("#ticket").css("height","auto")}function codeReduction(){TweenMax.set($("#code-reduction"),{display:"none"}),$("a#btn-code-reduction").click(function(){return TweenMax.set($("#code-reduction"),{display:"inline-block"}),TweenMax.set($("a#btn-code-reduction"),{display:"none"}),!1}),$("#btn-code-reduction-retour").click(function(){return TweenMax.set($("#code-reduction"),{display:"none"}),TweenMax.set($("a#btn-code-reduction"),{display:"inline-block"}),!1})}function ouvertureFermetureMenuResponsive(){$("body").hasClass("menu-ouvert")?(TweenMax.to($(".big-container"),.3,{x:"0",ease:Cubic.easeInOut}),$("body").removeClass("menu-ouvert"),TweenMax.fromTo($("#masque-container"),.3,{opacity:1},{opacity:0,display:"none"}),$("a#bouton-menu-responsive").removeClass("active")):(TweenMax.to($(".big-container"),.3,{x:"250px",ease:Cubic.easeInOut}),$("body").addClass("menu-ouvert"),TweenMax.fromTo($("#masque-container"),.3,{opacity:0},{opacity:1,display:"block",ease:Cubic.easeInOut}),$("a#bouton-menu-responsive").addClass("active"))}function ouvertureFermetureBlocCommandeHome(t){$(window).width()>480?"ouverture"==t?$("#bloc-commande").hasClass("bloc-ouvert")||($("#bloc-commande").addClass("bloc-ouvert"),TweenMax.to($("#masque-form-home"),.5,{height:"260px",ease:Cubic.easeInOut})):$("#bloc-commande").hasClass("bloc-ouvert")?($("#bloc-commande").removeClass("bloc-ouvert"),TweenMax.to($("#masque-form-home"),.5,{height:"50px",ease:Cubic.easeInOut})):($("#bloc-commande").addClass("bloc-ouvert"),TweenMax.to($("#masque-form-home"),.5,{height:"260px",ease:Cubic.easeInOut})):"ouverture"==t?$("#bloc-commande").hasClass("bloc-ouvert")||($("#bloc-commande").addClass("bloc-ouvert"),TweenMax.to($("#masque-form-home"),.5,{height:"380px",ease:Cubic.easeInOut})):$("#bloc-commande").hasClass("bloc-ouvert")?($("#bloc-commande").removeClass("bloc-ouvert"),TweenMax.to($("#masque-form-home"),.5,{height:"80px",ease:Cubic.easeInOut})):($("#bloc-commande").addClass("bloc-ouvert"),TweenMax.to($("#masque-form-home"),.5,{height:"380px",ease:Cubic.easeInOut}))}function animer(t){if($(window).width()>1024&&!$("html").hasClass("lt-ie9"))if(t>=$(document).height()-$(window).height()-471){var e=-(t-$(document).height()+$(window).height());TweenMax.set($("#journal"),{y:e,rotation:12})}else TweenMax.set($("#journal"),{y:250,rotation:12});else if($(window).width()>480)if(t>=$(document).height()-$(window).height()-471){var e=-(t-$(document).height()+$(window).height());TweenMax.set($("#journal"),{y:e,rotation:0})}else TweenMax.set($("#journal"),{y:250,rotation:0});else TweenMax.set($("#journal"),{y:0,rotation:0});positionTicketScroll(t),detailRelie(),requestAnimFrame(function(){t=$(document).scrollTop(),animer(t)})}window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}(),Highcharts.setOptions({lang:{months:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],shortMonths:["Jan","Fev","Mar","Avr","Mai","Juin","Juil","Aout","Sept","Oct","Nov","Déc"],weekdays:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],decimalPoint:",",loading:"Chargement en cours...",thousandsSep:" "}}),$(document).bind("touchmove",function(t){var e=$(document).scrollTop();positionTicketScroll(e)}),$(window).resize(function(){$("body").hasClass("home")&&($(window).width()>480?$("#bloc-commande").hasClass("bloc-ouvert")?$("#masque-form-home").css("height","260px"):$("#masque-form-home").css("height","50px"):$("#bloc-commande").hasClass("bloc-ouvert")?$("#masque-form-home").css("height","380px"):$("#masque-form-home").css("height","80px")),$("body").hasClass("menu-ouvert")&&(TweenMax.to($(".big-container"),.5,{x:"0",ease:Cubic.easeInOut}),TweenMax.fromTo($("#masque-container"),.3,{opacity:1},{opacity:0,display:"none"}),$("body").removeClass("menu-ouvert"),$("a#bouton-menu-responsive").removeClass("active")),$("li.has-dropdown.dd-open").removeClass("dd-open"),$("body").hasClass("cycle")&&heightTicket()}),$(document).ready(function(){if(myScroll=$(document).scrollTop(),animer(myScroll),tooltip(),modal(),$("a#bouton-menu-responsive").click(function(){return ouvertureFermetureMenuResponsive(),!1}),$("#masque-container").click(function(){return ouvertureFermetureMenuResponsive(),!1}),$(".alert .close").click(function(){$("body").removeClass("alerte")}),$(".has-tooltip-fioul").mouseenter(function(){$(this).hasClass("active")?$(this).tooltip("hide"):("-"==$(this).attr("data-original-title").charAt(0)?($(".has-tooltip-fioul").tooltip("destroy"),$(".has-tooltip-fioul").tooltip({template:'<div class="tooltip tooltip-ticket"><div class="tooltip-negatif"><div class="tooltip-inner"></div></div><div class="traits-tooltip"><div class="trait-fin dessus"></div><div class="trait-gras"></div></div></div>',trigger:"manual"})):($(".has-tooltip-fioul").tooltip("destroy"),$(".has-tooltip-fioul").tooltip({template:'<div class="tooltip tooltip-ticket"><div class="tooltip-inner"></div><div class="traits-tooltip"><div class="trait-fin dessus"></div><div class="trait-gras"></div></div></div>',trigger:"manual"})),$(this).tooltip("show"))}).mouseleave(function(){$(this).tooltip("hide")}),$(".has-tooltip-livraison").mouseenter(function(){$(this).hasClass("active")?$(this).tooltip("hide"):("-"==$(this).attr("data-original-title").charAt(0)?($(".has-tooltip-livraison").tooltip("destroy"),$(".has-tooltip-livraison").tooltip({template:'<div class="tooltip tooltip-ticket"><div class="tooltip-negatif"><div class="tooltip-inner"></div></div><div class="traits-tooltip"><div class="trait-fin dessus"></div><div class="trait-gras"></div></div></div>',trigger:"manual"})):($(".has-tooltip-livraison").tooltip("destroy"),$(".has-tooltip-livraison").tooltip({template:'<div class="tooltip tooltip-ticket"><div class="tooltip-inner"></div><div class="traits-tooltip"><div class="trait-fin dessus"></div><div class="trait-gras"></div></div></div>',trigger:"manual"})),$(this).tooltip("show"))}).mouseleave(function(){$(this).tooltip("hide")}),$(".has-tooltip-commande").mouseenter(function(){$(this).hasClass("selected")?$(this).tooltip("hide"):("-"==$(this).attr("data-original-title").charAt(0)?($(".has-tooltip-commande").tooltip("destroy"),$(".has-tooltip-commande").tooltip({template:'<div class="tooltip tooltip-ticket"><div class="tooltip-negatif"><div class="tooltip-inner"></div></div><div class="traits-tooltip"><div class="trait-fin dessus"></div><div class="trait-gras"></div></div></div>',trigger:"manual"})):($(".has-tooltip-commande").tooltip("destroy"),$(".has-tooltip-commande").tooltip({template:'<div class="tooltip tooltip-ticket"><div class="tooltip-inner"></div><div class="traits-tooltip"><div class="trait-fin dessus"></div><div class="trait-gras"></div></div></div>',trigger:"manual"})),$(this).tooltip("show"))}).mouseleave(function(){$(this).tooltip("hide")}),$("body").hasClass("cycle")&&(heightTicket(),bodyTicket(),codeReduction(),details(),customSelect(),overflowCuvesTicket(),afficherMotDePasse(),$("label.radio").click(function(){if(!$(this).hasClass("active")){if($(".active",$(this).closest(".controls")).removeClass("active"),$(this).addClass("active"),$(this).hasClass("has-tooltip-fioul")&&$(this).tooltip("hide"),$(this).hasClass("has-tooltip-livraison")){var t=$(this).index();switch(t){case 0:$(".has-tooltip-livraison").eq(0).attr("data-original-title",""),$(".has-tooltip-livraison").eq(1).attr("data-original-title","+ 100€"),$(".has-tooltip-livraison").eq(2).attr("data-original-title","+ 200€");break;case 1:$(".has-tooltip-livraison").eq(0).attr("data-original-title","- 100€"),$(".has-tooltip-livraison").eq(1).attr("data-original-title",""),$(".has-tooltip-livraison").eq(2).attr("data-original-title","+ 100€");break;case 2:$(".has-tooltip-livraison").eq(0).attr("data-original-title","- 200€"),$(".has-tooltip-livraison").eq(1).attr("data-original-title","- 100€"),$(".has-tooltip-livraison").eq(2).attr("data-original-title","")}$(this).tooltip("hide")}animTicket()}}),$("#radio-a-la-livraison").click(function(){$("ul#select-paiement li").removeClass("selected"),$("ul#select-paiement li").first().addClass("selected"),$("#select-paiement-custom option:eq(0)").prop("selected",!0)})),$("body").hasClass("home")){compteur(),$("#order-zipcode").focusin(function(){return ouvertureFermetureBlocCommandeHome("ouverture"),!1}),$("a.btn-dropdown").click(function(){return $(this).parent().toggleClass("dd-open"),!1}),$("a#btn-retour-haut").click(function(){return $("html, body").animate({scrollTop:0},300),!1}),$("ul.refs").click(function(){return window.location.href="#",!1}),Highcharts.wrap(Highcharts.Tick.prototype,"getMarkPath",function(t,e,i,o,a,s,l){var n=l.arc(e,i,Math.round(o/2),0,-Math.PI/2,3*Math.PI/2).d.split(" ");return n}),Highcharts.wrap(Highcharts.Tick.prototype,"render",function(t,e,i,o){t.apply(this,Array.prototype.slice.call(arguments,1)),this&&this.mark&&this.mark.attr({fill:"#ffffff",opacity:.25})});var t=new Highcharts.Chart({title:{text:""},chart:{backgroundColor:"",renderTo:"part-graph"},tooltip:{backgroundColor:"",borderWidth:0,borderColor:null,useHTML:!0,shadow:!1,shape:"square",style:{padding:"0","border-radius":"5px"},formatter:function(){var t=this.y,e=Highcharts.dateFormat("Le %e %B %Y",new Date(this.x));return"last"==this.key?'<div class="graphTooltip today"><h5>AUJOURD’HUI</h5><strong>'+t.toString().replace(".",",")+" <span>€</span>":'<div class="graphTooltip"><h5>'+e+"</h5><strong>"+t.toString().replace(".",",")+' <span>€/litre</span></strong><p>Prix moyen national fioulreduc <br />pour 1000 litres de fioul standard <a href="#">En savoir +</a></div>'}},xAxis:{labels:{style:{color:"#a6d8f2",font:'1em "lato-italic", sans-serif'}},type:"datetime",dateTimeLabelFormats:{month:"%b %y"},minRange:314496e5,tickmarkPlacement:"on",gridLineWidth:1,endOnTick:!0,startOnTick:!1,gridLineWidth:1,gridLineColor:"rgba(255,255,255,0.1)",lineColor:"rgba(255,255,255,0)",tickWidth:3,tickLength:3,tickPosition:"inside",min:Date.UTC(2012,11,17)},yAxis:{title:{text:""},labels:{style:{color:"#a6d8f2",font:'1em "lato-italic", sans-serif'}},tickmarkPlacement:"on",gridLineWidth:1,gridLineColor:"rgba(255,255,255,0.1)",lineColor:"rgba(255,255,255,0)",endOnTick:!0,startOnTick:!1,tickWidth:3,tickLength:3,tickPosition:"inside"},credits:{enabled:!1},legend:{enabled:!1},series:[{color:{linearGradient:{},stops:[[.1,"#ef4d00"],[.3,"#f78800"],[.6,"#ffb700"],[.9,"#ffffff"]]},states:{hover:{lineWidthPlus:0,halo:{size:0,attributes:{fill:"",stroke:""}}}},lineWidth:6,shadow:{color:"rgba(3,9,25,0.15)",width:15,offsetX:0,offsetY:15},marker:{fillColor:"#ffffff",lineWidth:0,lineColor:null,radius:4,radiusPlus:0,states:{hover:{radiusPlus:0,lineWidth:10,lineWidthPlus:5,lineColor:"rgba(255,255,255,0.2)"}}},pointInterval:1296e6,pointStart:Date.UTC(2013,0,1),data:[.838,.848,.846,.855,.879,.899,.871,.888,.886,.857,.859,.857,.861,.868,.879,.877,.868,.877,.879,.899,.913,.914,.892,.877,.879,.877,.853,.858,.877,.875,.874,{y:.895,name:"last",marker:{enabled:!0,radius:22,fillColor:{radialGradient:{cx:.5,cy:.5,r:.5},stops:[[0,"rgba(255,255,255,1)"],[.08,"rgba(255,255,255,1)"],[.15,"rgba(255,255,255,0.2)"],[1,"rgba(255,255,255,0)"]]},states:{hover:{radius:22,lineWidth:0,lineWidthPlus:0,lineColor:"null",fillColor:{radialGradient:{cx:.5,cy:.5,r:.5},stops:[[0,"rgba(255,255,255,1)"],[.08,"rgba(255,255,255,1)"],[.15,"rgba(255,255,255,0.2)"],[1,"rgba(255,255,255,0)"]]}}}}}]}],plotOptions:{line:{marker:{enabled:!1,states:{select:{enabled:!1}}},states:{select:{enabled:!1}}},series:{allowPointSelect:!1,events:{afterAnimate:function(){this.chart.tooltip.refresh(this.chart.series[0].data[this.chart.series[0].data.length-1])},mouseOut:function(){this.chart.tooltip.refresh(this.chart.series[0].data[this.chart.series[0].data.length-1]),this.series.chart.tooltip.show()}}}},exporting:{enabled:!1}})}});