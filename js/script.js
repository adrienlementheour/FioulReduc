///////////////
// variables //
///////////////

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


/////////////////////////////////////////////////////////////////////////
/////////// FONCTION POUR OUVRIR ET FERMER LE MENU RESPONSIVE //////////
/////////////////////////////////////////////////////////////////////////
function ouvertureFermetureMenuResponsive(){
	TweenMax.to($("body"), 0.5, {x: "250px", ease:Cubic.easeInOut});
	//TweenMax.to($("nav"), 0.5, {x: "0", ease:Cubic.easeInOut});
}

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
		$("a#bouton-menu-responsive").click(function(){
			ouvertureFermetureMenuResponsive();
			return false;
		});
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
		$('#part-graph').highcharts({
			title: {
				text: ''
			},
			chart: {
			    backgroundColor: '',
			},
			tooltip: {
	            backgroundColor: 'rgba(255,255,255,0.95)',
	            borderWidth: 0,
	            borderColor: null,
	            useHTML:true,
	            shape: 'square',
	            style: {
	            	padding: '0',
	            	'border-radius': '5px',
	            },
	            formatter: function() {
	        		var fioulVal = this.y;
	                return '<div class="graphTooltip"><h5>'+Highcharts.dateFormat('Le %e %B %Y',new Date(this.x))+'</h5><strong>' + fioulVal.toString().replace(".",",") + ' <span>€/litre</span></strong><p>Prix moyen national fioulreduc <br />pour 1000 litres de fioul standard <a href="#">En savoir +</a></div>';
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
		        	{y:0.895, marker:{enabled: true,radius:22,fillColor: {
			            radialGradient: {cx: 0.5, cy: 0.5, r: 0.5},
			            stops: [
			                [0, 'rgba(255,255,255,1)'],
			                [0.08, 'rgba(255,255,255,1)'],
			                [0.15, 'rgba(255,255,255,0.2)'],
			                [1, 'rgba(255,255,255,0)']
			            ]
			        }}}
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
                }
		    },
		    exporting: {
		        enabled: false
		    },
		});
	}
});