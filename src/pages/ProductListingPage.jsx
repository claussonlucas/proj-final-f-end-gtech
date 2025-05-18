// ProductsListingPage.jsx
// Data: 17/05/2025

import "../styles/productListingPage.css";
import Layout from "./Layout";
import FilterGroup from "../components/FilterGroup";

/* DataFilter */
import { titleFilterOne, optionsFilterOne,
    titleFilterTwo, optionsFilterTwo,
    titleFilterThree, optionsFilterThree} from "../data/DataFilter";

/* DataProducListing */
import { ListaProdutos } from "../data/DataProductListing";

import Section from "../components/Section";
import ProductListing from "../components/ProductListing";

export default function ProductListingPage() {
    /* <h5 className={"titleFilter"}>{title}</h5>
            <input type={inputType} id={} name={} value={}></input> */
    return (
        <>
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
                            <ProductListing products={ListaProdutos}/>
                        </Section>
                    </div>
                    
                </div>

            </Layout>
        </>
    )
}

/* 
inputType={"checkout"} options={"objto"} 



*/