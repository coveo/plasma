import {ForwardRefExoticComponent, SVGProps} from 'react';

export * from './generated/index.js';
export * from './TablerIcons.js';

export type PlasmaIcon = ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, 'ref'> & React.RefAttributes<SVGSVGElement>
>;
