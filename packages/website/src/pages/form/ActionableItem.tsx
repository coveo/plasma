import React from 'react';
import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
    import * as React from 'react';
    import {ActionableItem} from '@coveord/plasma-react';
    
    export default () => (
        <ActionableItem
            id="actionable-item-id"
            actions={[
                {value: 'action 1', onOptionClick: () => alert('you triggered the first action')},
                {value: 'action 2', onOptionClick: () => alert('you triggered the second action')},
            ]}
        >
            click on the dots
        </ActionableItem>
    );
`;

const withOnItemClick = `
    import * as React from 'react';
    import {ActionableItem} from '@coveord/plasma-react';
    
    export default () => (
        <ActionableItem
            id="actionable-item-2"
            onItemClick={(e: React.MouseEvent<HTMLDivElement>) => alert('you triggered the onItemClick method')}
            actions={[
                {value: 'action 1', onOptionClick: () => alert('you triggered the first action')},
                {value: 'action 2', onOptionClick: () => alert('you triggered the second action')},
            ]}
        >
            click on the dots
        </ActionableItem>
    );
`;

const ActionableItemExamples: React.FunctionComponent = () => (
    <PageLayout
        id="ActionableItem"
        title="Actionable Item"
        section="Form"
        description="An actionable item is a dropdown menu listing actions associated with an element."
        code={code}
        examples={{
            withOnItemClick: {code: withOnItemClick, title: 'With OnItemClick Prop'},
        }}
        componentSourcePath="/actionable-item/ActionableItem.tsx"
    />
);

export default ActionableItemExamples;
