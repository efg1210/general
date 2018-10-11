
//resets for the sort, enables & disables buttons, and starts the animation
function sort(){
  reset();

  document.getElementById('gen-btn').disabled = true;
  document.getElementById('start-btn').disabled = true;

  animate("insertion");
}

//animates and does the insertion sort
function animateInsertionSort(){
    var i = 1;
    var j = 0;
    var swapped = false;

    function animateSort(i, j, swapped){
        var sort = setInterval(function(){

            if(randNums[j] > randNums[i]){
                swap(j, i);
                swapped = true;
            }

            highlightSorted(j, i);

            clearInterval(sort);

            if(i < 14 && (j == (i - 1) || swapped)){
              i++;
              j = 0;
              swapped = false;
              console.log("i: " + i + " j: " + j + " swapped: " + swapped);
              animateSort(i, j, swapped);
            }else if(j < i){
              j++;
              swapped = false;
              console.log("j less than i");
              animateSort(i, j, swapped);
            }else{
              var modal = document.getElementById('myModal');
              var modalText = document.getElementById("modalText");
              modalText.innerHTML = "This list has been sorted.";
              modal.style.display = "block";
              document.getElementById('gen-btn').disabled = false;
              unhighlightAll();
            }
        }, delay);
    }
    animateSort(i, j, swapped);
}

//highlights the end it is checking against (purple),
//the part being moved (blue), and the middle light pink
function highlightSorted(start, end) {
  unhighlightAll();
  for (var i = start; i <= end; i++) {
    document.getElementById('bar' + i).style.backgroundColor = "#ff93bb"; //lightpink
  }
  document.getElementById('bar' + end).style.backgroundColor = "#00e6e6"; //blue
  document.getElementById('bar' + start).style.backgroundColor = "#b300b3";//purple
}

//switches to parts of the array using splice because I am fancy
function swap(left, right){
  var ofRight = randNums[right];
  randNums.splice(left, 0, ofRight);
  randNums.splice(right + 1, 1);
  unhighlightAll();
  draw(randNums);
}

//resets by unhighlighting and hiding modals
function reset() {
  unhighlightAll();
  hideModal();
}

//unhighlighting everything back to normal pink
function unhighlightAll() {
  for (var i = 0; i < 15; i++) {
    unhighlight(i);
  }
}

//unlights one div to normal pink
function unhighlight(i) {
  document.getElementById('bar' + i).style.backgroundColor = '#ff478d';   //normal color (pink)
}
