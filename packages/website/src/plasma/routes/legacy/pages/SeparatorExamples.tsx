import * as React from 'react';
import {Badge, Section, Separator} from '@coveord/plasma-react';

import VaporComponent from '../../../../demo-building-blocs/VaporComponent';

// start-print

export const SeparatorExamples = () => (
    <VaporComponent id="separator" title="Separator" withSource>
        <Section>
            <Badge label="Badge" />
            <Separator />
            <span>This is a text</span>
        </Section>
    </VaporComponent>
);
