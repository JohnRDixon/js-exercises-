//Chapter 3 exercise 2

function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}


console.log(isEven(50));

console.log(isEven(75));

console.log(isEven(-1));

//Don't understand this one. Don't understand how n==0 equates to even and how ==1 becomes odd