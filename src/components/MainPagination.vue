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

        <button @click="prevPage" :disabled="activePage === 1" class="">PREV</button>

        <button v-for="page in pages" :key="page" > {{ page }}</button>

        <button @click="nextPage" :disabled="activePage === pages" class="">NEXT</button> 

    </div>

</template>