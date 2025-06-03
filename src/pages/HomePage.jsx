// HomePage.jsx
// Data: 06/05/2025

import "../styles/homePage.css";

import Section from "../components/Section";
import Layout from "./Layout";

// Objetos do DataSection
// Objetos do DataProductListing
//import { ListaProdutos } from "../data/DataProductListing";
// Objetos do DataGallery
//import { sourcesGallery } from "../data/DataGallery";

import Gallery from "../components/Gallery";
// Imagens da section abaixo da Gallery
import { useEffect, useState } from "react";
import img1 from "../../public/collection-1.png";
import img2 from "../../public/collection-2.png";
import img3 from "../../public/collection-3.png";

import axios from "axios";
//import { API } from "../service/index";
import ProductListing from "../components/ProductListing";

//../src/data/dataProductListing.json

const HomePage = () => {
    const [galleryList, setGalleryList] = useState([]);
    const [productsList, setProductsList] = useState([]);

    async function imagesGallery() {
        const response = await axios.get('../src/data/dataGallery.json');
        console.log("galleryList response", response.data.data);
        setGalleryList(response.data.data);

    }

    async function produtosAlta() {
        const response = await axios.get('../src/data/dataProductListing.json');
        console.log("produtos response", response.data.data);
        setProductsList(response.data.data);
    }

    useEffect(() => {
        imagesGallery();
        produtosAlta();
    }, []);

    return (
        <>
            <Layout >
                {/* <h2>Home</h2> */}
                
                {/* Componente Gallery - width: 1351 (ajustado para monitor HD) */}
                <Gallery
                    className={"compGallery"}
                    width={"1351"} height={"681"}
                    radius={"4px"}
                    images={galleryList}
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
                        <ProductListing products={productsList} />
                    </Section>
                </div>
                
            </Layout>
        </>
    );
}

export default HomePage;

/*

*/