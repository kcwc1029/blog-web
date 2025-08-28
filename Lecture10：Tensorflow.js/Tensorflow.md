## 1. TensorFlow.js 與機器學習基礎

-   人工智慧本身只是一個泛稱，所有能夠讓電腦有智慧的技術都可稱為「人工智慧」(Artificial Intelligence)
-   從原始資料轉換成智慧的過程：人工智慧是在研究如何從原始資料轉換成智慧的過程，這是需要經過多個不同層次的處理步驟。
-   人工智慧包含機器學習，機器學習包含深度學習。
-   機器學習(Machine Learning)被定義為從過往資料和經驗中自我學習並找出其運行的規則，以達到人工智慧的方法。
-   機器學習的主要目就是預測資料,其厲害之處在於可以自主學習,和自行找出資料之間的關係和規則。
-   2010 年，深度學習在弱人工智慧系統方面終於有了重大突破。在 2012 年 Toronto 大學 Geoffrey Hinton 主導的團隊提出基於深度學習的 AlexNet，一舉將 ImageNet 圖片資料集的識別準確率提高十幾個百分比，讓機器的影像識別率正式超越人類。

![upgit_20250430_1745995363.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/04/upgit_20250430_1745995363.png)

![upgit_20250430_1745995635.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/04/upgit_20250430_1745995635.png)

![upgit_20250430_1745995641.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/04/upgit_20250430_1745995641.png)

## 2. 圖靈測試

-   圖靈測試(Turing Test)是計算機科學和人工智慧之父-艾倫圖靈(Alan Turing)在 1950 年提出。
-   一個定義機器是否擁有智慧的測試，能夠判斷機器是否能夠思考的著名試驗。
-   正方形 A 代表一台機器，圓形 B 代表人類，人類 C 是一位詢問者(Interrogator)，展開與 A 和 B 的對話。對話是透過文字模式的鍵盤輸入和螢幕輸出來進行。
-   如果 A 沒有被辨別出是一台機器的身份，就表示這台機器 A 具有智慧。
-   機器 A 至少需要擁有下列能力：
    -   自然語言處理(Natural Language Processing)：機器 A 因為需要和詢問者進行文字內容的對話，需要將輸入文字內容進行句子剖析、抽出內容進行分析，然後組成合適且正確的句子來回答詢問者。
    -   知識表示法(Knowledge Representation)：機器 A 在進行對話前需要儲存大量知識，並且從對話過程中學習和追蹤資訊，讓程式能夠處理知識達到如同人類一般的回答問題。

![upgit_20250430_1745995498.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/04/upgit_20250430_1745995498.png)

## 3. 人工智慧的應用領域

-   手寫辨識 (Handwriting Recognition)：用於將手寫輸入（如觸控筆跡、紙上的手寫字）轉換為可編輯的文字內容。應用：智慧型手機、平板電腦等。
-   語音識別 (Speech Recognition)：分析和理解語音內容，區分音調、口音等。應用：Siri、Google 助理等智慧語音系統。
-   電腦視覺 (Computer Vision)：分析和解讀圖像或影片內容，提取特徵。應用：Google 搜尋相似圖片、人臉辨識。
-   專家系統 (Expert Systems)：利用人工智慧技術儲存大量專業知識，提供建議與決策支持。應用：醫療診斷、財務分析。
-   自然語言處理 (Natural Language Processing)：分析與理解人類語言文字內容。應用：Google 搜尋引擎、自動客服。
-   電腦遊戲 (Game)：模擬遊戲環境中的行為與策略。應用：AlphaGo 智慧模組。
-   智慧機器人 (Intelligent Robotics)：結合多種 AI 技術來模擬人類行為，執行特定任務。應用：監測環境、自動作業。

## 4. 人工智慧的研究領域

-   機器學習與模式識別 (Machine Learning and Pattern Recognition)設計與訓練模型進行預測。需要大量資料來提升學習與預測效果。
-   邏輯基礎的人工智慧 (Logic-based Artificial Intelligence)利用數學邏輯解決問題，例如模式比對（Pattern Matching）、語言剖析（Language Parsing）。
-   搜尋 (Search)尋找最佳解決方案的技術。應用：尋找最短路徑、最佳化資源配置。
-   知識表示法 (Knowledge Representation, KR)研究如何有效儲存與表示世界知識，方便 AI 進行推理。應用：醫療診斷、自然語言對話。
-   AI 規劃 (AI Planning)自動化規劃與排程，優化行動順序與資源利用。應用：物流規劃、智慧機器人任務管理。
-   啟發法 (Heuristics)在短時間內找出問題的近似解法，雖然可能非最佳解，但效率高。應用：智慧型搜尋演算法。

