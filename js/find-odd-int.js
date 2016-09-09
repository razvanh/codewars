function findOdd(A) {
  var instances=1,result;
  A = A.sort(function(a,b){
   return a-b;
  });
  result = A[0];
  for (var i=1;i<A.length;i++){
    if (A[i] === result) instances++;
    else if (instances%2 !== 0) break;
    else {result = A[i];instances=1;}
  }
  return result;
}
