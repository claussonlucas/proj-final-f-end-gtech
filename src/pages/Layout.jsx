// Layout.jsx

import Footer from "../components/Footer";
import Header from "../components/Header";
import Teste from "../components/Teste";

const Layout = ({ children }) => {

    return (
        <>
            <Header />
            <Teste />
            { children }
            <Footer />
        </>
    )
}

export default Layout;
