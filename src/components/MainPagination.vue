<script setup>
import { ref } from 'vue'
const pages = ref(10)
const activePage = ref(2)

const prevPage = () => {
    if (activePage.value > 1) {
        activePage.value--
    }
    console.log(activePage.value)
}

const nextPage = () => {
    if (activePage.value < pages.value) {
        activePage.value++
    }
    console.log(activePage.value)

}


</script>

<template>
    <div class="flex justify-center gap-4 p-8">
        <button @click="prevPage" :disabled="activePage === 1" 
            class="pagination-button"
        >
            PREV
        </button>

        <button 
            v-for="page in pages" 
            :key="page" 
            class="pagination-button" 
            :class="page === activePage ? 'active-page' : ''"
        >
            {{ page }}
        </button>

        <button @click="nextPage" :disabled="activePage === pages" class="pagination-button">NEXT</button> 
    </div>
</template>

<style scoped>

.pagination-button {
    background: #1a1a2e; 
    border: 1px solid #007cf0; 
    color: white;
    padding: 10px 15px;
    border-radius: 5px;
    font-weight: bold;
    transition: 0.3s ease-in-out;
    cursor: pointer;
}

.pagination-button:hover {
    background: #0f3460; 
}

.active-page {
    background: #007cf0;
    color: white;
    border: 1px solid #0056b3;
}

.pagination-button:disabled {
    background: #333;
    color: #777;
    cursor: not-allowed;
    border-color: #444;
}
</style>