// import { useEffect } from "react"
// import { productData } from "./Data"

function Pagination({handleClickNumber, handleClickButton, pageNumber, products}){

    // useEffect(() => products = productData,[])

    return(
        <div className="pagination">
            {pageNumber !== 1 && <button className="prev" onClick={handleClickButton} > «Prev </button>}

            {products.map((item, index) => ((index)%10 === 0) && <span key={Math.floor(index/10+1)} id={Math.floor(index/10+1)} onClick={handleClickNumber} 
                style={{color:pageNumber === Math.floor(index/10) + 1? "red": "green", margin: 10, cursor: "pointer"}}>
                {index/10+1}
            </span>)}     
                   
            {pageNumber !== (Math.floor(products.length/10) + 1) && <button className="next" onClick={handleClickButton} > Next» </button>}
        </div> 
    )
}

export default Pagination