import Component from '../components/Component';
import Layout from '../layouts/Layout';
import NavigationComponent from '../components/navigation/Navigation';
import SubNavigation from '../components/navigation/SubNavigation';
import NavigationLoading from '../components/navigation/NavigationLoading';

const Navigation = () => {
    return (
        <Layout>
            <Component
                id='navigation'
                title="Navigation"
                usage='A navigation component. Click a section header to display or hide its menu. Use the class "hide" to initially hide menus.'
                stylesheet="scss/components/navigation.scss"
                withSource
            >
                <NavigationComponent />
            </Component>

            <Component
                id='sub-navigation'
                title="Sub Navigation"
                usage='A sub-navigation component.'
                stylesheet="scss/components/sub-navigation.scss"
                withSource
            >
                <SubNavigation />
            </Component>

            <Component
                id='navigation-loading'
                title="Navigation Loading"
                usage='A navigation loading used during the time the real navigation is shown.'
                stylesheet="scss/components/navigation-loading.scss"
                withSource
            >
                <NavigationLoading />
            </Component>
        </Layout>
    );
};

export default Navigation;
