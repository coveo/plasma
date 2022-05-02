import {PageLayout} from '../../building-blocs/PageLayout';

const custom = `
    import {SubNavigationConnected, Svg} from '@coveord/plasma-react';
    
    export default () => (
        <SubNavigationConnected
            id="third-sub-nav"
            items={[
                {
                    label: (
                        <span className="flex space-between">
                            <span className="truncate">Avatar</span>
                            <Svg svgName="thumbUp" svgClass="icon" />
                        </span>
                    ),
                    id: 'avatar',
                    disabled: true,
                },
                {
                    label: (
                        <span className="flex space-between">
                            <span className="truncate">Titanic</span>
                            <Svg svgName="thumbUp" svgClass="icon" />
                        </span>
                    ),
                    id: 'titanic',
                },
                {
                    label: (
                        <span className="flex space-between">
                            <span className="truncate pr1">Star Wars: The Force Awakens</span>
                            <Svg svgName="thumbUp" svgClass="icon" />
                        </span>
                    ),
                    id: 'star-wars',
                },
                {
                    label: (
                        <span className="flex space-between">
                            <span className="truncate">Jurassic World</span>
                            <Svg svgName="thumbDown" svgClass="icon" />
                        </span>
                    ),
                    id: 'jurasic-world',
                },
                {
                    label: (
                        <span className="flex space-between">
                            <span className="truncate">The Avengers</span>
                            <Svg svgName="thumbDown" svgClass="icon" />
                        </span>
                    ),
                    id: 'the-avengers',
                },
            ]}
            defaultSelected="titanic"
        />
    );
`;

const defaultSelected = `
    import {SubNavigationConnected} from '@coveord/plasma-react';

    export default () => {
        const exampleItems = [
            {label: 'Avatar', id: 'avatar'},
            {label: 'Titanic', id: 'titanic'},
            {label: 'Star Wars: The Force Awakens', id: 'star-wars'},
            {label: 'Jurassic World', id: 'jurasic-world'},
            {label: 'The Avengers', id: 'the-avengers'},
        ];

        return (
            <SubNavigationConnected id="second-sub-nav" items={exampleItems} defaultSelected="star-wars" />
        ); 
    };
`;

const code = `
    import {SubNavigationConnected} from '@coveord/plasma-react';

    export default () => {
        const exampleItems = [
            {label: 'Avatar', id: 'avatar'},
            {label: 'Titanic', id: 'titanic'},
            {label: 'Star Wars: The Force Awakens', id: 'star-wars'},
            {label: 'Jurassic World', id: 'jurasic-world'},
            {label: 'The Avengers', id: 'the-avengers'},
        ];

        return (
            <SubNavigationConnected id="first-sub-nav" items={exampleItems} />
        ); 
    };
`;

export const SubNavigationExamples = () => (
    <PageLayout
        id="SubNavigation"
        componentSourcePath="/subNavigation/SubNavigation.tsx"
        title="SubNavigation"
        section="Navigation"
        description="A subnavigation is a secondary vertical navigation component that allows users to navigate between sections of the same interface."
        thumbnail="subNavigation"
        code={code}
        examples={{
            defaultSelected: {code: defaultSelected, title: 'Default selected'},
            custom: {code: custom, title: 'Custom JSX labels and disabled item'},
        }}
    />
);
export default SubNavigationExamples;
