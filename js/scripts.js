$(document).ready(function(){
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
    var question10 = $("input[name=question10]:checked").val();

    var result = 0;

    if(question1 === "Answer1"){
      result = result + 1;
    }
    else if(question1 === "Answer2"){
      result = result + 2;
    }
    else if(question1 === "Answer3"){
      result = result + 3;
    }
    else if(question1 === "Answer4"){
      result = result + 4;
    }

    if(question2 === "Answer1"){
      result = result + 2;
    }
    else if(question2 === "Answer2"){
      result = result + 3;
    }
    else if(question2 === "Answer3"){
      result = result + 4;
    }
    else if(question2 === "Answer4"){
      result = result + 1;
    }

    if(question3 === "Answer1"){
      result = result + 1;
    }
    else if(question3 === "Answer2"){
      result = result + 2;
    }
    else if(question3 === "Answer3"){
      result = result + 3;
    }
    else if(question3 === "Answer4"){
      result = result + 4;
    }

    if(question4 === "Answer1"){
      result = result + 4;
    }
    else if(question4 === "Answer2"){
      result = result + 2;
    }
    else if(question4 === "Answer3"){
      result = result + 1;
    }
    else if(question4 === "Answer4"){
      result = result + 3;
    }

    if(question5 === "Answer1"){
      result = result + 2;
    }
    else if(question5 === "Answer2"){
      result = result + 1;
    }
    else if(question5 === "Answer3"){
      result = result + 3;
    }
    else if(question5 === "Answer4"){
      result = result + 4;
    }

    if(question6 === "Answer1"){
      result = result + 2;
    }
    else if(question6 === "Answer2"){
      result = result + 1;
    }
    else if(question6 === "Answer3"){
      result = result + 3;
    }
    else if(question6 === "Answer4"){
      result = result + 4;
    }

    if(question7 === "Answer1"){
      result = result + 1;
    }
    else if(question7 === "Answer2"){
      result = result + 2;
    }
    else if(question7 === "Answer3"){
      result = result + 3;
    }
    else if(question7 === "Answer4"){
      result = result + 4;
    }

    if(question8 === "Answer1"){
      result = result + 3;
    }
    else if(question8 === "Answer2"){
      result = result + 2;
    }
    else if(question8 === "Answer3"){
      result = result + 1;
    }
    else if(question8 === "Answer4"){
      result = result + 4;
    }

    if(question9 === "Answer1"){
      result = result + 1;
    }
    else if(question9 === "Answer2"){
      result = result + 3;
    }
    else if(question9 === "Answer3"){
      result = result + 2;
    }
    else if(question9 === "Answer4"){
      result = result + 4;
    }

    if(question10 === "Answer1"){
      result = result + 2;
    }
    else if(question10 === "Answer2"){
      result = result + 1;
    }
    else if(question10 === "Answer3"){
      result = result + 4;
    }
    else if(question10 === "Answer4"){
      result = result + 3;

    }

    if(result >=10 && result <=17){
      $("#c").toggle();
    }
    else if(result >= 18 && result <=27){
      $("#java").toggle();
    }
    else if(result >= 28 && result <=34){
      $("#ruby").toggle();
    }
    else if(result >= 35 && result <=40){
      $("#php").toggle();
    }
      event.preventDefault();
  });
});
