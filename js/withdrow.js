document.getElementById('widrow-btn').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdrow-field');
    const newWithdrawAmoutString = withdrawField.value;
    const newWithdrowAmout = parseFloat(newWithdrawAmoutString);

    withdrawField.value = '';

    if(isNaN(newWithdrowAmout)){
        alert('Please Enter a Number!!');
        return;
    }

    const previwesWithdrawTotal = document.getElementById('withdrow-total');
    const previwesWithdrawTotalString = previwesWithdrawTotal.innerText;
    const newWithdrawTotal = parseFloat(previwesWithdrawTotalString);


    const totalBalance = document.getElementById('total-balance');
    const totalBalanceString = totalBalance.innerText;
    const currentTotalBalance = parseFloat(totalBalanceString);

    if (newWithdrowAmout > currentTotalBalance) {
        alert('Non Enaugh Balance!!!')
        return;
    }

    const totalWithdrawAmount = newWithdrowAmout + newWithdrawTotal;
    previwesWithdrawTotal.innerText = totalWithdrawAmount;

    const updatedTotalBalanc = currentTotalBalance - newWithdrowAmout;
    totalBalance.innerText = updatedTotalBalanc;
})