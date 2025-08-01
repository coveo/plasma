import {CssVariablesList as Test} from '@coveord/plasma-mantine';
import {PageLayout} from '../../building-blocs/PageLayout';

export const VariablesExamples = () => (
    <PageLayout
        id="Variables"
        section="Foundations"
        title="Variables"
        // thumbnail="css variables"
        description="The css variables that give Plasma its identity"
        // sourcePath="/packages/tokens#readme"
        withPropsTable={false}
    >
        <div className="plasma-page-layout__section pl5">
            <Test />
        </div>
    </PageLayout>
);

export default VariablesExamples;
