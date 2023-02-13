console.log('withdraw.js');
// step-1
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // step-2:...
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountFieldString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountFieldString);
    
// step-3:...
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal= parseFloat(previousWithdrawTotalString);
    // console.log(previousWithdrawTotal);
// step-4:...
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
// step-5:...
   const balanceTotalElenemt = document.getElementById('balance-total');
   const previousBalanceTotalString = balanceTotalElenemt.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceTotalString);

//    step-6:..
   const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
   balanceTotalElenemt.innerText = newBalanceTotal;

    withdrawField.value = "";

})