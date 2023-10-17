import {ForwardRefExoticComponent, SVGProps} from 'react';

export * from './generated';

export type Icon = ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'> & React.RefAttributes<SVGSVGElement>>;
