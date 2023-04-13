import {Button, Flex, ModalWizard, ModalWizardStepProps, TextInput, Title} from '@coveord/plasma-mantine';
import {zodResolver} from '@hookform/resolvers/zod';
import {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {z} from 'zod';

export default () => {
    const [opened, setOpened] = useState(false);

    const validationSchema = z.object({
        firstName: z.string().min(2),
        lastName: z.string().min(2),
        email: z.string().email(),
    });

    const form = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        mode: 'onBlur',
        resolver: zodResolver(validationSchema),
    });

    const Steps: Array<Omit<ModalWizardStepProps, 'children'> & {element: JSX.Element}> = [
        {
            docLink: 'https://coveo.com',
            title: 'Current Step is 1',
            docLinkTooltipLabel: 'Tooltip label',
            element: (
                <Flex direction="column" gap="sm">
                    <Title order={5}>Name</Title>

                    <Controller
                        control={form.control}
                        name="firstName"
                        render={({field, fieldState: {error}}) => (
                            <TextInput {...field} placeholder="First Name" error={error?.message} />
                        )}
                    />
                    <Controller
                        control={form.control}
                        name="lastName"
                        render={({field, fieldState: {error}}) => (
                            <TextInput {...field} placeholder="Last Name" error={error?.message} />
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
                    <Title order={5}>Email</Title>

                    <Controller
                        control={form.control}
                        name="email"
                        render={({field, fieldState: {error}}) => (
                            <TextInput {...field} placeholder="Email" error={error?.message} />
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
                    await form.trigger(['email']);
                    if (!form.getFieldState('email').invalid && form.getFieldState('email').isDirty) {
                        setOpened(false);
                        form.reset();
                    }
                }}
                onNext={async (currentStepIndex, setCurrentStepIndex) => {
                    await form.trigger(['firstName', 'lastName']);
                    if (
                        !form.getFieldState('firstName').invalid &&
                        form.getFieldState('firstName').isDirty &&
                        !form.getFieldState('lastName').invalid &&
                        form.getFieldState('lastName').isDirty
                    ) {
                        setCurrentStepIndex(currentStepIndex + 1);
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
