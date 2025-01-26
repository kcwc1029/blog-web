## HTML的基本結構
- DOCTYPE：用來宣告網頁所使用的HTML版本。
- `<html>`：標示網頁的開始&結束。
- `<head>`：包含標題、關鍵字、CS/JS、編碼方式等不會顯示在畫面的資訊。
- `<body>`：網頁主體。
- 標籤(tag)&元素區別：
![upgit_20241016_1729042501.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729042501.png)

- 屬性(attribute)：HTML元素除了本身描述的特性之外，還可以增加多個屬性，彼此用空白分開。
![upgit_20241016_1729042619.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729042619.png)

### 撰寫第一份HTML
![upgit_20241016_1729042403.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729042403.png)

![upgit_20241016_1729042408.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729042408.png)
(網頁起手式)

## 文件結構
- `<html>`元素：標示HTML文件的開始與結束，屬於全域屬性(global attribute)。
- `<head>`元素：用來設定HTML文件的標題。
- `<meta>`元素：設定HTML文件的相關資訊。
```html
<head> 
    <!-- 編碼方式 -->
    <meta charset="UTF-8">  
    <!-- 關鍵字與文件描述 -->
    <meta name="keywords" content=" 旅行社, 訂房,機票">
    <meta name="description" content="提供優質國內外旅遊行程">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>互動網頁設計</title>
</head>
```

```html
<!-- 5秒跳傳google -->
<!DOCTYPE html>
<html lang="en">
<head> 
    <!-- 編碼方式 -->
    <meta charset="UTF-8">  
    <meta http-equiv="refresh" content="5; url=https://www.google.com.tw/">
    <title>互動網頁設計</title>
</head>
<body> 
    <p>此網頁將於5秒鐘後自動導向到Google網站</p>
</body>
</html>
```
- `<link>`元素：設定目前文件與其他資源的關聯。
- `<style>`元素：用來鑲嵌CSS。
- `<body>`元素：HTML文件本體。

### 文件元素
- `<h1>`到`<h6>`：標題：屬於全域屬性。
- `<p>`：段落。
![upgit_20241016_1729043409.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729043409.png)
![upgit_20241016_1729043491.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729043491.png)

- `<div>`：將HTML文件中某個範圍的內容和元素群組成一個區塊，屬於全域屬性。
![upgit_20241016_1729043763.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729043763.png)

### 具有語意的結構元素
- 大部分網頁都是有一定結構組成，而HTML5新增了帶有語意的結構元素，讓我們可以更明確每一個段落是幹嘛的。
- `<article>`：標示網頁的本文或單篇獨立內容(例如：新聞網站的一則報導)。
- `<section>`：標示通用的區塊或區段(例如將網頁文本分割、文章拆分不同缺塊等)。
- `<nav>`：導覽列。
- `<header>`/`<footer>`：頁首/頁尾
- `<aside>`：側邊攔
- `<main>`：網頁的主要內容
- `<figure>`、`<figcaption>`：標示在主要內容中所參考引用的獨立內容，例如圖片、影片、程式碼等。
![upgit_20241016_1729043901.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729043901.png)

#### demo01_展示語意結構
![upgit_20241016_1729043972.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729043972.png)
![upgit_20241016_1729043997.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729043997.png)

![upgit_20241016_1729043990.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729043990.png)

## 資料編輯與格式化

### 區塊格式(block)
- 用來標示區塊的原素，他會占一行。
- p、div、h1-h6等(上面描述過的)。
- `<block1uote>`：引用區塊，可以設定屬性cite，標示引用來源。
- `<address>`：聯絡資訊(地址、電話等)。
- `<hr>`：水平線，沒有結束標籤。

![upgit_20241016_1729044574.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729044574.png)


![upgit_20241016_1729044550.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729044550.png)

### 文字格式
- 常見文字標籤如下：
![upgit_20241016_1729045068.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729045068.png)

![upgit_20241016_1729045081.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729045081.png)

- `<br>`：換行，沒有結束標籤。
- `<span>`：群組成一行，屬於行內元素(inline)。

### 項目編號
- `<ul>/<ol>`：設定項目編號格式，其屬性如下：
	- `type={1, A, a, I, i}`：設定編號類型，預設為數字編號。
	- `start="n"`：編號期始值。
