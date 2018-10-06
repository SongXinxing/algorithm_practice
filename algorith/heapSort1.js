let test = require('./SortTestHelper.js')

// let maxHeap = require('./maxHeap.js')
let MaxHeap = require('./maxHeap.js')


function heapSort (arr) {
	// for (let i = 0; i < arr.length; i++) {
	// 	maxHeap.insert(arr[i])
	// }

	let maxHeap = new MaxHeap(arr);
	for (let j = arr.length - 1; j >= 0; j--) {
		arr[j] = maxHeap.extractMax()
	}
}


let ary = test.SortTestHelper(10000000, 0, 10000000)
test.testSort(heapSort, ary)
