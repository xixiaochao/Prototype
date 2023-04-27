Array.prototype.find();

/**
 *  find 当回调函数中的条件成立的时候返回符合条件的那项
 *      Array arr.find(function(item,i,all){})
 *
 *  返回一个数组成员项；如果没有符合条件，返回undefined；
 */
let ary = [1, 2, 3];
ary.find((e) => e == 1); // 1

arr.find((item, index) => {
  return item > 10;
});

//find 返回满足条件的这一项,找到满足条件的，find方法中止运行 ，没有找到则返回undefined
let res = ary.find((item, index, ary) => {
  return item > 3;
});
console.log(res);

/*//findIndex 返回满足条件这一项的索引  没有满足条件的就返回-1
 let res = ary.findIndex((item,index,ary)=>{
 return item > 3
 })
 console.log(res);*/
