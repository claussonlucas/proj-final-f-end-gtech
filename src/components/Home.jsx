// Home.jsx
// Data: 06/05/2025

import imgteste from "../assets/home-slide-1.jpeg";

import Layout from "../pages/Layout";
import ProductCard from "./ProductCard";
import Section from "./Section";

// Objetos do DataSection
import { objLink } from "../data/DataSection";
// Objetos do DataProductListing
import { ListaProdutos } from "../data/DataProductListing";
// Objetos do DataProductListing
import { sourcesGallery } from "../data/DataGallery";

import Gallery from "./Gallery";
import ProductListing from "./ProductListing";

const Home = () => {

    return (
        <>
            <Layout >
                <h2>Home</h2>
                
                <Gallery
                    width={"1440"} height={"681"}
                    radius={"4px"}
                    images={sourcesGallery}
                    showThumbs/>

                <Section title={"Texto"} titleAlign={"center"} link={objLink}>
                    <h4>children</h4>
                    <h2>Nada</h2>

                </Section>

                <Section title={"Texto"} link={objLink}>
                    <h4>children</h4>
                </Section>

                <div
                    style={{display: "flex"}}>
                    <ProductCard image={imgteste} name={"Sapato"} price={"20.00"} priceDiscount={"15.00"}/>
                    <ProductCard image={imgteste} name={"Sapato"} price={"20.00"} />
                    <ProductCard image={imgteste} name={"Sapato"} price={"20.00"} priceDiscount={"15.00"}/>
                </div>

                <ProductListing products={ListaProdutos} />
            </Layout>
        </>
    );
}

export default Home;

/*

*/