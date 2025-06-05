import { Link } from "react-router-dom";
import "../styles/botoesContaMobile.css";

export default function BotoesContaMobile () {

    return (
        <>
            <div className="botesContaMob">
                <div id="btCadastreMob"><Link to={"/form"}>Cadastre-se</Link></div>
                <div><Link to={"/"} id="btEntrarMob">Entrar</Link></div>
            </div>
        </>
    );
}
