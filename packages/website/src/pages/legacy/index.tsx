import {LinkSvg, Section} from '@coveord/plasma-react';
import {ExternalSize16Px, Icon} from '@coveord/plasma-react-icons';
import {FunctionComponent} from 'react';

import {Tile} from '../../building-blocs/Tile';

export const Index = () => (
    <Section className="home flex-auto overflow-auto">
        <WelcomeToPlasma />
        <FoundationsPages />
        <LayoutPages />
        <FormPages />
        <NavigationPages />
        <FeedbackPages />
    </Section>
);

const WelcomeToPlasma: FunctionComponent = () => (
    <div className="section intro">
        <h5 className="welcome-to">Welcome to</h5>
        <div className="page-title">PLASMA</div>
        <div className="body-l-book plasma-description">
            <div>Coveo’s platform design system & ionized Vapor.</div>
            <div>
                Learn more about our brand, our values and our story by visiting our{' '}
                <LinkSvg icon={ExternalSize16Px as Icon} url="https://brand.coveo.com/">
                    brand page
                </LinkSvg>
                .
            </div>
            <div>
                Be part of the progress! Contribute to Plasma on{' '}
                <LinkSvg icon={ExternalSize16Px as Icon} url="https://github.com/coveo/plasma#readme">
                    GitHub
                </LinkSvg>
                .
            </div>
        </div>
    </div>
);

const FoundationsPages: FunctionComponent = () => (
    <Section className="section">
        <h2>Foundations</h2>
        <div className="tile-grid">
            <Tile
                title="Typekit"
                description="The Typekit covers all typography styles designed specifically to work with the Plasma ecosystem."
                href="/legacy/foundations/Typekit"
                thumbnail="typekit"
            />
            <Tile
                title="Links"
                description="A link is a navigational element that guides users to external resources or other sections of the product."
                href="/legacy/foundations/Links"
                thumbnail="links"
            />
            <Tile
                title="Spacing"
                description="Spacing is the standard padding and margin size that one can adjust to customize the layout of an interface."
                href="/legacy/foundations/Spacing"
            />
        </div>
    </Section>
);

const LayoutPages: FunctionComponent = () => (
    <Section className="section">
        <h2>Layout</h2>
        <div className="tile-grid">
            <Tile title="Banner" href="/legacy/layout/Banner" />
            <Tile
                title="Blank Slate"
                description="A blank slate informs users that a section doesn’t contain any data and provides a way to address it."
                href="/legacy/layout/BlankSlate"
            />
            <Tile title="Bordered Line" href="/legacy/layout/BorderedLine" />
            <Tile
                title="Browser Preview"
                description="A browser preview shows the result of configuration changes in a simplified representation of a browser interface."
                href="/legacy/layout/BrowserPreview"
            />
            <Tile
                title="Chart"
                description="A chart compares sets of complex data to provide insights on their relationship and status."
                href="/legacy/layout/Chart"
            />
            <Tile
                title="Child Form"
                description="A child form associates a subset of options or content to its parent option."
                href="/legacy/layout/ChildForm"
            />
            <Tile
                title="Collapsible"
                description="A collapsible allows users to hide or display a section of content."
                href="/legacy/layout/Collapsible"
            />
            <Tile
                title="Icon Card"
                description="An icon card is an element that regroups related pieces of information together. It can be either static or interactive."
                href="/legacy/layout/IconCard"
            />
            <Tile
                title="Info Box"
                description="An info box displays contextual information."
                href="/legacy/layout/InfoBox"
            />
            <Tile title="Labeled Value" href="/legacy/layout/LabeledValue" />
            <Tile
                title="Limit Card"
                description="A limit card displays the limit and usage of a resource. It includes a bar illustrating the usage against the limit."
                href="/legacy/layout/Limit"
            />
            <Tile
                title="Modal"
                description="A modal appears over the current context to have users focus on a particular task or information."
                href="/legacy/layout/ModalWindow"
            />
            <Tile
                title="Modal Wizard"
                description="A modal wizard guides users through a task by presenting a succession of actions to complete."
                href="/legacy/layout/ModalWizard"
            />
            <Tile
                title="Page Header"
                description="A page header informs a user of the section of the product they are currently in. It includes a breadcrumb and optional tabs."
                href="/legacy/layout/PageHeader"
                thumbnail="header"
            />
            <Tile title="Sticky Footer" href="/legacy/layout/StickyFooter" />
            <Tile title="Section" href="/legacy/layout/Section" />
            <Tile
                title="Split Layout"
                description="A split layout organizes information in two vertical columns."
                href="/legacy/layout/SplitLayout"
            />
            <Tile
                title="Table"
                description="A table displays large quantities of items or data in a list format. Filtering features and actions may be added."
                href="/legacy/layout/Table"
            />
        </div>
    </Section>
);

