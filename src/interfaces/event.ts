export interface Event {
  id: number
  name: string
  date: Date
  zipCode: string
  capacity: number
  onlyAdults: boolean
}

export interface CreateEvent {
  name: string
  date: Date
  zipCode: string
  capacity: number
  onlyAdults: boolean
}

export interface EventUpdate {
  name: string
  date: Date
  zipCode: string
  capacity: number
  onlyAdults: boolean
}
