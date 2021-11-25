import * as React from 'react';
import {BreadcrumbHeader, Button, Section, Svg} from 'react-vapor';

import {defaultBreadcrumb, link1, link2} from '../../../utils/ExamplesUtils';
import VaporComponent from '../../../../demo-building-blocs/VaporComponent';

// start-print

export const BreadcrumbExamples: React.FunctionComponent = () => (
    <VaporComponent id="breadcrumb" title="Breadcrumbs" withSource>
        <Section level={2} title="Breadcrumb headers">
            <Section level={3} title="Breadcrumb with a node as action and tabs">
                <BreadcrumbHeader
                    breadcrumb={defaultBreadcrumb}
                    description="Simple description for the title"
                    tabs={[
                        {groupId: 'example2', id: 'tab1', title: 'Digimon'},
                        {groupId: 'example2', id: 'tab2', title: 'Beyblade'},
                        {groupId: 'example2', id: 'tab3', title: 'Pokemon'},
                        {groupId: 'example2', id: 'tab4', title: 'Perdu', url: 'http://www.perdu.com'},
                    ]}
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
                    <Svg svgName="brain" svgClass="icon mod-20 ml1" className="flex" />
                </BreadcrumbHeader>
            </Section>
        </Section>
    </VaporComponent>
);
