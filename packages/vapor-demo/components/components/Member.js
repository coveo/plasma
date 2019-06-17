import * as VaporSVG from 'coveo-styleguide';
import Svg from '../Svg';

export const Member = () => (
    <div className="member bg-medium-grey p1">
        <div className="member-icon">
            <Svg name={VaporSVG.svg.domainGoogle.name} className="member-icon-provider icon mod-2x" />
        </div>
        <div className="member-info">
            <div className="member-info-name">Member name</div>
            <div className="member-info-email">member@domain.com</div>
        </div>
    </div>
);
export default Member;
