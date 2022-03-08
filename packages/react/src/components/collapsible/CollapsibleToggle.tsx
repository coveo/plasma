import {ArrowHeadDownSize16Px, ArrowHeadUpSize16Px} from '@coveord/plasma-react-icons';
import * as React from 'react';

export interface CollapsibleToggleProps {
    expanded: boolean;
}

export const CollapsibleToggle: React.FunctionComponent<CollapsibleToggleProps & React.SVGProps<SVGSVGElement>> = ({
    expanded,
    ...svgProps
}) => {
    const Icon = expanded ? ArrowHeadUpSize16Px : ArrowHeadDownSize16Px;
    return <Icon height={16} {...svgProps} />;
};
