import "../styles/productViewPage.css";

import Gallery from "../components/Gallery";
import Layout from "./Layout";
import Section from "../components/Section";

// Objetos do galleryProduct
import { galleryProduct } from "../data/DataProduct";
/* Dados DataProducView */
import { tamanhos, cores, linkRecomendado, recomendados} from "../data/DataProductView";

import BuyBox from "../components/BuyBox";
import ProductOptions from "../components/ProductOptions";
import ProductListing from "../components/ProductListing";

export default function ProductViewPage () {

    return (
        <>
            <Layout>
                {/* div Gallery */}
                <div className="divGalleryBuyBox" >
                    <Gallery
                    width={"700"}
                    height={"570"}
                    radius={"4px"}
                    images={galleryProduct}
                    showThumbs/>

                    <BuyBox
                        name={"nome do produto"}
                        reference={"128373"}
                        stars={"4.7"}
                        rating={"(90 avaliações)"}
                        price={"239.00"}
                        priceDiscount={"190.00"}
                        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis molestias iusto optio porro id odit quasi architecto eos sunt quibusdam quis adipisci"}
                        >
                        <ProductOptions
                            options={tamanhos}
                            radius={"5px"}
                            shape={"square"}
                            type={"text"}
                            />

                        <ProductOptions
                            options={cores}
                            radius={"5px"}
                            shape={"circle"}
                            type={"color"}
                            />
                    </BuyBox>
                    
                </div>

                <Section title={"Produtos recomendados"} link={linkRecomendado}>
                        <ProductListing products={recomendados}/>
                    </Section>
                
            </Layout>
        </>
    );
}

/*
radius={"4px"}
                            shape={"square"}
                            type={"text"}
*/