![upgit_20241016_1729045497.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729045497.png)

![upgit_20241016_1729045505.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729045505.png)

### 超連結(hyberlink)
- 通過屬性`href="url"`設定。
- `target=""`：設定開啟方式：
	- `_self`：目前視窗開啟。
	- `_blank`：新分頁開啟。
- `download`：設定要下載檔案。

![upgit_20241016_1729046102.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729046102.png)
```html
<!DOCTYPE html>
<html lang="en">
<head> 
    <meta charset="UTF-8">  
    <title>互動網頁設計</title>
</head>
<body> 
    <ul>
        <li><a href="http://www.es.ncku.edu.tw/esncku/zh/" target="_blank"></a>連結到工科網頁</li>
        <li><a href="https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Freg-acad.ncku.edu.tw%2Fvar%2Ffile%2F41%2F1041%2Fimg%2F2825%2Frest.doc&wdOrigin=BROWSELINK" download>退學申請單</a></li>
    </ul>
</html>

```
- 頁內跳轉：
![upgit_20241016_1729046163.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729046163.png)

- `base`：設定相對路徑的基站。
	- 用base的方式去設定超連結，如果未來要移動專案，整個一起移動就好了。
![upgit_20241016_1729046473.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729046473.png)

![upgit_20241016_1729046491.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729046491.png)
![upgit_20241016_1729046498.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729046498.png)

## 嵌入內容

### 嵌入圖片-`<img>`
- `src="url"`：設定圖片的網址。
- `width="n"`：圖片寬度。
- `height="n"`：圖片高度。
- `alt=""`：設定圖片的替代顯示文字,用來描述圖片的性質。

![upgit_20241016_1729047136.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729047136.png)
![upgit_20241016_1729047145.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729047145.png)

```html
<!DOCTYPE html>
<html lang="en">
<head> 
    <meta charset="UTF-8">  
    <base href="/display/index.html">
    <title>互動網頁設計</title>
</head>
<body> 
    <img src="./img/吉伊卡哇.jpg" alt="吉伊卡哇.jpg" width="100">
    <img src="./img/吉伊卡哇.jpg" alt="吉伊卡哇.jpg" width="200" height="100">
</body>
</html>
```
### 嵌入影片&影音-`<vedio>&<audio>`
- `src="url"`：設定圖片的網址。
- `width="n"`：圖片寬度。
- `height="n"`：圖片高度。
- `autoplay`：自動撥放。
- `control`：設定要顯示瀏覽器內建的控制模板。
- `loop`：循環播放。
- `muted`：設定靜音。

![upgit_20241016_1729054103.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729054103.png)

![upgit_20241016_1729054120.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729054120.png)


```html
<!DOCTYPE html>
<html lang="en">
<head> 
    <meta charset="UTF-8">  
    <base href="/display/index.html">
    <title>互動網頁設計</title>
</head>
<body> 
    <video src="./img/有特色的帥哥.mp4" controls autoplay loop muted></video>
    <audio src="./img/有特色的帥哥.mp4" controls autoplay loop muted></audio>
</body>
</html>
```

### 浮動框架-`<iframe>`
- `src="url"`：設定來源。
- `srcdoc="url"`：設定要顯示來源文件的內容。
- `name=""`：浮動框架的名稱。
- `width="n"`：圖片寬度。
- `height="n"`：圖片高度。
- `allowfullscreen`：允許以全螢幕顯示。
- `loading="{eager, lazy}"`：eager(預設)表示無論浮動框架是否位於可視區域，都立刻載入浮動框架。lazy是等浮動框架抵達可視區域的某個距離時才載入浮動框架。

![upgit_20241016_1729054641.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729054641.png)

![upgit_20241016_1729054651.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729054651.png)

```html
<!DOCTYPE html>
<html lang="en">
<head> 
    <meta charset="UTF-8">  
    <base href="/display/index.html">
    <title>互動網頁設計</title>
</head>
<body> 
    <p>浮動框架</p>
    <iframe src="http://www.es.ncku.edu.tw/esncku/zh/" frameborder="0" width="50%" ></iframe>
</body>
</html>
```

