import { defineStore } from "pinia"
import { ref } from "vue"

export const useUserStore = defineStore('user', () => {
  const userInfo = ref({
    userName : '',
    email: ''
  },
)

  const token = ref('')

const clearUserInfo = () => {
    userInfo.value = {
        userName : '',
        email: ''
    }
    token.value = ''
}
  //3 以对象的格式将state和action return出去
  return {
      userInfo,
      clearUserInfo,
      token
  }
},
{
  persist: true 
})