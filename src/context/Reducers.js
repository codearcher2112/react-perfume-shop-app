export const basketReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return { ...state, basket: [...state.basket, { ...action.payload, qty: 1 }]};
        case "REMOVE_FROM_BASKET":
            return { ...state, basket: state.basket.filter(item => item.id !== action.payload.id)};
        default:
            return state;
    }
}