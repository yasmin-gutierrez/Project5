<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useAuth } from '../composables/useAuth'

const { login, logout } = useAuth()

const router = useRouter()
const route = useRoute()

const username = ref('')
const password = ref('')

const logUserIn = async () => {
    if (await login(username.value, password.value)) {
        if (route.query.redirect) {
            router.push(route.query.redirect)
        } else {
            router.push({name: 'SettingsPage'})
        }
    } else {
        logout()
    }
}
</script> 

<template>
    <form class="m-10 p-6 form" @submit.prevent>
        <div>
            <label for="username" class="block mb-2 font-bold text-blue-300">Username</label>
            <input id="username" v-model="username" type="text" placeholder="Enter your username" class="input">
        </div>
        <div class="mt-4">
            <label for="password" class="block mb-2 font-bold text-blue-300">Password</label>
            <input id="password" v-model="password" type="password" placeholder="Enter your password" class="input"> 
        </div>

        <button @click="logUserIn" class="button mt-6">LOGIN</button>
    </form>
</template>

<style scoped>

.form {
    background: #1a1a2e; 
    border: 2px solid #007cf0; 
    border-radius: 10px;
    width: 300px;
    margin: auto;
}

.input {
    width: 100%;
    padding: 10px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid #007cf0;
    border-radius: 5px;
    color: white;
    outline: none;
    transition: 0.3s;
}

.input::placeholder {
    color: rgba(255, 255, 255, 0.5);
}

.input:focus {
    border-color: #00dfd8;
}

.button {
    width: 100%;
    padding: 10px;
    background: #007cf0;
    border: none;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    transition: 0.3s ease-in-out;
    cursor: pointer;
}

.button:hover {
    background: #0056b3;
}
</style>