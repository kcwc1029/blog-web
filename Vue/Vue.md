## 1. Vue.js 介紹

-   Vue.js 是基於 Angular 和 React 的基礎上開發的框架，結合了這兩者的優勢，並保留了其獨特的特性。
-   它在前端框架中具有市場佔有率，且逐漸受到更多開發者的認可。
-   使用 Vue.js 的開發者數量逐年增長，並且在用戶滿意度上得分較高。

### 1.1. Vue.js 是什麼

-   Vue.js 是一款漸進式框架，主要應用於構建用戶介面的視圖層。
-   它的核心概念圍繞著響應式資料綁定和組件系統，使得開發者可以靈活地擴展應用。
-   Vue.js 支持 MVVM 模式，透過資料綁定和 DOM 操作來實現動態的網頁內容。

### 1.2. MVC 模式介紹

-   MVC 模式包括模型(Model)、視圖(View)、控制器(Controller)三個部分。
-   Model 負責資料邏輯，View 負責顯示，Controller 負責處理用戶的輸入並進行相應的資料處理。
-   MVC 的優點在於將業務邏輯與介面分離，便於維護和擴展。

### 1.3. MVP 模式介紹

-   MVP 模式中的 Presenter 負責管理業務邏輯，而 View 只負責顯示。
-   在該模式中，View 和 Model 是完全解耦的，便於進行測試和維護。
-   MVP 模式適合於更複雜的應用，特別是需要頻繁更新視圖的情況。

### 1.4. MVVM 模式介紹

-   MVVM 是 MVC 的進階版，分離了視圖(View)和業務邏輯(Model)。
-   引入了 ViewModel 層，用於處理業務邏輯和 UI 間的資料綁定。
-   MVVM 適合於需要雙向資料綁定的應用場景，並引入了 WPF 等技術的支援。
    ![upgit_20241106_1730879598.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241106_1730879598.png)

### 1.5. Vue.js 與 React 的比較

-   優勢
    1.  使用虛擬 DOM。
    2.  提供響應式和元件化的視圖。
    3.  核心簡單，便於快速上手。
-   缺點
    1.  Vue.js 的社區生態系統相較 React 較小。
    2.  在 HTML 和 CSS 上的支援方式不同，Vue.js 使用範本語法，而 React 使用 JSX 語法。
-   區別
    -   React 注重於單一方向的資料流，而 Vue.js 支持雙向資料綁定。
    -   React 更傾向於使用外部工具，Vue.js 則具有內建 CLI 支援。

## 2. 不使用 vue 建立網頁

-   建立一個可以動態增加項目的 to do list.
-   [without_vue.html](./without_vue.html)

## 3. 使用 vue 建立網頁

-   更改為 vue 後
-   [with_vue.html](./with_vue.html)

## 4. 建立第一個 vue

-   這邊引入 vue 跟 bootstrap5 的 CDN
-   mount：將實體掛載到 HTML 的物件當中。
-   [first_vue.html](./first_vue.html)

## 5. 文字綁定(單向)

-   單向綁定是 Vue 中的一種簡單樣板語法，用於將資料渲染到 HTML。
-   資料改變時，頁面會自動更新，但頁面上的內容不會改變資料。

### 5.1. 使用 mustache 標籤

-   是一種樣板與法。
    ![upgit_20241106_1730880069.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241106_1730880069.png)

### 5.2. v-text

![upgit_20241106_1730880329.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241106_1730880329.png)

### 5.3. v-html

![upgit_20241106_1730880830.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241106_1730880830.png)

## 6. 屬性綁定(單向) v-bind

-   v-bind 指令用於將 Vue 中的響應式數據綁定到 HTML 標籤的屬性上。
-   v-bind: 可以縮寫為 :提高代碼可讀性和書寫效率。
-   [bind_attribute.html](./bind_attribute.html)

## 7. mathods、computed、watch 屬性

### 7.1. mathods 屬性

-   methods 是 Vue 中用於定義方法的屬性。
-   適合處理觸發性或事件驅動的操作，例如按鈕點擊事件或表單提交。
-   方法每次呼叫時都會執行，不會自動快取結果。
-   需要對一些計算或事件進行即時處理時，可以使用 methods。
-   [method_Calculate_BMI.html](./method_Calculate_BMI.html)

