Array.prototype.filter();

/**
 * filter： 过滤；返回是一个数组；
 *      把符合条件这一项返回；
 *      根据回调函数的返回值是true或false来过滤出新的数组；
 */
let arr = [1, 3, 4, 6];
let a = arr.filter((item, index) => {
  // 如果返回布尔，是true，全部过滤出来；
  // 如果不是布尔，会默认先转布尔；如果为true，把这一项过滤出来；
  return 1;
});
console.log(a);

//filter 筛选数组 满足条件的留下，不满足的去掉 返回的都是新数组
let ary = [1, 2, 3, 4, 5, 6];
let res = ary.filter((item, index, ary) => {
  return item < 4;
});
console.log(ary);
console.log(res);
