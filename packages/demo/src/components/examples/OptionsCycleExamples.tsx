import * as React from 'react';
import {OptionsCycleConnected, Section} from 'react-vapor';

import {ExampleComponent} from '../ComponentsInterface';

export const OptionsCycleExamples: ExampleComponent = () => <OptionsCycles />;

const OPTIONS = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

const OptionsCycles: React.FunctionComponent = () => (
    <Section>
        <Section level={2} title="Option cycle">
            <OptionsCycleConnected id="Cycle-1" options={OPTIONS} />
        </Section>

        <Section level={2} title="Options Cycle starting at 2 with no wrap around">
            <OptionsCycleConnected id="Cycle-2" options={OPTIONS} startAt={1} />
        </Section>

        <Section level={2} title="Option cycle with custom styles">
            <OptionsCycleConnected
                id="Cycle-3"
                options={OPTIONS}
                previousClassName="btn mod-border w4"
                buttonClassName="btn ml1"
                nextClassName="btn mod-border ml1 w4"
            />
        </Section>
    </Section>
);
