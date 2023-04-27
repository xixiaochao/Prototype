Array.prototype.every()

//every  true/false  只要有一个为false则返回为false
let res = ary.every(function(item){
  console.log(item);
  return item<2
  })
  console.log(res);

  // every :返回一个布尔值；如果有一个不满足条件，返回值是false；如果都满足，返回值是true；
/* let bol  = arr.every((item,index)=>{
     return item>5;
 });*/