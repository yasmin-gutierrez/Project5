<script setup>
import { useAuth } from '../composables/useAuth'
const { isAuthenticated, logout, user } = useAuth()
</script>

<template>
  <nav class="bg-space-dark h-20 items-center text-white flex justify-center space-x-8">
    <RouterLink :to="{ name: 'Home' }" class="nav-link">Home</RouterLink>
    <RouterLink :to="{ name: 'Other' }" class="nav-link">Other</RouterLink>
    <RouterLink :to="{ name: 'SettingsPage' }" class="nav-link">Settings</RouterLink>

    <div v-if="isAuthenticated" class="flex items-center">
      <span class="mr-2">Welcome {{ user.email }}</span>
      <button @click="logout" class="nav-button bg-red-500 hover:bg-red-700">LOGOUT</button>
    </div>

    <div v-else>
      <RouterLink :to="{ name: 'LoginPage' }" class="nav-link">Login</RouterLink>
    </div>
  </nav>
</template>


<!--<style lang="postcss" scoped>
nav {
  @apply flex justify-center space-x-4;

  & .router-link-active {
    @apply underline underline-offset-4;
  }
}
</style>-->

<style scoped>
.bg-space-dark {
  background: #0f3460; 
  border-bottom: 2px solid #007cf0; 
}

.nav-link {
  color: #007cf0; 
  font-weight: bold;
  transition: 0.3s ease-in-out;
  padding: 10px 15px;
}

.nav-link:hover {
  color: #00dfd8; 
}

/* Button Style */
.nav-button {
  background: #007cf0;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  font-weight: bold;
  transition: 0.3s;
  cursor: pointer;
}

.nav-button:hover {
  background: #0056b3;
}
</style>