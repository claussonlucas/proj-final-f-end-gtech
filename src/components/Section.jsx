// Componente para ser um padrão de uma seção

import { Link } from "react-router-dom";
import styled from "styled-components";


const Container = styled.section `
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;

    & .divTitle {
        display: flex;
        color: var(--dark-gray-2);
        font-size: 24px;
    }
    & .divLink {
        position: absolute;
        top: 10px;
        right: 30px;
        & a {
            text-decoration: none;
            color: var(--primary);
            font-size: 18px;
        }
    }

    & .divChildren {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export default function Section ({ title, titleAlign="flex-start", link, children}) {

    return (
        <Container>
            <div
                className="divTitle"
                style={{justifyContent: titleAlign}}>
                <h3>{title}</h3>
            </div>
            
            <div className="divLink">
                <h4><Link to={link.href}>{link.text}</Link></h4>
            </div>

            
            <div className="divChildren">
                {children}
            </div>
        </Container>
    );
}
