import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import styled from 'styled-components';

export default function BarSearch () {

    return (
        <>
            <IconField
                iconPosition="right"
                className="ml-5 mr-6 barra1">
                <InputIcon className="pi pi-search" />
                <InputText
                    placeholder="Pesquisar produto..."
                    style={{backgroundColor: "#F5F5F5"}}
                    className="w-30rem"/>
            </IconField>
        </>
    );
}
