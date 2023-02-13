document.getElementById('submit-btn').addEventListener('click', function(){
   const emailField = document.getElementById('user-email');
   const theEmail = emailField.value;
   const userPassword = document.getElementById('user-password');
   const thePassword = userPassword.value;
   if(theEmail === 'ridoy@gmail.com' && thePassword === '123'){
    console.log('log in succsessful');
    window.location.href = 'page2.html';
   }
   else{
    alert('Account not existed');
   }
})

