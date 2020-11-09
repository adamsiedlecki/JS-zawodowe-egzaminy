function oblicz(){
    document.getElementById("wynik").innerText = ""; // czyścimy poprzedni

    var a = document.getElementById("bok1").value;
    var b = document.getElementById("bok2").value;
    var c = document.getElementById("bok3").value;

    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);

    var sum = a+b+c;
    var longest = Math.max(a, b, c);

    if(sum-longest<=longest){ // jeżeli trójkąta nie można utworzyć
        document.getElementById("wynik").innerText = "Z podanych boków nie można utworzyć trójkąta!";
    }else{
        var p = (a+b+c)/2; // liczymy połowę obwodu trójkąta
        var pole = Math.sqrt(p*(p-a)*(p-b)*(p-c)); // stosujemy wzór Herona

        document.getElementById("wynik").innerText = "Pole trójkąta o bokach "+a+" "+b+" "+c+" wynosi: "+pole;
    }
}