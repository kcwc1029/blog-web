## 1. 查詢是否安裝 nodejs

```bash
node -v
```

![upgit_20241228_1735374625.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241228_1735374625.png)

## 2. 運作方式

-   寫一格 js 檔`first_app.js`

```js
console.log("hello");
```

-   在終端執行：`node .\first_app.js`

## 3. 引入模組方式

-   假設要 include fs 這個內建模組

```js
const fs = require("fs");
fs.writeFileSync("hello.txt", "hello 我是小菜機");
```

## 4. REPL

-   這是 nodejs 中會提到得準則
-   R: Read：讀取用戶的輸入
-   E: Evaluate：執行用戶輸入的程式碼。
-   P: Print：將計算結果或執行結果輸出給用戶
-   L: Loop：等待下一個輸入，進行下一次操作。

## 5. 建立 server

-   執行以下代碼，並在執行
-   在瀏覽器輸入http://127.0.0.1:3000/

```js
const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(3000);
```

-   伺服器會一直保持監聽狀態
-   如果需要退出

```js
const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.rul);
    process.exit(); // NOTE: 結束process
});

server.listen(3000);
```

## 6. 了解 request

```js
const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url); // 提取 URL
    console.log(req.method);
    console.log(req.headers);
});

server.listen(3000);
```

-   輸出如下：

![upgit_20241228_1735376251.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241228_1735376251.png)

## 7. 建立回傳網頁

```js
const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Document</title>
                </head>
                <body>
                    <h3>Hello from Node.js server</h3>
                </body>
            </html>
        `);
        res.end(); // 結束 HTTP 回應
    }
});

server.listen(3000);
```

-   示範使用 get 跟 post
-   輸入http://127.0.0.1:3000/或http://127.0.0.1:3000/page1，顯示get的頁面
-   輸入http://127.0.0.1:3000/page2，顯示表單頁面，在提交之後又回到page1

```js
const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === "/" || url === "/page1") {
        res.setHeader("Content-Type", "text/html");
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Document</title>
                </head>
                <body>
                    <h3>Hello from Node.js server</h3>
                </body>
            </html>
        `);
        res.end(); // 結束 HTTP 回應
    } else if (url === "/page2") {
        res.setHeader("Content-Type", "text/html");
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Document</title>
                </head>
                <body>
                    <form action="/page1" method="post">
                        <input type="text" />
                        <button type="submit">提交</button>
                    </form>
                </body>
            </html>
        `);
        res.end(); // 確保回應結束
    }
});

// 啟動伺服器，監聽 3000 埠
server.listen(3000);
```

## 8. Node.js 中的 Streams 和 Buffers

-   Streams 是一種處理大規模數據的方式，數據不是一次性讀取，而是分塊（chunk）傳遞。
    -   允許程序在數據未完全到達時，就能開始處理，提升效率。
    -   適用於處理大型文件、數據流或長時間連接。
-   Buffers 是一段臨時存儲空間，用於存儲數據流中的每個數據塊，直到它被完整解析。
    -   將分塊數據進行組裝或處理，確保完整性。

![upgit_20241228_1735379821.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241228_1735379821.png)

-   輸入http://127.0.0.1:3000/page2後，會到表單頁面。
-   填入資料按下提交，會載入置 page3，並把表單資料純入 txt
-   存入後在跳轉回 page1

```js
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/" || url === "/page1") {
        res.setHeader("Content-Type", "text/html");
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Document</title>
                </head>
                <body>
                    <h3>Hello from Node.js server</h3>
                </body>
            </html>
        `);
        res.end(); // 結束 HTTP 回應
    } else if (url === "/page2") {
        res.setHeader("Content-Type", "text/html");
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Document</title>
                </head>
                <body>
                    <form action="/page3" method="post">
                        <input type="text" name="message" />
                        <button type="submit">提交</button>
                    </form>
                </body>
            </html>
        `);
        res.end(); // 確保回應結束
    } else if (url === "/page3" && method === "POST") {
        const body = []; // 存放請求的資料塊

        // NOTE: 當伺服器接收到請求資料時，會觸發 data 事件
        req.on("data", (chunk) => {
            body.push(chunk);
        });
        // NOTE: 當所有資料接收完成後，觸發 end 事件
        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody); // 輸出：message=su3cl3
            const message = parsedBody.split("=")[1]; // 提取表單中的 `message`
            fs.writeFileSync("message.txt", message);
        });
        res.statusCode = 302; // 設定狀態碼為 302，表示重新導向。
        res.setHeader("Location", "/");
        return res.end();
    }
});

