export default {
    state: {
        products:[],
        drawer: false,
    },
    mutations: {
        ADD_PRODUCT_TO_CART(state, product) {
            state.prodcuts.push(product)
        }
    },
    actions: {
    },
    modules: {
    }
  }
  