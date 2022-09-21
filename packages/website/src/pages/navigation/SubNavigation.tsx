import custom from '@examples/SubNavigation/custom.example.tsx';
import customWithDesc from '@examples/SubNavigation/customWithDesc.example.tsx';
import defaultSelected from '@examples/SubNavigation/defaultSelected.example.tsx';
import code from '@examples/SubNavigation/main.example.tsx';

import {PageLayout} from '../../building-blocs/PageLayout';

export const SubNavigationExamples = () => (
    <PageLayout
        id="SubNavigation"
        componentSourcePath="/subNavigation/SubNavigation.tsx"
        title="SubNavigation"
        section="Navigation"
        description="A subnavigation is a secondary vertical navigation component that allows users to navigate between sections of the same interface."
        thumbnail="subNavigation"
        code={code}
        examples={{
            defaultSelected: {code: defaultSelected, title: 'Default selected'},
            custom: {code: custom, title: 'Custom JSX labels and disabled item'},
            customWithDesc: {code: customWithDesc, title: 'When there are descriptions in Sub Nav'},
        }}
    />
);
export default SubNavigationExamples;
