import {Button, ModalWizard} from '@coveord/plasma-mantine';
import {useState} from 'react';

const divStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 100,
};

export default () => {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Button onClick={() => setOpened(true)}> Open ModalWizard </Button>
            <ModalWizard onClose={() => setOpened(false)} opened={opened} onFinish={() => setOpened(false)}>
                <ModalWizard.Step
                    docLink="https://coveo.com"
                    title="Current Step is 1"
                    validateStep={() => ({isValid: true})}
                    docLinkTooltipLabel="Tooltip label"
                >
                    <div style={divStyles}> Slide 1</div>
                </ModalWizard.Step>
                <ModalWizard.Step
                    docLink="https://coveo.com"
                    title="Current Step is 2"
                    validateStep={() => ({isValid: true})}
                    docLinkTooltipLabel="Tooltip label"
                >
                    <div style={divStyles}> Slide 2</div>
                </ModalWizard.Step>
                <ModalWizard.Step
                    docLink="https://coveo.com"
                    title="Current Step is 3"
                    validateStep={() => ({isValid: true})}
                    docLinkTooltipLabel="Tooltip label"
                >
                    <div style={divStyles}> Slide 3</div>
                </ModalWizard.Step>
            </ModalWizard>
        </>
    );
};
