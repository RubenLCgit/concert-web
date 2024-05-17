<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useEventStore } from '@/stores/eventStore';
import eventItem from '@/components/modelItems/eventItem.vue';

const eventStore = useEventStore();
const { events } = storeToRefs(eventStore);
const { getEvents } = eventStore;

getEvents();
</script>

<template>
  <div class="eventsContainer">
    <h1>Registered events</h1>
    <div class="eventsContainer__list">
      <ul class="eventsContainer__ul">
        <li v-for="event in events" :key="event.id">
          <eventItem
            :eventId = "event.id"
            :eventName = "event.name"
            :eventDate = "event.date"
            :eventZipCode = "event.zipCode"
            :eventCapacity = "event.capacity"
            :eventOnlyAdults = "event.onlyAdults"
          ></eventItem>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">

.eventsContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.eventsContainer h1 {
  text-decoration:solid underline; 
  text-align: center;
}

.eventsContainer__list {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.eventsContainer__ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
