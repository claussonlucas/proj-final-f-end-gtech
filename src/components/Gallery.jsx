import "../styles/gallery.css"
import arrowRight from "../assets/arrow-right.svg";
import arrowLeft from "../assets/arrow-left.svg";
import { useEffect, useState } from "react";

export default function Gallery ({width, height, radius, showThumbs,
images}) {
    /* Variável de estado para guardar o index da array "images"
       para alterar a imagem mostrada */
    const [estado, setEstado] = useState(0);
    const [safeImages, setSafeImages] = useState([]);

    // Sincroniza as imagens com um estado seguro
    useEffect(() => {
        if (images && images.length > 0) {
            setSafeImages(images);
            setEstado(0); // Reseta para a primeira imagem
        }
    }, [images]);

    if (safeImages.length === 0) {
        return <div className="loading-gallery">Carregando galeria...</div>;
    }


    // quando clicado a seta direita, avança 1 imagem da lista
    // de objetos
    function handleClickRight() {
        setEstado(estado + 1);
    }

    // quando clicado a seta esquerda, retorna 1 imagem da lista
    // de objetos
    function handleClickLeft() {
        setEstado(estado - 1);
    }

    // código para mostrar thumbnail
    const miniatura = images.map(thumbnail =>
        <li key={thumbnail.id}>
            <div>
                <img
                    src={thumbnail.src} alt={`home-slide-${thumbnail.id + 1}`}
                    style={thumbnail.id == estado ? {width:"117px", height: "95px",
                    borderRadius: radius, border: "2px solid var(--primary)"} : {width:"117px", height: "95px",
                    borderRadius: radius}}
                    className="divOneThumb"
                    onClick={() => setEstado(() => thumbnail.id)}/>
            </div>
        </li>
        );
    
    
    // image recebe o elemento da lista usando
    // como index a variavel
    let image = images[estado];
    
    return (
        <div className="containerGallery">
            <div className="galleryOne">
                <img src={image.src} alt={"Imagem Galeria"} className="imgGallery"
                style={{width: width + "px", height: height + "px", borderRadius: radius}}/>
                
                
                {estado > 0 &&
                    <div className="arrowLeft" onClick={handleClickLeft}
                    style={{top: "height px"}}>
                        <img src={arrowLeft} alt="Seta Esquerda"/>
                    </div>
                }

                {estado < (images.length - 1) &&
                    <div className="arrowRight" onClick={handleClickRight}
                    style={{top: "height px"}}>
                        <img src={arrowRight} alt="Seta Direita"/>
                    </div>
                }
            
                
            </div>
            
            {/* no return */}
            {showThumbs &&
                <div className="divMiniatura">
                    <ul>{miniatura}</ul>
                </div>
            }

            
        </div>
    );
}