## 5. 機器學習演算法的種類

-   迴歸：預測連續的數值資料,可以預測商店的營業額、學生的身高和體重等。常用演算法有:線性迴歸、SVR 等。
-   分類：預測分類資料,這是一些有限集合,可以分類成男與女、成功與失敗、癌症分成第 1~4 期等。常用演算法有 Logistic 迴歸、決策樹、K 鄰近演算法、CART、樸素貝葉斯等。
-   關聯：找出各種現象同時出現的機率,也稱為購物籃分析(Market-basketAnalysis)。當顧客購買米時，78%可能會同時購買雞蛋。常用演算法有 Apriori 演算法等。
-   分群：將樣本分成相似群組，即資料如何組成的問題，可以分群出喜歡同一類電影的觀眾。常用演算法有 K-means 演算法等。
-   降維：在減少資料中變數的個數後，仍然保留主要資訊而不失真。通常是使用特徵提取和選擇方法來實作。常用演算法有主成分分析演算法等。

## 6. 深度學習(Deep Learning)

-   深度學習是在訓練機器直覺的直覺訓練，並非知識學習。
-   以人臉辨識的深度學習為例，為了進行深度學習，需要使用大量現成的人臉資料。
-   想想看當送入機器訓練的資料比你一輩子看過的人臉還多很多時，深度學習訓練出來的機器當然經驗豐富，在人臉辨識的準確度上就會比你還強。
-   深度學習是模仿人類大腦神經元(Neuron)傳輸的一種神經網路架構(NeuralNetwork Architectures)
-   深度學習的深度神經網路是一種神經網路，早在 1950 年就已經出現，只是受限早期電腦的硬體效能和技術不純熟，傳統多層神經網路並沒有成功，為了擺脫之前失敗的經驗，所以重新包裝成一個新名稱：深度學習。

![upgit_20250430_1745995753.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/04/upgit_20250430_1745995753.png)

## 7. Google 的 TensorFlow

-   TensorFlow 是一套開放原始碼且高效能的數值計算框架。
-   是一個機器學習的整合平台，提供大量工具和社群資源，加速開發者進行研究與應用。
-   可應用於機器學習模型的構建與部署，支援大規模數據運算。
-   TensorFlow 的由來
    -   開發者：Google Brain Team。
    -   Tensor（張量）：輸入/輸出的運算資料是向量、矩陣等多維度的數值資料。
    -   Flow（流）：數值運算透過計算圖（Computational Graphs）進行處理。
-   使用語言與環境
    -   Python
    -   JavaScript（對應版本為 TensorFlow.js），在瀏覽器中可使用 WebGL，Node.js 也能支援 GPU 運算

## 8. Keras

模型（Models）是 Keras 的核心資料結構，用於構建深度學習模型。
Keras 支援兩種模型的構建方法

-   Sequential 模型
    -   順序結構，層按順序堆疊。
    -   適用於從輸入到輸出的線性堆疊。
    -   使用 add()新增神經層。
-   Functional API - 適合處理多輸入、多輸出的模型，或具更複雜結構的模型。 - 提供靈活的模型設計方式，可應對複雜網絡需求。
    常用層類型：
-   多層感知器 (MLP)：利用 Dense 層構建多層感知網絡，用於處理迴歸問題和分類問題。
-   卷積神經網絡 (CNN)
    -   特徵提取：包括 Conv2D（卷積層）與 Pooling（池化層）。
    -   支援 Dropout、Flatten、Dense 層的堆疊，進一步建構深度網絡。
-   循環神經網絡 (RNN)：用於處理序列數據，可選用 SimpleRNN、LSTM、GRU 等層進行建模。

![upgit_20250430_1745995929.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/04/upgit_20250430_1745995929.png)

## 9. 張量 Tensor

TensorFlow.js 建立的神經網路是一張說明如何執行運算(張量運算)的計算圖。
當建構好計算圖後，我們需要將資料送進神經網路來進行學習，這是一種多維度的陣列資料稱為「張量」(Tensors)
基本形狀(Shape)：`[樣本數, 特徵1, 特徵2]`
使用方式(CDN)：`<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest"></script>`。

