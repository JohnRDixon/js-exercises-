var countString = function (string){
  return string.length
};

var string=prompt ("Enter a string");

console.log(countString(string));


var countString = function (string){
  
  var space=""
  
  for(var i=0; i<string.length; i++){
   space+=string[i]+"_"
  };
    return space
};



console.log(countString("xxx 360 noscope"));