import '@styles/home.scss';

import {Section, Svg} from '@coveord/plasma-react';
import React from 'react';

import {Tile} from '../building-blocs/Tile';

export const Home: React.FunctionComponent = () => (
    <Section className="home flex-auto overflow-auto demo-content">
        <WelcomeToPlasma />
        <FoundationsPages />
        <LayoutPages />
        <FormPages />
        <NavigationPages />
        <FeedbackPages />
    </Section>
);

const WelcomeToPlasma: React.FC = () => (
    <div className="section intro">
        <h5 className="welcome-to">Welcome to</h5>
        <div className="page-title">PLASMA</div>
        <div className="body-l-book plasma-description">
            <div>Coveo’s platform design system & ionized Vapor.</div>
            <div>
                Learn more about our brand, our values and our story by visiting our{' '}
                <a href="https://brand.coveo.com/" target="_blank" className="link inline-flex">
                    brand page
                    <Svg svgName="external" svgClass="icon mod-22 pl1" />
                </a>
                .
            </div>
        </div>
    </div>
);

const FoundationsPages: React.FC = () => (
    <Section className="section">
        <h2>Foundations</h2>
        <div className="tile-grid">
            <Tile
                title="Iconography"
                description="List of all icons available. See SVG for usage"
                href="#/foundations/Iconography"
                thumbnail="iconography"
            />
            <Tile title="SVG" description="SVG usage" href="#/foundations/Svg" />
            <Tile
                title="Headings"
                description="All HTML headings, `h1` through `h6`, are available."
                href="#/foundations/Headings"
                thumbnail="typekit"
            />
            <Tile title="Links" description="Links examples" href="#/foundations/Links" thumbnail="links" />
            <Tile title="Whitespace" description="Whitespace" href="/#/foundations/Whitespace" />
        </div>
    </Section>
);

const LayoutPages: React.FC = () => (
    <Section className="section">
        <h2>Layout</h2>
        <div className="tile-grid">
            <Tile title="Banner" description="Banner" href="#/layout/Banner" />
            <Tile
                title="Blank Slate"
                description="Use blankSlate to show information and some actions after an event."
                href="#/layout/BlankSlate"
            />
            <Tile title="Bordered Line" description="Bordered Line" href="#/layout/BorderedLine" />
            <Tile title="Browser Preview" description="Browser Preview" href="#/layout/BrowserPreview" />
            <Tile title="Chart" description="Chart" href="#/layout/Chart" />
            <Tile title="Collapsible" description="Collapsible" href="#/layout/Collapsible" />
            <Tile title="Icon Card" description="Icon Card" href="#/layout/IconCard" />
            <Tile title="Info Box" description="Info Box" href="#/layout/InfoBox" />
            <Tile title="Labelled Value" description="Labelled Value" href="#/layout/LabeledValue" />
            <Tile title="Limit Card" description="Limit Card" href="#/layout/Limit" />
            <Tile
                title="Modal Window"
                description="Modal windows appear in front of the main page and disable it while they are visible. They act as a zoom in on an element of the main page that allows additionnal interaction or configuration. They make possible for users to focus on their content whilst avoiding leaving the context from which they have been called."
                href="#/layout/ModalWindow"
            />
            <Tile title="Modal Wizard" description="Modal Wizard" href="#/layout/ModalWizard" />
            <Tile title="Page Header" description="Page Header" href="#/layout/PageHeader" thumbnail="header" />
            <Tile title="Footer" description="Footer" href="#/layout/Footer" />
            <Tile
                title="Section"
                description="Customizing the display and behavior of the interface displayed."
                href="#/layout/Section"
            />
            <Tile title="Split Layout" description="Split Layout" href="#/layout/SplitLayout" />
            <Tile title="Table" description="Table" href="#/layout/TableHOC" />
            <Tile title="Table HOC Loading" description="Table HOC Loading" href="#/layout/TableHOCLoading" />
            <Tile title="Table HOC Server" description="Table HOC Server" href="#/layout/TableHOCServer" />
            <Tile
                title="Table HOC with Blank Slate"
                description="Table HOC with Blank Slate"
                href="#/layout/TableHOCwithBlankSlate"
            />
        </div>
    </Section>
);

