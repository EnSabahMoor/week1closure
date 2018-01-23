var countdownGenerator = function (x){
  var counter = x;
  function tMinus(){
   if (counter > 0) {
     console.log("T-Minus " + counter + "...");
   }
  else if (counter === 0) {
    console.log("Blast Off!")
  }
  else {
    console.log("Rockets already gone, bub!")
  }

  counter = counter -1;
}
  return tMinus
};

var countdown = countdownGenerator(3);
console.log(countdown);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
