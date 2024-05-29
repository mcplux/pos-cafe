import api from "@/lib/axios"

export default {
  all() {
    return api.get('/menu')
  },
  store(data) {
    return api.post('/menu', data)
  }
}
