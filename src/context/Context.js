import {createContext, useContext, useReducer} from "react";
import {basketReducer} from "./Reducers";

const Basket = createContext();

const Context = ({ children }) => {
    // Change below after add proper data
    const products = [
        {
            id: '1',
            name: 'Chanel 1',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, veniam? 1',
            price: '30$',
            imgSrc: '../../assets/images/PikPng.com_perfume-png_1269742.png',
            inStock: 8,
            fastDelivery: true,
            ratings: 3,
        },
        {
            id: '2',
            name: 'Chanel 2',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, veniam? 2',
            price: '40$',
            imgSrc: '../../assets/images/PikPng.com_perfume-png_1269742.png',
            inStock: 0,
            fastDelivery: false,
            ratings: 5,
        },
        {
            id: '3',
            name: 'Chanel 3',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, veniam? 3',
            price: '50$',
            imgSrc: '../../assets/images/PikPng.com_perfume-png_1269742.png',
            inStock: 7,
            fastDelivery: true,
            ratings: 4,
        },
        {
            id: '4',
            name: 'Chanel 4',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, veniam? 4',
            price: '60$',
            imgSrc: '../../assets/images/PikPng.com_perfume-png_1269742.png',
            inStock: 9,
            fastDelivery: false,
            ratings: 2,
        }
    ]

    const [state, dispatch] = useReducer(basketReducer, {
        products: products,
        basket: [],
    })

    return (
        <Basket.Provider value={{state, dispatch}}>
            { children }
        </Basket.Provider>
    )
}

export default Context;

export const BasketState = () => {
    return useContext(Basket)
}