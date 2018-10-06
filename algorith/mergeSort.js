let test = require('./SortTestHelper.js')


// 自顶向下
// 优化： 1、当arr[left] < arr[right] 时不进行合并
//		 2、当数组长度很小时（eg：<= 15） 采取insertSort算法排序
function mergeSort (arr) {
	let len = arr.length;
	let l_p = 0, r_p = len - 1;
}

// 继续优化：自底向上 并不需要递归
// 速度相对慢一些，但是可以对链表进行 nlogn 的排序
function mergeSortBu (arr) {
	let len = arr.length
	for (let sz = 1; sz <= len; sz += sz) {
		for (let i = 0; i + sz < n; i += sz + sz) {
			__merge(arr, i, i + sz - 1, Math.min(i + sz + sz - 1), len -1)
		}
	}
}