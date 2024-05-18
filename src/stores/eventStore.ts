import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { CreateEvent, Event, EventUpdate } from '@/interfaces/event'

export const useEventStore = defineStore('eventStore', () => {
  
  const events = ref<Event[]>([])
  const event = ref<Event>()
  const numberOfEvents = ref<number>(0)

  const createEvent = async (event: CreateEvent) => {
    const res = await fetch('http://localhost:5181/Event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(event)
    })
    const data = await res.json()
    events.value.push(data)
  }

  const getEvents = async () => {
    const res = await fetch('http://localhost:5181/Event')
    const data = await res.json()
    events.value = data
    numberOfEvents.value = data.length
    console.log(events.value);
    
  }

  const getEvent = async (idEvent: string) => {
    const res = await fetch(`http://localhost:5181/Event/${idEvent}`)
    const data = await res.json()
    event.value = data
  }

  const modifyEvent = async (idEvent: string, event: EventUpdate) => {
    const indexEvent = events.value.findIndex(
      (event: Event) => event.id.toString() === idEvent
    )
    await fetch(`http://localhost:5181/Event/${idEvent}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(event)
    })
    if (indexEvent !== -1) {
      events.value[indexEvent] = convertEventUpdateToEvent(
        event,
        events.value[indexEvent]
      )
    }
  }

  const deleteEvent = async (idEvent: string) => {
    await fetch(`http://localhost:5181/Event/${idEvent}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    events.value = events.value.filter(
      (event: Event) => event.id.toString() !== idEvent
    )
  }

  const convertEventUpdateToEvent = (eventUpdate: EventUpdate, event: Event): Event => {
    return {
      id: event.id,
      name: eventUpdate.name,
      date: eventUpdate.date,
      zipCode: eventUpdate.zipCode,
      capacity: eventUpdate.capacity,
      onlyAdults: eventUpdate.onlyAdults
    }
  }

  return {
    events,
    event,
    numberOfEvents,
    createEvent,
    getEvents,
    getEvent,
    modifyEvent,
    deleteEvent
  }
})