const FormPages: FunctionComponent = () => (
    <Section className="section">
        <h2>Form</h2>
        <div className="tile-grid">
            <Tile
                title="Actionable Item"
                description="An actionable item is a dropdown menu listing actions associated with an element."
                href="/legacy/form/ActionableItem"
            />
            <Tile
                title="Button"
                description="A button draws attention to an important action and initializes this action when clicked."
                href="/legacy/form/Button"
                thumbnail="actionButton"
            />
            <Tile
                title="Checkbox"
                description="A set of checkboxes allow users to select multiple options from a list. A single checkbox can be used to enable/disable an option."
                href="/legacy/form/Checkbox"
            />
            <Tile
                title="Code Editor"
                description="A code editor is a text area that allows users to edit code. A coding syntax is built in."
                href="/legacy/form/CodeEditor"
                thumbnail="codeEditor"
            />
            <Tile
                title="Color Picker"
                description="A color picker is a visual interface that allows users to select a color."
                href="/legacy/form/ColorPicker"
            />
            <Tile
                title="Countdown"
                description="A Countdown illustrates how much time there is left until an end date is reached."
                href="/legacy/form/Countdown"
            />
            <Tile
                title="Date Picker"
                description="A date picker is a calendar interface that allows users to select a single date or a date range."
                href="/legacy/form/DatePicker"
            />
            <Tile
                title="Diff Viewer"
                description="A diff viewer allows users to compare code files by showing them side by side and highlighting differences between them."
                href="/legacy/form/DiffViewer"
            />
            <Tile
                title="Facet"
                description="A facet is a set of options used to filter a list of content items."
                href="/legacy/form/Facet"
            />
            <Tile
                title="File Picker"
                description="A file picker is a dialog that allows users to upload a file."
                href="/legacy/form/Filepicker"
            />
            <Tile
                title="Filter Box"
                description="A filter box allows users to enter text to filter data. It is frequently used with tables and dropdown menus."
                href="/legacy/form/FilterBox"
                thumbnail="filterBox"
            />
            <Tile
                title="Flat Select"
                description="A flat select is a group of mutually exclusive buttons aligned horizontally. It is used to allow users to switch between interface displays or binary options."
                href="/legacy/form/FlatSelect"
            />
            <Tile
                title="JSON Editor"
                description="A JSON editor is a text area where users can enter and edit data in JSON format."
                href="/legacy/form/JSONEditor"
            />
            <Tile
                title="Multiline Box"
                description="A multiline box allows users to provide multiple inputs for the same parameter. Each input appears on a different line."
                href="/legacy/form/MultilineBox"
            />
            <Tile
                title="Multi Select"
                description="A multi select allows users to select multiple options from a list. It is typically used when there are a large number of options."
                href="/legacy/form/MultiSelect"
            />
            <Tile
                title="Numeric Inputs"
                description="A numeric input allows users to enter and edit numerical values, either manually or using an input stepper."
                href="/legacy/form/NumericInput"
            />
            <Tile
                title="Radio Button"
                description="A radio button allows users to select exactly one option from a list of mutually exclusive options."
                href="/legacy/form/RadioButton"
            />
            <Tile
                title="Search Bar"
                description="A search bar allows users to search a large set of data by entering keywords. A list of matching items is then returned."
                href="/legacy/form/SearchBar"
            />
            <Tile
                title="Single Select"
                description="A single select allows users to select only one option from a list. It is typically used when there are a large number of options."
                href="/legacy/form/SingleSelect"
            />
            <Tile
                title="Slider"
                description="A slider offers a quick and visual way for users to select a value within a given range."
                href="/legacy/form/Slider"
            />
            <Tile
                title="Text Area"
                description="A text area allows users to enter and edit longer text, often on multiple lines or in a paragraph."
                href="/legacy/form/TextArea"
            />
            <Tile
                title="Text Input"
                description="A text input allows users to enter and edit short texts, such as names, emails, and passwords."
                href="/legacy/form/TextInput"
                thumbnail="textInput"
            />
        </div>
    </Section>
);

