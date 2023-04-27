/* 改变this指向

  Call中的细节
  1，非严格模式下，如果参数不传，或者第一个传递的是null/undefined,this都指向window
  2，在严格模式下，第一个参数是谁，this就指向谁（包括null/undefined）,不传this是undefined

  call的执行
  1. fn通过__proto__ 找到Function原型上的call方法；
  2.当call运行时，改变了fn中的this指向，让它指向call方法传进来第一个参数；
  3. 并且让fn运行；
  如果call不传参数，那么会默认指向window；
*/

function fn1() {
  console.log(1, arguments);
}
function fn2() {
  console.log(this, 2);
}

/**
 * call的特点
 * 1、可以改变我们当前函数的this指向
 * 2、还会让当前函数执行
 */
Function.prototype.call = function (context) {
  context = context ? Object(context) : window;
  context.fn = this;
  let args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push("argument[" + i + "]"); //['','']
  }
  //利用数组的toString的特性
  let r = eval("context.fn(" + args + ")");
  delete context.fn;
  return r;
};
fn1.call.call.call(fn2); //this="hello"  xxx.fn1()
//{}.fn = fn1;

//如果多个call会让call方法执行 并且把call中this改变成fn2

//柯里化函数就是把多个参数合并成一个对象

// Function内置对象
//console.dir( Function.prototype)
//call,apply,bind 改变方法里的this关键字
("use strict"); //对所有的代码都采用严格模式
function fn(n, m) {
  //"use strict"; 写在这只对方法本身起作用
  // console.log(this+n+m);
  console.log(this);
}
var obj = {};
fn.call(obj, 10, 20);
//call方法运行内在机制
//1.fn里的this改变obj 2.从第二个参数开始一个个传给fn方法
//3.让fn()
//正常模式下
fn.call(); //window
fn.call(null); //window
fn.call(undefined); //window
//严格模式下，传啥就是啥
fn.call(); //undefined
fn.call(null); //null
fn.call(undefined); //undefined
fn.call(NaN); //NaN

Function.prototype.call = function (obj) {
  //this 指的是fn
  //1.this里的this改变成obj
  //2.从第二个参数开始一个个传给this
  //3.让this()
};
fn.call(obj);