### 嵌入YT影片
![upgit_20241016_1729054748.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729054748.png)

![upgit_20241016_1729054764.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729054764.png)

![upgit_20241016_1729054787.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729054787.png)

### 嵌入google map
![upgit_20241016_1729054863.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729054863.png)


## 表格
- `<table>`：用來標示表格，屬性如下：
	- `border="n"`：邊框粗細。
- `<tr>`：表示表格中的列(row)
- `<th>\<td>`：表示表格中的行(colimn)，`<th>`為第一行，其他為`<td>`
	- `<colspan="n">`：col合併。
	- `<rowspan="n">`：row合併。
- `<caption>`：設定表格標號。
- `<thead>\<tbody>\<tfoot>`：並非必要元素，但可以讓表格更清楚
![upgit_20241016_1729056647.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729056647.png)


![upgit_20241016_1729056672.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729056672.png)

![upgit_20241016_1729056682.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729056682.png)

- 如果是要針對col去設定：使用`<colgroup>`跟`<col>`去做搭配。
![upgit_20241016_1729057013.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729057013.png)

## 表單(form)
- 表單透過以下兩者組成：
	- 表單介面：使用`<form>`、`<input>`、`<textarea>`、`<select>`、`<option>`等元素，做出文字方塊、選擇鈕、核取方塊、下拉式清單等。
	- 撰寫表單的處理程式，也就是表單的後端處理。例如將表單資料傳送到電子郵件地址、寫入檔案、寫入資料庫或進行查詢等。
- `<form>`：在HTMLˋ中插入表單，其屬性如下：
	- `name`：表單名稱(英文且唯一)。
	- `method={GET, POST}`：表單傳送方式，預設為GET。(GET指的是將資料放在網址後面進行傳送，較適合用來傳輸少量且不要求安全的資料。而POST是將資料透過HTTP標頭進行傳送，適合用來傳送檔案、密碼等大量且需要安全的資料)。
	- `action`：設定表單處裡的網址(屬於後端部分)。
	- `encypte`：將資料傳回web的加密方式，預設為`encypte="application/x-www-form-urlencoded`。如果要上傳檔案，要設定`encypte="multipart/form-data"`。如果要上傳email，要設定`encypte="text/plain"`。
	- `autocomplete="{on, off, default}"`：default是繼承`<form>`的autocomplete屬性，那`<form>`的autocomplete屬性預設是on。
	- `novalidate`：提交表單時不需要進行驗證。
- `<input>`：
![upgit_20241016_1729057845.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729057845.png)

![upgit_20241016_1729057852.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729057852.png)

- 其相關屬性如下：
	- `accept="image/gif, image/jpeg"`：設定提交檔案的內容類型。
	- `autocomplete="{on, off, default}"`：default是繼承`<form>`的autocomplete屬性，那`<form>`的autocomplete屬性預設是on。
	- `checked\disable`：欄位以勾、不能勾。
	- `min\max\step`：限制數字類型輸入範圍。
	- `value`：初始值。
	- `minlength\maxlength`：設定輸入文字數。
	- `multiple`：允許輸入多個值。
	- `placeholder`：表單提示文字。
	- `readonly`：
	- `required`：
![upgit_20241016_1729064425.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729064425.png)

