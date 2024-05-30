import api from "@/lib/axios"

export default {
  all() {
    return api.get('/menu')
  },
  getById(id) {
    return api.get(`/menu/${id}`)
  },
  store(data) {
    return api.post('/menu', data)
  },
  update(id, data) {
    return api.patch(`/menu/${id}`, data)
  },
  delete(id) {
    return api.delete(`/menu/${id}`)
  }
}
