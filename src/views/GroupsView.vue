<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useGroupStore } from '@/stores/groupStore';
import groupItem from '@/components/modelItems/groupItem.vue';
import loginRegister from '../components/layout/loginRegister.vue';
import { computed } from 'vue';
import { useAuthStore } from '../stores/authStore'

const authStore = useAuthStore();

const { isLogged, nameGroup } = storeToRefs(authStore);

const groupStore = useGroupStore();
const { groups } = storeToRefs(groupStore);
const { getGroups } = groupStore;

getGroups();

const actualiceNameGroup = computed(() => {
  return nameGroup.value;
})

</script>

<template>
  <div class="groupsContainer">
    <loginRegister></loginRegister>
    <h1>Registered music groups</h1>
    <h3 v-if="isLogged">Wellcome {{ actualiceNameGroup }}</h3>
    <div class="groupsContainer__list">
      <ul class="groupsContainer__ul">
        <li v-for="group in groups" :key="group.id">
          <groupItem
            :groupId = "group.id"
            :groupName = "group.name"
            :groupCreatedOn = "group.createdOn"
            :groupExplicitContent = "group.explicitContent"
            :groupGenre = "group.genre"
          ></groupItem>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">

.groupsContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.groupsContainer h1 {
  text-decoration:solid underline; 
  text-align: center;
}

.groupsContainer__list {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.groupsContainer__ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
