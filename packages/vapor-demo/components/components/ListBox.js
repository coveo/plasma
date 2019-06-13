import * as VaporSVG from 'coveo-styleguide';
import Svg from '../Svg';

export const ListBox = () => (
    <ul className="list-box">
        <li className="item-box active">Option 1 active</li>
        <li className="item-box selected">Option 2 selected</li>
        <li className="item-box">Option 3</li>
        <li className="item-box">Option 4</li>
        <li className="item-box">Option 5</li>
        <li className="item-box">Option 6</li>
        <li className="item-box"><span className="text-medium-grey mr1">Prepend</span>Option 7</li>
        <li className="item-box">
            <span className="inline-flex mr1">
                <Svg name={VaporSVG.svg.domainGoogle.name} className='icon' />
            </span>
            Option 8
        </li>
        <li className="item-box">
            Option 9
            <span className="inline-flex ml1">
                <Svg name={VaporSVG.svg.domainGoogle.name} className='icon' />
            </span>
        </li>
        <li className="item-box disabled">Option 10 disabled</li>
        <li className="item-box divider" />
        <li className="item-box">Option 12</li>
        <li className="item-box">Option 13</li>
        <li className="item-box">Option 14</li>
        <li className="item-box multi-line">Multi line: Option option option option option option option option option option option option option
            option option option option option option option option option option option option option option option option option option option
            option option option option option option option option option option option option option option option option option option option
            option option option option option option option option option option option option option
        </li>
        <li className="item-box">Without multi line: Option option option option option option option option option option option option option
            option option option option option option option option option option option option option option option option option option option
            option option option option option option option option option option option option option option option option option option option
            option option option option option option option option option option option option option
        </li>
    </ul>
);
export default ListBox;
