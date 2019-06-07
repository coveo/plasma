import config from '../config';
import * as VaporSVG from 'coveo-styleguide';

const Header = () => (
    <header className="header bg-gradient flex flex-row flex-center">
        <div className="header-section flex mod-no-border vapor-header-logo center-align">
            <a
                href="http://coveo.com"
                target="_blank"
                dangerouslySetInnerHTML={{__html: VaporSVG.svg.logo.svgString}}
            />
            <p className="h2 mt1">
                <span className="text-medium-grey px1">|</span>
                <span className="h2 text-orange">{config.title}</span>
            </p>
        </div>
    </header>
);

export default Header;
