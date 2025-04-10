import {Anchor, Code, Text} from '@coveord/plasma-mantine';
import IconographyDemo from '@examples/foundations/Iconography/Iconography.demo?demo';
import {PageLayout} from '../../building-blocs/PageLayout';

export const IconographyExamples = () => (
    <PageLayout
        id="Iconography"
        section="Foundations"
        title="Iconography"
        thumbnail="iconography"
        description="Icons are used to visually represent actions, functionalities, and features."
        demo={<IconographyDemo center />}
        withPropsTable={false}
    >
        <Text>
            We use the <Code>@tabler/react-icons</Code> library for our icons. You can consult the full list of icons on{' '}
            <Anchor target="_blank" href="https://tabler.io/icons" rel="noreferrer noopener">
                their website
            </Anchor>
            .
        </Text>
    </PageLayout>
);

export default IconographyExamples;
