import * as React from 'react';
import {ExampleComponent} from '../../../../docs/src/components/ComponentsInterface';
import {Button} from '../../button/Button';
import {Section} from '../../section/Section';
import {Svg} from '../../svg/Svg';
import {BasicHeader} from '../BasicHeader';
import {BreadcrumbHeader} from '../BreadcrumbHeader';
import {actions, defaultBreadcrumb, defaultTabs, defaultTitle} from './ExamplesUtils';

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
    </Section>
);