// 啟動伺服器，監聽 3000 埠
server.listen(3000);
```

## 9. 模組導出 (module.exports)

-   module.exports 用於導出模組，使其他文件可以引用和使用這個模組中定義的功能或數據。
-   [module exports](./module%20exports/app.js)
-   檔案結構：

```
/my-app
  ├── app.js       // 主應用程式檔案
  ├── routes.js    // 模組檔案
```

## 10. NPM(Node Package Manager)

-   NPM（Node Package Manager）是 Node.js 的套件管理工具，主要功能包括：
    -   管理套件：可以輕鬆地安裝、更新、移除開源的 JavaScript 套件（libraries）。
    -   版本控制：幫助開發者管理不同版本的套件。
    -   共享模組：允許開發者將自己的模組上傳到 NPM 的官方倉庫，供其他人使用。
-   指令介紹：

```js
// 初始化一個新的專案，生成一個 package.json 檔案，這是專案的配置檔案。
npm init

// 安裝套件
npm install <package-name>// 安裝指定的套件，並將其添加到專案的dependencies（運行時依賴）中 -> node_modules/ 資料夾中
npm install <package-name> --save-dev
npm install <package-name> -g // 全域安裝指定的套件，使該套件可以在系統的任何地方使用

// 移除套件
npm uninstall <package-name>

// 更新所有套件
npm update

// 更新特定套件
npm update <package-name>

// 查看本地安裝的套件
npm list
```

-   使用 scripts：package.json 中的 scripts 可以幫助執行常用指令

```js
"scripts": {
  "start": "node app.js", // 執行 npm start，會運行 node app.js
  "dev": "nodemon app.js" // 執行 npm run dev，會運行 nodemon app.js（需要先安裝 nodemon）
}
```

-   下載套件後，套件會儲存在資料夾 node_modules
-   使用 .gitignore：為了防止將 node_modules/ 上傳到 Git 儲存庫，建立 .gitignore 檔案，並添加以下內容：

```js
node_modules/
```

-   因此在後期需要重新建置，就依照 package.json 進行安裝`npm install`

## 11. 安裝第三方套件(nodemon)

-   nodemon 是一個用於 Node.js 開發的工具，可以自動監測程式碼變化並重啟伺服器，讓開發過程更加高效。
-   在使用的話分兩種

```js
// 第一種：安裝本地
npm install nodemon

// 使用：要使用npx(是隨 npm 一起提供的工具，用於直接運行本地或遠程模組)
npx nodemon app.js

// ----------------------------------

// 第二種：安裝全域環境
npm install -g nodemon
// 使用：
nodemon app.js
```

## 12. Express

-   Express.js 是一個基於 Node.js 的 Web 應用框架，用於構建伺服器端應用程式。
-   是目前最受歡迎的 Node.js 框架之一，提供簡潔的 API 和高效的工具來開發 Web 和 API 服務。
-   主要特點
    -   是一個非常輕量的框架，僅提供基本的功能，讓開發者可以自由選擇並整合其他工具或中介軟體。
    -   簡化了 HTTP 伺服器的建立，讓開發者可以快速構建功能強大的應用程式。
    -   中介軟體支持： Express.js 支持各種中介軟體（middleware），可用於處理請求、回應、錯誤處理等。
    -   路由系統： 提供靈活且功能強大的路由機制，支持多種請求方式（GET、POST、PUT、DELETE 等）以及動態參數。
    -   與 Node.js 無縫整合： Express.js 完全基於 Node.js，充分利用了它的非同步和事件驅動特性。
    -   社群與擴展性： 擁有龐大的社群和豐富的擴展套件，可用於驗證、日誌記錄、數據庫連接等。
-   安裝

```js
npm install express
```

-   使用

```js
const http = require("http");
const express = require("express");
const app = express();

// 根路徑的 GET 請求
app.get("/", (req, res) => {
    res.send("Hello from Express!");
});

