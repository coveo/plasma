import {CssVariablesList} from '@coveord/plasma-mantine';
import {PageLayout} from '../../building-blocs/PageLayout';

export const VariablesExamples = () => (
    <PageLayout
        id="Variables"
        section="Foundations"
        title="Variables"
        description="The list of all Mantine and Coveo CSS variables available to use in your application."
        withPropsTable={false}
    >
        <CssVariablesList />
    </PageLayout>
);

export default VariablesExamples;
