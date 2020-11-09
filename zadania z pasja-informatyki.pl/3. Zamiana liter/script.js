function zamiana(){
    var first = document.getElementById("first").value;
    var second = document.getElementById("second").value;
    var tmp = first;

    first = second.substr(0,1) + first.substring(1, first.length);
    second = tmp.substr(0, 1) + second.substring(1, second.length);

    var newText = first+" "+second;

    document.getElementById("result").innerText = newText;
}