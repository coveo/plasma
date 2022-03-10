import {Section, Svg} from '@coveord/plasma-react';
import {NextPage} from 'next';
import Head from 'next/head';
import React from 'react';

import {Tile} from '../building-blocs/Tile';

export const Index: NextPage = () => (
    <Section className="home flex-auto overflow-auto demo-content">
        <Head>
            <title>Plasma Design System</title>
            <meta property="og:title" content="Plasma Design System" key="title" />
        </Head>
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
                    <Svg svgName="external" svgClass="icon mod-14" style={{marginLeft: '4px'}} />
                </a>
                .
            </div>
            <div>
                Be part of the progress! Contribute to Plasma on{' '}
                <a href="https://github.com/coveo/plasma#readme" target="_blank" className="link inline-flex">
                    GitHub
                    <Svg svgName="external" svgClass="icon mod-14" style={{marginLeft: '4px'}} />
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
                href="foundations/Iconography"
                thumbnail="iconography"
            />
            <Tile
                title="Typekit"
                description="The Typekit covers the entire spectrum of typography styles designed specifically to work in harmony with the Plasma ecosystem."
                href="foundations/Typekit"
                thumbnail="typekit"
            />
            <Tile
                title="Links"
                description="A link is a navigational element that guides users to external resources or other sections of the product."
                href="foundations/Links"
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
            <Tile title="Banner" href="layout/Banner" />
            <Tile
                title="Blank Slate"
                description="A blank slate informs users that a section doesn’t contain any data and provides a way to address it."
                href="layout/BlankSlate"
            />
            <Tile title="Bordered Line" href="layout/BorderedLine" />
            <Tile
                title="Browser Preview"
                description="A browser preview shows the result of configuration changes in a simplified representation of a browser interface."
                href="layout/BrowserPreview"
            />
            <Tile
                title="Chart"
                description="A chart compares sets of complex data to provide insights on their relationship and status."
                href="layout/Chart"
            />
            <Tile
                title="Collapsible"
                description="A collapsible allows users to hide or display a section of content."
                href="layout/Collapsible"
            />
            <Tile
                title="Icon Card"
                description="An icon card is an element that regroups related pieces of information together. It can be either static or interactive."
                href="layout/IconCard"
            />
            <Tile title="Info Box" description="An info box displays contextual information." href="layout/InfoBox" />
            <Tile title="Labelled Value" href="layout/LabeledValue" />
            <Tile
                title="Limit Card"
                description="A limit card displays the limit and usage of a resource. It includes a bar illustrating the usage against the limit."
                href="layout/Limit"
            />
            <Tile
                title="Modal"
                description="A modal appears over the current context to have users focus on a particular task or information."
                href="layout/ModalWindow"
            />
            <Tile
                title="Modal Wizard"
                description="A modal wizard guides users through a task by presenting a succession of actions to complete."
                href="layout/ModalWizard"
            />
            <Tile
                title="Page Header"
                description="A page header informs a user of the section of the product they are currently in. It includes a breadcrumb and optional tabs."
                href="layout/PageHeader"
                thumbnail="header"
            />
            <Tile title="Footer" href="layout/Footer" />
            <Tile title="Section" href="layout/Section" />
            <Tile
                title="Split Layout"
                description="A split layout organizes information in two vertical columns."
                href="layout/SplitLayout"
            />
            <Tile
                title="Table"
                description="A table displays large quantities of items or data in a list format. Filtering features and actions may be added."
                href="layout/TableHOC"
            />
            <Tile title="Table HOC Loading" href="layout/TableHOCLoading" />
            <Tile title="Table HOC Server" href="layout/TableHOCServer" />
            <Tile title="Table HOC with Blank Slate" href="layout/TableHOCwithBlankSlate" />
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
                href="form/ActionableItem"
            />
            <Tile
                title="Button"
                description="A button draws attention to an important action and initializes this action when clicked."
                href="form/Button"
                thumbnail="actionButton"
            />
            <Tile
                title="Checkbox"
                description="A set of checkboxes allow users to select multiple options from a list. A single checkbox can be used to enable/disable an option."
                href="form/Checkbox"
            />
            <Tile
                title="Child Form"
                description="A child form associates a subset of options or content to its parent option."
                href="form/ChildForm"
            />
            <Tile
                title="Code Editor"
                description="A code editor is a text area that allows users to edit code. A coding syntax is built in."
                href="form/CodeEditor"
                thumbnail="codeEditor"
            />
            <Tile
                title="Color Picker"
                description="A color picker is a visual interface that allows users to select a color."
                href="form/ColorPicker"
            />
            <Tile
                title="Date Picker"
                description="A date picker is a calendar interface that allows users to select a single date or a date range."
                href="form/DatePicker"
            />
            <Tile
                title="Diff Viewer"
                description="A diff viewer allows users to compare code files by showing them side by side and highlighting differences between them."
                href="form/DiffViewer"
            />
            <Tile
                title="Facet"
                description="A facet is a set of options used to filter a list of content items."
                href="form/Facet"
            />
            <Tile
                title="File Picker"
                description="A file picker is a dialog that allows users to upload a file."
                href="form/Filepicker"
            />
            <Tile
                title="Filter Box"
                description="A filter box allows users to enter text to filter data. It is frequently used with tables and dropdown menus."
                href="form/FilterBox"
                thumbnail="filterBox"
            />
            <Tile
                title="Flat Select"
                description="A flat select is a group of mutually exclusive buttons aligned horizontally. It is used to allow users to switch between interface displays or binary options."
                href="form/FlatSelect"
            />
            <Tile
                title="JSON Editor"
                description="A JSON editor is a text area where users can enter and edit data in JSON format."
                href="form/JSONEditor"
            />
            <Tile
                title="Multiline Box"
                description="A multiline box allows users to provide multiple inputs for the same parameter. Each input appears on a different line."
                href="form/MultilineBox"
            />
            <Tile
                title="Multi Select"
                description="A multi select allows users to select multiple options from a list. It is typically used when there are a large number of options."
                href="#/form/MultiSelect"
            />
            <Tile
                title="Numeric Inputs"
                description="A numeric input allows users to enter and edit numerical values, either manually or using an input stepper."
                href="form/NumericInput"
            />
            <Tile
                title="Radio Button"
                description="A radio button allows users to select exactly one option from a list of mutually exclusive options."
                href="form/RadioButton"
            />
            <Tile
                title="Search Bar"
                description="A search bar allows users to search a large set of data by entering keywords. A list of matching items is then returned."
                href="form/SearchBar"
            />
            <Tile
                title="Single Select"
                description="A single select allows users to select only one option from a list. It is typically used when there are a large number of options."
                href="form/SingleSelect"
            />
            <Tile
                title="Slider"
                description="A slider offers a quick and visual way for users to select a value within a given range."
                href="form/Slider"
            />
            <Tile
                title="Text Area"
                description="A text area allows users to enter and edit longer text, often on multiple lines or in a paragraph."
                href="form/TextArea"
            />
            <Tile
                title="Text Input"
                description="A text input allows users to enter and edit short texts, such as names, emails, and passwords."
                href="form/TextInput"
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
                description="A breadcrumb is a secondary navigation that helps users to understand the hierarchy of interfaces and navigate through them."
                href="navigation/Breadcrumbs"
                thumbnail="breadcrumb"
            />
            <Tile
                title="Sidebar Navigation"
                description="A sidebar navigation is a primary navigation element that displays the architecture of the product’s features."
                href="navigation/SideNavigation"
                thumbnail="sideNav"
            />
            <Tile
                title="SubNavigation"
                description="A subnavigation is a secondary vertical navigation component that allows users to navigate between sections of the same interface."
                href="navigation/SubNavigation"
            />
            <Tile
                title="Tabs"
                description="A set of tabs allows users to navigate between sections of the same interface."
                href="navigation/Tabs"
                thumbnail="tab"
            />
        </div>
    </Section>
);

