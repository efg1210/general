
//resets for the search, enables & disables buttons, and starts the animation
function search() {
  reset();

  document.getElementById('gen-btn').disabled = true;
  document.getElementById('start-btn').disabled = true;

  animate('binary', parseInt(prompt('Enter an integer value.')));
}

///animates and does the binary search
function animateBinarySearch(target){
  var found = false;
  var left = 0;
  var prevLeft = left;
  var right = 14;
  var prevRight = right;
  var mid = Math.floor((left + right) / 2);
  var prevMid = mid;

  function animateSearch(found, left, prevLeft, right, prevRight, mid, prevMid){
    var search = setInterval(function() {
      // recalculate midpoint index and update previous reference
      prevMid = mid;
      mid = Math.floor((left + right) / 2);

      // unhighlight previous left, right, and midpoint indexes if they've changed
      unhighlightAll();

      // highlight new left and right indexes
      highlight(false, left, true);
      highlight(false, right, true);

      // if we find the target, highlight it (in green?) and set found to true
      // otherwise, highlight it (in yellow?)
      //    if target < midpoint value ==> move right endpoint back to midpoint - 1
      //    if target > midpoint value ++> move left endpoint up to midpoint + 1
      // always update previous left and previous right variables
      if(randNums[mid] == target) {
        highlight(true, mid, false);
        found = true;
      }else{
        highlight(false, mid, false);
      }

      if(target < randNums[mid]){
        prevRight = right;
        right = mid - 1;
      }else if(target > randNums[mid]){
        prevLeft = left;
        left = mid + 1;
      }

      clearInterval(search);

      if(!found && left <= right){
        animateSearch(found, left, prevLeft, right, prevRight, mid, prevMid);
      }else{
        document.getElementById('gen-btn').disabled = false;
        document.getElementById('start-btn').disabled = false;
        var modal = document.getElementById('myModal');
        var modalText = document.getElementById("modalText");
        if(!found){
          modalText.innerHTML = "Search Results: " + target + " was not found.";
          modal.style.display = "block";
        }else{
          modalText.innerHTML = "Search Results: " + target + " was found at index " + mid + ".";
          modal.style.display = "block";
        }
      }

    }, delay);    // DELAY - how long to wait between each step of the algorithm
  }

  animateSearch(found, left, prevLeft, right, prevRight, mid, prevMid);   // kickoff the first step of the animation
}

//highlights based on if it is an end point (light pink), found (blue), or checking (purple)
function highlight(found, i, endpoint){
  if(endpoint){
    document.getElementById("bar" + i).style.backgroundColor = "#ff93bb"; //endpoint color (light pink)
  }

  if (found) {
    document.getElementById('bar' + i).style.backgroundColor = "#00e6e6"; //found color (blue)
  } else if(!found && !endpoint) {
    document.getElementById('bar' + i).style.backgroundColor = "#b300b3"; //highlight color (purple)
  }
}

//unhighlights one div back to normal pink
function unhighlight(i) {
  document.getElementById('bar' + i).style.backgroundColor = "#ff478d";   //normal color (pink)
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
