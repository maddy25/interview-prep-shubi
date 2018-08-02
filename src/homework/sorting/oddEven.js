//Group odd and even
function swap(arr,lt,rt) {
    let temp = arr[lt];
    arr[lt] = arr[rt];
    arr[rt] = temp;
}
function solve(arr) {
    let pivot = arr[0];
    let left = 0; let right = arr.length-1;
    while (left <= right) {
        while(arr[left]%2 === 0) {
            left++;
        }
        while(arr[right]%2 !== 0) {
            right--;
        }
        if(left<right) {
            swap(arr, left, right);
        }

    }
    return arr

}