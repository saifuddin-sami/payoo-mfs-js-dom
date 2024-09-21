document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const number = document.getElementById('input-number').value;
    const pin = document.getElementById('input-pin').value;

    if (number.length === 11 && pin.length === 4 && pin === '1234') {
        window.location.href="home.html";
    }
    else {
        alert('Invalid Input, Please Try Again')
    }
})