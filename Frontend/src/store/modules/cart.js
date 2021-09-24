export default {
    state: {
        products:[],
        drawer: false,
    },
    mutations: {
        ADD_PRODUCT_TO_CART(state, product) {
            state.products.push(product)
        },
        CART_PRODUCTS(state, newCart){
            state.products = newCart
        }
    },
    actions: {
        REMOVE_PRODUCT_FROM_CART({commit, state}, id) {
            const newCart = state.products.filter(el => el._id !== id)
            commit('CART_PRODUCTS', newCart)
        }
    },
    getters: {
        cartProducts: state => state.products,
        cartTotal: state => state.products.reduce((acc, elem) => {
            return acc += elem.price
        }, 0)
    },
    modules: {
    }
  }
  