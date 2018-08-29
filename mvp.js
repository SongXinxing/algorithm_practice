~(function () {
	var MVP = function (modName, pst, data) {
		MVP.model.setData(modName, data);
		MVP.presenter.add(modName, pst);
	};
	MVP.model = function () {
		var M = {};
		M.data = {
			nav: [
				{
					text: '新闻头条',
					mode: 'news',
					url: 'http://www.example.com/01'
				},
				{
					text: '最新电影',
					mode: 'movie',
					url: 'http://www.example.com/02'
				},
				{
					text: '热门游戏',
					mode: 'game',
					url: 'http://www.example.com/03'
				},
				{
					text: '今日特价',
					mode: 'price',
					url: 'http://www.example.com/04'
				}
			]
		}
		M.conf = {}
		return {
			getData: function (m) {
				return M.data[m];
			},
			setData: function (m, v) {
				M.data[m] = v;
				return v;
			},
			getConf: function (c) {
				return M.data[c];
			},
			setConf: function (c, v) {
				M.conf[c] = v;
				return v;
			}
		}
	}();
	MVP.view = function () {
		var REPLACEKEY = '__REPLACEKEY__';
		function getHTML (str, type) {
			return str.replace(/^(\w+)([^\{\}]*)?(\{([@\w]+)\})?(.*?)$/g, function (match, $1, $2, $3, $4, $5) {
				$2 = $2 || '';
				$3 = $3 || '';
				$4 = $4 || '';
				$5 = $5.replace(/\{([@\w]+)\}/g, '');

				return type == 'in' ?
					'<' + $1 + $2 + $5 + '>' + $4 + REPLACEKEY + '</' + $1 + '>' :
					type === 'add' ?
						'<' + $1 + $2 + $5 + '>' + $4 + '</' + $1 + '>' + REPLACEKEY :
						'<' + $1 + $2 + $5 + '>' + $4 + '</' + $1 + '>';
			}).replace(/#([@\-\w]+)/g, ' id="$1"')
			.replace(/\.([@\-\s\w]+)/g, ' class="$1"')
			.replace(/\[(.+)\]/g, function (match, key) {
				var a = key
						.replace(/'|"/g, '')
						.split(' '),
					h = '';
				for (var j = 0, len = a.length; j < len; j++) {
					h += ' ' + a[j].replace(/=(.*)/g, '="$1"');
				}
				return h;
			})
			.replace(/@(\w+)/g, '{#$1#}');
		}
		function eachArray (arr, fn) {
			for (var i = 0, len = arr.length; i < len; i++) {
				fn(i, arr[i], len);
			}
		}
		function formateItem (str, rep) {
			return str.replace(new RegExp(REPLACEKEY, 'g'), rep)
		}

		return function (str) {
			var part = str
				.replace(/^\s+|\s+$/g, '')
				.replace(/^\s+(>)\s+/g, '$1')
				.split('>'),
					html = REPLACEKEY,
					item,
					nodeTpl;
			eachArray(part, function (partIndex, partValue, partLen) {
				item = partValue.split('+');
				nodeTpl = REPLACEKEY;
				eachArray(item, function (itemIndex, itemValue, itemLen) {
					nodeTpl = formateItem(nodeTpl, getHTML(itemValue, itemIndex === itemLen - 1 ? (partIndex === partLen - 1) ? '' : 'in' : 'add'));
				})
				html = formateItem(html, nodeTpl);
			})
			return html
		}
	}();
	MVP.presenter = function () {
		var V = MVP.view;
		var M = MVP.model;
		var C = {
			nav: function (M, V) {
				var data = M.getData('nav');
				data[0].choose = 'choose';
				data[data.length - 1].last = 'last';
				var tpl = V('li.@mode @choose @last[data-mode=@mode]>a#nav_@mode.nav-@mode[href=@url title=@text]>i.nav-icon-@mode+span{@text}');
				$.create('ul', {
					'class': 'navigation',
					'id': 'nav'
				})
				.html(A.formateString(tpl, data))
				.appendTo('#container');
			}
		};
		return {
			init: function () {
				for (var i in C) {
					C[i] && C[i](M, V, i);
				}
			},
			add: function (modName, pst) {
				C[modName] = pst;
				return this;
			}
		}
	}();
	MVP.init = function () {
		this.presenter.init();
	};
	window.MVP = MVP;
})(window)

var tpl = [
	'<li class="{# mode #} {# choose #} {# last #}" data-mode="{# mode #}">',
		'<a id="nav_{# mode #}" class="nav-{# mode #}" href="{# url #}" title="{# text #}">',
			'<i class="nav-icon-{# mode #}"></i>',
			'<span>{# text #}</span>',
		'</a>',
	'</li>',
].join('');


















