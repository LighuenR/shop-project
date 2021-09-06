export default {
    state: {
        products:[],
        drawer: false,
    },
    mutations: {
        ADD_PRODUCT_TO_CART(state, product) {
            state.products.push(product)
        }
    },
    actions: {
    },
    getters: {
        cartProducts: state => state.products
    },
    modules: {
    }
  }
  