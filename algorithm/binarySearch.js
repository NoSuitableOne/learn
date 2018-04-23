function binarySearch(arr, target, base = 0) {
    const len = arr.length,
          halfLen = Math.floor(len/2);

    if (!len) {
        return null;
    }

    if (target === arr[halfLen]) {
        return base + halfLen;
    } else if (target < arr[halfLen]) {
        return binarySearch(arr.slice(0, halfLen), target, base);
    } else if (target > arr[halfLen]) {
        return binarySearch(arr.slice(halfLen + 1, len + 1), target, base + halfLen + 1);
    }
}

const testArr = [2, 3, 6, 10, 15, 36, 44, 47, 52];
const target = 15;

let result = binarySearch(testArr, target);
console.log(result);