```js
// 建立純量（Scalar）

const x = tf.scalar(105); // 預設 float32
const y = tf.scalar(10, "int32"); // 指定 int32
```

```js
// 一維向量（Vector）
const x = tf.tensor1d([1.2, 5.5, 8.7, 10.5]);
```

```js
// 二維向量（Matrix）
const x = tf.tensor2d([
	[1, 5, 8, 6],
	[2, 4, 7, 9],
	[6, 7, 1, 3],
]);
```

```js
// 三維張量
const x = tf.tensor3d([
	[
		[1, 5, 3],
		[7, 8, 4],
	],
	[
		[2, 3, 5],
		[6, 9, 8],
	],
	[
		[6, 7, 2],
		[1, 3, 8],
	],
]);
```

```js
// 四維張量
const x = tf.tensor4d([
	[
		[
			[1, 5],
			[3, 4],
		],
		[
			[7, 8],
			[4, 5],
		],
	],
	[
		[
			[2, 3],
			[5, 6],
		],
		[
			[6, 9],
			[8, 9],
		],
	],
	[
		[
			[6, 7],
			[2, 3],
		],
		[
			[1, 3],
			[8, 9],
		],
	],
]);
```

### 9.1. 特定值張量（全 0 / 全 1）

使用 tf.zeros() / tf.ones()

```js
const x = tf.zeros([3, 2, 2]); // 全 0
const y = tf.ones([2, 3, 3]); // 全 1
```

使用 tf.onesLike() / tf.zerosLike()

```js
const z = tf.onesLike(x); // 跟 x 同形狀但值為 1
```

### 9.2. 隨機值張量

tf.randomNormal()：

-   語法：tf.randomNormal(shape, mean = 0, stdDev = 1)

```js
const x = tf.randomNormal([2, 2]);
const y = tf.randomNormal([2, 2], 10, 0.6); // 均值10, 標準差0.6
```

tf.randomUniform()

-   語法：tf.randomUniform(shape, minval, maxval)

```js
const x1 = tf.randomUniform([2, 2]);
const y1 = tf.randomUniform([2, 2], -5, 5);
```

### 9.3. 改變張量形狀

reshape()

```js
const x = tf.tensor([
	[1, 2],
	[3, 4],
]);
const y = x.reshape([4, 1]); // 將 (2,2) 改為 (4,1)
```

### 9.4. 取得張量值

data() 與 dataSync()

-   data()：非同步，回傳 1D 陣列
-   dataSync()：同步

```js
// 同步
console.log(x.dataSync());
// 非同步
const arr = await x.data();
```

array() 與 arraySync()

-   array()：非同步，回傳與原張量同形狀的多維陣列
-   arraySync()：同步

```js
// 同步
console.log(x.arraySync());
// 非同步
const arr = await x.array();
```

## 10. 常用單元運算（Unary Operations）

| 方法                    | 說明                     |
| ----------------------- | ------------------------ |
| `tf.neg()`              | 將正值變負值，負值變正值 |
| `tf.square()`           | 平方值                   |
| `tf.mean()`             | 平均值                   |
| `tf.sum()`              | 總和                     |
| `tf.norm()`             | 範數                     |
| `tf.min()` / `tf.max()` | 最小值 / 最大值          |
| `tf.transpose()`        | 張量轉置（行列對調）     |

### 10.1. Lab：取負值

```js
const x = tf.tensor([-1, 5, -7]);
const z = tf.neg(x);
console.log(z.toString());
// Tensor [1, -5, 7]
```

### 10.2. Lab：計算平均值

```js
const y = tf.tensor2d([
	[1, 2],
	[3, 4],
]);
console.log(y.mean().toString());
// Tensor 2.5
```

### 10.3. Lab：轉置張量

```js
const a = tf.tensor2d([
	[1, 2],
	[3, 4],
	[5, 6],
]);
const b = tf.transpose(a);
console.log(b.shape);
// 原 shape: [3, 2] ➔ 轉置後: [2, 3]
```

## 11. 加法運算（Element-wise Addition）

### 11.1. Lab：矩陣加法

```js
const x = tf.tensor([
	[1, 2],
	[3, 4],
]);
const s = tf.tensor([
	[5, 6],
	[7, 8],
]);
const c = tf.add(x, s);
console.log(c.toString());
// Tensor [[6, 8], [10, 12]]
```

## 12. 乘法運算（矩陣乘法）

