import config from '../config';
import Logo from '../resources/icons/svg/logo.svg';
import Hamburger from '../resources/icons/svg/hamburger.svg';

const Header = () => (
    <header className="header bg-gradient flex flex-row flex-center">
        <button className="header-hamburger header-hamburger-opened" type="button">
            <Hamburger className="icon mod-2x fill-pure-white" />
        </button>
        <div className="header-section flex mod-no-border">
            <a href="http://coveo.com" target="_blank">
                <div>
                    <Logo />
                </div>
            </a>
        </div>

        <div className="header-section flex flex-center">
            <p className="h2 mt1">
                <span className="text-medium-grey p1">|</span>
                <a className="h2 text-orange" href="">
                    {config.title}
                </a>
            </p>
        </div>
    </header>
);

export default Header;
