import {createContext, useContext, useReducer} from "react";
import {basketReducer} from "./Reducers";

const Basket = createContext();

const Context = ({ children }) => {
    // Change below after add proper data
    const products = [
        {
            id: 1,
            brand: "Armani",
            name: "Si",
            prices: 100,
            desc: "Giorgio Armani Sì Eau De Parfum – The Perfume For Women Armani SÌ EAU DE PARFUM is a timeless perfume that is whole-hearted and grounded yet turns into a soft trail that lingers",
            imgSrc: "https://fraguru.com/mdimg/perfume/375x500.18453.jpg",
            inStock: 8,
            fastDelivery: true,
            ratings: 3,
        },
        {
            
            id: 2,
            brand: "Armani",
            name: "Si",
            prices: 100,
            desc: "Giorgio Armani Sì Eau De Parfum – The Perfume For Women Armani SÌ EAU DE PARFUM is a timeless perfume that is whole-hearted and grounded yet turns into a soft trail that lingers",
            imgSrc: "https://fraguru.com/mdimg/perfume/375x500.18453.jpg",
            inStock: 0,
            fastDelivery: false,
            ratings: 5,
        },
        {   id: 3,
            brand: "Armani",
            name: "Si",
            prices: 100,
            desc: "Giorgio Armani Sì Eau De Parfum – The Perfume For Women Armani SÌ EAU DE PARFUM is a timeless perfume that is whole-hearted and grounded yet turns into a soft trail that lingers",
            imgSrc: "https://fraguru.com/mdimg/perfume/375x500.18453.jpg",
            inStock: 7,
            fastDelivery: true,
            ratings: 4,
        },
        {
            id: 4,
            brand: "Armani",
            name: "Si",
            prices: 100,
            desc: "Giorgio Armani Sì Eau De Parfum – The Perfume For Women Armani SÌ EAU DE PARFUM is a timeless perfume that is whole-hearted and grounded yet turns into a soft trail that lingers",
           imgSrc: "https://fraguru.com/mdimg/perfume/375x500.18453.jpg",
            inStock: 9,
            fastDelivery: false,
            ratings: 2,
        },
        {
            id: 5,
            brand: "Armani",
            name: "Si",
            prices: 100,
            desc: "Giorgio Armani Sì Eau De Parfum – The Perfume For Women Armani SÌ EAU DE PARFUM is a timeless perfume that is whole-hearted and grounded yet turns into a soft trail that lingers",
           imgSrc: "https://fraguru.com/mdimg/perfume/375x500.18453.jpg",
            inStock: 9,
            fastDelivery: false,
            ratings: 2,
        },
        {
            id: 6,
            brand: "Armani",
            name: "Si",
            prices: 100,
            desc: "Giorgio Armani Sì Eau De Parfum – The Perfume For Women Armani SÌ EAU DE PARFUM is a timeless perfume that is whole-hearted and grounded yet turns into a soft trail that lingers",
           imgSrc: "https://fraguru.com/mdimg/perfume/375x500.18453.jpg",
            inStock: 9,
            fastDelivery: false,
            ratings: 2,
        },
        {
            id: 7,
            brand: "Armani",
            name: "Si",
            prices: 100,
            desc: "Giorgio Armani Sì Eau De Parfum – The Perfume For Women Armani SÌ EAU DE PARFUM is a timeless perfume that is whole-hearted and grounded yet turns into a soft trail that lingers",
           imgSrc: "https://fraguru.com/mdimg/perfume/375x500.18453.jpg",
            inStock: 9,
            fastDelivery: false,
            ratings: 2,
        },
        {
            id: 8,
            brand: "Armani",
            name: "Si",
            prices: 100,
            desc: "Giorgio Armani Sì Eau De Parfum – The Perfume For Women Armani SÌ EAU DE PARFUM is a timeless perfume that is whole-hearted and grounded yet turns into a soft trail that lingers",
           imgSrc: "https://fraguru.com/mdimg/perfume/375x500.18453.jpg",
            inStock: 9,
            fastDelivery: false,
            ratings: 2,
        },
        {
            id: 9,
            brand: "Armani",
            name: "Si",
            prices: 100,
            desc: "Giorgio Armani Sì Eau De Parfum – The Perfume For Women Armani SÌ EAU DE PARFUM is a timeless perfume that is whole-hearted and grounded yet turns into a soft trail that lingers",
           imgSrc: "https://fraguru.com/mdimg/perfume/375x500.18453.jpg",
            inStock: 9,
            fastDelivery: false,
            ratings: 2,
        },
        {
            id: 10,
            brand: "Armani",
            name: "Si",
            prices: 100,
            desc: "Giorgio Armani Sì Eau De Parfum – The Perfume For Women Armani SÌ EAU DE PARFUM is a timeless perfume that is whole-hearted and grounded yet turns into a soft trail that lingers",
           imgSrc: "https://fraguru.com/mdimg/perfume/375x500.18453.jpg",
            inStock: 9,
            fastDelivery: false,
            ratings: 2,
        },
        {
            id: 11,
            brand: "Armani",
            name: "Si",
            prices: 100,
            desc: "Giorgio Armani Sì Eau De Parfum – The Perfume For Women Armani SÌ EAU DE PARFUM is a timeless perfume that is whole-hearted and grounded yet turns into a soft trail that lingers",
           imgSrc: "https://fraguru.com/mdimg/perfume/375x500.18453.jpg",
            inStock: 9,
            fastDelivery: false,
            ratings: 2,
        },
        {
            id: 12,
            brand: "Armani",
            name: "Si",
            prices: 100,
            desc: "Giorgio Armani Sì Eau De Parfum – The Perfume For Women Armani SÌ EAU DE PARFUM is a timeless perfume that is whole-hearted and grounded yet turns into a soft trail that lingers",
           imgSrc: "https://fraguru.com/mdimg/perfume/375x500.18453.jpg",
            inStock: 9,
            fastDelivery: false,
            ratings: 2,
        },
        {
            id: 13,
            brand: "Armani",
            name: "Si",
            prices: 100,
            desc: "Giorgio Armani Sì Eau De Parfum – The Perfume For Women Armani SÌ EAU DE PARFUM is a timeless perfume that is whole-hearted and grounded yet turns into a soft trail that lingers",
           imgSrc: "https://fraguru.com/mdimg/perfume/375x500.18453.jpg",
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