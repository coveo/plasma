import {Badge} from '@mantine/core';

export const BadgePrimary = Badge.withProps({variant: 'light'});
export const BadgeSecondary = Badge.withProps({variant: 'outline'});
export const BadgeTertiary = Badge.withProps({variant: 'default'});

export const BadgeInfo = Badge.withProps({variant: 'light'});
export const BadgeRecommended = Badge.withProps({variant: 'light', color: 'success'});
export const BadgeCritical = Badge.withProps({variant: 'light', color: 'critical'});
export const BadgeWarning = Badge.withProps({variant: 'light', color: 'warning'});
