// Layout.jsx

import Footer from "../components/Footer";
import Header from "../components/Header";

import ModalMenuMobile from "../components/ModalMenuMobile";
import { useContext } from "react";
import { Context } from "../context/MenuContext";

const Layout = ({ children }) => {
    const { modal } = useContext(Context);

    return (
        <>
            <Header />
            {/* menu mobile */}
            { modal && <ModalMenuMobile /> }

            { children }
            <Footer />
        </>
    )
}

export default Layout;

/*

<Teste />

*/