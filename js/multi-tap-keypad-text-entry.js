function presses(phrase) {
  // To do...
  // /youregexp/.test(yourString)
  
  var kp = 0;
  
  for(var i=0;i<phrase.length;i++){
    if(/[1adgjmtpw*#\s]/i.test(phrase[i])){
      kp +=1;
    }    
    
    else if(/[behknqux0]/i.test(phrase[i])){
      kp +=2;
    }
    
    else if(/[cfilorvy]/i.test(phrase[i])){
      kp +=3;
    }
    
    else if(/[sz234568]/i.test(phrase[i])){
      kp +=4;
    }
    
    else {kp +=5;}
  }
  return kp;
}
