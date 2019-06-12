import Component from '../components/Component';
import FormGroups from '../components/form-layouts/FormGroups';
import Layout from '../layouts/Layout';
import FormChild from '../components/form-layouts/FormChild';
import SplitLayout from '../components/form-layouts/SplitLayout';
import FormChildSection from '../components/form-layouts/FormChildSection';

const FormLayout = () => {
    return (
        <Layout>
            <Component id="groups" title="Groups" usage="Simple vertical form!" stylesheet="scss/forms/block-form.scss">
                <FormGroups />
            </Component>

            <Component
                id="child-element"
                title="Child element"
                usage="Displays a from element has the child of another."
                stylesheet="scss/forms/form-child.scss"
            >
                <FormChild />
            </Component>

            <Component
                id="split-layout"
                title="Split layout"
                usage="Simple flex column layout, principally used in our forms."
                stylesheet="scss/utility/layout.scss"
            >
                <SplitLayout />
            </Component>

            <Component
                id="child-section-element"
                title="Child section element"
                usage="Displays a from section has the child of another."
                stylesheet="scss/forms/form-child.scss"
            >
                <FormChildSection />
            </Component>
        </Layout>
    );
};

export default FormLayout;
