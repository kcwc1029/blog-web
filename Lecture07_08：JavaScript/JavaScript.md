## 1. JavaScript 是甚麼

-   JavaScript 是一種應用廣泛的瀏覽器端 Script，瀏覽器大多內建 JavaScript 直譯器。
-   JavaScript 和 HTML、CSS 都是網頁設計的核心技術，其中 JavaScript 用來定義網頁的行為，
    -   例如即時更新地圖、輪播圖片等。

## 2. 瀏覽器基本運作流程

-   瀏覽器透過作業系統，將網址發送給 DNS Server。
-   DNS Server 解析網址，並回傳對應的 IP 位址。
-   瀏覽器取得 IP 位址後，透過 TCP/IP 通訊協定，向該 IP 對應的目標伺服器（Target Server）發出網路請求。
-   目標伺服器收到請求後，會將所需的資源封裝成資料封包並回傳。
-   瀏覽器接收到資料封包後，解析其中的檔案內容與狀態資訊。
-   HTML 和 CSS 分別經由各自的 Parser 解析，建立出樹狀結構的資料模型：DOM Tree 與 CSSOM Tree。
-   瀏覽器接著根據 DOM Tree 與 CSSOM Tree 建立 Render Tree，計算每個節點在頁面上的實際位置、大小、形狀等資訊，形成 Layout 資料模型。
-   最後，瀏覽器依據 Layout 將內容渲染（Render）到頁面上，顯示出完整的網頁畫面。

![upgit_20250322_1742648477.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/03/upgit_20250322_1742648477.png)

## 3. 在 HTML 中寫 JS

-   寫在`<script>`裡面。
-   一般會建議寫在最後面，尤其是當有大的 JavaScript 程式時，先讓渲染引擎將網頁顯示出來再載入 JavaScript 程式，比較不會有畫面延遲的情況。

![upgit_20250322_1742648521.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/03/upgit_20250322_1742648521.png)

## 4. Data Type

