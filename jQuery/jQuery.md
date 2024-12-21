- [jQuery](https://jquery.com/)

## 1. 使用方式
- 方式1：下載套件
![upgit_20241102_1730514005.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241102_1730514005.png)

- 方式2：使用CDN
	- [jQuery CDN](https://releases.jquery.com/)
![upgit_20241102_1730514145.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241102_1730514145.png)


## 2. 第一個jQuery
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body></body>
    <script
        src="https://code.jquery.com/jquery-3.7.1.slim.min.js"
        integrity="sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8="
        crossorigin="anonymous"
    ></script>
    <script>
        $(document).ready(function () {
            window.alert("hello jquery");
        });
    </script>
</html>

```

## 3. jQuery核心
```
$(選擇器).method(參數)
```
### 3.1. 基本選擇器
- 通配選擇器：`$("*")`：選擇所有元素。
- 類型選擇器：`$("h1")`： 選擇 `<h1>` 元素。
- ID 選擇器：`$("#id")` ：選擇 `id` 屬性為指定值的元素。
- 類別選擇器：`$(".class")`：選擇 `class` 屬性為指定值的元素。

### 3.2. 結構選擇器
- 子選擇器：`$("ul li")`：選擇 `<ul>` 的直接子元素 `<li>`。
- 後代選擇器：`$("p a")`：選擇 `<p>` 元素的所有後代 `<a>`。
- 相鄰兄弟選擇器：`$("img + p")`：選擇緊接在 `<img>` 之後的 `<p>`。
- 全部兄弟選擇器：`$("img ~ p")`：選擇所有位於 `<img>` 後的兄弟 `<p>` 元素。

### 3.3. 屬性選擇器
- 基本屬性選擇器：`$("[attr]")` – 選擇有 `attr` 屬性的元素。
- 特定值屬性選擇器：`$("[class='apple']")` – 選擇 `class` 屬性值為 `apple` 的元素。
- 部分匹配屬性選擇器：
  - 包含字串：`$("[class*='apple']")` – 選擇 `class` 屬性包含 `apple` 的元素。
  - 前綴匹配：`$("[class^='apple']")` – 選擇 `class` 屬性以 `apple` 開頭的元素。
  - 後綴匹配：`$("[class$='apple']")` – 選擇 `class` 屬性以 `apple` 結尾的元素。

### 3.4. 表單選擇器
- 基本表單元素：
  - `$("input")`：選擇所有 `<input>` 元素。
  - `$("input:radio")`：選擇所有類型為 `radio` 的 `<input>`。
  - `$("input:checkbox")`：選擇所有類型為 `checkbox` 的 `<input>`。
- 其他表單元素：
  - `:text`：選擇類型為 `text` 的 `<input>`。
  - `:password`：選擇類型為 `password` 的 `<input>`。
  - `:submit`：選擇類型為 `submit` 的 `<input>`。
  - `:selected`：選擇下拉清單中被選取的項目。

### 3.5. 狀態選擇器
- 啟用或禁用：
  - `:enabled`：選擇所有啟用的 `<input>`。
  - `:disabled`：選擇所有禁用的 `<input>`。
- 選取或未選取：
  - `:checked`：選擇所有被選取的 `<input>`（例如 `checkbox` 或 `radio`）。
  - `:not(:checked)`：選擇所有尚未選取的 `<input>`。

### 3.6. 其他虛擬選擇器
- 索引選擇器：
  - `:first`：選擇第一個元素。
  - `:last`：選擇最後一個元素。
  - `:eq(index)`：選擇指定索引的元素。
  - `:gt(index)`：選擇索引值大於 `index` 的元素。
  - `:lt(index)`：選擇索引值小於 `index` 的元素。
- 奇偶選擇器：
  - `:odd`：選擇索引值為奇數的元素。
  - `:even`：選擇索引值為偶數的元素。
- 其他：
  - `:contains(text)`：選擇包含指定文字的元素。
  - `:has(selector)`：選擇包含指定選擇器的元素。
  - `:empty`：選擇所有沒有子元素的元素。
  - `:parent`：選擇所有有子元素的元素。
  - `:hidden`：選擇所有隱藏的元素。
  - `:visible`：選擇所有可見的元素。



### 3.7. 存取元素方法
- text()：取出元素內容
![upgit_20241102_1730516201.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241102_1730516201.png)

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <!-- jQuery -->
        <script
            src="https://code.jquery.com/jquery-3.7.1.slim.min.js"
            integrity="sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8="
            crossorigin="anonymous"
        ></script>
    </head>
    <body>
        <button id="btn">顯示訊息</button>
        <p id="msg"></p>
    </body>
    <script>
        // 按下後顯示訊息
        let item = $("#btn").on("click", () => {
            $("#msg").text("Hello jQuery"); // 更改標籤內容
        });
    </script>
</html>
```
- html()：取出元素內容(含標籤)
```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
		<!-- jQuery -->
		<script
			src="https://code.jquery.com/jquery-3.7.1.slim.min.js"
			integrity="sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8="
			crossorigin="anonymous"
></script>
	</head>
	<body>
		<ul>
			<li>item01</li>
			<li>item02</li>
			<li>item03</li>
		</ul>
	</body>
	<script>
		let items = $("li:first").html();
		console.log(items);
		// <li>item01</li>
		// <li>item02</li>
		// <li>item03</li>
		items = $("li:first").html("<p>使用html()修改標籤</p>");
	</script>
</html>
```
- val()：選取值
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <!-- jQuery -->
        <script
            src="https://code.jquery.com/jquery-3.7.1.slim.min.js"
            integrity="sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8="
            crossorigin="anonymous"
        ></script>
    </head>
    <body>
        <select name="" id="book">
            <option value="01" selected>item01</option>
            <option value="02">item02</option>
            <option value="03">item03</option>
            <option value="04">item04</option>
        </select>
    </body>
    <script>
        let items = $("#book").val();
        let name = $("#book option:selected").text();
        console.log(items);
        console.log(name);
    </script>
</html>

```
- attr()：存取屬性
- removeAttr()：刪除屬性
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <!-- jQuery -->
        <script
            src="https://code.jquery.com/jquery-3.7.1.slim.min.js"
            integrity="sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8="
            crossorigin="anonymous"
        ></script>
    </head>
    <body>
        <a href="https://www.youtube.com/">YT</a>
    </body>
    <script>
        let href = $("a").attr("href");
        console.log(href); // https://www.youtube.com/

        // 更改屬性
        $("a").attr("href", "https://chatgpt.com/");

        // 更改1個以上屬性
        $("a").attr({
            href: "https://chatgpt.com/",
            target: "_blank",
            title: "Visit ChatGPT's official site",
        });

        // 刪除屬性
        $("a").removeAttr("title");
    </script>
</html>
```

- addClass()
- removeClass()
- hasclass()
- toggleClass()
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <!-- jQuery -->
        <script
            src="https://code.jquery.com/jquery-3.7.1.slim.min.js"
            integrity="sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8="
            crossorigin="anonymous"
        ></script>
    </head>
    <body>
        <a href="https://www.youtube.com/">YT</a>
    </body>
    <script>
        let href = $("a");
        href.addClass("c1 c2");
        href.removeClass("c1");
    </script>
</html>
```

- append()：將參數所指定的元素加到符合之元素的後面。(是加到指定區塊內)
- prepend()：將參數所指定的元素加到符合之元素的前面。
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <!-- jQuery -->
        <script
            src="https://code.jquery.com/jquery-3.7.1.slim.min.js"
            integrity="sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8="
            crossorigin="anonymous"
        ></script>
    </head>
    <body>
        <a href="https://www.youtube.com/">YT</a>
    </body>
    <script>
        let href = $("a");
        href.append("<b>這是preend</b>");
        href.prepend("<b>這是append</b>");
        // <a href="https://www.youtube.com/"><b>這是append</b>YT<b>這是preend</b></a>
    </script>
</html>
```

- before()：來將參數所指定的元素加到符合之元素的前面。(是加到指定區塊外)
- after()：來將參數所指定的元素加到符合之元素的後面。
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <!-- jQuery -->
        <script
            src="https://code.jquery.com/jquery-3.7.1.slim.min.js"
            integrity="sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8="
            crossorigin="anonymous"
        ></script>
    </head>
    <body>
        <a href="https://www.youtube.com/">YT</a>
    </body>
    <script>
        let href = $("a");
        href.before("<p>這是before</p>");
        href.after("<p>這是after</p>");
        // <a href="https://www.youtube.com/"><b>這是append</b>YT<b>這是preend</b></a>
    </script>
</html>
```
### 3.8. 操作集合中的每個物件
- each()：用來針對物件或陣列進行重複運算。
![upgit_20241102_1730519573.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241102_1730519573.png)

![upgit_20241102_1730519885.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241102_1730519885.png)


### 3.9. 操作CSS設定
![upgit_20241102_1730522244.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241102_1730522244.png)


```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <!-- jQuery -->
        <script
            src="https://code.jquery.com/jquery-3.7.1.slim.min.js"
            integrity="sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8="
            crossorigin="anonymous"
        ></script>
    </head>
    <body>
        <h1 style="background-color: #add9f4">這是標籤H1</h1>
    </body>
    <script>
        let h1 = $("h1");
        h1.on("mouseover", function () {
            $(this).css({
                color: "red",
            });
        });
        h1.on("mouseout", function () {
            $(this).css({
                color: "white",
            });
        });
    </script>
</html>
```


### 3.10. 取得元素高度寬度
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <!-- jQuery -->
        <script
            src="https://code.jquery.com/jquery-3.7.1.slim.min.js"
            integrity="sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8="
            crossorigin="anonymous"
        ></script>
    </head>
    <body>
        <h1 style="background-color: #add9f4">這是標籤H1</h1>
    </body>
    <script>
        let h1 = $("h1");
        console.log(h1.width());
        console.log(h1.height());
        h1.width("50rem");
    </script>
</html>
```

### 3.11. 移除元素
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <!-- jQuery -->
        <script
            src="https://code.jquery.com/jquery-3.7.1.slim.min.js"
            integrity="sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8="
            crossorigin="anonymous"
        ></script>
    </head>
    <body>
        <h1 style="background-color: #add9f4">這是標籤H1</h1>
    </body>
    <script>
        let h1 = $("h1");
        h1.remove();
    </script>
</html>
```




## 4. jQuery DOM 操作方法

### 4.1. 選擇子元素
- `.find(selector)`：從選定元素中找到符合 `selector` 的所有後代元素。
    - 範例：`$("p").find("span").css("color", "red");` 將 `<p>` 元素中的所有 `<span>` 元素的文字設為紅色。
- `.children(selector)`：從選定元素中找到符合 `selector` 的直接子元素。
    - 範例：`$("ul.level-2").children().css("color", "red");` 將 `ul.level-2` 的直接子元素的文字設為紅色。
```html
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <!-- jQuery -->
        <script
            src="https://code.jquery.com/jquery-3.7.1.slim.min.js"
            integrity="sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8="
            crossorigin="anonymous"
        ></script>
    </head>
    <body>
        <p>展示.find()</p>
        <p>Hello, <span>world</span>! Today is <span>Friday</span>.</p>
        <hr />
        <p>.children()</p>
        <ul class="level-1">
            <li>Item A</li>
            <li>
                Item B
                <ul class="level-2">
                    <li>Item 1</li>
                    <li>Item 2</li>
                </ul>
            </li>
            <li>Item C</li>
        </ul>
    </body>
    <script>
        $("p").find("span").css("color", "red");
        $("ul.level-2").children().css("color", "blue");
    </script>
</html>

```
### 4.2. 選擇父元素
- `.closest(selector)`：從選定元素開始，沿 DOM 樹向上查找，返回最接近且符合 `selector` 的祖先元素。
    - 範例：`$("li.item-1").closest("ul").css("color", "red");` 選取最近的 `<ul>` 祖先元素並設為紅色。
- `.parent(selector)`：找到符合 `selector` 的直接父元素。
    - 範例：`$("p").parent(".selected").css("color", "red");` 將 `<p>` 元素的直接父元素設為紅色。
- `.parents(selector)`：從選定元素開始，沿 DOM 樹向上查找，找到所有符合 `selector` 的祖先元素。
    - 範例：`$("p").parents(".selected").css("color", "red");` 將所有符合 `.selected` 的祖先元素設為紅色。
```html
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <!-- jQuery -->
        <script
            src="https://code.jquery.com/jquery-3.7.1.slim.min.js"
            integrity="sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8="
            crossorigin="anonymous"
        ></script>
    </head>
    <body>
        <p>展示closest()</p>
        <ul class="level-1">
            <li class="item-1">Item A</li>
            <li class="item-2">Item B</li>
        </ul>
        <hr />
        <p>展示parent()</p>
        <div class="selected">
            <p>Hello World</p>
        </div>
        <hr />
    </body>
    <script>
        $("li.item-1").closest("ul").css("color", "green");
        $("p").parent(".selected").css("color", "red");
    </script>
</html>
```
### 4.3. 選擇兄弟元素
- `.siblings(selector)`：找到符合 `selector` 的所有兄弟元素。
- `.next(selector)`：找到符合 `selector` 的下一個兄弟元素。
- `.nextAll(selector)`：找到符合 `selector` 的所有後續兄弟元素。
- `.prev(selector)`：找到符合 `selector` 的前一個兄弟元素。
- `.prevAll(selector)`：找到符合 `selector` 的所有前面的兄弟元素。

## 5. jQuery DOM 篩選方法
- .eq(index)：選擇指定索引的元素。
- .first()：選擇第一個元素。`
- last()：選擇最後一個元素。`
- even()：選擇索引為偶數的元素（0、2、4...）。
- odd()：選擇索引為奇數的元素（1、3、5...）。
- is(selector)：檢查當前元素集合是否符合指定的選擇器條件。
```html
<input type="checkbox" id="check">
<script>
    var isFormParent = $("#check").parent().is("form");
    console.log(isFormParent); // 檢查父元素是否為 <form>
</script>
```
- not(selector)：從當前元素集合中排除指定的元素。
	- `$("li").not($("#notli")).css("color", "red"); // 排除 id="notli" 的項目，其他設為紅色`
- has(selector)：選擇包含指定子元素的元素。
	- `$("li").has("ul").css("color", "red"); // 選擇包含 <ul> 的項目並設為紅色`
- filter(selector)：從當前元素集合中篩選出符合指定條件的元素。
```html
<ul>
    <li>項目 1</li>
    <li>項目 2</li>
    <li>項目 3</li>
    <li>項目 4</li>
    <li>項目 5</li>
</ul>
<script>
    $("li").filter(":odd").css("color", "red"); // 選擇奇數索引項目並設為紅色
</script>
```
## 6. jQuery 事件處理
- on()：用於為元素綁定事件處理程序。你可以為同一元素綁定多個事件。
```js
// 語法
// $(selector).on(events, [selector], [data], handler);
// events：事件名稱（例如 `click` 或 `dblclick`）
// selector：選擇器
// data：要傳遞給事件處理程序的數據
// handler：當事件觸發時執行的函式

// 範例
$("button").on("click dblclick", function () {
    $("p").text("段行文字已被按下！");
});
```

- off()：用於移除指定的事件處理程序。如果未指定參數，則移除所有綁定的事件。
```js
// 語法
// $(selector).off(events, [selector], [handler]);

// 範例
$("button").off("click");
```

- ready()：是在 DOM 加載完成後執行指定的函式，通常用於初始化。
```js
$(document).ready(function () {
    $("p").text("DOM 已經載入完畢！");
});

// 或簡寫
$(function () {
    $("p").text("DOM 已經載入完畢！");
});
```

### 6.1. event物件
![upgit_20241102_1730525209.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241102_1730525209.png)
- 當我們要在事件處理程式中存取Event物件時，可以透過名稱為e的參數來加以傳遞。
- 且e必須是第一個參數。

```js
// 取得事件目標元素與事件類型
$("input").on("click", function (e) {
    $(this).after("<p>目標元素：" + e.target + "</p>")
           .after("<p>事件類型：" + e.type + "</p>");
});
```



## 7. jQuery 的 HTML 表單驗證
- 表單驗證 (Form Validation) 是用來檢查使用者在表單欄位輸入的資料是否正確，防止使用者輸入錯誤資料。
	- 忘記輸入資料
	- 資料格式不正確
	- 資料超出範圍
### 7.1. 使用 click 事件的表單驗證
- 當使用者按下 **"提交"** 按鈕後，檢查是否有任何必填欄位是空白。
- 若有空白欄位，則會自動將其框線標示為紅色，以提示使用者補充資料。
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>表單驗證示範</title>
        <style type="text/css">
            .error {
                border: 2px solid red;
            }
        </style>
        <script
            src="https://code.jquery.com/jquery-3.7.1.min.js"
            integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
            crossorigin="anonymous"
        ></script>
    </head>
    <body>
        <div class="content">
            <form action="#">
                姓名: <input type="text" id="name" /><br />
                電郵: <input type="text" id="email" /><br />
                <textarea rows="5" cols="25" id="comment"></textarea><br />
                <input type="submit" value="送出" />
            </form>
        </div>

        <script>
            // 驗證輸入框是否為空
            $(":submit").click(function (event) {
                event.preventDefault(); // 阻止表單提交
                $("input[type='text'], textarea").each(function () {
                    if ($(this).val().length == 0) {
                        $(this).addClass("error"); // 添加紅色邊框
                    } else {
                        $(this).removeClass("error"); // 移除紅色邊框
                    }
                });
            });

            // 當輸入框獲得焦點時移除紅色邊框
            $(":input").focus(function () {
                $(this).removeClass("error");
            });
        </script>
    </body>
</html>
```
### 7.2. 即時驗證欄位資料
- 當使用者離開 (blur) 某個輸入欄位時，立即檢查該欄位的輸入是否為空。
- 若欄位為空，則顯示紅色框線，並提示使用者補充資料。
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>即時驗證欄位資料</title>
    <style type="text/css">
        .error { border: 2px solid red; }
    </style>
    <script
            src="https://code.jquery.com/jquery-3.7.1.min.js"
            integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
            crossorigin="anonymous"
        ></script>
</head>
<body>
    <div class="content">
        <form action="#">
            姓名: <input type="text" id="name"/><br/>
            電郵: <input type="text" id="email"/><br/>
            <textarea rows="5" cols="25" id="comment"></textarea><br/>
            <input type="submit" value="送出"/>
        </form>
    </div>

    <script>
        $(':input').blur(function() {
            if($(this).val().length == 0) {
                $(this).addClass('error');
            }
        });
    </script>
</body>
</html>
```


## 8. Query 動畫與特效
### 8.1. 基本特效
- hide()：隱藏符合的元素
	- `$('#element').hide(600); // 600 毫秒內隱藏`
- show()：顯示符合的元素
	- `$('#element').show(600); // 600 毫秒內顯示`
-  toggle()：切換顯示/隱藏元素
	- `$('#element').toggle(); // 無參數切換顯示狀態`
	- `$('#element').toggle(600); // 600 毫秒內切換`

### 8.2. 淡入/淡出特效
- fadeIn()/fadeOut()：淡入/淡出特效顯示元素
	- `$('#element').fadeIn(400); // 400 毫秒內淡入顯示`
	- `$('#element').fadeOut(400); // 400 毫秒內淡出隱藏`
- fadeTo()：調整透明度
	- `$('#element').fadeTo(400, 0.5); // 400 毫秒內調整透明度到 50%`
- fadeToggle()：切換淡入/淡出特效
	- `$('#element').fadeToggle(400); // 400 毫秒內切換淡入/淡出`

### 8.3. 滑動特效
- slideDown()/slideUp()：滑動顯示/隱藏元素
	- `$('#element').slideDown(600); // 600 毫秒內由上往下滑動顯示`
	- `$('#element').slideUp(600); // 600 毫秒內由下往上滑動隱藏`
- slideToggle()：切換滑動顯示/隱藏
	- `$('#element').slideToggle(600); // 600 毫秒內切換滑動顯示/隱藏`
```html
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <!-- jQuery -->
        <script
            src="https://code.jquery.com/jquery-3.7.1.js"
            integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4="
            crossorigin="anonymous"
        ></script>
    </head>
    <body>
        <button id="hideBtn">隱藏</button>
        <button id="showBtn">顯示</button>
        <button id="toggleBtn">切換顯示</button>
        <button id="fadeInBtn">淡入顯示</button>
        <button id="fadeOutBtn">淡出隱藏</button>
        <button id="slideDownBtn">滑動顯示</button>
        <button id="slideUpBtn">滑動隱藏</button>
        <h1 id="element">Hello, jQuery!</h1>
    </body>
    <script>
        // 隱藏
        $("#hideBtn").on("click", function () {
            $("#element").hide(600);
        });

        // 顯示
        $("#showBtn").on("click", function () {
            $("#element").show(600);
        });

        // 切換顯示/隱藏
        $("#toggleBtn").on("click", function () {
            $("#element").toggle(600);
        });

        // 淡入顯示
        $("#fadeInBtn").on("click", function () {
            $("#element").fadeIn(600);
        });

        // 淡出隱藏
        $("#fadeOutBtn").on("click", function () {
            $("#element").fadeOut(600);
        });

        // 滑動顯示
        $("#slideDownBtn").on("click", function () {
            $("#element").slideDown(600);
        });

        // 滑動隱藏
        $("#slideUpBtn").on("click", function () {
            $("#element").slideUp(600);
        });
    </script>
</html>

```


## 9. AJAX
- load()：將伺服端的遠端文件使用AJAX方式載入
- getScript()：使用AJAX方式執行伺服端JavaScript程式檔案
- get()：使用HTTP GET方法送出AJAX請求和取得回應
- post()：使用HTTP POST方法送出AJAX請求和取得回應
- getJSON()：使用HTTP GET方法取得伺服端的JSON資料
	- 若伺服器回應的資料不是 JSON 格式，請求會失敗。
	- 簡化處理 JSON 格式的資料，不需要再手動 `JSON.parse()`。
- ajax()：使用XMLHttpRequest物件送出AJAX請求
	- 是jQuery 提供的 最通用、最靈活 的 AJAX 方法，允許你自訂各種請求參數 (如 HTTP 方法、資料類型、標頭、回應處理等)。
### 9.1. 在AJAX中談JSON
- 「JSON」的全名是(JavaScript Object Notation)，這是一種AJAX技術常用的資料交換格式,類似XML,事實上,JSON就是一個JavaScript物件的文字表示法。
- JSON 與 JavaScript 物件之間的轉換：
	- 將 JavaScript 物件轉換為 JSON 字串：`JSON.stringify()`
	- 將 JSON 字串轉換為 JavaScript 物件：`JSON.parse()`
```html
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <!-- jQuery -->
        <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
    </head>
    <body></body>
    <script>
        const person = {
            name: "吉伊卡哇",
            age: 25,
            email: "example@gmail.com",
            skills: ["HTML", "CSS", "JavaScript"],
        };

        // TODO: 將 JavaScript 物件轉為 JSON 字串
        const jsonString = JSON.stringify(person);
        console.log(jsonString);

        // 格式化輸出（增加縮排）
        const formattedJson = JSON.stringify(person, null, 4);
        console.log(formattedJson);

        // TODO: 將 JSON 字串轉為 JavaScript 物件
        console.log(person);
        // 訪問轉換後的物件屬性
        console.log(person.name); // "吉伊卡哇"
        console.log(person.skills); // ["HTML", "CSS", "JavaScript"]
    </script>
</html>
```
### 9.2. load()：將伺服端的遠端文件使用AJAX方式載入
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Load Example</title>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    </head>
    <body>
        <div id="pokemon-info">寶可夢資訊將載入這裡</div>
        <button id="load-btn">載入皮卡丘資料</button>

        <script>
            $("#load-btn").click(function () {
                $("#pokemon-info").load("https://pokeapi.co/api/v2/pokemon/pikachu", function (response, status, xhr) {
                    if (status === "error") {
                        $("#pokemon-info").text("無法載入資料");
                    } else {
                        $("#pokemon-info").text(response);
                    }
                });
            });
        </script>
    </body>
</html>
```
### 9.3. get()：使用HTTP GET方法送出AJAX請求和取得回應
- 取得寶可夢資料（例如皮卡丘），並在控制台中顯示名稱和重量。
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>GET Example</title>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    </head>
    <body>
        <button id="get-btn">取得皮卡丘資料</button>
        <div id="result"></div>
        <script>
            $("#get-btn").click(function () {
                $.get("https://pokeapi.co/api/v2/pokemon/pikachu", function (data) {
                    $("#result").html(`
                        <p>名稱: ${data.name}</p>
                        <p>重量: ${data.weight}</p>
                    `);
                    console.log("名稱:", data.name);
                    console.log("重量:", data.weight);
                });
            });
        </script>
    </body>
</html>
```
### 9.4. ajax()：使用XMLHttpRequest物件送出AJAX請求
- 支援 **GET**、**POST**、**PUT**、**DELETE** 等多種 HTTP 方法。
- 可以設定回應資料的類型，如 `json`、`xml`、`html`、`text`。
- 可以設定錯誤處理 (`error`) 及完成時的處理 (`complete`)。
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>AJAX Example</title>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    </head>
    <body>
        <button id="ajax-btn">取得寶可夢charmander的 AJAX 資料</button>
        <div id="ajax-result"></div>

        <script>
            $(document).ready(function () {
                $("#ajax-btn").click(function () {
                    $.ajax({
                        url: "https://pokeapi.co/api/v2/pokemon/charmander",
                        method: "GET",
                        dataType: "json",
                        success: function (data) {
                            $("#ajax-result").html(`名稱: ${data.name}, 高度: ${data.height}`);
                        },
                        error: function (xhr, status, error) {
                            console.error("錯誤:", error);
                            $("#ajax-result").text("無法取得資料，請稍後再試");
                        },
                    });
                });
            });
        </script>
    </body>
</html>
```
- AJAX：取的寶可挊API
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pokémon API Example</title>
        <!-- jQuery CDN -->
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    </head>
    <body>
        <h1>Pokémon Information</h1>
        <input type="text" id="pokemonName" placeholder="Enter Pokémon name" />
        <button id="fetchPokemon">Fetch Pokémon</button>

        <!-- Display Pokémon data -->
        <div id="pokemonInfo" style="display: none">
            <h2 id="name"></h2>
            <img id="sprite" alt="Pokémon Image" />
            <p>Type: <span id="type"></span></p>
            <p>Height: <span id="height"></span></p>
            <p>Weight: <span id="weight"></span></p>
        </div>

        <script>
            // Fetch Pokémon data when the button is clicked
            $(document).ready(function () {
                $("#fetchPokemon").on("click", function () {
                    const pokemonName = $("#pokemonName").val().toLowerCase();

                    // Call PokeAPI using jQuery's AJAX method
                    $.ajax({
                        url: `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
                        method: "GET",
                        success: function (data) {
                            // Update HTML with Pokémon data
                            $("#name").text(data.name);
                            $("#sprite").attr("src", data.sprites.front_default);
                            $("#type").text(data.types.map((typeInfo) => typeInfo.type.name).join(", "));
                            $("#height").text(data.height);
                            $("#weight").text(data.weight);
                            $("#pokemonInfo").show();
                        },
                        error: function () {
                            alert("Pokémon not found. Please try another name.");
                            $("#pokemonInfo").hide();
                        },
                    });
                });
            });
        </script>
    </body>
</html>

```