### 12.1. Lab：矩陣相乘

```js
const x = tf.tensor([
	[1, 2],
	[3, 4],
]);
const s = tf.tensor([
	[5, 6],
	[7, 8],
]);
const c = tf.matMul(x, s);
console.log(c.toString());
// Tensor [[19, 22], [43, 50]]
```

## 13. TensorFlow.js 記憶體管理

TensorFlow.js 在瀏覽器中執行時，通常使用 WebGL 作為後端。
瀏覽器不會自動回收張量佔用的記憶體，需要我們手動釋放。
如果不釋放，用久了會造成記憶體洩漏，導致程式越跑越慢甚至當掉。

### 13.1. 手動釋放記憶體：dispose()

-   釋放已經不再需要的張量，歸還記憶體空間。

```js
const x = tf.tensor([
	[1, 2],
	[3, 4],
]);
x.dispose(); // 釋放 x 佔用的記憶體
```

### 13.2. 自動管理記憶體：tf.tidy()

-   自動清除函數裡面未回傳的張量，方便簡潔。

```js
const y = tf.tensor([
	[5, 6],
	[7, 8],
]);

const z = tf.tidy(() => {
	const result = y.square().log().neg();
	return result; // 只有 return 的張量不會被清掉
});

console.log(z.toString());
```

## 14. TensorFlow.js 資料視覺化

TensorFlow.js 提供 tfjs-vis 套件，幫助快速建立資料視覺化。

載入方式（CDN）

```html
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest"></script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-vis@latest"></script>
```

### 14.1. Lab：畫出「運動時間 vs 消耗熱量」的折線圖 (Line Chart)

指令：tfvis.render.linechart(surface, data, options)

-   surface： 指定畫布位置
-   data：
    -   values: 資料陣列（{x: 數字, y: 數字} 格式）
    -   series: 折線名稱
-   options： xLabel, yLabel, height, width

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>運動時間 vs 消耗熱量</title>
		<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest"></script>
		<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-vis@latest"></script>
	</head>
	<body>
		<script>
			const exerciseData = [
				{ x: 10, y: 80 },
				{ x: 20, y: 160 },
				{ x: 30, y: 240 },
				{ x: 40, y: 310 },
				{ x: 50, y: 400 },
				{ x: 60, y: 460 },
			];

			tfvis.render.linechart(
				{ name: "運動時間 vs 消耗熱量", tab: "折線圖" },
				{ values: exerciseData, series: ["消耗熱量"] },
				{ xLabel: "運動時間 (分鐘)", yLabel: "消耗熱量 (大卡)", height: 300, width: 400 }
			);
		</script>
	</body>
</html>
```

### 14.2. Lab：畫出「上課日 & 放假日 每日步數」的對比多折線圖 (Multiple Line Chart)

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>每日步數對照圖</title>
		<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest"></script>
		<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-vis@latest"></script>
	</head>
	<body>
		<script>
			const schoolDaySteps = [
				{ x: 1, y: 8000 },
				{ x: 2, y: 8500 },
				{ x: 3, y: 9000 },
				{ x: 4, y: 8700 },
				{ x: 5, y: 9200 },
			];
			const holidaySteps = [
				{ x: 1, y: 12000 },
				{ x: 2, y: 15000 },
				{ x: 3, y: 14000 },
				{ x: 4, y: 13000 },
				{ x: 5, y: 12500 },
			];

			tfvis.render.linechart(
				{ name: "上課日與放假日每日步數", tab: "折線圖" },
				{ values: [schoolDaySteps, holidaySteps], series: ["上課日", "放假日"] },
				{ xLabel: "第幾天", yLabel: "步數", height: 300, width: 400 }
			);
		</script>
	</body>
</html>
```

### 14.3. Lab：畫出「學習時數 vs 測驗分數」的 散佈圖 (Scatter Plot)

指令：tfvis.render.scatterplot(surface, data, options)

