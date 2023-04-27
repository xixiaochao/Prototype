Array.prototype[@@iterator]()
/*
  Array 实例的 [@@iterator]() 方法实现了迭代协议，允许数组被大多数期望可迭代对象的语法所使用，例如展开语法和 for...of 循环。它返回一个数组迭代器对象 (en-US)，该对象会产生数组中每个索引的值。
  该属性的初始值与 Array.prototype.values 属性的初始值是相同的函数对象。
  语法: array[Symbol.iterator]()
  返回值: 与 Array.prototype.values() 相同的返回值：一个新的可迭代迭代器对象 (en-US)，它会生成数组中每个索引的值。
  */

/*
  使用 for...of 循环进行迭代
  请注意，你很少需要直接调用此方法。@@iterator 方法的存在使数组可迭代，并且像 for...of 循环这样的迭代语法会自动调用此方法以获得要遍历的迭代器。
  */

<ul id="letterResult"></ul>;
const arr = ["a", "b", "c"];
const letterResult = document.getElementById("letterResult");
for (const letter of arr) {
  const li = document.createElement("li");
  li.textContent = letter;
  letterResult.appendChild(li);
}

/*
  手动执行迭代器
  你仍然可以手动调用返回迭代器对象的 next() 方法，以实现对迭代过程的最大控制。
  */

const arr1 = ["a", "b", "c", "d", "e"];
const arrIter = arr1[Symbol.iterator]();
console.log(arrIter.next().value); // a
console.log(arrIter.next().value); // b
console.log(arrIter.next().value); // c
console.log(arrIter.next().value); // d
console.log(arrIter.next().value); // e

/*
  使用相同的函数处理字符串和字符串数组
  因为字符串和数组都实现了可迭代协议，所以可以设计一个通用函数以相同的方式处理这两种输入。这比直接调用 Array.prototype.values() 更好，后者要求输入是一个数组，或者至少是一个具有这种方法的对象。
  */

function logIterable(it) {
  if (typeof it[Symbol.iterator] !== "function") {
    console.log(it, "不可迭代。");
    return;
  }
  for (const letter of it) {
    console.log(letter);
  }
}

// 数组 a b c 迭代
logIterable(["a", "b", "c"]);
// 字符串 a b c 迭代
logIterable("abc");
// 数值 123 不可迭代。
logIterable(123);
