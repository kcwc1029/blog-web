皮膚色
#FCEADB
#FCDFC0
#FFD5C3
黃色
#FBECA1
#FFD580
紅粉到紫
#F6C0CE
#FCC4FB
#C9C1E1
#A09EC7
綠
#E2F0D7
#A2D3B0
#93D352
藍
#B1D5F6
#ADD9EC
#64A9F6
## CSS介紹
- CSS（Cascading Style Sheets，層疊樣式表）用來控制網頁的外觀，包括排版、顯示格式、樣式及視覺效果，提升了HTML的設計靈活性與美觀。
- HTML原本是設計來處理內容的結構化，對於美觀方面的控制有限。CSS允許網頁開發者控制外觀，讓內容和呈現分離，這樣能提高維護的靈活度和效率。
### 片片推薦
- [成為網頁設計師的第一步！快速上手 HTML & CSS 展開你的網頁設計之旅！ (youtube.com)](https://www.youtube.com/watch?v=6HHN0G2cwBM)
- 
## 在HTML中套用CSS
- 分為三種方式：
	- 行內樣式：使用style屬性設定CSS。
	- 內部樣式表：使用`<style>`元素嵌入CSS。
	- 外部樣式表：連結或匯入外部的CSS檔案。
### 行內樣式

![upgit_20241017_1729131574.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241017_1729131574.png)
```html
<!DOCTYPE html>
<html lang="en">
<head> 
    <meta charset="UTF-8">  
    <base href="/display/index.html">
    <title>互動網頁設計</title>
</head>
<!-- 行內樣式 -->
<body style="color: black; background-color: #FCEADB;"> 
    <h1>hello CSS</h1>
</body>
</html>
```

### 內部樣式表
- 在head裡面寫CSS
![upgit_20241017_1729131745.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241017_1729131745.png)

```html
<!DOCTYPE html>
<html lang="en">
<head> 
    <meta charset="UTF-8">  
    <base href="/display/index.html">
    <title>互動網頁設計</title>
    <!-- 內部樣式 -->
    <style>
        body{
            color: black;
            background-color: #FCEADB;
        }
    </style>
</head>
    <h1>hello CSS</h1>
</body>
</html>
```
### 外部樣式表
- 寫一個CSS檔，然後再使用`<link>`到HTML。
- 這是開發網站時最常採取的方式，當網站包含多個網頁時，可以將網頁的樣式表統一放在一個CSS檔案，然後在網頁中連結或匯入該CSS檔案，如此一來，日後若要變更網頁的外觀，只要修改該CSS檔案即可，不必修改每個網頁。
![upgit_20241017_1729132464.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241017_1729132464.png)

## CSS語法
- CSS是由一條一條的規則(rule)所組成，而規則包含選擇器(selector)與宣告(declaration)兩個部分。
![upgit_20241017_1729132575.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241017_1729132575.png)

- 選擇器(selector)：用來設定要套用規則的對象，範例如`body`、`h1`等元素。
- 宣告(declaration)：用來描述選擇器應套用的樣式。每個宣告包含屬性(property)和其值(value)，如`color: white`。
- CSS註解符號為`/* */`：不同於HTML中的`<!-- -->`。
- 合併相同規則：如果多個選擇器具有相同的規則，可以將它們合併，讓程式碼更簡潔。
```css
/* 範例寫法 */
h1 {
  color: white;
  background: red;
  font-family: "Arial Black";
}

/* 合併相同規則 */
h1, h2, h3, p {
  color: blue;
}
```

## 選擇器(Selector)
### 萬用選擇器(Universal Selector)
- 用來選擇HTML文件中所有元素，並套用相同規則。適用於初始設定或全局樣式。
```css
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
```

### 類型選擇器(Type Selector)
- 針對指定的HTML元素類型，應用規則。
```css
h1 {
	color: blue;
}

/* p元素裡面a元素套用 */
p a {
	color: blue;
}
```
### 類別選擇器(Class Selector)`
- 針對指定的class屬性套用規則，適用於多個元素。
```css
.odd {
	background: linen;
}
.even {
	background: lightblue;
}

/* 針對特定屬性值的元素套用規 */
[class="apple"] {
	color: blue;
}
```

### ID選擇器(ID Selector)
- 針對指定的ID屬性套用規則，ID在文件中必須唯一。
```css
#btn1 {
	font-size: 20px;
	color: red;
}
```
### 虛擬元素
- 虛擬元素(pseudo-element) 是CSS中用來針對特定元素內某部分應用樣式的一種方式。常見的虛擬元素有以下幾種：
	- `::first-letter`：用來選擇元素的第一個字母。
	- `::first-line`：用來選擇元素的第一行文字。
	- `::before`：在元素內容的前面插入內容。
	- `::after`：在元素內容的後面插入內容。
	- `::selection`：用來選擇使用者選取的文字部分。
![upgit_20241017_1729134236.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241017_1729134236.png)


![upgit_20241017_1729134248.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241017_1729134248.png)

```html
<!DOCTYPE html>
<html lang="en">
<head> 
    <meta charset="UTF-8">  
    <base href="/display/index.html">
    <!-- 外部樣式 第一種寫法-->
    <link rel="stylesheet" href="style/style.css">
    <title>互動網頁設計</title>
</head>
<body>
    <p>hello CSS</p>
</body>
</html>
```

```scss
@charset "UTF-8"
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body{
    /* 範例 */
    /* p標籤的第一個字母設定 */
    p::first-letter{
        color: red;
    }
    /* p標籤的最後插入 */
    p::after {
        content: "《TA》";
        color: blue;
      }
}
```


### 虛擬類別 (Pseudo-class)
![upgit_20241017_1729133693.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241017_1729133693.png)
- 虛擬類別用來選擇符合特定條件的元素，常見的有：
	- `:link`：尚未被點擊的超連結。
	- `:visited`：已經被點擊過的超連結。
	- `:hover`：指當滑鼠懸停在元素上時。
	- `:focus`：元素取得焦點時。
	- `:nth-child(n)`：選擇第n個子元素。

![upgit_20241017_1729134885.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241017_1729134885.png)
![upgit_20241017_1729134897.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241017_1729134897.png)


```scss
@charset "UTF-8"
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
	// 這段CSS會將尚未點擊的連結設為黑色，已經點擊過的連結設為紅色，並在滑鼠懸停在`<h1>`元素上時，將其背景設為淺藍色。
    p {
        /* 針對 <p> 元素中的 <a> 標籤設置樣式 */
        a:link {
            color: black;
        }
        a:visited {
            color: red;
        }
        a:hover {
            background: lightblue;
        }
    }
}
```
### `!important` 的具體作用：
- `!important` 是用來強制提高CSS樣式的優先級，讓特定的樣式在衝突情況下具有更高的優先權。
- 當你在某個CSS屬性後加上 `!important`，無論該屬性是否會被其他樣式覆蓋，都會優先顯示這個屬性。
```css
/* 假設你有以下兩個樣式對 `<p>` 元素設定顏色： */
p {
  color: blue;
}

p {
  color: red !important;
}
/* 在這種情況下，即使正常情況下第二個 `color: red;` 應該被覆蓋，因為它加了 `!important`，最終 `<p>` 的文字會顯示為紅色，而不是藍色。 */
```

## 色彩屬性
- color：前景色彩(可以視為字型顏色)
- background-color：背景色彩
- opacity: 0.5：設定透明度。

![upgit_20241017_1729136487.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241017_1729136487.png)
![upgit_20241017_1729136493.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241017_1729136493.png)

```html
<!DOCTYPE html>
<html lang="en">
<head> 
    <meta charset="UTF-8">  
    <base href="/display/index.html">
    <link rel="stylesheet" href="style/style.css">
    <title>互動網頁設計</title>
</head>
<body>
    <h1 style="color: white; background-color: black;">TA</h1>
    <img src="./img/吉伊卡哇.jpg" alt="" width="200" >
    <img src="./img/吉伊卡哇.jpg" alt="" width="200" style="opacity: 0.5;">
</body>
</html>
```

## 字型屬性
### 度量單位
- px：用來定義元素的尺寸（如字體、邊距、間距等），確保精確的尺寸控制。
- em：常用於字體大小和間距的相對設定。`em` 是相對於父元素字體大小的倍數。用這個單位可以讓頁面更具彈性，適應不同的屏幕大小。
- rem：與 `em` 類似，但 `rem` 是相對於根元素（`<html>` 標籤）的字體大小。這個單位越來越常用，因為它提供了更一致的設計控制。
- vw 和 vh：代表可視窗口寬/高度的百分比，特別適合於響應式設計，根據視口的尺寸調整元素大小。
- %（百分比）：適合用來設定寬度（`width`）、高度（`height`）等，以便隨著父元素或視窗的大小自動調整。它的靈活性高，但有時候可能會導致元素尺寸不夠精確。


- `font-family:[字型名稱|通用字型]`
	- 通用字型： sans-serif ( 無襯線體 )、serif ( 襯線體 )、monospace ( 等寬體 )、cursive ( 手寫體 ) 和 fantasy ( 幻想體 )。
- font-size：
	- CSS有提供對應HTML標題元素的字型大小

| HTML標題大小 | h1       | h2      | h3     | h4    | h5      | h6       |
| -------- | -------- | ------- | ------ | ----- | ------- | -------- |
| CSS絕對大小  | xx-large | x-large | medium | small | x-small | xx-small |
- font-style: italic：設定斜體。
- font-weight：{normal, bold, bolder, lighter, 100-900}。設定文字粗細，可分為絕對粗細與相對粗細。
- line-height：{normal, 度量單位}。設定行高。
![upgit_20241017_1729141833.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241017_1729141833.png)

![upgit_20241017_1729141852.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241017_1729141852.png)

```html
<!DOCTYPE html>
<html lang="en">
<head> 
    <meta charset="UTF-8">  
    <base href="/display/index.html">
    <link rel="stylesheet" href="style/style.css">
    <title>互動網頁設計</title>
    <style>
        h1{
            font-family: 'Times New Roman', '標楷體', Times, serif, monospace;
        }
        p{
            font-size: medium;
        }
    </style>
</head>
<body>
    <h1>TA</h1>
    <p style="font-size: medium;">這是段落標籤(這個字體是CSS的medium)。 -- BY TA</p>
    <p style="font-style: italic;">設定斜體</p>
    <p>
        設定文字粗細：
        <span style="font-weight:normal;">normal</span>
        <span style="font-weight: bold;">bold</span>
        <span style="font-weight:bolder;">bolder</span>
    </p>
</body>
</html>
```
## 文字屬性
- text-indent：{度量單位}。縮排。
- text-align：{start, end, left, right, center, justify}文字對齊方式。
- letter-spacing：{normal, 度量單位}。字母間距。
- word-spacing：{normal, 度量單位}。文字間距。
- text-transform：{none, capitalize, uppercase, lowercase}。大小寫轉換方式。
- text-shadow：文字陰影。
![upgit_20241017_1729143900.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241017_1729143900.png)
![upgit_20241017_1729143908.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241017_1729143908.png)

```html
<!DOCTYPE html>
<html lang="en">
<head> 
    <meta charset="UTF-8">  
    <base href="/display/index.html">
    <link rel="stylesheet" href="style/style.css">
    <title>互動網頁設計</title>
    </style>
</head>
<body>
    <p style="text-indent: 2rem; width: 40vw; text-align: center;">Lorem, ipsum dolor sit amet 
        consectetur adipisicing elit. Molestias quas deserunt natus repudiandae fugiat, maxime, 
        vero sint, consequatur eius iusto explicabo cum nisi eos ipsa dolorum perferendis 
        delectus dolorem voluptatibus!
    </p>
    <p style="text-transform: capitalize;">大小寫轉換方式：ant banana</p>
    <h1 style="text-shadow: 12px 8px 5px orange">Hello</h1>
    <h1 style="text-shadow: 10px 10px 2px cyan, 20px 20px 2px silver;">Hello, world !</h1>
</body>
</html>
```

- 文字文字裝飾線條、樣式與色彩：
	- text-decoration-line：{none(無)、underline(底線)、overline(頂線)、line-through(刪除線)}。設定HTML元素的文字裝飾線條。
	- text-decoration-style：{solid(實線)、double(雙線)、dotted(點線)、dashed(虛線)、wavy(波浪)}，設定HTML元素的文字裝飾樣式。
	- text-decoration-color：設定HTML元素的文字裝飾色彩。


![upgit_20241017_1729144193.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241017_1729144193.png)
![upgit_20241017_1729144215.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241017_1729144215.png)
```html
<!DOCTYPE html>
<html lang="en">
<head> 
    <meta charset="UTF-8">  
    <base href="/display/index.html">
    <link rel="stylesheet" href="style/style.css">
    <title>互動網頁設計</title>
    <style>
        .blue-underline {
            text-decoration-line: underline;
            text-decoration-style: solid; /* 實線 */
            text-decoration-color: blue; /* 藍色底線 */
        }
        .red-overline {
            text-decoration-line: overline;
            text-decoration-style: dashed; /* 虛線 */
            text-decoration-color: red; /* 紅色頂線 */
        }
        .green-line-through {
            text-decoration-line: line-through;
            text-decoration-style: wavy; /* 波浪線 */
            text-decoration-color: green; /* 綠色刪除線 */
        }
        .purple-double-underline {
            text-decoration-line: underline;
            text-decoration-style: double; /* 雙線 */
            text-decoration-color: purple; /* 紫色底線 */
        }
    </style>
</head>
<body>
    <p class="blue-underline">這是帶有藍色實線底線的文字。</p>
    <p class="red-overline">這是帶有紅色虛線頂線的文字。</p>
    <p class="green-line-through">這是帶有綠色波浪刪除線的文字。</p>
    <p class="purple-double-underline">這是帶有紫色雙線底線的文字。</p>
</body>
</html>
```

## 清單屬性
- list-style-type：設定項目符號與編號類型，依據有序跟無序各有字型的CSS樣式。
![upgit_20241017_1729144582.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241017_1729144582.png)

![upgit_20241017_1729144591.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241017_1729144591.png)

![upgit_20241017_1729144843.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241017_1729144843.png)

![upgit_20241017_1729144895.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241017_1729144895.png)

```html
<!DOCTYPE html>
<html lang="en">
<head> 
    <meta charset="UTF-8">  
    <base href="/display/index.html">
    <!-- <link rel="stylesheet" href="style/style.css"> -->
    <title>互動網頁設計</title>
    <style>
    </style>
</head>
<body>
    <ul style="list-style-type: square;">
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        <li>item4</li>
    </ul>

    <ol style="list-style-type:upper-alpha">
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        <li>item4</li>
    </ol>
</body>
</html>
```

## Box Model
![upgit_20241017_1729145234.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241017_1729145234.png)

- Content（內容）：HTML元素的實際內容部分。
- Padding（留白）：內容周圍的內邊距，用來增加內部距離，背景顏色會延伸到留白區域。
- Border（邊框）：包圍內容和留白的邊界，可以設置不同樣式（實線、虛線等）及厚度。
- Margin（邊界）：元素外部的外邊距，與其他HTML元素的距離。邊界是透明的，不會顯示背景顏色。
- 邊界重疊：當有兩條邊界接觸在一起時，會留下較大的邊界作為兩者的間距。
![upgit_20241017_1729147112.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241017_1729147112.png)

## 框線屬性
- border-style(框線樣式)：{none,, dotted(點線), dashed(虛線), solid(實線), double, ...}
![upgit_20241017_1729147272.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241017_1729147272.png)

- border-color：框線色彩
- border-width：框線寬度
- border-radius：框線園角
## 寬度與高度屬性
- `box-sizing`：是用來決定 HTML 元素的 `width` 和 `height` 是否包括 `padding` 和 `border` 的屬性。
	- `content-box`（預設值）：元素的 `width` 和 `height` 只包括內容本身，不包含 `padding` 和 `border`。換句話說，`padding` 和 `border` 會額外增加元素的總寬度和高度。
	- `border-box`：元素的 `width` 和 `height` 包括 `padding` 和 `border`。換句話說，`padding` 和 `border` 會包含在設定的 `width` 和 `height` 內，而不會額外增加元素的總寬度和高度。
- `overflow` 屬性：控制元素的內容超出容器邊界時的顯示方式。
	- `visible`：內容不會被剪裁（預設值）。
	- `hidden`：內容會被隱藏，且不允許捲動查看。
	- `scroll`：內容會超出容器時出現捲軸。
	- `auto`：當內容超出容器時，自動顯示捲軸。
## 定位方式(positioning scheme)
- 區塊層級(block)：
	- 元素的內容在瀏覽器中會另起一行，像是div、p、h1 ~ h6、ol、ul、li、table、form
	- 可以設定top、bottom、left、right(設定位移量)
- 行內層級(inline)：元素的內容在瀏覽器中不會另起一行，像是span、i、img、a。
- display：HTML元素的顯示類型：
	- block：區塊層級，可以設定高寬度、留白與邊界。
	- inline：行內層級，無法設定高寬度、留白與邊界。
	- inline-block：像inline不換行，但可以跟block一樣設定高寬度、留白與邊界。
	- flex：
	- grid：
### position(box定位方式)：
- static：預設值，元素會依據正常文檔流進行排列，無特殊定位。
- relative&absolute：
	- 元素相對於其**正常位置**進行移動。
	- relative相對於父類；absolute相對於子類。

```html
<!-- 示範代碼 -->
<!DOCTYPE html>
<html lang="en">
<head> 
    <meta charset="UTF-8">  
    <base href="/display/index.html">
    <!-- <link rel="stylesheet" href="style/style.css"> -->
    <title>互動網頁設計</title>
    <style>
        *{
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;
        }
        .box-1{
            width: 300px;
            height: 300px;
            background-color: skyblue;
            border: 2px solid black;
            margin: auto;
        }
        .box-2{
            width: 100px;
            height:100px;
            background-color: pink;
            border: 2px solid black;
        }
    </style>
</head>
<body>
    <div class="box-1">
        <div class="box-2"></div>
    </div>
</body>
</html>
```
![upgit_20241017_1729150335.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241017_1729150335.png)


- 如果在body跟box-2設定：
```css
body{
   position: relative;	
}
.box-1{
}
.box-2{
   position: absolute;
    left: 100px;
}
```
- box-2(absolute)就會依照body(relative)去做偏移。
![upgit_20241018_1729229684.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241018_1729229684.png)

- fixed：絕對定位的一種，元素相對於瀏覽器窗口（視口）進行定位，並且**不會隨滾動條移動**。不管頁面如何滾動，該元素都保持在固定位置。常用於導航欄等固定不動的元素設計。

![upgit_20241018_1729230235.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241018_1729230235.png)

![upgit_20241018_1729230246.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241018_1729230246.png)

```html
<!DOCTYPE html>
<html lang="en">
<head> 
    <meta charset="UTF-8">  
    <base href="/demo02_展示position中絕對與相對之差別/index.html">
    <title>互動網頁設計</title>
    <style>
        *{
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;
        }
        .container{
            height: 3000px;
        }
        .box-1{
            height: 120px;
            width: 120px;
            background-color: skyblue;
            border: 2px solid black;
            
            /* 設定懸浮 */
            position: fixed;
            top: 100px;
            left: 200px
        }
    </style>
</head>
<body>
    <div class="container">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi suscipit, officiis numquam quasi perspiciatis sint fuga fugit sed ipsa velit incidunt non at consectetur nemo modi maxime nulla explicabo omnis illo mollitia excepturi veritatis, illum impedit! Corporis similique sed itaque amet modi. Veritatis omnis rerum impedit neque, expedita molestias quo vitae quos eos ducimus asperiores eligendi officiis laborum et dolor a similique id at voluptatibus corrupti numquam. Doloribus inventore reiciendis aliquam explicabo dignissimos animi, nihil provident porro corporis maxime beatae sequi eius rem labore esse ratione hic reprehenderit sapiente ea quaerat quam, quo consequatur? Repellat maxime natus ex iure, aliquam laboriosam fugiat nemo impedit voluptatibus vitae doloremque atque sapiente vel suscipit laudantium nostrum id sed accusantium nulla ducimus dolorum odio officiis? Recusandae maiores ab officia odio sit minima sint neque quam iure tempore vitae accusamus labore provident laborum, placeat quos sequi! Tenetur molestiae qui odit vel rem distinctio at commodi animi eaque error maiores quia sint pariatur, corporis nostrum omnis deleniti natus debitis. Ipsa perferendis cupiditate voluptatum pariatur, totam iusto, culpa non rem fugit porro, obcaecati ratione suscipit officiis quis itaque quibusdam quas facilis natus nulla. Error autem perspiciatis, incidunt, ipsa tenetur asperiores temporibus molestias ab assumenda quam commodi nulla!</p>
        <div class="box-1"> fixed </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi suscipit, officiis numquam quasi perspiciatis sint fuga fugit sed ipsa velit incidunt non at consectetur nemo modi maxime nulla explicabo omnis illo mollitia excepturi veritatis, illum impedit! Corporis similique sed itaque amet modi. Veritatis omnis rerum impedit neque, expedita molestias quo vitae quos eos ducimus asperiores eligendi officiis laborum et dolor a similique id at voluptatibus corrupti numquam. Doloribus inventore reiciendis aliquam explicabo dignissimos animi, nihil provident porro corporis maxime beatae sequi eius rem labore esse ratione hic reprehenderit sapiente ea quaerat quam, quo consequatur? Repellat maxime natus ex iure, aliquam laboriosam fugiat nemo impedit voluptatibus vitae doloremque atque sapiente vel suscipit laudantium nostrum id sed accusantium nulla ducimus dolorum odio officiis? Recusandae maiores ab officia odio sit minima sint neque quam iure tempore vitae accusamus labore provident laborum, placeat quos sequi! Tenetur molestiae qui odit vel rem distinctio at commodi animi eaque error maiores quia sint pariatur, corporis nostrum omnis deleniti natus debitis. Ipsa perferendis cupiditate voluptatum pariatur, totam iusto, culpa non rem fugit porro, obcaecati ratione suscipit officiis quis itaque quibusdam quas facilis natus nulla. Error autem perspiciatis, incidunt, ipsa tenetur asperiores temporibus molestias ab assumenda quam commodi nulla!</p>
    </div>
</body>
</html>
```

- sticky：混合了相對定位和固定定位。當元素滾動到一定位置（閾值）時，它會從相對定位變為固定定位，粘附在頁面的某個位置上。常用於使元素在滾動中保持可見，直到它達到某個位置（例如頂部）並固定住。
![upgit_20241018_1729230494.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241018_1729230494.png)

![upgit_20241018_1729230501.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241018_1729230501.png)

```html
<!DOCTYPE html>
<html lang="en">
<head> 
    <meta charset="UTF-8">  
    <base href="/demo02_展示position中絕對與相對之差別/index.html">
    <title>互動網頁設計</title>
    <style>
        *{
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;
        }
        .container{
            height: 3000px;
        }
        .box-1{
            height: 120px;
            width: 120px;
            background-color: skyblue;
            border: 2px solid black;
            
            /* 設定sticky */
            position: sticky;
            top: 10px;
            left: 200px
        }
    </style>
</head>
<body>
    <div class="container">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi suscipit, officiis numquam quasi perspiciatis sint fuga fugit sed ipsa velit incidunt non at consectetur nemo modi maxime nulla explicabo omnis illo mollitia excepturi veritatis, illum impedit! Corporis similique sed itaque amet modi. Veritatis omnis rerum impedit neque, expedita molestias quo vitae quos eos ducimus asperiores eligendi officiis laborum et dolor a similique id at voluptatibus corrupti numquam. Doloribus inventore reiciendis aliquam explicabo dignissimos animi, nihil provident porro corporis maxime beatae sequi eius rem labore esse ratione hic reprehenderit sapiente ea quaerat quam, quo consequatur? Repellat maxime natus ex iure, aliquam laboriosam fugiat nemo impedit voluptatibus vitae doloremque atque sapiente vel suscipit laudantium nostrum id sed accusantium nulla ducimus dolorum odio officiis? Recusandae maiores ab officia odio sit minima sint neque quam iure tempore vitae accusamus labore provident laborum, placeat quos sequi! Tenetur molestiae qui odit vel rem distinctio at commodi animi eaque error maiores quia sint pariatur, corporis nostrum omnis deleniti natus debitis. Ipsa perferendis cupiditate voluptatum pariatur, totam iusto, culpa non rem fugit porro, obcaecati ratione suscipit officiis quis itaque quibusdam quas facilis natus nulla. Error autem perspiciatis, incidunt, ipsa tenetur asperiores temporibus molestias ab assumenda quam commodi nulla!</p>
        <div class="box-1"> sticky </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi suscipit, officiis numquam quasi perspiciatis sint fuga fugit sed ipsa velit incidunt non at consectetur nemo modi maxime nulla explicabo omnis illo mollitia excepturi veritatis, illum impedit! Corporis similique sed itaque amet modi. Veritatis omnis rerum impedit neque, expedita molestias quo vitae quos eos ducimus asperiores eligendi officiis laborum et dolor a similique id at voluptatibus corrupti numquam. Doloribus inventore reiciendis aliquam explicabo dignissimos animi, nihil provident porro corporis maxime beatae sequi eius rem labore esse ratione hic reprehenderit sapiente ea quaerat quam, quo consequatur? Repellat maxime natus ex iure, aliquam laboriosam fugiat nemo impedit voluptatibus vitae doloremque atque sapiente vel suscipit laudantium nostrum id sed accusantium nulla ducimus dolorum odio officiis? Recusandae maiores ab officia odio sit minima sint neque quam iure tempore vitae accusamus labore provident laborum, placeat quos sequi! Tenetur molestiae qui odit vel rem distinctio at commodi animi eaque error maiores quia sint pariatur, corporis nostrum omnis deleniti natus debitis. Ipsa perferendis cupiditate voluptatum pariatur, totam iusto, culpa non rem fugit porro, obcaecati ratione suscipit officiis quis itaque quibusdam quas facilis natus nulla. Error autem perspiciatis, incidunt, ipsa tenetur asperiores temporibus molestias ab assumenda quam commodi nulla!</p>

    </div>
</body>
</html>
```

### 文繞圖(float)：
- flaot：{none, left, right}。
- 我們可以使用float屬性將一個正常順序中的元素放在容器的左側或右側，而容器裡面的其它元素會環繞在該元素周圍。
- 這個效果就像排版軟體中的「文繞圖」。
- 不過CSS所說的圖並不侷限於圖片，它可以是包含任何文字或圖片的Block Box或 Inline Box。

![upgit_20241018_1729231252.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241018_1729231252.png)

![upgit_20241018_1729231235.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241018_1729231235.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>互動網頁設計</title>
    <base href="/demo03_float/index.html">
    <style>
        img{
            float: left; /* 相較於父元素去做出文繞圖 */
        }
    </style>
</head>
<body>
    <img src="./img/吉伊卡哇.jpg" alt="" width="200">
    <h1>flaot 示範</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae recusandae, natus cum nostrum eligendi est facilis. Illum expedita quos quo asperiores, quibusdam obcaecati molestiae eius reprehenderit nihil eligendi provident sapiente aperiam officiis, vel temporibus explicabo voluptate voluptas reiciendis culpa. Facere, minima et veritatis mollitia facilis eos nisi explicabo alias eaque sunt quas ipsam, illo quibusdam cupiditate dignissimos totam consequuntur tempore eligendi vitae ipsum. Repellendus a voluptas dolorum enim ex explicabo.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae recusandae, natus cum nostrum eligendi est facilis. Illum expedita quos quo asperiores, quibusdam obcaecati molestiae eius reprehenderit nihil eligendi provident sapiente aperiam officiis, vel temporibus explicabo voluptate voluptas reiciendis culpa. Facere, minima et veritatis mollitia facilis eos nisi explicabo alias eaque sunt quas ipsam, illo quibusdam cupiditate dignissimos totam consequuntur tempore eligendi vitae ipsum. Repellendus a voluptas dolorum enim ex explicabo.</p>
</body>
</html>
```
- clear：當 Box 設定為浮動後，會預設與相鄰的 Inline Box 進行排列。但若不希望這種排列發生，可使用 `clear` 屬性來解除浮動排列。

![upgit_20241018_1729231502.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241018_1729231502.png)

![upgit_20241018_1729231599.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241018_1729231599.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>互動網頁設計</title>
    <base href="/demo03_float/index.html">
    <style>
        img{
            float: left; /* 相較於父元素去做出文繞圖 */
        }
    </style>
</head>
<body>
    <img src="./img/吉伊卡哇.jpg" alt="" width="200">
    <h1>flaot 示範</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae recusandae, natus cum nostrum eligendi est facilis. Illum expedita quos quo asperiores, quibusdam obcaecati molestiae eius reprehenderit nihil eligendi provident sapiente aperiam officiis, vel temporibus explicabo voluptate voluptas reiciendis culpa. Facere, minima et veritatis mollitia facilis eos nisi explicabo alias eaque sunt quas ipsam, illo quibusdam cupiditate dignissimos totam consequuntur tempore eligendi vitae ipsum. Repellendus a voluptas dolorum enim ex explicabo.</p>
    <!-- style="clear: left; 清除float -->
    <p style="clear: left;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae recusandae, natus cum nostrum eligendi est facilis. Illum expedita quos quo asperiores, quibusdam obcaecati molestiae eius reprehenderit nihil eligendi provident sapiente aperiam officiis, vel temporibus explicabo voluptate voluptas reiciendis culpa. Facere, minima et veritatis mollitia facilis eos nisi explicabo alias eaque sunt quas ipsam, illo quibusdam cupiditate dignissimos totam consequuntur tempore eligendi vitae ipsum. Repellendus a voluptas dolorum enim ex explicabo.</p>
</body>
</html>
```
### 重疊順序(z-index)
- 由於絕對定位元素是從正常順序中抽離出來，因此它有可能會跟正常順序中的其它元素重疊。
- 我們可以使用z-index屬性設定HTML元素的重疊順序。
- 設定數值越大就越上面。
![upgit_20241018_1729232103.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241018_1729232103.png)

![upgit_20241018_1729232111.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241018_1729232111.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>互動網頁設計</title>
    <base href="/demo04_z-index/index.html">
    <style>
    </style>
</head>
<body>
    <img style="position: absolute; z-index: 1;" src="./img/吉伊卡哇.jpg" alt="" width="200" >
    <h1 style="position: absolute; z-index: 2;">flaot 示範</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae recusandae, natus cum nostrum eligendi est facilis. Illum expedita quos quo asperiores, quibusdam obcaecati molestiae eius reprehenderit nihil eligendi provident sapiente aperiam officiis, vel temporibus explicabo voluptate voluptas reiciendis culpa. Facere, minima et veritatis mollitia facilis eos nisi explicabo alias eaque sunt quas ipsam, illo quibusdam cupiditate dignissimos totam consequuntur tempore eligendi vitae ipsum. Repellendus a voluptas dolorum enim ex explicabo.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae recusandae, natus cum nostrum eligendi est facilis. Illum expedita quos quo asperiores, quibusdam obcaecati molestiae eius reprehenderit nihil eligendi provident sapiente aperiam officiis, vel temporibus explicabo voluptate voluptas reiciendis culpa. Facere, minima et veritatis mollitia facilis eos nisi explicabo alias eaque sunt quas ipsam, illo quibusdam cupiditate dignissimos totam consequuntur tempore eligendi vitae ipsum. Repellendus a voluptas dolorum enim ex explicabo.</p>
</body>
</html>
```

### 可見(visibility)
- 設定要顯示/隱藏box(但空間還是回存在)。
![upgit_20241018_1729232396.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241018_1729232396.png)
![upgit_20241018_1729232401.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241018_1729232401.png)

```html
<!-- 示範代碼 -->
<!DOCTYPE html>
<html lang="en">
<head> 
    <meta charset="UTF-8">  
    <base href="/display/index.html">
    <!-- <link rel="stylesheet" href="style/style.css"> -->
    <title>互動網頁設計</title>
    <style>
        *{
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;
        }
        
    </style>
</head>
<body>
    <!-- 標題1：box隱藏。但占的空間還會在 -->
    <h1 style="background-color: pink; visibility: hidden;">標題1</h1>
    <!-- 標題2：如果要直接消失，就下display: none -->
    <h1 style="background-color: lightblue; display: none">標題2</h1>
    <h1 style="background-color: lightgreen;">標題3</h1>
</body>
</html>
```

### box陰影(box-shadow)
- box-shadow：{水平位移 垂直位移 模糊半徑 擴散距離 色彩 inser(陰影顯示內部，無指定則顯示外部)}。
![upgit_20241018_1729232868.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241018_1729232868.png)

## 背景屬性
- background-image: url()：設定圖片來源。
- background-repeat：{repeat, no-repeat,}：圖片排列方式。
- background-position：背景圖片期始位置。
	- 可以下量度單位；方向與百分比，百分比的話(0% 0%)為左上方，(50% 50%)為中間，(100% 100%)為右下方。
- background-size：背景圖片大小
	- 長度、百分比、auto
	- contain：背景圖片的大小剛好符合HTML元素的區塊範圍。
	- cover：背景圖片的大小覆蓋整個HTML元素的區塊範圍。
- background-attachment：背景圖片是否隨著內容捲動
	- scroll：背景圖片不會隨著元素的內容捲動，但會隨著容器的內容捲動。
	- fixed：背景圖片不會隨著元素的內容或容器的內容捲動。
	- local：背景圖片會隨著元素的內容或容器的內容捲動。

```html
<!-- 示範代碼 -->
<!DOCTYPE html>
<html lang="en">
<head> 
    <meta charset="UTF-8">  
    <base href="/display/index.html">
    <!-- <link rel="stylesheet" href="style/style.css"> -->
    <title>互動網頁設計</title>
    <style>
        *{
            margin: 0.5rem;
            padding: 0px;
            box-sizing: border-box;
            background-image: url(./img/吉伊卡哇.jpg);
            background-repeat: repeat;
            /* background-position: 50rem 3rem; */
            background-attachment: fixed;
        }
    </style>
</head>
<body>
</body>
</html>
```
![upgit_20241018_1729236502.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241018_1729236502.png)

## 漸層屬性
- linear-gradient：{角度|方向、色彩停止點}：線性漸層。
- radial-gradient：{形狀|大小|位置、色彩停止點1、色彩停止點2...}：放射漸層。
	- 形狀：可以是circle、ellipse。
	- 大小：
		- closest-side：從圓心到區塊最靠近邊緣的距離作為半徑。
		- farthest-side：從圓心到區塊最遠邊緣的距離作為半徑。
		- closest-corner：從圓心到區塊最近角的距離作為半徑。
		- farthest-corner：從圓心到區塊最遠角的距離作為半徑。
	- 位置：可以在 `at` 後加上 `left`、`right`、`top`、`bottom` 或 `center` 來設置漸層的起始位置。
![upgit_20241018_1729237506.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241018_1729237506.png)

![upgit_20241018_1729237512.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241018_1729237512.png)


## 濾鏡屬性
- blur(x)：模糊效果，參數 `x` 指定模糊半徑，常用於製造圖片模糊背景或柔化效果。
- brightness(x)：參數 `x` 的值大於 100% 提高亮度，小於 100% 降低亮度。
- contrast(x)：調整對比度，參數 `x` 的值大於 100% 提高對比，小於 100% 減少對比。
- grayscale(x)：將圖片轉為灰階，`0%` 是彩色，`100%` 是全灰色。
- invert(x)：反轉圖片顏色，`0%` 保持原狀，`100%` 完全反轉。
- opacity(x)：調整透明度，`0%` 完全透明，`100%` 完全不透明。
- sepia(x)：將圖片轉換為棕褐色，製造復古效果，`0%` 沒有效果，`100%` 完全為棕褐色。`
- drop-shadow()：為圖片添加陰影效果，類似於 `box-shadow`，可以設置陰影的水平位移、垂直位移、模糊半徑和陰影顏色。

![upgit_20241018_1729239636.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241018_1729239636.png)

![upgit_20241018_1729239653.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241018_1729239653.png)


## 表格屬性
- caption-side：{top, bottom}：表格標題位置。
- border-collapse：{collapse}：預設是「框線分開」，那就可以設定為「框線重疊」。
- table-layout：{auto, fixed}：表格版面編排方式，auto表示儲存格的寬度取決於其內容的長度。fixed(固定)表示儲存格的寬度取決於表格的寬度、欄的寬度及框線。
![upgit_20241019_1729321932.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241019_1729321932.png)


![upgit_20241019_1729321904.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241019_1729321904.png)

```html
<!-- 示範代碼 -->
<!DOCTYPE html>
<html lang="en">
<head> 
    <meta charset="UTF-8">  
    <base href="/display/index.html">
    <!-- <link rel="stylesheet" href="style/style.css"> -->
    <title>互動網頁設計</title>
    <style>
        *{
            margin: 0px;
            padding: 0px;
        }
        table{
            border: 2px solid red;
            border-collapse: collapse;
            caption{
                caption-side: bottom;
            }
            th{
                border: 2px solid black;
                background-color: lightskyblue;
            }
            td{
                border: 2px solid black;
                background-color: lightcyan;
            }
        }
        
    </style>
</head>
<body>
    <table>
        <caption>表格標題</caption>
        <tr>
            <th>圖片</th>
            <th>名稱</th>
        </tr>
        <tr>
            <td><img src="./img/角色-兔兔.png" alt="" width="200"></td>
            <td>兔兔</td>
        </tr>
        <tr>
            <td><img src="./img/角色-吉伊卡哇.png" alt="" width="200"></td>
            <td>吉伊卡哇</td>
        </tr>
        <tr>
            <td><img src="./img/角色-小八貓.png" alt="" width="200"></td>
            <td>小八貓</td>
        </tr>
        <tr>
            <td><img src="./img/角色-小桃鼠.png" alt="" width="200"></td>
            <td>小桃鼠</td>
        </tr>
    </table>
</body>
</html>
```
## CSS版面設計

### 彈性盒子版面(flexbox)
- 原則：就是在HTML文件中建立一個稱為Flex Container(彈性容器)的父元素，然後在父元素中放入一個或多個稱為Flex Item(彈性項目)的子元素。
- 在設定flex後，預設會是由左向右排
- 設定方式：display: flex
![upgit_20241019_1729323710.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241019_1729323710.png)
![upgit_20241019_1729323717.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241019_1729323717.png)

- flex-direction：{row, row-reverse, column. column-reverse}：設定Flex Item的排列方向。
![upgit_20241019_1729324317.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241019_1729324317.png)

- justify-content：Flex Item主軸的水平對齊方式
	- flex-start、flex-end、center
	- space-between(左右對齊)、space-around(分散對齊)。
![upgit_20241019_1729324290.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241019_1729324290.png)

- align-items：Flex Item的子軸對齊方式)
	- flex-start、flex-end、center
	- space-between(左右對齊)、space-around(分散對齊)。
![upgit_20241019_1729324417.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241019_1729324417.png)

- flex-wrap(Flex Item的換行方式)：預設值為nowrap(不換行),其它設定值還有wrap(自動換行，由上往下排列)和wrap-reverse(自動換行,由下往上排列)。
- order：設定個別Flex Item的顯示順序，預設值為0，其它設定值可以是正整數,數字愈大,顯示順序就愈後面。
- flex-basis：{長度|百分比|auto}：個別Flex Item的大小。
![upgit_20241019_1729324852.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241019_1729324852.png)


![upgit_20241019_1729324826.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241019_1729324826.png)


#### 利用flexbox布局(三欄)
![upgit_20241019_1729327159.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241019_1729327159.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <base href="/demo05_flexbox/">
    <title>互動網頁設計</title>
</head>
<style>
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    body{
        width: 100%;
        background-color: #c7ffcf;
    }
    header{
        width: 100%;
        background-color: #5370d0;
    }
    .container{
        display: flex;
        justify-content: space-around;
    }
    .item{
        background-color: rgb(162, 221, 246); 
        height: 10rem;       
        width: 30%;
    }
    footer{
        width: 100%;
        background-color: #5370d0;
    }
</style>
<body>
    <header><h1>header</h1></header>
    <div class="container">
        <div class="item">item1</div>
        <div class="item">item2</div>
        <div class="item">item3</div>
    </div>
    <footer><h1>footer</h1></footer>
</body>
</html>
```

### 格線版面(grid)
- CSS3的Grid Layout Module提供了一組屬性可以用來製作格線版面(Grid Layout)。
- 原則就是在HTML文件中建立一個稱為Grid Container的父元素。
- 後在父元素中放入一個或多個稱為Grid Item的子元素。
- Grid Item彼此之間的空隙稱為Grid Gap。
	- grid-template-columns：Grid Item的寬度，單位為fr指的是比例。(如grid-template-columns: 1fr 2fr 3fr表示一列有三個Grid Item，度比例為1:2:3。)
	- grid-template-rows：Grid Item的長度。
#### 製作兩欄的效果
![upgit_20241019_1729328574.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241019_1729328574.png)

![upgit_20241019_1729328554.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241019_1729328554.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <base href="/demo06_grid/grid01.html">
    <title>互動網頁設計</title>
</head>
<style>
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    /* 我要做出兩欄的效果 */
    .container{
        background-color: #ffffff;
        display: grid;
        grid-template-columns: 1fr 1fr; /* 兩欄布局，每一欄寬度為 1fr，代表可用空間的分配 */
        gap: 1rem;
    }
    .item{
        background-color: cyan;
        padding: 1rem;
    }
</style>
<body>
    <div class="container">
        <div class="item">item1</div>
        <div class="item">item2</div>
        <div class="item">item3</div>
        <div class="item">item4</div>
        <div class="item">item5</div>
        <div class="item">item6</div>
    </div>    
</body>
</html>
```
## RWD
### 開發適用於不同裝置的網頁
- 隨著無線網路和行動裝置的普及，行動上網的使用已經超過PC上網，這讓開發者需要考慮如何設計適應各種裝置的網站。開發者面對的挑戰包括：
	- 執行速度：行動裝置的執行速度較慢，頁面若包含過多的圖片或JavaScript，可能會影響頁面加載速度。
	- 使用方式不同：行動裝置的操作方式和桌面設備不同，像是縮放、滾動等操作方式不適用於行動裝置。
	- 版面尺寸差異：不同裝置有不同的螢幕尺寸，設計必須靈活適應。
- 為了應對這些挑戰，通常會使用兩種設計方法：
	- 自適應網頁設計 (AWD)
	- 響應式網頁設計 (RWD)
### 自適應網頁設計 (AWD)
- 自適應網頁設計（AWD）會根據不同裝置載入不同版本的網站內容。AWD的特點是可以針對不同裝置提供專門的設計，讓每種裝置都能獲得最佳的使用體驗。例如針對PC和行動裝置，會有不同的網頁版面配置。
- ![upgit_20241019_1729330591.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241019_1729330591.png)

### 響應式網頁設計 (RWD)
- 響應式網頁設計（RWD）是指使用一個單一的網頁，通過CSS媒體查詢和自動調整布局來適應不同裝置的螢幕尺寸。其特點包括：
	- 網頁內容統一：所有裝置上使用同一份HTML文件，只需更新一次即可應用到所有裝置，減少維護成本。
	- 網頁URL統一：不同裝置共用同一個URL，避免了重複網頁名稱。
	- 技術門檻低：主要依賴HTML和CSS，不需要額外的JavaScript或伺服器端程式。
- ![upgit_20241019_1729330607.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241019_1729330607.png)

- RWD優點：
    - 瀏覽器會根據螢幕自動調整內容。
    - 維護簡單，因為只需管理一份網站。
    - 能夠節省伺服器資源與更新成本。
- RWD缺點：
    - 在舊版瀏覽器或不支持HTML5和CSS3的環境中，響應式網頁可能出現問題。
    - 設計與測試需要考慮不同的裝置尺寸與解析度。
- 響應式網頁設計的技術
	- 媒體查詢：通過CSS的媒體查詢功能，可以根據裝置的寬度自動調整頁面布局。
	- 流動圖片：使用百分比或自適應大小的圖片來隨著裝置的大小調整圖片的尺寸。
	- 流動格線：使用彈性網格系統來確保內容的排版隨著螢幕大小變動。
	- ![upgit_20241019_1729330622.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241019_1729330622.png)
- 響應式網頁設計原則
	- 簡潔與易讀：確保內容簡單清晰，讓使用者能快速獲取所需資訊。
	- 靈活的架構：網頁應該可以根據裝置寬度自動調整欄位布局。
	- 視覺效果：使用CSS來控制動畫、透明度、滾動等效果，以提升使用者的互動體驗。

## 媒體查詢
- HTML和CSS允許網頁設計人員針對不同的媒體類型量身訂做不同的樣式：
	- all：全部裝置(預設值)
	- screen：螢幕(例如瀏覽器)。
	- print：列印裝置(包含使用預覽列印所產生的文件,例如PDF檔)。
- 我們可以將媒體查詢撰寫在`<link>`元素的media屬性，或將媒體查詢撰寫在`<style>`元素裡面的@import指令或@media指令
```css
<link rel="stylesheet" type="text/css" href="style/screen.css">
<link rel="stylesheet" type="text/css" href="style/print.css">

@import url("style/screen.css") screen;
@import url("style/print.css") print;
...
@media screen {
	h1{color: red;}
}
@media print{
	h1{color: orange;}
}
```
#### 手機、平板、電腦螢幕查詢
![upgit_20241019_1729329710.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241019_1729329710.png)
![upgit_20241019_1729329720.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241019_1729329720.png)
![upgit_20241019_1729329730.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241019_1729329730.png)

![upgit_20241019_1729329679.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241019_1729329679.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <base href="/demo07_media/media01.html">
    <title>互動網頁設計</title>
</head>
<style>
    /* 手機螢幕 */
    @media screen and (max-width: 600px) {
        /* 針對手機進行樣式調整 */
        body{background-color: hotpink;}
    }

    /* 平板螢幕 */
    @media screen and (min-width: 601px) and (max-width: 1024px) {
        /* 針對平板進行樣式調整 */
        body{background-color: orange;}
    }

    /* 桌上型電腦 */
    @media screen and (min-width: 1025px) {
        /* 針對桌面進行樣式調整 */
        body{background-color: deepskyblue;}
    }
</style>
<body>
</body>
</html>
```

#### 螢幕方向查詢
![upgit_20241019_1729330039.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241019_1729330039.png)
![upgit_20241019_1729330047.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241019_1729330047.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <base href="/demo07_media/media01.html">
    <title>互動網頁設計</title>
</head>
<style>
    /* 橫向 */
    @media screen and (orientation: portrait) {
        /* 針對手機進行樣式調整 */
        body{background-color: hotpink;}
    }

    /* 直向 */
    @media screen and (orientation: landscape) {
        /* 針對平板進行樣式調整 */
        body{background-color: orange;}
    }
</style>
<body>
</body>
</html>
```