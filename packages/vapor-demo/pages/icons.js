import Component from '../components/Component';
import Layout from '../layouts/Layout';
import FilterPicker from '../components/filtering/FilterPicker';

const Icons = () => {
    return (
        <Layout>
            <Component
                id='filter-picker'
                title="FilterPicker"
                usage='This is the standard filter picker control.'
                stylesheet="scss/controls/filter-picker.scss"
            >
                <FilterPicker />
            </Component>
        </Layout>
    );
};

export default Icons;