-   JavaScript 的型別分為基本型別(primitive type)與物件型別(object type)兩種類型。
-   基本型別(primitive type： number 、 string 、 boolen、 undefined、 null 等。
-   物件型別(object type)：
    -   Funtion
    -   Array
    -   Object(JS 的 Object 比較像是 python 的 dictionery，屬於一種關聯陣列(associative array))

## 5. 作用域(Scope)

![upgit_20250322_1742648756.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/03/upgit_20250322_1742648756.png)

-   全域作用域 (Global Scope)：變數在程式的任何地方都可以存取與修改。
-   函式作用域 (Function Scope)：變數在函式內部宣告，只能在該函式內部存取，函式外部無法存取。
-   區塊作用域 (Block Scope)：
    -   變數在 {} 大括號內宣告，只能在該區塊內存取。
    -   let 和 const 支援區塊作用域，var 不會被區塊限制

## 6. 變數宣告：var、let、const

-   var
    -   可重複宣告、可修改值。
    -   用域僅限於函式（Function Scope），不受區塊限制（例如：if {} 裡宣告，外面仍可用）。
    -   有「變數提升（Hoisting）」：宣告會被拉到作用域頂部，但值是 undefined

```js
if (true) {
	var x = 10;
}
console.log(x); // ✅ 可以輸出 10
```

-   let
    -   可重新賦值，但不能重複宣告。
    -   區塊作用域（Block Scope），只能在 {} 區塊中使用。
    -   Hoisting，但位於 Temporal Dead Zone（TDZ），使用前會報錯。

```js
if (true) {
	let y = 20;
}
console.log(y); // ❌ ReferenceError
```

-   const：
    -   不可重新賦值（不可指派新值）
    -   可以改變物件/陣列的屬性

```js
const obj = { name: "Tom" };
obj.name = "Jerry"; // ✅ 可以修改屬性
```

## 7. 函式(Function)

-   參數（Parameters）：可傳多個參數，或不傳參數

```js
function sayHi(name) {
	console.log("Hi, " + name);
}
sayHi("Amy");
```

-   回傳值（Return）：函式執行後回傳的結果
    -   沒有寫 return，預設會回傳 undefined

```js
function add(a, b) {
	return a + b;
}
console.log(add(2, 3)); // 5
```

```js
// 沒有寫 return
function sayHello(name) {
	console.log("Hello, " + name + "!");
}

let result = sayHello("Amy");
console.log(result); // 輸出什麼？
```

## 8. Closure（閉包）

-   當一個函式 回傳另一個函式，而回傳的函式仍然能「記住」外層函式的變數，就形成 閉包（Closure）
-   資料封裝：可以建立私有變數，避免全域污染與外部存取
-   避免污染全域：私有變數只在內部函式中

```js
function createCounter() {
	let count = 0;

	return function () {
		count++;
		console.log(count);
	};
}

const counter01 = createCounter();
const counter02 = createCounter();
counter01(); // 1
counter01(); // 2
counter02(); // 1
counter02(); // 2
```

## 9. Currying（柯里化）

-   將原本接受多參數的函式，轉換成多個只接受單一參數的函式鏈式呼叫
-   增強組合性
-   增強可讀性

```js
function add(a) {
	return function (b) {
		return function (c) {
			return a + b + c;
		};
	};
}

console.log(add(2)(3)(4)); // 9
```

## 10. 立即執行函數 IIFE（Immediately Invoked Function Expression）

-   不用命名、也不需要另外呼叫，定義完「馬上」就會執行一次

```js
var myArray = ["Yuri", "Zoe"];

const getResult = (function () {
	var myArray = [1, 2, 3, 4, 5, 6, 7];
	return myArray.join("");
})();

console.log(getResult); // "1234567"
console.log(myArray); // ['Yuri', 'Zoe']
```

## 11. 物件導向基本概念

![upgit_20250322_1742653877.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/03/upgit_20250322_1742653877.png)

什麼是物件 (Object)?

-   物件 代表生活中的事物，由 屬性 (Property) 和 方法 (Method) 組成。
-   例如：汽車 是一個物件，包含 品牌 (屬性) 和 啟動 (方法)。

屬性 (Property)

-   描述物件的特徵或狀態。
-   範例：汽車的 顏色、品牌、速度。

方法 (Method)

-   描述物件可以執行的行為或操作。
-   startCar()：啟動汽車
-   changeSpeed()：改變速度
-   brake()：剎車
    事件 (Event)
-   特定情境下物件的反應 (例如使用者觸發的動作)。
-   accelerate (加速事件)：當按下油門時觸發。

類別與物件的關係

-   類別 (Class)：是一種模板或藍圖，用於創建具相同屬性與方法的物件。
-   例如：Car 類別可以用來創建 Toyota、Tesla、BMW 等不同的物件。
-   物件 (Object)：物件是類別的實例化結果。

JavaScript 中的三種物件模型

-   ECMAScript 物件模型：基本語法與資料型別：例如 Object、Array、Function。
-   DOM 物件模型 (Document Object Model)：像是針對 HTML 元素的操作。如 document.getElementById()。
-   BOM 物件模型 (Browser Object Model)：瀏覽器相關的物件。如 window、navigator、location。

```js
// 定義 Car 類別
class Car {
	constructor(brand, speed) {
		this.brand = brand; // 屬性
		this.speed = speed; // 屬性
	}

	startCar() {
		console.log(this.brand + " 車子啟動"); // 方法
	}

	changeSpeed(newSpeed) {
		this.speed = newSpeed; // 方法
	}
}

// 建立物件實例
const myCar = new Car("Toyota", 60);

// 使用方法
myCar.startCar(); // 輸出：Toyota 車子啟動
console.log(myCar.speed); // 輸出：60

myCar.changeSpeed(100);
console.log(myCar.speed); // 輸出：100
```

## 12. 建立物件的兩種方式

方法一：使用物件實體方式（Object Literal）

-   語法簡單直觀，適合快速建立物件。
-   直接使用花括號 {} 定義物件及其屬性與方法。

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
user.age = 18; // 修改屬性
delete user.age; // 刪除屬性
console.log(user.name); // 輸出：TA
```

方法二：使用建構子方式（Constructor Function）

-   適合建立多個結構類似的物件
-   使用 `new Object()` 或自定義建構子函式建立

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

| 項目         | 物件實體方式 `{}`        | 建構子方式 `new Object()`     |
| ------------ | ------------------------ | ----------------------------- |
| 適用情境     | 快速建立單一物件         | 建立多個相似結構的物件        |
| 可讀性       | ✅ 簡單、直觀            | 較繁瑣，適合進階使用          |
| 可擴充性     | ❌ 不易擴充              | ✅ 搭配建構子 function 可擴充 |
| 建議使用場合 | 定義設定檔、靜態資料結構 | 建立多筆資料、實體控制物件    |

## 13. 物件導向(OOP)的四大特性

### 13.1. 封裝（Encapsulation）

定義：將物件的屬性與方法封裝在內部，透過 getter 與 setter 控制存取權限，避免外部直接操作內部資料，提升安全性。
JS 語法重點：

-   使用 `#` 表示私有屬性（class fields syntax）
-   使用 `get` / `set` 存取或更新私有資料

```javascript
class User {
	#password; // 私有屬性

	constructor(name, password) {
		this.name = name;
		this.#password = password;
	}

	get password() {
		return "密碼是隱藏的！";
	}

	set password(newPassword) {
		this.#password = newPassword;
	}
}

let user = new User("TA", "12345");
console.log(user.password); // 輸出：密碼是隱藏的！
user.password = "67890"; // 更新密碼
```

### 13.2. 繼承（Inheritance）

定義：子類別（subclass）繼承父類別（superclass）的屬性與方法，提升程式碼的重用性。
JS 語法重點：

-   使用 `extends` 關鍵字實現繼承
-   使用 `super()` 呼叫父類別建構子

```javascript
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
		super(brand); // 呼叫父類別建構子
		this.model = model;
	}

	drive() {
		console.log(this.brand + " " + this.model + " 正在行駛！");
	}
}

let myCar = new Car("Toyota", "Corolla");
myCar.start(); // Toyota 啟動！
myCar.drive(); // Toyota Corolla 正在行駛！
```

### 13.3. 多型（Polymorphism）

定義：相同的方法呼叫，根據物件的實際類型執行不同的行為。
JS 語法重點：使用繼承與**方法覆寫（Override）**實現

```javascript
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
animals.forEach((animal) => animal.speak());

// 執行結果
// 狗叫：汪汪！
// 貓叫：喵喵！
// 動物發出聲音！
```

### 13.4. 抽象（Abstraction）

定義：將物件的「核心功能」暴露出來，隱藏內部實作細節，讓使用者專注於操作介面。
JS 實作方式：JavaScript 沒有內建 abstract 類別，但可以透過「丟錯」或 interface 模擬

```javascript
class Shape {
	// 抽象方法：僅定義，不實作
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

## 14. 內建物件--Number

常用屬性

![upgit_20250423_1745388218.png|661x222](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/04/upgit_20250423_1745388218.png)

常用方法
![upgit_20250423_1745388228.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/04/upgit_20250423_1745388228.png)

## 15. 內建物件--String

![upgit_20250423_1745388245.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/04/upgit_20250423_1745388245.png)

![upgit_20250423_1745388251.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/04/upgit_20250423_1745388251.png)

## 16. 內建物件-- Math

![upgit_20250423_1745388299.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/04/upgit_20250423_1745388299.png)

## 17. 內建物件-- Date

![upgit_20250423_1745388308.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/04/upgit_20250423_1745388308.png)

## 18. 內建物件-- Array

![upgit_20250423_1745388324.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/04/upgit_20250423_1745388324.png)

![upgit_20250423_1745388329.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/04/upgit_20250423_1745388329.png)

## 19. 錯誤處理機制（Error Handling）

JS 提供 try...catch...finally 來捕捉與處理錯誤，確保程式不會因錯誤而中斷。

```js
try {
	// 可能會出錯的程式碼
} catch (error) {
	// 錯誤處理區塊
} finally {
	// 無論是否出錯，最後都會執行
}
```

主動拋出錯誤：使用 throw new Error("訊息") 主動告知程式錯誤發生的位置與原因。

```js
// 範例：分母不能為 0
function divide(a, b) {
	try {
		if (b === 0) throw new Error("分母不能為 0");
		return a / b;
	} catch (error) {
		console.error("錯誤：" + error.message);
		return null;
	}
}

console.log(divide(10, 0)); // 錯誤：分母不能為 0
console.log(divide(10, 2)); // 5
```

## 20. Error 物件

Error 物件常用屬性

-   message： 錯誤的簡短描述。
-   name： 錯誤名稱（如 `TypeError`、`ReferenceError`）。
-   stack： 錯誤的堆疊資訊（詳細的錯誤呼叫鏈路）。

```js
try {
	let arr = null;
	arr.push(1); // 這裡會拋出錯誤，因為 null 沒有 push 方法
} catch (error) {
	console.log("錯誤名稱：" + error.name); // TypeError
	console.log("錯誤訊息：" + error.message); // Cannot read properties of null (reading 'push')
	console.log("錯誤堆疊：" + error.stack); // 詳細錯誤堆疊資訊
}
```

## 21. Prototype

每個 JavaScript 物件都有一個內建的 `[[Prototype]]` 屬性，指向另一個物件，這個物件就是它的「原型」。
原型提供屬性與方法的「繼承」來源，這稱為 Prototype Inheritance（原型繼承）。
好處是：節省記憶體、提升重複使用性。

### 21.1. 建構函式（Constructor Function）與 Prototype

建構函式：是一種特殊的函式，用於建立多個類似的物件。

```js
function Person(attributes) {
	this.name = attributes.name;
	this.age = attributes.age;
}

const ta = new Person({ name: "TA", age: 23 });
```

### 21.2. 添加 Prototype 方法

所有由 Person 建構的物件都可以共用這個方法：

```js
Person.prototype.introduce = function () {
	console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
};
ta.introduce(); // Hi, I'm TA and I'm 23 years old.
```

### 21.3. 擴展 Prototype 屬性與方法

```js
// 新增屬性
Person.prototype.legalAge = 18;

// 新增方法
Person.prototype.commuteWay = function () {
	return this.age > this.legalAge ? "開車" : "走路";
};

const yuri = new Person({ name: "Yuri", age: 23 });
console.log(yuri.commuteWay()); // 開車
```

### 21.4. 原型鏈（Prototype Chain）

當你存取一個物件的屬性或方法時，JavaScript 會沿著原型鏈向上查找，直到找到或到 null 為止。

```js
const baseProto = {
	species: "Human",
	sayHello: function () {
		console.log(`Hello, I'm a ${this.species}`);
	},
};

const personProto = Object.create(baseProto);
personProto.name = "Alice";
personProto.introduce = function () {
	console.log(`Hi, my name is ${this.name}`);
};

const student = Object.create(personProto);
student.grade = "A";
student.study = function () {
	console.log(`${this.name} is studying.`);
};

// 呼叫原型鏈上的方法與屬性
student.name = "Bob";
student.introduce(); // Hi, my name is Bob
student.sayHello(); // Hello, I'm a Human
student.study(); // Bob is studying.
console.log(student.grade); // A
```

## 22. this

### 22.1. 執行環境的生命週期

建立階段（Creation Phase）

-   分配記憶體空間給變數與函式
-   進行 Hoisting（變數與函式提升）
-   建立執行環境所需的資料結構
-   將函式放入 呼叫堆疊 Call Stack
    執行階段（Execution Phase）
-   逐行執行程式碼
-   建立與作用域對應的 this
-   函式執行完畢或遇 return，環境從堆疊中移除

### 22.2. 全域與區域的執行環境

全域執行環境（Global Execution Context）

-   程式啟動時會建立
-   `this` 指向全域物件 - 瀏覽器：`window` - Node.js：`global`
    區域（函式）執行環境（Function Execution Context）
-   每次呼叫函式，都會建立新的執行環境
-   `this` 的值 取決於呼叫方式（動態綁定）

## 23. this 的四種綁定規則

### 23.1. 預設綁定（Default Binding）

在「非嚴格模式」中，全域宣告的函式，其 this 會預設指向 window
箭頭函式例外：this 在定義時就固定（由外層作用域決定）

```js
function foo() {
	console.log(this); // window
}
foo();
```

### 23.2. 隱式綁定（Implicit Binding）

如果函式是某個物件的方法，this 就會指向那個物件
箭頭函式無法使用隱式綁定

```js
const obj = {
	name: "物件",
	showThis() {
		console.log(this); // obj
	},
};
obj.showThis();
```

### 23.3. 顯式綁定（Explicit Binding）

#### 23.3.1. 使用 bind 做顯式綁定

bind 可以讓你創建一個新的函式，這個函式的 this 被綁定到特定對象，並且可以預設某些參數。

```js
function.bind(thisValue, arg1, arg2, ..., argN);
// thisValue：要綁定的this對象，必須指定。
// arg1, arg2, ..., argN：可選的參數列表。
```

```js
// 範例：bind 建立新函式並綁定 this
const myObject = {
	x: 10,
	addX: function (value1, value2) {
		return value1 + value2 + this.x;
	},
};

// 使用 bind 將 this 指向新物件，並預設參數 value1=1, value2=2
const addXFunction = myObject.addX.bind({ x: 3 }, 1, 2);

console.log(myObject.addX(1, 2)); // 輸出 13，this 指向 myObject（1+2+10）
console.log(addXFunction()); // 輸出 6，this 指向 {x: 3}（1+2+3）
```

```js
// 範例：bind 搭配預設參數
function add(a, b) {
	return a + b + this.offset;
}
const calculator = { offset: 10 };

// 綁定 this 為 calculator，並預設 a=5
const boundAdd = add.bind(calculator, 5);
console.log(boundAdd(3)); // 輸出 18（5 + 3 + 10）
```

```html
<!-- 範例 -->
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>this 綁定範例</title>
	</head>
	<body>
		<button id="myButton">Click Me</button>

		<script>
			const button = {
				label: "Click Me",
				handleClick: function () {
					console.log(`Button label is: ${this.label}`);
				},
			};

			// ❌ 錯誤用法：this 指向 DOM 元素 (#myButton)，不是 button 物件
			document.querySelector("#myButton").addEventListener("click", button.handleClick);
			// 結果：Button label is: undefined

			// ✅ 正確用法：使用 bind 綁定 this 為 button 物件
			document.querySelector("#myButton").addEventListener("click", button.handleClick.bind(button));
			// 結果：Button label is: Click Me
		</script>
	</body>
</html>
```

#### 23.3.2. 使用 call 做顯式綁定

call 是 JavaScript 中的一個函式方法，用於改變函式內部的 this 指向，並立即執行該函式。
與 bind 不同的是，call 不會返回一個新的函式，而是直接執行。

```js
// 範例：用 call 改變函式內部的 this
const person = { name: "Alice" };

function greet(greeting, punctuation) {
	console.log(`${greeting}, ${this.name}${punctuation}`);
}

// 使用 call 指定 this 為 person，並傳入參數
greet.call(person, "Hello", "!"); // 輸出：Hello, Alice!
```

```js
// 範例：借用其他物件的方法
const person2 = { name: "Carol" };
const person1 = {
	name: "Bob",
	greet: function () {
		console.log(`Hi, I am ${this.name}`);
	},
};

person1.greet(); // 輸出：Hi, I am Bob
person1.greet.call(person2); // 輸出：Hi, I am Carol
```

```js
// 範例：建構函式中使用 call 傳遞 this
function Animal(name) {
	this.name = name;
}

function Dog(name, breed) {
	Animal.call(this, name); // 繼承 Animal 的 name 屬性
	this.breed = breed;
}

const dog = new Dog("Rex", "Golden Retriever");

console.log(dog.name); // 輸出：Rex
console.log(dog.breed); // 輸出：Golden Retriever
```

#### 23.3.3. 使用 apply 做顯式綁定

跟 call 一樣，差別是後面的參數要放到陣列裡。

```js
// 範例：簡單使用 `apply` 傳參數陣列
const person = { name: "Alice" };

function introduce(greeting, punctuation) {
	console.log(`${greeting}, my name is ${this.name}${punctuation}`);
}

introduce.apply(person, ["Hello", "!"]);
// 輸出：Hello, my name is Alice!
```

```js
// 範例：數學應用 apply 找陣列最大值
const numbers = [3, 5, 1, 9, 2];

const max = Math.max.apply(null, numbers);
// Math.max 預期單獨數字作為參數，不能直接吃陣列，因此用 apply 展開

console.log(`最大值是：${max}`);
// 輸出：最大值是：9
```

```js
// 範例：建構函式繼承（apply 搭配 constructor）
function Animal(name) {
	this.name = name;
}

function Dog(name, breed) {
	Animal.apply(this, [name]); // 將 name 傳給 Animal 並綁定 this
	this.breed = breed;
}

const myDog = new Dog("Buddy", "Golden Retriever");

console.log(myDog.name); // 輸出：Buddy
console.log(myDog.breed); // 輸出：Golden Retriever
```

## 24. ES Modules（ESM）

![upgit_20250423_1745399455.png|785x210](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/04/upgit_20250423_1745399455.png)
在 ES6（2015）以前，JavaScript 沒有內建的模組系統，開發者需依賴：

-   CommonJS（CJS）：主要用於 Node.js
-   AMD / RequireJS：用於瀏覽器模組化需求
    傳統模組系統的問題
-   require() 為同步載入 → 會阻塞主執行緒
-   CommonJS 原為伺服器端設計，不適用瀏覽器環境
    ES Modules 是 ES6 引入的標準模組系統
-   支援 import/export 語法
-   支援 靜態分析、瀏覽器端原生模組支援

```js
// 導出（export）模組內容
export const PI = 3.14159;

export function add(a, b) {
	return a + b;
}
```

```js
// 導入（import）模組內容
import { PI, add } from "./math.js";

console.log(PI); // 輸出 3.14159
console.log(add(2, 3)); // 輸出 5
```

## 25. DOM 文件物件

DOM（Document Object Model）是 W3C 規範的應用程式介面。
將 HTML 結構轉為 樹狀結構（DOM Tree）。
每個 HTML 標籤對應一個 節點物件，可透過 JavaScript 存取與操作。

### 25.1. 取得元素的方法

| 方法名稱                        | 根據什麼取得 | 備註                 |
| ------------------------------- | ------------ | -------------------- |
| `getElementById(id)`            | id           | 回傳單一元素         |
| `getElementsByName(name)`       | name         | 回傳 NodeList        |
| `getElementsByTagName(tag)`     | 標籤名       | 回傳 NodeList        |
| `getElementsByClassName(class)` | 類別名       | 回傳 NodeList        |
| `querySelector(selector)`       | CSS 選擇器   | 回傳第一個符合的元素 |
| `querySelectorAll(selector)`    | CSS 選擇器   | 回傳 NodeList        |

```js
// 範例：`getElementById`
let entrytime = document.getElementById("entrytime");
entrytime.textContent = new Date();
```

```js
// 範例：`getElementsByName`
let drinks = document.getElementsByName("drinks");
for (let i = 0; i < drinks.length; i++) {
	console.log(drinks.item(i).value);
}
```

### 25.2. 走訪 DOM 節點（節點屬性）

| 屬性              | 說明                       |
| ----------------- | -------------------------- |
| `parentNode`      | 取得父節點                 |
| `childNodes`      | 所有子節點（含文字、空白） |
| `firstChild`      | 第一個子節點               |
| `lastChild`       | 最後一個子節點             |
| `previousSibling` | 前一個兄弟節點             |
| `nextSibling`     | 後一個兄弟節點             |

### 25.3. 取得與設定屬性

| 方法                      | 說明             |
| ------------------------- | ---------------- |
| `hasAttribute(attr)`      | 是否擁有指定屬性 |
| `getAttribute(attr)`      | 取得屬性值       |
| `setAttribute(attr, val)` | 設定/更新屬性    |
| `removeAttribute(attr)`   | 移除屬性         |

### 25.4. 文字與 HTML 內容操作

| 屬性/方法     | 功能說明                         |
| ------------- | -------------------------------- |
| `textContent` | 取得/設定所有純文字（無 HTML）   |
| `innerText`   | 取得/設定可見文字（受 CSS 影響） |
| `innerHTML`   | 取得/設定 HTML 內容（含標籤）    |

### 25.5. 實作操作節點（CRUD）

```js
// 範例：新增節點
let newItem = document.createElement("li");
newItem.textContent = "新項目";
newItem.classList.add("dessert");
document.querySelector(".food").appendChild(newItem);
```

```js
// 範例：更新節點
let items = document.querySelectorAll(".dessert");
let last = items[items.length - 1];
last.textContent = "更新後項目";
```

```js
// 範例：刪除節點
let items = document.querySelectorAll(".item");
let lastItem = items[items.length - 1];
lastItem.parentNode.removeChild(lastItem);
```

### 25.6. [Lab：存取表單內容](./code/Form_Access.html)

![upgit_20250423_1745400351.png|1083x417](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/04/upgit_20250423_1745400351.png)

### 25.7. [Lab：操作 CSS](./code/Oprate_CSS.html)

## 26. BOM（瀏覽器物件模型）

BOM 提供操作瀏覽器的 API（非 HTML DOM 元素），如跳轉頁面、歷史紀錄、視窗大小等。

### 26.1. window 常見屬性與方法

```js
console.log(window.document.title); // 頁面標題
console.log(window.location.href); // URL
console.log(window.navigator.userAgent); // 裝置資訊
console.log(window.innerWidth); // 瀏覽器寬度
console.log(window.innerHeight); // 高度

// 視窗操作
window.alert("歡迎！");
let name = window.prompt("請輸入名字：");
let isOk = window.confirm("確定要刪除嗎？");

// 計時
let timer = window.setTimeout(() => console.log("3 秒後執行"), 3000);
window.clearTimeout(timer);

let interval = window.setInterval(() => console.log("每秒一次"), 1000);
window.clearInterval(interval);

// 視窗控制
let win = window.open("https://example.com", "_blank");
window.scrollTo(0, 500);
```

### 26.2. location 物件

```js
console.log(location.href); // 完整網址
console.log(location.search); // ?查詢字串
console.log(location.hash); // #片段識別
console.log(location.host); // 主機與埠號
console.log(location.pathname); // 路徑
console.log(location.protocol); // 協議 https

// 導頁與重新整理
location.reload();
location.replace("https://example.com");
location.assign("https://example.com");
```

### 26.3. navigator 物件

```js
console.log(navigator.cookieEnabled); // 是否啟用 cookie
navigator.geolocation.getCurrentPosition((pos) => {
	console.log(pos.coords.latitude, pos.coords.longitude);
});
console.log(navigator.language); // 使用語言
console.log(navigator.userAgent); // 瀏覽器資訊
```

### 26.4. history 物件

```html
<a href="javascript:history.back();">上一頁</a>
<a href="javascript:history.forward();">下一頁</a>
<script>
	document.write("瀏覽紀錄長度：" + history.length);
</script>
```

### 26.5. screen 物件

```js
console.log("螢幕寬度：" + screen.width);
console.log("螢幕高度：" + screen.height);
```

## 27. Array 物件

```javascript
// 除此與新增元素
let numbers = [1, 2, 3];
numbers.push(4); // 在尾部新增
numbers.unshift(0); // 在開頭新增
numbers.pop(); // 移除最後一個元素
numbers.shift(); // 移除第一個元素
console.log(numbers); // [1, 2]
```

```javascript
// 切片與替代
let arr = ["A", "B", "C", "D"];
console.log(arr.slice(1, 3)); // ["B", "C"]
arr.splice(1, 2, "X", "Y"); // 替換 B 和 C
console.log(arr); // ["A", "X", "Y", "D"]
```

```javascript
// forEach()
let data = ["A", "B", "C"];
data.forEach((item, index) => {
	console.log(`${index}: ${item}`);
});
```

```javascript
// map()
let numbers = [1, 2, 3];
let squared = numbers.map((num) => num * num);
console.log(squared); // [1, 4, 9]
```

```javascript
// filter()
let words = ["apple", "banana", "cherry", "date"];
let filtered = words.filter((word) => word.length > 5);
console.log(filtered); // ["banana", "cherry"]
```

```javascript
// reduce()
let nums = [1, 2, 3, 4];
let sum = nums.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 10
```

```javascript
// 排序 sort()
let arr = [3, 1, 4, 1, 5, 9];
arr.sort((a, b) => a - b);
console.log(arr); // [1, 1, 3, 4, 5, 9]
```

```javascript
// 反轉 reverse()
let arr = [1, 2, 3, 4];
arr.reverse();
console.log(arr); // [4, 3, 2, 1]
```

```javascript
// 平化 flat()
let nested = [1, [2, [3, 4]]];
console.log(nested.flat(2)); // [1, 2, 3, 4, 5]
```

```javascript
// 操作 includes()
let list = ["apple", "banana", "cherry"];
console.log(list.includes("banana")); // true
console.log(list.includes("grape")); // false
```

```javascript
// 搜尋 find() / findIndex()
let people = [
	{ name: "Alice", age: 25 },
	{ name: "Bob", age: 30 },
	{ name: "Charlie", age: 35 },
];

console.log(people.find((person) => person.age > 28));
console.log(people.findIndex((person) => person.age > 28));
```

```javascript
// 運算器 keys() / values() / entries()
let letters = ["a", "b", "c"];
let keyIterator = letters.keys();
let valIterator = letters.values();
let entIterator = letters.entries();

for (let key of keyIterator) console.log(key); // 0, 1, 2
for (let val of valIterator) console.log(val); // a, b, c
for (let [index, val] of entIterator) console.log(index, val); // 0 a, 1 b, 2 c
```

## 28. 類別(Class)

繼承 (Inheritance)：允許 class 繼承另一個 class，讓子類別擁有父類別的方法和屬性
類別的 Getter 和 Setter：使用 get 和 set 來保護類別屬性的存取。

### 28.1. [Lab：class 操作](./code/Operate_Class.html)

## 29. 回調函數(callback)

一個很大的 Process，他會需要一段時間。
因為所有的網路請求都可能會造成阻塞 JS 執行，導致後續任務無法被快速處裡。
同步 (Synchronous) 與 異步 (Asynchronous)

```js
// 異步回調函數的應用
console.log("開始");

setTimeout(() => {
	console.log("執行回調函數");
}, 2000); // 延遲 2 秒後執行

console.log("結束");

/*
輸出順序：
開始
結束
執行回調函數
*/
```

```js
// 回調函數的基礎範例
function processUserInput(callback) {
	const name = "Alice";
	callback(name); // 調用回調函數，並傳入參數
}

function greet(name) {
	console.log(`Hello, ${name}!`);
}

// 使用回調函數
processUserInput(greet);
```

## 30. Promise

解決 callback hell（回呼地獄）：多層巢狀的 callback 寫法讓程式難以維護。
promise(承諾)：就像我們在現實中承諾對方做一件事：

-   待定(pending)
-   履行(resolve)
-   不履行(reject)

```js
// 傳統 callback hell
setTimeout(() => {
	console.log("步驟 1: 準備食材完成");
	setTimeout(() => {
		console.log("步驟 2: 加熱鍋具完成");
		setTimeout(() => {
			console.log("步驟 3: 加入食材並煮熟完成");
			setTimeout(() => {
				console.log("步驟 4: 調味完成，準備上菜");
				console.log("所有步驟完成，上菜！");
			}, 1000);
		}, 3000);
	}, 1000);
}, 2000);
```

```js
// 使用 Promise 改寫流程
function prepareIngredients() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("步驟 1: 準備食材完成");
			resolve();
		}, 2000);
	});
}

