function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  var saved  = 0;
  var months = 0;
  var leftover = 0;
  var priceOld = startPriceOld;
  var priceNew = startPriceNew;
  if (startPriceOld >= startPriceNew) return [0,startPriceOld-startPriceNew];
  
  while(priceOld+saved<priceNew){
    priceOld = priceOld - (percentLossByMonth/100 * priceOld);
    priceNew = priceNew - (percentLossByMonth/100 * priceNew);
    if (months%2 === 0) percentLossByMonth += 0.5;
    saved += savingperMonth;
    months ++;
  }
  
  leftover = priceOld+saved -priceNew;
  return[months,Math.round(leftover)];
}
