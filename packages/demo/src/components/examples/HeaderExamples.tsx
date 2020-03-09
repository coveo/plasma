import * as React from 'react';
import {BasicHeader, BreadcrumbHeader, Button, Section, Svg} from 'react-vapor';

import {ExampleComponent} from '../ComponentsInterface';
import {actions, defaultBreadcrumb, defaultTabs, defaultTitle, link1, link2} from './ExamplesUtils';

export const HeaderExamples: ExampleComponent = () => (
    <Section>
        <SimpleHeader />
        <BreadcrumbHeaders />
    </Section>
);

// start-print

const SimpleHeader: React.FunctionComponent = () => (
    <Section level={2} title="Simple Header">
        <Section level={3} title="Basic header with actions and tabs">
            <BasicHeader
                title={defaultTitle}
                description="Simple description for the title"
                actions={actions}
                tabs={defaultTabs}
            />
        </Section>
    </Section>
);

const BreadcrumbHeaders: React.FunctionComponent = () => (
    <Section level={2} title="Breadcrumb headers">
        <Section level={3} title="Breadcrumb with a node as action and tabs">
            <BreadcrumbHeader
                breadcrumb={defaultBreadcrumb}
                description="Simple description for the title"
                tabs={defaultTabs}
                actions={[
                    {
                        content: (
                            <Button>
                                <Svg svgName={'add'} className="icon mod-lg mod-align-with-text" />
                            </Button>
                        ),
                    },
                ]}
            />
        </Section>
        <Section level={3} title="Breadcrumb header without border bottom">
            <BreadcrumbHeader
                breadcrumb={defaultBreadcrumb}
                description="Simple description for the title"
                hasBorderBottom={false}
            />
        </Section>
        <Section level={3} title="Breadcrumb header with a section without link">
            <BreadcrumbHeader
                breadcrumb={{...defaultBreadcrumb, links: [link1, {name: 'not a link'}, link2]}}
                description="Simple description for the title"
                hasBorderBottom={false}
            >
                <Svg svgName="brain" svgClass="icon mod-20 fill-dodger-blue ml1" />
            </BreadcrumbHeader>
        </Section>
    </Section>
);