function heatPan() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("步驟 2: 加熱鍋具完成");
			resolve();
		}, 1000);
	});
}

function cookIngredients() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("步驟 3: 加入食材並煮熟完成");
			resolve();
		}, 3000);
	});
}

function addSeasoning() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("步驟 4: 調味完成，準備上菜");
			resolve();
		}, 1000);
	});
}

// 主流程
console.log("開始準備流程...");
prepareIngredients()
	.then(() => heatPan())
	.then(() => cookIngredients())
	.then(() => addSeasoning())
	.then(() => {
		console.log("所有步驟完成，上菜！");
	})
	.catch((error) => {
		console.error("發生錯誤：", error);
	});
```

```js
// 實作範例（二）：resolve、reject、finally 示範
// 函數定義
function getEven() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const n = Math.floor(Math.random() * 100);
			console.log("生成的數字:", n);
			if (n % 2 === 0) {
				resolve(n); // 偶數
			} else {
				reject("生成的數字不是偶數"); // 奇數
			}
		}, 1000);
	});
}

// 使用方式
getEven()
	.then((result) => {
		result = result + 10;
		console.log("then 第一環節", result);
		return result;
	})
	.then((result) => {
		result = result / 2;
		console.log("then 第二環節", result);
		return result;
	})
	.then((result) => console.log("then:", result))
	.catch((error) => console.error("error:", error))
	.finally(() => console.log("執行結束~~"));
