// Logo.jsx
import { Link } from "react-router-dom";
import "../styles/logo.css";

const Logo = (props) => {
    return (
        <>
            <Link to={"/"}>
                <img
                src={props.image}
                alt="Logo Digital Store"
                className="tamanho"
                />
            </Link>
        </>
    )
}
    
export default Logo;