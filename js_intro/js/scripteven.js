var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr2=["a", "b", "c"]
var sum=function (list) {
  var total=0;
  
  for (var i=0; i<list.length; i++){
   if(i%2===0){
    	total+=list[i];
  	}
      
  }
  
  return total;
};
 
console.log(sum(arr));
console.log(sum(arr2));
 