
  var equation = "0";
  var changePressed = 0;

  function clear1(){
      equation = "0";
      display();
  }

  function zeroKey(){
    if(equation === "0"){
      equation = "";
    }
    equation += "0";
    display();
  }

  function oneKey(){
    if(equation === "0"){
      equation = "";
    }
    equation += "1";
    display();
  }

  function twoKey(){
    if(equation === "0"){
      equation = "";
    }
    equation += "2";
    display();
  }

  function threeKey(){
    if(equation === "0"){
      equation = "";
    }
    equation += "3";
    display();
  }

  function fourKey(){
    if(equation === "0"){
      equation = "";
    }
    equation += "4";
    display();
  }

  function fiveKey(){
    if(equation === "0"){
      equation = "";
    }
    equation += "5";
    display();
  }

  function sixKey(){
    if(equation === "0"){
      equation = "";
    }
    equation += "6";
    display();
  }

  function sevenKey(){
    if(equation === "0"){
      equation = "";
    }
    equation += "7";
    display();
  }

  function eightKey(){
    if(equation === "0"){
      equation = "";
    }
    equation += "8";
    display();
  }

  function nineKey(){
    if(equation === "0"){
      equation = "";
    }
    equation += "9";
    display();
  }

  function decimalKey(){
    var decIndex = equation.lastIndexOf(".");
    var addIndex = equation.lastIndexOf("+");
    var subIndex = equation.lastIndexOf("-");
    var mulIndex = equation.lastIndexOf("*");
    var divIndex = equation.lastIndexOf("/");

    var check = 0;
    if(decIndex < addIndex || (addIndex == -1 && decIndex == -1)){
      if(decIndex < subIndex || (subIndex == -1)){
        if(decIndex < mulIndex || (mulIndex == -1)){
          if(decIndex < divIndex || (divIndex == -1)){
            equation += ".";
            check++;
          }
        }
      }
    }

    if(decIndex < subIndex || (subIndex == -1 && decIndex == -1)){
      if(decIndex < mulIndex || (mulIndex == -1)){
        if(decIndex < divIndex || (divIndex == -1)){
          if(decIndex < addIndex || (addIndex == -1)){
            if(check == 0)
              equation += ".";
              check++;
          }
        }
      }
    }

    if(decIndex < mulIndex || (mulIndex == -1 && decIndex == -1)){
      if(decIndex < divIndex || (divIndex == -1)){
        if(decIndex < addIndex || (addIndex == -1)){
          if(decIndex < subIndex || (subIndex == -1)){
            if(check == 0){
              equation += ".";
              check++;
            }
          }
        }
      }
    }

    if(decIndex < divIndex || (divIndex == -1 && decIndex == -1)){
      if(decIndex < addIndex || (addIndex == -1)){
        if(decIndex < subIndex || (subIndex == -1)){
          if(decIndex < mulIndex || (mulIndex == -1)){
            if(check == 0){
              equation += ".";
              check++;
            }
          }
        }
      }
    }

    display();
  }

  function additionKey(){
    equation += "+";
    display();
  }

  function subtractionKey(){
    equation += "-";
    display();
  }

  function multiplicationKey(){
    equation += "*";
    display();
  }

  function divisionKey(){
    equation += "/";
    display();
  }

  function percentKey(){
    equation = Number.parseFloat(equation);
    equation /= 100;
    equation = String(equation);
    display();
  }

  function equalKey(){

    while(equation.includes("--")){
      equation = equation.replace("--", "+");
    }
    while(equation.includes("++")){
      equation = equation.replace("++", "+");
    }
    while(equation.includes("+-")){
      equation = equation.replace("+-", "-");
    }
    while(equation.includes("-+")){
      equation = equation.replace("-+", "-");
    }

    equation = eval(equation);
    if(!Number.isNaN(equation)){
      equation = String(equation);
      display();
    }else{
      clear1();
    }
  }

  function changeSign(){
    if(equation === "0"){
      display();
    }else{
      equation = "-" + equation;
      display();
    }
  }

  function firstPareKey(){
    if(equation === "0"){
      equation = "";
    }
    equation += "(";
    display();
  }

  function secPareKey(){
    if(equation === "0"){
      equation = "";
    }
    equation += ")";
    display();
  }

  function deleteKey(){
    if(equation.length > 1){
      equation = equation.slice(0, -1);
    }else if(equation.length = 1){
      equation = "0";
    }
    display();
  }

  function display(){
    var length = equation.length
    var toSubtract;
    if(length > 15){
      toSubtract = length - 15;
    }
    var toDisplay = equation.slice(toSubtract);
    document.getElementById("output").innerHTML = toDisplay;
  }
