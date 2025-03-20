## 推薦

-   https://www.oxxostudio.tw/index.html?tag-css

## 基本介紹

-   CSS（Cascading Style Sheets，層疊樣式表）用來控制網頁的外觀，包括排版、顯示格式、樣式及視覺效果，提升了 HTML 的設計靈活性與美觀。
-   HTML 原本是設計來處理內容的結構化，對於美觀方面的控制有限。CSS 允許網頁開發者控制外觀，讓內容和呈現分離，這樣能提高維護的靈活度和效率。

## 套用 CSS 的方式

### 內部樣式（Internal Style）

-   在 `<style>` 標籤內寫入 CSS

```html
<head>
	<meta charset="UTF-8" />
	<base href="/display/index.html" />
	<title>這是內部樣式範例</title>

	<!-- 內部樣式 -->
	<style>
		body {
			color: black;
			background-color: #fcead8;
		}
	</style>
</head>
```

### 外部樣式（External Style）

-   將 CSS 另存為 .css 檔案，並使用 `<link>` 或 @import 引入

```html
<head>
	<meta charset="UTF-8" />
	<base href="/display/index.html" />
	<title>這是外部樣式範例</title>

	<!-- 外部樣式01 -->
	<link rel="stylesheet" href="style/style.css" />
	<!-- 外部樣式02 -->
	@import url("style/style.css");
</head>
```

### 行內樣式（Inline Style）

-   直接在 HTML 標籤的 `style` 屬性內定義 CSS

```html
<body style="color: black; background-color: #FCEAD8;">
	<h1>Hello CSS</h1>
</body>
```

## CSS 語法

-   選擇器(selector)：用來設定要套用規則的對象，範例如`body`、`h1`等元素。
-   宣告(declaration)：用來描述選擇器應套用的樣式。每個宣告包含屬性(property)和其值(value)，如`color: white`。
-   CSS 註解符號為`/* */`
-   合併相同規則：如果多個選擇器具有相同的規則，可以將它們合併，讓程式碼更簡潔。

![upgit_20250312_1741782290.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/03/upgit_20250312_1741782290.png)

```html
<!DOCTYPE html>
<html lang="zh-TW">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>合併相同規則的 CSS</title>
		<style>
			/* 合併相同規則的寫法 */
			h1,
			h2,
			p {
				color: white;
				background-color: darkblue;
				font-family: "Arial Black", sans-serif;
				padding: 10px;
				text-align: center;
			}
		</style>
	</head>
	<body>
		<h1>這是標題 1（H1）</h1>
		<h2>這是標題 2（H2）</h2>
		<p>這是一段文字（P），它的樣式與標題相同。</p>
	</body>
</html>
```

## 選擇器 (Selector)

### **通用選擇器 (Universal Selector)**

-   用來選擇 HTML 文件中所有元素，並套用相同規則。適用於初始化設定或全局樣式。

```css
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
```

### **類型選擇器 (Type Selector)**

-   針對指定的 HTML 元素類型，應用規則。

```css
h1 {
	color: white;
	background: red;
	font-family: "Arial Black";
}

/* 合併相同規則 */
h1,
h2,
h3,
p {
	color: blue;
}
```

### **類別選擇器 (Class Selector)**

-   針對指定的 class 屬性套用規則，適用於多個元素。

```css
.odd {
	background: linen;
}

.even {
	background: lightblue;
}

/* 針對特定屬性值的元素套用規則 */
[class="apple"] {
	color: blue;
}
```

### **ID 選擇器 (ID Selector)**

-   針對指定的 ID 屬性套用規則，ID 在文件中必須唯一。

```css
#btn1 {
	font-size: 20px;
	color: red;
}
```

## 虛擬元素(pseudo-element)

![01.gif](./CSS%20GIF/01.gif)

-   虛擬元素(pseudo-element) 是 CSS 中用來針對特定元素內某部分應用樣式的一種方式。
-   它們不是實際的 HTML 元素，而是由 CSS 生成的「虛擬」內容。
-   常見的虛擬元素有以下幾種：
    -   `::first-letter`：用來選擇元素的第一個字母。
    -   `::first-line`：用來選擇元素的第一行文字。
    -   `::before`：在元素內容的前面插入內容。
    -   `::after`：在元素內容的後面插入內容。
    -   `::selection`：用來選擇使用者選取的文字部分。
-   實作：[Pseudo_Element.html](./Pseudo_Element.html)

## 虛擬類別 (Pseudo-class)

