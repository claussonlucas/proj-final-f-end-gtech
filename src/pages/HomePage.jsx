// HomePage.jsx
// Data: 06/05/2025

import "../styles/homePage.css";

import { AuthContext } from "../context/AuthContext";
import { Context } from "../context/AuthContext";
import Layout from "./Layout";
import ModalMenuMobile from "../components/ModalMenuMobile";
import Gallery from "../components/Gallery";

// Imagens da section abaixo da Gallery
import { useEffect, useState } from "react";
import img1 from "/collection-1.png";
import img2 from "/collection-2.png";
import img3 from "/collection-3.png";

import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import { API } from "../service";

/*
import { Context } from "../context/AuthContext";
<AuthContext>

import ModalMenuMobile from "../components/ModalMenuMobile";
{ modal && <ModalMenuMobile /> }
*/

const HomePage = () => {
    const { modal } = useContext(Context);

    const [galleryList, setGalleryList] = useState([]);
    const [productsList, setProductsList] = useState([]);

    async function imagesGallery() {
        const response = await API.get('/dataGallery.json');
        console.log("galleryList response", response.data.data);
        setGalleryList(response.data.data);

    }

    async function produtosAlta() {
        const response = await API.get('/dataProductListing.json');
        console.log("produtos response", response.data.data);
        setProductsList(response.data.data);
    }

    useEffect(() => {
        imagesGallery();
        produtosAlta();
    }, []);

    return (
        <>
            <AuthContext>
                <Layout >
                    {/* <h1>Digital Store</h1> */}
                    
                    { modal && <ModalMenuMobile /> }
                    
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
            </AuthContext>
        </>
    );
}

export default HomePage;

/*

*/