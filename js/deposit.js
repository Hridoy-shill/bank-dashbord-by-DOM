document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const depositAmountString = depositField.value;
    const depositAmount = parseFloat(depositAmountString);

    depositField.value = '';

    if(isNaN(depositAmount)){
        alert('Please Enter a Number!!');
        return;
    }


    const depositTotal = document.getElementById('deposit-total');
    const depositCurrentAmountSting = depositTotal.innerText;
    const depositCurrentAmount = parseFloat(depositCurrentAmountSting);


    const updateDipositAmount = depositAmount + depositCurrentAmount;
    depositTotal.innerText = updateDipositAmount;


    const totalBalance = document.getElementById('total-balance');
    const totalBalanceString = totalBalance.innerText;
    const totalCurrentBalance = parseFloat(totalBalanceString);
    
    
    const updatedTotalBalanc = totalCurrentBalance + depositAmount;
    totalBalance.innerText = updatedTotalBalanc;
    
})