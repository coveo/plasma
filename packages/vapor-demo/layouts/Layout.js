import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

import '../style/main.scss';

const Layout = (props) => (
    <>
        <Header />

        <div className="flex flex-row application-wrapper">
            <div className="flex flex-column navigation-wrapper navigation-wrapper-opened sg-navigation">
                <Navigation />
            </div>

            <div className="page-content application-container flex flex-column">
                <div className="wrapper application-main-content m0 flex-auto">{props.children}</div>

                <Footer />
            </div>
        </div>
    </>
);

export default Layout;
