function check(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;

    if(num1=="" || num2=="" || num3==""){
        alert("Podaj wszystkie 3 liczby!");
    }else{
        var min = Math.min(num1, num2, num3);
        var max = Math.max(num1, num2, num3);
        document.getElementById("result").innerText = "MAX: "+max+" \n MIN: "+min;
    }

    
}