import Component from '../components/Component';
import HeaderPanel from '../components/headers/HeaderPanel';
import HeaderSite from '../components/headers/HeaderSite';
import Layout from '../layouts/Layout';

const Headers = () => {
    return (
        <Layout>
            <Component
                id="panel"
                title="Panel"
                usage="Panel header styling"
                stylesheet="scss/components/panel-header.scss"
                withSource
            >
                <HeaderPanel />
            </Component>

            <Component
                id="site"
                title="Site"
                usage="Use as your web application header. Note that the 9px gap at the bottom of the header is normal and should be hidden by the application container."
                stylesheet="scss/components/header.scss"
                withSource
            >
                <HeaderSite />
            </Component>
        </Layout>
    );
};

export default Headers;
