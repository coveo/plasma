import {LoadableComponent} from '@loadable/component';
import {ComponentType} from 'react';

export * from './generated';

export type Icon = ComponentType<React.PropsWithChildren<React.SVGProps<SVGSVGElement>>> | LoadableComponent<React.SVGProps<SVGSVGElement>>;

