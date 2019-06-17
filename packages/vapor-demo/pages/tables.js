import Component from '../components/Component';
import Layout from '../layouts/Layout';
import Picker from '../components/filtering/FilterPicker';
import ActionsContainer from '../components/tables/ActionsContainer';
import Base from '../components/tables/Base';
import DragAndDrop from '../components/tables/DragAndDrop';
import FixedHeader from '../components/tables/FixedHeader';
import SmallActionsContainer from '../components/tables/SmallActionsContainer';
import CollapsibleRows from '../components/tables/CollapsibleRows';
import Loading from '../components/tables/Loading';
import SmallerRows from '../components/tables/SmallerRows';
import Pagination from '../components/tables/Pagination';
import AlternatingColorRows from '../components/tables/AlternatingColorRows';

const Tables = () => {
    return (
        <Layout>
            <Component
                id="base"
                title="Base"
                usage="Base style for all tables."
                stylesheet="scss/tables/table.scss"
                withSource
            >
                <Base />
            </Component>

            <Component id="drag-and-drop" title="Drag and drop" stylesheet="scss/tables/table.scss" withSource>
                <DragAndDrop />
            </Component>

            <Component
                id="fixed-header"
                title="Fixed header"
                usage="Base markup to implement a simple table with a fixed header in pure CSS."
                stylesheet="scss/tables/fixed-header-table.scss"
                withSource
            >
                <FixedHeader />
            </Component>

            <Component
                id="actions-container"
                title="Actions container"
                usage="This defines how to set a filter box for a table and where to place actions button for each table elements. Add the mod-border-top class when the table is not right under the panel-header."
                stylesheet="scss/tables/table-actions.scss"
                withSource
            >
                <ActionsContainer />
            </Component>

            <Component
                id="small-actions-container"
                title="Small actions container"
                usage="This defines how to set small actions on a table. Useful when lots of actions are needed for the space available."
                stylesheet="scss/tables/table-actions.scss"
                withSource
            >
                <SmallActionsContainer />
            </Component>

            <Component
                id="collapsible-rows"
                title="Collapsible rows"
                usage="Allows to use collapsible rows, when you want to display more information than what is displayed on a single row."
                stylesheet="scss/tables/table-collapsible-rows.scss"
                withSource
            >
                <CollapsibleRows />
            </Component>

            <Component
                id="alternating-color-rows"
                title="Alternating color rows"
                stylesheet="scss/tables/table-alternating-rows.scss"
                withSource
            >
                <AlternatingColorRows />
            </Component>

            <Component
                id="pagination"
                title="Pagination"
                usage="Adds buttons to change the number of items per page and change page."
                stylesheet="scss/tables/pagination.scss"
                withSource
            >
                <Pagination />
            </Component>

            <Component
                id="smaller-rows"
                title="Smaller rows"
                usage="Used when there are many rows."
                stylesheet="scss/tables/table-slim-rows.scss"
                withSource
            >
                <SmallerRows />
            </Component>

            <Component
                id="loading"
                title="Loading"
                usage="A style to display while table data is retrieved."
                stylesheet="scss/tables/table.scss"
                withSource
            >
                <Loading />
            </Component>
        </Layout>
    );
};

export default Tables;
