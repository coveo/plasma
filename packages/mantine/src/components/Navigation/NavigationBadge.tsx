import {ComponentProps, FunctionComponent} from 'react';
import {Badge, type SemanticBadge} from '../Badge/Badge.js';

export type NavigationBadgeVariant = 'beta' | 'wip' | 'new';

const badgeColorMapping: Record<NavigationBadgeVariant, SemanticBadge> = {
    wip: Badge.Warning,
    beta: Badge.Secondary,
    new: Badge.Primary,
};

export interface NavigationBadgeProps {
    variant: NavigationBadgeVariant;
    on?: ComponentProps<SemanticBadge>['on'];
}

export const NavigationBadge: FunctionComponent<NavigationBadgeProps> = ({variant, on = 'dark'}) => {
    const BadgeComponent = badgeColorMapping[variant];
    return (
        <BadgeComponent on={on} data-navbadge={variant}>
            {variant}
        </BadgeComponent>
    );
};

NavigationBadge.displayName = 'NavigationBadge';
