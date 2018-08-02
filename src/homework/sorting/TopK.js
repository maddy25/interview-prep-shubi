//Top K..
function swap(arr,lt,rt) {

    let temp = arr[lt];
    arr[lt] = arr[rt];
    arr[rt] = temp;
}
function partition(arr,st,en) {
    let lt = st+1; let pt = arr[st]; let rt = en;
    while(lt<=rt) {
        while(arr[lt]<=pt) {
            lt++ ;
        }
        while(arr[rt]>pt) {
            rt-- ;
        }
        if (lt<rt) {
            swap(arr,lt,rt);

        }
    }
    swap(arr,st,rt);
    return rt;
}
function quickSort(arr,st,en) {
    if (st>=en) return;
    let pI = partition(arr,st,en);
    quickSort(arr,st,pI-1);
    quickSort(arr,pI+1,en);
}
function topK(arr, k) {
    if (arr.length <= k) {
        const set1 = new Set(arr);
        return set1;
    }
    quickSort(arr,0,arr.length-1);
    //console.log(arr);
    const set2 = new Set();
    for(let i=arr.length-1;i>=k;i--) {

        set2.add(arr[i]);
    }
    let array = [];
    set2.forEach(v => array.push(v));
    console.log(set2)
    return array;
}
