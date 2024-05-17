<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="header__nav">
    <RouterLink to="/"><v-btn color="#333333" class="header__btn">Groups</v-btn></RouterLink>
    <RouterLink to="/event"><v-btn color="#333333" icon="mdi-calendar" size="x-large"></v-btn></RouterLink>
  </div>
</template>


<style scoped lang="scss">
@use '../../assets/sass/mixins' as mixins;
.header__nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
}

.header__btn {
  @include mixins.button-nav;
}
</style>