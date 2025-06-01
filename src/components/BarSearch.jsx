import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import "../styles/barSearch.css"

export default function BarSearch () {

    return (
        <>
            <div className='flex'>
                <form action="/produtos" method="get" className='formBarra'>
                
                <IconField
                    iconPosition="right"
                    className="searchField">
                    
                    <InputText
                        id="filter" name="filter"
                        placeholder="Pesquisar produto..."
                        style={{backgroundColor: "#F5F5F5"}}
                        className="searchInput" required/>
                    <button type="submit" className='lupaInterna'><InputIcon className="pi pi-search"/></button>
                    
                </IconField>
                </form>
            </div>
        </>
    );
}