![upgit_20241016_1729064463.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729064463.png)

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
    <form method="post" action="">
        <input type="hidden" name="表格分類" name="我是A表格">
        <p>姓名：<input type="text" name="userName"  id="userName" placeholder="請輸入姓名"></p>
        <p>email：<input type="email" name="userMail" id="userMail" placeholder="請輸入mail"></p>
        <p>身分證字號：<input type="password" name="Identification" id="Identification" placeholder="請輸入身分證字號"></p>
        <p>性別：
            <input type="radio" name="userSex" id="userSex" value="sex01">女
            <input type="radio" name="userSex" id="userSex" value="sex02">哥布林
            <input type="radio" name="userSex" id="userSex" value="sex03">其他
        </p>
        <p>乙組系上有哪些老師：
            <input type="checkbox" name="teacher[]" id="teacher" value="黃悅民" checked>黃悅民
            <input type="checkbox" name="teacher[]" id="teacher" value="侯廷偉"> 侯廷偉
            <input type="checkbox" name="teacher[]" id="teacher" value="賴槿峰"> 賴槿峰
            <input type="checkbox" name="teacher[]" id="teacher" value="陳世曄"> 陳世曄
            <input type="checkbox" name="teacher[]" id="teacher" value="狗蛋大兵"> 狗蛋大兵
        </p>
        <p>
            請撰寫500字心得<br>
            <textarea name="thoughts" id="thoughts" rows="5" cols="50">請撰寫500字心得</textarea>
        </p>
        <p>你是哪一種哥布林：
            <select name="Goblin[]" id="Goblin">
                <option value="Hob">鄉巴佬</option>
                <option value="Shaman">薩滿</option>
                <option value="Champion">英雄</option>
                <option value="Lord">王</option>
                <option value="Paladin">聖騎士</option>
                <option value="Dragoon">龍騎士</option>
            </select>
        </p>
        <p>輸入日期<input type="date" name="" id=""></p>
        <p>輸入時間<input type="datetime" name="" id=""></p>
        <input type="submit" value="submit">
        <input type="reset" value="submit">
    </form>
</body>
</html>
```



- `<label>`：用來設定使用者介面的標籤，會與`<input>`欄位關聯。
	- `<label>`的for與`<input>`的id相連。
![upgit_20241016_1729064877.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729064877.png)
![upgit_20241016_1729064909.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729064909.png)


- 針對`<option>`去做延伸：`<optgroup>`：
![upgit_20241016_1729065117.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729065117.png)

![upgit_20241016_1729065126.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729065126.png)


- 將表單欄位群組起來：`<fieldset>`，`<legend>`
![upgit_20241016_1729065469.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729065469.png)

![upgit_20241016_1729065476.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241016_1729065476.png)


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
    <form method="post" action="">
        <!-- 群組1 -->
        <fieldset>
            <legend>群組1</legend>
            <input type="hidden" name="表格分類" name="我是A表格">
            <p>姓名：<input type="text" name="userName"  id="userName" placeholder="請輸入姓名"></p>
            <p>email：<input type="email" name="userMail" id="userMail" placeholder="請輸入mail"></p>
            <p>身分證字號：<input type="password" name="Identification" id="Identification" placeholder="請輸入身分證字號"></p>
            <p>性別：
                <input type="radio" name="userSex" id="userSex" value="sex01">女
                <input type="radio" name="userSex" id="userSex" value="sex02">哥布林
                <input type="radio" name="userSex" id="userSex" value="sex03">其他
            </p>
        </fieldset>

        <!-- 群組2 -->
        <fieldset>
            <legend>群組2</legend>
            <p>乙組系上有哪些老師：
                <input type="checkbox" name="teacher[]" id="teacher" value="黃悅民" checked>黃悅民
                <input type="checkbox" name="teacher[]" id="teacher" value="侯廷偉"> 侯廷偉
                <input type="checkbox" name="teacher[]" id="teacher" value="賴槿峰"> 賴槿峰
                <input type="checkbox" name="teacher[]" id="teacher" value="陳世曄"> 陳世曄
                <input type="checkbox" name="teacher[]" id="teacher" value="狗蛋大兵"> 狗蛋大兵
            </p>
            <p>
                請撰寫500字心得<br>
                <textarea name="thoughts" id="thoughts" rows="5" cols="50">請撰寫500字心得</textarea>
            </p>
            <p>你是哪一種哥布林：
                <select name="Goblin[]" id="Goblin">
                    <option value="Hob">鄉巴佬</option>
                    <option value="Shaman">薩滿</option>
                    <option value="Champion">英雄</option>
                    <option value="Lord">王</option>
                    <option value="Paladin">聖騎士</option>
                    <option value="Dragoon">龍騎士</option>
                </select>
            </p>
        </fieldset>
        
        
        <p>輸入日期<input type="date" name="" id=""></p>
        <p>輸入時間<input type="datetime" name="" id=""></p>
        <input type="submit" value="submit">
        <input type="reset" value="submit">
    </form>
</body>
</html>
```




































































