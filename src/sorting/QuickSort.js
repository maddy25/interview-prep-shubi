var swap = function (arr,lt,rt) {
  var temp = arr[lt];
  arr[lt] = arr[rt];
  arr[rt] = temp;
};

var partition = function(a, st, en) {
  let pivot = a[st], lt = st+1, rt = en;

  // This should be less than or equal, earlier it was just less than. Its because the left and right pointers should cross.
  // These are the kind of edge cases, interviews look for btw.
  while (lt<=rt) {
          while (a[lt]<=pivot) {
           lt++;
          }
          while (a[rt]>pivot) {
            rt--;
          }
          if (lt<rt) {
            swap(a,lt,rt);
          }
  }
  swap(a,st,rt);
  return rt;
};

var quickSort = function(inputArray, st, en) {
  if(st>=en) {
    return;
  }
  var pivotIndex  = 0;
  pivotIndex = partition(inputArray,st,en);
  quickSort(inputArray,st,pivotIndex-1);
  quickSort(inputArray,pivotIndex+1,en);

};

var test = [8,1,4,5,-9,11,2]
quickSort(test,0,6);
console.log(test);
