/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'fioulreduc\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-arrow-bottom': '&#xe600;',
		'icon-arrow-left': '&#xe601;',
		'icon-arrow-right': '&#xe602;',
		'icon-arrow-top': '&#xe603;',
		'icon-fleche-rond': '&#xe604;',
		'icon-icon-plus': '&#xe605;',
		'icon-maison': '&#xe606;',
		'icon-play': '&#xe607;',
		'icon-sousligne': '&#xe608;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
