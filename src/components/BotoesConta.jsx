import { Link } from "react-router-dom";
import "../styles/botoesConta.css";

export default function BotoesConta () {

    return (
        <>
            <div className="botesConta">
                <div id="btCadastre"><Link to={"/form"}>Cadastre-se</Link></div>
                <div id="btEntrar"><Link to={"/"}>Entrar</Link></div>
            </div>
        </>
    );
}
