let test = require('./SortTestHelper.js')

function selection (arr) {
	let len = arr.length
	for (let i = 0; i < len; i++) {
		let minIndex = i;
		for (let j = i + 1; j < len; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j
			}
		}
		if (minIndex !== i) {
			arr[i] = [arr[minIndex], arr[minIndex] = arr[i]][0]
		}
	}
}

let ary = test.SortTestHelper(100000, 0, 3)
// console.log(ary)
// selection(ary)
// console.log(ary)
// test.testSort2(selection, 100000)
test.testSort(selection, ary)