### 7.2. computed 屬性

-   computed 是計算屬性，適合處理基於現有資料的動態計算邏輯。
-   當依賴的數據發生變化時，計算屬性會重新計算。
-   快取功能：如果依賴的數據沒有變化，計算屬性會直接返回快取的結果，而不重新執行。
-   [computed_Calculate_BMI.html](./computed_Calculate_BMI.html)

### 7.3. watch 屬性

-   watch 是 Vue 中用於監聽數據變化的屬性。
-   當指定的數據發生變化時，自動執行對應的回調函數。
-   通過 watch 監聽 data 或 computed 中的數據。
-   監聽器會接收兩個參數：新值 (newValue)與新值 (newValue)
-   watch vs computed
    -   computed 是為了處理資料變化後的視圖更新，會快取結果。
    -   watch 是為了執行額外的邏輯或副作用。
-   [watch_Calculate_BMI.html](./watch_Calculate_BMI.html)

## 8. v-on 事件處理

-   v-on 是 Vue 中用於監聽事件的指令，可以綁定 DOM 元素的事件。
-   v-on 可以縮寫為 @。
-   支持多種事件：如 click、input、submit 等。
-   事件處理器：
    -   綁定的函數會接收一個 event 物件作為參數。
    -   可直接使用簡寫語法，增強代碼可讀性。
-   [v-on_button_count](./v-on_button_count.html)
-   [v-on_Increase_Decreas_num](./v-on_Increase_Decreas_num.html)
-   [v-on_Synchronized_Display.html](./v-on_Synchronized_Display.html)

## 9. v-model 雙向綁定(表單)

-   v-model 是 Vue 提供的雙向資料綁定指令。
-   用於表單元素（input、radio、checkbox、textarea、select）與資料的雙向同步。
-   v-model 不需要寫事件處理器和資料更新邏輯，自動完成雙向同步。
-   當使用者在表單元素中輸入時，資料會自動更新。
-   資料更新後，視圖也會自動反映新的數據。
-   [v-model_form.html](./v-model_form.html)

### 9.1. V-model & 修飾字(modifier)

-   lazy：
    -   v-model 指令預設會監聽文字方塊的 input 事件，只要使用者一敲擊鍵盤就會觸發 input 事件。
    -   加上 lazy 後，改成使用者按下【enter】才會顯示。
-   trim：去除前後空白字元。
-   number：將輸入資料視為數值。
-   [v-model_Modifiers.html](./v-model_Modifiers.html)

## 10.  Event Modifier

-   在 Vue 中，事件修飾符 用來處理事件的默認行為，讓我們更簡潔地控制事件。例如：
    -   阻止事件的默認行為：如防止 `<form>` 提交時重新加載網頁。
    -   只處理特定事件：如按下 Enter 鍵才執行事件。
-   v-on:submit.prevent=“func”：阻止事件的默認行為，例如表單提交。
-   v-on:click.stop=“func”：阻止事件冒泡（向上傳遞）。
-   v-on:click.once=“func”：事件只會觸發一次。
-   v-on:click.capture=“func”：在捕獲階段觸發事件，而非冒泡階段。
-   v-on:click.self=“func”：只在自身元素上觸發事件。
-   v-on:keyup.enter=“func”：監聽鍵盤按下 Enter 鍵。

-   [Event_Modifier_Enter.html](./Event_Modifier_Enter.html)
-   [Event_Modifier_Prevent.html](./Event_Modifier_Prevent.html)

## 11. v-once：鎖定內容

-   v-once 指令讓 Vue 只渲染一次元素或組件，後續的數據更新不會再影響該元素的內容。
-   適合用於靜態內容或不需要隨數據變動的部分，減少渲染開銷，提高性能。
-   [v-once.html](./v-once.html)

## 12. CSS 綁定

-   綁定 class：`:class={"class名稱", "vue屬性"}`
-   綁定 style：`:syle={"css屬性", "vue屬性"}`
    ![upgit_20241107_1730958088.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241107_1730958088.png)

-   [vue_css.html](./vue_css.html)

## 13. v-if、v-else、v-else 條件式渲染

![upgit_20241107_1730960487.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241107_1730960487.png)

-   [v-if.html](./v-if.html)

### 13.1. v-show

