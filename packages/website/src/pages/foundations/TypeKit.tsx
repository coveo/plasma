import {Stack, Title} from '@coveord/plasma-mantine';
import H1Demo from '@examples/foundations/TypeKit/H1.demo?demo';
import H2Demo from '@examples/foundations/TypeKit/H2.demo?demo';
import H3Demo from '@examples/foundations/TypeKit/H3.demo?demo';
import H4Demo from '@examples/foundations/TypeKit/H4.demo?demo';
import H5Demo from '@examples/foundations/TypeKit/H5.demo?demo';
import H6Demo from '@examples/foundations/TypeKit/H6.demo?demo';
import Text_xxs_Demo from '@examples/foundations/TypeKit/Text_xxs.demo?demo';
import Text_xs_Demo from '@examples/foundations/TypeKit/Text_xs.demo?demo';
import Text_sm_Demo from '@examples/foundations/TypeKit/Text_sm.demo?demo';
import Text_md_Demo from '@examples/foundations/TypeKit/Text_md.demo?demo';
import Text_lg_Demo from '@examples/foundations/TypeKit/Text_lg.demo?demo';
import Text_xl_Demo from '@examples/foundations/TypeKit/Text_xl.demo?demo';

import {PageLayout} from '../../building-blocs/PageLayout.js';

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
        <div className="plasma-page-layout__section">
            <Title order={3} mb="xs">
                Text
            </Title>
            <Stack>
                <Text_xxs_Demo center title="Text xxs" />
                <Text_xs_Demo center title="Text xs" />
                <Text_sm_Demo center title="Text sm" />
                <Text_md_Demo center title="Text md" />
                <Text_lg_Demo center title="Text lg" />
                <Text_xl_Demo center title="Text xl" />
            </Stack>
        </div>
    </PageLayout>
);

export default TypeKit;
