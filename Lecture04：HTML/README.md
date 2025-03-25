## 1. HTML 的基本結構

-   `<html>`元素：標示 HTML 文件的開始與結束，屬於全域屬性(global attribute)。
-   `<head>`元素：用來設定 HTML 文件的標題。
-   `<meta>`元素：設定 HTML 文件的相關資訊。
-   `<link>`元素：設定目前文件與其他資源的關聯。
-   `<style>`元素：用來鑲嵌 CSS。
-   `<body>`元素：HTML 文件本體。

```html
<!DOCTYPE html>
<!-- HTML 文件的根標籤 -->
<html lang="zh-TW">
	<!-- 網頁基本資訊 -->
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>標題位置</title>
	</head>
	<!-- 網頁的主體內容 -->
	<body></body>
</html>
```

### 1.1. 標籤（Tag）

-   標籤是元素的組成部分，分為開始標籤與結束標籤

![upgit_20250227_1740634043.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/02/upgit_20250227_1740634043.png)

### 1.2. 屬性(Attribute)

-   屬性用於為 HTML 元素提供額外的資訊或特性。
-   屬性通常放在開始標籤中，並以「屬性名=屬性值」的形式呈現
    ![upgit_20250227_1740634014.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/02/upgit_20250227_1740634014.png)
    ![upgit_20250227_1740634102.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/02/upgit_20250227_1740634102.png)

### 1.3. 推薦的 vscode 小工具

![upgit_20250227_1740634135.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/02/upgit_20250227_1740634135.png)

### 1.4. [Lab：撰寫第一個 HTML](./First_HTML.html)

### 1.5. [Lab：五秒後跳轉 google](./Redirect_Google.html)

## 2. 文件元素

-   標題元素：h1-h6
-   段落文字：p
-   區塊級元素（block-level element）：div
    -   用於將 HTML 文件中的某個範圍的內容和元素群組成一個區塊，方便進行整體操作
    -   本身沒有語義意義，僅作為一個容器使用，用於結構化佈局

### 2.1. [Lab：示範文件元素](./H1_P_Div.html)

## 3. 具有語意的結構元素

![upgit_20250227_1740634591.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/02/upgit_20250227_1740634591.png)

-   大部分網頁都有一定的結構，而 **HTML5** 新增了帶有語意的結構元素，使我們可以更明確地了解每個段落的用途。
-   `<article>`：標示網頁的 本文或單篇獨立內容（例如：新聞網站的一則報導）。
-   `<section>`：標示 通用的區塊或區段（例如將網頁文本分割、文章拆分為不同段落）。
-   `<nav>`：導覽列，通常包含網站的主要導航連結。
-   `<header>` / `<footer>`：頁首 / 頁尾，通常包含標題、作者資訊、版權聲明等。
-   `<aside>`：側邊欄，用於存放輔助資訊，如廣告、相關連結等。
-   `<main>`：網頁的主要內容，一個頁面中應該 只包含一個 `<main>` 元素。
-   `<figure>`：標示 獨立的引用內容，例如圖片、影片、程式碼等。
-   `<figcaption>`：為 `<figure>` 提供標題或描述。
-   [Lab：具有語意的結構元素](./Layout_Example.html)

## 4. 區塊元素&行內元素

-   [Lab：展示 block 跟 inline](./Div_Span.html)

### 4.1. 區塊級元素 (Block-level)

-   佔據整個父容器的寬度，自動換行顯示。
-   常見標籤：`<div>`、`<p>`、`<h1>-<h6>`、`<ul>`、`<li>`。
-   可設定：
    -   `width`（寬度） & `height`（高度）
    -   `margin`（外距） & `padding`（內距）
-   可包含其他區塊級元素或行內元素。

### 4.2. 行內元素 (Inline-level)

-   僅佔內容所需的寬度，不換行。
-   常見標籤：`<span>`、`<a>`、`<strong>`、`<em>`。
-   限制：
    -   無法設定 `width` & `height`
    -   只能包含其他行內元素，不能包含區塊級元素。

### 4.3. 其他小標籤

-   `<hr>`：插入 水平線，用於區隔內容。
-   `<br>`：插入 換行，適用於段內換行需求。
-   `<address>`：標示 聯絡資訊，通常用於作者資訊。
-   `<blockquote>`：標示 長段落引用，用於引用文章或文獻。
-   [Lab：示範其他文字格式標籤](./Display_Block.html)

## 5. 項目編號

-   無序列表 `<ul>`：用於顯示無順序的項目，通常以符號（如圓點）標示。
-   有序列表 `<ol>`：用於顯示有順序的項目，可設定編號類型。
    -   `start`：設定編號的起始值。
    -   `type`：設定編號類型，可選值：
        -   `1`：數字（預設）
        -   `A`：大寫字母
        -   `a`：小寫字母
        -   `I`：大寫羅馬數字
        -   `i`：小寫羅馬數字
-   [Lab：示範項目編號](./List_Elements.html)

## 6. 超連結 (Hyperlink)

-   透過 `<a>` 標籤實現超連結
-   相關屬性
-   `href="url"`：指定連結目標（URL 或頁內錨點）
-   `target`：設定連結開啟方式
    -   `_self`：在當前視窗開啟（預設）
    -   `_blank`：在新分頁開啟
-   `download`：設定為下載連結（用於檔案下載）

### 6.1. 頁內跳轉