-   他是將元素增加 sttle="display:none"，仍有出現在 html，但並不會顯示出來。
-   [v-show.html](./v-show.html)

## 14. v-for 清單渲染

-   v-for 是 Vue 中用於渲染清單的指令，根據陣列或物件的內容來動態生成 HTML 元素。
-   支援遍歷：陣列 (Array)、物件 (Object)、數字範圍 (Range)
-   item：陣列中每個元素的值。
-   index：對應元素的索引。
-   :key：提供唯一標識，提升渲染效能(建議對象為 唯一的 ID 或索引值)。

![upgit_20241107_1730960976.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241107_1730960976.png)

-   [v-for.html](./v-for.html)

## 15. ref

-   ref 是 Vue 3 提供的一種 API，用於創建響應式變數或引用 DOM 元素。
-   它可以追蹤變數的變化，並觸發視圖更新。
-   操作方式：

    -   響應式變數：通過 .value 訪問或修改其值。
    -   DOM 元素引用：通過 ref 綁定 DOM 元素，並在程式中直接操作。

-   ref 的使用場景

    -   追蹤數據變化：使用 ref 定義變數，隨著變數變化，模板自動更新。
    -   操作 DOM 元素：通過 ref 指向 DOM 元素，在程式中讀取或修改 DOM 的內容。

-   第 1.1 種
    ![upgit_20241107_1730967671.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241107_1730967671.png)

-   第 1.2 種：利用按鈕的方式去顯示值
    ![upgit_20241107_1730968090.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241107_1730968090.png)

-   第 2 種：利用 ref
    ![upgit_20241107_1730969074.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241107_1730969074.png)

-   [ref.html](./ref.html)

## 16. 虛擬 DOM

-   虛擬 DOM 是用 JavaScript 對真實 DOM 的一種模擬表示，形成一棵樹狀結構。
-   Vue 會先更新虛擬 DOM，然後計算新舊虛擬 DOM 的差異，將最少的變更應用到真實 DOM 中。
-   可以把虛擬 DOM 想像成頁面的「快照」。
-   每次數據變化時，Vue 會生成新的快照(虛擬 DOM)，並與之前的快照進行對比，這樣 Vue 就能知道需要更新哪些部分，而不必重新渲染整個頁面。
-   目標：提升渲染效能，減少直接操作真實 DOM 的開銷。
-   為什麼要使用虛擬 DOM
    -   性能優化：直接操作真實 DOM 非常耗時，虛擬 DOM 減少不必要的操作。
    -   高效渲染：虛擬 DOM 只更新變更的部分，而不是整體重繪。
    -   跨瀏覽器一致性：Vue 自動處理各種瀏覽器兼容性問題。

## 17. vue 的生命週期

-   在 Vue 中，生命週期（Lifecycle）是指 Vue 元件從創建到銷毀過程中的一系列階段。Vue 提供了生命週期鉤子函數（hook functions），允許我們在元件的不同階段執行特定的代碼。

![upgit_20241215_1734256732.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241215_1734256732.png)

### 17.1. Vue 生命週期的主要階段

-   Vue 的生命週期可以分為以下四個主要階段：
    -   創建階段（Creation）
    -   掛載階段（Mounting）
    -   更新階段（Updating）
    -   銷毀階段（Unmounting）

### 17.2. 創建階段（Creation）

在這個階段，Vue 會初始化元件的數據、事件和觀察等，但此時尚未將元件掛載到 DOM 上，頁面上看不到元件的內容。

-   `beforeCreate`：元件實例剛剛創建，數據和事件還未初始化，無法使用 `data` 和 `methods`。通常不常使用。

```javascript
beforeCreate() {
  console.log("元件正在創建（beforeCreate）");
}
```

-   `created`：元件實例已創建，`data`、`methods` 都已初始化，可以進行初始數據的設置或執行異步操作（如 AJAX 請求）。

```javascript
created() {
  console.log("元件已創建（created）");
}
```

---

### 17.3. 掛載階段（Mounting）

在這個階段，Vue 會將模板渲染為虛擬 DOM，然後將虛擬 DOM 挂載到真實 DOM 上，讓頁面顯示元件的內容。

-   `beforeMount`：在掛載到 DOM 之前調用，虛擬 DOM 已經創建，尚未插入到頁面中。此階段可以用來查看虛擬 DOM。

    ```javascript
    beforeMount() {
      console.log("元件即將掛載到 DOM（beforeMount）");
    }
    ```

