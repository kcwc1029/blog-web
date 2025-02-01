- JavaScript是一種應用廣泛的瀏覽器端Script，瀏覽器大多內建JavaScript直譯器。
- JavaScript和HTML、CSS都是網頁設計的核心技術，其中JavaScript用來定義網頁的行為，例如即時更新地圖、輪播圖片等。
## 1. 基本運作流程
1. 瀏覽器透過作業系統，將網址發送給DNS Server。
2. DNS Server解析網址，將處理的結果組成完整的IP位址並回傳。
3. 瀏覽器知道IP位址後發出網路請求，透過TCP/IP4的通訊協定對 Target Server，也就是網頁所在的伺服器來建立連線。
4. Target Server收到請求後，把所需的資源以封包的形式回應。
5. 解析完封包後，瀏覽器會收到相關的檔案和狀態資訊。
6. HTML和CSS會分別透過各自的Parser建立樹狀結構的資料模型：DOM Tree和BOM Tree。
7. 瀏覽器把DOM Tree整理出可見的節點5,並套用對應的CSSOM規則,形成Render Tree的資料結構。
8. v瀏覽器透過Render Tree計算出每個節點對應到頁面上的實際位置、形狀與大小等資訊,，輸出一個Layout的資料模型。
9. 瀏覽器透過這個Layout渲染在頁面上。
![upgit_20241103_1730615963.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241103_1730615963.png)


## 2. 在HTML中寫js
- 寫在script裡面。
- 一般會建議寫在最後面，尤其是當有大的JavaScript程式時，先讓渲染引擎將網頁顯示出來再載入JavaScript程式，比較不會有畫面延遲的情況。
![upgit_20241024_1729754092.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241024_1729754092.png)