// 啟動伺服器
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
```

## 13. Middleware（中介軟體）

![upgit_20241228_1735391325.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241228_1735391325.png)

-   Middleware 是指在處理客戶端請求 (Request) 和伺服器回應 (Response) 之間執行的函數。
-   主要作用是對請求和回應進行處理，或者在某些條件下停止請求處理流程，回應客戶端。
-   Middleware 是按照定義順序執行的，從上到下依次執行，直到調用 next() 或終止流程（例如用 res.send() 回應）。
-   Middleware 的用途
    -   請求處理： 修改或記錄請求資訊，例如日誌記錄、驗證請求資料。
    -   授權和驗證： 確認用戶是否有權訪問特定資源。
    -   靜態資源管理： 提供靜態資源，如 HTML、CSS 和 JavaScript 檔案。
    -   錯誤處理： 捕獲請求處理中的錯誤並返回適當的回應。
    -   自訂功能： 定制特定的功能邏輯，例如限速、緩存或數據格式化。
-   使用：

```js
const http = require("http");
const express = require("express");
const app = express();

// Middleware 1: 記錄請求的時間
app.use((req, res, next) => {
    console.log("Time:", new Date());
    next(); // 繼續下一個 Middleware
});

// Middleware 2: 打印請求的 URL
app.use((req, res, next) => {
    console.log("Requested URL:", req.url);
    next();
});

// 最終處理請求並回應(middleware適用於所有請求方法)
app.use("/", (req, res, next) => {
    res.send("Hello from Express!");
});

// 啟動伺服器
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
```

## 14. 解析參數--get

### 14.1. 路由參數（Route Parameters）

-   包括 `GET` 方法解析路由參數和查詢參數的程式碼
-   路由參數用冒號（:）定義，並且可以通過 req.params 訪問

```js
const express = require("express");
const app = express();

// 14. 解析參數--GET

// 14.1. 路由參數（Route Parameters）範例
app.get("/user/:id", (req, res) => {
    const userId = req.params.id; // 取得路由參數
    res.send(`Hello, user with ID: ${userId}`);
});

// 14.2. 查詢參數（Query Parameters）範例
app.get("/search", (req, res) => {
    const query = req.query.q; // 取得查詢參數
    res.send(`You searched for: ${query}`);
});

app.use("/", (req, res, next) => {
    res.send("Hello from Express!");
});

// 啟動伺服器
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
```

## 15. 解析參數--post

```js
const http = require("http");
const express = require("express");
const app = express();

// NOTE: 使用內建中介軟體解析 POST 請求的 body
app.use(express.urlencoded({ extended: true }));

