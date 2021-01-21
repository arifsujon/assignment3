function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}
var homeToSchool = kilometerToMeter(3);
console.log(homeToSchool);
var homeToPlayground = kilometerToMeter(1);
console.log(homeToPlayground);
var homeToMarket = kilometerToMeter(2);
console.log(homeToMarket); 



function budgetCalculator(watch, phone, laptop) {
    var watchBuyingCost = watch * 50;
    var phoneBuyingCost = phone * 100;
    var laptopBuyingCost = laptop * 500;
    totalBuyingCost = watchBuyingCost + phoneBuyingCost + laptopBuyingCost;
    console.log(totalBuyingCost);
    return totalBuyingCost;
}


function hotelCost(stayDays){
    var livingCost = 0;
    if(stayDays <= 10){
        livingCost = stayDays * 100;
    }
    else if(stayDays <= 20){
        var firstTenDays = 10 * 100;
        var remainingDays = stayDays - 10;
        var secondTenDays = remainingDays * 80;
        livingCost = firstTenDays + secondTenDays;
    }
    else{
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainingDays = stayDays - 20;
        var afterTwentyDays = remainingDays * 50;
        livingCost = firstTenDays + secondTenDays + afterTwentyDays;
    }
    return livingCost;
}





