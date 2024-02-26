const handleLoginClicked = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const data = { email: email, password: password };
    const url = "https://hjpe29d12e.execute-api.us-east-1.amazonaws.com/1/user/login";

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            if (data.user) {
                setUser(data.user);
                setCookie('token', data.token, 1);
                window.location.href = 'profile.html';
            } else {
                alert('Invalid username or password');
            }
        }).catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.')
        });




}