## 3. data type
- JavaScript的型別分為基本型別(primitive type)與物件型別(object type)兩種類型。
- 基本型別(primitive type： number 、 string 、 boolen、 undefined、 null等。
- 物件型別(object type)：
	- Funtion
	- Array
	- Object(JS的Object比較像是python的dictionery，屬於一種關聯陣列(associative array))


- [JavaScript var let const的区别 - Web前端工程师面试题讲解 (youtube.com)](https://www.youtube.com/watch?v=aqZuCthC5BY)
1. JavaScript引擎解析到等號右邊的資料,也就是test,轉為二進位後新增進記憶體中。
2. JavaScript引擎解析到等號左邊的變數var1,把var1宣告(declare)在記憶體中。
3. 把變數var1指派(assign)到資料test,作為初始值。
![upgit_20241103_1730618059.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241103_1730618059.png)

### 3.1. 作用域(Scope)
- 全域作用域(Global Scope)：程式碼的任何地方都可以存取跟操作該變數。
- 函式作用域(Function Scope)：
- 區塊作用域(Block Scope)：像是for/while迴圈範圍、if...else條件句範圍。
![upgit_20241103_1730618375.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241103_1730618375.png)

## 4. 函數
![upgit_20241103_1730618563.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241103_1730618563.png)

- 輸入的對應叫做參數(Arguments/Parameters),用途是傳入程序所對應到的「函式」,讓函式對參數進行處理。
- 輸出的對應叫做返回(return),並且有兩種狀態：
	- 有回傳值,表示函式執行完後,會取得結果
	- 另一種則是undefined,簡單來說就是事情做完就結束了。
- 函式就是包覆程序中一連串的動作,可重複性地呼叫(call/invoke)來執行動作內容,來取得輸出或完成目的。
```js
// 函式表達式(Function Expression)
const showMsg = function() {
    let userName = prompt("請書入名稱");
    alert(userName + "你好");
}

// 匿名函數
let sum = function (a, b) {
    return a + b;
};

// arrow funtion
let sum = (a, b) => {
    return a + b;
};
```

### 4.1. 閉包(Closure) 和Currying
- Closure：是指在函式內部返回另一個函式時，內部函式可以「記住」外部函式的變數，即使外部函式已經執行完畢。
```js
// 使用閉包生成函式
function getAPIURL(base) {
    return function (endpoint) {
        return base + "/" + endpoint;
    };
}

// 基礎 URL 設定
let getRemoteAPI = getAPIURL("https://myapp.com");
console.log(getRemoteAPI("user/config")); // 輸出：https://myapp.com/user/config
```
- 函數柯里化 (Currying)：將一個需要多個參數的函式，拆分成一系列只接受單一參數的函式，逐步傳遞參數來完成最終計算。
```js
// 柯里化的函式
const getAPIURL = base => endpoint => `${base}/${endpoint}`;

// 固定基礎 URL
let getRemoteAPI = getAPIURL("https://myapp.com");
console.log(getRemoteAPI("user/config")); // 輸出：https://myapp.com/user/config
console.log(getRemoteAPI("products/list")); // 輸出：https://myapp.com/products/list
```
![upgit_20241126_1732603338.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241126_1732603338.png)



### 4.2. 立即執行函式(Immediately Invoked Function, IIFE)
- IIFE(Immediately Invoked Function)是一種在定義完後立即執行的函式。
- 不需要顯式呼叫，函式會自動執行一次。
- IIFE 的優點
	- 防止汙染全域變數：變數作用域被封裝在函式內，不會影響全域範圍。
	- 適合一次性運算：適用於僅需執行一次的初始化或計算邏輯，簡化代碼結構。
	- 立即求值：如果函式有回傳值，會立即返回並賦值給變數。
```js
var myArray = ["Yuri", "Zoe"];
const getResult = (function () {
	var myArray = [1, 2, 3, 4, 5, 6, 7];
	return myArray.join("");
})();

console.log(getResult, myArray); // 1234567 ['Yuri', 'Zoe']
```

## 5. 物件導向基本概念：
- 物件 (Object)：代表生活中的事物，由 屬性 (Property) 和 方法 (Method) 組成。
	- 汽車是一個物件，包含品牌 (屬性) 和啟動 (方法)。
- 屬性 (Property)：描述物件的特徵或狀態。
	- 汽車的顏色、大小等。
- 方法 (Method)：描述物件可以執行的行為或操作。
	- 汽車的發動、停止、加速等動作。
- 事件 (Event)：特定情況下物件的反應，例如按下按鈕觸發某動作。
	- 汽車的加速事件 (accelerate)。
### 5.1. 類別與物件的關係
- 類別 (Class)：定義物件的模板或藍圖，用於創建具相同屬性和方法的物件。
	- Car 類別可以用來創建 Toyota 和 Tesla 等物件。
- 物件 (Object)：類別的實例化結果。
![upgit_20241024_1729761090.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241024_1729761090.png)



### 5.2. 建立物件的兩種方式

#### 5.2.1. 使用實體方式 (Object Literal)
- 語法簡單直觀，適合快速建立物件。
- 直接使用花括號 {} 定義物件及其屬性與方法。
```js
// 建立物件
let user = {
    name: "TA",
    age: 24,
    showMsg: function () {
        window.alert("Hi, 我是 " + this.name + "!");
    },
};

// 操作物件
user.age = 18;      // 修改屬性
delete user.age;    // 刪除屬性
console.log(user.name); // 輸出：TA
```

#### 5.2.2. 使用建構子方式 (Constructor Function)
- 適合建立結構相似的多個物件。
- 使用 new Object() 或自定義建構子函式進行建立。
```js
// 建立物件
let user = new Object();
user.name = "TA";
user.age = 23;
user.showMsg = function () {
    window.alert("Hi, 我是 " + this.name + "!");
};

// 呼叫方法
user.showMsg(); // 彈出訊息：Hi, 我是 TA!
```

### 5.3. 物件導向的四大特性 (OOP)
#### 5.3.1. 封裝 (Encapsulation)
- 將物件的屬性和方法封裝在內部，限制外部直接存取，提供物件的安全性。
- 使用 getter 和 setter 來間接存取或修改屬性。
```js
class User {
    #password; // 私有屬性
    constructor(name, password) {
        this.name = name;
        this.#password = password;
    }
    // Getter
    get password() {
        return "密碼是隱藏的！";
    }
    // Setter
    set password(newPassword) {
        this.#password = newPassword;
    }
}

let user = new User("TA", "12345");
console.log(user.password); // 輸出：密碼是隱藏的！
user.password = "67890";     // 更新密碼
```
#### 5.3.2. 繼承 (Inheritance)
- 子類別繼承父類別的屬性和方法，實現代碼重用。
- 使用 extends 關鍵字實現繼承。
```js
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
    start() {
        console.log(this.brand + " 啟動！");
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super(brand); // 呼叫父類別的建構子
        this.model = model;
    }
    drive() {
        console.log(this.brand + " " + this.model + " 正在行駛！");
    }
}

let myCar = new Car("Toyota", "Corolla");
myCar.start();  // 輸出：Toyota 啟動！
myCar.drive();  // 輸出：Toyota Corolla 正在行駛！
```
#### 5.3.3. 多型 (Polymorphism)
- 不同的物件可以用相同的方法呼叫，並根據物件的類型執行不同的行為。
- 可透過覆寫 (Override) 父類別的方法來實現。
```js
class Animal {
    speak() {
        console.log("動物發出聲音！");
    }
}

class Dog extends Animal {
    speak() {
        console.log("狗叫：汪汪！");
    }
}

class Cat extends Animal {
    speak() {
        console.log("貓叫：喵喵！");
    }
}

let animals = [new Dog(), new Cat(), new Animal()];
animals.forEach(animal => animal.speak());
// 輸出：
// 狗叫：汪汪！
// 貓叫：喵喵！
// 動物發出聲音！
```
#### 5.3.4. 抽象 (Abstraction)
- 將物件的核心功能對外暴露，隱藏不必要的細節。
- JavaScript 中可透過抽象類別或接口模擬抽象。
```js
class Shape {
    // 抽象方法 (子類必須實現)
    getArea() {
        throw new Error("子類必須實現 getArea 方法！");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

let myCircle = new Circle(5);
console.log(myCircle.getArea()); // 輸出：78.53981633974483
```


### 5.4. JavaScript中的三種物件模型：
- ECMAScript物件模型：基本語法與資料型別。
- DOM物件模型：針對 HTML 元素的操作。
- BOM物件模型：瀏覽器相關的物件，例如 `Window`、`Location`。



## 6. 內建物件
### 6.1. number物件
![upgit_20241024_1729768059.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241024_1729768059.png)

![upgit_20241024_1729768068.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241024_1729768068.png)

```js
////////// 常用屬性 //////////

// 表示 JavaScript 中數字型別能表示的最大值&最小值
console.log(Number.MAX_VALUE); // 輸出：約 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 輸出：約 5e-324
// Not-a-Number
console.log(Number.NaN); // 輸出：NaN
// 正無窮大和負無窮大
console.log(Number.POSITIVE_INFINITY); // 輸出：Infinity
console.log(Number.NEGATIVE_INFINITY); // 輸出：-Infinity

////////// 常用方法 //////////

// 判斷某個值是否為 NaN。
console.log(Number.isNaN(100)); // 輸出：false
console.log(Number.isNaN(NaN)); // 輸出：true
// 判斷某個值是否為有限數值（排除 Infinity 和 NaN）
console.log(Number.isFinite(100)); // 輸出：true
console.log(Number.isFinite(Infinity)); // 輸出：false
// 判斷某個值是否為整數
console.log(Number.isInteger(100)); // 輸出：true
// 將字串解析為浮點數
console.log(Number.parseFloat("1.8x")); // 輸出：1.8
// 將字串解析為整數
console.log(Number.parseInt("1.8x")); // 輸出：1
// 將數字轉換為指定小數位數的字串
let x = 123.456;
console.log(x.toFixed(2)); // 輸出：123.46

// 將數字轉換為字串
let x = 123.456;
console.log(x.toString()); // 輸出：123.456

```
### 6.2. string物件
![upgit_20241024_1729768723.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241024_1729768723.png)
```js
////////// 查詢與檢查 //////////
// indexOf(str[, start])：返回指定子字串 str 第一次出現的位置，若不存在則返回 -1。
let text = "Hello, world!";
console.log(text.indexOf("world")); // 輸出：7
console.log(text.indexOf("JavaScript")); // 輸出：-1

// startsWith(str[, start])：判斷字串是否以 str 開頭，返回布林值。
let text = "JavaScript";
console.log(text.startsWith("Java")); // 輸出：true
console.log(text.startsWith("Script")); // 輸出：false

// endsWith(str[, start])：判斷字串是否以 str 結尾，返回布林值。
let text = "JavaScript";
console.log(text.endsWith("Script")); // 輸出：true
console.log(text.endsWith("Java")); // 輸出：false

////////// 取部分字串 //////////
// slice(begin[, end])：提取從 begin 到 end-1 的字串。
let text = "Hello, world!";
console.log(text.slice(0, 5)); // 輸出：Hello
console.log(text.slice(-6)); // 輸出：world!

////////// 大小寫轉換 //////////
let text = "HELLO";
console.log(text.toLowerCase()); // 輸出：hello
console.log(text.toUpperCase()); // 輸出：HELLO

////////// 分割 //////////
// split(separator)： 根據指定分隔符將字串分割為陣列。
let text = "apple,banana,cherry";
console.log(text.split(",")); // 輸出：["apple", "banana", "cherry"]

////////// 組合 //////////
// concat(...str)：將多個字串拼接成一個字串。
let text1 = "Hello";
let text2 = "World";
console.log(text1.concat(", ", text2)); // 輸出：Hello, World

////////// 清除 //////////
// trim()： 移除字串前後的空白字元。
let text = "   Hello, World!   ";
console.log(text.trim()); // 輸出：Hello, World!
////////// 重複 //////////
// repeat(count)：將字串重複指定次數後返回新字串。
let text = "Ha";
console.log(text.repeat(3)); // 輸出：HaHaHa
```
### 6.3. Math物件
![upgit_20241024_1729768754.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241024_1729768754.png)

![upgit_20241024_1729768766.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241024_1729768766.png)

![upgit_20241024_1729768776.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241024_1729768776.png)

![upgit_20241024_1729768783.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241024_1729768783.png)

![upgit_20241024_1729768794.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241024_1729768794.png)

```js
////////// 常用屬性 //////////
console.log(Math.PI); // 輸出：3.141592653589793
console.log(Math.E); // 輸出：2.718281828459045

////////// 基本運算 //////////
console.log(Math.abs(-5)); // 返回數值的絕對值
console.log(Math.max(10, 20, 30)); // 返回參數中的最大值
console.log(Math.min(10, 20, 30)); // 返回參數中的最小值
console.log(Math.random()); // 返回一個介於 0 到 1 之間的隨機數（不包含 1）
console.log(Math.pow(2, 3)); // 返回 base 的 exponent 次方。

////////// 進位與捨去 //////////
console.log(Math.ceil(4.2)); // 無條件進位
console.log(Math.floor(4.8)); // 無條件捨去
console.log(Math.round(4.5)); // 四捨五入

////////// 平方根與指數 //////////
console.log(Math.sqrt(9)); // 輸出：3
console.log(Math.cbrt(27)); // 平方根。輸出：3
```

### 6.4. Date物件
![upgit_20241024_1729768822.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241024_1729768822.png)

```js
////////// 獲取日期與時間 //////////
let now = new Date();
console.log(now.getFullYear()); // 輸出：2024
console.log(now.getMonth()); // 輸出：10 (代表 11 月)
console.log(now.getDate()); // 返回當月的日期（1-31）
console.log(now.getDay()); // 返回星期幾（0-6，0 表示星期日）
console.log(now.getHours()); // 返回小時（0-23）
console.log(now.getMinutes()); //返回分鐘（0-59）
console.log(now.getSeconds()); // 返回秒數（0-59）

////////// 獲取時間戳與時區 //////////
console.log(now.getTime()); // 返回自 1970 年 1 月 1 日以來的毫秒數
```

### 6.5. Array物件
![upgit_20241024_1729768863.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241024_1729768863.png)

![upgit_20241024_1729768872.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241024_1729768872.png)

![upgit_20241024_1729768879.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241024_1729768879.png)

![upgit_20241024_1729768890.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241024_1729768890.png)

```js
////////// 基本操作 //////////
// 判斷 obj 是否為陣列，返回布林值。
console.log(Array.isArray([1, 2, 3])); // 輸出：true
console.log(Array.isArray("123")); // 輸出：false
// 返回指定元素 el 的第一個索引值，若不存在則返回 -1。
let arr = [1, 2, 3, 2];
console.log(arr.indexOf(2)); // 輸出：1

////////// 排序 //////////
let arr = [3, 1, 4];
console.log(arr.sort()); // 輸出：[1, 3, 4]
console.log(arr.sort((a, b) => b - a)); // 輸出：[4, 3, 1]
let arr = [1, 2, 3];
console.log(arr.reverse()); // 輸出：[3, 2, 1]

////////// 切割 //////////
let arr = [1, 2, 3, 4];
console.log(arr.slice(1, 3)); // 輸出：[2, 3]

////////// 新增與刪除 //////////
let arr = [1, 2];
arr.push(3); // [1, 2, 3]
console.log(arr.pop()); // 輸出：3
console.log(arr); // 輸出：[1, 2]

let arr = [1, 2, 3];
console.log(arr.shift()); // 刪除並返回陣列第一個元素。
console.log(arr); // 輸出：[2, 3]
arr.unshift(1); // 在陣列開頭新增元素，返回新陣列長度。
console.log(arr); // 輸出：[1, 2, 3]

////////// 其他操作 //////////
let arr = ["a", "b", "c"];
console.log(arr.join("-")); // 將陣列元素連接成字串

let arr1 = [1, 2];
let arr2 = [3, 4];
console.log(arr1.concat(arr2)); // 合併多個陣列，返回新陣列。
```

### 6.6. Error 物件與錯誤處理機制
```js
try{
	可能發生例外之敘述
}catch(exceptionVar){
	發生例外要執行的敘述
}finally{
	無論有無發生例外都會執行的敘述
}
```
- Error 物件常用屬性
	- `message`： 錯誤的簡短描述。
	- `name`： 錯誤名稱（如 `TypeError`、`ReferenceError`）。
	- `stack`： 錯誤的堆疊資訊（詳細的錯誤呼叫鏈路）。
```js
try {
    let arr = null;
    arr.push(1); // 會拋出錯誤
} catch (error) {
    console.log("錯誤名稱：" + error.name);       // 錯誤名稱：TypeError
    console.log("錯誤訊息：" + error.message);   // 錯誤訊息：Cannot read properties of null (reading 'push')
    console.log("錯誤堆疊：" + error.stack);     // 詳細錯誤堆疊資訊
}
```

## 7. 原型(Prototype)
- JavaScript 中，每個物件都有一個隱藏屬性 `[[Prototype]]`，指向另一個物件，稱為「原型」。
- 物件可以透過原型繼承屬性和方法。
### 7.1. 建構函式
- 在 JavaScript 中，如果你想要創建多個類似的物件，通常會使用「建構函式」(constructor function)。
```js
function Person(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
}
```
- 當你想要創建一個新物件時，可以使用 `new` 關鍵字，並且呼叫建構函式。
```js
const ta = new Person({
    name: "TA",
    age: 23,
});
console.log(ta); // 輸出 { name: "TA", age: 23 }
```
### 7.2. `prototype` 屬性
- 如果我們想要讓所有 `Person` 建構函式創建的物件共享一些方法或屬性，可以使用 `prototype` 屬性。所有由 `Person` 創建的物件都會共享這些方法。
```js
Person.prototype.introduce = function() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
};

// 所有由 `Person` 建構函式創建的物件都可以使用 `introduce` 方法：
ta.introduce(); // 輸出 "Hi, I'm TA and I'm 23 years old."
```
### 7.3. 擴展原型屬性
- 你可以在建構函式的 prototype 屬性上新增更多功能，讓所有物件共享：
```js
Person.prototype.legalAge = 18;
Person.prototype.commuteWay = function () {
    return this.age > this.legalAge ? "開車" : "走路";
};

const yuri = new Person({ name: "Yuri", age: 23 });
console.log(yuri.commuteWay()); // 輸出：開車
```














```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body></body>
    <script>
        // 建立一個prototype
        function Person(attributes) {
            this.name = attributes.name;
            this.age = attributes.age;
        }

        // 使用 new 關鍵字創建物件
        const Yuri = new Person({
            name: "Yuri",
            age: 23,
        });

        // 擴充 prototype 的屬性
        Person.prototype.legalAge = 18;
        Person.prototype.commuteWay = function () {
            return this.age > this.legalAge ? "開車" : "走路";
        };

        // 確認是否為同一個 prototype
        console.log(Object.getPrototypeOf(Yuri) === Person.prototype); // 應該輸出 true
        console.log(Yuri.commuteWay()); // 應該輸出 "開車" 或 "走路"
    </script>
</html>
```


## 8. 原型鏈 (Prototype Chain)
- 使用 `Object.create()`
```js
// 立一個基礎的物件作為最上層的原型
const baseProto = {
	species: "Human",
	sayHello: function () {
		console.log(`Hello, I'm a ${this.species}`);
	},
};

