
//resets for the search, enables & disables buttons, and starts the animation
  function search() {

    reset();

    document.getElementById('gen-btn').disabled = true;
    document.getElementById('start-btn').disabled = true;

    animate("linear", parseInt(prompt("Enter an integer value.")));
  }

//animates and does the linear search
  function animateLinearSearch(target){
    var found = false;
    var i = 0;

    function animateSearch(found, i){

      var search = setInterval(function(){
          if (i === 15 && !found){
            unhighlight(i - 1);
          }else{
            if(randNums[i] === target) {
              highlight(true, i);
              found = true;
            }else{
              highlight(false, i);
            }
          }
          clearInterval(search);

          if(++i >= 15 || found){
            if(i === 15 && !found){
              animateSearch(found, i);
            }else{
              document.getElementById('gen-btn').disabled = false;
              document.getElementById('start-btn').disabled = false;
              var modal = document.getElementById('myModal');
              var modalText = document.getElementById("modalText");
              if(!found){
                modalText.innerHTML = "Search Results: " + target + " was not found.";
                modal.style.display = "block";
              }else{
                modalText.innerHTML = "Search Results: " + target + " was found at index " + i + ".";
                modal.style.display = "block";
              }
            }
          }else{
            animateSearch(found, i);
          }
      }, delay);
    }
    animateSearch(found, i);
  }

//highlights divs colors (blue for found and purple for just checking)
  function highlight(found, i){
    if (i > 0) {
      unhighlight(i - 1);
    }

    if (found) {
      document.getElementById('bar' + i).style.backgroundColor = "#00e6e6"; //found color (blue)
    } else {
      document.getElementById('bar' + i).style.backgroundColor = "#b300b3"; //highlight color (purple)
    }
  }

//sets the div back to pink
  function unhighlight(i) {
    document.getElementById('bar' + i).style.backgroundColor = '#ff478d';   //normal color (pink)
  }

//resets by hiding the modal and unhighlighting everything
  function reset() {
    unhighlightAll();
    hideModal();
  }

//unhighlights everything
  function unhighlightAll() {
    for (var i = 0; i < 15; i++) {
      unhighlight(i);
    }
  }
