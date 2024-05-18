<script setup lang="ts">
import { computed, defineProps } from 'vue';

const props = defineProps<{
  groupId: number,
  groupName: string,
  groupCreatedOn: Date,
  groupExplicitContent: boolean,
  groupGenre: string
}>();

const transformDate = computed(() => {
  if(props.groupCreatedOn){
    const date = new Date(props.groupCreatedOn)
    return date.toLocaleDateString()
  }
  return ''
})

const transformExplicitContent = computed(() => {
  if(props.groupExplicitContent){
    return 'Yes'
  }
  return 'No'
})
</script>

<template>
  <div class="groupContainer">
    <div class="groupContainer__imgInfo">
      <div class="groupContainer__image">
        <img src="../../assets/img/imgGroupExample.jpg" alt="Group image">
      </div>
      <div class="groupContainer__info">
        <v-card>
          <h1>Group info</h1>
          <div class="groupContainer__property">
            <h4>Id:</h4>
            <p>{{ groupId }}</p>
          </div>
          <div class="groupContainer__property">
            <h4>Name:</h4>
            <p>{{ groupName }}</p>
          </div>
          <div class="groupContainer__property">
            <h4>Created on:</h4>
            <p>{{ transformDate }}</p>
          </div>
          <div class="groupContainer__property">
            <h4>Explicit content:</h4>
            <p>{{ transformExplicitContent }}</p>
          </div>
          <div class="groupContainer__property">
            <h4>Genre:</h4>
            <p>{{ groupGenre }}</p>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.groupContainer {
  margin: 20px;
}

.groupContainer__imgInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 1rem;
  background-color: #542f7b;
  border: black 2px solid;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  border-radius: 5px;
  max-width: 500px;
  text-align: center;
}

.groupContainer__imgInfo h1 {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  color: #41b883;
}

img {
  width: 60%;
  border: green 5px solid;
  border-radius: 5px;
}

.groupContainer__image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  min-width: 300px;
}

.groupContainer__info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  min-width: 300px;
}

.v-card {
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);
  border: black 2px solid;
  width: 100%;
  min-width: 300px;
}

h4, p {
  width: 45%;
}

.groupContainer__property {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid black;
}

</style>