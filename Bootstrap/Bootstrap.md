- Bootstrap原名Twitter Blueprint,由Twitter的兩位工程師所開發，目的是製作一套可以保持一致性的工具與框架(framework)，後來更名為Bootstrap,並釋出成為開放原始碼專案。
- Bootstrap是目前最受歡迎的HTML、CSS與JavaScript框架之一，用來開發響應式(responsive)、行動優先(mobile first)的網頁，使用者無須撰寫CSS或JavaScript程式碼，就可以設計出響應式網頁。
## 使用Bootstrap套件
### 第一種方式：下載Bootstrap編譯檔案進行使用。
- [Download · Bootstrap v5.3 (getbootstrap.com)](https://getbootstrap.com/docs/5.3/getting-started/download/)下載編譯好的檔案
- 在 HTML 中引入 Bootstrap
```html
<link rel="stylesheet" href="path/to/bootstrap.min.css">

<script src="path/to/bootstrap.bundle.min.js"></script>
```

### 第二種方式：透過CDN(Content Delivery Networks)
- 直接遷入官網提供的CDN
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </body>
</html>
```

## Bootstrap網格系統
- Bootstrap網格系統是透過橫向的row(列)和直向的column(行)來設計網頁版面。
- 它將網頁寬度平均分割為12等分，稱為12個column。
- 假設要使用兩個`<div>`元素製作寬度為1:1的雙欄版面，那麼這兩個`<div>`元素是位於相同的row，並分別占用6個column。
- 假設要使用兩個`<div>`元素製作寬度為2:1的雙欄版面，那麼這兩個`<div>`元素是位於相同的row，並分別占用8和4個column。


## 斷點(breakpoint)
- 【參考】[Breakpoints · Bootstrap v5.3 (getbootstrap.com)](https://getbootstrap.com/docs/5.3/layout/breakpoints/)
- 斷點的目標是行動優先與響應式設計，使用最少的樣式讓最小斷點能夠運作，然後逐漸調整樣式以適用於較大的裝置。

| 斷點                | 類別前置詞      | 可視區域的寬度  |
| ----------------- | ---------- | -------- |
| Extra small       |            | <576px   |
| Small             | sm         | ≥ 576px  |
| Medium            | md(手機)(預設) | ≥ 768px  |
| Large             | lg(一般電腦螢幕) | ≥ 992px  |
| Extra large       | xl         | ≥ 1200px |
| Extra extra large | xxl        | ≥ 1400px |

## 容器(container)
- 【參考】[Containers · Bootstrap v5.3 (getbootstrap.com)](https://getbootstrap.com/docs/5.3/layout/containers/)
- 是Bootstrap最基本的版面配置元素，可以讓網格系統的列與欄保持適當的邊界和留白。
- `.container`, which sets a `max-width` at each responsive breakpoint
- `.container-{breakpoint}`, which is `width: 100%` until the specified breakpoint
-  `.container-fluid`, which is `width: 100%` at all breakpoints
![upgit_20241024_1729739486.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241024_1729739486.png)

## grid
- Bootstrap提供一個網格系統(gird system)，讓使用者藉此開發適應不同裝置的網頁，達到響應式網頁設計的目的。
- Bootstrap網格系統是透過橫向的row(列)和直向的column(行)來設計網頁版面。
- 它將網頁寬度平均分割為12等分，稱為12個column。
![upgit_20241023_1729675830.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241023_1729675830.png)

- 假設要使用兩個div元素製作寬度為1:1的雙欄版面，那麼這兩個div元素是位於相同的row，並分別占用6個column。
![upgit_20241023_1729675943.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241023_1729675943.png)

- 假設要使用兩個div元素製作寬度為2:1的雙欄版面，那麼這兩個div元素是位於相同的row，並分別占用8個與4個column。
![upgit_20241023_1729675948.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241023_1729675948.png)

### 使用原則
- Bootstrap支援數種響應式斷點，斷點是基於媒體查詢的最小寬度，我們可以透過斷點控制容器(container)和行(column)的大小與行為。
- 內容是放在column中，而column則是放在row中。
- 每個row最多包含12個column，超過的會顯示在下一個row。
- 為了有適當的對齊與留白，row必須放在.container、.container-fluid或.container-{breakpoint}類別的容器中。
- 使用.row、.col-* 、.col-sm-* 、.col-md-* 、.col-lg-* 、.col-xl -* 、.col-xxl -* 等預先定義的網格類別來設計版面。

| .col - | .col-sm- | .col-md- | .col-lg- | .col-xl- | .col-xxl- |
| ------ | -------- | -------- | -------- | -------- | --------- |
| 100%   | 540px    | 720px    | 960px    | 1140px   | 1320px    |
- <576px的超小螢幕裝置(例如手機)使用.col-1 ~. col-12類別。
- ≥576px的小螢幕裝置(例如手機)使用.col-sm-1 ~. col-sm-12類別。
- ≥768px的中螢幕裝置(例如平板電腦)使用.col-md-1 ~. col-md-12類別。
- ≥992px的大螢幕裝置(例如桌機)使用.col-lg-1 ~. col-lg-12類別。

- 範例
![upgit_20241023_1729681321.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241023_1729681321.png)

![upgit_20241023_1729681349.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241023_1729681349.png)
	

## columns
### 欄的水平對其方式
- 我們可以使用.justify-content -* 類別設定欄的水平對齊方式
![upgit_20241023_1729683924.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241023_1729683924.png)

![upgit_20241023_1729683938.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241023_1729683938.png)


### 列的垂直對其方式
- 我們可以使用.align-items -* 類別設定列的垂直對齊方式。
![upgit_20241023_1729684291.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241023_1729684291.png)

![upgit_20241023_1729684306.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241023_1729684306.png)


### column位移
- 有時在設計網頁版面時，可能會保留一些空白，不見得12個column都會用到，此時可以使用.offset -* 類別來調整column的位移。
![upgit_20241023_1729684604.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241023_1729684604.png)

![upgit_20241023_1729684619.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241023_1729684619.png)


### gutters、padding、margine
- Bootstrap 的 **gutters** 是欄位之間的間距，主要透過欄位的水平（`gx-*`）和垂直（`gy-*`）間距進行控制。
- 預設為 1.5rem (24px)，並可依據響應式需求調整。你可以使用 `.g-*` 同時設定水平與垂直的間距。
- 要完全移除 gutters，可以使用 `.g-0`，使欄位無縫對接。


## 排版
### 標題
- 針對標題本身的`<h1>`到`<h6>`，也可以下display-1(1到6)，去設定大小。
### 行內文字
- 針對`<mark>`、`<small>`、`<u>`、`<s>`等元素，BS5提供.mark、.small、.text-decoration-underline、.text-decoration-line作為對應調整。
- Text-truncate：文字長度過多改成「…」
- 針對段落的字體，可以用fs調整。
### 清單
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Bootstrap demo</title>
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
            crossorigin="anonymous"
        />
    </head>

    <body>
        <ul>
            <li>item01</li>
            <li>item02</li>
        </ul>
        <!-- 前面小點清除 -->
        <ul class="list-unstyled">
            <li>item01</li>
            <li>item02</li>
        </ul>
        <!-- 排列inline -->
        <ul class="list-inline">
            <li class="list-inline-item">item01</li>
            <li class="list-inline-item">item02</li>
            <!-- 沒下class，就會排到下一行 -->
            <li>item03</li>
        </ul>
    </body>
    <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"
    ></script>
</html>
```

## 文字
- 文字樣式：
![upgit_20241106_1730875052.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241106_1730875052.png)

- 靠O對齊：text-start、text-center、text-left。
- 是否要換行：text-wrap、text-nowrap。
- 文字大小寫轉換：text-lowercase、text-uppercase、text-capitalize
- 去掉文字裝飾：.text-decoration-none
- 加上底線：text-decoration-underline
- 加上刪除線：text-decoration-line-through
## 色彩
![upgit_20241106_1730874803.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241106_1730874803.png)

## 背景
![upgit_20241106_1730874880.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241106_1730874880.png)

## Image
- 【參考】[Images · Bootstrap v5.3 (getbootstrap.com)](https://getbootstrap.com/docs/5.3/content/images/)
- 響應式圖片(Responsive images)：`class="img-fluid"`，相當於`max-width: 100%; height: auto;`。
- Image thumbnails：相當於給圖片一個1px的邊框。
![upgit_20241023_1729693691.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241023_1729693691.png)
- 文繞圖效果
![upgit_20241023_1729693944.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241023_1729693944.png)

![upgit_20241023_1729693927.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/10/upgit_20241023_1729693927.png)

## 框線
- 設定框線位置
![upgit_20241106_1730874310.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241106_1730874310.png)
- 設定框線粗度：border-1(1到5)
- 設定框線透明度：border-opacity-10(10、25、50、75)
- 設定框線原角：
	- round-0(0到5)
	- round-pill：橢圓形
	- round-circle：圓形
- 設定框線色彩
![upgit_20241106_1730874457.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241106_1730874457.png)


## 超連結
- 設定超連結顏色：link-underline-顏色
- 設定超連結透明度
![upgit_20241106_1730875586.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241106_1730875586.png)


## 間距(spacing)
- 通用格式為 `{property}{sides}-{size}`。
- 屬性 (property)
	- `m`: 邊界 (margin)。
	- `p`: 留白 (padding)。
- 側邊 (sides)
	- `t`: 上邊界或留白 (top)。
	- `b`: 下邊界或留白 (bottom)。
	- `s`: 左邊界或留白 (start)。
	- `e`: 右邊界或留白 (end)。
	- `x`: 左右邊界或左右留白。
	- `y`: 上下邊界或上下留白。
	- `blank`: 四周邊界或四周留白。
- 大小：0-5、auto

## 長寬百分比
- 長度百分比：h-25(25、50、75、100、auto)。
- 寬度百分比：w-25(25、50、75、100、auto)。

## 垂直對齊
![upgit_20241106_1730876145.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241106_1730876145.png)


## 表單(form)
- 在form裡面使用labal時，一定要加上class=form-label。
- 輸入欄(input、textarea、select)要加上class=form-control。
- 表單如果有說明文字，要加上class=form-text。
![upgit_20241106_1730877934.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241106_1730877934.png)

- 如果要在input前後面加上span，要加上class="input-group"
![upgit_20241106_1730878015.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241106_1730878015.png)

- 針對select：要加上class="form-select"
![upgit_20241106_1730878086.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241106_1730878086.png)

- 針對checkbox、radio：
	- 最外面的div要放class="form-check"
	- 勾選欄位；class="form-check-input"
	- 文字標籤：class="form-check-label"