![02.gif](./CSS%20GIF/02.gif)

-   虛擬類別是 CSS 中用來選擇符合特定條件的元素的一種方式。
-   它們不是實際的 HTML 元素，而是基於元素的狀態或位置來應用樣式。

![upgit_20250315_1742020677.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/03/upgit_20250315_1742020677.png)

-   實作：[Pseudo_Class.html](./Pseudo_Class.html)

## !important

-   !important 是 CSS 中用來強制提高樣式優先級的一種方式。
-   當某個樣式屬性加上 !important 時，無論其他樣式的優先級如何，該屬性都會被強制應用。
-   在 CSS 屬性值後面加上 !important。例如：color: red !important;。
-   實作：[important.html](./important.html)

## 色彩屬性

-   color：前景色彩(可以視為字型顏色)
-   background-color：背景色彩
-   opacity: 0.5：設定透明度。
-   實作：[Color.html](./Color.html)

## 尺寸單位

### 絕對單位

-   px：用來定義元素的尺寸（如字體、邊距、間距等），確保精確的尺寸控制。
-   em：常用於字體大小和間距的相對設定。`em` 是相對於父元素字體大小的倍數。用這個單位可以讓頁面更具彈性，適應不同的屏幕大小。

### 相對單位

-   rem：與 `em` 類似，但 `rem` 是相對於根元素（`<html>` 標籤）的字體大小。這個單位越來越常用，因為它提供了更一致的設計控制。
-   vw 和 vh：代表可視窗口寬/高度的百分比，特別適合於響應式設計，根據視口的尺寸調整元素大小。
-   %(百分比)：適合用來設定寬度（`width`）、高度（`height`）等，以便隨著父元素或視窗的大小自動調整。它的靈活性高，但有時候可能會導致元素尺寸不夠精確。
-   相關閱讀：https://ithelp.ithome.com.tw/articles/10289914?sc=iThelpR

## 字形屬性(font)

-   用於控制文字的外觀，包括字型、大小、樣式、粗細和行高等。
-   font-family：設定字型。
    -   sans-serif：無襯線字型（例如 Arial）。
    -   serif：襯線字型（例如 Times New Roman）。
    -   monospace：等寬字型（例如 Courier New）。
    -   cursive：手寫字型（例如 Comic Sans MS）。
    -   fantasy：裝飾字型（例如 Impact）。
-   font-size：設定文字大小
    -   絕對單位：12px, 16pt
    -   相對單位：1em（相對於父元素字體大小），150%
    -   CSS 字體大小關鍵字：xx-small、x-small、small、medium、large、x-large、xx-large
-   font-style：文字樣式：normal(正常)、italic(斜體)、oblique(傾斜)
-   font-weight：文字粗細：normal、lighter、bold、bolder
-   line-height：設定行高
-   實作：[Font.html](./Font.html)

## 文字屬性(font)

-   **text-indent**：
    -   控制段落首行縮進。
    -   `0`、`2rem`、`50px` 等。
-   **text-align**：
    -   設置文字的水平對齊方式。
    -   `start`、`end`、`left`、`right`、`center`、`justify`。
-   **letter-spacing**：字母間的間距。
    -   ：`normal`、`-1px`、`2px`。
-   **word-spacing**：調整單詞間的間距。
    -   `normal`、`5px`、`10px`。
-   **text-transform**：改變文字的大小寫。
    -   `none`、`capitalize`、`uppercase`、`lowercase`。
-   **text-shadow**：添加文字陰影效果。
    -   **常用值**：`2px 2px 4px orange`（水平偏移、垂直偏移、模糊半徑、顏色）。
    -   **說明**：可疊加多個陰影，例如 `10px 10px 20px cyan, 20px 20px 20px silver`。
-   **text-decoration**：添加文字裝飾線。
    -   **常用值**：`none`、`underline`、`overline`、`line-through`。
        -   `text-decoration-style`：`solid`、`dashed`、`dotted`、`wavy`。
        -   `text-decoration-color`：指定裝飾線顏色（如 `blue`、`red`）。
-   實作：[Text.html](./Text.html)

## 清單屬性

-   **清單**：使用 `<ul>`（無序）或 `<ol>`（有序）標籤展示項目，內含 `<li>`。
-   **CSS 屬性**：`list-style-type` 設定標記樣式。

-   **無序清單（`<ul>`）**：
    -   `disc`：實心圓點（預設）。
    -   `circle`：空心圓點。
    -   `square`：實心方塊。
    -   `none`：無標記。
