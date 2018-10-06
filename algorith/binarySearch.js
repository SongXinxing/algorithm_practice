function binarySearch (arr, target) {
	let len = arr.length
	let l = 0
	let r = len - 1
	while (l <= r) {
		let mid = Math.floor((r - l) / 2) + l
		if (arr[mid] === target) {
			return mid
		} else if (arr[mid] > target) {
			r = mid - 1
		} else {
			l = mid + 1
		}
	}
	return -1
}
