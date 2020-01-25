function count_handshake() {
    var v1 = document.getElementById('angka').value;
    var i=0;
    var t=0;
    for(i;i<v1;i++){
        t +=i;
    }
   console.log(t);
    var print = document.getElementById('result');
    print.value = t;
}
