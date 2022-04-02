const fs = require("fs");

let initialInvestment = 98;
let dailyROIPercentage = 1.06;
let numberOfDays = 90;
let currency = "USD";
let bnbPrice = 440;
let profit;

for(i=0; i <= numberOfDays; i++){
    profit = initialInvestment*dailyROIPercentage;

    let dailyROI = profit - initialInvestment;
    let bnbDailyROI = dailyROI/bnbPrice;
    initialInvestment =profit;
    let bnb = profit/440;


    console.log(`Day ${i} you have generated : ${currency} ${profit.toFixed(2)} (inclusive of initial investment)  - BNB daily rewards = ${bnbDailyROI} BNB(USD ${dailyROI})`);
}
