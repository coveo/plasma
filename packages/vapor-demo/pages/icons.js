import Component from '../components/Component';
import IconFillers from '../components/icons/IconFillers';
import IconModifiers from '../components/icons/IconModifiers';
import IconsList from '../components/icons/IconsList';
import Layout from '../layouts/Layout';

const Icons = () => {
    return (
        <Layout>
            <Component
                id="modifiers"
                title="Icon modifiers"
                usage="Apply modifications to icons"
                stylesheet="scss/elements/icons.scss"
                withSource
            >
                <IconModifiers />
            </Component>

            <Component
                id="fillers"
                title="Icon fillers"
                usage="Give custom colors to icons"
                stylesheet="scss/elements/icons.scss"
                withSource
            >
                <IconFillers />
            </Component>

            <Component
                id="list"
                title="Icons list"
                usage="List of all icons available"
                stylesheet="scss/elements/icons.scss"
            >
                <IconsList />
            </Component>
        </Layout>
    );
};

export default Icons;