-   `mounted`：元件已掛載到 DOM，真實 DOM 已渲染完成。可以在此階段進行 DOM 操作，比如獲取元素尺寸、設置監聽器等。

    ```javascript
    mounted() {
      console.log("元件已掛載到 DOM（mounted）");
    }
    ```

---

### 17.4. 更新階段（Updating）

當元件的 `data` 或 `props` 發生變化時，Vue 會進行重新渲染，此時元件會進入更新階段。

-   `beforeUpdate`：當數據發生變化，重新渲染之前調用。此時虛擬 DOM 已更新，但尚未同步到真實 DOM。

    ```javascript
    beforeUpdate() {
      console.log("元件數據更新前（beforeUpdate）");
    }
    ```

-   `updated`：重新渲染後調用，虛擬 DOM 已與真實 DOM 同步。通常用於執行 DOM 操作或依賴最新數據的操作。

    ```javascript
    updated() {
      console.log("元件數據更新後（updated）");
    }
    ```

---

### 17.5. 銷毀階段（Unmounting）

當元件從 DOM 中移除或其生命周期結束時，它會進入銷毀階段。

-   `beforeUnmount`：元件銷毀之前調用。可以用來清除定時器或事件監聽器等資源，避免內存洩漏。

    ```javascript
    beforeUnmount() {
      console.log("元件即將被銷毀（beforeUnmount）");
    }
    ```

-   `unmounted`：元件已完全銷毀，與 DOM 的關聯已斷開。此時所有事件監聽器和數據綁定已解除。

    ```javascript
    unmounted() {
      console.log("元件已銷毀（unmounted）");
    }
    ```

## 18. component

### 18.1. 沒有 component 的問題

![upgit_20241215_1734270697.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241215_1734270697.png)

-   [without_component.html](./show%20component/without_component.html)

### 18.2. 使用 component 後

![upgit_20241215_1734270715.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241215_1734270715.png)

-   [with_component.html](./show%20component/with_component.html)

## 19. 建立 vue 專案：vue CLI 跟 Vite

-   Vue CLI 的全名是 Vue.js Command-Line Interface,直譯為「Vue 專案指令介面」
-   透過終端機作為介面,提供開發者常見的配置選擇,協助開發者快速建立一個「立即可用」的 Vue 專案,
-   省去手動建立資料夾架構、設定各項配置與引入常用套件的時間,讓開發者可以專注在專案的開發。
-   Vue CLI 基於 Webpack 和 Webpack Dev Server 進行打包和執行本地開發伺服器,而 Webpack 的策略是「先打包、後啟動伺服器」,無論今天是在開發階段還是正式階段,一律先打包專案,根據打包完成的專案來啟動伺服器,所以在專案資源、程式碼越來越多的時候,可以明顯發現「伺服器啟動」和「更新速度」變得越來越慢。

![upgit_20241221_1734756230.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241221_1734756230.png)

-   既然已經有了 Vue CLI,那為什麼還要再推出 Vite?接下來要了解 Vite 的誕生解決了什麼問題。
-   Vite 是法文「快速」的意思,而它被開發的主要目的就是為了解決在 Vue CLI 上「伺服器啟動慢」和「更新速度慢」的問題。
-   Vite 則是在開發階段捨棄打包,直接啟動伺服器,利用原生 ES Module 的特性,在每次瀏覽器請求檔案時,按照需求即時進行編譯。如此一來,就可以大幅提升啟動和更新的速度,當然也讓使用者體驗變得更好(而在正式環境下則基於 Rollup 進行打包,而 Rollup 同樣是利用原生 ES Module 進行打包)。

![upgit_20241221_1734756222.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241221_1734756222.png)

### 19.1. Vue CLI 和 Vite 所涵蓋的主要工作如下：

-   建立基礎專案架構。
-   整合官方工具鏈(例如:狀態管理器 Pinia、路由管理 Vue Router …… )。
-   打包專案。
-   在本地啟動伺服器環境進行開發。

### 19.2. 實作安裝：必裝 nodejs

```
node -v
npm -v
```

### 19.3. 實作安裝：使用 vue CLI 安裝 vue 專案

