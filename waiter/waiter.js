window.Waiter = function () {
	var dfd = [], // 等待对象容器
		doneArr = [], // 成功回调
		failArr = [], // 失败回调
		slice = [].slice,
		that = this;

	var Primise = function () {
		this.resolved = false;
		this.rejected = false;
	}
	Primise.prototype = {
		resolve: function () {
			this.resolved = true;
			if (!dfd.length) return;
			for (var i = dfd.length - 1; i >= 0; i--) {
				if (dfd[i] && !dfd[i].resolved || dfd[i].rejected) {
					return;
				}
				dfd.splice(i, 1);
			}
			_exec(doneArr);
		},
		reject: function () {
			this.rejected = true;
			if (!dfd.length) return;
			dfd.splice(0);
			_exec(failArr)
		}
	}

	// 创建监控对象
	this.Deferred = function () {
		return new Primise();
	}

	// 回调执行方法
	function _exec (arr) {
		var i = 0,
			len = arr.length;
		for (; i < len; i++) {
			try {
				arr[i] && arr[i]();
			} catch (e) {}
		}
	}

	// 监控异步方法 参数： 监控对象
	that.when = function () {
		dfd = slice.call(arguments);
		var i = dfd.length;
		for (--i; i >= 0; i--) {
			if (!dfd[i] || dfd[i].resolved || dfd[i].rejected || !dfd[i] instanceof Primise) {
				dfd.splice(i, 1);
			}
		}
		return that;
	}

	that.done = function () {
		doneArr = doneArr.concat(slice.call(arguments));
		return that;
	}

	that.fail = function () {
		failArr = failArr.concat(slice.call(arguments));
		return that;
	}
}
