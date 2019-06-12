import Component from '../components/Component';
import Layout from '../layouts/Layout';
import Picker from '../components/filtering/FilterPicker';

const Typography = () => {
    return (
        <Layout>
            <Component
                id='filter-picker'
                title="FilterPicker"
                usage='This is the standard filter picker control.'
                stylesheet="scss/controls/filter-picker.scss"
            >
                <Picker />
            </Component>
        </Layout>
    );
};

export default Typography;
