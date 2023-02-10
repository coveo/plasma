import {Stack, Title} from '@coveord/plasma-mantine';
import H1Demo from '@examples/foundations/TypeKit/H1.demo.tsx';
import H2Demo from '@examples/foundations/TypeKit/H2.demo.tsx';
import H3Demo from '@examples/foundations/TypeKit/H3.demo.tsx';
import H4Demo from '@examples/foundations/TypeKit/H4.demo.tsx';
import H5Demo from '@examples/foundations/TypeKit/H5.demo.tsx';
import H6Demo from '@examples/foundations/TypeKit/H6.demo.tsx';

import {PageLayout} from '../../building-blocs/PageLayout';

export const TypeKit = () => (
    <PageLayout
        id="TypeKit"
        section="Foundations"
        title="TypeKit"
        thumbnail="typekit"
        description="The Typekit covers all typography styles designed specifically to work with the Plasma ecosystem."
        withPropsTable={false}
    >
        <div className="plasma-page-layout__section">
            <Title order={3} mb="xs">
                Headings
            </Title>
            <Stack>
                <H1Demo center title="Level 1" />
                <H2Demo center title="Level 2" />
                <H3Demo center title="Level 3" />
                <H4Demo center title="Level 4" />
                <H5Demo center title="Level 5" />
                <H6Demo center title="Level 6" />
            </Stack>
        </div>
    </PageLayout>
);

export default TypeKit;
