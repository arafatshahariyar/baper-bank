// console.log('deposit.js')
// step-1:Add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    // console.log('deposit button clicked')
    // step-2: get the deposit amount from the deposit input field
    // for the input use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(deposit);

    // step-3: get the deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
// step-4: add number to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;
    // console.log(depositTotal);

// step-5 : get ballance current total 
const balanceTotalElenemt = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElenemt.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);
 
// step-6: calculate current total balance
const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
// set the balance total
balanceTotalElenemt.innerText = currentBalanceTotal;
// step-7: clear the deposit field
      depositField.value = "";
})