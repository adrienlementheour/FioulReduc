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
		if ($("body").hasClass("page-prix")) {
			if($(window).width()>979){
				var debutScroll = ($("#bloc-commande-inte").offset().top)-($("header").height())+4;
				var debutScrollResp = ($("#bloc-commande-inte").offset().top)+4;
				var offsetBottomTicket = 160;
				var finScroll = $("#bloc-prix-regions").offset().top+$("#bloc-prix-regions").height()-$("#bloc-commande-inte-fixed").height()-160;
				if(myScroll>=finScroll-50){
					if(!TweenMax.isTweening($(".connaitre-prix-fioul"))){
						var tlConnaitrePrixFioul;
						tlConnaitrePrixFioul = new TimelineMax();
						tlConnaitrePrixFioul.to($(".connaitre-prix-fioul"), 0.2, {height: "100px", ease:Cubic.easeInOut});
						tlConnaitrePrixFioul.to($(".connaitre-prix-fioul p"), 0.2, {opacity: 1, y: "0", ease:Cubic.easeInOut});
						tlConnaitrePrixFioul.to($(".connaitre-prix-fioul:before"), 0.2, {opacity: 1, y: "0", ease:Cubic.easeInOut});
					}
				}
				if (myScroll>=debutScroll && myScroll<finScroll+$("header").height()) {
					TweenMax.set($("#bloc-commande-inte-fixed"), {position: "fixed", top: "70px"});
				}else{
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
		}else {
			if($(window).width()>979){
				var debutScroll = ($("#bloc-commande-inte").offset().top)-($("header").height())+4;
				var debutScrollResp = ($("#bloc-commande-inte").offset().top)+4;
				var offsetBottomTicket = 195;
				var finScroll = $("#avis-footer").offset().top-$("#bloc-commande-inte-fixed").height()-offsetBottomTicket;
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
}

function sliderGraphInte(){
	var select = $("#select-graph-inte");
    var slider = $( "<div id='slider-graph-inte'></div>" ).appendTo($("#slider-graph-inte-container")).slider({
      min: 1,
      max: 5,
      range: "min",
      value: select[ 0 ].selectedIndex + 1,
      slide: function( event, ui ) {
        select[0].selectedIndex = ui.value - 1;
      }
    });
    $("#select-graph-inte").change(function() {
      slider.slider( "value", this.selectedIndex + 1 );
    });
    $("a.btn-slider-graph-inte").click(function() {
    	var indexSelec = select[0].selectedIndex;
    	if($(this).hasClass("btn-moins")){
    		if(indexSelec>0){
    			$("option:eq("+(indexSelec-1)+")",select[0]).prop('selected', true);
    			slider.slider( "value", (indexSelec+1)-1 );
    		}
    	}else{
    		if(indexSelec<4){
    			$("option:eq("+(indexSelec+1)+")",select[0]).prop('selected', true);
    			slider.slider( "value", (indexSelec+1)+1);
    		}
    	}
    	return false;
    });
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
		if ($("body").hasClass("page-prix")) {
			//slider-graph-inte
			sliderGraphInte();
		
			TweenMax.set($(".connaitre-prix-fioul"), {height: "0px"});
			TweenMax.set($(".connaitre-prix-fioul p"), {opacity: 0, y: "-100px"});
			TweenMax.set($(".connaitre-prix-fioul:before"), {opacity: 0, y: "-100px"});
			
			// création du graphe
			var myChart = new Highcharts.Chart({
				title: {
					text: ''
				},
				chart: {
				    backgroundColor: '',
				    renderTo: 'part-graph-inte'
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
	}
});