-   透過 `<a href="#id">` 搭配 `<div id="id">` 來實現頁內跳轉
-   [Lab：頁內跳轉](./A_Tag.html)

### 6.2. 設定頁面基準：`<base />`

-   設定頁面所有超連結的基準 URL
-   可用於管理專案內的相對路徑
-   `href`：設定相對路徑的基準 URL -
-   `target`：設定所有超連結的預設開啟方式
-   [Lab：設定基準](./A_Base/index.html)

## 7. [嵌入圖片、影片、影音](./Img_Vedio.html)

### 7.1. 圖片 `<img>` 標籤

-   `src="url"`：設定圖片來源
-   `width="n"`：圖片寬度
-   `height="n"`：圖片高度
-   `alt="文字"`：圖片無法顯示時的替代文字

### 7.2. 影片 `<video>` 標籤

-   `src="url"`：設定影片來源
-   `width="n"` / `height="n"`：影片尺寸
-   `autoplay`：自動播放
-   `controls`：顯示播放控制按鈕
-   `loop`：循環播放
-   `muted`：靜音播放

### 7.3. 音訊 `<audio>` 標籤

-   `src="url"`：設定音訊來源
-   `controls`：顯示播放控制按鈕
-   `autoplay`：自動播放
-   `loop`：循環播放
-   `muted`：靜音播放

### 7.4. 浮動框架

-   嵌入 YT 影片
-   嵌入 google map

![upgit_20250309_1741529385.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/03/upgit_20250309_1741529385.png)

![upgit_20250309_1741529406.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/03/upgit_20250309_1741529406.png)

## 8. Table

-   [基本表格](./Tabel01.html)
-   [使用 thead、tbody 的表格](./Tabel02.html)

## 9. 表單

-   [表單實作](./Form.html)

-   表單使用 `<form>` 元素，並包含 `<input>`、`<textarea>`、`<select>`、`<option>` 等子元素，用於建立文字方塊、選擇按鈕、下拉選單等互動式輸入框。
-   表單的作用是將使用者輸入的資料傳送到伺服器端進行處理，例如：
    -   提交電子郵件表單
    -   填寫檔案上傳
    -   傳送數據到資料庫

### 9.1. `<form>` 元素屬性

-   name：表單名稱，可用於 JavaScript 操作特定表單。
-   action：指定表單提交的目標網址（伺服器端的 API 或檔案）。
-   method：
    -   GET：資料會顯示在網址列，適用於查詢操作（不適合傳送機密資訊）。
    -   POST：資料會封裝在 HTTP 請求內，適合傳送較大量或較機密的資訊。
-   novalidate：禁止瀏覽器的表單驗證功能，讓表單可以不受預設規則限制提交。
-   enctype：指定表單資料的編碼方式，適用於 POST 方法：
    -   `application/x-www-form-urlencoded`（預設）
    -   `multipart/form-data`（適用於檔案上傳）
    -   `text/plain`（適用於電子郵件傳送）
-   autocomplete：控制是否啟用表單自動填入功能：
    -   `on`（啟用，預設值）
    -   `off`（關閉）

### 9.2. `<input>` 元素屬性

-   accept：指定 `<input type="file">` 可接受的檔案類型，例如：

    -   `accept="image/gif, image/jpeg"`（只允許上傳 GIF 或 JPEG 圖片）

-   autocomplete：與 `<form>` 屬性相同，可設定是否允許自動填入：`on`、`off`、`default`。
-   checked / disable:

-   `checked`：適用於 `<input type="radio">` 或 `<input type="checkbox">`，設定預設選取狀態。
-   `disabled`：讓輸入框無法編輯。

-   min / max / step：適用於數值類型的輸入框，限制數值範圍：

    -   `min="1"`（最小值 1）
    -   `max="100"`（最大值 100）
    -   `step="5"`（每次調整增加 5）

-   value：設定輸入框的初始值。
-   readonly：使輸入框變為唯讀模式，無法更改內容。

-   minlength / maxlength：限制輸入文字的最小與最大字數：

    -   `minlength="5"`（最少 5 個字）
    -   `maxlength="20"`（最多 20 個字）

-   placeholder：設定輸入框內的提示文字，例如 `placeholder="請輸入您的電子郵件"`。
-   required：設定該欄位為必填，若未填寫則無法提交表單。

### 9.3. HTML 表單中的 `type` 屬性--HTML 4.01

| `type` 值  | 功能                   |
| ---------- | ---------------------- |
| `text`     | 單行文字輸入框         |
| `password` | 密碼輸入框（隱藏文字） |
| `radio`    | 單選按鈕               |
| `checkbox` | 複選框                 |
| `submit`   | 提交按鈕               |
| `reset`    | 重置按鈕               |
| `file`     | 檔案上傳               |
| `button`   | 普通按鈕               |

### 9.4. HTML 表單中的 `type` 屬性--HTML 5

| `type` 值        | 功能            |
| ---------------- | --------------- |
| `email`          | 電子郵件輸入框  |
| `url`            | 網址輸入框      |
| `search`         | 搜尋框          |
| `tel`            | 電話輸入框      |
| `number`         | 數字輸入框      |
| `range`          | 範圍滑桿        |
| `color`          | 顏色選擇器      |
| `date`           | 日期選擇器      |
| `time`           | 時間選擇器      |
| `datetime-local` | 日期+時間選擇器 |
| `month`          | 月份選擇        |
| `week`           | 週數選擇        |
