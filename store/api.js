export const state = () => ({
  counter: 0,
  token: '',
  response: {
    success: true,
    data: {
      entities: [
      ],
      pagination: {
        total: 17,
        count: 10,
        per_page: 10,
        current_page: 1,
        total_pages: 2,
        links: {
          next: 'http://sys-dev.searchandstay.com/api/admin/house_rules?page=2',
          prev: null,
        },
      },
    },
    message: 'Entities retrieved successfully.',
  },
})

export const getters = {
  getCounter(state) {
    return state.counter
  },
  getResponse(state) {
    return state.response
  },
  getToken(state) {
    return state.token
  },
}

export const mutations = {
   updateList(state, response) {
    state.response = response
  },
  updateToken(state, token) {
    state.token = token
  },
}

export const actions = {
   async fetchList({ state }, newpage) {
    this.$axios.setToken(state.token, 'Bearer')
    const res = await this.$axios.$get(`house_rules?page=${newpage}`)
    this.commit('api/updateList', res)
  
  },
  setToken() {
    console.log('token')
    const token = '40fe071962846075452a4f6123ae71697463cad20f51e237e2035b41af0513d8'
    this.commit('api/updateToken', token)
  },

  async updateItem({ state }, item) {
    this.$axios.setToken(state.token, 'Bearer')
    try{
      await this.$axios.$put(`house_rules/${item.id}`, {
        "house_rules": {
            "name": item.name,
            "active": item.active,
        }
      })
      this.dispatch('api/fetchList', state.response.data.pagination.current_page)
    } catch (e) {
      console.log(e)
    }
  },
  async createItem({ state }, item) {
    this.$axios.setToken(state.token, 'Bearer')
    try{
      await this.$axios.$post(`house_rules`, {
        "house_rules": {
            "name": item.name,
            "active": item.active,
        }
      })
      this.dispatch('api/fetchList', state.response.data.pagination.current_page)
    }
    catch (e) {
      console.log(e)
    }
  },
  async deleteItem({ state }, item) {
    this.$axios.setToken(state.token, 'Bearer')
    try{
      await this.$axios.$delete(`house_rules/${item.id}`)
      this.dispatch('api/fetchList', state.response.data.pagination.current_page)
    } catch (e) {
      console.log(e)
    }
  },
}
