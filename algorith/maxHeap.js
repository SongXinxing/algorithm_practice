let test = require('./SortTestHelper.js')


function MaxHeap (arr) {
	let data = new Array(1)
	if (arr) {
		data.concat(arr)
	}
	for (let i = Math.floor(data.length / 2); i >= 1; i--) {
		shiftDown(i)
	}
	function shiftUp (k) {
		while (k > 1 && data[Math.floor(k / 2)] < data[k]) {
			data[Math.floor(k / 2)] = [data[k], data[k] = data[Math.floor(k / 2)]][0]
			k = Math.floor(k / 2)
		}
	}
	function shiftDown (k) {
		while (2*k <= data.length-1) {
			let j = 2 * k
			if (j+1 <= data.length-1 && data[j+1] > data[j]) {
				j +=1
			}
			if (data[k] >= data[j]) {
				break;
			}
			data[k] = [data[j], data[j] = data[k]][0]
			k = j
		}
	}
	this.isEmpty = function () {
		return data.length > 1
	}
	this.insert = function (item) {
		data.push(item)
		shiftUp(data.length - 1)
	}
	this.extractMax = function () {
		if (data.length <= 1) return
		let ret = data[1]

		data.splice(1, 1, data.pop())
		shiftDown(1)
		return ret
	}
	this.getData = function () {
		return data;
	}
}

let maxHeap = new MaxHeap()
// let ary = test.SortTestHelper(10, 0, 100)
// for (let i = 0; i < ary.length; i++) {
// 	maxHeap.insert(ary[i])
// }
// for (let i = 0; i < ary.length; i++) {
// 	console.log(maxHeap.extractMax())
// }

module.exports = MaxHeap

