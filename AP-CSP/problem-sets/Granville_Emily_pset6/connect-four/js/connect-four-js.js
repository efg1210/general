
  var board = [
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty"]
  ];

  var colorCounter = 0;

  function loadPage(){
    var c = document.getElementsByClassName("canvas");
    for(var i = 0; i < c.length; i++){
      var ctx = c[i].getContext("2d");
      ctx.beginPath();
      ctx.arc(c[i].width/2, c[i].height/2, 50, 0, Math.PI * 2, true);
      ctx.fillStyle = "#df80ff";
      ctx.fill();
    }
  }

  function restart(){
    hideModal();
    board = [
      ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
      ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
      ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
      ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
      ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
      ["empty", "empty", "empty", "empty", "empty", "empty", "empty"]
    ];
    colorCounter = 0;

    var c = document.getElementsByClassName("canvas");
    for(var i = 0; i < c.length; i++){
      var ctx = c[i].getContext("2d");
      ctx.beginPath();
      ctx.arc(c[i].width/2, c[i].height/2, 50, 0, Math.PI * 2, true);
      ctx.fillStyle = "#df80ff";
      ctx.fill();
    }
  }

  function possible(column){
    var isIt;
    if(board[0][column] == "empty"){
      isIt = true;
    }else{
      isIt = false;
    }
    return isIt;
  }

  function checkRow(column){
    var which;
    if(board[5][column] == "empty"){
      which = 5;
    }else if(board[4][column] == "empty"){
      which = 4;
    }else if(board[3][column] == "empty"){
      which = 3;
    }else if(board[2][column] == "empty"){
      which = 2;
    }else if(board[1][column] == "empty"){
      which = 1;
    }else if(board[0][column] == "empty"){
      which = 0;
    }
    return which;
  }

  function determineColor(){
    var color;
    if(colorCounter % 2 != 0){
      color = "#ff0066";
      //pink
    }else{
      color = "#3399ff";
      //blue
    }
    return color;
  }

  function determineColorWords(){
    if(colorCounter % 2 != 0){
      return "pink"
    }else{
      return "blue"
    }
  }

  function colorChanger(row, column){
    var idName = "c" + String(row) + "-" + String(column);
    var c = document.getElementById(idName);
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(c.width/2, c.height/2, 50, 0, Math.PI * 2, true);
    ctx.fillStyle = determineColor();
    ctx.fill();
  }

  function checkForWinner(){
    var well = false;
    var acrossV = across();
    var downV = down();
    var rightDiagonalV = rightDiagonal();
    if(across() == true || down() == true || rightDiagonal() == true || leftDiagonal() == true){
      well = true;
    }
    return well;
  }

  function leftDiagonal(){
    var winner = false;
    for(var r = 0; r < 3; r++){
      for(var c = 3; c < 7; c++){
  
        if(board[r][c] != "empty"){
          if(board[r][c] == board[r + 1][c - 1]){
            if(board[r][c] == board[r + 2][c - 2]){
              if(board[r][c] == board[r + 3][c - 3]){
                winner = true;
              }
            }
          }
        }
        
      }
    }
    return winner;
  }

  function rightDiagonal(){
    var winner = false;
    for(var r = 0; r < 3; r++){
      for(var c = 0; c < 4; c++){

        if(board[r][c] != "empty"){
          if(board[r][c] == board[r + 1][c + 1]){
            if(board[r][c] == board[r + 2][c + 2]){
              if(board[r][c] == board[r + 3][c + 3]){
                winner = true;
              }
            }
          }
        }
      }
    }
    return winner;
  }

  function down(){
    var winner = false;
    var newArray5 = [
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""]
    ];
    for(var i = 0; i < 6; i++){
      for(var z = 0; z < 7; z++){
        newArray5[z][i] = board[i][z];
      }
    }

    newArray5.forEach(function(array1D){
      if(array1D.includes("blue")){
        var index1 = array1D.indexOf("blue");
        if(array1D[index1 + 1] == "blue"){
          if(array1D[index1 + 2] == "blue"){
            if(array1D[index1 + 3] == "blue"){
              winner = true;
            }
          }
        }
      }
      if(array1D.includes("pink")){
        var index1 = array1D.indexOf("pink");
        if(array1D[index1 + 1] == "pink"){
          if(array1D[index1 + 2] == "pink"){
            if(array1D[index1 + 3] == "pink"){
              winner = true;
            }
          }
        }
      }
    });
    return winner;
  }

  function across(){
    var winner = false;
    board.forEach(function(array1D){
      if(array1D.includes("blue")){
        var index1 = array1D.indexOf("blue");
        if(array1D[index1 + 1] == "blue"){
          if(array1D[index1 + 2] == "blue"){
            if(array1D[index1 + 3] == "blue"){
              winner = true;
            }
          }
        }
      }
      if(array1D.includes("pink")){
        var index1 = array1D.indexOf("pink");
        if(array1D[index1 + 1] == "pink"){
          if(array1D[index1 + 2] == "pink"){
            if(array1D[index1 + 3] == "pink"){
              winner = true;
            }
          }
        }
      }
    });
    return winner;
  }

  function checkStalemate(){
    if(board[0][0] != "empty" && board[0][1] != "empty" && board[0][2] != "empty" && board[0][3] != "empty" && board[0][4] != "empty" && board[0][5] != "empty" && board[0][6] != "empty"){
      var modal = document.getElementById('myModal');
      var modalText = document.getElementById("modalText");
      var colorName = determineColorWords();
      var colorNumber = determineColor();
      modalText.innerHTML = "There was no winner this game!";
      modal.style.display = "block";
    }
  }

  function buttonZero(){
    if(possible(0) == true){
      colorCounter++;;
      var rowToChange = checkRow(0);
      colorChanger(rowToChange, 0);
      board[rowToChange][0] = determineColorWords();
      if(checkForWinner() == true){
        var modal = document.getElementById('myModal');
        var modalText = document.getElementById("modalText");
        var colorName = determineColorWords();
        var colorNumber = determineColor();
        modalText.innerHTML = "The winner is the <span style='background-color:" + colorNumber + "'>" + colorName + "</span> user!";
        modal.style.display = "block";
      }else{
        checkStalemate();
      }
    }
  }

  function buttonOne(){
    if(possible(1) == true){
      colorCounter++;;
      var rowToChange = checkRow(1);
      colorChanger(rowToChange, 1);
      board[rowToChange][1] = determineColorWords();
      if(checkForWinner() == true){
        var modal = document.getElementById('myModal');
        var modalText = document.getElementById("modalText");
        var colorName = determineColorWords();
        var colorNumber = determineColor();
        modalText.innerHTML = "The winner is the <span style='background-color:" + colorNumber + "'>" + colorName + "</span> user!";
        modal.style.display = "block";
      }
    }
  }

  function buttonTwo(){
    if(possible(2) == true){
      colorCounter++;;
      var rowToChange = checkRow(2);
      colorChanger(rowToChange, 2);
      board[rowToChange][2] = determineColorWords();
      if(checkForWinner() == true){
        var modal = document.getElementById('myModal');
        var modalText = document.getElementById("modalText");
        var colorName = determineColorWords();
        var colorNumber = determineColor();
        modalText.innerHTML = "The winner is the <span style='background-color:" + colorNumber + "'>" + colorName + "</span> user!";
        modal.style.display = "block";
      }
    }
  }

  function buttonThree(){
    if(possible(3) == true){
      colorCounter++;;
      var rowToChange = checkRow(3);
      colorChanger(rowToChange, 3);
      board[rowToChange][3] = determineColorWords();
      if(checkForWinner() == true){
        var modal = document.getElementById('myModal');
        var modalText = document.getElementById("modalText");
        var colorName = determineColorWords();
        var colorNumber = determineColor();
        modalText.innerHTML = "The winner is the <span style='background-color:" + colorNumber + "'>" + colorName + "</span> user!";
        modal.style.display = "block";
      }
    }
  }

  function buttonFour(){
    if(possible(4) == true){
      colorCounter++;;
      var rowToChange = checkRow(4);
      colorChanger(rowToChange, 4);
      board[rowToChange][4] = determineColorWords();
      if(checkForWinner() == true){
        var modal = document.getElementById('myModal');
        var modalText = document.getElementById("modalText");
        var colorName = determineColorWords();
        var colorNumber = determineColor();
        modalText.innerHTML = "The winner is the <span style='background-color:" + colorNumber + "'>" + colorName + "</span> user!";
        modal.style.display = "block";
      }
    }
  }

  function buttonFive(){
    if(possible(5) == true){
      colorCounter++;;
      var rowToChange = checkRow(5);
      colorChanger(rowToChange, 5);
      board[rowToChange][5] = determineColorWords();
      if(checkForWinner() == true){
        var modal = document.getElementById('myModal');
        var modalText = document.getElementById("modalText");
        var colorName = determineColorWords();
        var colorNumber = determineColor();
        modalText.innerHTML = "The winner is the <span style='background-color:" + colorNumber + "'>" + colorName + "</span> user!";
        modal.style.display = "block";
      }
    }
  }

  function buttonSix(){
    if(possible(6) == true){
      colorCounter++;;
      var rowToChange = checkRow(6);
      colorChanger(rowToChange, 6);
      board[rowToChange][6] = determineColorWords();
      if(checkForWinner() == true){
        var modal = document.getElementById('myModal');
        var modalText = document.getElementById("modalText");
        var colorName = determineColorWords();
        var colorNumber = determineColor();
        modalText.innerHTML = "The winner is the <span style='background-color:" + colorNumber + "'>" + colorName + "</span> user!";
        modal.style.display = "block";
      }
    }
  }

  function hideModal(){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