// 使用 Object.create() 繼承 baseProto
const personProto = Object.create(baseProto);
personProto.name = "Alice";
personProto.introduce = function () {
	console.log(`Hi, my name is ${this.name}`);
};

// 進一步創建新的物件，並讓它繼承 personProto，形成一條更長的原型鏈。
const student = Object.create(personProto);
student.grade = "A";
student.study = function () {
	console.log(`${this.name} is studying.`);
};

// 用 student 來呼叫原型鏈中各層的屬性和方法：
student.name = "Bob"; // 設定 student 的 name 屬性
student.introduce(); // 輸出: Hi, my name is Bob
student.sayHello(); // 輸出: Hello, I'm a Human
student.study(); // 輸出: Bob is studying.
console.log(student.grade); // 輸出: A
```

## 9. this
### 9.1. 執行環境的生命週期
- 創造階段 (Creation Phase)：
    - 分配記憶體空間給變數和函式。
    - 進行變數提升 (Hoisting)。
    - 建立執行環境所需的資料結構。
    - 將函式放入呼叫堆疊 (Call Stack)，等待執行。
- 執行階段 (Execution Phase)：
    - 逐行執行程式碼。
    - 透過 `this` 和作用域鏈，存取所需的變數和函式。
    - 當函式執行完成或遇到 `return`，從堆疊中移除執行環境。

### 9.2. 執行環境的分類
1. 全域執行環境 (Global Execution Context)：
    - 在程式啟動時首先建立的執行環境。
    - 負責管理全域變數和函式，並將 `this` 綁定到全域物件（瀏覽器中是 `window`，Node.js 中是 `global`）。
    - 當程式中呼叫函式時，會建立新的執行環境並放入呼叫堆疊中。
2. 函式/局部執行環境 (Function/Local Execution Context)：
    - 每當呼叫一個函式時，會為該函式建立一個新的執行環境。
    - `this` 的指向會根據呼叫方式而定，不像全域環境中那樣固定。
```js
const callJoe = () => {
	console.log("hello, i am joe");
};

const callDava = () => {
	callJoe();
	console.log("hello, i am Dave");
};
console.log("hello global");
callDava();
console.log("godbye scope");

// hello global
// hello, i am joe
// hello, i am Dave
// godbye scope
```

- this是透過物建中的建構子產生，this會指向建構子。
- 當要存取或執行自己的成員時,就可以透過this來進行。
```js
class Book {
	constructor(name) {
		// 建構子
		this.name = name;
	}
	getName() {
		return "書名" + this.name;
	}
}

let mtBook = new Book("小王子");
console.log(mtBook.getName()); // 書名小王子
```

- 不過在JavaScript中,this關鍵字會隨著執行環境、特殊的語法、函式呼叫的方式等會有變動。
- 這種動態決定函式執行環境中this對象,我們通常叫做「綁定」(binding)。

### 9.3. 預設綁定(Default binding)
- 在全域宣告的函式,this會預設指向全域物件(可能是瀏覽器中的window,或是Node.js中的global)。
```js
function getThis1() {
	console.log("[全域] 函式陳述式 this 指向:", this);
}

const getThis2 = function () {
	console.log("[全域] 函式表達式 this 指向:", this);
};

const getThis3 = () => console.log("[全域] 箭頭函式 this 指向:", this);

getThis1(); // [全域] 函式陳述式 this 指向: Window
getThis2(); // [全域] 函式表達式 this 指向: Window
getThis3(); // [全域] 箭頭函式 this 指向: Window
```

### 9.4. 隱式綁定(Implicit binding)
- 物件中如果有方法實作，當呼叫方法時,this會指向物件本身。
- 箭頭函式有自己一套的綁定規則,並不符合隱式綁定。
- 箭頭函式的this對象，主要是看上一層的作用域指向的this對象。

```js
const book = {
	name: "小王子",
	getThis1: function () {
		console.log("[物件] inline函式 this:", this);
	},
};

book.getThis1(); // [物件] inline函式 this: {name: '小王子' ...}
```

### 9.5. 顯式綁定(Explicit binding)

#### 9.5.1. 綁定函數(bind function)
- 在 JavaScript 中，當我們希望函式的 `this` 值被綁定到特定對象，或者想在呼叫函式時自動傳入一些固定的參數。
- `bind` 可以讓你創建一個新的函式，這個函式的 `this` 值被綁定到特定對象，並且可以預設某些參數。
- `function.bind(thisValue, arg1, arg2, ..., argN);` 
	- thisValue：要綁定的 `this` 對象，必須指定。
	- arg1, arg2, ..., argN：可選的參數列表
```js
// TODO: 範例1
const my0bject = {
    x: 10,
    addX: function (valuel, value2) {
        return value1 + value2 + this.x;
    },
};
//透過 bind 建立新的函式
const addXFunction = my0bject.addX.bind({ x: 3 }, 1, 2);

console.log(myObject.addX(1, 2)); // 13 ( this fld my0bject )
console.log(addXFunction()); // 6
```
```js
// TODO: 範例2
function add(a, b) {
    return a + b + this.offset;
}
const calculator = { offset: 10 };

// 使用 bind 將 this 綁定到 calculator，並傳入預設參數
const boundAdd = add.bind(calculator, 5); // 預設 a = 5
console.log(boundAdd(3)); // 結果: 5 + 3 + 10 = 18
```

```js
// TODO: 範例3
const button = {
    label: "Click Me",
    handleClick: function () {
        console.log(`Button label is: ${this.label}`);
    },
};

// 綁定到 DOM 按鈕點擊事件，預設 this 指向DOM元素(#myButton)，而不是 button 物件。
document.querySelector("#myButton").addEventListener("click", button.handleClick);
// 結果: Button label is: undefined (因為 this 指向 window)

// 使用 bind 將 this 固定到 button
document.querySelector("#myButton").addEventListener("click", button.handleClick.bind(button));
// 結果: Button label is: Click Me
```




#### 9.5.2. 呼叫函數(call function)
- `call` 是 JavaScript 中的一個函式方法，用於改變函式內部的 `this` 指向，並立即執行該函式。
- 與 `bind` 不同的是，`call` 不會返回一個新的函式，而是直接執行。
```js
const myObject = {
	x: 10,
	addX: function (value1, value2) {
		return value1 + value2 + this.x;
	},
};

// 使用原始函式
const result01 = myObject.addX(1, 2);
console.log(result01); // 應輸出：13 (1 + 2 + 10)

// 透過 call 修改 this 指向並執行函式
const result02 = myObject.addX.call({ x: 3 }, 1, 2);
console.log(result02); // 應輸出：6 (1 + 2 + 3)
```

#### 9.5.3. 呼叫函數(apply function)
- 跟call依樣，差別是後面的參數要放到陣列裡。
```js
const myObject = {
	x: 10,
	addX: function (value1, value2) {
		return value1 + value2 + this.x;
	},
};

// 使用原始函式
const result01 = myObject.addX(1, 2);
console.log(result01); // 應輸出：13 (1 + 2 + 10)

// 透過 call 修改 this 指向並執行函式
const result02 = myObject.addX.apply({ x: 3 }, [1, 2]);
console.log(result02); // 應輸出：6 (1 + 2 + 3)
```

## 10. 模組(module) -- ES Module(MSM)
![upgit_20241103_1730625196.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241103_1730625196.png)

```js
// TODO: 導出：coreLogic.js
export const someData = { key: "value" };
export function someFn(param) {
    return param + 1;
}
```
```js
// TODO: 導入：dataProcesser.js
import { someData, someFn } from "./coreLogic.js";

