$(document).ready(function() {
  var numberArray = [];
  function createPrimeArray(n) {
    for (var i = 2; i <= n; i++) {
      numberArray.push(i + " ");
    }
    for (var j = 2; j < n; j++) {
      for (var i = 0; i < numberArray.length; i++) {
        if (numberArray[i]%j === 0 && numberArray[i] != j) {
          numberArray[i] = "";
        }
      }
    }
    numberArray = numberArray.join("");
    numberArray = numberArray.split(" ");
    numberArray.pop("");
    return numberArray;
  };
  alert(createPrimeArray(100));
});
