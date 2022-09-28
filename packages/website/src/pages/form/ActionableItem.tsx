import {FunctionComponent} from 'react';
import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
    import {ActionableItem} from '@coveord/plasma-react';
    
    export default () => (
        <ActionableItem
            id="🆔"
            onItemClick={() => alert('you triggered the main button')}
            actions={[
                {value: 'action 1', onOptionClick: () => alert('you triggered the first action')},
                {value: 'action 2', onOptionClick: () => alert('you triggered the second action')},
            ]}
        >
            click on the dots
        </ActionableItem>
    );
`;

const ActionableItemExamples: FunctionComponent<React.PropsWithChildren<unknown>> = () => (
    <PageLayout
        id="ActionableItem"
        title="Actionable Item"
        section="Form"
        description="An actionable item is a dropdown menu listing actions associated with an element."
        code={code}
        componentSourcePath="/actionable-item/ActionableItem.tsx"
    />
);

export default ActionableItemExamples;