const newData = { ...someData, extraKey: "extraValue" };
console.log(someFn(newData.key));
```


## 11. 文件物件模型(Document Object Model、DOM)
- DOM 是一種由 W3C 制定的應用程式介面，提供操作 HTML、XML 文件結構的方式。
- DOM 將 HTML 結構轉換為樹狀結構 (DOM 樹)，讓程式可以使用 JavaScript 存取與操作文件中的物件 (如元素、屬性)。
- 每個 HTML 標籤代表一個物件，物件具有屬性、方法和事件，可以用 JavaScript 進行操作與變更。

![upgit_20241024_1729769603.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241024_1729769603.png)

![upgit_20241024_1729769629.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241024_1729769629.png)

## 12. 取得元素節點
### 12.1. getElementByld()
- 根據id屬性值取得元素
![upgit_20241024_1729770517.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241024_1729770517.png)

![upgit_20241024_1729770540.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241024_1729770540.png)

### 12.2. getElementsByName() 
- 根據name屬性值取得元素：
	- 通常用來取得input、select等表單元素，選擇鈕(radio)、核取方塊(表單元素)或下拉式清單都是有數個選項，而且每個選項的name屬性值均相同，此時取得的就是一群元素，而不是單一元素。
	- NodeList集合常用的成員如下:
		- length:這個屬性表示NodeList集合的元素個數。
		- item(i):這個方法用來取得第i+1個元素，i的值為0~length-1。
![upgit_20241024_1729772057.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241024_1729772057.png)

### 12.3. getElementsByTagName()
- 根據標籤名稱取得元素：
	- length:這個屬性表示NodeList集合的元素個數。
	- item(i):這個方法用來取得第i+1個元素，i的值為0~length-1。
![upgit_20241024_1729772437.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241024_1729772437.png)


### 12.4. getElementsByClassName()
- 根據類別名稱取得元素
![upgit_20241024_1729772559.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241024_1729772559.png)

### 12.5. querySelector()/querySelectorAll()
- 根據CSS選擇器取得元素/所有元素。
- 較為推薦使用。
![upgit_20241026_1729946978.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241026_1729946978.png)

## 13. 走訪節點
- 也可以先取得DOM樹中的某個節點，然後再透過該節點和下列幾個屬性去走訪其它節點。
- 這些屬性是read only的，不能用來變更節點。
- parentNode：目前節點的父節點
- previousSibling：目前節點的前一個兄弟節點。
- nextSibling:：目前節點的後一個兄弟節點。
- childNodes：目前節點的子節點(可能有零個、一個或多個)。
- firstChild：目前節點的第一個子節點。
- lastChild：目前節點的最後一個子節點。
![upgit_20241026_1729947729.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241026_1729947729.png)

## 14. 取得/設定元素的屬性值與文字內容

### 14.1. 取得屬性值
- hasAttribute()：會檢查參數指定的屬性是否存在。
- getAttribute()：根據參數指定的屬性名稱去取得屬性值。
- setAttribute()：根據參數指定的屬性名稱與屬性根據參數指定的屬性名稱與屬性。如果重複就取代掉。
- removeAttribute()：會移除參數指定的屬性。
![upgit_20241202_1733120866.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241202_1733120866.png)

### 14.2. 取得文字內容
- textContent()：
	- 返回或設置元素內所有的純文字內容，不包含任何 HTML 標籤。
	- 執行效率高於 `innerText`（因為它直接操作 DOM 節點，忽略樣式和渲染）。
	- 如果元素的 CSS 被設置為 `display: none;`， `textContent` 還是可以讀到。
```js
let element = document.querySelector(".example");
console.log(element.textContent); // 取得所有純文字
element.textContent = "新文字"; // 設置新的純文字內容
```
- innerText()：
	- 返回或設置元素內的純文字內容，但它會受 CSS 樣式影響。
	- 執行效率較低，因為它需要重新渲染和解析樣式。
	- 如果元素的 CSS 被設置為 `display: none;`， `textContent` 還是可以讀到。
```js
let element = document.querySelector(".example");
console.log(element.innerText); // 取得可見文字
element.innerText = "新文字"; // 設置新的可見文字
```
- innerHTML()：
	- 會解析並返回 HTML 標籤，因此適合操作包含 HTML 的內容。
```js
let element = document.querySelector(".example");
console.log(element.innerHTML); // 取得 HTML 結構和內容
element.innerHTML = "<strong>新內容</strong>"; // 設置新的 HTML 結構
```
## 15. 新增節點
![upgit_20241030_1730276902.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241030_1730276902.png)

## 16. 更新節點
![upgit_20241030_1730277473.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241030_1730277473.png)


## 17. 移除節點
![upgit_20241030_1730277312.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241030_1730277312.png)


## 18. 存取表單內容
### 18.1. 取得文字欄
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>互動網頁設計</title>
    </head>
    <style>
        * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
        }
    </style>
    <body>
        <form>
            <label for="name">姓名</label>
            <input type="text" id="name" size="20" />
            <br />
            <label for="password">密碼</label>
            <input type="password" id="password" size="20" />
            <br />
            <button type="submit" onclick="showResult()">提交</button>
        </form>
    </body>
    <script>
        function showResult() {
            let name = document.querySelector("#name").value;
            let password = document.querySelector("#password").value;
            document.write(`name: ${name}`);
            document.write(`<br>`);
            document.write(`password: ${password}`);
        }
    </script>
</html>
```

### 18.2. 取得radiobox的值
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>互動網頁設計</title>
    </head>
    <style>
        * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
        }
    </style>
    <body>
        <form>
            <p>喜歡的甜點</p>
            <input type="radio" name="desert" value="馬卡龍" />馬卡龍
            <input type="radio" name="desert" value="舒芙雷" />舒芙雷
            <input type="radio" name="desert" value="蘋果派" />蘋果派
            <input type="radio" name="desert" value="水果塔" />水果塔
            <button type="submit" onclick="showResult()">submit</button>
        </form>
    </body>
    <script>
        function showResult() {
            event.preventDefault(); // 防止表單提交刷新頁面
            let desert = document.getElementsByName("desert");
            for (let i = 0; i < desert.length; i++) {
                if (desert[i].checked) {
                    console.log(desert[i].value);
                }
            }
        }
    </script>
</html>
```
### 18.3. 取得checkbox的值
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>互動網頁設計</title>
    </head>
    <style>
        * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
        }
    </style>
    <body>
        <form>
            <p>喜歡的甜點</p>
            <input type="checkbox" name="desert" value="馬卡龍" />馬卡龍
            <input type="checkbox" name="desert" value="舒芙雷" />舒芙雷
            <input type="checkbox" name="desert" value="蘋果派" />蘋果派
            <input type="checkbox" name="desert" value="水果塔" />水果塔
            <button type="submit" onclick="showResult()">submit</button>
        </form>
    </body>
    <script>
        function showResult() {
            event.preventDefault(); // 防止表單提交刷新頁面
            let desert = document.getElementsByName("desert");
            for (let i = 0; i < desert.length; i++) {
                if (desert[i].checked) {
                    console.log(desert[i].value);
                }
            }
        }
    </script>
</html>
```

### 18.4. 取得selected的值
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>互動網頁設計</title>
    </head>
    <style>
        * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
        }
    </style>
    <body>
        <form>
            <label for="desert">喜歡的甜點(可複選)</label>
            <select name="desert" id="desert" multiple>
                <option value=""></option>
                <option value="馬卡龍">馬卡龍</option>
                <option value="舒芙雷">舒芙雷</option>
                <option value="蘋果派">蘋果派</option>
                <option value="水果塔">水果塔</option>
            </select>

            <button type="submit" onclick="showResult()">submit</button>
        </form>
    </body>
    <script>
        function showResult() {
            event.preventDefault(); // 防止表單提交刷新頁面
            let desert = document.querySelector("#desert");
            for (let i = 0; i < desert.length; i++) {
                if (desert[i].selected) {
                    console.log(desert[i].value);
                }
            }
        }
    </script>
</html>

```
## 19. 操作CSS
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>互動網頁設計</title>
    </head>
    <style>
        * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
        }
    </style>
    <body>
        <h1 id="msg" onmouseover="f1()" onmouseout="f2()">我的夢想就是不上班</h1>
    </body>
    <script>
        function f1() {
            let msg = document.querySelector("#msg");
            msg.style.color = "white";
            msg.style.backgroundColor = "red";
        }

        function f2() {
            let msg = document.querySelector("#msg");
            msg.style.color = "";
            msg.style.backgroundColor = "";
        }
    </script>
</html>
```

## 20. 瀏覽器物件模型(BOM)
![upgit_20241030_1730300810.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241030_1730300810.png)

- 瀏覽器物件模型 (BOM) 是 JavaScript 用來與瀏覽器互動的一組 API
- 提供對瀏覽器環境的控制和操作能力。
- BOM 不依賴於 HTML 結構，而是專注於瀏覽器的功能層面，例如瀏覽器窗口、導航歷史、螢幕資訊等。

### 20.1. 核心特點
- 以 window 作為全域物件：window 是全域的環境，包含瀏覽器相關的功能與屬性。
	- 例如，警示對話框 (alert) 或定時器功能 (setTimeout) 都是 BOM 提供的，並由 window 物件管理。
