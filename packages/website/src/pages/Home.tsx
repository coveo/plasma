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
                description="Icons are used to visually represent actions, functionalities, and features."
                href="#/foundations/Iconography"
                thumbnail="iconography"
            />
            <Tile title="SVG" href="#/foundations/Svg" />
            <Tile
                title="Headings"
                description="A heading is a title at the top of a page or section. Its distinctive font helps visualize the hierarchy of information."
                href="#/foundations/Headings"
                thumbnail="typekit"
            />
            <Tile
                title="Links"
                description="A link is a navigational element that guides users to external resources or other sections of the product."
                href="#/foundations/Links"
                thumbnail="links"
            />
            <Tile
                title="Whitespace"
                description="Whitespace is the standard padding and margin size that one can adjust to customize the layout of an interface."
                href="/#/foundations/Whitespace"
            />
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
                description="A blank slate informs users that a section doesn’t contain any data and provides a way to address it."
                href="#/layout/BlankSlate"
            />
            <Tile title="Bordered Line" href="#/layout/BorderedLine" />
            <Tile
                title="Browser Preview"
                description="A browser preview shows the result of configuration changes in a simplified representation of a browser interface."
                href="#/layout/BrowserPreview"
            />
            <Tile
                title="Chart"
                description="A chart compares sets of complex data to provide insights on their relationship and status."
                href="#/layout/Chart"
            />
            <Tile title="Collapsible" href="#/layout/Collapsible" />
            <Tile
                title="Icon Card"
                description="An icon card is an element that regroups related pieces of information together. It can be either static or interactive."
                href="#/layout/IconCard"
            />
            <Tile title="Info Box" href="#/layout/InfoBox" />
            <Tile title="Labelled Value" href="#/layout/LabeledValue" />
            <Tile title="Limit Card" href="#/layout/Limit" />
            <Tile
                title="Modal"
                description="A modal appears over the current context to have users focus on a particular task or information."
                href="#/layout/ModalWindow"
            />
            <Tile
                title="Modal Wizard"
                description="A modal wizard guides users through a task by presenting a succession of actions to complete."
                href="#/layout/ModalWizard"
            />
            <Tile
                title="Page Header"
                description="A page header informs a user of the section of the product they are currently in. It includes a breadcrumb and optional tabs."
                href="#/layout/PageHeader"
                thumbnail="header"
            />
            <Tile title="Footer" href="#/layout/Footer" />
            <Tile title="Section" href="#/layout/Section" />
            <Tile
                title="Split Layout"
                description="A split layout organizes information in two vertical columns."
                href="#/layout/SplitLayout"
            />
            <Tile
                title="Table"
                description="A table displays large quantities of items or data in a list format. Filtering features and actions may be added."
                href="#/layout/TableHOC"
            />
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
            <Tile
                title="Actionable Item"
                description="An actionable item is a dropdown menu listing actions associated with an element."
                href="#/form/ActionableItem"
            />
            <Tile
                title="Button"
                description="A button draws attention to an important action and initializes this action when clicked."
                href="#/form/Button"
                thumbnail="actionButton"
            />
            <Tile
                title="Checkbox"
                description="A set of checkboxes allow users to select multiple options from a list. A single checkbox can be used to enable/disable an option."
                href="#/form/Checkbox"
            />
            <Tile
                title="Child Form"
                description="A child form associates a subset of options or content to its parent option."
                href="#/form/ChildForm"
            />
            <Tile
                title="Code Editor"
                description="A code editor is a text area that allows users to edit code. A coding syntax is built in."
                href="#/form/CodeEditor"
                thumbnail="codeEditor"
            />
            <Tile
                title="Color Picker"
                description="A color picker is a visual interface that allows users to select a color."
                href="#/form/ColorPicker"
            />
            <Tile
                title="Date Picker"
                description="A date picker is a calendar interface that allows users to select a single date or a date range."
                href="#/form/DatePicker"
            />
            <Tile
                title="Diff Viewer"
                description="A diff viewer allows users to compare code files by showing them side by side and highlighting differences between them."
                href="#/form/DiffViewer"
            />
            <Tile
                title="Facet"
                description="A facet is a set of options used to filter a list of content items."
                href="#/form/Facet"
            />
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
                title="Tooltip"
                description="Tooltips are short descriptions that appear when hovering an element. They are used to provide explanations that do not require nor allow user interaction, like tips and tricks."
                href="#/feedback/Tooltip"
            />
        </div>
    </Section>
);
