function animTicket(){if($(window).width()>=768){var e;e=new TimelineMax,e.to($("#content-bloc-ticket-fixed"),.3,{rotationX:10,rotationY:3,skewX:"1deg",delay:.5,ease:Cubic.easeOut}),e.to($("#content-bloc-ticket-fixed"),.7,{rotationX:0,rotationY:0,skewX:"0deg",ease:Back.easeOut});var t;t=new TimelineMax,t.to($("#ombre-ticket-fixed"),.3,{opacity:.6,delay:.5,ease:Cubic.easeOut}),t.to($("#ombre-ticket-fixed"),.7,{opacity:1,ease:Back.easeOut})}}function fixBloc(e,t,o){var i=$(document).scrollTop();i>=t&&o>i&&$(window).width()>979?($(e).css("position","fixed"),$(e).css("top","0px")):($(e).css("position","absolute"),t>i?$(e).css("top",t+"px"):$(e).css("top",o+"px"))}function customSelect(){$("html").hasClass("no-touch")&&$(".select-customisable").length&&(TweenMax.set($(".select-customisable"),{opacity:"0"}),TweenMax.set($(".select-customise"),{opacity:"1"}),TweenMax.set($("ul.select-customise"),{display:"block"}),$("ul.select-customise li a").click(function(){var e=$(this).closest("li"),t=$(this).closest("ul.select-customise"),o=t.attr("id"),i=$("#"+o+"-custom");if(!e.hasClass("selected")){$("li.selected",t).removeClass("selected"),e.addClass("selected");var a=e.index();$("option:eq("+a+")",i).prop("selected",!0)}return!1}))}function compteur(){var e=1456622570,t=1456622470,o=new Odometer({el:$(".compteur")[0],theme:"train-station",value:t});o.render(),setInterval(function(){e>=t&&o.update(t++)},3e3)}function bodyTicket(){var e=$("#ticket-fixed").height();TweenMax.set($("#content-ticket-fixed"),{y:"-"+e+"px"}),bodyTicketScroll()}function bodyTicketScroll(){TweenMax.to($("#content-ticket-fixed"),1.5,{y:"-6px",ease:Cubic.easeInOut}),TweenMax.to($("#top-body-ticket"),2,{className:"ticket-here",ease:Cubic.easeInOut})}function heightTicket(){if($(window).width()>=768){var e=$("#bloc-cycle").height();$("#ticket").css("height",e+"px")}else $("#ticket").css("height","auto")}function ouvertureFermetureMenuResponsive(){$("body").hasClass("menu-ouvert")?(TweenMax.to($(".big-container"),.3,{x:"0",ease:Cubic.easeInOut}),$("body").removeClass("menu-ouvert"),TweenMax.fromTo($("#masque-container"),.3,{opacity:1},{opacity:0,display:"none"}),$("a#bouton-menu-responsive").removeClass("active")):(TweenMax.to($(".big-container"),.3,{x:"250px",ease:Cubic.easeInOut}),$("body").addClass("menu-ouvert"),TweenMax.fromTo($("#masque-container"),.3,{opacity:0},{opacity:1,display:"block",ease:Cubic.easeInOut}),$("a#bouton-menu-responsive").addClass("active"))}function ouvertureFermetureBlocCommandeHome(e){$(window).width()>480?"ouverture"==e?$("#bloc-commande").hasClass("bloc-ouvert")||($("#bloc-commande").addClass("bloc-ouvert"),TweenMax.to($("#masque-form-home"),.5,{height:"260px",ease:Cubic.easeInOut})):$("#bloc-commande").hasClass("bloc-ouvert")?($("#bloc-commande").removeClass("bloc-ouvert"),TweenMax.to($("#masque-form-home"),.5,{height:"50px",ease:Cubic.easeInOut})):($("#bloc-commande").addClass("bloc-ouvert"),TweenMax.to($("#masque-form-home"),.5,{height:"260px",ease:Cubic.easeInOut})):"ouverture"==e?$("#bloc-commande").hasClass("bloc-ouvert")||($("#bloc-commande").addClass("bloc-ouvert"),TweenMax.to($("#masque-form-home"),.5,{height:"380px",ease:Cubic.easeInOut})):$("#bloc-commande").hasClass("bloc-ouvert")?($("#bloc-commande").removeClass("bloc-ouvert"),TweenMax.to($("#masque-form-home"),.5,{height:"80px",ease:Cubic.easeInOut})):($("#bloc-commande").addClass("bloc-ouvert"),TweenMax.to($("#masque-form-home"),.5,{height:"380px",ease:Cubic.easeInOut}))}function animer(e){if($(window).width()>1024&&!$("html").hasClass("lt-ie9"))if(e>=$(document).height()-$(window).height()-471){var t=-(e-$(document).height()+$(window).height());TweenMax.set($("#journal"),{y:t,rotation:12})}else TweenMax.set($("#journal"),{y:250,rotation:12});else if($(window).width()>480)if(e>=$(document).height()-$(window).height()-471){var t=-(e-$(document).height()+$(window).height());TweenMax.set($("#journal"),{y:t,rotation:0})}else TweenMax.set($("#journal"),{y:250,rotation:0});else TweenMax.set($("#journal"),{y:0,rotation:0});if($("body").hasClass("cycle"))if($(window).width()>=768){var o=$("#top-body-ticket").offset().top-$("header").height(),i=800;e>=o&&e<i+$("header").height()&&$(window).width()>979?TweenMax.set($("#ticket-fixed"),{position:"fixed",top:"70px"}):($("#ticket-fixed").css("position","absolute"),TweenMax.set($("#ticket-fixed"),{position:"absolute"}),o>e?TweenMax.set($("#ticket-fixed"),{top:"15px"}):TweenMax.set($("#ticket-fixed"),{top:i-$("header").height()+"px"})),$(window).width()>1150?TweenMax.set($("#content-ticket-fixed"),{rotation:1.5}):TweenMax.set($("#content-ticket-fixed"),{rotation:0})}else TweenMax.set($("#ticket-fixed"),{position:"relative",top:0}),TweenMax.set($("#content-ticket-fixed"),{rotation:0});requestAnimFrame(function(){e=$(document).scrollTop(),animer(e)})}window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),Highcharts.setOptions({lang:{months:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],shortMonths:["Jan","Fev","Mar","Avr","Mai","Juin","Juil","Aout","Sept","Oct","Nov","Déc"],weekdays:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],decimalPoint:",",loading:"Chargement en cours...",thousandsSep:" "}}),$(window).resize(function(){$("body").hasClass("home")&&($(window).width()>480?$("#bloc-commande").hasClass("bloc-ouvert")?$("#masque-form-home").css("height","260px"):$("#masque-form-home").css("height","50px"):$("#bloc-commande").hasClass("bloc-ouvert")?$("#masque-form-home").css("height","380px"):$("#masque-form-home").css("height","80px")),$("body").hasClass("menu-ouvert")&&(TweenMax.to($(".big-container"),.5,{x:"0",ease:Cubic.easeInOut}),TweenMax.fromTo($("#masque-container"),.3,{opacity:1},{opacity:0,display:"none"}),$("body").removeClass("menu-ouvert"),$("a#bouton-menu-responsive").removeClass("active")),$("li.has-dropdown.dd-open").removeClass("dd-open"),$("body").hasClass("cycle")&&heightTicket()}),$(document).ready(function(){if(myScroll=$(document).scrollTop(),animer(myScroll),customSelect(),$("a#bouton-menu-responsive").click(function(){return ouvertureFermetureMenuResponsive(),!1}),$("#masque-container").click(function(){return ouvertureFermetureMenuResponsive(),!1}),$(".alert .close").click(function(){$("body").removeClass("alerte")}),$("body").hasClass("cycle")&&(heightTicket(),bodyTicket(),$("label.radio").click(function(){$(this).hasClass("active")||($(".active",$(this).closest(".controls")).removeClass("active"),$(this).addClass("active"),animTicket())})),$("body").hasClass("home")){compteur(),$("#order-zipcode").focusin(function(){return ouvertureFermetureBlocCommandeHome("ouverture"),!1}),$("a.btn-dropdown").click(function(){return $(this).parent().toggleClass("dd-open"),!1}),$("a#btn-retour-haut").click(function(){return $("html, body").animate({scrollTop:0},300),!1}),$("ul.refs").click(function(){return window.location.href="#",!1}),Highcharts.wrap(Highcharts.Tick.prototype,"getMarkPath",function(e,t,o,i,a,s,n){var r=n.arc(t,o,Math.round(i/2),0,-Math.PI/2,3*Math.PI/2).d.split(" ");return r}),Highcharts.wrap(Highcharts.Tick.prototype,"render",function(e,t,o,i){e.apply(this,Array.prototype.slice.call(arguments,1)),this&&this.mark&&this.mark.attr({fill:"#ffffff",opacity:.25})});var e=new Highcharts.Chart({title:{text:""},chart:{backgroundColor:"",renderTo:"part-graph"},tooltip:{backgroundColor:"",borderWidth:0,borderColor:null,useHTML:!0,shadow:!1,shape:"square",style:{padding:"0","border-radius":"5px"},formatter:function(){var e=this.y,t=Highcharts.dateFormat("Le %e %B %Y",new Date(this.x));return"last"==this.key?'<div class="graphTooltip today"><h5>AUJOURD’HUI</h5><strong>'+e.toString().replace(".",",")+" <span>€</span>":'<div class="graphTooltip"><h5>'+t+"</h5><strong>"+e.toString().replace(".",",")+' <span>€/litre</span></strong><p>Prix moyen national fioulreduc <br />pour 1000 litres de fioul standard <a href="#">En savoir +</a></div>'}},xAxis:{labels:{style:{color:"#a6d8f2",font:'1em "lato-italic", sans-serif'}},type:"datetime",dateTimeLabelFormats:{month:"%b %y"},minRange:314496e5,tickmarkPlacement:"on",gridLineWidth:1,endOnTick:!0,startOnTick:!1,gridLineWidth:1,gridLineColor:"rgba(255,255,255,0.1)",lineColor:"rgba(255,255,255,0)",tickWidth:3,tickLength:3,tickPosition:"inside",min:Date.UTC(2012,11,17)},yAxis:{title:{text:""},labels:{style:{color:"#a6d8f2",font:'1em "lato-italic", sans-serif'}},tickmarkPlacement:"on",gridLineWidth:1,gridLineColor:"rgba(255,255,255,0.1)",lineColor:"rgba(255,255,255,0)",endOnTick:!0,startOnTick:!1,tickWidth:3,tickLength:3,tickPosition:"inside"},credits:{enabled:!1},legend:{enabled:!1},series:[{color:{linearGradient:{},stops:[[.1,"#ef4d00"],[.3,"#f78800"],[.6,"#ffb700"],[.9,"#ffffff"]]},states:{hover:{lineWidthPlus:0,halo:{size:0,attributes:{fill:"",stroke:""}}}},lineWidth:6,shadow:{color:"rgba(3,9,25,0.15)",width:15,offsetX:0,offsetY:15},marker:{fillColor:"#ffffff",lineWidth:0,lineColor:null,radius:4,radiusPlus:0,states:{hover:{radiusPlus:0,lineWidth:10,lineWidthPlus:5,lineColor:"rgba(255,255,255,0.2)"}}},pointInterval:1296e6,pointStart:Date.UTC(2013,0,1),data:[.838,.848,.846,.855,.879,.899,.871,.888,.886,.857,.859,.857,.861,.868,.879,.877,.868,.877,.879,.899,.913,.914,.892,.877,.879,.877,.853,.858,.877,.875,.874,{y:.895,name:"last",marker:{enabled:!0,radius:22,fillColor:{radialGradient:{cx:.5,cy:.5,r:.5},stops:[[0,"rgba(255,255,255,1)"],[.08,"rgba(255,255,255,1)"],[.15,"rgba(255,255,255,0.2)"],[1,"rgba(255,255,255,0)"]]},states:{hover:{radius:22,lineWidth:0,lineWidthPlus:0,lineColor:"null",fillColor:{radialGradient:{cx:.5,cy:.5,r:.5},stops:[[0,"rgba(255,255,255,1)"],[.08,"rgba(255,255,255,1)"],[.15,"rgba(255,255,255,0.2)"],[1,"rgba(255,255,255,0)"]]}}}}}]}],plotOptions:{line:{marker:{enabled:!1,states:{select:{enabled:!1}}},states:{select:{enabled:!1}}},series:{allowPointSelect:!1,events:{afterAnimate:function(){this.chart.tooltip.refresh(this.chart.series[0].data[this.chart.series[0].data.length-1])},mouseOut:function(){this.chart.tooltip.refresh(this.chart.series[0].data[this.chart.series[0].data.length-1]),this.series.chart.tooltip.show()}}}},exporting:{enabled:!1}})}});