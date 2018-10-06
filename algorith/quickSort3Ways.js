let test = require('./SortTestHelper.js')



function __quickSort3Ways (arr, l, r) {
	if (l >= r) return

	let m = Math.floor(Math.random() * (r - l + 1)) + l
	arr[l] = [arr[m], arr[m] = arr[l]][0]

	let v = arr[l]
	let lt = l; // arr[l+1...r] < v
	let gt = r + 1; // arr[gt...r] > v
	let i = l + 1; //arr[lt+1...i] == v
	while (i < gt) {
		if (arr[i] < v) {
			arr[i] = [arr[lt+1], arr[lt+1] = arr[i]][0]
			lt++
			i++
		} else if (arr[i] > v) {
			arr[i] = [arr[gt-1], arr[gt-1] = arr[i]][0]
			gt--
		} else {
			i++
		}
	}
	arr[l] = [arr[lt], arr[lt] = arr[l]][0]

	__quickSort3Ways(arr, l, lt-1)
	__quickSort3Ways(arr, gt, r)
}

function quickSort3Ways (arr) {
	let len = arr.length
	__quickSort3Ways (arr, 0, len)
}


let ary = test.SortTestHelper(10000000, 0, 1)
test.testSort(quickSort3Ways, ary)


