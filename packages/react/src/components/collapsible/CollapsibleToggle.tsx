import {ArrowHeadDownSize16Px, ArrowHeadUpSize16Px} from '@coveord/plasma-react-icons';
import {FunctionComponent, SVGProps} from 'react';

export interface CollapsibleToggleProps {
    expanded: boolean;
}

export const CollapsibleToggle: FunctionComponent<
    React.PropsWithChildren<CollapsibleToggleProps & SVGProps<SVGSVGElement>>
> = ({expanded, ...svgProps}) => {
    const Icon = expanded ? ArrowHeadUpSize16Px : ArrowHeadDownSize16Px;
    return <Icon height={16} {...svgProps} />;
};
