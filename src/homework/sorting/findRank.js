/*
 Find Rank
 */
function swap(a,lt,rt) {
    let temp = a[lt];
    a[lt] = a[rt];
    a[rt] = temp;
}
function partition(arr,st,en) {
    let lt = st+1; let pt = st; let rt = en;

    while(lt<=rt) {
        while(arr[lt] <= arr[pt]) {
            lt++;
        }
        while(arr[rt]>arr[pt]){
            rt--;
        }
        if(lt<rt) {
            swap(arr,lt,rt);
        }
    }
    swap(arr,st,rt);
    return rt;
}
function quickSort(arr,st,en,k,pI) {

    if (st>=en) {
        console.log(pI+1);
        return pI+1;}
    pI = partition(arr,st,en);
    //quickSort(arr,st,pI-1,k)
    //quickSort(arr,pI+1,en,k)
    //console.log(arr)

    if(arr[pI]<k) {
        console.log(arr)
        quickSort(arr,st,pI-1,k,pI)
    }
    if(arr[pI]>k) {
        console.log(arr)
        quickSort(arr,pI+1,en,k,pI)
    } else if (arr[pI] === k) {
        //console.log(pI)
        return pI+1;
    }



}
var testArr = [10,9,5,30]
quickSort(testArr,0,testArr.length-1,5,0);


