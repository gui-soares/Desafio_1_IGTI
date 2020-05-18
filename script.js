window.addEventListener('load',() => {
  const sliderRed = document.getElementById('slider-red');
  const red = document.getElementById('red');
  red.value = sliderRed.value;

  const sliderGreen = document.getElementById('slider-green');
  const green = document.getElementById('green');
  green.value = sliderGreen.value;


  const sliderBlue = document.getElementById('slider-blue');
  const blue = document.getElementById('blue');
  blue.value = sliderBlue.value;

  const square = document.getElementById('square')

  sliderRed.oninput = function(){
    red.value = this.value;
    square.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
  };

  

  sliderGreen.oninput = function(){
    green.value = this.value;
    square.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
  };


  sliderBlue.oninput = function(){
    blue.value = this.value;
    square.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
  };

  red.oninput = function(){
    sliderRed.value = this.value;
    square.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
  };

  green.oninput = function(){
    sliderGreen.value = this.value;
    square.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
  };

  blue.oninput = function(){
    sliderBlue.value = this.value;
    square.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
  };
});