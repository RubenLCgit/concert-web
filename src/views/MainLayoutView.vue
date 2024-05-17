<script setup lang="ts">
import { RouterView } from 'vue-router'
import navLayout from '../components/layout/navLayout.vue';
import headerLayout from '../components/layout/headerLayout.vue';
import footerLayout from '../components/layout/footerLayout.vue';
</script>

<template>
  <div class="layoutContainer">
    <header>
    <headerLayout />
    <nav>
      <navLayout />
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <footerLayout />
  </footer>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/sass/_mixins' as mixins;
.layoutContainer {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
header {
  @include mixins.headerFooter-colour;
}
main {
  flex-grow: 1;
}
footer {
  @include mixins.headerFooter-colour;
}
</style>