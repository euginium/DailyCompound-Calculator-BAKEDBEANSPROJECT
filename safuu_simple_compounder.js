let x = 4.2;
let y = 1.025;
let profit;

for(i = 1 ; i <= 300; i++){
    profit = x*y;
    x=profit;
    console.log(`Day ${i} : Compound Profit: ${profit.toFixed(4)}`);
}