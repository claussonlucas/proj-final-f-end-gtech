import "../styles/filterGroup.css";

export default function FilterGroup ({ title, inputType, options }) {

    const listaOptions = options.map(option =>
        { return (
        <li key={option.id}>
            <input className="inputs" type={inputType} id={option.text} name={option.text} value={option.value} />
            <label htmlFor={option.text}>{option.text}</label><br></br>
        </li>
        );}
    );

    return (
        <div>
            <h5 className="titleFilter">{title}</h5>

            
            {listaOptions}
        </div>
    );
}

/* 
 { return (
        <>
            <input className="inputs" type={inputType} id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1">{options.text}</label><br></br>
        </>
    );}
*/