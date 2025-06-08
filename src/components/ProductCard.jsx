// ProductCard.jsx

//import styled from "styled-components";
import "../styles/productCard.css";

// componente para produtos
export default function ProductCard ({image, name, price, priceDiscount=""}) {

    return (
        <div className="divProductCard">
            <img src={image} alt={name} style={{width: "292px", height: "321px"}}/>
            <h3 className="h3ProductCard">{name}</h3>

            <div className="prices">
                
                {priceDiscount !== "" ?
                <h4 className="priceCard" style={{color: "var(--light-gray)"}}>
                    <del>{price}</del>
                </h4>
                : <h4 className="priceCard">{price}</h4>}

                <h4 className="priceDiscountCard">{priceDiscount}</h4>
            </div>
            
        </div>
    );
}
