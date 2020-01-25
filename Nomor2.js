function isAcceptedUsername(username) {
    var Regex = /^[aiueo]{3}[a-z0-9]{2,6}$/i ;
    return Regex.test(username) ;
}
// Cara menggunakan fungsi di atas
if (isAcceptedUsername("coba1@yuk")) {
    alert("Username Is Valid") ;
} else {
    alert("Username Is Invalid") ;
}
