## JavaScript 是甚麼

-   JavaScript 是一種應用廣泛的瀏覽器端 Script，瀏覽器大多內建 JavaScript 直譯器。
-   JavaScript 和 HTML、CSS 都是網頁設計的核心技術，其中 JavaScript 用來定義網頁的行為，
    -   例如即時更新地圖、輪播圖片等。

## 瀏覽器基本運作流程

-   瀏覽器透過作業系統，將網址發送給 DNS Server。
-   DNS Server 解析網址，並回傳對應的 IP 位址。
-   瀏覽器取得 IP 位址後，透過 TCP/IP 通訊協定，向該 IP 對應的目標伺服器（Target Server）發出網路請求。
-   目標伺服器收到請求後，會將所需的資源封裝成資料封包並回傳。
-   瀏覽器接收到資料封包後，解析其中的檔案內容與狀態資訊。
-   HTML 和 CSS 分別經由各自的 Parser 解析，建立出樹狀結構的資料模型：DOM Tree 與 CSSOM Tree。
-   瀏覽器接著根據 DOM Tree 與 CSSOM Tree 建立 Render Tree，計算每個節點在頁面上的實際位置、大小、形狀等資訊，形成 Layout 資料模型。
-   最後，瀏覽器依據 Layout 將內容渲染（Render）到頁面上，顯示出完整的網頁畫面。

![upgit_20250322_1742648477.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/03/upgit_20250322_1742648477.png)

## 在 HTML 中寫 JS

-   寫在`<script>`裡面。
-   一般會建議寫在最後面，尤其是當有大的 JavaScript 程式時，先讓渲染引擎將網頁顯示出來再載入 JavaScript 程式，比較不會有畫面延遲的情況。

![upgit_20250322_1742648521.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/03/upgit_20250322_1742648521.png)

## Data Type

-   JavaScript 的型別分為基本型別(primitive type)與物件型別(object type)兩種類型。
-   基本型別(primitive type： number 、 string 、 boolen、 undefined、 null 等。
-   物件型別(object type)：
    -   Funtion
    -   Array
    -   Object(JS 的 Object 比較像是 python 的 dictionery，屬於一種關聯陣列(associative array))

## 作用域(Scope)

![upgit_20250322_1742648756.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/03/upgit_20250322_1742648756.png)

-   全域作用域 (Global Scope)：變數在程式的任何地方都可以存取與修改。
-   函式作用域 (Function Scope)：變數在函式內部宣告，只能在該函式內部存取，函式外部無法存取。
-   區塊作用域 (Block Scope)：
    -   變數在 {} 大括號內宣告，只能在該區塊內存取。
    -   let 和 const 支援區塊作用域，var 不會被區塊限制

## 變數宣告：var、let、const

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

## 函式(Function)

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

## Closure（閉包）

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

## Currying（柯里化）

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

## 立即執行函數 IIFE（Immediately Invoked Function Expression）

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

## 6. 物件導向基本概念

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

## 7. 建立物件的兩種方式

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

## 8. 物件導向(OOP)的四大特性

### 8.1. 封裝（Encapsulation）

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

### 8.2. 繼承（Inheritance）

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

### 8.3. 多型（Polymorphism）

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

### 8.4. 抽象（Abstraction）

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

## 9. 內建物件--Number

常用屬性

![upgit_20250423_1745388218.png|661x222](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/04/upgit_20250423_1745388218.png)

常用方法
![upgit_20250423_1745388228.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/04/upgit_20250423_1745388228.png)

## 10. 內建物件--String

![upgit_20250423_1745388245.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/04/upgit_20250423_1745388245.png)

![upgit_20250423_1745388251.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/04/upgit_20250423_1745388251.png)

## 11. 內建物件-- Math

![upgit_20250423_1745388299.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/04/upgit_20250423_1745388299.png)

## 12. 內建物件-- Date

![upgit_20250423_1745388308.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/04/upgit_20250423_1745388308.png)

## 13. 內建物件-- Array

![upgit_20250423_1745388324.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/04/upgit_20250423_1745388324.png)

![upgit_20250423_1745388329.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/04/upgit_20250423_1745388329.png)

## 14. 錯誤處理機制（Error Handling）

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

## Error 物件

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

## Prototype

每個 JavaScript 物件都有一個內建的 `[[Prototype]]` 屬性，指向另一個物件，這個物件就是它的「原型」。
原型提供屬性與方法的「繼承」來源，這稱為 Prototype Inheritance（原型繼承）。
好處是：節省記憶體、提升重複使用性。

### 建構函式（Constructor Function）與 Prototype

建構函式：是一種特殊的函式，用於建立多個類似的物件。

```js
function Person(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
}

const ta = new Person({ name: "TA", age: 23 });
```

### 添加 Prototype 方法

所有由 Person 建構的物件都可以共用這個方法：

```js
Person.prototype.introduce = function () {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
};
ta.introduce(); // Hi, I'm TA and I'm 23 years old.
```

### 擴展 Prototype 屬性與方法

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

### 原型鏈（Prototype Chain）

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

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```

```js

```
