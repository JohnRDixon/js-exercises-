//Chapter 3 exercise 3

function countChar(string, ch) {
  var counted = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) == ch)
      counted += 1;
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));

console.log(countChar("kakkerlak", "k"));


//I think my issue must lie specifically in craftig functions as I had a heap of trouble even knowing where to start with this one.
//You'll notice all of these solutions are from the book with very little of my own input.
//This is because I had nothing of substance to add due to the needlessly esoteric nature of the material.