import React, { useState, useEffect } from "react";
import { productData } from "./data";
import "./Search.css";
import ProductItem from '../ProductItem/ProductItem';

export default function Search() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(productData);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setData(productData);
  }, []);

  const filteredParfumes = data.filter((parfume) => {
    return (
      parfume.brand.toLowerCase().includes(inputValue) ||
      parfume.name.toLowerCase().includes(inputValue)
    );
  });

  console.log(data, 'data');

  const itemClickHandle = (e) => {
    setInputValue(e.target.textContent);
    const filtered = data.filter(
      // (item) => console.log(item.name)
      (item) => item.name == e.target.textContent.split(":")[1]
    );
    setData(filtered);
    setIsOpen(!isOpen);
    console.log("filtered:", e.target.textContent.split(":")[1]);
    console.log("filtered", filtered);
  };

  const inputClickHandle = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <div className="search">
        <input
          type="text"
          value={inputValue}
          placeholder="Search"
          onChange={(evt) => {
            setInputValue(evt.target.value.toLowerCase());
            if (!evt.target.value) {
              setData(productData);
              console.log(evt.target.value);
            }
          }}
          onClick={inputClickHandle}
        />
        <ul className="autocomplete">
          {inputValue && isOpen
            ? filteredParfumes.map((parfume) => {
                return (
                  <li
                    className="autocomplete_item"
                    key={parfume.id}
                    onClick={itemClickHandle}
                  >
                    {parfume.brand}:{parfume.name}
                  </li>
                );
              })
            : null}
        </ul>
      </div>
      <div className="container products__container">
        <div className="products__wrapper">
          {data.map((prod) => {
            return <ProductItem key={prod.id} prod={prod} />;
          })}
        </div>
      </div>
    </div>
  );
}
