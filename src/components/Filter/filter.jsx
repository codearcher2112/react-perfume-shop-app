function Filter({handleChangeChBox, handleChangePrice, handleClickFilterBtn, handleChangeRate, handleChangeSort}){

    return(
        <div className="filter">
            <div className="brands">
                <h3>Brands</h3>
                <div>
                    <input type="checkbox" id="Armani" onChange={handleChangeChBox} />
                    <label htmlFor="Armani">Armani</label>
                </div>

                <div>
                    <input type="checkbox" id="Chanel" onChange={handleChangeChBox} />
                    <label htmlFor="Chanel">Chanel</label>
                </div>

                <div>
                    <input type="checkbox" id="Hugo" onChange={handleChangeChBox} />
                    <label htmlFor="Hugo">Hugo</label>
                </div>

                <div>
                    <input type="checkbox" id="brand4" onChange={handleChangeChBox} />
                    <label htmlFor="brand4">Brand4</label>
                </div>

                <div>
                    <input type="checkbox" id="brand5" onChange={handleChangeChBox} />
                    <label htmlFor="brand5">Brand5</label>
                </div>

                <div>
                    <input type="checkbox" id="brand6" onChange={handleChangeChBox} />
                    <label htmlFor="brand6">Brand6</label>
                </div>
            </div>
            <div className="price">
                <h3>Price</h3>
                <div className="minMax">
                    <label htmlFor="min">Min</label>
                    <label htmlFor="max">Max</label>
                </div>
                <div className="priceInput">
                    <input type="number" placeholder="0" id="min" onChange={handleChangePrice}/>
                    <span> - </span>
                    <input type="number" placeholder="0" id="max" onChange={handleChangePrice}/>
                </div>
                <div>
                    <form action="" className="sort">
                        <label htmlFor="sort"> Sort by</label>
                        <select name="sort" id="sort" onChange={handleChangeSort}>
                            <option value="0"> - </option>
                            <option value="1">Lowest to highest</option>
                            <option value="2">Highest to lowest</option>
                        </select>
                    </form>
                </div>
            </div>
            <div className="fastDelivery">
                <div>
                    <input type="checkbox" id="fastDelivery" onChange={handleChangeChBox}/>
                    <label htmlFor="fastDelivery">Fast Delivery</label>
                </div>
                <form action="">
                    <select name="rate" id="rate" onChange={handleChangeRate}>
                        <option value="0">-</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <label htmlFor="rate"> Rating</label>
                </form>
            </div>
            <input type="button" value="Filter" className="filterBtn" onClick={handleClickFilterBtn}/>
        </div>
    )
}

export default Filter