import {FunctionComponent} from 'react';
import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
    import {IconCard} from '@coveord/plasma-react';

    export default () => (
        <IconCard
            title="Card title"
            icon={<img src="https://placeholder.pics/svg/72x72/DEDEDE/FFFFFF-FFFFFF" />}
            description="Card description"
            onClick={() => alert('You clicked the card')}
        />
    );
`;

const choices = `
    import {IconCard} from '@coveord/plasma-react';
    import {CloudSize24Px, DatabaseSize24Px, CrawlingBotSize24Px} from '@coveord/plasma-react-icons';
    
    export default () => (
        <IconCard
            title="Web"
            description="Enter a starting URL and automatically index all the pages of this site."
            icon={<img src="https://placeholder.pics/svg/72x72/DEDEDE/FFFFFF-FFFFFF" />}
            choices={[
                {value: 'cloud', label: 'Cloud', icon: CloudSize24Px},
                {value: 'on-prem', label: 'On-Premise', icon: DatabaseSize24Px},
                {value: 'crodule', label: 'Crawling Module', icon: CrawlingBotSize24Px, disabled: true},
            ]}
            onClick={(choice) => alert(choice)}
        />
    );
`;

const small = `
    import {IconCard} from '@coveord/plasma-react';
    import {CloudSize24Px, DatabaseSize24Px, CrawlingBotSize24Px} from '@coveord/plasma-react-icons';

    export default () => (
        <IconCard
            small
            title="Web"
            icon={<img src="https://placeholder.pics/svg/40x40/DEDEDE/FFFFFF-FFFFFF" />}
            choices={[
                {value: 'cloud', label: 'Cloud', icon: CloudSize24Px},
                {value: 'on-prem', label: 'On-Premise', icon: DatabaseSize24Px},
                {value: 'crodule', label: 'Crawling Module', icon: CrawlingBotSize24Px, disabled: true},
            ]}
            onClick={(choice) => alert(choice)}
            style={{width: '368px'}}
        />
    );
`;

const disabled = `
    import {BadgeIconPlacement, IconCard} from '@coveord/plasma-react';
    import {LockSize16Px} from '@coveord/plasma-react-icons';

    export default () => (
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
`;

const badgesOnTop = `
    import {IconCard, BadgeType} from '@coveord/plasma-react';

    export default () => (
        <IconCard
            title="Simple builder"
            description="For lightweight usage, prototyping, and testing the search experience. Hosted by Coveo."
            icon={<img style={{width: '112px', height: '112px'}} src="https://placeholder.pics/svg/112x112/DEDEDE/FFFFFF-FFFFFF" />}
            customIconSize
            placeBadgesAbove
            badges={[{label: 'Recommended', isSmall: true, type: BadgeType.Default}]}
            animateOnHover
            onClick={() => alert('You clicked the card')}
        />
    );
`;

export const IconCardExamples: FunctionComponent = () => (
    <PageLayout
        id="IconCard"
        title="Icon Card"
        section="Layout"
        description="An icon card is an element that regroups related pieces of information together. It can be either static or interactive."
        componentSourcePath="/iconCard/IconCard.tsx"
        code={code}
        examples={{
            choices: {code: choices, title: 'With multiple choices'},
            small: {code: small, title: 'Small, with multiple choices'},
            disabled: {code: disabled, title: 'Disabled, with lock badge'},
            badgesOnTop: {code: badgesOnTop, title: 'With badges on top'},
        }}
    />
);

export default IconCardExamples;
