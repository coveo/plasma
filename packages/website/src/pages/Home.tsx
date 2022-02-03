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
            <Tile title="Links" href="#/foundations/Links" thumbnail="links" />
            <Tile title="Whitespace" href="/#/foundations/Whitespace" />
        </div>
    </Section>
);

const LayoutPages: React.FC = () => (
    <Section className="section">
        <h2>Layout</h2>
        <div className="tile-grid">
            <Tile title="Banner" href="#/layout/Banner" />
            <Tile
                title="Blank Slate"
                description="Use blankSlate to show information and some actions after an event."
                href="#/layout/BlankSlate"
            />
            <Tile title="Bordered Line" href="#/layout/BorderedLine" />
            <Tile title="Browser Preview" href="#/layout/BrowserPreview" />
            <Tile title="Chart" href="#/layout/Chart" />
            <Tile title="Collapsible" href="#/layout/Collapsible" />
            <Tile title="Icon Card" href="#/layout/IconCard" />
            <Tile title="Info Box" href="#/layout/InfoBox" />
            <Tile title="Labelled Value" href="#/layout/LabeledValue" />
            <Tile title="Limit Card" href="#/layout/Limit" />
            <Tile
                title="Modal Window"
                description="Modal windows appear in front of the main page and disable it while they are visible. They act as a zoom in on an element of the main page that allows additionnal interaction or configuration. They make possible for users to focus on their content whilst avoiding leaving the context from which they have been called."
                href="#/layout/ModalWindow"
            />
            <Tile title="Modal Wizard" href="#/layout/ModalWizard" />
            <Tile title="Page Header" href="#/layout/PageHeader" thumbnail="header" />
            <Tile title="Footer" href="#/layout/Footer" />
            <Tile
                title="Section"
                description="Customizing the display and behavior of the interface displayed."
                href="#/layout/Section"
            />
            <Tile title="Split Layout" href="#/layout/SplitLayout" />
            <Tile title="Table" href="#/layout/TableHOC" />
            <Tile title="Table HOC Loading" href="#/layout/TableHOCLoading" />
            <Tile title="Table HOC Server" href="#/layout/TableHOCServer" />
            <Tile title="Table HOC with Blank Slate" href="#/layout/TableHOCwithBlankSlate" />
        </div>
    </Section>
);

const FormPages: React.FC = () => (
    <Section className="section">
        <h2>Form</h2>
        <div className="tile-grid">
            <Tile title="Actionable Item" href="#/form/ActionableItem" />
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
            <Tile title="Code Editor" href="#/form/CodeEditor" thumbnail="codeEditor" />
            <Tile title="Color Picker" href="#/form/ColorPicker" />
            <Tile title="Date Picker" href="#/form/DatePicker" />
            <Tile title="Diff Viewer" href="#/form/DiffViewer" />
            <Tile title="Facet" href="#/form/Facet" />
            <Tile title="File Picker" href="#/form/Filepicker" />
            <Tile title="Filter Box" href="#/form/FilterBox" thumbnail="filterBox" />
            <Tile title="Flat Select" href="#/form/FlatSelect" />
            <Tile title="JSON Editor" href="#/form/JSONEditor" />
            <Tile title="Multiline Box" href="#/form/MultilineBox" />
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
            <Tile title="Search Bar" href="#/form/SearchBar" />
            <Tile
                title="Single Select"
                description="Single select dropdown allows users to select only one option from a list. It is typically used when there is a large number of available options."
                href="#/form/SingleSelect"
            />
            <Tile
                title="Multi Select"
                description="Multi select dropdown allows users to select multiple options from a list. It is typically used when there is a large number of available options."
                href="#/form/MultiSelect"
            />
            <Tile
                title="Slider"
                description="For binary settings, use a slide toggle, toggle, or checkbox instead."
                href="#/form/Slider"
            />
            <Tile title="Text Area" href="#/form/TextArea" />
            <Tile
                title="Text Input"
                description="Text inputs allow users to enter and edit short texts, such as names, emails, and passwords."
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
            <Tile title="Breadcrumbs" href="#/navigation/Breadcrumbs" thumbnail="breadcrumb" />
            <Tile title="Sidebar Navigation" href="#/navigation/SideNavigation" thumbnail="sideNav" />
            <Tile title="SubNavigation" href="#/navigation/SubNavigation" />
            <Tile title="Tabs" href="#/navigation/Tabs" thumbnail="tab" />
        </div>
    </Section>
);

const FeedbackPages: React.FC = () => (
    <Section className="section">
        <h2>Feedback</h2>
        <div className="tile-grid">
            <Tile title="Badge" href="#/feedback/Badge" thumbnail="badge" />
            <Tile title="Color Bar" href="#/feedback/ColorBar" thumbnail="progressBar" />
            <Tile title="Color Dot" href="#/feedback/ColorDot" />
            <Tile title="Icon Badge" href="#/feedback/IconBadge" />
            <Tile title="Last Updated" href="#/feedback/LastUpdated" />
            <Tile title="Loading Spinner" description="Animated loading spinner" href="#/feedback/Loading" />
            <Tile title="Step Progress Bar" href="#/feedback/StepProgressBar" />
            <Tile title="Sync Feedback" href="#/feedback/SyncFeedback" />
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
            <Tile title="Toast Content" href="#/feedback/ToastContent" />
            <Tile
                title="Tooltip"
                description="Tooltips are short descriptions that appear when hovering an element. They are used to provide explanations that do not require nor allow user interaction, like tips and tricks."
                href="#/feedback/Tooltip"
            />
        </div>
    </Section>
);