```
npm install -g @vue/cli
vue --version
```

-   常見問題

```
// vue : 因為這個系統上已停用指令碼執行，所以無法載入 C:\Users\33313\AppData\Roaming\npm\vue.ps1 檔案。

# 解決方法
以管理員身份執行PowerShell，輸入以下指令檢查目前的執行政策：
Get-ExecutionPolicy
// 通常會顯示 `Restricted`，表示不允許執行任何腳本。

# 更改執行政策
// 輸入以下指令，將執行政策更改為 `RemoteSigned`（允許本地腳本執行，但遠端下載的腳本需要簽署）
Set-ExecutionPolicy RemoteSigned
```

-   創建新 Vue 專案

```
vue create my-vue-project
cd my-vue-project // 切換到專案目錄(不能大寫)

// 運行開發伺服器
npm run serve // 這會啟動開發伺服器，通常會在 `http://localhost:8080` 上運行。
```

![upgit_20241108_1731044252.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241108_1731044252.png)

### 19.4. 實作安裝：使用 vite 安裝 vue 專案

```
npm init vue@latest // 這邊會叫你輸入專案名稱
cd vue-project-build-vite
npm install
npm run dev
```

![upgit_20241221_1734756450.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241221_1734756450.png)
![upgit_20241221_1734756016.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241221_1734756016.png)

### 19.5. vscode 可以安裝的套件

![upgit_20241108_1731044557.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241108_1731044557.png)
![upgit_20241108_1731044582.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241108_1731044582.png)

-   Vue Devtools - [Vue.js devtools - Chrome 線上應用程式商店](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?pli=1)
    ![upgit_20241118_1731929845.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241118_1731929845.png)

### 19.6. 專案架構

-   assets:放靜態資源,例如:圖片、CSS 樣式檔案等等。
-   components:放元件檔。
-   views:放路由元件(通常為畫面/頁面)。
-   stores:與狀態管理器(例如:Pinia)相關的檔案。
-   router:與路由管理(例如:Vue Router)相關的檔案。

![upgit_20241221_1734757770.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241221_1734757770.png)

![upgit_20241108_1731054583.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241108_1731054583.png)

### 19.7. 在 vue 引入 bootstrap

-   npm 安裝：`npm install bootstrap`
-   在 main.js 引入

```js
// TODO: bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
```

![upgit_20241108_1731056383.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241108_1731056383.png)

![upgit_20241108_1731056404.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241108_1731056404.png)

## 20. 增加元件(component)

-   setup 函數是每個組件的核心入口：setup 提供一個簡單、乾淨的方式來組織和管理資料流。
-   我們可以用`<script setup>`這個語法糖，但也別忘了 setup 本身是一個組件

### 20.1. setup 組件的參數

-   props：父層傳遞下來的狀態或方法
-   context：包含以下四個屬性：
    -   attrs：父層傳遞的屬性（類似 HTML 元素的屬性）。
    -   slots：父層傳遞的 HTML 片段（插槽內容）。
    -   emit：子組件用來向父層觸發事件的方法。
    -   expose：讓子組件暴露方法或狀態給父層。
-   父層可以傳遞 props、attrs、slots 給子元件，而子元件可以透過 emit 發出訊號，或是透過 expose 暴露想讓父層取得的狀態或方法。

### 20.2. provide 和 inject 的功能

-   用於跨層級傳遞數據。
-   解決 Prop Drilling（需要層層傳遞 props）的問題。
-   父層組件可以使用 provide 提供數據，子孫組件使用 inject 獲取數據。
-   適用於 Plugin 或全局狀態管理：可以在整個應用中共享狀態或屬性。

### 20.3. 實作一個 component

![upgit_20241108_1731057088.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241108_1731057088.png)

![upgit_20241221_1734760146.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241221_1734760146.png)

-   [vue-project-compoment-friends]("./vue-project-compoment-friends/src/main.js")

## 21. Global vs Local Components

-   全局
    ![upgit_20241112_1731390517.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241112_1731390517.png)
-   也可以把它放到 local => 把 TheHeader.vue 放到 App.vue

![upgit_20241112_1731390936.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241112_1731390936.png)

## 22. scoped style

-   在 Vue 中，彼此的`<style>`標籤的屬性是會互相影響的。
-   `scoped` 是一個用於 `<style>` 標籤的屬性，可以讓樣式只應用於當前組件，而不會影響到其他組件的樣式。這有助於防止樣式衝突，保持專案的模組化和可維護性。
    ![upgit_20241112_1731391986.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241112_1731391986.png)

## 23. props (property 的縮寫)

![upgit_20241221_1734764731.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241221_1734764731.png)

-   他是單向數據流(父元件=>子元件)
-   在父層引用元件時,我們可以透過 v-bind 傳遞「props」和「attribute」給元件,「props」需要在元件中一一宣告,而其餘沒有被宣告為 props 的都會被歸類在 attribute。
-   支援的 prop 值：String、Number、Boolean、Array、Object、Date、Function、Symbol

-   [vue-project-props]("./vue-project-props/src/main.js")

## 24. emit

![upgit_20241221_1734768139.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241221_1734768139.png)

-   他是單向數據流(子元件=>父元件)
-   [vue-project-emit]("./vue-project-emit/src/main.js")

## 25. slot

-   主要是用來傳遞 HTML
-   可以視為比 component，更小的單位
-   [vue-project-slot]("./vue-project-slot/src/main.js")

![upgit_20241221_1734770626.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241221_1734770626.png)

## 26. provide 和 inject(雙向傳遞)

![upgit_20241221_1734772932.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241221_1734772932.png)

-   在父組件與深層子組件之間共享資料。
-   避免多層組件層層傳遞 props。
-   讓子組件能直接使用父組件的共享資料或方法。
-   [vue-project-provide-inject]("./vue-project-provide-inject/src/main.js")

## 27. Component 動態元件

-   用途
    -   切換視圖（例如標籤頁）
    -   在多步驟導覽中顯示不同內容
-   [vue-project-dynamic-components]("./vue-project-dynamic-components/src/main.js")

## 28. Teleport (Vue3)

-   Teleport 是一個內建元件，允許將子元件的內容傳送到應用程式的 DOM 節點中，而不被限制在父組件的作用範圍內。
-   應用場景：
    -   彈出視窗 (Modal)：通常需要顯示在視窗的最上層，不受父元素的 CSS 限制。
    -   通知 (Notification) 和 提示框 (Tooltip)：需要獨立於父層結構，避免 z-index 或定位問題。
    -   全螢幕覆蓋層：例如遮罩背景（Backdrop）。
-   [vue-project-teleport]("./vue-project-teleport/src/main.js")

![upgit_20241221_1734783073.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241221_1734783073.png)

![upgit_20241221_1734784125.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241221_1734784125.png)

## 29. 表單

-   [vue-project-form]("./vue-project-form/src/main.js")

## 30. 發送 HTTP 請求

-   使用 JSONPlaceholder 作為 REST API 操作流程。
-   [vue-project-form]("./vue-project-form/src/main.js")

### 30.1. 掛載元件時載入數據

-   先查看 vue 元件的生命週期

![upgit_20241113_1731484737.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241113_1731484737.png)
![upgit_20241221_1734790390.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241221_1734790390.png)

### 30.2. loading 動畫

-   其實就是設定一個 boolen，在適當時間跳 true/false。在搭配`<p v-if="...">`

![upgit_20241113_1731486131.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241113_1731486131.png)

## 31. vue router

-   安裝：`npm install vue-router@4`
-   傳統的網站型態模式多為 Multi-Page Appolication(多頁式應用程式)
-   router 的內容切換由伺服器來決定
-   伺服器會根據網頁的 URL 路徑,回傳對應的 html 檔案給瀏覽器。

![upgit_20241221_1734790770.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241221_1734790770.png)

-   而 Single-Page Application ( SPA )指的是整個網站只有一個 html 檔案
-   不論使用者是進入https://example.com或https://example.com/about,伺服器所回傳的都是同一份index.html

![upgit_20241221_1734790834.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241221_1734790834.png)

### 31.1. 兩種歷史模式

-   呼叫 createRouter 建立 router 的時候,需要在 history 屬性指定歷史模式。
-   目前 Vue Router 4 上提供的歷史模式有兩種:Hash 模式和 HTML5 模式。
    ![upgit_20241221_1734792336.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241221_1734792336.png)

-   差異：
    ![upgit_20241221_1734792360.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241221_1734792360.png)

#### 31.1.1. Hash 模式

-   透過 `createWebHashHistory` 建立。
-   路由中會有 `#` 符號，參數或 Query 都會放在 `#` 後。
-   避免刷新時出現 `404 Not Found` 錯誤。
-   符合 SPA 的需求，只有一份 `index.html` 作為入口。
-   但 URL 中的 `#` 符號對 SEO 不友好，影響搜尋引擎排名。