app.use("/add-product", (req, res, next) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
            </head>
            <body>
                <form action="/product" method="post">
                    <label for="name">姓名：</label>
                    <input type="text" name="name" />
                    <button type="submit">提交</button>
                </form>
            </body>
        </html>
        `);
});

app.use("/product", (req, res, next) => {
    console.log(req.body);
    console.log("----------");
    console.log(req.body.name);
    res.redirect("/");
});

app.use("/", (req, res, next) => {
    res.send("Hello from Express!");
});

// 啟動伺服器
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
```

## 16. body-parser

-   body-parser 是一個 Node.js 的中介軟體，專門用於解析 HTTP 請求的請求體（body）。
-   在處理 POST、PUT 等帶有請求體的 HTTP 請求時，body-parser 可以將請求體解析為 JavaScript 對象，方便後端開發處理數據。
-   GET 請求通常只包含 URL 和查詢參數，這些數據可用 req.query 或 req.params 獲取。
-   POST、PUT 請求通常包含數據（例如表單數據或 JSON），這些數據存放在請求體中，無法直接訪問。
-   安裝：npm install body-parser

```js
// NOTE: 使用Body-Parser的方式
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// 解析 JSON 格式的請求
app.use(bodyParser.json());

// 解析 URL 編碼格式的請求 (application/x-www-form-urlencoded)
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
    console.log(req.body); // 打印請求體數據
    res.send("Data received!");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
```

-   自 Express 4.16.0 起，body-parser 的核心功能被內建到 Express 中
-   你可以直接使用以下方式，而不需要額外安裝 body-parser。

```js
// NOTE: 直接取代bodyParser
const express = require("express");
const app = express();
// 解析 JSON
app.use(express.json());
// 解析 URL 編碼數據
app.use(express.urlencoded({ extended: true }));
```

## 17. express router

-   目前的程式碼都是將所有路由直接掛載在 app 實例上。
-   這種寫法在簡單的應用中沒有問題，但當路由增多、應用變得複雜時，維護性會降低。
-   使用 express.Router
    -   將每個子路由組織在一個 Router 中，並掛載到主應用

```
.
└── shop/
    ├── package.json
    ├── node_modules
    ├── routes/
    │   ├── admin.js
    │   └── shop.js
    └── app.js
```

![upgit_20241229_1735459969.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241229_1735459969.png)

-   [shop_v01](./shop_v01/app.js)

## 18. filter path

-   利用 router 去多一層路徑分類
-   [shop_v02](./shop_v02/app.js)
    -   輸入`http://127.0.0.1:3000`，是會抓不到頁面的。
    -   輸入`http://127.0.0.1:3000/shop/`才會進入`Hello from Express!`頁面。

## 19. 增加 404 not found

```js
// app.js
const express = require("express");

const app = express();
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(express.urlencoded({ extended: true })); // 中介軟體解析 POST 數據
app.use(adminRoutes);
app.use(shopRoutes);
// NOTE: 404 not found
app.use((req, res, next) => {
    res.status(404).send("<h3>404 not found</h3>");
});
app.listen(3000);
```

## 20. 結合 HTML--模板引擎(EJS)

-   這邊示範的是以後端 nodejs 為主，去傳資料給 HTML~~~
-   EJS 是一種簡單、靈活的模板引擎，允許你在 HTML 文件中嵌入 JavaScript。
-   使用類似 HTML 的語法，因此對有 HTML 基礎的學生非常友好。
-   它允許你將靜態頁面轉換為動態頁面，通過插入變量和執行邏輯生成動態內容。
-   在 Express 中使用 EJS

```js
// 安裝 EJS
npm install ejs

// 設置模板引擎(在app.js)
app.set("view engine", "ejs"); // 設置模板引擎為 EJS
app.set("views", path.join(__dirname, "views")); // 設置模板文件目錄
```

-   [ejs_v01](./ejs_v01/app.js)

## 21. EJS 傳遞參數到前端

-   基本渲染
-   [ejs_v02](./ejs_v02/app.js)

```html
<!-- 基本渲染 -->
<h1>Hello, <%= name %>!</h1>

<!-- 條件渲染 -->
<body>
    <% if (loggedIn) { %>
    <h1>Welcome back, <%= userName %>!</h1>
    <% } else { %>
    <h1>Please log in.</h1>
    <% } %>
</body>

<!-- 迴圈渲染 -->
<ul>
    <% items.forEach(item => { %>
    <li><%= item %></li>
    <% }) %>
</ul>
```

## 22. MVC(Model-View-Controller)

-   Model (模型)
    -   負責處理應用程式的 業務邏輯 和 數據操作。
    -   直接與資料庫交互，保存、讀取或修改數據。
-   View (視圖)
    -   負責處理用戶界面 (UI)，展示數據給用戶。
    -   與用戶交互，接收用戶的操作輸入。
-   Controller (控制器)
    -   負責處理用戶的請求，並控制應用程式的邏輯流程。
    -   調用 Model 獲取數據，並將數據傳遞給 View。
-   Routes (路由)
    -   負責將用戶請求分發到對應的控制器方法。
    -   定義 URL 路徑和 HTTP 方法的映射。

### 22.1. 以 MVC 架構將 node、vue 組起來

-   [fullstack_v01](./fullstack_v01/)
-   執行方式：開兩個終端，前端 npm run serve，後端 node app.js
-   後端 Node.js
    -   Model: models/product.js
    -   View: 提供 API，通過 JSON 傳遞數據
    -   Controller: controllers/product.js
    -   Routes: routes/product.js
-   前端 Vue

    -   View: 顯示產品數據和與用戶交互
    -   Controller: Vue 組件中的方法調用 API 並更新視圖
    -   Model: Vue 的狀態（data()）保存 UI 所需的數據

-   目錄結構

```
.
└── fullstack_v01/
    ├── backend/
    │   ├── controllers/
    │   │   └── product.js
    │   ├── models/
    │   │   └── product.js
    │   ├── routes/
    │   │   └── product.js
    │   └── app.js
    └── frontend/
        └── src/
            ├── views/
            │   └── ProductView.vue
            ├── components/
            │   └── ProductList.vue
            ├── App.vue
            └── main.js

```

![upgit_20241230_1735488651.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241230_1735488651.png)

## 23. SQL vs NoSQL

![upgit_20250105_1736065061.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/01/upgit_20250105_1736065061.png)

### 23.1. SQL

![upgit_20250105_1736065182.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/01/upgit_20250105_1736065182.png)

-   適用於結構化資料，數據表 (Tables) 和關聯。
-   例子：MySQL、PostgreSQL、Oracle。
-   適用場景：資料結構清晰且穩定。
-   需要強一致性 (如銀行交易)。

### 23.2. NoSQL

![upgit_20250105_1736065367.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/01/upgit_20250105_1736065367.png)

-   適用於非結構化或動態結構資料，無需固定模式。
-   例子：MongoDB、Firebase、Cassandra。
-   適用場景：資料結構經常變化 (如社交媒體)。
-   高度分散式系統 (如雲端儲存)。

## 24. SQLite

-   是一種 SQL 資料庫，屬於 關聯式資料庫管理系統 (RDBMS) 的範疇。
-   它有一些獨特的特性，使其與其他常見的 SQL 資料庫（如 MySQL、PostgreSQL）有所不同。
-   輕量級 (Lightweight)：
    -   是一個嵌入式資料庫，整個資料庫引擎由一個單一檔案組成，無需伺服器支持
-   基於文件 (File-Based)：
    -   SQLite 將所有數據存儲在單個檔案中，這與傳統 SQL 資料庫需要伺服器和多個數據文件不同。
    -   資料庫文件可以方便地移植到其他系統
-   無伺服器架構 (Serverless)：不需要安裝和管理伺服器進程，每個應用程式可以直接讀寫 SQLite 資料庫文件。

### 24.1. 套件比較：sqlite3、better-sqlite3

-   better-sqlite3 和 sqlite3 都是 Node.js 用於與 SQLite 數據庫交互的庫
-   sqlite3
    -   基於回調函數(callback)的非同步模型，支持 Promise（需要額外包裝）
    -   因為是非同步設計，適合處理多用戶請求或高並發的應用場景
    -   被更廣泛使用，文檔豐富。
    -   需要編譯，對系統依賴性更強。
-   better-sqlite3
    -   同步 API，設計簡潔。
    -   使用同步方式處理數據庫操作，代碼更清晰，但在高並發場景下可能需要小心性能問題。
    -   預編譯，安裝過程更簡單。
    -   相比之下，社區規模較小，但文檔質量很高。

![upgit_20250105_1736066317.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/01/upgit_20250105_1736066317.png)

-   課程以 sqlite3 為主，並以.then.catch 去寫(比較簡潔)
-   安裝：npm install sqlite3

![upgit_20250105_1736066758.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/01/upgit_20250105_1736066758.png)

-   建立連線/關閉資料庫

```js
// app.js
const express = require("express");
const path = require("path"); // 引入 path 模組
const sqlite3 = require("sqlite3").verbose(); // 引入 sqlite3 模塊並啟用詳細日誌
const app = express();

// 設置模板引擎
app.set("view engine", "ejs"); // 設置模板引擎為 EJS
app.set("views", path.join(__dirname, "views")); // 設置模板文件目錄

// 初始化資料庫
const db = new sqlite3.Database("mydatabase.db", (err) => {
    if (err) {
        console.error("❌ 無法打開數據庫：", err.message);
        return res.render("index", { result: "❌ 無法打開數據庫：" + err.message });
    }
    console.log("✅ 已成功連接到 SQLite 數據庫");
});

// NOTE: 根目錄頁面
app.get("/", (req, res) => {
    res.render("index", { result: "資料庫初始化完成" });
});

// 啟動伺服器
app.listen(3000, () => {
    console.log("🚀 伺服器已啟動：http://localhost:3000");
});

// 捕獲伺服器關閉事件，執行清理操作
process.on("SIGINT", () => {
    console.log("\n🛑 伺服器正在關閉...");
    // 關閉資料庫連接
    if (db) {
        db.close();
    }
    process.exit(0); // 正常退出
});
```

### 24.2. 建立資料表

```js
// NOTE: 新增table
app.get("/add-table", (req, res) => {
    const createTableQuery = `
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE
            )
        `;
    db.run(createTableQuery, (err) => {
        if (err) {
            res.render("index", { result: `❌ 無法創建表：${err.message}` });
        } else {
            res.render("index", { result: "✅ 表 users 已成功創建" });
        }
    });
});
```

