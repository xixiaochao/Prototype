Array.prototype.unshift()

/*
  unshift()
  
  1、作用： `向数组开头新增一项`
  2、参数： `需要传参数`
  3、返回值： `新数组的数组成员的个数`
  4、是否改变原数组： `原有数组发生改变`
*/

var ary = [1,2,3,4];

Array.prototype.myUnShift = function(){
    var len = this.length + arguments.length;
    var argLen = arguments.length;
    var thLen = this.length;
    for(var i = len - 1; i >= 0; i--){
        if(i >= argLen){
            this[i] = this[thLen -1];
            thLen--;
        }else{
            this[argLen - 1] =arguments[i];
            argLen--;
        }
    }
    return this.length;
}