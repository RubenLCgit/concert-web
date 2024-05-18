<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '../../stores/authStore';

const authStore = useAuthStore();

const { isLogged } = storeToRefs(authStore);

</script>

<template>
  <div v-if="isLogged" class="buttonCreated">
    <RouterLink to="/registerEvent">
      <v-btn class="buttonCreate" color="green">Create</v-btn>
    </RouterLink>
  </div>
</template>


<style scoped lang="scss">
.buttonCreated {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
}
</style>