### 24.3. 新增資料

```js
// NOTE: 新增單筆資料
// app.post("/add-user", (req, res) => {
app.use("/add-user", (req, res) => {
    // const { name, email } = req.body; // 使嗽
    const data = ["TA3", "TA3@gmail.com"]; // 資料必須是數組
    const insertQuery = `INSERT INTO users (name, email) VALUES (?, ?)`;
    db.run(insertQuery, data, (err) => {
        if (err) {
            return res.render("index", { result: `❌ 無法新增資料：${err.message}` });
        } else {
            res.render("index", { result: "✅ 資料成功新增" });
        }
    });
});
```

### 24.4. 查詢單筆資料

-   db.get()：返回單行結果。
    -   適合查詢單筆記錄。
    -   返回結果是對象。

```js
// NOTE: 查詢單筆資料
app.get("/read-user/:id", (req, res) => {
    const userId = req.params.id; // 從 URL 中取得用戶 ID
    const db = new sqlite3.Database("mydatabase.db");
    const selectQuery = `SELECT * FROM users WHERE id = ?`; // 查詢語句

    db.get(selectQuery, [userId], (err, row) => {
        if (err) {
            return res.render("index", { result: `❌ 無法讀取資料：${err.message}` });
        }
        if (row) {
            res.render("index", { result: JSON.stringify(row, 4) });
        } else {
            res.render("index", { result: "❌ 查無此用戶" });
        }
    });
});
```

