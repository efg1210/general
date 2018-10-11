
//define global variables
  var randNums = [];
  var delay = 1000;
  var type = "";

//disables and enables button
  function startup(category) {
    document.getElementById('gen-btn').disabled = false;
    document.getElementById('start-btn').disabled = true;
    document.getElementById('slider').disabled = true;

    type = category;
  }

//enables the start button, makes sure binary lists are sorted, and sets up a few other things
  function generate(algo) {

    randNums.length = 0;

    if(algo == "binary") {
      randNums = popl(true);
    }else{
      randNums = popl(false);
    }

    draw(randNums);

    document.getElementById('start-btn').disabled = false;
    document.getElementById('slider').disabled = false;
    document.getElementById('slider').value = (type === 'search') ? 10 : 500;

    hideModal();
    adjustSpeed("start");
  }

//makes the randomly generated list
  function popl(sorted) {

    var min = 1;
    var max = 50;

    for (var i = 0; i < 15; i++) {
        randNums.push(Math.floor(Math.random() * (max - min + 1)) + min);
      }

    return sorted ? randNums.sort(function(a, b) { return a - b; }) : randNums;
  }

//"draws" the list and uses the array to make divs
  function draw(numbers) {
    var div = document.getElementById('bars');
    div.innerHTML = '';

    for (var i = 0; i < 15; i++) {
      var d = document.createElement('div');
      d.id = 'bar' + i;
      d.style.height = (numbers[i] * 7.5) + 'px';
      d.style.backgroundColor = '#ff478d';
      d.style.margin = '2.5px';
      d.style.flex = '1';
      d.style.textAlign = 'center';
      d.style.paddingBottom = '15px';
      var text = document.createElement('div');
      text.id = 'bartext' + i;
      text.innerHTML = numbers[i];
      text.style.paddingTop = '3px';
      text.className = 'label';
      d.appendChild(text);
      div.appendChild(d);
    }

  }

//kicks off the various animations based on which button was pressed
  function animate(algo, target) {
    if (algo === 'linear') {
      animateLinearSearch(target);
    } else if (algo === 'binary') {
      animateBinarySearch(target);
    } else if (algo === 'bubble') {
      animateBubbleSort();
    } else if (algo === 'selection') {
      animateSelectionSort();
    } else if (algo === 'insertion') {
      animateInsertionSort();
    }
  }

//adjusts the speed so that it is slower to the left and faster to the right
  function adjustSpeed(when) {
    var slider = document.getElementById("slider").value;
    if(when == "start"){
      if(slider != 10){
        document.getElementById("slider").value = 10;
        slider = 10;
      }
    }
    slider = 21 - slider;
    slider *= 100;
    delay = slider;
  }

//hides the modal
  function hideModal(){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

//also hides the modal
  window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
  }

  //old stuff & logic
  //pretty much ignore it
  /*
  function generate(){
    var randNums = [];
    for(var i = 0; i < 15; i++){
      randNums.push(Math.floor(Math.random() * 50) + 1);
    }
    return randNums;
  }

  function draw(){

  }

  function binarySearch(){
    var randNums = bubbleSort();
    var target = Number.parseInt(prompt("What is your number to find", "1-50"));
    var start = 0;
    var end = 14;
    var index = -1;
    var i = (end / 2) + (start / 2);
    randNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    do{
      if(i % 1 != 0){
        i = Math.ceil(i);
      }
      if(randNums[i] == target){
        index = i;
        break;
      }else if(target > randNums[i]){
        start = i + 1;
      }else if(target < randNums[i]){
        end = i - 1;
      }

      i = start + ((end - start) / 2);
    } while (start < end);
    console.log(randNums.indexOf(target));
    console.log(index);
    return index;
  }

  function bubbleSort(){
    var randNums = generate();
    var temp;
    var swapped = false;

    do{
      swapped = false;
      for(var i = 0; i < 14; i++){
        if(randNums[i] > randNums[i + 1]){
          temp = randNums[i];
          randNums[i] = randNums[i + 1];
          randNums[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped == true);

    //console.log(randNums);
    return randNums;
  }

  function selectionSort(){
    var randNums = generate();
    randNums = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    var min;
    var swapped = true;
    var indexOfCurrentMin;

    for(var i = 0; i < 14; i++){
      min = randNums[i];
      for(var j = 0 + i; j < 14; j++){
        if(min > randNums[j]){
          min = randNums[j];
          indexOfCurrentMin = j;
        }
      }
      console.log(min);
      randNums[indexOfCurrentMin] = randNums[i];
      randNums[i] = min;
    }

    console.log(randNums);
    return randNums;
  }
  */
