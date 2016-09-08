function tickets(peopleInLine){
  var bank = [0,0,0];
  var answer = "YES";
  for (var i =0 ; i<peopleInLine.length; i++){
    switch(peopleInLine[i]) {
      case 25:
      //we get a 25 bill
      bank[0] +=1; // add a $25
      break;
      case 50:
      //we get a 50 bill
      if (bank[0] <= 0) {answer = "NO";}
      bank[1] +=1; //add a $50 
      bank[0] -=1; //substract a $25
      break;
      case 100:
      //we get a 100 bill
      if(bank[1]>=1) {
        if (bank[0]<1) answer = "NO";
        else {
          bank[2] +=1; //add 100
          bank[0] -=1; //substract 25
          bank[1] -=1; //substract 50
          }
      }
      else if (bank[0]>2){
        bank[0] -=3;//substract 3x25
        bank[2] +=1;
      }
      else answer = "NO";
      bank[2] +=1
      break;
    }
  }
  return answer;
}
