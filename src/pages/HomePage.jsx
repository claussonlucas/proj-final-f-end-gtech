// HomePage.jsx
// Data: 06/05/2025

import "../styles/homePage.css";

import Section from "../components/Section";
import Layout from "./Layout";

// Objetos do DataSection
// Objetos do DataProductListing
import { ListaProdutos } from "../data/DataProductListing";
// Objetos do DataGallery
import { sourcesGallery } from "../data/DataGallery";

import Gallery from "../components/Gallery";
import ProductListing from "../components/ProductListing";
// Imagens da section abaixo da Gallery
import img1 from "../../public/collection-1.png";
import img2 from "../../public/collection-2.png";
import img3 from "../../public/collection-3.png";


const HomePage = () => {

    return (
        <>
            <Layout >
                {/* <h2>Home</h2> */}
                
                {/* Componente Gallery - width: 1351 (ajustado para monitor HD) */}
                <Gallery
                    className={"compGallery"}
                    width={"1351"} height={"681"}
                    radius={"4px"}
                    images={sourcesGallery}
                    showThumbs/>
                
                {/* Div conteúdo da Home Page */}
                <div className="divConteudo">
                    {/* Coleções em Destaque - Pedido para ser no centro */}
                    <Section title={"Coleções em Destaque"} titleAlign={"center"} link={""}>
                        <img src={img1} alt="Imagem Blusa Supreme" style={{borderRadius: '4px'}} />
                        <img src={img2} alt="Imagem Tênis Adidas" style={{borderRadius: '4px'}}/>
                        <img src={img3} alt="Imagem Fone de Ouvido" style={{borderRadius: '4px'}}/>
                    </Section>

                    {/* Section com a Lista de Produtos */}
                    <Section title={"Produtos em Alta"} link={""}>
                        <ProductListing products={ListaProdutos} />
                    </Section>
                </div>
                
            </Layout>
        </>
    );
}

export default HomePage;

/*

*/