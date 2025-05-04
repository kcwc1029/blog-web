## 1. TensorFlow.js 與機器學習基礎

-   人工智慧本身只是一個泛稱，所有能夠讓電腦有智慧的技術都可稱為「人工智慧」(Artificial Intelligence)
-   從原始資料轉換成智慧的過程：人工智慧是在研究如何從原始資料轉換成智慧的過程，這是需要經過多個不同層次的處理步驟。
- 人工智慧包含機器學習，機器學習包含深度學習。
- 機器學習(Machine Learning)被定義為從過往資料和經驗中自我學習並找出其運行的規則，以達到人工智慧的方法。
- 機器學習的主要目就是預測資料,其厲害之處在於可以自主學習,和自行找出資料之間的關係和規則。
- 2010年，深度學習在弱人工智慧系統方面終於有了重大突破。在2012年Toronto大學Geoffrey Hinton主導的團隊提出基於深度學習的AlexNet，一舉將ImageNet圖片資料集的識別準確率提高十幾個百分比，讓機器的影像識別率正式超越人類。

![upgit_20250430_1745995363.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/04/upgit_20250430_1745995363.png)


![upgit_20250430_1745995635.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/04/upgit_20250430_1745995635.png)

![upgit_20250430_1745995641.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/04/upgit_20250430_1745995641.png)



## 2. 圖靈測試

- 圖靈測試(Turing Test)是計算機科學和人工智慧之父-艾倫圖靈(Alan Turing)在1950年提出。
- 一個定義機器是否擁有智慧的測試，能夠判斷機器是否能夠思考的著名試驗。
- 正方形 A代表一台機器，圓形B代表人類，人類C是一位詢問者(Interrogator)，展開與A和B的對話。對話是透過文字模式的鍵盤輸入和螢幕輸出來進行。
- 如果A沒有被辨別出是一台機器的身份，就表示這台機器A具有智慧。
- 機器A至少需要擁有下列能力：
	- 自然語言處理(Natural Language Processing)：機器A因為需要和詢問者進行文字內容的對話，需要將輸入文字內容進行句子剖析、抽出內容進行分析，然後組成合適且正確的句子來回答詢問者。
	- 知識表示法(Knowledge Representation)：機器A在進行對話前需要儲存大量知識，並且從對話過程中學習和追蹤資訊，讓程式能夠處理知識達到如同人類一般的回答問題。


![upgit_20250430_1745995498.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/04/upgit_20250430_1745995498.png)


## 3. 人工智慧的應用領域
- 手寫辨識 (Handwriting Recognition)：用於將手寫輸入（如觸控筆跡、紙上的手寫字）轉換為可編輯的文字內容。應用：智慧型手機、平板電腦等。
- 語音識別 (Speech Recognition)：分析和理解語音內容，區分音調、口音等。應用：Siri、Google 助理等智慧語音系統。
- 電腦視覺 (Computer Vision)：分析和解讀圖像或影片內容，提取特徵。應用：Google 搜尋相似圖片、人臉辨識。
- 專家系統 (Expert Systems)：利用人工智慧技術儲存大量專業知識，提供建議與決策支持。應用：醫療診斷、財務分析。
- 自然語言處理 (Natural Language Processing)：分析與理解人類語言文字內容。應用：Google 搜尋引擎、自動客服。
- 電腦遊戲 (Game)：模擬遊戲環境中的行為與策略。應用：AlphaGo 智慧模組。
- 智慧機器人 (Intelligent Robotics)：結合多種 AI 技術來模擬人類行為，執行特定任務。應用：監測環境、自動作業。

## 4. 人工智慧的研究領域
- 機器學習與模式識別 (Machine Learning and Pattern Recognition)設計與訓練模型進行預測。需要大量資料來提升學習與預測效果。
- 邏輯基礎的人工智慧 (Logic-based Artificial Intelligence)利用數學邏輯解決問題，例如模式比對（Pattern Matching）、語言剖析（Language Parsing）。
- 搜尋 (Search)尋找最佳解決方案的技術。應用：尋找最短路徑、最佳化資源配置。
- 知識表示法 (Knowledge Representation, KR)研究如何有效儲存與表示世界知識，方便 AI 進行推理。應用：醫療診斷、自然語言對話。
- AI 規劃 (AI Planning)自動化規劃與排程，優化行動順序與資源利用。應用：物流規劃、智慧機器人任務管理。
- 啟發法 (Heuristics)在短時間內找出問題的近似解法，雖然可能非最佳解，但效率高。應用：智慧型搜尋演算法。

## 5. 機器學習演算法的種類

