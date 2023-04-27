/* 改变this指向
  apply： 和call基本上一模一样，唯一区别在于传参方式
  fn.call(obj,10,20);
  fn.apply(obj,[10,20]);
  Apply把需要传递给FN的参数放到一个数组（或者类数组）中传递进去，虽然写的是一个数组，但是也相当于给FN一个个
*/

function fn1() {
  console.log(this, arguments);
}
Function.prototype.apply = function (context, args) {
  context = context ? Object(context) : window;
  context.fn = this;
  if (!args) {
    return context.fn();
  }
  //利用数组的toString的特性
  let r = eval("context.fn(" + args + ")"); //(...args)
  delete context.fn;
  return r;
};
fn1.apply("hello", [1, 2, 3, 4]);
