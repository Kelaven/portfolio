// components/Layout.js
import Header from './header/Header';
import Footer from './footer/Footer';

const Layout = ({ children }) => {
    {/* children utilisé pour recevoir le contenu de la page */ }
    return (
        <div className="layout">
            <Header />
            <main className="content">
                {children} {/* utilisé pour afficher le contenu de la page */}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;