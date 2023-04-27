# Array

- 支持在单个变量名下存储多个元素
- 数组不是基本类型

## 核心特征

- 数组是可调整大小的，并且可以包含不同的数据类型
- 数组不是关联数组，因此，不能使用任意字符串作为索引访问数组元素，但必须使用非负整数或字符串形式
- 数组下标（索引）从0开始，最后一个元素的下标是length-1
- 数组复制操作创建浅拷贝
注：所有JavaScript对象的标准内置复制操作都会创建浅拷贝，而不是深拷贝。

## 数组方法和空槽

- 稀疏数组中的空槽在数组方法之间的行为不一致。通常，旧方法会跳过空槽，而新方法将它们视为 undefined。
- 在遍历多个元素的方法中，下面的方法在访问索引之前执行 in 检查，并且不将空槽与 undefined 合并：

### in

如果指定的属性在指定的对象或其原型链中，则 in 运算符返回 true。

### 数组方法

concat()
copyWithin()
every()
filter()
flat()
flatMap()
forEach()
indexOf()
lastIndexOf()
map()
reduce()
reduceRight()
reverse()
slice()
some()
sort()
splice()
以上方法处理空槽。

- 这些方法将空槽视为 undefined：

entries()
fill()
find()
findIndex()
findLast()
findLastIndex()
group() 实验性
groupToMap() 实验性
includes()
join()
keys()
toLocaleString()
values()

以下方法是迭代方法：

every()
filter()
find()
findIndex()
findLast()
findLastIndex()
flatMap()
forEach()
group()
groupToMap()
map()
some()

## Array() 构造函数

Array() 构造函数用于创建 Array 对象。
