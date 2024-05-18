import { ref } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import { useGroupStore } from './groupStore'



export const useAuthStore = defineStore('authStore', () => {
  
  const groupStore = useGroupStore()
  const { group } = storeToRefs(groupStore)
  const { getGroup } = groupStore
  const isLogged = ref<boolean>(localStorage.getItem('isLogged') === 'true') ?? false;
  const nameGroup = ref<string>(localStorage.getItem('nameGroup') ?? '')
  const password = ref<string>('')
  const idGroup = ref<number>(0)

  const login = async (groupName: string, groupPassword: string) => {
    const res = await fetch('http://localhost:5181/Auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: groupName, password: groupPassword })
    })
    const data = await res.json()
    if (data) {
      isLogged.value = true
      idGroup.value = data.id
      await getGroup(data.id.toString())
      
      if (group.value) {
        nameGroup.value = group.value.name
        localStorage.setItem('nameGroup', group.value.name)
        localStorage.setItem('isLogged', isLogged.value.toString())
        localStorage.setItem('idGroup', idGroup.value.toString())
      }
    }
  }

  const logout = () => {
    isLogged.value = false
    idGroup.value = 0
    localStorage.removeItem('idGroup')
    localStorage.removeItem('isLogged')
    localStorage.removeItem('nameGroup')
  }

  return {
    isLogged,
    nameGroup,
    password,
    login,
    logout
  }
})