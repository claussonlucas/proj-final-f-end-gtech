// Information.jsx

import { Children } from "react";
import styled from "styled-components";

const Info = styled.section`
    width: 200px;
    display: flex;
    flex-flow: column;
    background-color: aqua;
    margin-bottom: 0px;
    padding: 30px;
    & p {
        margin: 10px 0;
    }

`



export default function Information ({ children }) {

    return (
        <Info>
            {children}

        </Info>
    );
}
/*
title={"Informação"}
informations={"numero"}
<h3>{props.title}</h3> props, 

            {
                props.informations.map(information => {
                    <p>{information.text}</p>
                })
            }
*/