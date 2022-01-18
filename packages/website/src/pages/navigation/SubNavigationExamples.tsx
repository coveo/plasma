import * as React from 'react';
import {Section, SubNavigationConnected, Svg} from '@coveord/plasma-react';

import {ExampleComponent} from '../../utils/ExamplesUtils';
import VaporComponent from '../../building-blocs/VaporComponent';
export const SubNavigationExamples: ExampleComponent = () => <SubNavigationConnectedExamples />;

// start-print

const exampleItems = [
    {label: 'Avatar', id: 'avatar'},
    {label: 'Titanic', id: 'titanic'},
    {label: 'Star Wars: The Force Awakens', id: 'star-wars'},
    {label: 'Jurassic World', id: 'jurasic-world'},
    {label: 'The Avengers', id: 'the-avengers'},
];

const SubNavigationConnectedExamples: React.FunctionComponent = () => (
    <VaporComponent id="SubNavigation" title="SubNavigation" withSource>
        <Section title="Sub Navigation Examples">
            <Section level={2} title="Sub Navigation">
                <div className="flex" style={{height: '200px'}}>
                    <SubNavigationConnected id="first-sub-nav" items={exampleItems} />
                </div>
            </Section>
            <Section level={2} title="Sub Navigation with default selected">
                <div className="flex" style={{height: '120px'}}>
                    <SubNavigationConnected id="second-sub-nav" items={exampleItems} defaultSelected="star-wars" />
                </div>
            </Section>
            <Section level={2} title="Sub-navigation with custom JSX labels and disabled item">
                <div className="flex" style={{width: '250px', height: '200px'}}>
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
                </div>
            </Section>
        </Section>
    </VaporComponent>
);
