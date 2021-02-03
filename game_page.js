player1name=localStorage.getItem("player1_name");
player2name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
question_turn="player1";
answer_turn="player2";
document.getElementById("player1_name").innerHTML=player1name + ":";
document.getElementById("player2_name").innerHTML=player2name + ":" ;
document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_ans").innerHTML="Answer Turn :" + player2name;
document.getElementById("player_q").innerHTML="Question Turn :" + player1name;
function send(){
    getword=document.getElementById("word").value;
    word=getword.toLowerCase();
    console.log("Word in Lower Case=" + word);
    charAt1=word.charAt(1);
    console.log(charAt1);
    length_divide_2=Math.floor(word.length/2);
    charAt2=word.charAt(length_divide_2);
    console.log(charAt2);
    length_minus_1=word.length - 1;
    charAt3=word.charAt(length_minus_1);
    console.log(charAt3);
    remove_charAt1=word.replace(charAt1,"_");
    remove_charAt2=remove_charAt1.replace(charAt2,"_");
    remove_charAt3=remove_charAt2.replace(charAt3,"_");
    console.log(remove_charAt3);
    question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
     input_box = "<br>Answer : <input type='text' id='input_check_box'>";
      check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"; 
      row = question_word + input_box + check_button ; document.getElementById("output").innerHTML = row;
       document.getElementById("word").value = ""; }

function check(){
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    console.log("Answer to Lower Case" + answer);
    if (answer==word){
        if (answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;

        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
        
    }
    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_q").innerHTML="Question Turn : "+player2name;
        
    }
    else{
        question_turn="player1";
        document.getElementById("player_q").innerHTML="Question Turn : "+player1name;
    }
    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("player_ans").innerHTML="Answer Turn : "+player2name;        
        }
        else{
            answer_turn="player1";
        document.getElementById("player_ans").innerHTML="Answer Turn : "+player1name;
    }
    document.getElementById("output").innerHTML="";
}