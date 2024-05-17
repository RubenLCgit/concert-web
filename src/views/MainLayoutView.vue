<script setup lang="ts">
import { RouterView } from 'vue-router'
import navLayout from '../components/layout/navLayout.vue';
import headerLayout from '../components/layout/headerLayout.vue';
import footerLayout from '../components/layout/footerLayout.vue';
</script>

<template>
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
</template>

<style scoped lang="scss">
@use '../assets/sass/_mixins' as mixins;
header {
  @include mixins.headerFooter-colour;
}
main {
  padding: 20px;
}
footer {
  @include mixins.headerFooter-colour;
}
</style>