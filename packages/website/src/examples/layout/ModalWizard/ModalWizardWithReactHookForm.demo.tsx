import {Button, Flex, ModalWizard, ModalWizardStepProps, TextInput, Title} from '@coveord/plasma-mantine';
import {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';

export default () => {
    const [opened, setOpened] = useState(false);

    const form = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
        },
        mode: 'onBlur',
    });

    const Steps: Array<Omit<ModalWizardStepProps, 'children'> & {element: JSX.Element}> = [
        {
            docLink: 'https://coveo.com',
            title: 'Current Step is 1',
            docLinkTooltipLabel: 'Tooltip label',
            element: (
                <Flex direction="column" gap="sm">
                    <Title order={5}>First Name</Title>

                    <Controller
                        control={form.control}
                        name="firstName"
                        rules={{
                            required: {value: true, message: 'First name is required'},
                            minLength: {value: 2, message: 'Minimum 2 characters required'},
                        }}
                        render={({field, fieldState: {error}}) => (
                            <TextInput {...field} placeholder="Enter first name" error={error?.message} />
                        )}
                    />
                </Flex>
            ),
        },
        {
            docLink: 'https://coveo.com',
            title: 'Current Step is 2',
            docLinkTooltipLabel: 'Tooltip label',
            element: (
                <Flex direction="column" gap="sm">
                    <Title order={5}>Last Name</Title>
                    <Controller
                        control={form.control}
                        name="lastName"
                        rules={{
                            required: {value: true, message: 'Last name is required'},
                            minLength: {value: 2, message: 'Minimum 2 characters required'},
                        }}
                        render={({field, fieldState: {error}}) => (
                            <TextInput {...field} placeholder="Enter last name" error={error?.message} />
                        )}
                    />
                </Flex>
            ),
        },
    ];

    return (
        <>
            <Button m="md" onClick={() => setOpened(true)}>
                Open ModalWizard
            </Button>
            <ModalWizard
                isStepValidatedOnNext
                size="sm"
                onClose={() => {
                    setOpened(false);
                    form.reset();
                }}
                opened={opened}
                onFinish={async () => {
                    await form.trigger(['lastName']);
                    if (!form.getFieldState('lastName').invalid && form.getFieldState('lastName').isDirty) {
                        setOpened(false);
                        form.reset();
                    }
                }}
                onNext={async (newStepIndex, setCurrentStepIndex) => {
                    await form.trigger(['firstName', 'lastName']);
                    if (!form.getFieldState('firstName').invalid && form.getFieldState('firstName').isDirty) {
                        setCurrentStepIndex(newStepIndex);
                    }
                }}
            >
                {Steps.map((step, index) => (
                    <ModalWizard.Step
                        key={index}
                        docLink={step.docLink}
                        title={step.title}
                        description={step.description}
                        showProgressBar={step.showProgressBar}
                        countsAsProgress={step.countsAsProgress}
                    >
                        {step.element}
                    </ModalWizard.Step>
                ))}
            </ModalWizard>
        </>
    );
};
