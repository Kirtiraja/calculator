var add = function(number1, number2) {
  return number1 + number2;
};


$(document). ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);



  });
});

// var sub = function(number1, number2) { return number1 - number2;
//
// };
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = sub(number1, number2);
// alert(result);
//
// var mult = function(number1, number2) { return number1 * number2;
//
// };
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = mult(number1, number2);
// alert(result);
//
// var div = function(number1, number2)
//
// { return number1 / number2;
//
// };
//
//
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = div(number1, number2);
// alert(result);
