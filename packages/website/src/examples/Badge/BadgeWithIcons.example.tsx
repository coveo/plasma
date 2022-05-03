import * as React from 'react';
import {Badge, BadgeIconPlacement} from '@coveord/plasma-react';

export default () => (
    <div className="flex">
        <Badge icon="lock" label={'Icon is right'} iconPlacement={BadgeIconPlacement.Right} extraClasses={['ml1']} />
        <Badge icon="lock" label={'Icon is Left'} iconPlacement={BadgeIconPlacement.Left} extraClasses={['ml1']} />
        <Badge
            isSmall
            icon="lock"
            label={'Icon is right'}
            iconPlacement={BadgeIconPlacement.Right}
            extraClasses={['ml1']}
        />
        <Badge
            isSmall
            icon="lock"
            label={'Icon is left'}
            iconPlacement={BadgeIconPlacement.Left}
            extraClasses={['ml1']}
        />
        <Badge isSmall icon="lock" iconPlacement={BadgeIconPlacement.Right} extraClasses={['ml1']} />
    </div>
);
