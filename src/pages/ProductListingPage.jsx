// ProductsListingPage.jsx
// Data: 17/05/2025

import "../styles/productListingPage.css";
import Layout from "./Layout";
import FilterGroup from "../components/FilterGroup";

import Section from "../components/Section";
import ProductListing from "../components/ProductListing";

import { MenuContext } from '../context/MenuContext';
import { useEffect, useState } from "react";
import { API } from "../service";

export default function ProductListingPage() {
    
    const [productsList, setProductsList] = useState([]);

    const [titleFilterOne, setTitleFilterOne] = useState("");
    const [optionsFilterOne, setOptionsFilterOne] = useState([]);
    const [titleFilterTwo, setTitleFilterTwo] = useState("");
    const [optionsFilterTwo, setOptionsFilterTwo] = useState([]);
    const [titleFilterThree, setTitleFilterThree] = useState("");
    const [optionsFilterThree, setOptionsFilterThree] = useState([]);


    async function produtosAlta() {
        const response = await API.get('/dataProductListing.json');
        //console.log("produtos response", response.data.data);
        setProductsList(response.data.data);
    }

        async function filter() {
        const response = await API.get('/dataFilter.json');
        setTitleFilterOne(response.data.titleFilterOne);
        setOptionsFilterOne(response.data.optionsFilterOne);
        setTitleFilterTwo(response.data.titleFilterTwo);
        setOptionsFilterTwo(response.data.optionsFilterTwo);
        setTitleFilterThree(response.data.titleFilterThree);
        setOptionsFilterThree(response.data.optionsFilterThree);
    }

    useEffect(() => {
        produtosAlta();
        filter();
    }, []);
    return (
        <>
            <MenuContext>
                <Layout>
                    {/* div geral */}
                    <div className="divProductListPage">
                        {/* div lateral */}
                        <div className="divLateral">
                            {/* div ordenar */}
                            <div className="divOrder">
                                <label className="titleOrder" htmlFor="price">Ordenar por:</label>
                                <select className="order" id="price" name="price">
                                    <option value="menor">Menor preço</option>
                                    <option value="maior">Maior preço</option>
                                </select>
                            </div>

                            {/* div filtro */}
                            <div className="divfilter">
                                <label className="labelFilter">Filtrar por</label>
                                <hr className="linefilter"/>
                                {/* filtro 1 */}
                                <FilterGroup
                                    title={titleFilterOne}
                                    inputType={"checkbox"}
                                    options={optionsFilterOne} />

                                {/* filtro 2 */}
                                <FilterGroup
                                    title={titleFilterTwo}
                                    inputType={"radio"}
                                    options={optionsFilterTwo} />

                                {/* filtro 3 */}
                                <FilterGroup
                                    title={titleFilterThree}
                                    inputType={"checkbox"}
                                    options={optionsFilterThree} />
                            </div>
                        </div>
                        
                        {/* div conteúdo principal */}
                        <div>
                            <Section title={"Produtos em Alta"} link={""}>
                                <ProductListing products={productsList} />
                            </Section>
                        </div>
                        
                    </div>
                </Layout>
            </MenuContext>
        </>
    )
}
