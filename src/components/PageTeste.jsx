import { useEffect, useState } from "react";
import CompFull from "./CompFull";
import CompReduzido from "./CompReduzido";

export default function PageTeste () {
    /* const sizeScreen = innerWidth;
    console.log(sizeScreen); */

    const [estado, setEstado] = useState(800);
    
    console.log("Antes do evento");
    console.log(estado);

    // Monitora se o tamanho da tela mudou
    window.addEventListener("resize", () => {
    // Envia o tamanho da tela
    setEstado(innerWidth);
    });

    console.log("Depois do evento");
    console.log(estado);
    
    
    return (
        <>
            <h2>Página teste</h2>
            {
                estado > 600 ?
                <CompFull />
                :
                <CompReduzido />
            }
            
            

        </>
    );
}

/*
<h2>Página teste</h2>
            {
                sizeScreen > 600 ?
                <CompFull />
                :
                <CompReduzido />
            }

console.log("Antes useEffect");
    console.log(estado);

    useEffect(() => {
        console.log("Dentro do useEffect");
        setEstado(innerWidth);
        console.log(estado);

    }, [estado]);

    //setEstado(innerWidth);
    console.log("Depois do useEffect");
    console.log(estado);
*/