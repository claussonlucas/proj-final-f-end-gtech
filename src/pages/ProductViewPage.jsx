import Gallery from "../components/Gallery";
import Layout from "./Layout";

// Objetos do galleryProduct
import { galleryProduct } from "../data/DataProduct";

// Objetos do DataGallery
import { sourcesGallery } from "../data/DataGallery";

export default function ProductViewPage () {

    return (
        <>
            <Layout>
                <Gallery
                    width={"700"}
                    height={"570"}
                    radius={"4px"}
                    images={galleryProduct}
                    showThumbs/>

                
            </Layout>
        </>
    );
}
