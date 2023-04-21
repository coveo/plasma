import {BadgeIconPlacement, IconCard} from '@coveord/plasma-react';
import {LockSize16Px} from '@coveord/plasma-react-icons';

const Demo = () => (
    <IconCard
        small
        title="Web"
        icon={<img src="https://placeholder.pics/svg/40x40/DEDEDE/FFFFFF-FFFFFF" />}
        disabled
        badges={[{icon: LockSize16Px, iconPlacement: BadgeIconPlacement.Left, isSmall: true}]}
        tooltip={{title: 'This source is not included in your license'}}
        style={{width: '368px'}}
    />
);
export default Demo;
