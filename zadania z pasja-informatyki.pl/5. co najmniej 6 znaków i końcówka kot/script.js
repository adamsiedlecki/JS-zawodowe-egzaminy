function check(){
    var text = document.getElementById("text1").value;

    var result = "";

    if(text.length>=6){
        result+="łańcuch ma co najmniej 6 znaków - ("+text.length+") \n";
    }else{
        result+="łańcuch ma mniej niż 6 znaków - ("+text.length+") \n";
    }

    if(text.substr(text.length-3,3)=="kot"){
        result+=" łańcuch kończy się wyrazem kot";
    }else{
        result+=" łańcuch nie kończy się wyrazem kot";
    }

    document.getElementById("result").innerText = result;
}