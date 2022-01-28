import { useState, useEffect } from "react";
import Pagination from "./pagination";
import Products from "./products";
import Filter from "./filter";
import './styles.css';
import {productData} from '../../data';
import Search from "../Search/Search";

function ProductList() {
  const [products, setProducts] = useState([])
  const [renderedProducts, setRenderProducts] = useState([])
  const [pageNumber, setPageNumber] = useState(1)  
  const [filterInfo, setFilterInfo] = useState({
    Armani: false,
    brand2: false,
    brand3: false,
    brand4: false,
    brand5: false,
    brand6: false,
    fastDelivery: false,
    min: 0,
    max: 0,
    rate: 0,
    sort: 0
  })
  const [inputValue, setInputValue] = useState("");
  
  

  const handleClickNumber = (e) => {
    setPageNumber(Number(e.target.id))
  }

  const handleClickButton = (e) => {
    if(e.target.className === 'prev'){
      pageNumber > 1? setPageNumber(pageNumber-1): setPageNumber(pageNumber)  
    }else{
      pageNumber < products.length/10? setPageNumber(pageNumber+1): setPageNumber(pageNumber)
    }
  }

  const handleChangeChBox = (e) => {
    setFilterInfo(filterInfo, filterInfo[e.target.id] = !filterInfo[e.target.id])
  }

  const handleChangePrice = (e) => {
    if(Number(e.target.value[0]) === 0){
      e.target.value = ''
    }

    if(e.target.id === 'max'){
      if(filterInfo.min >= Number(e.target.value)){
        e.target.value = filterInfo.min
      }
    }

    if(e.target.value.length > 3){
      e.target.value = e.target.value.slice(0, 3)
    }
      
    if(e.target.value < 0){
      e.target.value = 0
    }

    setFilterInfo(filterInfo, filterInfo[e.target.id] = Number(e.target.value))
  }

  const handleChangeRate = (e) => {
    setFilterInfo(filterInfo, filterInfo.rate = Number(e.target.value))
  }

  const handleChangeSort = (e) => {
    if(Number(e.target.value) === 1){
      setFilterInfo(filterInfo, filterInfo.sort = 1)
    }else if(Number(e.target.value) === 2){
      setFilterInfo(filterInfo, filterInfo.sort = -1)
    }else{
      setFilterInfo(filterInfo, filterInfo.sort = 0)
    }
  }

  const handleClickFilterBtn = () => {
    let result = []
    if(filterInfo.Armani){
      result.push(...productData.filter(item => item.brand === 'Armani'))
    }
    if(filterInfo.Chanel){
      result.push(...productData.filter(item => item.brand === 'Chanel'))
    }
    if(filterInfo.Hugo){
      result.push(...productData.filter(item => item.brand === 'Hugo'))
    }
    if(filterInfo.brand4){
      result.push(...productData.filter(item => item.brand === 'brand 4'))
    }
    if(filterInfo.brand5){
      result.push(...productData.filter(item => item.brand === 'brand 5'))
    }
    if(filterInfo.brand6){
      result.push(...productData.filter(item => item.brand === 'brand 6'))
    }
    
    if(result.length === 0){
      result.push(...productData)
    }

    if(filterInfo.fastDelivery){
      result = result.filter(item => (item.fastDelivery))
    }

    switch(filterInfo.rate){
      case 1:
        result = result.filter(item => (item.ratings === 1))
        break
      case 2:
        result = result.filter(item => (item.ratings === 2))
        break
      case 3:
        result = result.filter(item => (item.ratings === 3))
        break
      case 4:
        result = result.filter(item => (item.ratings === 4))
        break
      case 5:
        result = result.filter(item => (item.ratings === 5))
        break
      default:
        // result = productData
        break
    }

    if(filterInfo.sort === 1){
      result.sort((a, b) => a.price - b.price)
    }else{
      result.sort((a, b) => b.price - a.price)
    }
    
    if(filterInfo.min !==0 && filterInfo.max!==0){
      result = result.filter(item => (item.price >= filterInfo.min && item.price <= filterInfo.max))
    }
    
    setProducts(result)
  }

  useEffect(() => setRenderProducts(products.filter((item, index) => index+1 <=10 * pageNumber && index+1 > 10 * pageNumber-10)), [pageNumber, products])

  useEffect(() => setProducts(productData), [])

  const inputHandleChange = (e) => {
    setInputValue(e.target.value)
    let filteredData = []
    if(e.target.value.length > 2){
      filteredData = productData.filter(item => item.brand.toLowerCase().includes(e.target.value))
      setProducts(filteredData) 
    }
    if(e.target.value.length === 0){
      setProducts(productData)
    }
  }

  return (
    <div className="filterContainer">      
      <div className="container filter-container">
        <aside className="aside">
          <Search inputValue={inputValue} inputHandleChange={inputHandleChange}/>
          <Filter handleChangeChBox={handleChangeChBox} handleChangePrice={handleChangePrice} handleClickFilterBtn={handleClickFilterBtn} handleChangeRate={handleChangeRate} handleChangeSort={handleChangeSort}/>
        </aside>
        <div className="aside-left">
          <Products renderedProducts={renderedProducts}/>
          <Pagination handleClickNumber={handleClickNumber} handleClickButton={handleClickButton} pageNumber={pageNumber} products={products} />
        </div>
      </div>
    </div>
  )
}

export default ProductList;