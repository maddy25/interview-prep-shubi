/*
 Find Rank
 */
function swap(a,lt,rt) {
    let temp = a[lt];
    a[lt] = a[rt];
    a[rt] = temp;
}
function partition(arr,st,en) {
    let lt = st+1; let pivot = arr[st]; let rt = en;

    while(lt<=rt) {
        while(arr[lt] <= pivot) {
            lt++;
        }
        while(arr[rt]>pivot){
            rt--;
        }
        if(lt<rt) {
            swap(arr,lt,rt);
        }
    }
    swap(arr,st,rt);
    // console.log(rt)
    // console.log(arr);
    return rt;
}
function quickSort(arr,st,en,k) {
    if (st>en) {
        return;
    } else {
        var pI = partition(arr,st,en);
        if(arr[pI]<k) {
            quickSort(arr,pI+1,en,k)
        } else if(arr[pI]>k) {
            quickSort(arr,st,pI-1,k)
        } else {
            console.log(pI+1);
        }

    }

    // console.log(pI+1);

}
var testArr = [3, 6, 10,9,5,30,11]
quickSort(testArr,0,testArr.length-1,9);
