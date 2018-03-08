import { IBadgeProps } from '../../badge/Badge';
import { ICornerRibbonProps } from '../../cornerRibbon/CornerRibbon';

export const MULTIPLE_BADGES: IBadgeProps[] = [
  {
    label: 'Badge 1',
    extraClasses: ['bg-blue'],
  },
  {
    label: 'Badge 2',
    extraClasses: ['bg-medium-blue'],
  },
  {
    label: 'Badge 3',
    extraClasses: ['bg-darker-blue'],
  },
];

export const BETA_RIBBON_PROPS: ICornerRibbonProps = {
  label: 'Beta',
  extraClasses: ['bg-orange', 'bold'],
};
