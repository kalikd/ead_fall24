function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "admin" && password == "admin"){
        alert("Login successful");
        window.location.href = "home.html";
    }else{
        alert("Login failed");
    }
}