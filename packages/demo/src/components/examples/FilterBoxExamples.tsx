import * as React from 'react';
import {Button, FilterBoxConnected, Section, Svg} from 'react-vapor';

import {ExampleComponent} from '../ComponentsInterface';

export const FilterBoxExamples: ExampleComponent = () => <FilterBoxes />;
FilterBoxExamples.description = 'Will be used to filter content';

// start-print

const FilterBoxes: React.FunctionComponent = () => (
    <Section title="FilterBox Examples">
        <Section level={3} title="A filterBox with a custom placeholder.">
            <FilterBoxConnected id="FirstFilterBox" filterPlaceholder="Custom Placeholder" />
        </Section>
        <Section level={3} title="A filterBox with a maximum width.">
            <FilterBoxConnected id="SecondFilterBox" maxWidth={160} />
        </Section>
        <Section level={3} title="A filterBox with a child component">
            <FilterBoxConnected
                id="FilterBoxExampleComponentWithChildren"
                className={'flex flex-center'}
                filterPlaceholder="Filter"
            >
                <Button classes={['p1', 'ml1']} enabled onClick={() => alert('clicked !')}>
                    <Svg svgName={'add'} className="icon mod-lg mod-align-with-text" />
                </Button>
            </FilterBoxConnected>
        </Section>
    </Section>
);
