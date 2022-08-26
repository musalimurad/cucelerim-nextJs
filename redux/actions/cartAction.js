import * as  cartActionType from '../actionTypes/cartActionType';

export const addToCart = (itemID) => {
    return{
        type: cartActionType.ADD_TO_CART,
        payload: {
            id: itemID
            
        }
    }

};

export const removeFromCart = (itemID) => {
    return{
        type: cartActionType.REMOVE_FROM_CART,
        payload: {
            id: itemID
        }
    }
};

export const adjustQty = (itemID, value) => {
    return{
        type: cartActionType.ADJUST_QTY,
        payload: {
            id: itemID,
            qty: value
        }
    }
};

export const loadCurrentItem = (item) => {
    return {
        type: cartActionType.LOAD_CURRENT_ITEM,
        payload: item
    }
};


