import {IconCard, BadgeType} from '@coveord/plasma-react';

export default () => (
    <IconCard
        title="Simple builder"
        description="For lightweight usage, prototyping, and testing the search experience. Hosted by Coveo."
        icon={
            <img
                style={{width: '112px', height: '112px'}}
                src="https://placeholder.pics/svg/112x112/DEDEDE/FFFFFF-FFFFFF"
            />
        }
        customIconSize
        placeBadgesAbove
        badges={[{label: 'Recommended', isSmall: true, type: BadgeType.Default}]}
        animateOnHover
        onClick={() => alert('You clicked the card')}
    />
);
