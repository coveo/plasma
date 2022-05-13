import {Badge, BadgeIconPlacement} from '@coveord/plasma-react';
import {LockSize16Px} from '@coveord/plasma-react-icons';

export default () => (
    <div className="flex">
        <Badge
            icon={LockSize16Px}
            label={'Icon is right'}
            iconPlacement={BadgeIconPlacement.Right}
            extraClasses={['ml1']}
        />
        <Badge
            icon={LockSize16Px}
            label={'Icon is Left'}
            iconPlacement={BadgeIconPlacement.Left}
            extraClasses={['ml1']}
        />
        <Badge
            isSmall
            icon={LockSize16Px}
            label={'Icon is right'}
            iconPlacement={BadgeIconPlacement.Right}
            extraClasses={['ml1']}
        />
        <Badge
            isSmall
            icon={LockSize16Px}
            label={'Icon is left'}
            iconPlacement={BadgeIconPlacement.Left}
            extraClasses={['ml1']}
        />
        <Badge isSmall icon={LockSize16Px} iconPlacement={BadgeIconPlacement.Right} extraClasses={['ml1']} />
    </div>
);