```

## 31. 非同步：async 與 await

| 關鍵字  | 說明                                                           |
| ------- | -------------------------------------------------------------- |
| `async` | 宣告函數為非同步，回傳的是 Promise                             |
| `await` | 等待一個 Promise 完成，並回傳結果（只能在 `async` 函數中使用） |

Promise 解決了 callback hell，但如果 `.then` 過多，仍然會造成 **巢狀結構**，不易閱讀。
`async/await` 語法讓我們可以 **像寫同步程式一樣寫非同步程式**，讓邏輯更清晰。

```js
// 範例：基本 async/await 用法
// 定義模擬非同步函數
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
		const result = await fetchData(); // 等待 fetchData 結果
		console.log(result); // 輸出結果
	} catch (error) {
		console.error("發生錯誤:", error);
	}
}

getData(); // 執行函數
```

---

### 31.1. Lab 範例：整合 Promise 實作料理流程

```js
// 各步驟 Promise 函數（與前面 Promise 範例相同）：
function prepareIngredients() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("步驟 1️⃣: 準備食材完成");
			resolve();
		}, 2000);
	});
}

function heatPan() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("步驟 2️⃣: 加熱鍋具完成");
			resolve();
		}, 1000);
	});
}

function cookIngredients() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("步驟 3️⃣: 加入食材並煮熟完成");
			resolve();
		}, 3000);
	});
}

