import {Button, ModalWizard} from '@coveord/plasma-mantine';
import {useState} from 'react';

const divStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 100,
};

const modalWizardSteps = [
    {
        docLink: 'https://coveo.com',
        title: 'Current Step is 1',
        validateStep: () => ({isValid: true}),
        element: <div style={divStyles}> Slide 1</div>,
    },
    {
        docLink: 'https://coveo.com',
        title: 'Current Step is 2',
        validateStep: () => ({isValid: true}),
        element: <div style={divStyles}> Slide 2</div>,
    },
    {
        docLink: 'https://coveo.com',
        title: 'Current Step is 3',
        validateStep: () => ({isValid: true}),
        element: <div style={divStyles}> Slide 3</div>,
    },
];

export default () => {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Button onClick={() => setOpened(true)}> Open ModalWizard </Button>
            <ModalWizard onClose={() => setOpened(false)} opened={opened} onFinish={() => setOpened(false)}>
                {modalWizardSteps.map((step) => (
                    <ModalWizard.Step docLink={step.docLink} title={step.title} validateStep={step.validateStep}>
                        {step.element}
                    </ModalWizard.Step>
                ))}
            </ModalWizard>
        </>
    );
};