#### 31.1.2. HTML5 模式 / History 模式(目前使用方式)

-   透過 `createWebHistory` 建立。
-   基於 HTML5 的 History API，操作瀏覽器的 `history` 物件（新增、修改、切換瀏覽記錄）。
-   可以在不向後端發送請求的情況下改變頁面的 URL。
-   URL 更加「順眼」，結構符合傳統網站。
-   不會出現多餘的 `#` 符號，SEO 友好。
-   需要伺服器配置支援，避免刷新時出現 `404 Not Found`。
-   必須確保伺服器將所有路由指向 `index.html`。

## vue router

![upgit_20241222_1734852833.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241222_1734852833.png)

-   [vue-project-router-basic]("./vue-project-router-basic/src/main.js")

### nav-link

![upgit_20241222_1734853630.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241222_1734853630.png)

### 設定 nav-link 點選後的 CSS

-   在 NavPage.vue 做好 CSS
-   在 main.js 中設定

![upgit_20241222_1734854853.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241222_1734854853.png)

### 內部 button 去切換 router

![upgit_20241222_1734855608.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241222_1734855608.png)

### 重新導向&404 Not Found

![upgit_20241222_1734857721.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241222_1734857721.png)

## router 傳資料

### 路由參數(params)

![upgit_20241222_1734859166.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241222_1734859166.png)

