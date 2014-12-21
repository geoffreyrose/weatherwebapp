/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-untitled' : '&#xe000;',
			'icon-untitled-2' : '&#xe001;',
			'icon-untitled-3' : '&#xe002;',
			'icon-untitled-4' : '&#xe003;',
			'icon-untitled-5' : '&#xe004;',
			'icon-untitled-6' : '&#xe005;',
			'icon-untitled-7' : '&#xe006;',
			'icon-untitled-8' : '&#xe007;',
			'icon-untitled-9' : '&#xe008;',
			'icon-untitled-10' : '&#xe009;',
			'icon-untitled-11' : '&#xe00a;',
			'icon-untitled-12' : '&#xe00b;',
			'icon-untitled-13' : '&#xe00c;',
			'icon-untitled-14' : '&#xe00d;',
			'icon-untitled-15' : '&#xe00e;',
			'icon-untitled-16' : '&#xe00f;',
			'icon-untitled-17' : '&#xe010;',
			'icon-untitled-18' : '&#xe011;',
			'icon-untitled-19' : '&#xe012;',
			'icon-untitled-20' : '&#xe013;',
			'icon-untitled-21' : '&#xe014;',
			'icon-untitled-22' : '&#xe015;',
			'icon-untitled-23' : '&#xe016;',
			'icon-untitled-24' : '&#xe017;',
			'icon-untitled-25' : '&#xe018;',
			'icon-untitled-26' : '&#xe019;',
			'icon-untitled-27' : '&#xe01a;',
			'icon-untitled-28' : '&#xe01b;',
			'icon-untitled-29' : '&#xe01c;',
			'icon-untitled-30' : '&#xe01d;',
			'icon-untitled-31' : '&#xe01e;',
			'icon-untitled-32' : '&#xe01f;',
			'icon-untitled-33' : '&#xe020;',
			'icon-untitled-34' : '&#xe021;',
			'icon-untitled-35' : '&#xe022;',
			'icon-untitled-36' : '&#xe023;',
			'icon-untitled-37' : '&#xe024;',
			'icon-untitled-38' : '&#xe025;',
			'icon-untitled-39' : '&#xe026;',
			'icon-untitled-40' : '&#xe027;',
			'icon-untitled-41' : '&#xe028;',
			'icon-untitled-42' : '&#xe029;',
			'icon-untitled-43' : '&#xe02a;',
			'icon-untitled-44' : '&#xe02b;',
			'icon-untitled-45' : '&#xe02c;',
			'icon-untitled-46' : '&#xe02d;',
			'icon-untitled-47' : '&#xe02e;',
			'icon-untitled-48' : '&#xe02f;',
			'icon-untitled-49' : '&#xe030;',
			'icon-untitled-50' : '&#xe031;',
			'icon-untitled-51' : '&#xe032;',
			'icon-untitled-52' : '&#xe033;',
			'icon-untitled-53' : '&#xe034;',
			'icon-untitled-54' : '&#xe035;',
			'icon-untitled-55' : '&#xe036;',
			'icon-untitled-56' : '&#xe037;',
			'icon-untitled-57' : '&#xe038;',
			'icon-untitled-58' : '&#xe039;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};