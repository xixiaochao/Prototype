Array.prototype.some()

//some true/false  只要一个为true则返回为true
let ary = [1,2,3,4,5,6];
let res = ary.some(function(item,index,ary){
 console.log(item);
 return item>1;
 })
 console.log(res);

// some  : 返回一个布尔值；如果只要有一个满足条件就会返回true；只要找到满足条件一项，返回true，some函数中止；如果都不满足，返回false；
/*let bol = arr.some((item,index)=>{
    return item>100;
})*/