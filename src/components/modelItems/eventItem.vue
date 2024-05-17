<script setup lang="ts">
import { computed, defineProps } from 'vue';

const props = defineProps<{
  eventId: number,
  eventName: string,
  eventDate: Date,
  eventZipCode: string,
  eventCapacity: number,
  eventOnlyAdults: boolean
}>();

const transformDate = computed(() => {
  if(props.eventDate){
    const date = new Date(props.eventDate)
    return date.toLocaleDateString()
  }
  return ''
})

const transformOnlyAdults = computed(() => {
  if(props.eventOnlyAdults){
    return 'Yes'
  }
  return 'No'
})
</script>

<template>
  <div class="eventContainer">
    <div class="eventContainer__imgInfo">
      <div class="eventContainer__image">
        <img src="../../assets/img/imgEventExample.jpg" alt="Event image">
      </div>
      <div class="eventContainer__info">
        <v-card>
          <h1>Event info</h1>
          <div class="eventContainer__property">
            <h4>Id:</h4>
            <p>{{ eventId }}</p>
          </div>
          <div class="eventContainer__property">
            <h4>Name:</h4>
            <p>{{ eventName }}</p>
          </div>
          <div class="eventContainer__property">
            <h4>Date:</h4>
            <p>{{ transformDate }}</p>
          </div>
          <div class="eventContainer__property">
            <h4>Zip code:</h4>
            <p>{{ eventZipCode }}</p>
          </div>
          <div class="eventContainer__property">
            <h4>Capacity:</h4>
            <p>{{ eventCapacity }}</p>
          </div>
          <div class="eventContainer__property">
            <h4>Only adults:</h4>
            <p>{{ transformOnlyAdults }}</p>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.eventContainer {
  margin: 20px;
}

.eventContainer__imgInfo {
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

.eventContainer__imgInfo h1 {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  color: #41b883;
}

img {
  width: 60%;
  border: green 5px solid;
  border-radius: 5px;
}

.eneventContainer__image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  min-width: 300px;
}

.eventContainer__info {
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

.eventContainer__property {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid black;
}


</style>
  