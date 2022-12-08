import {ActionableItemMetadata} from '@coveord/plasma-components-props-analyzer';
import ActionableItemDemo from '@examples/legacy/form/ActionableItem/ActionableItem.demo.tsx';
import {FunctionComponent} from 'react';

import {PageLayout} from '../../../building-blocs/PageLayout';

const ActionableItemDemos: FunctionComponent = () => (
    <PageLayout
        id="ActionableItem"
        title="Actionable Item"
        section="Form"
        description="An actionable item is a dropdown menu listing actions associated with an element."
        demo={<ActionableItemDemo center />}
        propsMetadata={ActionableItemMetadata}
        sourcePath="/packages/react/src/components/actionable-item/ActionableItem.tsx"
    />
);

export default ActionableItemDemos;
