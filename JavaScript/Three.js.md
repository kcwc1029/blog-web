## 1. Three.js WebGL OpenGl之間關係
![upgit_20241104_1730709324.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241104_1730709324.png)
- three.js：上層的API函式庫,負責在Canvas裡面執行一些繪圖;它的底層是用WebGL API來處理繪圖的。
- WebGL:一個JS的API,讓工程師可以控制每一顆像素要呈現的RGB顏色。它會再跟CPU、GPU溝通,最後成功繪製在螢幕的像素上。
- OpenGL：是一個業界標準

## 2. three.js的四個物件
- 鏡頭(camera)：
- 場景(Scene)
- 渲染(Renderer)渲染到螢幕，並藉由requestAnimationFrame不斷更新螢幕。

## 3. 建立第一個Three.js
```js
// step1
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 10); // Camera 身為鏡頭,有位置屬性,設定在Z軸即可
```
- camera主要分為兩種：
	- PerspectiveCamera：有透視
	- OrthographicCamera：無透視
- PerspectiveCamera的四個參數：fov、aspect、far、near
	- fov (視角，Field of View)：
	    - 相機的視角，用於定義垂直方向上的視野範圍。
	    - 單位是度數 (°)，例如 75° 表示視角較寬，30° 表示視角較窄。
	    - 視角越大，場景顯示範圍越廣，但物體顯得較小，視角越小，物體顯得較大。
	    - ![upgit_20241104_1730710073.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241104_1730710073.png)

	- aspect (長寬比)：
	    - 定義渲染的寬高比，通常設定為 `window.innerWidth / window.innerHeight`。
	- near (近裁剪面)/far (遠裁剪面)：
	    - 相機可以看到的最近距離的裁剪面，即從相機位置到場景中可見物體的最短距離。
	    - 相機可以看到的最遠距離的裁剪面，即從相機位置到場景中可見物體的最長距離。
	![upgit_20241104_1730711242.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241104_1730711242.png)

```js
// step2
// 實例化選染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // 渲染器負責投影場景在螢幕上,會需要寬高
document.body.appendChild(renderer.domElement); // 渲染器會產生canvas物件,我們在html的body放置它
```
```js
// step3
//建立一個形狀,用來定義物體的形狀為長寬高為1的正方體
const geometry = new THREE.BoxGeometry(1, 1, 1);
// 建立一個材質,可想像成一個物體所穿的衣服,設定材質為藍色
const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
```
- 回到Scene當中建立Mesh物件
- Mesh物件包含兩個東西：
	- 幾何模型(Geometry)：描述了物體的形狀,可以定義成球形、平面、矩形等
	- 材質(Material)：物體所穿的衣服

```js
// step4
//很像setInterval的函式。每一幀都會執行這個函式
function animate() {
	// 每一幀物體都會自轉
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	requestAnimationFrame(animate); // 它每一幀執行 animate()
	renderer.render(scene, camera); // 每一幀,場景物件都會被鏡頭捕捉
}
animate();
```

- 完整程式碼
```html
<!DOCTYPE html>
<html lang="zh-TW">
    <head>
        <meta charset="UTF-8" />
        <title>Three.js 初體驗</title>
        <style>
            body {
                margin: 0;
            }
            canvas {
                display: block;
            }
        </style>
    </head>
    <body>
        <!-- 引入 Three.js CDN -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
        <!-- <script src="main.js"></script> -->
        <script>
            // step1
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
            camera.position.set(0, 0, 15); // Camera 身為鏡頭,有位置屬性,設定在Z軸即可

            // step2
            // 實例化選染器
            const renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight); // 渲染器負責投影場景在螢幕上,會需要寬高
            document.body.appendChild(renderer.domElement); // 渲染器會產生canvas物件,我們在html的body放置它

            // step3
            //建立一個形狀,用來定義物體的形狀為長寬高為1的正方體
            const geometry = new THREE.BoxGeometry(1, 1, 1);
            // 建立一個材質,可想像成一個物體所穿的衣服,設定材質為藍色
            const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
            const cube = new THREE.Mesh(geometry, material);
            scene.add(cube);

            // step4
            //很像setInterval的函式。每一幀都會執行這個函式
            function animate() {
                // 每一幀物體都會自轉
                cube.rotation.x += 0.01;

                cube.rotation.y += 0.01;
                // 它每一幀執行 animate()
                requestAnimationFrame(animate);
                // 每一幀,場景物件都會被鏡頭捕捉
                renderer.render(scene, camera);
            }
            animate();
        </script>
    </body>
</html>
```

## 4. three.js 空間座標

