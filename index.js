const basePath = process.cwd();
const fs = require("fs");
const buildDir = `${basePath}`;


// configure variables here
let initialInvestment = 98; // your initial investment
let dailyROIPercentage = 1.05;// daily compounding percentage 1.05 = 5%
let numberOfDays = 90;// number of days of compounding
let currency = "USD"; // currency ticker
let bnbPrice = 440;// current BNB price
let profit;
const compoundTable = [
    {
        Day: "",
        Generated: "",
        BnbDailyRewards: "",
        DailyROIReward: ""
    }
] ;

// function to create json file
const writeList = (_data) => {
    fs.writeFileSync(`${buildDir}/_list.json`, _data);
  };


// This function generates with json file.
const generateWithJSON = () => {
    for(i=0; i <= numberOfDays; i++){
        profit = initialInvestment*dailyROIPercentage;
    
        let dailyROI = profit - initialInvestment;
        let bnbDailyROI = dailyROI/bnbPrice;
        initialInvestment =profit;
        let bnb = profit/440;
    
        compoundTable.push(
            {
                Day: i,
                Generated: `${currency} ${profit}`,
                BnbDailyRewards: `BNB ${bnbDailyROI}`,
                DailyROIReward: `${currency} ${dailyROI}`
            }
        )
    
        console.log(`Day ${i} you have generated : ${currency} ${profit.toFixed(2)} (inclusive of initial investment)  - BNB daily rewards = ${bnbDailyROI} BNB(USD ${dailyROI})`);
    
        writeList(JSON.stringify(compoundTable, null, 2));
    }    
}


// this function generates without JSON FILE. Results are only shown in terminal
const generateWithoutJSON = () => {

    for(i=0; i <= numberOfDays; i++){
        
        profit = initialInvestment*dailyROIPercentage;
        
        let dailyROI = profit - initialInvestment;
        
        let bnbDailyROI = dailyROI/bnbPrice;
       
        initialInvestment =profit;
        
        let bnb = profit/440;
    
        console.log(`Day ${i} you have generated : ${currency} ${profit.toFixed(2)} (inclusive of initial investment)  - BNB daily rewards = ${bnbDailyROI} BNB(USD ${dailyROI})`);
    
    }    
}
// use the function below either : generateWithJSON(); or generateWithoutJSON();
generateWithJSON();
