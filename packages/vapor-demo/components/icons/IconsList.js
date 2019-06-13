import * as VaporSVG from 'coveo-styleguide';
import Svg from '../Svg';

export const IconsList = () => {
    return (
        <ul className="sg-icons-list">
            {Object.keys(VaporSVG.svg)
                .sort()
                .map((svgName) => (
                    <IconItem key={svgName} svgName={svgName} />
                ))}
        </ul>
    );
};

function IconItem({svgName}) {
    return (
        <li>
            <div>
                <Svg name={svgName} />
            </div>
            <label className="icon-name">{svgName}</label>
        </li>
    );
}

export default IconsList;
