//import styled from "styled-components";
import { Link } from "react-router-dom";
import "../styles/productListing.css";
import ProductCard from "./ProductCard";

export default function ProductListing ({ products }) {
    const lista = products.map(product =>
        <li key={product.id} className="liProductList">
            <Link to={`/product/${product.id + 1}`}>
                <ProductCard
                image={product.image}
                name={product.name}
                price={product.price}
                priceDiscount={product.priceDiscount}/>
            </Link>
        </li>
    );

    return (
        <div className="divProductListing">
            <ul className="ulProductList">{lista}</ul>
        </div>
    );
}
