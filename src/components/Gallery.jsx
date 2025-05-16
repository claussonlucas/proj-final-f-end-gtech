import "../styles/gallery.css"
import arrowRight from "../assets/arrow-right.svg";
import arrowLeft from "../assets/arrow-left.svg";
import { useState } from "react";

export default function Gallery ({width, height, radius, showThumbs,
images}) {
    /* Variável de estado para guardar o index da array "images"
       para alterar a imagem mostrada */
    const [variavel, setVariavel] = useState(0);
    /* Guarda o id da miniatura clicada */
    //const [idMiniatura, setIdMiniatura] = useState(0);

    // quando clicado a seta direita, avança 1 imagem da lista
    // de objetos
    function handleClickRight() {
        setVariavel(variavel + 1);
    }

    // quando clicado a seta esquerda, retorna 1 imagem da lista
    // de objetos
    function handleClickLeft() {
        setVariavel(variavel - 1);
    }

    // altera imagem grande para ser a igual a miniatura clicada
    function handleClickThumb(id) {
        setVariavel(id);
    }

    // código para mostrar thumbnail
    /* const miniatura = images.map(thumbnail =>
        <li key={thumbnail.id}>
            <div >
                <img
                    src={thumbnail.src} alt={`home-slide-${thumbnail.id + 1}`}
                    style={{width:"117px", height: "95px",
                    borderRadius: radius}}/>
            </div>
        </li>
        ); */
    
    // função que mostra as miniaturas
    /* function Thumbnail({ id, thumb }) {
            //console.log("Gallery: thumb: " + thumb);
            //console.log("Gallery: thumb[0]: " + thumb[0]);
            //console.log("Gallery: thumb[0].src: " + thumb[0].src);
        return (
            <>
                
                
                <img
                    scr={thumb[id].src}
                    width="117px"
                    height="95px"
                    onClick={() => setVariavel(id)}/>
            </>
        );
    } */

    
    //console.log("Gallery: images: " + image);
    //console.log("Gallery: images[variavel]: " + images[variavel]);
    //console.log("Gallery: images[variavel].src: " + images[variavel].src);
    // image recebe o elemento da lista usando
    // como index a variavel
    let image = images[variavel];
    console.log("Gallery: images: " + image); // apagar
    
    return (
        <div className="container">
            <div className="galleryOne">
                <img src={image.src} alt={"Imagem Galeria"}
                    style={{width: width + "px", height: height + "px", borderRadius: radius}}/>
                
                {variavel < (images.length - 1) &&
                    <div className="arrowRight" onClick={handleClickRight} >
                        <img src={arrowRight} alt="Seta Direita"/>
                    </div>
                }

                {variavel > 0 &&
                    <div className="arrowLeft" onClick={handleClickLeft}>
                        <img src={arrowLeft} alt="Seta Esquerda"/>
                    </div>

                }
            </div>

            {/* {showThumbs &&
                <div className="divMiniatura">
                    <ul>{miniatura}</ul>
                </div>
            } */}

            {/* <div onClick={handleClickThumb}>
                <img
                    src={images[1].src} alt={`home-slide-${image.id + 1}`}
                    style={{width:"117px", height: "95px",
                    borderRadius: radius}}/>
            </div>

            <div>
                
                <Thumbnail id={5} thumb={images}/>
            </div> */}
        </div>
    );
}

/*
<div onClick={handleClickThumb(0)}>
                <img
                    src={images[0].src} alt={`home-slide-${image.id + 1}`}
                    style={{width:"117px", height: "95px",
                    borderRadius: radius}}/>
            </div>
*/