-   **有序清單（`<ol>`）**：
    -   `decimal`：數字（1, 2, 3）（預設）。
    -   `decimal-leading-zero`：補零數字（01, 02, 03）。
    -   `upper-roman`：大寫羅馬數字（I, II, III）。
    -   `lower-roman`：小寫羅馬數字（i, ii, iii）。
    -   `upper-alpha`：大寫字母（A, B, C）。
    -   `lower-alpha`：小寫字母（a, b, c）。
    -   `lower-greek`：小寫希臘字母（α, β, γ）。
-   實作：[List_Style.html](./List_Style.html)

## Box Model

![upgit_20250315_1742027861.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/03/upgit_20250315_1742027861.png)

-   Box Model 是 CSS 中用來描述 HTML 元素布局的模型。
-   Box Model 分為
    -   內容 (Content)：顯示 HTML 元素的實際內容（例如文字、圖片等）
    -   內邊距 (Padding)：增加內容與邊框之間的距離，背景顏色會延伸到內邊距區域。
    -   邊框 (Border)：包圍內容和內邊距的邊界，可以設定樣式、顏色和寬度。
    -   外邊距 (Margin)：設定元素與其他元素之間的距離，外邊距是透明的，不會顯示背景顏色。
-   邊界重疊 (Margin Collapse)
    -   當兩個垂直相鄰的元素的外邊距接觸時，它們的外邊距會合併為一個較大的外邊距。
    -   取兩個外邊距中的較大值作為最終的外邊距。

## 寬度與高度屬性

### box-sizing 屬性

-   決定元素的 width 和 height 是否包含 padding 和 border
-   預設為 `content-box`（width 和 height 只包含內容本身，padding 和 border 會額外增加元素的總寬度和高度）
-   `box-sizing: border-box`：（width 和 height 包含 padding 和 border，padding 和 border 不會額外增加元素的總寬度和高度）
-   文章：https://ithelp.ithome.com.tw/articles/10252827

### overflow

-   控制元素內容超出容器邊界時的顯示方式：

-   `visible`（預設）：內容不會被剪裁，超出部分會顯示在容器外
-   `hidden`：內容會被剪裁，超出部分不會顯示
-   `scroll`：無論內容是否超出，皆顯示滾動條
-   `auto`：當內容超出時，自動顯示滾動條
-   實作：[Overflow.html](./Overflow.html)

## 定位方式--position

-   用於控制元素的定位方式
-   可以讓元素脫離正常文檔流，並根據指定的位置進行布局
-   實作：[position.html](./position.html)

### 0.2. static（預設值）

-   元素按照正常文檔流排列，無法使用 top、bottom、left、right 進行定位。
    ![upgit_20250316_1742111574.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/03/upgit_20250316_1742111574.png)

![upgit_20250316_1742111580.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/03/upgit_20250316_1742111580.png)

### 0.3. relative

-   元素相對於其正常位置進行偏移。
-   可以使用 top、bottom、left、right 進行定位。
    ![upgit_20250316_1742111615.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/03/upgit_20250316_1742111615.png)

![upgit_20250316_1742111621.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/03/upgit_20250316_1742111621.png)

### 0.4. absolute

-   元素相對最近的非 static 父元素進行定位。
-   可以使用 top、bottom、left、right 進行定位。

![upgit_20250316_1742111639.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/03/upgit_20250316_1742111639.png)

![upgit_20250316_1742111643.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/03/upgit_20250316_1742111643.png)

### 0.5. fixed

-   元素相對於瀏覽器視口進行定位。
-   即使頁面滾動，元素也會固定在指定位置。

![upgit_20250316_1742111697.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/03/upgit_20250316_1742111697.png)

![Position_Fixed.gif](./CSS%20GIF/Position_Fixed.gif)

### 0.6. sticky

-   元素根據滾動位置在 relative 和 fixed 之間切換。
-   當元素滾動到指定位置時，會固定在該位置。

![upgit_20250316_1742111726.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/03/upgit_20250316_1742111726.png)

![Position_sticky.gif](./CSS%20GIF/Position_sticky.gif)

## 文繞圖--float

-   flaot：{none, left, right}。
-   我們可以使用 float 屬性將一個正常順序中的元素放在容器的左側或右側，而容器裡面的其它元素會環繞在該元素周圍。
-   這個效果就像排版軟體中的「文繞圖」。
-   不過 CSS 所說的圖並不侷限於圖片，它可以是包含任何文字或圖片的 Block Box 或 Inline Box。
-   clear：當 Box 設定為浮動後，會預設與相鄰的 Inline Box 進行排列。但若不希望這種排列發生，可使用 `clear` 屬性來解除浮動排列。

