// Logo.jsx
import "../styles/logo.css";

/* style={{width:"253px", height:"44px"}} */

/* como chamar esse componente */
/* <Logo image={A} />
A: variável que recebe uma imagem importada no
componente que chama <Logo />
Ex.: import Logo from "./Logo";
*/

const Logo = (props) => {
    return (
        <>
            <img
                src={props.image}
                alt="Logo Digital Store"
                className="tamanho"
                />
        </>
    )
}
    
export default Logo;