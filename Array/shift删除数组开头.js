Array.prototype.shift()

 /*
  shift()

  1、参数： `删除数组的第一项`
  2、作用： `不需要传参`
  3、返回值： `被删除的那一项`
  4、是否改变原数组： `原有数组发生改变`
*/

 Array.prototype.myShift = function(){
  var del = this[0];
  for(var i = 0; i < this.length - 1; i++){
      this[i] = this[i + 1];
  }
  this.length--;
  return del;
}