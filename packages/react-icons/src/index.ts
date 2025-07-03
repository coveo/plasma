import {ForwardRefExoticComponent, SVGProps} from 'react';

export * from './generated';
export * from './TablerIcons';

export type PlasmaIcon = ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, 'ref'> & React.RefAttributes<SVGSVGElement>
>;
