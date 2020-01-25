function isAcceptedUsername(username) {
    var Regex = /^[aiueo]{3}[a-z0-9]{2,6}$/i ;
    return Regex.test(username) ;
}
// Cara menggunakan fungsi di atas
if (isAcceptedUsername("cobain_yuk")) {
    alert("Username Is Valid") ;
} else {
    alert("Username Is Invalid") ;
}

function validatePassword() {
    var myPassword = document.getElementById('password').value;
    var regex  = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^\&*\)\(+=._-]).+$/;
    console.log(myPassword);
    if(myPassword.length <=7){
        alert("passwordmu kurang dari 9 karakter"); 
        return false;
    }else if(!regex.test(myPassword)) {
        alert("passwordmu harus terdapat sebuah huruf kecil, sebuah angka dan sebuah karakter spesial");
        return false;
    }else{
        alert("passwordmu valid");
    }
}
