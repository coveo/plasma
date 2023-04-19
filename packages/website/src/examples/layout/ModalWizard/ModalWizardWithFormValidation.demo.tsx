import {Button, Flex, ModalWizard, ModalWizardStepProps, TextInput, Title, useForm} from '@coveord/plasma-mantine';
import {useState} from 'react';

export default () => {
    const [opened, setOpened] = useState(false);

    const form = useForm({
        initialValues: {
            firstName: '',
            lastName: '',
        },
        validate: {
            firstName: (value) => (value.length < 2 ? 'Minimum 2 characters required' : null),
            lastName: (value) => (value.length < 2 ? 'Minimum 2 characters required' : null),
        },
    });

    const Steps: Array<Omit<ModalWizardStepProps, 'children'> & {element: JSX.Element}> = [
        {
            docLink: 'https://coveo.com',
            title: 'Current Step is 1',
            docLinkTooltipLabel: 'Tooltip label',
            element: (
                <Flex direction="column" gap="sm">
                    <Title order={5}>First Name</Title>

                    <TextInput {...form.getInputProps('firstName')} placeholder="Enter first name" />
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
                    <TextInput {...form.getInputProps('lastName')} placeholder="Enter last name" />
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
                    form.validateField('lastName');
                    if (form.isValid('lastName') && form.isDirty('lastName')) {
                        setOpened(false);
                        form.reset();
                    }
                }}
                onNext={async (newStepIndex, setCurrentStepIndex) => {
                    form.validateField('firstName');
                    if (form.isValid('firstName') && form.isDirty('firstName')) {
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