function addSeasoning() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("步驟 4️⃣: 調味完成，準備上菜");
			resolve();
		}, 1000);
	});
}
```

```js
// 使用 async/await 重構流程：
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

cookProcess(); // 執行主流程
```

## 32. Fetch API

Fetch API 是 JavaScript 提供的方式，用於向伺服器發送 HTTP 請求並取得回應。
它基於 Promise，可簡潔地處理非同步資料請求，替代過去的 `XMLHttpRequest`。

### 32.1. 基本語法與使用方式

```js
// 發送 GET 請求
fetch(url)
	.then((response) => response.json()) // 解析 JSON 格式的回應
	.then((data) => console.log(data)) // 處理回應資料
	.catch((error) => console.error("Error:", error));
```

```js
// 發送 POST 請求
fetch(url, {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify({ key: "value" }),
})
	.then((response) => response.json())
	.then((data) => console.log("Success:", data))
	.catch((error) => console.error("Error:", error));
```

### 32.2. Request 與 Response 常見屬性

Request 常見屬性：

-   `method`: HTTP 方法（GET、POST、PUT、DELETE）
-   `headers`: 設定請求標頭
-   `body`: 請求資料（不能與 GET/HEAD 同時使用）
    Response 常見屬性：
-   `headers`: 回應的標頭資料
-   `ok`: 是否成功（布林值）
-   `status`: 狀態碼（如 200 表成功）
-   `statusText`: 狀態文字（如 OK）

### 32.3. 注意：Fetch 不會自動拋錯

即使伺服器回傳 **404 或 500** 錯誤，fetch 還是會 resolve，需**手動檢查 `response.ok`**：

```js
fetch(url)
	.then((response) => {
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		return response.json();
	})
	.then((data) => console.log(data))
	.catch((error) => console.error("Fetch error:", error));
