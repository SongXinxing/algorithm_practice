module.exports = {
	SortTestHelper (len, l, r) {
		let arr = []
		for (let i = 0 ; i < len; i++) {
			arr[i] = Math.floor(Math.random() * (r - l + 1)) + l
		}
		return arr
	},
	printArray (arr, n) {
		for (let i = 0; i < n; i++) {
			console.log(arr[i])
		}
	},
	swap (arr, a, b) {
		arr[a] = [b, b = a][0]
	},
	isSort (arr) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > arr[i + 1]) {
				return false
			}
		}
		return true
	},
	testSort (fn, arr) {
		console.time('time')
		fn(arr)
		console.timeEnd('time')
		if (!this.isSort(arr)) {
			console.log('排序失败')
		} else {
			console.log('排序成功')
		}
	},
	testSort2 (fn, n) {
		let ary = []
		for (let i = 0; i < n; i++) {
			ary.push(this.SortTestHelper(100, 0, 100))
		}
		console.time('time')
		for (let i = 0; i < n; i++) {
			fn(ary[i])
		}
		console.timeEnd('time')
	}
}








