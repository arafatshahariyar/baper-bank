 console.log('login in js file')
//  step:1 add click event handler with the submit button
 document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('submit button clicked');

    // step-2: get the email address inside the email input field 
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);

    // step-3: get password
    // 3.a: set id on the html element
    // 3.b: get the element
    // 3.c: get the value from the element 
    const passField = document.getElementById('user-password');
    const pass = passField.value;
    console.log(email,pass);
// DANGER: DO NOT VERIFY Email password on the clint side 
// step-4: verify email and password
    if(email === 'shantom@dsfds.com'&& pass ==='secrit'){
        // console.log('valid uesr')
        window.location.href = 'bank.html'
    }
    else{
        // console.log('invlid user')
        alert('tor sate kothe nai tui passwoed vule gecos')
    }
})