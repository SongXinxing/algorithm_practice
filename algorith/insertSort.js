let test = require('./SortTestHelper.js')

function insertSort (ary) {
	let len = ary.length
	for (let i = 1; i < len; i++) {
		for (let j = i; j > 0 && ary[j] < ary[j - 1]; j--) {
			ary[j] = [ary[j - 1], ary[j - 1] = ary[j]][0]
		}
	}
}

// 插入排序 如果在一个近乎有序的数组中的复杂度是 O(n) 内存循环不会进入
function insertSort2 (ary) {
	let len = ary.length
	for (let i = 1; i < len; i++) {
		let v = ary[i]
		let j = i
		for (; j > 0 && v < ary[j - 1]; j--) {
			ary[j] = ary[j - 1]
		}
		ary[j] = v
	}
}

function insertSort3 (ary) {
	let len = ary.length
	for (let i = 1; i < len; i++) {
		let v = ary[i]
		let j = i
		for (; j > 0; j--) { // 相比于 && 执行步骤多了，速度略慢了一些
			if (v < ary[j - 1]) {
				ary[j] = ary[j - 1]
			} else {
				break;
			}
		}
		ary[j] = v
	}
}

let ary = test.SortTestHelper(100000, 0, 3)
test.testSort(insertSort2, ary)
