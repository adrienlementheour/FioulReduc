function positionBlocCommandeInte(e){if($("body").hasClass("interieure"))if($("body").hasClass("page-prix"))if($(window).width()>979){var i=$("#bloc-commande-inte").offset().top-$("header").height()+4,t=$("#bloc-commande-inte").offset().top+4,n=160,a=$("#bloc-prix-regions").offset().top+$("#bloc-prix-regions").height()-$("#bloc-commande-inte-fixed").height()-160;if(e>=a-50&&!TweenMax.isTweening($(".connaitre-prix-fioul"))){var o;o=new TimelineMax,o.to($(".connaitre-prix-fioul"),.2,{height:"100px",ease:Cubic.easeInOut}),o.to($(".connaitre-prix-fioul p"),.2,{opacity:1,y:"0",ease:Cubic.easeInOut}),o.to($(".connaitre-prix-fioul:before"),.2,{opacity:1,y:"0",ease:Cubic.easeInOut})}e>=i&&e<a+$("header").height()?TweenMax.set($("#bloc-commande-inte-fixed"),{position:"fixed",top:"70px"}):(TweenMax.set($("#bloc-commande-inte-fixed"),{position:"absolute"}),i>e?TweenMax.set($("#bloc-commande-inte-fixed"),{top:"15px"}):$(window).width()>1024?TweenMax.set($("#bloc-commande-inte-fixed"),{top:a-33-$("header").height()+"px"}):TweenMax.set($("#bloc-commande-inte-fixed"),{top:a-106-$("header").height()+"px"}))}else TweenMax.set($("#bloc-commande-inte-fixed"),{position:"relative",top:0});else if($(window).width()>979){var i=$("#bloc-commande-inte").offset().top-$("header").height()+4,t=$("#bloc-commande-inte").offset().top+4,n=195,a=$("#avis-footer").offset().top-$("#bloc-commande-inte-fixed").height()-n;e>=i&&e<a+$("header").height()?TweenMax.set($("#bloc-commande-inte-fixed"),{position:"fixed",top:"70px"}):(TweenMax.set($("#bloc-commande-inte-fixed"),{position:"absolute"}),i>e?TweenMax.set($("#bloc-commande-inte-fixed"),{top:"15px"}):$(window).width()>1024?TweenMax.set($("#bloc-commande-inte-fixed"),{top:a-33-$("header").height()+"px"}):TweenMax.set($("#bloc-commande-inte-fixed"),{top:a-106-$("header").height()+"px"}))}else TweenMax.set($("#bloc-commande-inte-fixed"),{position:"relative",top:0})}function sliderGraphInte(){var e=$("#select-graph-inte"),i=$("<div id='slider-graph-inte'></div>").appendTo($("#slider-graph-inte-container")).slider({min:1,max:5,range:"min",value:e[0].selectedIndex+1,slide:function(i,t){e[0].selectedIndex=t.value-1,$("ul.intitules-slider-graph li.active").removeClass("active"),$("ul.intitules-slider-graph li:eq("+e[0].selectedIndex+")").addClass("active")}});$("#select-graph-inte").change(function(){i.slider("value",this.selectedIndex+1)}),$("a.btn-slider-graph-inte").click(function(){var t=e[0].selectedIndex;return $(this).hasClass("btn-moins")?t>0&&($("option:eq("+(t-1)+")",e[0]).prop("selected",!0),i.slider("value",t+1-1),$("ul.intitules-slider-graph li.active").removeClass("active"),$("ul.intitules-slider-graph li:eq("+(t-1)+")").addClass("active")):4>t&&($("option:eq("+(t+1)+")",e[0]).prop("selected",!0),i.slider("value",t+1+1),$("ul.intitules-slider-graph li.active").removeClass("active"),$("ul.intitules-slider-graph li:eq("+(t+1)+")").addClass("active")),!1})}function animer(e){positionBlocCommandeInte(e),requestAnimFrame(function(){e=$(document).scrollTop(),animer(e)})}window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),$(document).bind("touchmove",function(e){var i=$(document).scrollTop();positionBlocCommandeInte(i)}),$(document).ready(function(){if($("body").hasClass("interieure")&&$("body").hasClass("page-prix")){sliderGraphInte(),TweenMax.set($(".connaitre-prix-fioul"),{height:"0px"}),TweenMax.set($(".connaitre-prix-fioul p"),{opacity:0,y:"-100px"}),TweenMax.set($(".connaitre-prix-fioul:before"),{opacity:0,y:"-100px"}),$("#tabs-tendance li a").click(function(){$(window).width()<768&&$("html, body").animate({scrollTop:$("#tabs-tendance-content").offset().top-100},500)});var e=new Highcharts.Chart({title:{text:""},chart:{backgroundColor:"",renderTo:"part-graph-inte"},tooltip:{backgroundColor:"",borderWidth:0,borderColor:null,useHTML:!0,shadow:!1,shape:"square",style:{padding:"0","border-radius":"5px"},formatter:function(){var e=this.y,i=Highcharts.dateFormat("Le %e %B %Y",new Date(this.x));return"last"==this.key?'<div class="graphTooltip today"><h5>AUJOURD’HUI</h5><strong>'+e.toString().replace(".",",")+" <span>€</span>":'<div class="graphTooltip"><h5>'+i+"</h5><strong>"+e.toString().replace(".",",")+' <span>€/litre</span></strong><p>Prix moyen national fioulreduc <br />pour 1000 litres de fioul standard <a href="#">En savoir +</a></div>'}},xAxis:{labels:{style:{color:"#a6d8f2",font:'1em "lato-italic", sans-serif'}},type:"datetime",dateTimeLabelFormats:{month:"%b %y"},minRange:314496e5,tickmarkPlacement:"on",gridLineWidth:1,endOnTick:!0,startOnTick:!1,gridLineWidth:1,gridLineColor:"rgba(255,255,255,0.1)",lineColor:"rgba(255,255,255,0)",tickWidth:3,tickLength:3,tickPosition:"inside",min:Date.UTC(2012,11,17)},yAxis:{title:{text:""},labels:{style:{color:"#a6d8f2",font:'1em "lato-italic", sans-serif'}},tickmarkPlacement:"on",gridLineWidth:1,gridLineColor:"rgba(255,255,255,0.1)",lineColor:"rgba(255,255,255,0)",endOnTick:!0,startOnTick:!1,tickWidth:3,tickLength:3,tickPosition:"inside"},credits:{enabled:!1},legend:{enabled:!1},series:[{color:{linearGradient:{},stops:[[.1,"#ef4d00"],[.3,"#f78800"],[.6,"#ffb700"],[.9,"#ffffff"]]},states:{hover:{lineWidthPlus:0,halo:{size:0,attributes:{fill:"",stroke:""}}}},lineWidth:6,shadow:{color:"rgba(3,9,25,0.15)",width:15,offsetX:0,offsetY:15},marker:{fillColor:"#ffffff",lineWidth:0,lineColor:null,radius:4,radiusPlus:0,states:{hover:{radiusPlus:0,lineWidth:10,lineWidthPlus:5,lineColor:"rgba(255,255,255,0.2)"}}},pointInterval:1296e6,pointStart:Date.UTC(2013,0,1),data:[.838,.848,.846,.855,.879,.899,.871,.888,.886,.857,.859,.857,.861,.868,.879,.877,.868,.877,.879,.899,.913,.914,.892,.877,.879,.877,.853,.858,.877,.875,.874,{y:.895,name:"last",marker:{enabled:!0,radius:22,fillColor:{radialGradient:{cx:.5,cy:.5,r:.5},stops:[[0,"rgba(255,255,255,1)"],[.08,"rgba(255,255,255,1)"],[.15,"rgba(255,255,255,0.2)"],[1,"rgba(255,255,255,0)"]]},states:{hover:{radius:22,lineWidth:0,lineWidthPlus:0,lineColor:"null",fillColor:{radialGradient:{cx:.5,cy:.5,r:.5},stops:[[0,"rgba(255,255,255,1)"],[.08,"rgba(255,255,255,1)"],[.15,"rgba(255,255,255,0.2)"],[1,"rgba(255,255,255,0)"]]}}}}}]}],plotOptions:{line:{marker:{enabled:!1,states:{select:{enabled:!1}}},states:{select:{enabled:!1}}},series:{allowPointSelect:!1,events:{afterAnimate:function(){this.chart.tooltip.refresh(this.chart.series[0].data[this.chart.series[0].data.length-1])},mouseOut:function(){this.chart.tooltip.refresh(this.chart.series[0].data[this.chart.series[0].data.length-1]),this.series.chart.tooltip.show()}}}},exporting:{enabled:!1}})}});