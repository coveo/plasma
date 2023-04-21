import {Box, Button, ModalWizard} from '@coveord/plasma-mantine';
import {useState} from 'react';

const Demo = () => {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Button onClick={() => setOpened(true)}> Open ModalWizard </Button>
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
                    validateStep={() => ({isValid: true})}
                    docLinkTooltipLabel="Tooltip label"
                >
                    <Box mih={300}>Slide 2</Box>
                </ModalWizard.Step>
                <ModalWizard.Step
                    docLink="https://coveo.com"
                    title="Current Step is 3"
                    description="Description of step 3"
                    validateStep={() => ({isValid: true})}
                    docLinkTooltipLabel="Tooltip label"
                >
                    <Box mih={300}>Slide 3</Box>
                </ModalWizard.Step>
            </ModalWizard>
        </>
    );
};
export default Demo;
