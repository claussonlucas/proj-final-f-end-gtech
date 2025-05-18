// BuyBox.jsx
// Data: 17/05/2025

import "../styles/buyBox.css"
import imgStar from "../assets/star-icon.svg";

/* COLOCAR COR ESTRELA */

export default function BuyBox ({ name, reference, stars, rating, price,
            priceDiscount, description, children }) {

    return (
        <div className="divBuyBox">
            <h4 className="nomeProduto">{name}</h4>
            <h5 className="ref">REF: {reference}</h5>

            {/* div Star e Rating */}
            <div className="divStarRating">
                <div className="divStars">
                    <h5 className="stars">{stars}</h5>
                    <div><img src={imgStar} alt="" className="imgStar" /></div>
                </div>

                <h5 className="rating">{rating}</h5>
            </div>

            {/* preços */}
            <div className="prices">
                {
                    priceDiscount ?
                    <>
                    <h5 className="priceDiscount">{priceDiscount}</h5>
                    <del style={{color: "var(--light-gray-2)"}}>
                        <h5 style={{color: "var(--light-gray-2)", fontSize: "16px"}}>{price}</h5>
                    </del></>
                    : <h5 className="price">{price}</h5>
                }
                
            </div>

            <p className="description">{description}</p>
            
            {/* ProductOptions */}
            <div className="divProductOptions">
                {children}
            </div>

            <div className="btComprar">
                <h4 className="comprar">COMPRAR</h4>
            </div>
        </div>
    );
}
