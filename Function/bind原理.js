/* 改变this指向

  bind ：语法和call一模一样，唯一的区别在于立即执行还是等待执行
  fn.call(obj,10,20) 改变FN中的this，并且把FN立即执行
  fn.bind(obj,10,20) 改变FN中的this，此时的FN并没有执行（不兼容IE6-8）
*/

let obj = {
  name:'jw'
}
function fn(name,age){
  this.say = '说话'
  console.log(this);
  //console.log(this.name+'养了一只'+name+age+'岁了');
}
// 1、bind方法可以绑定this指向 绑定参数
// 2、bind方法返回一个绑定后的函数（高阶函数）
// 3、如果绑定的函数被new了 当前函数的this就是当前的实例
// 4、new 出来的结果可以找到原有类的原型
Function.prototype.bind = function (context){
  let that = this;
  let bindArgs = Array.prototype.slice.call(arguments,1);//['猫']
  function Fn(){}//Object.create原理
  function fBound(){ //this
      let args = Array.prototype.slice.call(arguments);
      return that.apply(this instanceof fBound ? this:context,bindArgs.concat(args));
  }
  Fn.prototype = this.prototype;
  fBound.prototype = new Fn();
  return fBound
}
fn.prototype.flag = '哺乳类'
let bindFn = fn.bind(obj,'猫');
let instance = new bindFn(9);
console.log(instance.flag);
