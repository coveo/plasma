import {SubNavigationMetadata} from '@coveord/plasma-components-props-analyzer';
import SubNavigationCustomDemo from '@examples/legacy/navigation/SubNavigation/custom.demo.tsx';
import SubNavigationCustomWithDescDemo from '@examples/legacy/navigation/SubNavigation/customWithDesc.demo.tsx';
import SubNavigationDefaultSelectedDemo from '@examples/legacy/navigation/SubNavigation/defaultSelected.demo.tsx';
import SubNavigationDemo from '@examples/legacy/navigation/SubNavigation/main.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export const SubNavigationDemos = () => (
    <PageLayout
        id="SubNavigation"
        componentSourcePath="/subNavigation/SubNavigation.tsx"
        title="SubNavigation"
        section="Navigation"
        description="A subnavigation is a secondary vertical navigation component that allows users to navigate between sections of the same interface."
        thumbnail="subNavigation"
        propsMetadata={SubNavigationMetadata}
        demo={<SubNavigationDemo />}
        examples={{
            defaultSelected: <SubNavigationDefaultSelectedDemo title="Default selected" />,
            custom: <SubNavigationCustomDemo title="Custom JSX labels and disabled item" />,
            customWithDesc: <SubNavigationCustomWithDescDemo title="When there are descriptions in Sub Nav" />,
        }}
    />
);
export default SubNavigationDemos;