- BOM 的功能專注於瀏覽器層級，無需直接依賴於 HTML 或 DOM 結構。
- 操作瀏覽器環境：BOM 可以用來控制瀏覽器的視窗行為，例如導航到其他頁面、控制瀏覽記錄、檢測螢幕尺寸等。
- 跨瀏覽器的支援：雖然不同瀏覽器對 BOM 的部分功能支持可能會有差異，但核心功能（如 alert, location, navigator）在大多數瀏覽器中是通用的。







## 21. window物件
- 代表瀏覽器視窗或標籤頁。
![upgit_20241030_1730300885.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241030_1730300885.png)

![upgit_20241030_1730300907.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241030_1730300907.png)

### 21.1. 常用 window 屬性
- document：指向網頁的 Document 物件。
```js
console.log(window.document.title); // 獲取當前網頁標題
```
- location：提供目前頁面的 URL 資訊。
```js
console.log(window.location.href); // 獲取完整的 URL
window.location.href = "https://example.com"; // 跳轉到新頁面
```
- navigator：獲取瀏覽器相關資訊，例如用戶代理字串。
```js
console.log(window.navigator.userAgent); // 獲取瀏覽器的用戶代理字串
```
- history：訪問瀏覽器的歷史記錄。
```js
window.history.back(); // 回到上一頁
window.history.forward(); // 前進到下一頁
```
- innerWidth 和 innerHeight：獲取瀏覽器視窗的寬度與高度。
```js
console.log(window.innerWidth);  // 瀏覽器視窗寬度
console.log(window.innerHeight); // 瀏覽器視窗高度
```
### 21.2. 常用 window方法

- alert()：顯示一個警告框。
```js
window.alert("歡迎來到本網站！");
```
- prompt()：顯示一個輸入框，允許用戶輸入文字。
```js
let name = window.prompt("請輸入你的名字：");
console.log(`歡迎, ${name}!`);
```
- confirm()：顯示確認對話框。
```js
let isConfirmed = window.confirm("是否確定刪除資料？");
console.log(isConfirmed ? "已刪除" : "取消操作");
```
- setTimeout() 和 clearTimeout()：延遲執行某個函數。
```js
let timer = window.setTimeout(() => {
    console.log("延遲 3 秒執行！");
}, 3000);
window.clearTimeout(timer); // 清除延遲
```
- setInterval() 和 clearInterval()：重複執行某個函數。
```js
let interval = window.setInterval(() => {
    console.log("每隔 1 秒執行一次！");
}, 1000);
window.clearInterval(interval); // 停止重複執行
```
- open()：打開一個新的瀏覽器窗口。
```js
let newWindow = window.open("https://example.com", "_blank", "width=600,height=400");
```
- scrollTo()：滾動到特定位置。
```js
window.scrollTo(0, 500); // 滾動到 Y 軸位置 500
```

## 22. Location物件
- 包含目前開啟網頁的URL相關資訊。
![upgit_20241031_1730367689.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241031_1730367689.png)

![upgit_20241031_1730367699.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241031_1730367699.png)

### 22.1. 常用 Location 屬性
- href：完整的 URL，可以獲取或設定當前頁面的網址。
```js
console.log(location.href); // 獲取完整的 URL
location.href = "https://example.com"; // 跳轉到新頁面
```
- search：URL 中的查詢字串部分（`?` 後面的內容）。
```js
console.log(location.search); // 獲取 "?q=123" 部分
```
- hash：URL 中的片段識別符（`#` 後面的部分）。
```js
console.log(location.hash); // 獲取 "#section1" 部分
location.hash = "#newSection"; // 將頁面滾動到新片段
```
- host：主機名稱和端口號。
```js
console.log(location.host); // 例如 "example.com:8080"
```
- pathname：網址的路徑部分（不含主機和查詢字串）。
```js
console.log(location.pathname); // 獲取 "/docs/index.html"
```
- protocol：URL 的協議部分（如 http: 或 https:）。
```js
console.log(location.protocol); // 獲取 "https:"
```
### 22.2. 常用 Location 方法
- reload()：重新載入當前開啟的網頁，效果相當於點選瀏覽器的重新整理按鈕。
```js
location.reload();
```
- replace(url)：導航到指定的 `url`，並取代當前網頁在瀏覽器記錄中的位置，無法回到前一頁。
```js
location.replace("https://example.com");
```

- assign(url)：導航到指定的 `url`，效果類似於 `href` 屬性的修改，可回到前一頁。
```js
location.assign("https://example.com");
```
- toString()：將當前的網址（`location.href`）轉換成字串格式。
```js
console.log(location.toString());
```




## 23. Navigator物件
- 包含瀏覽器相關描述與系統資訊。
![upgit_20241031_1730368618.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241031_1730368618.png)
### 23.1. 常用 Navigator 屬性
- cookieEnabled：檢查瀏覽器是否啟用 Cookie 功能。
```js
console.log(navigator.cookieEnabled); // true 或 false
```
- geolocation：提供訪問地理位置的功能，常用於基於位置的應用（例如地圖或導航）。
```js
navigator.geolocation.getCurrentPosition(position => {
    console.log(position.coords.latitude, position.coords.longitude);
});
```
- language：返回使用者的瀏覽器語言（如 "zh-TW" 表示繁體中文）。
```js
console.log(navigator.language); // 例如 "zh-TW"
```
- userAgent：返回瀏覽器的詳細資訊，用於檢測使用的裝置或系統類型。
```js
console.log(navigator.userAgent);
// 例如 "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36..."
```
### 23.2. 常用 Navigator 方法
- `getCurrentPosition()`（來自 `geolocation` 屬性）：獲取當前的地理位置。
```js
navigator.geolocation.getCurrentPosition(position => {
    console.log("緯度: " + position.coords.latitude);
    console.log("經度: " + position.coords.longitude);
});
```
## 24. History物件
- 包含瀏覽器的瀏覽歷程紀錄。
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>互動網頁設計</title>
    </head>
    <body>
        <a href="javascript: history.back();">上一頁</a>
        <a href="javascript: history.forward();">下一頁</a>
        <br />
    </body>
    <script>
        document.write("瀏覽歷程記錄：" + history.length);
    </script>
</html>

```
## 25. Screen物件
- 取得螢幕資訊，並調整網頁內容
![upgit_20241031_1730369514.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241031_1730369514.png)

### 25.1. 常用 Screen 屬性
- width/height：返回螢幕的寬/高度（以像素為單位）。
```js
console.log("螢幕寬度: " + screen.width + " 像素");
console.log("螢幕高度: " + screen.height + " 像素");
```

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>互動網頁設計</title>
    </head>
    <body></body>
    <script>
        document.write("height 屬性的值為 " + screen.height + "<br>");
        document.write("width 屬性的值為 " + screen.width + "<br>");
        document.write("availHeight 屬性的值為 " + screen.availHeight + "<br>");
        document.write("availWidth 屬性的值為 " + screen.availWidth + "<br>");
        document.write("colorDepth 屬性的值為 " + screen.colorDepth + "<br>");
    </script>
</html>
```

## 26. 陣列(array)
- 基本操作
```js
// 宣告陣列
let arr1 = [1, 2, 3];
console.log(arr1);

// 取值
let temp = arr1[0];
console.log(temp);

// 查詢
let man = { name: "joe" };
let arr2 = ["yuri", man, 23];
console.log(arr2.indexOf(23));

// 是否含有該元素
// includes(target, position)
console.log(arr2.includes("yuri"));
console.log(arr2.includes("yuri", 2));

// 檢查每個元素(條件為AND)
// every(executor, thisValue)
let arr3 = [3, 12, 24, 72];
console.log(
    "every(executor, thisValue)",
    arr3.every((value) => {
        return value % 2 === 0; // 加上 return
    })
);

// 檢查每個元素(條件為OR)
// some(executor, thisValue)
console.log(
    "some(executor, thisValue)",
    arr3.some((value) => {
        return value % 2 === 0; // 加上 return
    })
);

// find：尋找第一個符合元素(沒有回傳undefined)
const inventories = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 3 },
    { name: "cherries", quantity: 5 },
    { name: "tomatoes", quantity: 3 },
];

console.log(
    inventories.find((inventories) => {
        return (inventories.quantity = 3);
    })
);

// findIndex：跟find依樣，但是回傳index
console.log(
    inventories.findIndex((inventories) => {
        return (inventories.quantity = 3);
    })
);

// filter：尋找所有符合元素(沒有回傳undefined)
console.log(
    inventories.filter((inventories) => {
        return (inventories.quantity = 3);
    })
);

// 移除最後一個元素
let arr4 = [1, 2, 3];
console.log(arr4.pop(), arr4);
arr4.push(4);
console.log(arr4);

// 切片
console.log(arr4.slice(1, 3));

// 取代
console.log(arr4.length);
arr4.fill("AAA", 0, 2); // 取代index=0, 1
console.log(arr4);

// 反轉
console.log(arr4.reverse());

// 合併
console.log(arr4.concat(arr1));

// 元素合併
console.log(arr4.join(""));

// 遍歷
const candidates = [
    { name: "Ann", seniority: 8, englishNative: false },
    { name: "Bob", seniority: 5, englishNative: false },
    { name: "Joe", seniority: 7, englishNative: true },
];

let score = candidates.map((value, index) => {
    let temp = value.englishNative ? -10 : 10;
    return value.seniority * 10 + temp;
});
console.log(score);

// reduce 方法是 JavaScript 中用來對陣列的每一個元素進行累加或聚合操作的一種方法。
// 通常用於將陣列縮減為單一的值，像是計算總和、統計數據等。
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum); // 輸出: 10

// keys()、values()、entries() ->返回是一個跌帶物件
let arr5 = ["a", "b", "c"];
const keyIterator = arr5.keys();
const valIterator = arr5.values();
const entIterator = arr5.entries();
for (i of keyIterator) {
    console.log(i);
}
```

