import {FunctionComponent} from 'react';
import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
    import {IconCard} from '@coveord/plasma-react';

    export default () => (
        <IconCard
            title="Card title"
            svgName="sourceCustom"
            description="Card description"
            onClick={() => alert('You clicked the card')}
        />
    );
`;

const choices = `
    import {IconCard} from '@coveord/plasma-react';

    export default () => (
        <IconCard
            title="Web"
            description="Enter a starting URL and automatically index all the pages of this site."
            svgName="sourceWeb"
            choices={[
                {value: 'cloud', label: 'Cloud', icon: 'cloud'},
                {value: 'on-prem', label: 'On-Premise', icon: 'database'},
                {value: 'crodule', label: 'Crawling Module', icon: 'crawlingBot', disabled: true},
            ]}
            onClick={(choice) => alert(choice)}
        />
    );
`;

const small = `
    import {IconCard} from '@coveord/plasma-react';

    export default () => (
        <IconCard
            small
            title="Web"
            svgName="sourceWeb"
            choices={[
                {value: 'cloud', label: 'Cloud', icon: 'cloud'},
                {value: 'on-prem', label: 'On-Premise', icon: 'database'},
                {value: 'crodule', label: 'Crawling Module', icon: 'crawlingBot', disabled: true},
            ]}
            onClick={(choice) => alert(choice)}
            style={{width: '368px'}}
        />
    );
`;

const disabled = `
import {BadgeIconPlacement, IconCard} from '@coveord/plasma-react';

export default () => (
    <IconCard
        small
        title="Web"
        svgName="sourceWeb"
        disabled
        badges={[{icon: 'lock', iconPlacement: BadgeIconPlacement.Left, isSmall: true}]}
        tooltip={{title: 'This source is not included in your license'}}
        style={{width: '368px'}}
    />
);
`;

const badgesOnTop = `
    import {IconCard, BadgeType} from '@coveord/plasma-react';

    export default () => (
        <IconCard
            title={<span className="h5 bolder">Simple builder</span>}
            description="For lightweight usage, prototyping, and testing the search experience. Hosted by Coveo."
            svgChild={<img className="mr3" style={{width: '112px', height: '112px'}} src="https://placeholder.pics/svg/112x112/DEDEDE/FFFFFF-FFFFFF" />}
            placeBadgesAbove
            badges={[{label: 'Recommended', isSmall: true, type: BadgeType.Default}]}
            animateOnHover
            onClick={() => alert('You clicked the card')}
            cardClassName={['mod-fixed-size']}
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
