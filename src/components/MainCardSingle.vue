<script setup>
    import { faker } from '@faker-js/faker'
    const firstname = faker.person.firstName()
    const lastname = faker.person.lastName()
    const jobtitle = faker.person.jobTitle()
    
    const username = faker.internet.userName({firstName:firstname, lastName:lastname}).toLowerCase()

    const date = faker.date.past({ years: 2 }).toLocaleDateString() 
    const time = faker.date.recent().toLocaleTimeString() 
</script>

<template>
    <RouterLink :to="{name: 'CardDetail', params: {id: username}}">
        <div class="border border-blue-700 rounded-lg shadow-md bg-gray-900 text-white h-full">
            <img class="object-fill h-480 w-960 rounded-t-lg" v-bind:src="faker.image.urlLoremFlickr({category: 'clock' , height: 480, width: 960})" />
            <div class="p-4">
                <p class="mb-2 text-2xl font-bold text-blue-300">{{ firstname }} {{ lastname }}</p>
                <p class="mb-3 font-medium text-gray-400">{{ jobtitle }}</p>
                

                <p class="mt-4 text-sm text-gray-500">Date: {{ date }}</p>
                <p class="text-sm text-gray-500">Time: {{ time }}</p>
            </div>
        </div>
    </RouterLink>   
</template>

<style scoped>
.border {
    border-width: 2px;
}

.text-blue-300 {
    color: #007cf0; 
}

.text-gray-400 {
    color: #b0b0b0; 
}

.shadow-md {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); 
}
</style>