Array.prototype.reduce()
/*
  reduce()
  
  */



//原型上封装
Array.prototype.reduce = function(callback,prev){
  for(let i = 0; i< this.length; i++) {
    if(prev == undefined){
      prev = callback(this[i],this[i+1],i+1,this);
      i++;
    }else {
      prev= callback(prev,this[i], i , this)
    }
  }
}
let r = [1,2,3].reduce((a,b,index,current) => {
return a+b;
},100)
console.log(r)



//reduce:一般用于数组的求和
let arr=[23,54,12,64,89];
let yy=arr.reduce((prev,next)=>{
    console.log(prev, next);
    return prev+next;
});
console.log(yy);

arr.reduce((prev,next)=>{
    // 第一次执行： prev 是第一项；next，下一项；
    // 第二次执行： prev 是上一次回调函数的返回值；next 是下一项；
    return  prev + next;
},0);

/**
 *  reduce 和reduceRight  数组每一项依次累加，最终得出累加值
 * 
 *  reduce 第一个回调函数 第二个参数表示prev初始值，若第二个参数没有传
*/
let ary = [1,2,3,4,5,6];
let res = ary.reduce(function(prev,item) {
    //prev 累计项  item 当前项(依次取数组的成员)
    return prev + item;
},10);

//在原型上封装reduce，并且求和验证
Array.prototype.myReduce = function (fn,prev){
    for(let i = 0;i<this.length;i++){
        if(typeof prev === 'undefined'){
            prev = fn(this[i],this[i+1], i+1, this);
            ++i;
        } else {
            prev = fn(prev,this[i],i,this);
        }
    }
    return prev;
}
let sum = [1,2,3].myReduce((prev,next,currIndex,ary) => {
    return prev + next;
},0)
console.log(sum); // 6