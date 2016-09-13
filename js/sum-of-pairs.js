var sum_pairs=function(ints, s){
    var match=[];
    loop1:
    for(var i=0;i<ints.length-1;i++){
      loop2:
      for(var j=i+1;j<ints.length;j++){
        if ((ints[i]+ints[j])===s) {
          match.push(
          {i:i,j:j}
          );
        }
      }
    }
    
    if(match.length===1){
     return [ints[match[0]["i"]],ints[match[0]["j"]]]; 
     
    }
    else if(match.length>1){
      match.sort(function(a, b) {
        return a.j - b.j;
      });
     return [ints[match[0]["i"]],ints[match[0]["j"]]]; 
    }
    else return undefined; 
    
    
}