- 迴歸：預測連續的數值資料,可以預測商店的營業額、學生的身高和體重等。常用演算法有:線性迴歸、SVR等。
- 分類：預測分類資料,這是一些有限集合,可以分類成男與女、成功與失敗、癌症分成第1~4期等。常用演算法有Logistic迴歸、決策樹、K鄰近演算法、CART、樸素貝葉斯等。
- 關聯：找出各種現象同時出現的機率,也稱為購物籃分析(Market-basketAnalysis)。當顧客購買米時，78%可能會同時購買雞蛋。常用演算法有Apriori演算法等。
- 分群：將樣本分成相似群組，即資料如何組成的問題，可以分群出喜歡同一類電影的觀眾。常用演算法有K-means演算法等。
- 降維：在減少資料中變數的個數後，仍然保留主要資訊而不失真。通常是使用特徵提取和選擇方法來實作。常用演算法有主成分分析演算法等。

## 6. 深度學習(Deep Learning)
- 深度學習是在訓練機器直覺的直覺訓練，並非知識學習。
- 以人臉辨識的深度學習為例，為了進行深度學習，需要使用大量現成的人臉資料。
- 想想看當送入機器訓練的資料比你一輩子看過的人臉還多很多時，深度學習訓練出來的機器當然經驗豐富，在人臉辨識的準確度上就會比你還強。
- 深度學習是模仿人類大腦神經元(Neuron)傳輸的一種神經網路架構(NeuralNetwork Architectures)
- 深度學習的深度神經網路是一種神經網路，早在1950年就已經出現，只是受限早期電腦的硬體效能和技術不純熟，傳統多層神經網路並沒有成功，為了擺脫之前失敗的經驗，所以重新包裝成一個新名稱：深度學習。

![upgit_20250430_1745995753.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/04/upgit_20250430_1745995753.png)

## 7. Google 的 TensorFlow
- TensorFlow 是一套開放原始碼且高效能的數值計算框架。
- 是一個機器學習的整合平台，提供大量工具和社群資源，加速開發者進行研究與應用。
- 可應用於機器學習模型的構建與部署，支援大規模數據運算。
- TensorFlow 的由來
	- 開發者：Google Brain Team。
	- Tensor（張量）：輸入/輸出的運算資料是向量、矩陣等多維度的數值資料。
	- Flow（流）：數值運算透過計算圖（Computational Graphs）進行處理。
- 使用語言與環境
	- Python
	- JavaScript（對應版本為 TensorFlow.js），在瀏覽器中可使用 WebGL，Node.js 也能支援 GPU 運算

## 8. Keras

模型（Models）是 Keras 的核心資料結構，用於構建深度學習模型。
Keras 支援兩種模型的構建方法
- Sequential 模型
	- 順序結構，層按順序堆疊。
	- 適用於從輸入到輸出的線性堆疊。
	- 使用add()新增神經層。
- Functional API
	- 適合處理多輸入、多輸出的模型，或具更複雜結構的模型。
	- 提供靈活的模型設計方式，可應對複雜網絡需求。
常用層類型：
- 多層感知器 (MLP)：利用 Dense 層構建多層感知網絡，用於處理迴歸問題和分類問題。
- 卷積神經網絡 (CNN)
	- 特徵提取：包括 Conv2D（卷積層）與 Pooling（池化層）。
	- 支援 Dropout、Flatten、Dense 層的堆疊，進一步建構深度網絡。
- 循環神經網絡 (RNN)：用於處理序列數據，可選用 SimpleRNN、LSTM、GRU 等層進行建模。

![upgit_20250430_1745995929.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2025/04/upgit_20250430_1745995929.png)


## 9. 張量Tensor
TensorFlow.js 建立的神經網路是一張說明如何執行運算(張量運算)的計算圖。
當建構好計算圖後，我們需要將資料送進神經網路來進行學習，這是一種多維度的陣列資料稱為「張量」(Tensors)
基本形狀(Shape)：`[樣本數, 特徵1, 特徵2]`
使用方式(CDN)：`<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest"></script>`


```html
，。
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest"></script>
</head>
<body>

<script>
  // 建立 scalar（預設 float32）
  const x = tf.scalar(105);
  document.write("x 值： " + x + "<br/>");
  document.write("rank: " + x.rank + "<br/>");
  document.write("shape: " + x.shape + "<br/>");
  document.write("dtype: " + x.dtype + "<br/><br/>");

  // 建立 scalar 並指定資料型態為 int32
  const y = tf.scalar(10, "int32");
  document.write("y 值： " + y + "<br/>");
  document.write("type: " + y.dtype + "<br/>");
</script>

</body>
</html>
```



