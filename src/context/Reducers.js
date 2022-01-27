export const basketReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return { ...state, basket: [...state.basket, { ...action.payload, qty: 1 }]};
        case "REMOVE_FROM_BASKET":
            return { ...state, basket: state.basket.filter(item => item.id !== action.payload.id)};
        case "CHANGE_BASKET_QTY":
            return {...state,
                    basket: state.basket.filter(item =>
                            item.id === action.payload.id ? item.qty = action.payload.qty : item.qty
                        ),
                    };
        default:
            return state;
    }
}

export const productReducer = (state, action) => {
    switch (action.type) {
        case "SORT_BY_PRICE":
            return { ...state, sort: action.payload };
        case "FILTER_BY_STOCK":
            return { ...state, byStock: !state.byStock };
        case "FILTER_BY_DELIVERY":
            return { ...state, byFastDelivery: !state.byFastDelivery };
        case "FILTER_BY_RATING":
            return { ...state, byRating: action.payload };
        case "FILTER_BY_SEARCH":
            return { ...state, searchQuery: action.payload };
        case "CLEAR_FILTERS":
            return {
                byStock: false,
                byFastDelivery: false,
                byRating: 0,
                searchQuery: "",
            };
        default:
            return state;
    }
}