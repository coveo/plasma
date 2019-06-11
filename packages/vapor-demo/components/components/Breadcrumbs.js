import * as VaporSVG from 'coveo-styleguide';
import Svg from '../Svg';

const Breadcrumbs = () => (
<nav className="breadcrumb-nav">
    <ul>
        <li className="breadcrumb-title">
            <a className="link" href="#">Pichu</a>
            <span className="breadcrumb-arrow">
                <Svg name={VaporSVG.svg.arrowRightRounded.name} />
            </span>
        </li>
        <li className="breadcrumb-title">
            <a className="link" href="#">Pikachu</a>
            <span className="breadcrumb-arrow">
                <Svg name={VaporSVG.svg.arrowRightRounded.name} />
            </span>
        </li>
        <li className="breadcrumb-title">
            <div className="flex flex-center">
                <h1 className="inline bold text-medium-blue mr1 truncate">
                    <span>Raichu</span>
                </h1>
                <span>
                    <Svg name={VaporSVG.svg.help.name} className='fill-orange icon mod-20' />
                </span>
            </div>
        </li>
    </ul>
</nav>
);
export default Breadcrumbs;
