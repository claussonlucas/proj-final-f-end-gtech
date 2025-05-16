import styled from "styled-components";
import ProductCard from "./ProductCard";

const DivList = styled.section `
    background-color: aqua;
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 20px 0px 50px 0px;

    & ul {
        display: flex;
        justify-content: center;
    align-items: center;
        flex-flow: row wrap;
        gap: 20px;
        margin: 0;
        padding: 0;
    }
    & ul > li {
        list-style: none;
        margin: 0;
        padding: 0;
    }
`

export default function ProductListing ({ products }) {
    const lista = products.map(product =>
        <li key={product.id}>
            <ProductCard
                image={product.image}
                name={product.name}
                price={product.price}
                priceDiscount={product.priceDiscount}/>
        </li>
    );

    return (
        <DivList>
            <ul>{lista}</ul>
        </DivList>
    );
}
