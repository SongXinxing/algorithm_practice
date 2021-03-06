
function bubbleSort (arr) {
	var len = arr.length, tag
	for (var i = 0; i < len - 1; i++) {
		tag = true
		for (var j = 0; j < len - 1 - i; j++) {
			if (arr[j] > arr[j+1]) {
				tag = false
				arr[j] = [arr[j+1], arr[j+1] = arr[j]][0]
			}
		}
		if (tag) {return}
	}
}


function bubbleSort (arr) {
	for (var i = arr.length - 1; i > 0; i--) {
		for (var j = 0; j < i; j++) {
			if (arr[j] > arr[j+1]) {
				arr[j] = [arr[j+1], arr[j+1] = arr[j]][0]
			}
		}
	}
}


// 选择极值，放在一端，重复操作 （）选择排序
function selectionSort(arr) {
    var min
    for (var i = 0; i < arr.length; i++) {
        min = i
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        min!==i && (arr[min] = [arr[i], arr[i] = arr[min]][0])
    }
}



/**********************************************************/
// （）插入排序
function insertSort (arr) {
	for (var i = 1; i < arr.length; i++) {
		for (var j = i; j > 0; j--) {
			if (arr[j] < arr[j-1]) {
				arr[j] = [arr[j-1], arr[j+1] = arr[j]][0]
			}
		}
	}
}


// （） 希尔排序（进化版插入排序）
function shellSort (arr) { // 希尔排序
	var gap = Math.floor(arr.length / 2)
	while (gap >0) {
		for (var i = gap; i < arr.length; i++) {
			// for (var j = i; j > gap; j-=gap) {
			// 	if (arr[j] < arr[j-gap]) {
			// 		arr[j] = [arr[j-gap], arr[j-gap] = arr[j]][0]
			// 	}
			// }
			var j = i
			while (j >= gap) {
				if (arr[j - gap] > arr[j]){
					arr[j] = [arr[j-gap], arr[j-gap] = arr[j]][0]
				}
				j -= gap
			}
		}
		gap = Math.floor(gap / 2)
	}
}
/**********************************************************/


function quickSort (arr, first = 0, last = arr.length - 1) {
	if (first >= last) return
	var midValue = arr[first]
	var low = first
	var high = last

	while (low < high) {
		while (low < high && arr[high] >= midValue) {
			high--
		}
		arr[low] = arr[high]

		while (low < high && arr[low] < midValue) {
			low++
		}
		arr[high] = arr[low]
	}
	// 循环退出时 low === high
	arr[low] = midValue
	// left
	quickSort(arr, first, low - 1)
	// right
	quickSort(arr, low + 1, last)
}




function mergeSort (arr) {
	var len = arr.length
	if (len <= 1) {return arr}
	var mid = Math.floor(len / 2)
	var left = mergeSort(arr.slice(0, mid))
	var right = mergeSort(arr.slice(mid))
	var left_pointer = 0, right_pointer = 0, result = []
	while (left_pointer < left.length && right_pointer < right.length) {
		if (left[left_pointer] <= right[right_pointer]) {
			result.push(left[left_pointer])
			left_pointer++
		} else {
			result.push(right[right_pointer])
			right_pointer++
		}
	}
	return result.concat(left.slice(left_pointer), right.slice(right_pointer))
}




function binarySearch (arr, item, first = 0) {
	var n = arr.length
	if (n <= 0) {return -1}
	var mid = Math.floor(n / 2)
	if (arr[mid] === item) {
		return first+mid
	} else {
		if (arr[mid] > item) {
			return binarySearch(arr.slice(0, mid), item, first)
		} else {
			return binarySearch(arr.slice(mid+1), item, mid+1)
		}
	}
}



function binarySearch (arr, item) { // 非递归
	let first = 0
	let last = arr.length - 1
	let mid
    while (first <= last) {
		mid = Math.floor(first + (last - first) / 2)
		if (arr[mid] === item) {return mid}
		if (arr[mid] > item) {
			last = mid - 1
		} else {
			first = mid + 1
		}
	}
	return -1
}

function pow (x, n) {
	if (n < 0) {return 'error'}
	if (n === 0) {return 1}
	let t = pow(x, Math.floor(n /2))
	if (n % 2) {
		return x*t*t
	} else {
		return t*t
	}
}

function pow (x, n) {
	if (n < 0) {return 'error'}
	let total = 1
	for (let i = 0; i < n; i++) {
		total *= x
	}
	return total
}


for (let i = 20; i < 26; i++) {
    console.time('star')
    let n = Math.pow(2, i)
	// for (var j = 0; j < n; j++) {
		pow(2,n)
	// }
	console.timeEnd('star')
}


