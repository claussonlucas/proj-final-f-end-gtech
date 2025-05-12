// Logo.jsx
import "../styles/logo.css";

/* style={{width:"253px", height:"44px"}} */

/* como chamar esse componente */
/* <Logo image={var-criada-no-import} /> */

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