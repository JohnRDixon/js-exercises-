//Chapter 2 exercise 2

for (var x = 1; x <= 100; x++) {
  var output = "";
  if (x % 3 == 0)
    output += "Fizz";
  if (x % 5 == 0)
    output += "Buzz";
  console.log(output || x);

}

//Got as far as the first for loop and mindway through the first if