// Componente para ser um padrão de uma seção

import { Link } from "react-router-dom";
import styled from "styled-components";


const Container = styled.section `
    
    display: flex;
    flex-direction: column;
    position: relative;
    /* background-color: beige; */
    padding: 25px 20px;
    

    //padding: 0 30px 0 30px;

    & .divTitle {
        display: flex;
        color: var(--dark-gray-2);
        font-size: 24px;
    }
    & .divLink {
        position: absolute;
        top: 40px;
        right: 30px;
        
        & a {
            text-decoration: none;
            color: var(--primary);
            font-size: 18px;
        }
    }

    & .divChildren {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
`
export default function Section ({ title, titleAlign="flex-start", link, children}) {

    return (
        <Container>
            {/* Título da Section */}
            <div
                className="divTitle"
                style={{justifyContent: titleAlign}}>
                <h3>{title}</h3>
            </div>
            
            {/* Link da Section */}
            <div className="divLink">
                <h4><Link to={link.href}>{link.text}</Link></h4>
            </div>

            {/* Children */}
            <div className="divChildren">
                {children}
            </div>
        </Container>
    );
}