### 24.5. 新增多筆資料

-   db.all()：返回多行結果。
    -   適合查詢多筆記錄。
    -   返回結果是數組。

```js
// NOTE: 新增多筆資料
app.use("/add-more-users", (req, res) => {
    const users = [
        { name: "Alice", email: "alice@example.com" },
        { name: "Bob", email: "bob@example.com" },
        { name: "Charlie", email: "charlie@example.com" },
        { name: "John", email: "John@example.com" },
        { name: "Fish", email: "Fish@example.com" },
        { name: "Sam", email: "Sam@example.com" },
        { name: "Tom", email: "Tom@example.com" },
        { name: "Qin", email: "Qin@example.com" },
    ];

    let errorCount = 0;
    users.forEach((user) => {
        const insertQuery = `INSERT INTO users (name, email) VALUES (?, ?)`;
        db.run(insertQuery, [user.name, user.email], (err) => {
            if (err) {
                return res.render("index", { result: `❌ 無法新增資料：${err.message}` });
            }
        });
    });
    res.render("index", { result: "✅ 資料成功新增" });
});
```

### 24.6. 更新資料

```js
// 更新資料
// app.post("/update-user", (req, res) => {
app.use("/update-user", (req, res) => {
    // const { id, name } = req.body;
    let name = "TA2";
    let email = "777@gmail.com";
    const db = new sqlite3.Database("mydatabase.db");
    const updateQuery = `UPDATE users SET name = ? WHERE id = ?`;
    db.run(updateQuery, [name, id], (err) => {
        if (err) {
            return res.render("index", { result: `❌ 無法更新資料：${err.message}` });
        }
        res.render("index", { result: "✅ 資料已成功更新！" });
    });
    db.close();
});
```

### 24.7. 刪除資料

```js
// NOTE: 刪除資料
// app.post("/delete-user", (req, res) => {
app.use("/delete-user", (req, res) => {
    // const { id } = req.body;
    let id = 3;
    const db = new sqlite3.Database("mydatabase.db");
    const deleteQuery = `DELETE FROM users WHERE id = ?`;
    db.run(deleteQuery, [id], (err) => {
        if (err) {
            return res.render("index", { result: `❌ 無法刪除資料：${err.message}` });
        }
        res.render("index", { result: "✅ 資料已成功刪除！" });
    });
});
```

