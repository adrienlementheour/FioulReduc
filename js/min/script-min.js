function ouvertureFermetureMenuResponsive(){TweenMax.to($("body"),.5,{x:"250px",ease:Cubic.easeInOut})}function ouvertureFermetureBlocCommandeHome(e){"ouverture"==e?$("#bloc-commande").hasClass("bloc-ouvert")||($("#bloc-commande").addClass("bloc-ouvert"),TweenMax.to($("#masque-form-home"),.5,{height:"240px",ease:Cubic.easeInOut})):$("#bloc-commande").hasClass("bloc-ouvert")?($("#bloc-commande").removeClass("bloc-ouvert"),TweenMax.to($("#masque-form-home"),.5,{height:"50px",ease:Cubic.easeInOut})):($("#bloc-commande").addClass("bloc-ouvert"),TweenMax.to($("#masque-form-home"),.5,{height:"240px",ease:Cubic.easeInOut}))}Highcharts.setOptions({lang:{months:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],shortMonths:["Jan","Fev","Mar","Avr","Mai","Juin","Juil","Aout","Sept","Oct","Nov","Déc"],weekdays:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],decimalPoint:",",loading:"Chargement en cours...",thousandsSep:" "}}),$(document).ready(function(){if($("body").hasClass("home")){$("a#bouton-menu-responsive").click(function(){return ouvertureFermetureMenuResponsive(),!1}),$("a#fil-commande").click(function(){return ouvertureFermetureBlocCommandeHome(),!1}),$("#order-zipcode").focusin(function(){return ouvertureFermetureBlocCommandeHome("ouverture"),!1}),$("ul.refs").click(function(){return window.location.href="#",!1}),Highcharts.wrap(Highcharts.Tick.prototype,"getMarkPath",function(e,t,r,a,i,o,s){var n=s.arc(t,r,Math.round(a/2),0,-Math.PI/2,3*Math.PI/2).d.split(" ");return n}),Highcharts.wrap(Highcharts.Tick.prototype,"render",function(e,t,r,a){e.apply(this,Array.prototype.slice.call(arguments,1)),this&&this.mark&&this.mark.attr({fill:"#ffffff",opacity:.25})});var e=new Highcharts.Chart({title:{text:""},chart:{backgroundColor:"",renderTo:"part-graph"},tooltip:{backgroundColor:"",borderWidth:0,borderColor:null,useHTML:!0,shadow:!1,shape:"square",style:{padding:"0","border-radius":"5px"},formatter:function(){var e=this.y,t=Highcharts.dateFormat("Le %e %B %Y",new Date(this.x));return"last"==this.key?'<div class="graphTooltip today"><h5>AUJOURD’HUI</h5><strong>'+e.toString().replace(".",",")+" <span>€</span>":'<div class="graphTooltip"><h5>'+t+"</h5><strong>"+e.toString().replace(".",",")+' <span>€/litre</span></strong><p>Prix moyen national fioulreduc <br />pour 1000 litres de fioul standard <a href="#">En savoir +</a></div>'}},xAxis:{labels:{style:{color:"#a6d8f2",font:'1em "lato-italic", sans-serif'}},type:"datetime",dateTimeLabelFormats:{month:"%b %y"},minRange:314496e5,tickmarkPlacement:"on",gridLineWidth:1,endOnTick:!0,startOnTick:!1,gridLineWidth:1,gridLineColor:"rgba(255,255,255,0.1)",lineColor:"rgba(255,255,255,0)",tickWidth:3,tickLength:3,tickPosition:"inside",min:Date.UTC(2012,11,17)},yAxis:{title:{text:""},labels:{style:{color:"#a6d8f2",font:'1em "lato-italic", sans-serif'}},tickmarkPlacement:"on",gridLineWidth:1,gridLineColor:"rgba(255,255,255,0.1)",lineColor:"rgba(255,255,255,0)",endOnTick:!0,startOnTick:!1,tickWidth:3,tickLength:3,tickPosition:"inside"},credits:{enabled:!1},legend:{enabled:!1},series:[{color:{linearGradient:{},stops:[[.1,"#ef4d00"],[.3,"#f78800"],[.6,"#ffb700"],[.9,"#ffffff"]]},states:{hover:{lineWidthPlus:0,halo:{size:0,attributes:{fill:"",stroke:""}}}},lineWidth:6,shadow:{color:"rgba(3,9,25,0.15)",width:15,offsetX:0,offsetY:15},marker:{fillColor:"#ffffff",lineWidth:0,lineColor:null,radius:4,radiusPlus:0,states:{hover:{radiusPlus:0,lineWidth:10,lineWidthPlus:5,lineColor:"rgba(255,255,255,0.2)"}}},pointInterval:1296e6,pointStart:Date.UTC(2013,0,1),data:[.838,.848,.846,.855,.879,.899,.871,.888,.886,.857,.859,.857,.861,.868,.879,.877,.868,.877,.879,.899,.913,.914,.892,.877,.879,.877,.853,.858,.877,.875,.874,{y:.895,name:"last",marker:{enabled:!0,radius:15,fillColor:{radialGradient:{cx:.5,cy:.5,r:.5},stops:[[0,"rgba(255,255,255,1)"],[.1,"rgba(255,255,255,1)"],[.18,"rgba(255,255,255,0.2)"],[1,"rgba(255,255,255,0)"]]},states:{hover:{radius:22,lineWidth:0,lineWidthPlus:0,lineColor:"null",fillColor:{radialGradient:{cx:.5,cy:.5,r:.5},stops:[[0,"rgba(255,255,255,1)"],[.08,"rgba(255,255,255,1)"],[.15,"rgba(255,255,255,0.2)"],[1,"rgba(255,255,255,0)"]]}}}}}]}],plotOptions:{line:{marker:{enabled:!1,states:{select:{enabled:!1}}},states:{select:{enabled:!1}}},series:{allowPointSelect:!1,events:{afterAnimate:function(){this.chart.series[0].data[this.chart.series[0].data.length-1].setState("hover"),this.chart.tooltip.refresh(this.chart.series[0].data[this.chart.series[0].data.length-1])},mouseOut:function(){this.chart.series[0].data[this.chart.series[0].data.length-1].setState("hover"),this.chart.tooltip.refresh(this.chart.series[0].data[this.chart.series[0].data.length-1])}}}},exporting:{enabled:!1}})}});