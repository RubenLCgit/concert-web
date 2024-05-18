<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore()

const { isLogged } = storeToRefs(authStore)

const logoutAndRedirect = async () => {
  await useAuthStore().logout()
}
</script>

<template>
  <div v-if="!isLogged" class="groupButtons">
    <RouterLink to="/register">
      <v-btn density="compact" color="green">Register</v-btn>
    </RouterLink>
    <RouterLink to="/login">
      <v-btn density="compact" color="green">Login</v-btn>
    </RouterLink>
  </div>
  <div v-else>
    <div class="logued">
      <v-btn class="v-btn" @click="logoutAndRedirect" color="red">Logout</v-btn>
    </div>
  </div>
</template>

<style scoped>
.groupButtons {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin: 10px;
}

.logued {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin: 10px;
}

.v-btn {
  min-width: 120px;
}
</style>