### 24.8. 刪除整張資料表

```js
// NOTE: 刪除資料表
app.get("/delete-table", (req, res) => {
    const db = new sqlite3.Database("mydatabase.db");
    const dropTableQuery = `DROP TABLE IF EXISTS users`;
    db.run(dropTableQuery, (err) => {
        if (err) {
            return res.render("index", { result: `❌ 無法刪除表：${err.message}` });
        }
        res.render("index", { result: "✅ 表 users 已成功刪除！" });
    });
});
```

## 25. ORM

-   ORM（Object-Relational Mapping，物件關聯映射）是一種技術。
-   用來在 OOP（如 JavaScript、Python、Ruby）中操作關聯數據庫（如 MySQL、PostgreSQL、SQLite 等）。
-   ORM 將數據庫中的表映射為編程語言中的對象，將行映射為屬性
-   通過操作對象，ORM 自動生成 SQL 查詢語句，從而讀寫數據庫。
-   好處：
    -   通過操作對象，ORM 自動生成 SQL 查詢語句，從而讀寫數據庫。
    -   ORM 支持多種數據庫系統，切換數據庫時幾乎不需要更改代碼
    -   操作對象更符合編程思維，代碼更直觀

### 25.1. Sequelize

-   Sequelize 是一個功能強大的 Node.js ORM，支持主流關聯數據庫（如 MySQL、PostgreSQL、SQLite 和 MariaDB）。
-   支援使用 async/await 來處理非同步操作，這樣可以使程式碼更簡潔且易於閱讀
-   createdAt 和 updatedAt 是 Sequelize 自動添加的時間戳字段，這是 Sequelize 的一個內建特性，用於記錄每條數據的創建時間和更新時間。
-   安裝：npm install sequelize

### 25.2. 初始化 Sequelize

-   設置 Sequelize 與 SQLite 數據庫的連接：

```js
const express = require("express");
const path = require("path"); // 引入 path 模組
const sqlite3 = require("sqlite3").verbose(); // 引入 sqlite3 模塊並啟用詳細日誌
const { Sequelize, DataTypes } = require("sequelize");

const app = express();

// 初始化 Sequelize，指定使用 SQLite 數據庫
const sequelize = new Sequelize({
    dialect: "sqlite", // 指定使用 SQLite
    storage: "./mydatabase.db", // 指定 SQLite 文件位置
});

// 設置模板引擎
app.set("view engine", "ejs"); // 設置模板引擎為 EJS
app.set("views", path.join(__dirname, "views")); // 設置模板文件目錄

// NOTE: 根目錄頁面
app.get("/", async (req, res) => {
    // 測試連接
    try {
        await sequelize.authenticate();
        res.send("✅ 成功連接到 SQLite 數據庫");
    } catch (err) {
        res.send(`❌ 無法連接到數據庫：${err.message}`);
    }
});

// 啟動伺服器
app.listen(3000, () => {
    console.log("🚀 伺服器已啟動：http://localhost:3000");
});
```

### 25.3. 定義模型檔案

```js
const express = require("express");
const path = require("path"); // 引入 path 模組
const sqlite3 = require("sqlite3").verbose(); // 引入 sqlite3 模塊並啟用詳細日誌
const { Sequelize, DataTypes } = require("sequelize");
const app = express();

// 設置模板引擎
app.set("view engine", "ejs"); // 設置模板引擎為 EJS
app.set("views", path.join(__dirname, "views")); // 設置模板文件目錄

// 初始化 Sequelize，指定使用 SQLite 數據庫
const sequelize = new Sequelize({
    dialect: "sqlite", // 指定使用 SQLite
    storage: "./mydatabase.db", // 指定 SQLite 文件位置
});

// 定義模型
const User = sequelize.define("user", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
});

// NOTE: 根目錄頁面
app.get("/", async (req, res) => {
    // 測試連接
    try {
        // 與資料庫連接
        await sequelize.authenticate();
        // 同步模型到數據庫：{ force: true }會刪除舊表並重新創建
        await sequelize.sync({ force: true });
        console.log("✅ 表 User 已成功創建");
        res.send("✅ 成功連接到 SQLite 數據庫，表已同步完成");
    } catch (err) {
        console.error("❌ 無法連接到數據庫或同步模型：", err.message);
        res.send(`❌ 錯誤：${err.message}`);
    }
});

// 啟動伺服器
app.listen(3000, () => {
    console.log("🚀 伺服器已啟動：http://localhost:3000");
});
```

