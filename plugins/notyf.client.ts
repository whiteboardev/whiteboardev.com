import { Notyf } from 'notyf'

export default defineNuxtPlugin(nuxtApp => {
  const notyf = new Notyf({
    duration: 3000,
  })
  return {
    provide: {
      notyf
    }
  }
})