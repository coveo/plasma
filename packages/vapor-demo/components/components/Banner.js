import * as VaporSVG from 'coveo-styleguide';
import Svg from '../Svg';

const Banner = () => (
    <div className="banner flex center-align bg-orange">
        <div className="banner-description">
            The release of March 2016 includes significant content update
            <button type="button" className="btn text-orange">
                Learn More
            </button>
        </div>

        <Svg name={VaporSVG.svg.close.name} className="icon fill-pure-white mod-lg" />
    </div>
);
export default Banner;