### 4.1. 巢狀結構
![upgit_20241104_1730712079.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241104_1730712079.png)
- 巢狀結構中，最大的影響是空間。
- XYZ軸也是一種樹狀結構，每一個物件都有一個空間數值，而這些空間數值就是相對於父元件。
- 最上層的空間就是世界空間。
```js
// 建立場景跟相機
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 10, 15); // Camera 身為鏡頭,有位置屬性,設定在Z軸即可

// 實例化選染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // 渲染器負責投影場景在螢幕上,會需要寬高
document.body.appendChild(renderer.domElement); // 渲染器會產生canvas物件,我們在html的body放置它

// 建立形狀
const geometry = new THREE.BoxGeometry(1, 1, 1); //建立一個形狀,用來定義物體的形狀為長寬高為1的正方體
// const material = new THREE.MeshBasicMaterial({ color: 0x0000ff }); // 建立一個材質,可想像成一個物體所穿的衣服,設定材質為藍色
const material = new THREE.MeshNormalMaterial({ color: 0x0000ff }); // 更加清楚的材質
const parent = new THREE.Mesh(geometry, material);
const child = new THREE.Mesh(geometry, material);

scene.add(parent);
parent.add(child);
parent.position.x = 10;
child.position.x = 5;

// requestAnimationFrame=>。每一幀都會執行這個函式
function animate() {
    // 它每一幀執行 animate()
    requestAnimationFrame(animate);
    // 每一幀,場景物件都會被鏡頭捕捉
    renderer.render(scene, camera);
}
animate();

```


![upgit_20241104_1730719454.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241104_1730719454.png)

![upgit_20241104_1730719506.png](https://raw.githubusercontent.com/kcwc1029/obsidian-upgit-image/main/2024/11/upgit_20241104_1730719506.png)


### 4.2. 自轉與公轉
```js
// 建立場景跟相機
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 10, 15); // Camera 身為鏡頭,有位置屬性,設定在Z軸即可

// 實例化選染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // 渲染器負責投影場景在螢幕上,會需要寬高
document.body.appendChild(renderer.domElement); // 渲染器會產生canvas物件,我們在html的body放置它

// 建立形狀
const geometry = new THREE.BoxGeometry(1, 1, 1); //建立一個形狀,用來定義物體的形狀為長寬高為1的正方體
// const material = new THREE.MeshBasicMaterial({ color: 0x0000ff }); // 建立一個材質,可想像成一個物體所穿的衣服,設定材質為藍色
const material = new THREE.MeshNormalMaterial({ color: 0x0000ff }); // 建立一個材質,可想像成一個物體所穿的衣服,設定材質為藍色
const parent = new THREE.Mesh(geometry, material);
const child = new THREE.Mesh(geometry, material);

scene.add(parent);
parent.add(child);
parent.position.x = 10;
child.position.x = 5;

// requestAnimationFrame=>。每一幀都會執行這個函式
function animate() {
    parent.rotation.y += 0.01;
    // 它每一幀執行 animate()
    requestAnimationFrame(animate);
    // 每一幀,場景物件都會被鏡頭捕捉
    renderer.render(scene, camera);
}
animate();
```

- 所以，針對空間的程式碼如下：
```js
// 指定位置
cube.position.x += 0.01;

// 縮放
cube.scale.x+=0.01
```

## 5. 矩陣
- 3D場景中的每個物件都是上下層結構關係(意即子元件的空間是相對於父空間)。
- 每一種結構都會有三種型變(位移、縮放、旋轉)。
- 而這3種型變是有順序的：位移=>旋轉=>縮放。

### 5.1. 字元件也有兩個位置座標
- 以Mesh來說：
	- const meshPosition = new Mesh().position; // 自己本身的Mesh位置屬性
	- const geometryPosition = new Mesh().geometry.position; // Mesh裡面的geometry的位置屬性

- 查看程式碼不同順序之效果
```js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 20); // Camera 身為鏡頭,有位置屬性,設定在Z軸即可

// 實例化選染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // 渲染器負責投影場景在螢幕上,會需要寬高
document.body.appendChild(renderer.domElement); // 渲染器會產生canvas物件,我們在html的body放置它

// 建立形狀
const geometry = new THREE.BoxGeometry(1, 1, 1); //建立一個形狀,用來定義物體的形狀為長寬高為1的正方體
const material = new THREE.MeshNormalMaterial({ color: 0x0000ff }); // 更加清楚的材質
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// TODO: 新增位移與縮放=> 嘗試將兩者進行調換
cube.geometry.scale(2, 1, 1);
cube.geometry.translate(5, 0, 0);

function animate() {
    requestAnimationFrame(animate); // 它每一幀執行 animate()
    renderer.render(scene, camera); // 每一幀,場景物件都會被鏡頭捕捉
}
animate();
// 這邊會發現，順序不同會造成實際結果差異
// => 使用矩陣解決
```

### 5.2. Matrix4
















