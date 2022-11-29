import {ActionableItemMetadata} from '@coveord/plasma-components-props-analyzer';
import ActionableItemExample from '@examples/legacy/form/ActionableItem/ActionableItem.example.tsx';
import {FunctionComponent} from 'react';

import {PageLayout} from '../../../building-blocs/PageLayout';

const ActionableItemExamples: FunctionComponent = () => (
    <PageLayout
        id="ActionableItem"
        title="Actionable Item"
        section="Form"
        description="An actionable item is a dropdown menu listing actions associated with an element."
        code={ActionableItemExample}
        propsMetadata={ActionableItemMetadata}
        componentSourcePath="/actionable-item/ActionableItem.tsx"
    />
);

export default ActionableItemExamples;
