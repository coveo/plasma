import Component from '../components/Component';
import Layout from '../layouts/Layout';
import Badge from '../components/components/Badge';
import Banner from '../components/components/Banner';
import BlankSlate from '../components/components/BlankSlate';
import Breadcrumbs from '../components/components/Breadcrumbs';
import Card from '../components/components/Card';
import Collapsible from '../components/components/Collapsible';
import ContentPlaceholder from '../components/components/ContentPlaceholder';
import CornerRibbon from '../components/components/CornerRibbon';
import Calendar from '../components/components/Calendar';
import Facet from '../components/components/Facet';
import FieldSearch from '../components/components/FieldSearch';
import ListBox from '../components/components/ListBox';
import Loading from '../components/components/Loading';
import Member from '../components/components/Member';
import Modal from '../components/components/Modal';
import MultiStepBar from '../components/components/MultiStepBar';
import SyncFeedback from '../components/components/SyncFeedback';
import Tab from '../components/components/Tab';

const Components = () => (
    <Layout>
        <Component
            key='badge'
            id='badge'
            title="Badge"
            usage='Use to indicate a special feature or status'
            stylesheet="scss/components/badge.scss"
            withSource
        >
            <Badge />
        </Component>

        <Component
            key='banner'
            id='banner'
            title="Banner"
            usage='Use it to provide info in your application.'
            stylesheet="scss/components/banner.scss"
            withSource
        >
            <Banner />
        </Component>

        <Component
            key='blank-slate'
            id='blank-slate'
            title="Blank Slate"
            usage='Use it to provide information when no dynamic content exists'
            stylesheet="scss/components/blankslate.scss"
            withSource
        >
            <BlankSlate />
        </Component>

        <Component
            key='breadcrumbs'
            id='breadcrumbs'
            title="Breadcrumbs"
            usage='Use it to provide hierarchical information on the current page'
            stylesheet="scss/components/breadcrumbs.scss"
            withSource
        >
            <Breadcrumbs />
        </Component>

        <Component
            key='calendar-date-picker'
            id='calendar-date-picker'
            title="Calendar & Date Picker"
            stylesheet="scss/components/calendar.scss"
            withSource
        >
            <Calendar />
        </Component>


        <Component
            key='collapsible'
            id='collapsible'
            title="Collapsible"
            usage='Simple accordion elements based on Materialize Collapsible.'
            stylesheet="scss/components/collapsible.scss"
            withSource
        >
            <Collapsible />
        </Component>

        <Component
            key='content-placeholder'
            id='content-placeholder'
            title="Content Placeholder"
            usage='Style to use when content is loading'
            stylesheet="scss/components/material-card.scss"
            withSource
        >
            <ContentPlaceholder />
        </Component>

        <Component
            key='corner-ribbon'
            id='corner-ribbon'
            title="Corner Ribbon"
            usage='Use to indicate a component special state'
            stylesheet="scss/components/corner-ribbon.scss"
            withSource
        >
            <CornerRibbon />
        </Component>

        <Component
            key='facet'
            id='facet'
            title="Facet"
            usage='Facet styling'
            stylesheet="scss/components/facet.scss"
            withSource
        >
            <Facet />
        </Component>

        <Component
            key='card'
            id='card'
            title="Card"
            usage='Utils to apply style on card or container'
            stylesheet="scss/components/card.scss"
            withSource
        >
            <Card />
        </Component>

        <Component
            key='search-field'
            id='search-field'
            title="Search Field"
            usage='An input to use in a search context'
            stylesheet="scss/components/search-bar.scss"
            withSource
        >
            <FieldSearch />
        </Component>

        <Component
            key='list-box'
            id='list-box'
            title="List Box"
            usage='Use when displaying a list of items with different state.'
            stylesheet="scss/components/list-box.scss"
            withSource
        >
            <ListBox />
        </Component>

        <Component
            key='loading'
            id='loading'
            title="Loading"
            usage='Use it while fetching data'
            stylesheet="scss/components/loading.scss"
            withSource
        >
            <Loading />
        </Component>

        <Component
            key='member'
            id='member'
            title="Member"
            usage='Use when displaying a user or member thumbnail.'
            stylesheet="scss/components/member.scss"
            withSource
        >
            <Member />
        </Component>

        <Component
            key='modal'
            id='modal'
            title="Modal"
            usage='Modal window styling'
            stylesheet="scss/components/modal.scss"
            withSource
        >
            <Modal />
        </Component>

        <Component
            key='multi-step-bar'
            id='multi-step-bar'
            title="Multi Step Bar"
            usage='A bar used to display multiple steps status'
            stylesheet="scss/components/multi-step-bar.scss"
            withSource
        >
            <MultiStepBar />
        </Component>

        <Component
            key='sync-feedback'
            id='sync-feedback'
            title="Sync Feedback"
            usage='Use it when you want to give feedback to the user'
            stylesheet="scss/components/sync-feedback.scss"
            withSource
        >
            <SyncFeedback />
        </Component>

        <Component
            key='tabs'
            id='tabs'
            title="Tabs"
            stylesheet="scss/components/tab.scss"
            withSource
        >
            <Tab />
        </Component>
    </Layout>
);

export default Components;
