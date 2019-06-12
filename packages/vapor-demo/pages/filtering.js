import Component from '../components/Component';
import Layout from '../layouts/Layout';
import FilterPicker from '../components/filtering/FilterPicker';
import ListPopup from '../components/filtering/ListPopup';
import ValuePopup from '../components/filtering/ValuePopup';
import Pickers from '../components/filtering/Pickers';

const Filtering = () => {
    return (
        <Layout>
            <Component
                id='picker'
                title="Picker"
                usage='This is the standard filter picker control.'
                stylesheet="scss/controls/filter-picker.scss"
            >
                <FilterPicker />
            </Component>

            <Component
                id='pickers'
                title="Pickers"
                usage='This is the standard multiple filter pickers control.'
                stylesheet="scss/controls/multi-filter-picker.scss"
            >
                <Pickers />
            </Component>

            <Component
                id='list-popup'
                title="List Popup"
                usage='This is the field picker control used to select a filter field.'
                stylesheet="scss/controls/filters-list.scss"
                withSource
            >
                <ListPopup />
            </Component>

            <Component
                id='value-popup'
                title="Value Popup"
                usage='This is the filter picker control used to define a filter on a field.'
                stylesheet="scss/controls/filters-values.scss"
                withSource
            >
                <ValuePopup />
            </Component>
        </Layout>
    );
};

export default Filtering;
