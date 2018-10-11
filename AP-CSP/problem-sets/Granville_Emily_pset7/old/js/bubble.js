
//resets for the sort, enables & disables buttons, and starts the animation
function sort(){
  reset();

  document.getElementById('gen-btn').disabled = true;
  document.getElementById('start-btn').disabled = true;

  animate("bubble");
}

//animates and does the bubble sort
function animateBubbleSort(){
  var i = 0;
  var end = 14;
  var swaps = 0;

  function animateSort(i, end, swaps){
    var sort = setInterval(function(){
      if(i < end && randNums[i] > randNums[i + 1]){
        swaps++;
        swap(randNums[i], randNums[i + 1], i);
        unhighlightAll();
        highlight(i);
      }else{
        unhighlightAll();
        highlight(i);
      }

      clearInterval(sort);
      if(i == end && swaps > 0){
        i = 0;
        swaps = 0;
        end--;
        animateSort(i, end, swaps);
      }else if(i < end){
        i++;
        animateSort(i, end, swaps);
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

  animateSort(i, end, swaps);
}

//highlights one div (blue for check and purple for one it is one)
function highlight(i){
  var next = i + 1;
  if(next <= 14){
    document.getElementById('bar' + i).style.backgroundColor = "#b300b3";
    document.getElementById('bar' + next).style.backgroundColor = "#00e6e6";
  }
}

//switches to parts of the array
function swap(left, right, i){
  randNums[i] = right;
  randNums[i + 1] = left;
  draw(randNums);
}

//unlights one div to normal pink
function unhighlight(i) {
  document.getElementById('bar' + i).style.backgroundColor = '#ff478d';   //normal color (pink)
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