```

### 32.4. 資料解析方法（Response 物件）

Fetch 回傳的 `response` 是一種 `ReadableStream`，可透過下列方法處理資料：

| 方法                     | 說明                     |
| ------------------------ | ------------------------ |
| `response.text()`        | 取得純文字               |
| `response.json()`        | 解析 JSON 資料           |
| `response.blob()`        | 取得二進位資料（如圖片） |
| `response.arrayBuffer()` | 取得原始二進位           |
| `response.formData()`    | 表單資料格式             |

### 32.5. 使用 async/await 簡化 fetch 操作

```js
async function fetchData() {
	try {
		let response = await fetch(url);
		if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
		let data = await response.json();
		console.log(data);
	} catch (error) {
		console.error("Error:", error);
	}
}

fetchData();
```

### 32.6. [Lab：fatch Pikachu 的 API](./code/Fetch_Pokemon.html)

## 33. 產生器（Generator）

產生器（Generator）是一種特殊函數，具有「**暫停**」與「**恢復執行**」的能力。
使用 `function*` 宣告，搭配 `yield` 來暫停函數執行並回傳值。
每次呼叫 `.next()` 都會執行到下一個 `yield`。
應用場景

-   延遲加載資料：逐步取得資料，避免一次載入全部造成記憶體壓力。
-   非同步控制流程：配合 `async` 與 `for await...of` 可控制多次非同步操作流程。
-   產生無限序列或自訂邏輯資料流

### 33.1. 語法結構

```js
function* myGenerator() {
	let number = 0;
	while (true) {
		number++;
		yield number.toString().padStart(3, "0");
	}
}

