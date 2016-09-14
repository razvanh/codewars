var sum_pairs=function(ints, s){
    var cached={};//hold numbers checked
    for(var i=0,j=ints.length;i<j;i++){
      var n1=ints[i];
      var n2=s-n1;
      if(n2 in cached){
        return [n2,n1];
      }
      else {
        cached[n1]=1;
      }
    }
    return undefined;
}
