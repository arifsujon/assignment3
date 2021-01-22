// Problem No 1: kilometerToMeter

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;  // 1 kilometer = 1000 meters
    if (kilometer > 0) {
        return meter;
    } else {
        return "The distance can't be 0 or negative value";
    }
}

// Problem No 2: budgetCalculator

function budgetCalculator(watch, phone, laptop) {
    var watchBuyingCost = watch * 50;    // The price of each watch is 50.
    var phoneBuyingCost = phone * 100;   // The price of each phone is 100.
    var laptopBuyingCost = laptop * 500; // The price of each laptop is 500.
    totalBuyingCost = watchBuyingCost + phoneBuyingCost + laptopBuyingCost;
    if (watch >= 0 && phone >= 0 && laptop >= 0) {
        return totalBuyingCost;
    } else {
        return "watch/phone/laptop amount is/are not negative.";
    }
}

// Problem No 3: hotelCost

function hotelCost(stayDays) {
    var livingCost = 0;
    if (stayDays <= 10) {
        livingCost = stayDays * 100;               //100 per day living cost for firstTenDays
    } else if (stayDays <= 20) {
        var firstTenDays = 10 * 100;
        var remainingDays = stayDays - 10;
        var secondTenDays = remainingDays * 80;     //80 per day living cost for secondTenDays
        livingCost = firstTenDays + secondTenDays;
    } else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainingDays = stayDays - 20;
        var afterTwentyDays = remainingDays * 50;    //50 per day living cost afterTwentyDays
        livingCost = firstTenDays + secondTenDays + afterTwentyDays;
    }
    return livingCost;
}

// Problem No 4: megaFriend

var friendsName = ["Rahim", "Karim", "Rashed", "Nazrul"];
function megaFriend(friendsName) {
    var megaName = friendsName[0];
    for (var i = 0; i < friendsName.length; i++) {
        var element = friendsName[i];
        if (element.length > megaName.length) {
            megaName = element;
        }
    }
    return megaName;
}