const iterator = myGenerator();
console.log(iterator.next()); // { value: '001', done: false }
console.log(iterator.next()); // { value: '002', done: false }
console.log(iterator.next()); // { value: '003', done: false }

// `next()` 回傳物件說明：
// value：當前 `yield` 所產生的值
// done：是否完成（遇到 `return` 或跑完）
```

### 33.2. Lab：非同步產生器 + for await...of

```js
// 模擬資料來源
function fetchStatusResult() {
	return new Promise((resolve) => {
		setTimeout(() => {
			const statuses = ["ready", "in progress", "completed"];
			const status = statuses[Math.floor(Math.random() * statuses.length)];
			console.log("Fetched status:", status);
			resolve(status);
		}, 2000); // 模擬延遲
	});
}

// 定義 async generator 函數
async function* checkStatus(times) {
	for (let i = 1; i <= times; i++) {
		const status = await fetchStatusResult(); // 等待資料
		yield status; // 將狀態逐步回傳
	}
}

// 控制流程邏輯主程式
(async () => {
	let generator = checkStatus(3);
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

## 34. Symbol

Symbol 是 ES6（ECMAScript 2015）新增的原始資料型別，與 string、number、boolean 並列。
用於建立一個唯一的識別符號（identifier），常見用途為物件的私有屬性，避免命名衝突。

```js
// 建立 Symbol
const mySymbol = Symbol();
console.log(mySymbol); // Symbol()

const symbolWithDescription = Symbol("description");
console.log(symbolWithDescription); // Symbol(description)
```

```js
// 特性說明：每次建立的 Symbol 都是**唯一**的，即使描述文字一樣。
const sym1 = Symbol("unique");
const sym2 = Symbol("unique");
console.log(sym1 === sym2); // false
```

Symbol 與字串轉換注意事項

-   Symbol 不能自動轉為字串，直接與字串串接會產生錯誤。
-   可使用 `String()` 或 `.toString()` 明確轉換：

```js
let sym = Symbol("foo");
console.log(String(sym)); // "Symbol(foo)"
console.log(sym.toString()); // "Symbol(foo)"
console.log("The symbol is " + sym); // ❌ TypeError
```

### 34.1. Symbol 作為物件屬性鍵

定義私有屬性：

```js
const ID = Symbol("id");
const user = {
	name: "Alice",
	[ID]: 12345,
};

console.log(user[ID]); // 12345
console.log(user); // { name: "Alice", [Symbol(id)]: 12345 }
```

### 34.2. 取得 Symbol 屬性鍵

可使用 `Object.getOwnPropertySymbols(obj)` 來取得物件中的 Symbol 鍵：

```js
const obj = {
	[Symbol("secret")]: "Hidden value",
	visible: "I am visible",
};

const symbols = Object.getOwnPropertySymbols(obj);
console.log(symbols); // [ Symbol(secret) ]
console.log(obj[symbols[0]]); // "Hidden value"
```

## 35. 事件處理

在瀏覽器中，每個 DOM 事件（例如 `click`、`keydown`）都有以下兩個階段的傳遞流程：
事件捕捉（Event Capturing）

-   從**最外層的元素開始**，往內層傳遞直到事件目標。
-   先觸發父元素 → 子元素。
-   必須在 `addEventListener` 中設定第三個參數為 `true` 才會生效。
    事件冒泡（Event Bubbling）
-   事件從**目標元素**開始，向外層父元素**逐層向上冒泡**。
-   為事件傳遞的預設模式。
-   事件會依序觸發：目標 → 父層 → 更外層...

### 35.1. [Lab：事件處裡](./code/Event.html)

## 36. 事件類型

| 類型    | 常見事件                            |
| ------- | ----------------------------------- |
| UI 視窗 | resize、scroll、error、load、unload |
| 鍵盤    | keydown、keyup                      |
| 滑鼠    | click、mouseover、mousemove         |
| 表單    | input、change、submit、focus、blur  |
| 文件    | DOMContentLoaded、beforeunload      |

與視窗或文件變動有關的事件（UI 事件）

| 事件名稱 | 說明                           | 範例                                     |
| -------- | ------------------------------ | ---------------------------------------- |
| `resize` | 使用者調整瀏覽器視窗大小時觸發 | `window.addEventListener("resize", ...)` |
| `scroll` | 使用者捲動網頁或元素時觸發     | `window.addEventListener("scroll", ...)` |
| `error`  | 當載入資源失敗時觸發           | `window.addEventListener("error", ...)`  |

與頁面載入或卸載有關的事件

| 事件名稱           | 說明                                         |
| ------------------ | -------------------------------------------- |
| `load`             | 當整個網頁（含圖片、樣式等）載入完成時觸發   |
| `DOMContentLoaded` | 當 HTML 文件結構就緒（不含樣式圖檔）即觸發   |
| `beforeunload`     | 頁面即將離開前觸發，可提示使用者是否確定離開 |
| `unload`           | 使用者真正離開頁面時觸發（使用頻率低）       |

`beforeunload` 小技巧：

```js
window.addEventListener("beforeunload", (e) => {
	e.preventDefault();
	e.returnValue = ""; // 某些瀏覽器需要設定才能顯示提示
});
```

與鍵盤輸入有關的事件

| 事件名稱   | 說明                               |
| ---------- | ---------------------------------- |
| `keydown`  | 按下鍵盤任意鍵時觸發               |
| `keyup`    | 鍵盤按鍵釋放時觸發                 |
| `keypress` | 按下能輸出的按鍵時觸發（已被棄用） |

```js
input.addEventListener("keydown", (e) => {
	console.log("按鍵：", e.key);
});
```

與滑鼠操作有關的事件

| 事件名稱                 | 說明                  |
| ------------------------ | --------------------- |
| `click`                  | 按下滑鼠並釋放        |
| `dblclick`               | 快速連點兩下          |
| `mousedown` / `mouseup`  | 按下 / 放開滑鼠鍵時   |
| `mousemove`              | 移動滑鼠              |
| `mouseover` / `mouseout` | 滑鼠進入 / 離開元素時 |
| `mousewheel`             | 使用滑鼠滾輪          |

```js
img.addEventListener("mouseover", () => {
	img.src = "hover.png";
});
img.addEventListener("mouseout", () => {
	img.src = "normal.png";
});
```

與表單操作有關的事件

| 事件名稱                 | 說明                                        |
| ------------------------ | ------------------------------------------- |
| `input`                  | 使用者在 `<input>`、`<textarea>` 輸入時觸發 |
| `change`                 | 表單元素改變後（例如選單選項改變）          |
| `submit`                 | 表單送出時觸發                              |
| `reset`                  | 表單被重設時                                |
| `cut` / `copy` / `paste` | 使用者剪下 / 複製 / 貼上時觸發              |
| `focus` / `blur`         | 表單元素獲得 / 失去焦點時觸發               |

```js
input.addEventListener("focus", () => {
	msg.textContent = "請輸入 8 位數編號";
});

input.addEventListener("blur", () => {
	if (input.value.length !== 8) {
		msg.textContent = "輸入錯誤，需滿 8 碼";
	} else {
		msg.textContent = "";
	}
});
```

## 37. 事件處理 / 監聽教學筆記

事件處理的三個重點確認：

1. 哪個元素觸發事件？
2. 要處理哪個事件（如 click、keyup）？
3. 使用哪個方式綁定事件處理函數？

### 37.1. 方法一：HTML 屬性內直接指定事件處理函數

特點：

-   簡單直接，適合快速測試。
-   不建議用於大型專案，難以維護與除錯。

```html
<button onclick="f()">顯示訊息</button>

<script>
	function f() {
		window.alert("hello world");
	}
</script>
```

### 37.2. 方法二：使用 JavaScript 綁定事件監聽器（DOM Level 2）

特點：

-   可綁定多個事件處理函數。
-   可動態控制事件邏輯。

```html
<button id="btn">顯示訊息</button>

<script>
	let btn = document.querySelector("#btn");

	btn.addEventListener("click", () => {
		window.alert("hello world01");
	});

	btn.addEventListener("click", () => {
		window.alert("hello world02");
	});
</script>
```

### 37.3. 取消事件監聽器

```js
function show() {
	window.alert("hello world02");
}

btn.addEventListener("click", show);
btn.removeEventListener("click", show);
```

注意：

-   `removeEventListener` 移除時，**函數必須是命名函數**（不能是匿名箭頭函數）。
-   綁定與移除的函數參考要一致，才能成功移除。
