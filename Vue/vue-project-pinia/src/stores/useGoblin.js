import { defineStore } from "pinia";
import { ref, reactive } from "vue";

export const useGoblinStore = defineStore("goblin", () => {
    // NOTE: 這個store的名稱：goblin
    // 定義元件
    const count = ref(1);
    const name = ref("助教");
    const level = ref(5);
    const inventory = ref(["匕首", "斗篷", "超發達右手", "神聖的吐槽"]); // 背包物品
    const abilities = reactive({
        偷竊: 5,
        黑暗魔法: 2,
    });
    // 定義方法
    // 哥不林數量增加減少
    const countUp = () => {
        count.value++;
    };
    const countDown = () => {
        count.value--;
    };
    // 等級增加
    const levelUp = () => {
        level.value++;
        alert(`${name.value} 升級了！目前等級：${level.value}`);
    };
    // 添加背包物品
    const addItem = () => {
        const items = ["神秘藥水", "哥布林徽章", "強化寶石", "未知的卷軸"];
        const randomItem = items[Math.floor(Math.random() * items.length)];
        inventory.value.push(randomItem);
        alert(`${name.value} 獲得了新物品：${randomItem}`);
    };

    return { count, name, level, inventory, abilities, countUp, countDown, levelUp, addItem };
});
