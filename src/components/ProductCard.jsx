// ProductCard.jsx
/*
Exemplo de como chamar:
<ProductCard image={imgteste} name={"Sapato"} price={"20.00"} priceDiscount={"15.00"}/>

<ProductCard image={imgteste} name={"Sapato"} price={"20.00"}/>
*/

import styled from "styled-components";

// componente para produtos
export default function ProductCard ({image, name, price, priceDiscount=""}) {
const Container = styled.section `
    /* background-color: var(--white); */
    /* padding: 10px; */
    & h3 {
            padding: 5px;
            margin: 0;
        }
    & .prices {
        display: flex;
        gap: 10px;
        & .price {
            color: var(--dark-gray);
            font-size: 24px;
            padding: 0;
            margin: 0;
        }
        & .priceDiscount {
            color: var(--dark-gray);
            font-size: 24px;
            padding: 0;
            margin: 0;
        }
    }
`
    return (
        <Container>
            <img src={image} alt={name} style={{width: "292px", height: "321px"}}/>
            <h3>{name}</h3>

            <div className="prices">
                
                {priceDiscount !== "" ?  <h4 className="price" style={{color: "var(--light-gray)"}}><del>{price}</del></h4>
                : <h4 className="price">{price}</h4>}

                <h4 className="priceDiscount">{priceDiscount}</h4>
            </div>
            
        </Container>
    );
}
