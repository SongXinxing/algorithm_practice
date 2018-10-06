window.onload = function () {
	var MVC = MVC || {};
	MVC.model = function () {
		var M = {};
		M.data = {
			slideBar: [
				{
					text: '萌妹子',
					icon: 'left_meng.png',
					title: '苗儿萝莉的千本樱',
					content: '自古幼女有三好',
					img: 'left_meng_img.png',
					href: 'http://moe.hao123.com'
				},
				{
					text: '萌妹子',
					icon: 'left_meng.png',
					title: '苗儿萝莉的千本樱',
					content: '自古幼女有三好',
					img: 'left_meng_img.png',
					href: 'http://moe.hao123.com'
				},
				{
					text: '萌妹子',
					icon: 'left_meng.png',
					title: '苗儿萝莉的千本樱',
					content: '自古幼女有三好',
					img: 'left_meng_img.png',
					href: 'http://moe.hao123.com'
				},
				{
					text: '萌妹子',
					icon: 'left_meng.png',
					title: '苗儿萝莉的千本樱',
					content: '自古幼女有三好',
					img: 'left_meng_img.png',
					href: 'http://moe.hao123.com'
				},
				{
					text: '萌妹子',
					icon: 'left_meng.png',
					title: '苗儿萝莉的千本樱',
					content: '自古幼女有三好',
					img: 'left_meng_img.png',
					href: 'http://moe.hao123.com'
				}
			]
		};
		M.conf = {
			slideBarCloseAnimate: false
		};
		return {
			getData (m) {
				return M.data[m];
			},
			getConf (c) {
				return M.conf[c];
			},
			setData (m, v) {
				M.data[m] = v;
				return this;
			},
			setConf (c, v) {
				M.conf[c] = v;
				return this
			}
		}
	}();
	MVC.view = function () {
		var M = MVC.model;
		var V = {
			createSlideBar: function () {
				var html = '';
				var data = M.getData('slideBar');
				if (!data || !data.length) {
					return;
				}
				var dom = $.create('div', {
					'class': 'slidebar',
					'id': 'slideBar'
				});
				var tpl = {
					container: [
						'<div class="slidebar-inner"><ul>{#content#}</ul></idv>',
						'<a hidefocus href="#" class="slidebar-close" title="收起">收起</a>'
					].join(''),
					item: `
						<li>
							<a calss="icon" href="{#href#}>"
								<img src="common/img/{#icon#}">
								<span>{#text#}</span>
							</a>
							<div class="box">
								<div>
									<a calss="title" href="{#href#}">{#title#}</a>
									<a href="{#href}">{#content#}</a>
								</div>
								<a class="image" href="{#href#}">{#img#}</a>
							</div>
						</li>
					`
				};
				for (var i = 0, len = data.length; i < len; i++) {
					html += $.formateString(tpl.item, data[i]);
				}
				dom.html($.formateString(tpl.container, {content: html})).appendTo('body')
			}
		};
		return function (v) {
			V[v]()
		}
	}();
	MVC.ctrl = function () {
		var M = MVC.model;
		var V = MVC.view;
		var C = {
			initSlideBar: function () {
				V('createSlideBar');
				$('li', 'slidebar').on('mouseover', function () {
					$(this).addClass('show');
				}).on('mouseout', function () {
					$(this).removeClass('show');
				})
				$('.slidebar-close', 'slideBar').on('click', function (e) {
					if (M.getConf('slideBarCloseAnimate')) {
						return false;
					}
					M.setConf('slideBarCloseAnimate', true);
					var $this = $(this);
					if ($this.hasClass('is-close')) {
						$('.slidebar-inner', 'slideBar').animate({
							duration: 800,
							type: 'easeOutQuart',
							main: function(dom) {
								dom.css('left', -50 + this.tween * 50 + 'px')
							},
							end: function () {
								$this.removeClass('is-close');
								M.setConf('slideBarCloseAnimate', false);
							}
						})
					} else {
						$('.slidebar-inner', 'slideBar').animate({
							duration: 800,
							type: 'easeOutQuart',
							main: function (dom) {
								dom.css('left', this.tween * - 50 +'px')
							},
							end: function () {
								$this.addClass('is-close');
								M.setConf('slideBarCloseAnimate', false);
							}
						})
					}
				})
			}
		};
		C.initSlideBar(); // 执行控制器
	}();
	window.MVC = MVC;
}
