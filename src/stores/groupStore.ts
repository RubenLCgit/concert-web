import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { CreateGroup, Group, GroupUpdate } from '@/interfaces/group'

export const useGroupStore = defineStore('groupStore', () => {
  
  const groups = ref<Group[]>([])
  const group = ref<Group>()
  const numberOfGroups = ref<number>(0)

  const createGroup = async (group: CreateGroup) => {
    const res = await fetch('http://localhost:5181/Group', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(group)
    })
    const data = await res.json()
    groups.value.push(data)
  }

  const getGroups = async () => {
    const res = await fetch('http://localhost:5181/Group')
    const data = await res.json()
    groups.value = data
    numberOfGroups.value = data.length
  }

  const getGroup = async (idGroup: string) => {
    const res = await fetch(`http://localhost:5181/Group/${idGroup}`)
    const data = await res.json()
    group.value = data
  }

  const modifyGroup = async (idGroup: string, group: GroupUpdate) => {
    const indexGroup = groups.value.findIndex(
      (group: Group) => group.id.toString() === idGroup
    )
    await fetch(`http://localhost:5181/Group/${idGroup}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(group)
    })
    if (indexGroup !== -1) {
      groups.value[indexGroup] = convertGroupUpdateToGroup(
        group,
        groups.value[indexGroup]
      )
    }
  }

  const deleteGroup = async (idGroup: string) => {
    await fetch(`http://localhost:5181/Group/${idGroup}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    groups.value = groups.value.filter((group: Group) => group.id.toString() !== idGroup)
  }

  const convertGroupUpdateToGroup = (groupUpdate: GroupUpdate, group: Group): Group => {
    return {
      id: group.id,
      name: groupUpdate.name,
      password: groupUpdate.password,
      createdOn: group.createdOn,
      explicitContent: groupUpdate.explicitContent,
      genre: groupUpdate.genre
    }
  }

    return { groups, group, numberOfGroups, createGroup ,getGroups, getGroup, modifyGroup, deleteGroup }
})

