import * as cartActionTypes from '../actionTypes/cartActionType';
import fakeApi from '../../translate/fakeApi.json'

const INITIAL_STATE = {
    products: fakeApi.product,
    cart: [],
    currentItem: null,
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.ADD_TO_CART:
            // Get the items data from the products array
            const item = state.products.find(product => product.id === action.payload.id)
            // edit action.payload.id ===
            // Check if item is in cart already
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)
            return {
                ...state,
                cart: inCart ? state.cart.map(item => item.id === action.payload.id ? {
                    ...item,
                    qty: item.qty

                } : item) : [...state.cart, {
                    ...item,
                    qty: 1
                }]

            }

            case cartActionTypes.REMOVE_FROM_CART:
                return {
                    ...state,
                    cart: state.cart.filter(item => item.id !== action.payload.id)
                }
                case cartActionTypes.ADJUST_QTY:
                    return {
                        ...state,
                        cart: state.cart.map(item => item.id === action.payload.id ? {
                            ...item,
                            qty: 0
                        } : item)
                    }
                    case cartActionTypes.LOAD_CURRENT_ITEM:
                        return {
                            ...state,
                            currentItem: action.payload
                        }
                        default:
                            return state;
    }
}

export default cartReducer;