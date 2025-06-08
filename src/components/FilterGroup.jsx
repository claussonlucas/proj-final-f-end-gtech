import "../styles/filterGroup.css";

export default function FilterGroup ({ title, inputType, options }) {

    const listaOptions = options.map(option =>
        { return (
        <li key={option.id} className="liFilterGroup">
            <div>
                <input className="inputFilter"
                    type={inputType}
                    id={option.text}
                    name={inputType === "checkbox" ? option.text : title}
                    value={option.value} />
            </div>
            <div>
                <label htmlFor={option.text}>{option.text}</label>
            </div>
        </li>
        );}
    );

    return (
        <div className="divFilterGorup">
            <h5 className="titleFilter">{title}</h5>

            {listaOptions}
        </div>
    );
}
