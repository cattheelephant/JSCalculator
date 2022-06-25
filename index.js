let num1 = prompt("Enter First Number: ");
let sgn = prompt("Enter any operator(+, -, /, *): ");
let num2 = prompt("Enter Second Number: ");
parseInt(num1);
parseInt(num2);

if(sgn == "+")
(
    result = (parseInt(num1) + parseInt(num2))); 
else if(sgn == "-")
(
    result = num1 - num2);
else if(sgn == "*")
(
    result = num1 * num2); 
else if(sgn == "/")
(
    result = num1 / num2);

alert(num1 + sgn + num2 + "=" + result);