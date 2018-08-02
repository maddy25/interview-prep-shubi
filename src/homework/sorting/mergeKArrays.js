/*
 * Complete the mergeArrays function below. Merge K sorted arrays
 */
function mergeArrays(arr) {
    if (arr.length === 1) {
        console.log(arr[0])
        return arr[0]
    } else {
        let mergedArr = [];
        let nL = arr[0].length; let i = 0;
        let left = arr[0]; let right = arr[1];
        let nR = arr[1].length; let j = 0;
        while(i <=nL-1 && j<= nR-1) {
            if (left[i] <= right[j]) {
                mergedArr.push(left[i]);
                i++;
            } else {
                mergedArr.push(right[j]);
                j++;
            }
        }
        while (i<=nL-1) {
            mergedArr.push(left[i]);
            i++;
        }
        while (j<=nR-1) {
            mergedArr.push(right[j]);
            j++;
        }
        arr.push(mergedArr);
    }
    if(arr.length !== undefined && arr.length>2 ) {
        arr = arr.slice(2);
        mergeArrays(arr)

    }


}