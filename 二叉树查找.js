// 二叉树查找法
function indexOf (array, element, offset = 0) {
	const half = Math.floor(array.length / 2);
	if (half === 0 && array.length === 0) {return -1;}
	const current = array[half];
	if (current === element) {
		return offset + current;
	} else if (current < element) {
		const right = array.slice(half + 1);
		return indexOf(right, element, offset + half)
	} else {
		const left = array.slice(0, half);
		return indexOf(left, element, offset);
	}
}

const directory = ["Adrian", "Bella", "Charlotte", "Daniel", "Emma", "Hanna", "Isabella", "Jayden", "Kaylee", "Luke", "Mia", "Nora", "Olivia", "Paisley", "Riley", "Thomas", "Wyatt", "Xander", "Zoe"];


// 蹦床函数 将递归调用改成循环调用
function trampoline (f) {
	while (f && f instanceof Function) {
		f = f()
	}
	return f;
}
function sum(x, y) {
	if(y > 0) {
		return sum.bind(null, x + 1, y - 1)
	} else {
		return x;
	}
}
trampoline(sum(1, 100000))

function sum(x, y) {
	if(y > 0) {
		return sum(x + 1, y - 1)
	} else {
		return x;
	}
}

// 递归优化
function tco (fn) {
	var value,
		active = false,
		accumulated = [];
	return function accumulator () {
		accumulated.push(arguments);
		if (!active) {
			active = true;
			while(accumulated.length) {
				value = fn.apply(this, accumulated.shift());
			}
			active = false;
			return value;
		}
	}
}