const FormPages: React.FC = () => (
    <Section className="section">
        <h2>Form</h2>
        <div className="tile-grid">
            <Tile title="Actionable Item" description="Actionable Item" href="#/form/ActionableItem" />
            <Tile
                title="Button"
                description="Buttons communicate actions, and, when clicked, initialize those actions"
                href="#/form/Button"
                thumbnail="actionButton"
            />
            <Tile
                title="Checkbox"
                description="Checkboxes allow the selection of multiples options from a list. Checkboxes can also be used to turn one option on or off."
                href="#/form/Checkbox"
            />
            <Tile
                title="Child Form"
                description="Try to display only one Child Form at a time in a given option set."
                href="#/form/ChildForm"
            />
            <Tile title="Code Editor" description="Code Editor" href="#/form/CodeEditor" thumbnail="codeEditor" />
            <Tile title="Color Picker" description="Code Picker" href="#/form/ColorPicker" />
            <Tile title="Date Picker" description="Date Picker" href="#/form/DatePicker" />
            <Tile title="Diff Viewer" description="Diff Viewer" href="#/form/DiffViewer" />
            <Tile title="Facet" description="Facet" href="#/form/Facet" />
            <Tile title="File Picker" description="File Picker" href="#/form/Filepicker" />
            <Tile title="Filter Box" description="Filter Box" href="#/form/FilterBox" thumbnail="filterBox" />
            <Tile title="Flat Select" description="Flat Select" href="#/form/FlatSelect" />
            <Tile title="JSON Editor" description="JSON Editor" href="#/form/JSONEditor" />
            <Tile title="Multiline Box" description="Multiline Box" href="#/form/MultilineBox" />
            <Tile
                title="Numeric Inputs"
                description="The input field should be large enough to display all the user input in most cases."
                href="#/form/NumericInput"
            />
            <Tile
                title="Radio Button"
                description="Radio button requires the selection of exactly one option from a list of mutually exclusive options."
                href="#/form/RadioButton"
            />
            <Tile title="Search Bar" description="Search Bar" href="#/form/SearchBar" />
            <Tile
                title="Single Select"
                description="If space allows, and there are no more than 7 options to choose from, consider using radio buttons instead."
                href="#/form/SingleSelect"
            />
            <Tile
                title="Multi Select"
                description="If space allows, and there are no more than 7 options in total, consider using checkboxes instead."
                href="#/form/MultiSelect"
            />
            <Tile
                title="Slider"
                description="For binary settings, use a slide toggle, toggle, or checkbox instead."
                href="#/form/Slider"
            />
            <Tile title="Text Area" description="Text Area" href="#/form/TextArea" />
            <Tile
                title="Text Input"
                description="Display an inline validation message when the user is done interacting with the input."
                href="#/form/TextInput"
                thumbnail="textInput"
            />
        </div>
    </Section>
);

const NavigationPages: React.FC = () => (
    <Section className="section">
        <h2>Navigation</h2>
        <div className="tile-grid">
            <Tile
                title="Breadcrumbs"
                description="Breadcrumbs"
                href="#/navigation/Breadcrumbs"
                thumbnail="breadcrumb"
            />
            <Tile
                title="Sidebar Navigation"
                description="Sidebar Navigation"
                href="#/navigation/SideNavigation"
                thumbnail="sideNav"
            />
            <Tile title="SubNavigation" description="SubNavigation" href="#/navigation/SubNavigation" />
            <Tile title="Tabs" description="Tabs" href="#/navigation/Tabs" thumbnail="tab" />
        </div>
    </Section>
);

const FeedbackPages: React.FC = () => (
    <Section className="section">
        <h2>Feedback</h2>
        <div className="tile-grid">
            <Tile title="Badge" description="Badge" href="#/feedback/Badge" thumbnail="badge" />
            <Tile title="Color Bar" description="Color Bar" href="#/feedback/ColorBar" thumbnail="progressBar" />
            <Tile title="Color Dot" description="Color Dot" href="#/feedback/ColorDot" />
            <Tile title="Icon Badge" description="Icon Badge" href="#/feedback/IconBadge" />
            <Tile title="Last Updated" description="Last Updated" href="#/feedback/LastUpdated" />
            <Tile title="Loading Spinner" description="Animated loading spinner" href="#/feedback/Loading" />
            <Tile title="Step Progress Bar" description="Step Progress Bar" href="#/feedback/StepProgressBar" />
            <Tile title="Sync Feedback" description="Sync Feedback" href="#/feedback/SyncFeedback" />
            <Tile
                title="Toast"
                description="Only include information that is relevant to the performed action."
                href="#/feedback/Toast"
            />
            <Tile
                title="Toast Connected"
                description="Only include information that is relevant to the performed action."
                href="#/feedback/ToastConnected"
            />
            <Tile title="Toast Content" description="Toast Content" href="#/feedback/ToastContent" />
            <Tile
                title="Tooltip"
                description="Tooltips are short descriptions that appear when hovering an element. They are used to provide explanations that do not require nor allow user interaction, like tips and tricks."
                href="#/feedback/Tooltip"
            />
        </div>
    </Section>
);
