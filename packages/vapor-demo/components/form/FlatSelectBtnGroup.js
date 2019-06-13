import * as VaporSVG from 'coveo-styleguide';
import Svg from '../Svg';

export default function FlatSelectModifiers() {
    return (
        <>
            <div className="flat-select mod-btn-group">
                <a className="flat-select-option selectable">
                    <span>Option 1</span>
                </a>
                <a className="flat-select-option">Option 2</a>
                <a className="flat-select-option selectable">Option 3</a>
                <a className="flat-select-option selectable">
                    <Svg name={VaporSVG.svg.clear.name} className="icon-container" svgClass="icon" />
                    Option 4
                </a>
                <a className="flat-select-option">
                    <Svg name={VaporSVG.svg.clear.name} className="icon-container" svgClass="icon" />
                    Option 5
                </a>
            </div>
        </>
    );
}
