function policz(){
    var pow = document.getElementById("pow").value;
    var puszki = Math.ceil(pow/4);

    document.getElementById("wynik").innerText = "Liczba jednolitrowych puszek farby potrzebnych do pomalowania wynosi: "+puszki;
}