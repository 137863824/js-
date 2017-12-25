// 立即执行函数表达式（IIFE）Immediately-Invoked Function Expression
// 我的理解：声明并立刻执行使用
// IIFE 写法
// ==================================================
// 用法一
for(var i = 0; i<5;i++){
    (function (index) { // 声明
        console.log(index)
    }(i)); // 执行
}
// ===================================================
function makeCounter() {  // 函数声明
    // i只是makeCounter函数内的局部变量
    var i = 0;
    
    return function () {
        console.log(++i);
    };
}
var a = makeCounter()  // 函数表达式，执行
a() // 1
a() // 2

// =================================================
// 用法二
var counter = (function(){
    var i = 0;
  
    return {
      get: function(){
        return i;
      },
      set: function( val ){
        i = val;
      },
      increment: function() {
        return ++i;
      }
    };
  }());
  
  // counter其实是一个对象
  
  counter.get(); // 0
  counter.set( 3 );
  counter.increment(); // 4
  counter.increment(); // 5
  
  counter.i; // undefined i并不是counter的属性
  i; // ReferenceError: i is not defined (函数内部的是局部变量)
//   =========================================================================