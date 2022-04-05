const basePath = process.cwd();
const fs = require("fs");
const buildDir = `${basePath}`;


// configure variables here
let initialInvestment = 98; // your initial investment
let dailyROIPercentage = 1.05;// daily compounding percentage 1.05 = 5%
let numberOfDays = 300;// number of days of compounding
let currency = "USD"; // currency ticker
let bnbPrice = 440;// current BNB price
let profit;
const compoundTable = [] ;

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
                BnbDailyRewards: bnbDailyROI,
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

//----------------------------------------------------------------------------------------------------------------------------------------------------


// function to create json file for profit days
const writeProfitList = (_data) => {
    fs.writeFileSync(`${buildDir}/_profitList.json`, _data);
  };


  // read json data
let rawdata = fs.readFileSync(`${buildDir}/_list.json`);
let data = JSON.parse(rawdata);


//calculate rewards every week
let profitDay = 7
let initialProfit;
const profitTable = [];


for(i= profitDay; i <numberOfDays; i+=7){

    console.log(`Day : ${data[i].Day} , BNB rewards:${data[i].BnbDailyRewards}`);
    // let _result =`Day : ${data[i].Day},  BNB rewards:${data[i].BnbDailyRewards}`;
    let _result = {
        Days: data[i].Day,
        BNBrewards: data[i].BnbDailyRewards
    }
    profitTable.push(_result);
    // console.log(`${totalResults}`);

    var total = profitTable.reduce(function(_this, val) {
        return _this + val.BNBrewards
    }, 0);
    
    console.log(total)

    writeProfitList(JSON.stringify(profitTable, null, 2));
    
}













