import {Box, Button, ModalWizard} from '@coveord/plasma-mantine';
import {useState} from 'react';

export default () => {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Button m="md" onClick={() => setOpened(true)}>
                Open Modal Wizard
            </Button>
            <ModalWizard onClose={() => setOpened(false)} opened={opened} onFinish={() => setOpened(false)}>
                <ModalWizard.Step
                    docLink="https://coveo.com"
                    title="Current Step is 1"
                    showProgressBar={false}
                    countsAsProgress={false}
                    description="Description of step 1"
                    validateStep={() => ({isValid: true})}
                    docLinkTooltipLabel="Tooltip label"
                >
                    <Box mih={300}>Slide 1</Box>
                </ModalWizard.Step>
                <ModalWizard.Step
                    docLink="https://coveo.com"
                    title="Current Step is 2"
                    description="Description of step 2"
                    validateStep={() => ({isValid: false})}
                    docLinkTooltipLabel="Tooltip label"
                    disabledTooltipLabel="Tooltip label on disabled button"
                >
                    <Box mih={300}>Slide 2</Box>
                </ModalWizard.Step>
            </ModalWizard>
        </>
    );
};
