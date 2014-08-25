///////////////
// variables //
///////////////

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
		$('#part-graph').highcharts({
			title: {
				text: ''
			},
			chart: {
			    backgroundColor: ''
			},
		    xAxis: {
		        type: 'datetime',
		        minRange: 364 * 24 * 3600000, 
                tickmarkPlacement: 'on',
                gridLineWidth: 1
		    },
		    yAxis: {
		        title: {
		            text: ''
		        },
		        plotLines: [{
		            value: 0,
		            width: 1,
		            color: '#808080'
		        }]
		    },
		    credits: {
		           enabled: false
		    },
		    tooltip: {
		        valueSuffix: '°C'
		    },
		    legend: {
		        layout: 'vertical',
		        align: 'right',
		        verticalAlign: 'middle',
		        borderWidth: 0
		    },
		    series: [{
		    	color: {
		    	    linearGradient: { x0: 0, x1: 0.2, x2: 0.6, x3: 1},
		    	    stops: [
		    	        [0, '#ef4d00'],
		    	        [1, '#f78800'],
		    	        [2, '#ffb700'],
		    	        [3, '#ffffff']
		    	    ]
		    	},
		    	lineWidth: 6,
		    	shadow: {
		    	    color: 'rgba(3,9,25,0.2)',
		    	    width: 15,
		    	    offsetX: 0,
		    	    offsetY: 15
		    	},
		        name: 'Prix',
		        pointInterval: 60 * 24 * 3600 * 1000,
		        pointStart: Date.UTC(2013, 0, 01),
		        data: [0.839, 0.858, 0.896, 0.915, 0.857, 0.839, 0.838, 0.879, 0.877, 0.858, 0.877]
		    }],
		    plotOptions: {
		        line: {
		            marker: {
		                enabled: false
		            }
		        }
		    },
		    exporting: {
		        enabled: false
		    },
		    legend: {
		        enabled: false
		    }
		});
	}
});

$( window ).resize(function() {

});