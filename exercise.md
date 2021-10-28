## 基础

### 创建简单页面

1. 新建 test.html
2. 在 head 标签内插入一个 script 标签，使用 `document.write` 插入一段问候语
3. 再插入一个 script 标签，引入与 test.html 相同文件夹内名为 test.js 的文件，内容为 `console.log('Hi, JavaScript')`

注意：

1. 如果 script 包含 src 属性，且标签内有 JavaScript 代码，则只会执行外部文件。
2. html 代码从上而下执行，单线程。因此执行 JS 代码时会阻塞内容和样式的解析。
3. script 标签的两个布尔型属性：async 和 defer。
4. JS 是按代码块执行，但都挂载在 window 属性下。前一个 script 标签定义的变量，后一个 script 标签可以使用它。

### 变量

```
var a = 1					// a 位于函数体外，全局变量
function f() {
    document.write(a + '<br />');		// undefined
    var a = 2;              // 如果去掉 var 会怎样？
    document.write(a);		// 2
}
f()
```

注意：在函数体内声明全局变量极其危险！

### 数据类型、类型检测、类型转换

1. 使用 `typeof value` 检测数据类型。
2. 使用 `value.constructor` 检测数据类型。

```
var t = true
var arr = []
console.log(typeof t)			// boolean
console.log(t.constructor)		// ƒ Boolean() { [native code] }
console.log(typeof arr)			// object
console.log(arr.constructor)	// ƒ Array() { [native code] }

console.log(Object.prototype.toString.apply(arr))		// [object Array]
```

`typeof` 不能准确测出是什么样的对象， toString 方法可以。
注意：`undefined` 和 `null` 没有 `constructor` 属性和 `toString` 方法。

```
var a = 9
console.log(a.toString(10))		// 9
console.log(a.toString(2))		// 1001
console.log(a.toString(8))		// 11

console.log(a.toFixed(3))		// 数值有三位小数

console.log(parseInt('123.456abc'))	// 123
console.log(parseInt('1001', 2))    // 将二进制 1001 转换成十进制 9，与 52 行相反

// + 号即可以表示字符串拼接，也可以表示数值相加
var b = new String('b')
var c = new Boolean(true)
console.log(b + 0)                  // 'b0'
console.log(c + 0)                  // 1
```

## 基本运算

```
console.log(NaN + 3)				// NaN
console.log(1 + 3)					// 4
console.log('1' + 3)				// '13'
console.log(3.0 + 4.3 + '')			// '7.3'
console.log(3.0 + '' + 4.3)			// '34.3'

var a = b = c = 3
console.log(a++)					// 3
console.log(++b)					// 4
console.log(c++)					// 3
console.log(c)						// 4
console.log(++c)					// 5
console.log(c)						// 5

console.log(1 && 3 && 2)			// 2
console.log('abd' > 'abc')					// true
console.log('a'.charCodeAt(0))				// 内部编码 97

// 比较的不是值本身，而是该变量值的地址
var a = {}, b = a;							 
console.log(a === b)						// true
var a = {}, b = {};
console.log(a === b)						// false

var a = new Array()
console.log(a instanceof Array)				// true
console.log(a instanceof Object)			// true
console.log(a instanceof Function)			// false
```

## 程序结构

JS 从上而下执行，为顺序结构。使用 if switch 语句可以改变流程，称为分支结构。

```
var num = parseInt(Math.random() * 99 + 1)
if (num % 2) {
    console.log(num + ' 为奇数')
} else {
    console.log(num + ' 为偶数')
}
```

三元运算符：`num % 2 ? console.log(num + ' 为奇数') : console.log(num + ' 为偶数')`

```
var score = Math.random() * 99 + 1
switch(parseInt(score / 10)) {
    case 10:
        console.log('good')
        break
    case 9:
    case 8:
    case 7:
        console.log('fine')
        break
    case 6:
        console.log('bad')
        break
    default:
        console.log('cry')
        break                       // 此 break 可省略    
}
```

重复性操作使用 for/while/do...while 循环。

求 100 以内的素数：

```
for (var n = 2; n <= 100; n++) {
    var flag = true					// flag 表示假设该数为质数
    for (var i = 2; i < n; i++) {	// 将 n 整除比它小的整数来证伪
        if (n % i == 0) {
            flag = false
            break
        }
    }
    if (flag) {
        document.write(n + ' 是素数<br />')
    }
}
```

## 字符串处理

```
var s = 'http://www.baidu.com'
var str1 = s.substr(s.lastIndexOf('.') + 1)
var str2 = s.substring(s.lastIndexOf('.') + 1)
console.log(str1)
console.log(str2)

console.log('aBc'.toUpperCase())
console.log('aBc'.toLowerCase())

console.log('  abcd\n'.trim())

var str = 'JS教程'
console.log(encodeURI(str))
console.log(decodeURI('JS%E6%95%99%E7%A8%8B'))
```

## BOM

```
var p = document.getElementById('p')
p.onmouseover = function() {
    setTimeout(function() {
        console.log(p.tagName)
    }, 200)
}
```
