import ProductItem from '../ProductItem/ProductItem';
import React from 'react';

function Products({renderedProducts}){
    // console.log('products into PRODUCT', renderedProducts);

    return(
        <div className="container">
            <div className="products__wrapper">
                {renderedProducts.map((prod, index) => (index < 10) && <ProductItem key={prod.id} prod={prod}/>)}
            </div>
        </div>
    )
}

export default Products;