const FeedbackPages: React.FC = () => (
    <Section className="section">
        <h2>Feedback</h2>
        <div className="tile-grid">
            <Tile
                title="Badge"
                description="A badge is a small label that displays a short yet important piece of information."
                href="feedback/Badge"
                thumbnail="badge"
            />
            <Tile title="Color Bar" href="feedback/ColorBar" thumbnail="progressBar" />
            <Tile
                title="Color Dot"
                description="A color dot indicates the status of an item."
                href="feedback/ColorDot"
            />
            <Tile title="Icon Badge" href="feedback/IconBadge" />
            <Tile
                title="Last Updated"
                description="A “last updated” string displays the time a set of data has been last updated by a system."
                href="feedback/LastUpdated"
            />
            <Tile
                title="Loading Spinner"
                description="A loading spinner indicates that content or data is actively being loaded."
                href="feedback/Loading"
            />
            <Tile
                title="Step Progress Bar"
                description="A step progress bar visualizes a user’s progress as they complete a task by representing the number of steps left to complete the task."
                href="feedback/StepProgressBar"
            />
            <Tile title="Sync Feedback" href="feedback/SyncFeedback" />
            <Tile
                title="Toast"
                description="A toast displays a short message related to an action performed by a user."
                href="feedback/Toast"
            />
            <Tile
                title="Tooltip"
                description="A tooltip is a floating label that provides brief additional information about an interface component."
                href="feedback/Tooltip"
            />
        </div>
    </Section>
);
export default Index;