const NavigationPages: FunctionComponent = () => (
    <Section className="section">
        <h2>Navigation</h2>
        <div className="tile-grid">
            <Tile
                title="Breadcrumbs"
                description="A breadcrumb is a secondary navigation that helps users to understand the hierarchy of interfaces and navigate through them."
                href="/legacy/navigation/Breadcrumbs"
                thumbnail="breadcrumb"
            />
            <Tile
                title="Sidebar Navigation"
                description="A sidebar navigation is a primary navigation element that displays the architecture of the product’s features."
                href="/legacy/navigation/SideNavigation"
                thumbnail="sideNav"
            />
            <Tile
                title="SubNavigation"
                thumbnail="subNavigation"
                description="A subnavigation is a secondary vertical navigation component that allows users to navigate between sections of the same interface."
                href="/legacy/navigation/SubNavigation"
            />
            <Tile
                title="Tabs"
                description="A set of tabs allows users to navigate between sections of the same interface."
                href="/legacy/navigation/Tabs"
                thumbnail="tab"
            />
        </div>
    </Section>
);

const FeedbackPages: FunctionComponent = () => (
    <Section className="section">
        <h2>Feedback</h2>
        <div className="tile-grid">
            <Tile
                title="Badge"
                description="A badge is a small label that displays a short yet important piece of information."
                href="/legacy/feedback/Badge"
                thumbnail="badge"
            />
            <Tile title="Color Bar" href="/legacy/feedback/ColorBar" thumbnail="progressBar" />
            <Tile
                title="Color Dot"
                description="A color dot indicates the status of an item."
                href="/legacy/feedback/ColorDot"
            />
            <Tile title="Icon Badge" href="/legacy/feedback/IconBadge" />
            <Tile
                title="Last Updated"
                description="A “last updated” string displays the time a set of data has been last updated by a system."
                href="/legacy/feedback/LastUpdated"
            />
            <Tile
                title="Loading Spinner"
                description="A loading spinner indicates that content or data is actively being loaded."
                href="/legacy/feedback/Loading"
            />
            <Tile
                title="Step Progress Bar"
                description="A step progress bar visualizes a user’s progress as they complete a task by representing the number of steps left to complete the task."
                href="/legacy/feedback/StepProgressBar"
            />
            <Tile title="Sync Feedback" href="/legacy/feedback/SyncFeedback" />
            <Tile
                title="Toast"
                thumbnail="toast"
                description="A toast displays a short message related to an action performed by a user."
                href="/legacy/feedback/Toast"
            />
            <Tile
                title="Tooltip"
                thumbnail="tooltip"
                description="A tooltip is a floating label that provides brief additional information about an interface component."
                href="/legacy/feedback/Tooltip"
            />
        </div>
    </Section>
);
export default Index;