- 陣列的解構賦值
```js
// 陣列的解構賦值
let [name1, name2, name3] = ["Yuri", "Zoe", "Bob"];
console.log(name1, name2, name3); // Yuri Zoe Bob

[name1, name2, ...otherNames] = ["Yuri", "Zoe", "Bob", "Sam", "Ann", "Joe"];
console.log(name1, name2, otherNames); // Yuri Zoe ['Bob', 'Sam', 'Ann', 'Joe']
```

## 27. 事件處理
### 27.1. 事件驅動(Event Driven)
- Windows 作業系統中的視窗會持續監控使用者的各種事件，如視窗打開、關閉、調整大小、移動、輸入等。系統會根據接收到的事件訊息，將其傳遞給對應的視窗處理。
- 事件觸發：JavaScript 等瀏覽器端 Script 採用事件驅動模式，監控 HTML 文件或 HTML 元素發生的事件，如：
	- load事件：網頁內容載入完成。
	- unload事件：網頁內容卸載。
	- 點擊事件：當使用者在 HTML 元素上點擊時觸發。
- 事件觸發後，事件驅動模式會依次執行事件，讓程式等待執行完成後再處理後續事件。

### 27.2. 事件處理模型
- 事件捕捉 (Event Capturing)：
	- 當事件觸發時，從最外層的父元素開始捕捉，逐層向內直到觸發事件的元素。
- 事件冒泡 (Event Bubbling)：
	- 事件由觸發的元素開始，逐層向上冒泡至最外層的父元素。
![upgit_20241108_1731048567.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241108_1731048567.png)
![upgit_20241108_1731048572.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241108_1731048572.png)

## 28. 事件類型
### 28.1. 使用者介面(UI)事件
- 與使用者界面變動有關的事件。
- `resize`：當視窗大小調整時觸發。
```js
window.addEventListener("resize", () => {
    console.log(`新視窗大小：寬 ${window.innerWidth}, 高 ${window.innerHeight}`);
});
```
- `scroll`：當視窗或元素被拖動時觸發。
```js
window.addEventListener("scroll", () => {
    console.log(`目前滾動位置：${window.scrollY}`);
});
```
- `error`：當載入錯誤時觸發。
```js
window.addEventListener("error", (e) => {
    console.log("載入錯誤！", e.message);
});
```
- `load`：當瀏覽器載入網頁內容完成時觸發。
```js
window.addEventListener("load", () => {
    console.log("頁面已載入完成！");
});
```
- `DOMContentLoaded`：HTML 文件載入完成時觸發，不包括樣式表或圖片(所以會比`load`更快)。
```js
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM 已完全載入！");
});
```
- `beforeunload`：當網頁即將卸載時觸發(主要用於防止用戶意外關閉或離開頁面)。
```js
window.addEventListener("beforeunload", (event) => {
    event.preventDefault();
    event.returnValue = ""; // 必須設置，否則某些瀏覽器不會提示
});
```
- `unload`：當瀏覽器卸載網頁內容時觸發(使用頻率較低，因為 `beforeunload` 更符合大多數需求)。
```js
window.addEventListener("unload", () => {
    console.log("頁面即將卸載！");
});
```






### 28.2. 鍵盤事件
- 與使用者鍵盤操作有關的事件。
- `keydown`：當按下某個鍵時觸發。
- `keyup`：當釋放某個鍵時觸發。
- `keypress`：當按下或按住鍵時觸發。
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>互動網頁設計</title>
    </head>
    <body>
        <form action="">
            <label for="achar">請輸入字元</label>
            <input type="text" id="achar" size="10" />
            <br />
            <p id="msg"></p>
        </form>
    </body>
    <script>
        achar = document.querySelector("#achar");
        achar.addEventListener("keydown", (e) => {
            msg = document.querySelector("#msg");
            msg.textContent = "按鍵：" + e.key;
        });
    </script>
</html>
```
### 28.3. 滑鼠事件
- 與使用者滑鼠操作有關的事件。
- `click`：當按下滑鼠按鍵並釋放時觸發。
- `dblclick`：當按下兩次滑鼠按鍵時觸發。
- `mousedown`、`mouseup`：當按下或釋放滑鼠按鍵時觸發。
- `mousemove`：當滑鼠在元素上移動時觸發。
- `mouseover`、`mouseout`：當滑鼠移動或進出元素時觸發。
- `mousewheel`：當使用者滾動滑鼠滾輪時觸發。
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>互動網頁設計</title>
    </head>
    <body>
        <img src="./img/角色-吉伊卡哇.png" alt="" id="fig" />
    </body>
    <script>
        fig = document.querySelector("#fig");
        fig.addEventListener("mouseover", (e) => {
            fig.src = "./img/角色-兔兔.png";
        });
        fig.addEventListener("mouseout", (e) => {
            fig.src = "./img/角色-吉伊卡哇.png";
        });
    </script>
</html>
```

### 28.4. 表單事件：
- 與表單操作有關的事件。
- `input`：當使用者在 `<input>`、`<select>` 等表單元素中輸入時觸發。
- `change`：當表單元素值變更時觸發。
- `submit`：當提交表單時觸發。
- `reset`：當重設表單時觸發。
- `focus`、`blur`：當元素獲得或失去焦點時觸發。
- `cut`、`copy`、`paste`：當剪切、複製或粘貼內容時觸發。

### 28.5. 焦點事件
- 與元素焦點有關的事件。
- `focus`、`focusin`：元素獲取焦點時觸發。
- `blur`、`focusout`：元素失去焦點時觸發。
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>互動網頁設計</title>
    </head>
    <body>
        <form action="">
            <label for="num">會員編號</label>
            <input type="text" size="20" id="num" />
            <br />
            <p id="msg"></p>
            <button type="submit">提交</button>
        </form>
    </body>
    <script>
        num = document.querySelector("#num");
        msg = document.querySelector("#msg");
        num.addEventListener("focus", () => {
            msg.textContent = "要記得輸入8位";
        });

        num.addEventListener("blur", function () {
            if (this.value.length === 8) {
                msg.textContent = "";
            } else {
                msg.textContent = "我跟你說要輸入8個字";
            }
        });
    </script>
</html>
```

## 29. 定義事件處理/監聽
- 要先確認
	- 由哪個元件觸發
	- 要觸發哪個事件
	- 觸發的事件要繫結哪個處理/監聽事件
### 29.1. 第一種方式：利用HTML元素的事件屬性設定
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>互動網頁設計</title>
    </head>
    <body>
        <button onclick="f()">顯示訊息</button>
    </body>
    <script>
        function f() {
            window.alert("hello world");
        }
    </script>
</html>
```
### 29.2. 第二種方式：DOM Level事件監聽程式
- 主要就是使用addEventListener()
- 優點是，可以針對同一個物件去設定多個處理程式。
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>互動網頁設計</title>
    </head>
    <body>
        <button id="btn">顯示訊息</button>
    </body>
    <script>
        let btn = document.querySelector("#btn");
        btn.addEventListener("click", () => {
            window.alert("hello world01");
        });

        btn.addEventListener("click", () => {
            window.alert("hello world02");
        });

        // 移除監聽
        btn.removeEventListener("click", () => {
            window.alert("hello world02");
        });
    </script>
</html>

```
### 29.3. Event物件
![upgit_20241031_1730379747.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241031_1730379747.png)

![upgit_20241031_1730379759.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241031_1730379759.png)

## 30. 製作javascript lab01
- [blog/互動網頁設計/JavaScript/javascript_demo_guess_number at main · kcwc1029/blog (github.com)](https://github.com/kcwc1029/blog/tree/main/%E4%BA%92%E5%8B%95%E7%B6%B2%E9%A0%81%E8%A8%AD%E8%A8%88/JavaScript/javascript_demo_guess_number)

## 31. 類別(class)
- `class` 是 ES6 (ECMAScript 2015) 引入的語法糖，主要用來讓 JavaScript 的物件導向寫法更接近其他傳統 OOP 語言 (例如 Java、C++)。
- `class` 背後其實還是基於 prototype-based inheritance (原型繼承) 的機制。所以在底層上，`class` 實際上是透過 prototype 的方式來實現物件導向。
```js
class Product {
    constructor(name, price, PIN) {
        this.name = name;
        this.price = price;
        this.__PIN = PIN; // 私有屬性
    }

    displayProduct() {
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
    }

    // 靜態方法
    static printInfo() {
        console.log("把你阿罵賣掉");
    }

    // 透過method取出私有屬性
    
}

Product.printInfo(); // 靜態方法

const product01 = new Product("TA01", 78);
const product02 = new Product("TA02", 87);
product02.displayProduct();
```

## 32. 回調函數(callback)
- 中心思想：一個很大的Process，他會需要一段時間。
- 因為所有的網路請求都可能會造成阻塞JS執行，導致後續任務無法被快速處裡。
- 同步執行(Synchronous execution)：
- 異步執行(Asynchronous execution)：
```js
// 一開始先輸出1，延遲3秒在打印2，然後駔後打印3
console.log(1);

// setTimeout就是一個callback function
setTimeout(() => {
    console.log(2);
}, 3000);

console.log(3);
```

## 33. Promise
- 為了處理caallback hell
```js
// 先準備食材，花費 2 秒。
// 加熱鍋具，花費 1 秒。
// 加入食材並開始烹煮，花費 3 秒。
// 最後調味，花費 1 秒。
console.log("開始準備流程...");