-   data： 陣列 {x, y}
-   options： 可自訂 X/Y 軸範圍

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>學習時數 vs 測驗分數</title>
		<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest"></script>
		<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-vis@latest"></script>
	</head>
	<body>
		<script>
			const studyVsScore = [
				{ x: 1, y: 55 },
				{ x: 2, y: 60 },
				{ x: 3, y: 65 },
				{ x: 4, y: 70 },
				{ x: 5, y: 75 },
				{ x: 6, y: 80 },
				{ x: 7, y: 82 },
				{ x: 8, y: 85 },
				{ x: 9, y: 87 },
				{ x: 10, y: 90 },
			];

			tfvis.render.scatterplot(
				{ name: "學習時數 vs 測驗分數", tab: "散佈圖" },
				{ values: studyVsScore, series: ["成績"] },
				{ xLabel: "學習時數", yLabel: "測驗分數", xAxisDomain: [0, 12], yAxisDomain: [50, 100], height: 300, width: 400 }
			);
		</script>
	</body>
</html>
```

### 14.4. Lab：產生「50 筆 0~100 分的模擬考試分數」並繪製直方圖 (Histogram)

指令：tfvis.render.histogram(surface, data, options)

-   data： 單一一維資料（如 data.dataSync()）
-   options： maxBins 設定分割區數量

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>模擬考試成績分布</title>
		<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest"></script>
		<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-vis@latest"></script>
	</head>
	<body>
		<script>
			// 生成 50 筆 0~100 分的隨機分數
			const scores = tf.randomUniform([50], 0, 100);
			tfvis.render.histogram({ name: "模擬考試成績分布", tab: "直方圖" }, scores.dataSync(), { maxBins: 10, height: 300, width: 400 });
		</script>
	</body>
</html>
```

### 14.5. Lab：建立一個「3 科成績的相關係數」的熱地圖（數學、英文、自然） (Heat Map)

指令：tfvis.render.heatmap(surface, data, options)

-   data： 二維陣列
-   options： 可設定 X/Y 標籤

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>成績相關係數熱地圖</title>
		<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest"></script>
		<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-vis@latest"></script>
	</head>
	<body>
		<script>
			const correlation = [
				[1, 0.75, 0.65],
				[0.75, 1, 0.8],
				[0.65, 0.8, 1],
			];

			tfvis.render.heatmap(
				{ name: "成績相關係數", tab: "熱地圖" },
				{ values: correlation, xTickLabels: ["數學", "英文", "自然"], yTickLabels: ["數學", "英文", "自然"] },
				{ width: 500, height: 300, xLabel: "科目", yLabel: "科目", colorMap: "blues" }
			);
		</script>
	</body>
</html>
```

## 15. 邏輯回歸 (Logistic Regression)

用來處理二分類問題的機器學習模型。
的輸出值是介於 0 ~ 1 的機率值，通常用來預測一件事情的發生機率。​
當輸出：

-   大於 0.5 → 預測為類別 1
-   小於 0.5 → 預測為類別 0

### 15.1. Lab：根據溫度預測機器是否過熱

-   在訓練完模型後，放入兩筆氣溫 26、30 預測

```html
<html>
	<head>
		<title>temperature_vs_performance</title>
		<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest"></script>
		<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-vis@latest"></script>
	</head>
	<body>
		<h4>當日氣溫預測業績的線性迴歸預測結果:</h4>
		<p><span id="output">目前正在訓練中....</span></p>
		<p id="result01"></p>
		<p id="result02"></p>
	</body>
	<script>
		// TODO: 訓練資料
		const xs = tf.tensor2d([29, 28, 34, 31, 25, 29, 32, 31, 24, 33, 25, 31, 26, 30], [14, 1]);
		const ys = tf.tensor2d([7.7, 6.2, 9.3, 8.4, 5.9, 6.4, 8.0, 7.5, 5.8, 9.1, 5.1, 7.3, 6.5, 8.4], [14, 1]);

		// TODO: 建立線性迴歸模型
		const model = tf.sequential();
		model.add(tf.layers.dense({ units: 16, inputShape: [1] })); // 隱藏層
		model.add(tf.layers.dense({ units: 1 })); // 輸出層
		// TODO: 編譯模型(選擇損失函數、優化器、評估標準)
		model.compile({ loss: "meanSquaredError", optimizer: "adam", metrics: ["mse"] });
		tfvis.show.modelSummary({ name: "Model Summary" }, model); // 模型視覺化

		// TODO: 訓練模型
		async function trainAndPredict() {
			// 訓練模型
			await model.fit(xs, ys, {
				epochs: 100, // 訓練總次數
				callbacks: tfvis.show.fitCallbacks(
					{ name: "Training Performance" }, // 視覺化圖表名稱
					["loss", "mse"], // 需要監控的指標
					{ height: 200 } // 圖表的高度設定
				),
			});

			// 抓取前端標籤
			document.getElementById("output").innerText = "預測中...";

			// 預測資料
			const preds = model.predict(tf.tensor2d([[26], [30]])); // 放兩筆
			const array = await preds.array(); // 獲取預測結果
			console.log(array);
			document.getElementById("result01").innerText = "第1筆資料預測：" + array[0];
			document.getElementById("result02").innerText = "第2筆資料預測：" + array[1];
		}
		trainAndPredict();
	</script>