![upgit_20241222_1734859174.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241222_1734859174.png)

### 使用查詢參數 (query)

![upgit_20241222_1734860232.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241222_1734860232.png)

![upgit_20241222_1734860241.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241222_1734860241.png)

### 將 param 視為 props

![upgit_20241222_1734860857.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241222_1734860857.png)

## Pinia

-   Pinia 是一個輕量級且現代的狀態管理庫
-   Pinia 是 Vue 團隊推薦的替代方案，因其擁有更簡單的 API、更好的開發體驗以及與 Vue 3 的更緊密整合。
-   造成管理上的困擾的時候,就可以考慮使用狀態管理器。
    -   當專案有多個元件,依賴同一個共用狀態。
    -   當專案有多個元件的操作會改動到同一個狀態。

### 安裝方式

-   安裝套件`npm install pinia`
-   在 main.js 引入

![upgit_20241222_1734862747.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/12/upgit_20241222_1734862747.png)

### 34.1. 建立 pinia

![upgit_20241115_1731670961.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241115_1731670961.png)

### 34.2. Store

-   Store 用於集中管理 Vue.js 應用的全域狀態，適合需要在多個組件間共享的資料。
    -   全域共享資料(例如：使用者登入資訊、權限角色、偏好設定)
    -   跨組件共享狀態(例如：導航欄和設定頁面需要共用的用戶名稱)
    -   跨頁面保存狀態(例如：多步驟表單資料需要在頁面切換間保持)
-   何時不需要 Store？ - 組件本地狀態(按鈕顯示/隱藏、彈出視窗開關) - 短暫存在的資料(通知提示、表單驗證訊息)

-   [vue-project-pinia]("./vue-project-pinia/src/main.js")

## 35. axios

-   Axios 是一個基於 Promise 的 HTTP 請求庫，用於在瀏覽器和 Node.js 中發送 HTTP 請求。它可以幫助我們輕鬆地與後端 API 進行通信，發送 GET、POST、PUT、DELETE 等各種類型的請求。
-   為什麼使用 Axios？
    -   更簡單的語法：相比原生的 fetch，Axios 提供了更簡潔的語法和豐富的功能。
    -   自動解析 JSON：Axios 會自動將伺服器返回的 JSON 資料解析成物件。
    -   支援請求攔截器和回應攔截器：可以在請求發送或收到回應之前執行額外的邏輯。
    -   支援超時設置：可以為每個請求設置超時。
-   安裝：`npm install axios`
-   [vue-project-axios]("./vue-project-axios/src/main.js")