// 模擬第一步驟：先準備食材（2秒）
setTimeout(() => {
    console.log("步驟 1：準備食材完成");

    // 模擬第二步驟：加熱鍋具（1秒）
    setTimeout(() => {
        console.log("步驟 2：加熱鍋具完成");

        // 模擬第三步驟：加入食材並開始烹煮（3秒）
        setTimeout(() => {
            console.log("步驟 3：加入食材並烹煮完成");

            // 模擬第四步驟：進行最後調味（1秒）
            setTimeout(() => {
                console.log("步驟 4：調味完成，準備上菜");

                // 最後步驟：上菜完成
                console.log("所有步驟完成，上菜！");
            }, 1000);
        }, 3000);
    }, 1000);
}, 2000);
```
- promise(承諾)：就像我們在現實中承諾對方做一件事
	- 待定(pending)
	- 履行(resolve)
	- 不履行(reject)

![upgit_20241104_1730691126.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241104_1730691126.png)

```js
// 將callback hell改成promise
function prepareIngredients() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("步驟 1：準備食材完成");
            resolve();
        }, 2000);
    });
}

function heatPan() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("步驟 2：加熱鍋具完成");
            resolve();
        }, 1000);
    });
}

function cookIngredients() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("步驟 3：加入食材並烹煮完成");
            resolve();
        }, 3000);
    });
}

function addSeasoning() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("步驟 4：調味完成，準備上菜");
            resolve();
        }, 1000);
    });
}

// 執行流程
console.log("開始準備流程...");

prepareIngredients()
    .then(() => heatPan())
    .then(() => cookIngredients())
    .then(() => addSeasoning())
    .then(() => {
        console.log("所有步驟完成，上菜！");
    })
    .catch((error) => console.error("發生錯誤:", error));
```

```js
// 展示resolve、reject跟finally的用法
function getEven() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const n = Math.floor(Math.random() * 100);
            console.log("生成的數字:", n);
            if (n % 2 === 0) {
                console.log("resolve:", n);
                resolve(n); // 偶數時 resolve
            } else {
                console.log("reject:", n);
                reject("生成的數字不是偶數"); // 奇數時 reject
            }
        }, 1000);
    });
}
getEven()
    .then((result) => {
        result = result + 10; // 計算並返回新結果
        console.log("then 第一環節", result);
        return result; // 返回新的結果，讓下一個 .then 繼續接收
    })
    .then((result) => {
        result = result / 2; // 計算並返回新結果
        console.log("then 第二環節", result);
        return result; // 返回新的結果
    })
    .then((result) => console.log("then:", result))
    .catch((error) => console.error("error:", error))
    .finally(() => console.log("執行結束~~"));
```

## 34. 非同步：async與await
- 將Promise納入標準後,解決了以往寫非同步時容易產生的回呼地獄。
- 不過如果有多個非同步,或是有複雜的判斷邏輯時,Promise的寫法還是會讓程式產生巢狀結構,語意上也不好解讀。
- 所以async與await主要是用來簡化 `.then` 的語法，使非同步程式碼更易讀，更接近同步風格(可以避免過多的 `.then` 嵌套)。
```js
// 基本格式

// 模擬一個返回 Promise 的非同步函數
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("資料獲取成功");
        }, 1000);
    });
}

// 使用 async/await
async function getData() {
    try {
        const result = await fetchData(); // 等待 Promise 完成
        console.log(result); // 輸出: 資料獲取成功
    } catch (error) {
        console.error("發生錯誤:", error);
    }
}

getData();
```

```js
function prepareIngredients() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("步驟 1：準備食材完成");
            resolve();
        }, 2000);
    });
}

function heatPan() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("步驟 2：加熱鍋具完成");
            resolve();
        }, 1000);
    });
}

function cookIngredients() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("步驟 3：加入食材並烹煮完成");
            resolve();
        }, 3000);
    });
}

function addSeasoning() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("步驟 4：調味完成，準備上菜");
            resolve();
        }, 1000);
    });
}

// 使用 async/await 實現執行流程
async function cookProcess() {
    console.log("開始準備流程...");

    try {
        await prepareIngredients();
        await heatPan();
        await cookIngredients();
        await addSeasoning();
        console.log("所有步驟完成，上菜！");
    } catch (error) {
        console.error("發生錯誤:", error);
    }
}

// 執行流程
cookProcess();
```
## 35. Fetch API
- 基本用法
```js
fetch(url, Request物件 )
    .then(response物件 => response.json()) // 將回應轉成 JSON 格式
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
```
- 上述fetch()函數送出參數URL網址的HTTP Request請求，回應為的是ES6的Promise物件。
- HTTP狀態404和500仍然是呼叫resolve()，不過會指定Response的ok屬性值從true改為false
- 只有網路錯誤或中斷網路等情況下,才會呼叫reject()函數。
- 回傳的Response物件是一種 ReadableStream物件，因此可以用下列方式取的值定類型資料：
	- text()：回應文字字串
	- json()：回傳JSON物件
	- blob()：回傳二進位資料,例如:圖片
### 35.1. Request 物件的常用屬性
- method：HTTP 請求方法：GET、POST、PUT、DELETE
- headers：HTTP 標頭資訊
- body：請求的資料（GET 和 HEAD 不適用）
### 35.2. Response 物件的常用屬性
- headers：取得回應資料的標頭資訊
- ok：請求是否成功（true 或 false）
- status：HTTP 狀態碼（200 表示成功）
- statusText：HTTP 狀態文字（如 "OK"）
```html
<!-- TODO: GET：從寶可夢 API 取得資料 -->
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Fetch API Example</title>
    </head>
    <body>
        <button id="fetch-btn">取得寶可夢資料</button>
        <pre id="result"></pre>

        <script>
            // 定義一個非同步函數來處理請求
            async function fetchPokemonData() {
                const resultElement = document.getElementById("result");
                try {
                    // 使用 fetch 並等待回應
                    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

                    // 如果回應不是 OK，拋出錯誤
                    if (!response.ok) {
                        throw new Error(`HTTP 錯誤：${response.status}`);
                    }

                    const data = await response.json();

                    // 顯示資料
                    resultElement.textContent = `名稱: ${data.name}\n高度: ${data.height}\n重量: ${data.weight}`;
                } catch (error) {
                    console.error("取得資料失敗:", error);
                    resultElement.textContent = "無法取得資料，請稍後再試";
                }
            }

            // 監聽按鈕的點擊事件，執行非同步函數
            document.getElementById("fetch-btn").addEventListener("click", fetchPokemonData);
        </script>
    </body>
</html>
```

```html
<!-- TODO: POST：傳送 JSON 資料到伺服器 -->
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Fetch API POST Form</title>
        <!-- Bootstrap 5 -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
    </head>
    <body class="bg-light">
        <div class="container mt-5">
            <h2 class="text-center mb-4">表單資料提交（Fetch API）</h2>

            <!-- 表單區塊 -->
            <form id="contactForm" class="card p-4 shadow">
                <div class="mb-3">
                    <label for="name" class="form-label">姓名：</label>
                    <input type="text" class="form-control" id="name" placeholder="請輸入您的姓名" required />
                </div>

                <button type="submit" class="btn btn-primary">提交</button>
            </form>

            <!-- 結果顯示區 -->
            <div id="result" class="mt-4"></div>
        </div>

        <script>
            // 監聽表單提交事件
            document.getElementById("contactForm").addEventListener("submit", async function (event) {
                event.preventDefault(); // 防止表單預設的提交行為

                // 取得輸入的資料
                const name = document.getElementById("name").value;

                // 準備要 POST 的資料
                const formData = {
                    name: name,
                };

                try {
                    // 使用 Fetch API 發送 POST 請求
                    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(formData),
                    });

                    // 解析伺服器的回應
                    const result = await response.json();

                    // 顯示提交結果
                    document.getElementById("result").innerHTML = `
                    <div class="alert alert-success">
                        <h5>提交成功！</h5>
                        <p>回應資料：</p>
                        <pre>${JSON.stringify(result, null, 2)}</pre>
                    </div>
                `;
                } catch (error) {
                    console.error("提交失敗:", error);
                    document.getElementById("result").innerHTML = `
                    <div class="alert alert-danger">
                        <h5>提交失敗</h5>
                        <p>請稍後再試。</p>
                    </div>
                `;
                }
            });
        </script>
    </body>
</html>
```

## 36. 產生器
- 產生器是一種特殊的函數，可以暫停其執行並在需要時恢復。
- 產生器函數會返回一個**迭代器物件**，每次執行產生器函數的 `next()` 方法時，就會暫停在 `yield` 關鍵字上，並返回 `yield` 後的值。
- **`yield`**：用於暫停產生器函數的執行，並返回一個值。
- **`next()`**：用於控制產生器的執行。每次調用 `next()`，產生器函數會從上次暫停的 `yield` 位置繼續執行
- 應用場景：
	- 可以用產生器來逐步處理大量資料，而不會一次性加載全部資料。
	- 配合 `for await...of` 與 `async` 可以實現非同步代碼的同步流程控制。
```js
function* myGenerator() {
    let number = 0;
    while (true) {
        number++;
        yield number.toString().padStart(3, 0);
    }
}

// 回傳兩個值
// value：當前取出的值
// done：是否跌待完成
const iterator = myGenerator();
console.log(iterator.next()); // {value: '001', done: false}
console.log(iterator.next()); // {value: '002', done: false}
console.log(iterator.next()); // {value: '003', done: false}
```

```js
// 配合 `for await...of` 與 `async` 可以實現非同步代碼的同步流程控制
function fetchStatusResult() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const statuses = ["ready", "in progress", "completed"];
            const status = statuses[Math.floor(Math.random() * statuses.length)];
            console.log("Fetched status:", status);
            resolve(status);
        }, 2000); // 模擬1秒的延遲
    });
}

