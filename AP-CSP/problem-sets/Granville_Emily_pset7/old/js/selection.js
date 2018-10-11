
//resets for the sort, enables & disables buttons, and starts the animation
function sort(){
  reset();

  document.getElementById('gen-btn').disabled = true;
  document.getElementById('start-btn').disabled = true;

  animate("selection");
}

//animates and does the selection sort
function animateSelectionSort() {
  var i = 0;
  var min = 0;
  var start = 0;

  function animateSort(i, min, start) {

    var sort = setInterval(function() {

      if(i < 15){
        highlight(false, i, start);
        if(randNums[i] < randNums[min]){
          unhighlight(min);
          min = i;
        }
        highlight(true, min, start);
      } else {
        unhighlight(i - 1);
        console.log("hello");
      }

      clearInterval(sort);    // clear interval allowing for changes in speed

      i++;
      if(i < 15){
        animateSort(i, min, start);
      }else if(i == 15 && i !== min){
        swap(start, min);
        highlightSorted(start);
        start++;
        i = start;
        min = start;
        animateSort(i, min, start);
      }else{
        var modal = document.getElementById('myModal');
        var modalText = document.getElementById("modalText");
        modalText.innerHTML = "This list has been sorted.";
        modal.style.display = "block";
        document.getElementById('gen-btn').disabled = false;
        unhighlightAll();
      }

    }, delay);  // DELAY - how long to wait between each step of the algorithm
  }

  animateSort(i, min, start);     // kickoff the first step of the animation
}

//highlighths the min (blue), or purple for the one it is checking
function highlight(isMinimum, i, start) {
  if(isMinimum){
    document.getElementById('bar' + i).style.backgroundColor = "#00e6e6"; //blue
  }else{
    if(i > start){
      document.getElementById('bar' + i).style.backgroundColor = "#b300b3"; //purple
      unhighlight(i - 1);
    }
  }

}

//highlights sorter part to light pink
function highlightSorted(start) {
  for (var i = 0; i <= start; i++) {
    document.getElementById('bar' + i).style.backgroundColor = "#ff93bb"; //lightpink
  }
}

//unlights one div to normal pink
function unhighlight(p) {
  if(p >= 0 && p <= 15){
    document.getElementById('bar' + p).style.backgroundColor = "#ff478d"; //normal pink
  }
}

//switches to parts of the array
function swap(left, right){
  temp = randNums[left];
  randNums[left] = randNums[right];
  randNums[right] = temp;
  draw(randNums);
}

//resets by unhighlighting and hiding modals
function reset(){
  unhighlightAll();
  hideModal();
}

//unhighlighting everything back to normal pink
function unhighlightAll() {
  for (var p = 0; p < 15; p++) {
    unhighlight(p);
  }
}