![upgit_20250316_1742112109.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/03/upgit_20250316_1742112109.png)

![upgit_20250316_1742112503.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/03/upgit_20250316_1742112503.png)

## 可見--visibility

-   設定要顯示/隱藏 box(但空間還是回存在)。

![upgit_20250316_1742112619.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/03/upgit_20250316_1742112619.png)

-   標題一設定為 hidden，所以不回顯示，但空間仍表留
-   標題二設定為 display:none，所以整個空間直接消失

## 陰影(box-shadow)

-   用於為元素添加陰影效果。
-   可以控制陰影的水平位移、垂直位移、模糊半徑、擴散距離和顏色。
-   box-shadow: 水平位移 垂直位移 模糊半徑 擴散距離 色彩;
    -   水平位移：陰影的水平偏移量（正數向右，負數向左）。
    -   垂直位移：陰影的垂直偏移量（正數向下，負數向上）。
    -   模糊半徑：陰影的模糊程度（值越大越模糊）。
    -   擴散距離：陰影的擴散範圍（正數擴大，負數縮小）。
    -   色彩：陰影的顏色（例如 #000000 或 rgba(0, 0, 0, 0.5)）。
-   實作：[Box_Shadow.html](./Box_Shadow.html)

## 背景屬性

-   background-image: url("圖片路徑")：設定元素的背景圖片
-   background-repeat：設定背景圖片的排列方式。
    -   repeat：重複排列（預設值）。
    -   no-repeat：不重複排列。
-   background-position:center：設定背景圖片的起始位置。
-   background-size：設定背景圖片的大小
    -   auto：保持圖片原始大小。
    -   cover：圖片覆蓋整個元素，可能裁切部分圖片。
    -   contain：圖片完整顯示在元素內，可能留白。
-   background-attachment：設定背景圖片是否隨內容捲動
    -   scroll：背景圖片隨元素內容捲動（預設值）。
    -   fixed：背景圖片固定，不隨內容捲動。
    -   local：背景圖片隨元素內容和容器內容捲動。
-   實作：[Background.html](./Background.html)

## 漸層屬性

-   linear-gradient：{角度|方向、色彩停止點}：線性漸層。
-   radial-gradient：{形狀|大小|位置、色彩停止點 1、色彩停止點 2...}：放射漸層。
-   形狀：可以是 circle、ellipse。
-   大小：
    -   closest-side：從圓心到區塊最靠近邊緣的距離作為半徑。
    -   farthest-side：從圓心到區塊最遠邊緣的距離作為半徑。
    -   closest-corner：從圓心到區塊最近角的距離作為半徑。
    -   farthest-corner：從圓心到區塊最遠角的距離作為半徑。
-   位置：可以在 `at` 後加上 `left`、`right`、`top`、`bottom` 或 `center` 來設置漸層的起始位置。

![upgit_20250316_1742113452.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/03/upgit_20250316_1742113452.png)

## 濾鏡屬性

