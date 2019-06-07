import Layout from '../layouts/Layout.js';
import Overview from '../components/buttons/Overview';
import Component from '../components/Component';
import Base from '../components/buttons/Base';

const Buttons = () => {
    return (
        <Layout>
            <Component key="overview" id="overview" title="Overview">
                <Overview />
            </Component>
            <Component
                key="base"
                id="base"
                title="Base"
                usage='Base style for all buttons and links with the "btn" class.'
                stylesheet="scss/elements/btn.scss"
                withSource
            >
                <Base />
            </Component>
        </Layout>
    );
};

export default Buttons;
