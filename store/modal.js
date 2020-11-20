export const store = () => ({
  show: false 
})

export const mutations = {
  toggle(state) {
    console.log('before', state)
    state.show = !state.show
    console.log('after', state)
  }
}