-   blur(x)：模糊效果，參數 `x` 指定模糊半徑，常用於製造圖片模糊背景或柔化效果。
-   brightness(x)：參數 `x` 的值大於 100% 提高亮度，小於 100% 降低亮度。
-   contrast(x)：調整對比度，參數 `x` 的值大於 100% 提高對比，小於 100% 減少對比。
-   grayscale(x)：將圖片轉為灰階，`0%` 是彩色，`100%` 是全灰色。
-   invert(x)：反轉圖片顏色，`0%` 保持原狀，`100%` 完全反轉。
-   opacity(x)：調整透明度，`0%` 完全透明，`100%` 完全不透明。
-   sepia(x)：將圖片轉換為棕褐色，製造復古效果，`0%` 沒有效果，`100%` 完全為棕褐色。`
-   drop-shadow()：為圖片添加陰影效果，類似於 `box-shadow`，可以設置陰影的水平位移、垂直位移、模糊半徑和陰影顏色。

![upgit_20250316_1742113646.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/03/upgit_20250316_1742113646.png)

![upgit_20250316_1742113628.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/03/upgit_20250316_1742113628.png)

## 表格屬性

-   caption-side：設定表格標題的位置，可設定 top、bottom
-   border-collapse：設定表格邊框的顯示方式。
    -   separate：每個儲存格有獨立的邊框（預設值）。
    -   collapse：儲存格邊框合併為單一邊框。
-   table-layout：設定表格的佈局方式。
    -   auto：儲存格寬度根據內容自動調整。
    -   fixed：儲存格寬度根據表格寬度和欄寬固定。

## 1. flexbox

![upgit_20250316_1742114449.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/03/upgit_20250316_1742114449.png)

-   與 borderbox 不同的地方，在於 Flexbox 的盒子模型具有：
    -   水平的起點與終點 ( main start、main end )
    -   垂直的起點與終點 ( cross start、cross end )
    -   水平軸與垂直軸 ( main axis、cross axis )
    -   水平尺寸與垂直尺寸 ( main size、cross size )
-   Flexbox 屬性如下：display、flex-direction、justify-content、align-items、align-self、align-content、flex-wrap、order、flex

### 1.1. Display

-   展示方式，預設為 flex

![upgit_20250316_1742114808.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/03/upgit_20250316_1742114808.png)

### 1.2. flex-direction

-   表示 Flexbox 內容元素的排列方向。
-   row：預設值，由左到右，從上到下
-   row-reverse：與 row 相反
-   column：從上到下，再由左到右
-   column-reverse：與 column 相反

![upgit_20250316_1742114893.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/03/upgit_20250316_1742114893.png)

### 1.3. justify-content：

-   設定 Flex Item 在主軸上的對齊方式
-   flex-start：靠左對齊（預設值）。
-   flex-end：靠右對齊。
-   center：居中對齊。
-   space-between：左右對齊，間距均等。
-   space-around：分散對齊，間距均等。

![upgit_20250316_1742115174.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/03/upgit_20250316_1742115174.png)

### 1.4. align-items：

-   設定 Flex Item 在副軸上的對齊方式。
-   flex-start：靠上對齊。
-   flex-end：靠下對齊。
-   center：垂直居中對齊。
-   stretch：拉伸以填滿容器（預設值）。
-   baseline：基線對齊。

![upgit_20250316_1742115230.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/03/upgit_20250316_1742115230.png)

### 1.5. flex-wrap：

-   設定 Flex Item 是否換行。
-   nowrap：不換行（預設值）。
-   wrap：自動換行。

![upgit_20250316_1742115297.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/03/upgit_20250316_1742115297.png)

### 1.6. flex

-   由三個屬性組合而成，分別為「flex-grow」、「flex-shrink」和「flex-basis」
-   flex-grow：設定 Flex Item 的放大比例
    -   預設值為 0，表示不放
-   flex-shrink：設定 Flex Item 的縮小比例。
    -   預設值為 1，表示可以縮小。
-   flex-basis：設定 Flex Item 的初始大小
    -   長度（例如 100px）、百分比（例如 50%）或 auto

![upgit_20250316_1742115357.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/03/upgit_20250316_1742115357.png)

![Flexbox_Flex.gif](./CSS%20GIF/Flexbox_Flex.gif)

## Grid

-   https://css-tricks.com/snippets/css/complete-guide-grid/#prop-display

## 媒體查詢

-   要先了解 RWD(這個老師上課應該會講 XD)
-   媒體查詢是 CSS 中用來根據設備特性（例如螢幕寬度、設備類型等）應用不同樣式的技術。
-   常用於實現響應式設計（Responsive Design），讓網頁在不同設備上都能良好顯示。
-   媒體類型：
    -   all：適用於所有設備（預設值）。
    -   screen：適用於螢幕設備（例如瀏覽器）。
    -   print：適用於列印設備（例如印表機或 PDF）。
-   媒體特性：例如 width（寬度）、orientation（方向）。

    -   orientation：螢幕方向（portrait 直向，landscape 橫向）。
    -   min-width：最小寬度。
    -   max-width：最大寬度。

### 媒體查詢的使用方式

-   `<link>`元素中使用：根據媒體類型加載不同的 CSS 文件。

```html
<link rel="stylesheet" type="text/css" href="style/screen.css" media="screen" />

<link rel="stylesheet" type="text/css" href="style/print.css" media="print" />
```

-   透過 `@import`，根據媒體類型引入不同的 CSS 文件：

```css
@import url("style/screen.css") screen;
@import url("style/print.css") print;
```

-   在 `@media` 中使用：在 CSS 內直接定義媒體查詢條件

```css
@media screen and (max-width: 600px) {
	body {
		background-color: lightblue;
	}
}
```

-   實作：[Media_Quera01.html](./Media_Quera01.html)
-   實作：[Media_Quera02.html](./Media_Quera02.html)
