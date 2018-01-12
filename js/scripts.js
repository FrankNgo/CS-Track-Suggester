$(document).ready(function)(){
  $("#track_form").submit(function(event){
    var question1 = $("input[name=question1]:checked").val();
    var question2 = $("input[name=question2]:checked").val();
    var question3 = $("input[name=question3]:checked").val();
    var question4 = $("input[name=question4]:checked").val();
    var question5 = $("input[name=question5]:checked").val();
    var question6 = $("input[name=question6]:checked").val();
    var question7 = $("input[name=question7]:checked").val();
    var question8 = $("input[name=question8]:checked").val();
    var question9 = $("input[name=question9]:checked").val();
    var question10o = $("input[name=question10]:checked").val();

    var result = 0;

    if(question1 === "Answer1"){
      result = result + 1;
    }
    else if(question1 === "Answer2"){
      result = result + 2;
    }
    else if(question1 === "Knowledge"){
      result = result + 3;
    }
    else if(question1 === "Bravery"){
      result = result + 4;
    }

    if(question2 === "Loyalty"){
      result = result + 1;
    }
    else if(question2 === "Success"){
      result = result + 2;
    }
    else if(question2 === "Knowledge"){
      result = result + 3;
    }
    else if(question2 === "Bravery"){
      result = result + 4;
    }

    if(question3 === "Loyalty"){
      result = result + 1;
    }
    else if(question3 === "Success"){
      result = result + 2;
    }
    else if(question3 === "Knowledge"){
      result = result + 3;
    }
    else if(question3 === "Bravery"){
      result = result + 4;
    }

    if(question4 === "Loyalty"){
      result = result + 1;
    }
    else if(question4 === "Success"){
      result = result + 2;
    }
    else if(question4 === "Knowledge"){
      result = result + 3;
    }
    else if(question4 === "Bravery"){
      result = result + 4;
    }

    if(question5 === "Loyalty"){
      result = result + 1;
    }
    else if(question5 === "Success"){
      result = result + 2;
    }
    else if(question5 === "Knowledge"){
      result = result + 3;
    }
    else if(question5 === "Bravery"){
      result = result + 4;
    }

    if(question6 === "Loyalty"){
      result = result + 1;
    }
    else if(question6 === "Success"){
      result = result + 2;
    }
    else if(question6 === "Knowledge"){
      result = result + 3;
    }
    else if(question6 === "Bravery"){
      result = result + 4;
    }

    if(question7 === "Loyalty"){
      result = result + 1;
    }
    else if(question7 === "Success"){
      result = result + 2;
    }
    else if(question7 === "Knowledge"){
      result = result + 3;
    }
    else if(question7 === "Bravery"){
      result = result + 4;
    }

    if(question8 === "Loyalty"){
      result = result + 1;
    }
    else if(question8 === "Success"){
      result = result + 2;
    }
    else if(question8 === "Knowledge"){
      result = result + 3;
    }
    else if(question8 === "Bravery"){
      result = result + 4;
    }

    if(question9 === "Loyalty"){
      result = result + 1;
    }
    else if(question9 === "Success"){
      result = result + 2;
    }
    else if(question9 === "Knowledge"){
      result = result + 3;
    }
    else if(question9 === "Bravery"){
      result = result + 4;
    }

    if(question10 === "Loyalty"){
      result = result + 1;
    }
    else if(question10 === "Success"){
      result = result + 2;
    }
    else if(question10 === "Knowledge"){
      result = result + 3;
    }
    else if(question10 === "Bravery"){
      result = result + 4;
    }

    if(result >=1 && result <=10){
      $("#c").toggle();
    }
    else if(result >= 11 && result <=20){
      $("#java").toggle();
    }
    else if(result >= 21 && result <=30){
      $("#php").toggle();
    }
    else if(result >= 31 && result <=40){
      $("#ruby").toggle();
    }
      event.preventDefault();
  });
});
