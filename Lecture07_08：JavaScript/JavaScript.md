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

## 物件導向基本概念

![upgit_20250322_1742653877.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/03/upgit_20250322_1742653877.png)

-   什麼是物件 (Object)?

    -   物件 代表生活中的事物，由 屬性 (Property) 和 方法 (Method) 組成。
    -   例如：汽車 是一個物件，包含 品牌 (屬性) 和 啟動 (方法)。

-   屬性 (Property)
    -   描述物件的特徵或狀態。
    -   範例：汽車的 顏色、品牌、速度。
-   方法 (Method)
    -   描述物件可以執行的行為或操作。
    -   startCar()：啟動汽車
    -   changeSpeed()：改變速度
    -   brake()：剎車
-   事件 (Event)

    -   特定情境下物件的反應 (例如使用者觸發的動作)。
    -   accelerate (加速事件)：當按下油門時觸發。

-   類別與物件的關係
    -   類別 (Class)：是一種模板或藍圖，用於創建具相同屬性與方法的物件。
        -   例如：Car 類別可以用來創建 Toyota、Tesla、BMW 等不同的物件。
    -   物件 (Object)：物件是類別的實例化結果。

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

```js

```
