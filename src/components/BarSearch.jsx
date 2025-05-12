import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import styled from 'styled-components';

const Barra1 = styled.div `
    display: block;
    @media screen and (max-width: 1200px) {
        .barra1 {display: none;}
    }
`

export default function BarSearch () {

    return (
        <Barra1>
            <IconField
                iconPosition="right"
                className="ml-5 mr-6 barra1">
                <InputIcon className="pi pi-search" />
                <InputText
                    placeholder="Pesquisar produto..."
                    style={{backgroundColor: "#F5F5F5"}}
                    className="w-30rem"/>
            </IconField>
        </Barra1>
    );
}
