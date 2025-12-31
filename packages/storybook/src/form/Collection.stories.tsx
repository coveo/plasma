import {enhanceWithCollectionProps, useForm} from '@coveord/plasma-mantine';
import {Collection} from '@coveord/plasma-mantine/components/Collection';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {FunctionComponent, ReactNode, useCallback, useMemo, useRef} from 'react';
import {BaseInputArgs, InputWrapperArgs} from './InputWrapperArgs.js';

const meta: Meta<typeof Collection> = {
    title: '@components/form/Collection',
    component: Collection,
    parameters: {
        layout: 'centered',
    },
    args: {
        ...InputWrapperArgs.Args,
        ...BaseInputArgs.Args,
        draggable: true,
        allowAdd: true,
        addLabel: 'Add item',
        addDisabledTooltip: 'Adding item is disabled',
    },
    argTypes: {
        ...InputWrapperArgs.ArgsTypes,
        ...BaseInputArgs.ArgsTypes,
    },
};
export default meta;
type Story = StoryObj<typeof Collection>;

const PlaceholderCollectionItem: FunctionComponent<{children: ReactNode}> = ({children}) => (
    <div
        style={{
            height: 36,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'var(--mantine-radius-default)',
            backgroundColor: 'var(--mantine-color-blue-2)',
        }}
    >
        {children}
    </div>
);
PlaceholderCollectionItem.displayName = 'PlaceholderCollectionItem';

const useCounter = () => {
    const count = useRef(0);
    const getNext = useCallback(() => {
        count.current += 1;
        return count.current.toString();
    }, []);
    return getNext;
};

export const Demo: Story = {
    render: (props) => {
        const getNext = useCounter();
        const items = useMemo(() => [getNext(), getNext(), getNext()], []);
        const form = useForm({
            initialValues: {items},
            enhanceGetInputProps: (payload) => ({
                ...enhanceWithCollectionProps(payload, 'items'),
            }),
        });
        return (
            <Collection<string>
                {...form.getInputProps('items')}
                w={400}
                required={props.required}
                draggable={props.draggable}
                addLabel={props.addLabel}
                description={props.description}
                addDisabledTooltip={props.addDisabledTooltip}
                disabled={props.disabled}
                readOnly={props.readOnly}
                label={props.label}
                allowAdd={props.allowAdd}
                newItem={getNext}
                error={props.error}
            >
                {(item) => <PlaceholderCollectionItem>Collection item {item}</PlaceholderCollectionItem>}
            </Collection>
        );
    },
};
