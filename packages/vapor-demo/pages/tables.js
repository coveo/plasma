import Component from '../components/Component';
import Layout from '../layouts/Layout';
import Picker from '../components/filtering/FilterPicker';
import ActionsContainer from '../components/tables/ActionsContainer';

const Tables = () => {
    return (
        <Layout>
            <Component
                id='base'
                title="Base"
                usage='This is the standard filter picker control.'
                stylesheet="scss/controls/filter-picker.scss"
            >
                <Picker />
            </Component>

            <Component
                id='drag-and-drop'
                title="Drag and drop"
                usage='This is the standard filter picker control.'
                stylesheet="scss/controls/filter-picker.scss"
            >
                <Picker />
            </Component>

            <Component
                id='fixed-header'
                title="Fixed header"
                usage='This is the standard filter picker control.'
                stylesheet="scss/controls/filter-picker.scss"
            >
                <Picker />
            </Component>

            <Component
                id='actions-container'
                title="Actions container"
                usage='This defines how to set a filter box for a table and where to place actions button for each table elements. Add the mod-border-top class when the table is not right under the panel-header.'
                stylesheet="scss/tables/table-actions.scss"
            >
                <ActionsContainer />
            </Component>

            <Component
                id='small-actions-container'
                title="Small actions container"
                usage='This is the standard filter picker control.'
                stylesheet="scss/controls/filter-picker.scss"
            >
                <Picker />
            </Component>

            <Component
                id='collapsible-rows'
                title="Collapsible rows"
                usage='This is the standard filter picker control.'
                stylesheet="scss/controls/filter-picker.scss"
            >
                <Picker />
            </Component>

            <Component
                id='alternating-color-rows'
                title="Alternating color rows"
                usage='This is the standard filter picker control.'
                stylesheet="scss/controls/filter-picker.scss"
            >
                <Picker />
            </Component>

            <Component
                id='pagination'
                title="Pagination"
                usage='This is the standard filter picker control.'
                stylesheet="scss/controls/filter-picker.scss"
            >
                <Picker />
            </Component>

            <Component
                id='smaller-rows'
                title="Smaller rows"
                usage='This is the standard filter picker control.'
                stylesheet="scss/controls/filter-picker.scss"
            >
                <Picker />
            </Component>

            <Component
                id='loading'
                title="Loading"
                usage="This is the standard filter picker control."
                stylesheet="scss/controls/filter-picker.scss"
            >
                <Picker />
            </Component>
        </Layout>
    );
};

export default Tables;
