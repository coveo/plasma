import {PageLayout} from '../../building-blocs/PageLayout';
import code from '../../examples/SubNavigation/main.example.tsx';
import defaultSelected from '../../examples/SubNavigation/defaultSelected.example.tsx';
import custom from '../../examples/SubNavigation/custom.example.tsx';

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
        }}
    />
);
export default SubNavigationExamples;
