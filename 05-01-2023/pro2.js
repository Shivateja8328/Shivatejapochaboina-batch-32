const dev_number='DEV';
const stage_number='STAGE';
const Test_number= 'TEST';
const Prod_number= 'PROD';
let env='DEV';
let finalamount=0;
let spendingamount=100;
// if(env=='DEV')
// {
//     finalamount=spendingamount+(spendingamount*0.1);
// }else if(env=='TEST'){
//     finalamount=spendingamount+(spendingamount*0.3);
// }else if(env=='STAGE'){
//     finalamount=spendingamount+(spendingamount*0.2);
// }else if(env=='PROD'){
//     finalamount=spendingamount+(spendingamount*0.05);
// }else{
//     finalamount=0;
// }
// console.log(finalamount);
switch(env){
    case dev_number:
        finalamount=spendingamount+(spendingamount*0.1);
    break;
    case stage_number:
        finalamount=spendingamount+(spendingamount*0.2);
    break;
    case Test_number:
        finalamount=spendingamount+(spendingamount*0.3);
    break;
    case  Prod_number:
        finalamount=spendingamount+(spendingamount*0.05);
    break;
    default:
        finalamount="no output";
}
console.log(finalamount);