</html>
```

### 15.2. Lab：訓練邏輯閘模型

![upgit_20250504_1746374076.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/05/upgit_20250504_1746374076.png)

```html
<!DOCTYPE html>
<html>
	<head>
		<title>xor_logic_prediction</title>
		<!-- 引入 TensorFlow.js 和 TensorFlow.js Vis 庫 -->
		<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest"></script>
		<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-vis@latest"></script>
	</head>
	<body>
		<h3>XOR 測試資料與預測輸出</h3>
		<p>（訓練中請稍候，訓練完成後會顯示最終預測結果）</p>
		<hr />

		<!-- 分別標示 4 筆輸入測試資料及其預測結果 -->
		<div><strong>測試資料 (1):</strong> [0, 0] → 預測輸出: <span id="output1">待預測...</span></div>
		<div><strong>測試資料 (2):</strong> [0, 1] → 預測輸出: <span id="output2">待預測...</span></div>
		<div><strong>測試資料 (3):</strong> [1, 0] → 預測輸出: <span id="output3">待預測...</span></div>
		<div><strong>測試資料 (4):</strong> [1, 1] → 預測輸出: <span id="output4">待預測...</span></div>
	</body>

	<script>
		// TODO: 建立模型
		function createModel() {
			let model = tf.sequential(); // 創建一個順序模型
			// 添加隱藏層，8 個神經元，輸入形狀為 2
			model.add(tf.layers.dense({ units: 8, inputShape: [2], activation: "tanh" }));
			// 添加輸出層，1 個神經元，使用 sigmoid 激活函數
			model.add(tf.layers.dense({ units: 1, activation: "sigmoid" }));

			model.compile({
				optimizer: "sgd", // 使用隨機梯度下降（SGD）優化器
				loss: "binaryCrossentropy", // 使用二元交叉熵作為損失函數
				metrics: ["accuracy"], // 評估指標為準確率
			});

			tfvis.show.modelSummary({ name: "Model Summary" }, model); // 顯示模型摘要
			return model;
		}

		// TODO: 準備 XOR 的訓練資料
		const xs = tf.tensor2d([
			[0, 0],
			[0, 1],
			[1, 0],
			[1, 1],
		]);
		const ys = tf.tensor2d([[0], [1], [1], [0]]);

		// TODO: 執行訓練
		async function trainModel() {
			const model = createModel();
			await model.fit(xs, ys, {
				batchSize: 1,
				epochs: 3000,
				callbacks: tfvis.show.fitCallbacks({ name: "Training Performance" }, ["loss", "acc"], {
					yLabel: "loss/acc",
					height: 200,
					callbacks: ["onEpochEnd"],
				}),
			});

			// 訓練完成後進行預測
			const preds = model.predict(xs);
			// 將預測結果轉為陣列
			const predValues = await preds.array();

			// 顯示 4 筆預測結果
			document.getElementById("output1").innerText = predValues[0][0].toFixed(4);
			document.getElementById("output2").innerText = predValues[1][0].toFixed(4);
			document.getElementById("output3").innerText = predValues[2][0].toFixed(4);
			document.getElementById("output4").innerText = predValues[3][0].toFixed(4);
		}
		trainModel();
	</script>
</html>
```

## 16. 辨識MINIST手寫數字圖片
MNIST(Mixed National Institute of Standards and Technology)資料集是YannLecun's提供的圖片資料庫
包含60,000張手寫數字圖片(Handwritten Digit Image)的訓練資料集和10,000張測試資料集。
手寫數字圖片：尺寸28x28像素的灰階點陣圖，標籤為手寫數字圖片對應實際的0~9數字。

### 16.1. Lab：呈現手寫數字圖片(檔案：MINIST01.html)
- 資料來源：data.js
- nextTrainBatch(batchSize())：從訓練資料集取回參數批次尺寸的隨機圖片和標籤。
- nextTestBatch(batchSize())：從測試資料集取回參數批次尺寸的隨機圖片和標籤。

