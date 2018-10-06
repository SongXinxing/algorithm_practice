let test = require('./SortTestHelper.js')



// 对 arr[l...r] 部分进行 partition 操作
// 返回 p ，使得 arr[l...p-1] < arr[p] ; arr[p+1...r] > arr[p]
function __partition (arr, l, r) {

	// 优化 (近乎有序的时候 防止时间复杂度变成 O(n^2) )
	let m = Math.floor(Math.random() * (r - l + 1)) + l
	arr[l] = [arr[m], arr[m] = arr[l]][0]

	let v = arr[l]
	let j = l
	for (let i = l + 1; i <= r; i++) {
		if (arr[i] < v) {
			arr[j + 1] = [arr[i], arr[i] = arr[j + 1]][0]
			j++
		}
	}
	arr[j] = [arr[l], arr[l] = arr[j]][0]
	return j
}

// 当有大量重复元素时的优化（防止大部分元素都被放到一侧，增加算法复杂度）
function __partition2 (arr, l, r) {
	let m = Math.floor(Math.random() * (r - l + 1)) + l
	arr[l] = [arr[m], arr[m] = arr[l]][0]

	let v = arr[l]
	// arr[l+1...i] <= v; arr[j...r] >= v
	let i = l+1, j = r
	while (true) {
		while (i <= r && arr[i] < v) {i++}
		while (j >= l+1 && arr[j] > v) {j--}
		if (i > j) {break;}
		arr[i] = [arr[j], arr[j] = arr[i]][0]
		i++
		j--
	}
	arr[l] = [arr[j], arr[j] = arr[l]][0]
	return j;
}

// Quick Sort 3 Ways (< v; = v; > v)

function __quickSort (arr, l, r) {
	if (l >= r) return
	let p = __partition2(arr, l, r)
	__quickSort(arr, l, p - 1)
	__quickSort(arr, p + 1, r)
}

function quickSort (arr) {
	let len = arr.length
	__quickSort(arr, 0, len - 1)
}



let ary = test.SortTestHelper(10000000, 0, 10)
test.testSort(quickSort, ary)


// 优化，当 length <= 15 采用insetSort

