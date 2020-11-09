function check(){
    var text = "Prawdopodobieństwo, że tak będzie wynosi: ";

    var probability = Math.floor(Math.random()*100);

    var element = document.getElementById("result");
    element.innerText = text+probability+" %";

    if(probability<=33){
        //czerwony
        element.setAttribute("style", "color: red;");

    }else if(probability>=34 && probability<=66){
        // niebieski
        element.setAttribute("style", "color: blue;");

    }else if(probability>=67){
        // zielony
        element.setAttribute("style", "color: green;");

    }
}