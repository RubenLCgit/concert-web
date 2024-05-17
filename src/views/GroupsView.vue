<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useGroupStore } from '@/stores/groupStore';
import groupItem from '@/components/modelItems/groupItem.vue';

const groupStore = useGroupStore();
const { groups } = storeToRefs(groupStore);
const { getGroups } = groupStore;

getGroups();

</script>

<template>
  <div class="groupsContainer">
    <h1>Registered music groups</h1>
    <div class="groupsContainer__list">
      <ul class="groupsContainer__ul">
        <li v-for="group in groups" :key="group.Id">
          <groupItem
            :groupId = "group.Id"
            :groupName = "group.Name"
            :groupPassword = "group.Password"
            :groupCreatedOn = "group.CreatedOn"
            :groupExplicitContent = "group.ExplicitContent"
            :groupGenre = "group.Genre"
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
