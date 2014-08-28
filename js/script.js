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
/////////// FONCTION POUR ANIMER LE COMPTEUR //////////
///////////////////////////////////////////////////////
function compteur(){
	window.odometerOptions = {

	};
	setTimeout(function(){
	    odometer.innerHTML = 1456622466;
	}, 200);
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
	}
	
	if($("body").hasClass("home")){
		var hauteurPage = $(document).height();
		var hauteurFenetre = $(window).height();
		var positionTopCompteur = $("#odometer").offset().top;
		var offset = hauteurFenetre/1.3;

		if(((myScroll-positionTopCompteur+offset)>=0)){
			// Compteur de la home
			compteur();
		}
			
		
		
		
		
	}
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
});

$(document).ready(function(){
	myScroll = $(document).scrollTop();
	animer(myScroll);
	if($("body").hasClass("home")){
	
		// Dépliage du bloc "commandez votre fioul"
		$("a#bouton-menu-responsive").click(function(){
			ouvertureFermetureMenuResponsive();
			return false;
		});
		$("#masque-container").click(function(){
			ouvertureFermetureMenuResponsive();
			return false;
		});
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