-   優化：可以依照 MVC 框架，可以放在 models/user.js

```js
// NOTE: models/user.js
const { DataTypes } = require("sequelize"); // 引入 DataTypes

const UserModel = (sequelize) => {
    // 定義模型
    return sequelize.define("user", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
    });
};

module.exports = UserModel;
```

```js
// NOTE: app.js
const express = require("express");
const path = require("path");
const { Sequelize } = require("sequelize");
const UserModel = require("./models/user"); // 引入 User 模型文件

const app = express();

// 設置模板引擎
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 初始化 Sequelize
const sequelize = new Sequelize({
    dialect: "sqlite", // 使用 SQLite
    storage: "./mydatabase.db", // 資料庫檔案位置
});

// 初始化模型
const User = UserModel(sequelize);

// 根目錄頁面
app.get("/", async (req, res) => {
    try {
        await sequelize.authenticate(); // 測試資料庫連接
        await sequelize.sync(); // 測試資料庫同步
        console.log("✅ 資料庫連接與同步完成");
    } catch (err) {
        console.error("❌ 資料庫初始化失敗：", err.message);
        process.exit(1); // 無法啟動伺服器時退出程式
    }
});

// 啟動伺服器
app.listen(3000, () => {
    console.log("🚀 伺服器已啟動：http://localhost:3000");
});
```

### 25.4. 新增單筆資料

```js
// NOTE: 新增單筆資料
app.get("/add-user", async (req, res) => {
    data = {
        name: "Bob",
        email: "Bob@example.com",
    };
    try {
        await User.create(data);
        console.log("✅ 使用者資料已新增");
        res.render("index", { result: "✅ 使用者資料已新增" });
    } catch (err) {
        console.error("❌ 新增使用者資料失敗：", err.message);
        res.render("index", { result: `❌ 新增使用者資料失敗：${err.message}` });
    }
});
```

### 25.5. 新增多筆資料

```js
// NOTE: 新增多筆資料
app.get("/add-more-users", async (req, res) => {
    const data = [
        { name: "Cat", email: "cat@example.com" },
        { name: "Dog", email: "dog@example.com" },
        { name: "Charlie", email: "charlie@example.com" },
    ];
    try {
        // 使用 bulkCreate 方法新增多筆資料
        await User.bulkCreate(data);
        console.log("✅ 多筆使用者資料已新增");
        res.render("index", { result: "✅ 多筆使用者資料已新增" });
    } catch (err) {
        console.error("❌ 新增多筆使用者資料失敗：", err.message);
        res.render("index", { result: `❌ 新增多筆使用者資料失敗：${err.message}` });
    }
});
```

### 25.6. 更新資料

```js
// NOTE: 更新資料
app.get("/update-user", async (req, res) => {
    try {
        await User.update({ name: "AliceUpdated" }, { where: { id: 1 } });
        console.log("✅ 用戶已更新");
        res.render("index", { result: "✅ 用戶已更新" });
    } catch (err) {
        console.error("❌ 更新使用者資料失敗：", err.message);
        res.render("index", { result: `❌ 更新使用者資料失敗：${err.message}` });
    }
});
```

### 25.7. 刪除資料

```js
// NOTE: 更新資料
app.get("/delete-user", async (req, res) => {
    try {
        await User.destroy({ where: { id: 1 } });
        console.log("✅ 用戶已刪除");
        res.render("index", { result: "✅ 用戶已刪除" });
    } catch (err) {
        console.error("❌ 刪除使用者資料失敗：", err.message);
        res.render("index", { result: `❌ 刪除使用者資料失敗：${err.message}` });
    }
});
```

## MongoDB

-   MongoDB 是一種 NoSQL 資料庫，專為大規模數據儲存設計。
-   採用 JSON/BSON 格式來存儲數據，支持動態結構，無需預定義資料表架構 (Schema-less)。
-   支持水平擴展（Sharding）。
-   允許快速迭代與動態資料結構。
-   支持文件內嵌結構與陣列類型。

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
