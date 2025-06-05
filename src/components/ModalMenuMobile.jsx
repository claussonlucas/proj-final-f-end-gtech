// ModalMenuMobile.jsx
// data: 04/06/2025

import "../styles/modalMenuMobile.css";
import BotoesContaMobile from "./BotoesContaMobile";
import MenuBarMobile from "./MenuBarMobile";

export default function ModalMenuMobile () {

    return (
        <>
            <div className="overlay">
                <div className="divMenuMob">
                    <h4 className="h4MenuMob">Páginas</h4>
                    <MenuBarMobile />
                    <hr className="lineMenuMob"/>
                    <BotoesContaMobile />
                </div>
            </div>
        </>
    );
}
