<template>
    <div class="container mt-5">
        <form @submit.prevent="saveData" class="p-4 border rounded shadow">
            <!-- Name Input -->
            <div class="mb-3">
                <label for="name" class="form-label">Your Name</label>
                <input type="text" id="name" v-model="formData.name" @blur="validInput" class="form-control" />
            </div>

            <!-- Age Input -->
            <div class="mb-3">
                <label for="age" class="form-label">Your Age (Years)</label>
                <input type="number" id="age" v-model.number="formData.age" class="form-control" />
            </div>

            <!-- Dropdown: How did you hear about us? -->
            <div class="mb-3">
                <label for="source" class="form-label">How did you hear about us?</label>
                <select id="source" v-model="formData.source" class="form-select">
                    <option value="Google">Google</option>
                    <option value="Friend">Friend</option>
                    <option value="Advertisement">Advertisement</option>
                </select>
            </div>

            <!-- Checkbox Group: Interests -->
            <div class="mb-3">
                <label class="form-label">What are you interested in?</label>
                <div class="form-check">
                    <input type="checkbox" id="news" value="News" v-model="formData.interests" class="form-check-input" />
                    <label for="news" class="form-check-label">News</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" id="tutorials" value="Tutorials" v-model="formData.interests" class="form-check-input" />
                    <label for="tutorials" class="form-check-label">Tutorials</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" id="nothing" value="Nothing" v-model="formData.interests" class="form-check-input" />
                    <label for="nothing" class="form-check-label">Nothing</label>
                </div>
            </div>

            <!-- Radio Buttons: How do you learn? -->
            <div class="mb-3">
                <label class="form-label">How do you learn?</label>
                <div class="form-check">
                    <input type="radio" id="video" value="Video Courses" v-model="formData.learningMethod" class="form-check-input" />
                    <label for="video" class="form-check-label">Video Courses</label>
                </div>
                <div class="form-check">
                    <input type="radio" id="blogs" value="Blogs" v-model="formData.learningMethod" class="form-check-input" />
                    <label for="blogs" class="form-check-label">Blogs</label>
                </div>
                <div class="form-check">
                    <input type="radio" id="other" value="Other" v-model="formData.learningMethod" class="form-check-input" />
                    <label for="other" class="form-check-label">Other</label>
                </div>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="btn btn-primary w-100">Send Data</button>
        </form>
    </div>
</template>

<script setup>
import { reactive } from "vue";

const formData = reactive({
    name: "",
    age: 0,
    source: "Google",
    interests: [],
    learningMethod: "Video Courses",
    namevalid: "",
});

const saveData = async () => {
    // 檢查表單是否已填寫
    if (formData.name === "" || formData.age === 0) {
        alert("請填寫所有必填欄位");
        return;
    }
    alert(`
        資料已傳送
        name：${formData.name}
        age：${formData.age}
        source：${formData.source}
        interests${formData.interests}
        learningMethod：${formData.learningMethod}
        namevalid：${formData.namevalid}
    `);
};
</script>
