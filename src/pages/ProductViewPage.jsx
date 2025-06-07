import "../styles/productViewPage.css";

import { MenuContext } from '../context/MenuContext';

import Gallery from "../components/Gallery";
import Layout from "./Layout";
import Section from "../components/Section";

import BuyBox from "../components/BuyBox";
import ProductOptions from "../components/ProductOptions";
import ProductListing from "../components/ProductListing";

import { useEffect, useState } from "react";
import { API } from "../service";

export default function ProductViewPage () {
    const [galleryList, setGalleryList] = useState([]);
    const [tamanhosList, setTamanhosList] = useState([]);
    const [CoresList, setCoresList] = useState([]);
    const [linkRecomendado, setLinkRecomendado] = useState([]);
    const [recomendados, setRecomendados] = useState([]);

    async function imagesGallery() {
        const response = await API.get('/dataProduct.json');
        setGalleryList(response.data.data);

    }

    async function tamanhosOptions() {
        const response = await API.get('/dataProductView.json');
        setTamanhosList(response.data.tamanhos);
    }

    async function coresOptions() {
        const response = await API.get('/dataProductView.json');
        setCoresList(response.data.cores);
    }

    async function linkRecomendadoFunc() {
        const response = await API.get('/dataProductView.json');
        setLinkRecomendado(response.data.linkRecomendado);
    }

    async function recomendadosFunc() {
        const response = await API.get('/dataProductView.json');
        setRecomendados(response.data.recomendados);
    }

    useEffect(() => {
        imagesGallery();
        tamanhosOptions();
        coresOptions();
        linkRecomendadoFunc();
        recomendadosFunc();
    }, []);


    return (
        <>
            <MenuContext>
                <Layout>
                    {/* div Gallery */}
                    <div className="divGalleryBuyBox" >
                        <Gallery
                        width={"700"}
                        height={"570"}
                        radius={"4px"}
                        images={galleryList}
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
                                options={tamanhosList}
                                radius={"5px"}
                                shape={"square"}
                                type={"text"}
                                />

                            <ProductOptions
                                options={CoresList}
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
            </MenuContext>
        </>
    );
}

/*
radius={"4px"}
                            shape={"square"}
                            type={"text"}
*/