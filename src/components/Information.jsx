// Information.jsx

import { Link } from "react-router-dom";
import styled from "styled-components";

// Estilo do componente
const Info = styled.section`
    width: 200px;
    //background-color: aqua;

    & ul {
        padding: 0;
        margin-top: 25px;
        & li {
            list-style: none;
            
            margin-bottom: 25px;
        }
        & a {
            color: var(--white);
            text-decoration: none;
        }
    }

`

export default function Information ({ title, informations }) {

    // guarda várias linhas, cada linha com um objeto
    const infos = informations.map(obj =>
        <li key={obj.id}><Link to={obj.link}>{obj.text}</Link></li>
    );

    return (
        <Info>
            <h4>{title}</h4>
            <ul>{infos}</ul>

        </Info>
    );
}