// 使用 async generator 函數逐步獲取狀態
async function* checkStatus(times) {
    for (let i = 1; i <= times; i++) {
        const status = await fetchStatusResult();
        yield status; // 暫停並返回當前狀態
    }
}

// 主函數，控制非同步流程
(async () => {
    let generator = checkStatus(3); // 設置要檢查的次數
    console.log("開始檢查狀態...");
    for await (let status of generator) {
        console.log("目前狀態:", status);
        if (status === "completed") {
            console.log("狀態已完成，結束檢查。");
            break;
        }
    }
    console.log("檢查流程結束。");
})();
```

## 37. Symbol
- `Symbol` 是 JavaScript 中新增的一種原始資料型別，與 `string`、`number`、`boolean` 等並列。
- `Symbol` 最主要的用途是用來建立唯一的標識（identifier）
- 每個 `Symbol` 都是唯一的，且即使兩個 `Symbol` 表面上內容相同，它們也是不相等的。
- 在需要建立物件的私有屬性或避免名稱衝突時非常有用。
```js
// 使用 Symbol() 函數來建立一個新的 Symbol
const mySymbol = Symbol();
console.log(mySymbol); // Symbol()

// 傳入一個字串作為描述(幫助除錯)，並不會影響 Symbol 的唯一性
const symbolWithDescription = Symbol("description");
console.log(symbolWithDescription); // Symbol(description)

// Symbol 的唯一性
const sym1 = Symbol("unique");
const sym2 = Symbol("unique");

console.log(sym1 === sym2); // false
```


## 38. 代理物件(Proxy)
- 用來代理目標物建，也就是「改變、中介」目標物建的基礎操作。
- 基本語法：`const proxy = new Proxy(target, handler);`
	- `target`：要代理的物件
	- `handler`：定義攔截行為的物件，它包含若干“攔截器”方法（稱為 traps），這些方法會在對 `target` 執行特定操作時被觸發。
### 38.1. 常見的 `Proxy` 操作方法（Traps）
- `get(target, property)`：攔截對屬性的讀取操作。
- `set(target, property, value)`：攔截對屬性的設定操作。
- `deleteProperty(target, property)`：攔截屬性的刪除操作。
- `has(target, property)`：攔截 `in` 操作符（例如 `prop in obj`）。
- `apply(target, thisArg, args)`：攔截函數的呼叫。
- `construct(target, args)`：攔截 `new` 操作符。
```js
let profile = {
    name: "TA",
    firstName: "T",
    lastName: "A",
    age: 23,
};

// 如果想要完整取的名子
console.log(profile.firstName + profile.lastName); // 多個屬性組合才能滿足需求

// 透過proxy
let proxy = new Proxy(profile, {
    get: function (target, property) {
        if (property == "completeName") {
            return target.firstName + target.lastName;
        } else {
            return target[property];
        }
    },
});

console.log(proxy.completeName);
console.log(proxy.firstName);
```

```js
// 透過 get 和 set 來攔截屬性的讀取與設定。
const person = {
    name: "Alice",
    age: 25,
};

const personProxy = new Proxy(person, {
    get(target, property) {
        console.log(`讀取屬性 ${property}`);
        return target[property];
    },
    set(target, property, value) {
        console.log(`設定屬性 ${property} 為 ${value}`);
        target[property] = value;
        return true;
    },
});

console.log(personProxy.name); // 讀取屬性 name -> Alice
personProxy.age = 30; // 設定屬性 age 為 30
console.log(personProxy.age); // 讀取屬性 age -> 30
```

```js
// deleteProperty 可以攔截刪除屬性的行為，甚至可以禁止某些屬性的刪除。
const data = { id: 1, secret: "password" };


const dataProxy = new Proxy(data, {
    deleteProperty(target, property) {
        if (property === "secret") {
            console.log("不允許刪除 secret 屬性");
            return false;
        }
        delete target[property];
        return true;
    },
});

delete dataProxy.secret; // 不允許刪除 secret 屬性
delete dataProxy.id; // 成功刪除 id
console.log(data); // { secret: "password" }
```

```js
// apply 操作可以攔截函數的呼叫。這個攔截器只在 target 是函數時使用。
const sum = (a, b) => a + b;

const sumProxy = new Proxy(sum, {
    apply(target, thisArg, args) {
        console.log(`呼叫函數並傳入參數：${args}`);
        return target(...args);
    }
});

console.log(sumProxy(5, 10)); // 呼叫函數並傳入參數：5,10 -> 15
```

```js
// has 操作可以攔截 in 運算符，用來檢查某屬性是否存在於物件中。
const settings = { theme: "dark", language: "en" };

const settingsProxy = new Proxy(settings, {
    has(target, property) {
        if (property === "password") {
            console.log("禁止訪問密碼屬性");
            return false;
        }
        return property in target;
    },
});

console.log("theme" in settingsProxy); // true
console.log("password" in settingsProxy); // 禁止訪問密碼屬性 -> false
```

### 38.2. `Proxy` 的用途
1. 資料驗證：用 `set` 攔截器來驗證資料輸入是否合法。
2. 屬性監控：監控對物件屬性的讀取、設定和刪除操作。
3. 隱藏資料：使用 `get` 和 `has` 操作來隱藏某些屬性。
4. 函數攔截：用 `apply` 攔截器來處理函數的呼叫行為。
5. 虛擬屬性：在 `get` 操作中生成虛擬屬性而不是在物件上直接定義。


## 39. 映射(Reflect)
- `Reflect` 是 ES6所新增的一個全域物件，它提供一組用於操作物件的靜態方法，這些方法的功能與部分傳統操作 (例如 `obj[prop]`、`delete obj[prop]`、`prop in obj`、`Function.prototype.apply()` 等) 類似，但以更一致、函式化的方式呈現。
- `Reflect` 就像是「物件操作的工具箱」，將以往分散在語法糖或內建函式上的功能，統一以函式的形式提供。
- 可以想成它是為某些內建方法或運算指令,提供另一種替代方式。
### 39.1. 好處：
- 一致性：傳統在存取、刪除、判斷屬性時，有些用運算子 (`delete obj.prop`, `prop in obj`)，有些用函式 (如 `Object.defineProperty()` )。`Reflect` 將這些能力整合為一組函式呼叫，讓程式碼在結構上更統一，也易於理解。
- 更好的回傳值處理：某些傳統操作在失敗時會回傳 `false`，或丟出錯誤，`Reflect` 方法通常會提供更具描述性的回傳值，或保持一致的回傳邏輯，讓程式設計者更容易撰寫穩健的程式。
- 與 Proxy 搭配使用：`Reflect` 常與 `Proxy` 搭配，用於在 `Proxy` 的攔截器中呼叫對應的 `Reflect` 方法，取得跟原始物件行為相同的結果，方便自行在攔截的同時附加額外邏輯又保持原有操作行為的正確性。
### 39.2. `Reflect` 與傳統操作比較
```js
// 讀取屬性
傳統：obj[prop]
Reflect版：Reflect.get(obj, prop)

// 設定屬性
傳統：obj[prop] = value
Reflect版：Reflect.set(obj, prop, value)

// 刪除屬性
傳統：delete obj[prop]
Reflect版：Reflect.deleteProperty(obj, prop)

// 屬性存在性判斷
傳統：prop in obj
Reflect版：Reflect.has(obj, prop)

// 函數呼叫與建構
傳統：func.apply(thisArg, args)
Reflect版：Reflect.apply(func, thisArg, args)
```
### 39.3. 範例與應用場景
- 在程式中同時需要動態讀取屬性、檢查屬性是否存在、或刪除屬性，使用 Reflect 可以使程式碼風格一致，都以函式呼叫的形式出現。
```js
const user = { name: "Bob", age: 20 };

// 傳統寫法
console.log("name" in user); // true
console.log(user["age"]);   // 20
delete user.age;

// Reflect寫法
console.log(Reflect.has(user, "name")); // true
console.log(Reflect.get(user, "name")); // Bob
Reflect.deleteProperty(user, "age");
```
- 在 Proxy 中使用 Reflect
```js
let target = { name: "Alice", age: 25 };
let proxy = new Proxy(target, {
  get: (target, prop, receiver) => {
    console.log(`正在讀取屬性：${prop}`);
    // 使用 Reflect.get 取得原本的值，保持原本物件行為
    return Reflect.get(target, prop, receiver);
  }
});

console.log(proxy.name); // 正在讀取屬性：name -> Alice
```
- `Reflect.construct` 可依條件決定要建構哪種類型的物件
```js
class Dog {
  constructor(name) { this.name = name; }
}

class Cat {
  constructor(name) { this.name = name; }
}

function createPet(type, name) {
  let Ctor = (type === "dog") ? Dog : Cat;
  return Reflect.construct(Ctor, [name]);
}

let myPet = createPet("dog", "Buddy");
console.log(myPet); // Dog { name: "Buddy" }
```
## 40. JS建議的學習順序總結：
- **Three.js** - 入門 3D 圖形概念。
- **Babylon.js** - 進階 3D 開發和遊戲應用。
- **TensorFlow.js** - 機器學習應用，增強智能。
- **PixiJS** - 專注於高效的 2D 圖形渲染和動畫。

![upgit_20241102_1730513872.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241102_1730513872.png)
