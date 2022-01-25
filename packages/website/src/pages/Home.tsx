import '@styles/home.scss';

import {Section, Tile} from '@coveord/plasma-react';
import React from 'react';

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
    <Section className=" section intro">
        <h5 className="welcome-to">Welcome to</h5>
        <div className="page-title">PLASMA</div>
        <div className="body-l-book plasma-description">
            <div>Coveo’s platform design system & ionized Vapor.</div>
            <div>
                Learn more about our brand, our values and our story by visiting our{' '}
                <a className="link" href="https://brand.coveo.com/" target="_blank">
                    brand page
                </a>
                .
            </div>
        </div>
    </Section>
);

const FoundationsPages: React.FC = () => (
    <Section className="section">
        <h2>Foundations</h2>
        <div className="tile-grid">
            <Tile
                title="Iconography"
                description="List of all icons available. See SVG for usage"
                svgName="plasmaComponentBox"
                href="#/foundations/Iconography"
            />
            <Tile title="SVG" description="SVG usage" svgName="plasmaComponentBox" href="#/foundations/Svg" />
            <Tile
                title="Headings"
                description="All HTML headings, `h1` through `h6`, are available."
                svgName="plasmaComponentBox"
                href="#/foundations/Headings"
            />
            <Tile title="Links" description="Links examples" svgName="plasmaComponentBox" href="#/foundations/Links" />
            <Tile
                title="Whitespace"
                description="Whitespace"
                svgName="plasmaComponentBox"
                href="/#/foundations/Whitespace"
            />
        </div>
    </Section>
);

const LayoutPages: React.FC = () => (
    <Section className="section">
        <h2>Layout</h2>
        <div className="tile-grid">
            <Tile title="Banner" description="Banner" svgName="plasmaComponentBox" href="#/layout/Banner" />
            <Tile
                title="Blank Slate"
                description="Use blankSlate to show information and some actions after an event."
                svgName="plasmaComponentBox"
                href="#/layout/BlankSlate"
            />
            <Tile
                title="Bordered Line"
                description="Bordered Line"
                svgName="plasmaComponentBox"
                href="#/layout/BorderedLine"
            />
            <Tile
                title="Browser Preview"
                description="Browser Preview"
                svgName="plasmaComponentBox"
                href="#/layout/BrowserPreview"
            />
            <Tile title="Chart" description="Chart" svgName="plasmaComponentBox" href="#/layout/Chart" />
            <Tile
                title="Collapsible"
                description="Collapsible"
                svgName="plasmaComponentBox"
                href="#/layout/Collapsible"
            />
            <Tile title="Icon Card" description="Icon Card" svgName="plasmaComponentBox" href="#/layout/IconCard" />
            <Tile title="Info Box" description="Info Box" svgName="plasmaComponentBox" href="#/layout/InfoBox" />
            <Tile
                title="Labelled Value"
                description="Labelled Value"
                svgName="plasmaComponentBox"
                href="#/layout/LabelledValue"
            />
            <Tile title="Limit Card" description="Limit Card" svgName="plasmaComponentBox" href="#/layout/LimitCard" />
            <Tile
                title="Modal Window"
                description="Modal windows appear in front of the main page and disable it while they are visible. They act as a zoom in on an element of the main page that allows additionnal interaction or configuration. They make possible for users to focus on their content whilst avoiding leaving the context from which they have been called."
                svgName="plasmaComponentBox"
                href="#/layout/ModalWindow"
            />
            <Tile
                title="Modal Wizard"
                description="Modal Wizard"
                svgName="plasmaComponentBox"
                href="#/layout/ModalWizard"
            />
            <Tile
                title="Page Header"
                description="Page Header"
                svgName="plasmaComponentBox"
                href="#/layout/PageHeader"
            />
            <Tile title="Footer" description="Footer" svgName="plasmaComponentBox" href="#/layout/Footer" />
            <Tile
                title="Section"
                description="Customizing the display and behavior of the interface displayed."
                svgName="plasmaComponentBox"
                href="#/layout/Section"
            />
            <Tile
                title="Split Layout"
                description="Split Layout"
                svgName="plasmaComponentBox"
                href="#/layout/SplitLayout"
            />
            <Tile title="Table" description="Table" svgName="plasmaComponentBox" href="#/layout/Table" />
            <Tile
                title="Table HOC Loading"
                description="Table HOC Loading"
                svgName="plasmaComponentBox"
                href="#/layout/TableHOCLoading"
            />
            <Tile
                title="Table HOC Server"
                description="Table HOC Server"
                svgName="plasmaComponentBox"
                href="#/layout/TableHOCServer"
            />
            <Tile
                title="Table HOC with Blank Slate"
                description="Table HOC with Blank Slate"
                svgName="plasmaComponentBox"
                href="#/layout/Table HOCwithBlankSlate"
            />
        </div>
    </Section>
);

const FormPages: React.FC = () => (
    <Section className="section">
        <h2>Form</h2>
        <div className="tile-grid">
            <Tile
                title="Actionable Item"
                description="Actionable Item"
                svgName="plasmaComponentBox"
                href="#/form/ActionableItem"
            />
            <Tile
                title="Button"
                description="Buttons communicate actions, and, when clicked, initialize those actions"
                svgName="plasmaComponentBox"
                href="#/form/Button"
            />
            <Tile
                title="Checkbox"
                description="Whereas checkboxes can be used to toggle options on and off, using a toggle switch or radio buttons is preferable."
                svgName="plasmaComponentBox"
                href="#/form/Checkbox"
            />
            <Tile
                title="Child Form"
                description="Try to display only one Child Form at a time in a given option set."
                svgName="plasmaComponentBox"
                href="#/form/ChildForm"
            />
            <Tile title="Code Editor" description="Code Editor" svgName="plasmaComponentBox" href="#/form/CodeEditor" />
            <Tile
                title="Color Picker"
                description="Code Picker"
                svgName="plasmaComponentBox"
                href="#/form/ColorPicker"
            />
            <Tile title="Date Picker" description="Date Picker" svgName="plasmaComponentBox" href="#/form/DatePicker" />
            <Tile title="Diff Viewer" description="Diff Viewer" svgName="plasmaComponentBox" href="#/form/DiffViewer" />
            <Tile title="Facet" description="Facet" svgName="plasmaComponentBox" href="#/form/Facet" />
            <Tile title="File Picker" description="File Picker" svgName="plasmaComponentBox" href="#/form/Filepicker" />
            <Tile title="Filter Box" description="Filter Box" svgName="plasmaComponentBox" href="#/form/FilterBox" />
            <Tile title="Flat Select" description="Flat Select" svgName="plasmaComponentBox" href="#/form/FlatSelect" />
            <Tile title="JSON Editor" description="JSON Editor" svgName="plasmaComponentBox" href="#/form/JSONEditor" />
            <Tile
                title="Multiline Box"
                description="Multiline Box"
                svgName="plasmaComponentBox"
                href="#/form/MultilineBox"
            />
            <Tile
                title="Numeric Inputs"
                description="The input field should be large enough to display all the user input in most cases."
                svgName="plasmaComponentBox"
                href="#/form/NumericInput"
            />
            <Tile
                title="Radio Button"
                description="Radio Button"
                svgName="plasmaComponentBox"
                href="#/form/RadioButton"
            />
            <Tile title="Search Bar" description="Search Bar" svgName="plasmaComponentBox" href="#/form/SearchBar" />
            <Tile
                title="Single Select"
                description="If space allows, and there are no more than 7 options to choose from, consider using radio buttons instead."
                svgName="plasmaComponentBox"
                href="#/form/SingleSelect"
            />
            <Tile
                title="Multi Select"
                description="If space allows, and there are no more than 7 options in total, consider using checkboxes instead."
                svgName="plasmaComponentBox"
                href="#/form/MultiSelect"
            />
            <Tile
                title="Slider"
                description="For binary settings, use a slide toggle, toggle, or checkbox instead."
                svgName="plasmaComponentBox"
                href="#/form/Slider"
            />
            <Tile title="Text Area" description="Text Area" svgName="plasmaComponentBox" href="#/form/TextArea" />
            <Tile
                title="Text Input"
                description="Display an inline validation message when the user is done interacting with the input."
                svgName="plasmaComponentBox"
                href="#/form/TextInput"
            />
            <Tile
                title="Value Popup"
                description="This is the filter picker control used to define a filter on a field."
                svgName="plasmaComponentBox"
                href="#/form/ValuePopup"
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
                svgName="plasmaComponentBox"
                href="#/navigation/Breadcrumbs"
            />
            <Tile
                title="Sidebar Navigation"
                description="Sidebar Navigation"
                svgName="plasmaComponentBox"
                href="#/navigation/SideNavigation"
            />
            <Tile
                title="SubNavigation"
                description="SubNavigation"
                svgName="plasmaComponentBox"
                href="#/navigation/SubNavigation"
            />
            <Tile title="Tabs" description="Tabs" svgName="plasmaComponentBox" href="#/navigation/Tabs" />
        </div>
    </Section>
);

const FeedbackPages: React.FC = () => (
    <Section className="section">
        <h2>Feedback</h2>
        <div className="tile-grid">
            <Tile title="Badge" description="Badge" svgName="plasmaComponentBox" href="#/feedback/Badge" />
            <Tile title="Color Bar" description="Color Bar" svgName="plasmaComponentBox" href="#/feedback/ColorBar" />
            <Tile title="Color Dot" description="Color Dot" svgName="plasmaComponentBox" href="#/feedback/ColorDot" />
            <Tile
                title="Icon Badge"
                description="Icon Badge"
                svgName="plasmaComponentBox"
                href="#/feedback/IconBadge"
            />
            <Tile
                title="Last Updated"
                description="Last Updated"
                svgName="plasmaComponentBox"
                href="#/feedback/LastUpdated"
            />
            <Tile
                title="Loading Spinner"
                description="Animated loading spinner"
                svgName="plasmaComponentBox"
                href="#/feedback/Loading"
            />
            <Tile
                title="Step Progress Bar"
                description="Step Progress Bar"
                svgName="plasmaComponentBox"
                href="#/feedback/StepProgressBar"
            />
            <Tile
                title="Sync Feedback"
                description="Sync Feedback"
                svgName="plasmaComponentBox"
                href="#/feedback/SyncFeedback"
            />
            <Tile
                title="Toast"
                description="Only include information that is relevant to the performed action."
                svgName="plasmaComponentBox"
                href="#/feedback/Toast"
            />
            <Tile
                title="Toast Connected"
                description="Only include information that is relevant to the performed action."
                svgName="plasmaComponentBox"
                href="#/feedback/ToastConnected"
            />
            <Tile
                title="Toast Content"
                description="Toast Content"
                svgName="plasmaComponentBox"
                href="#/feedback/ToastContent"
            />
            <Tile
                title="Tooltip"
                description="Tooltips are short descriptions that appear when hovering an element. They are used to provide explanations that do not require nor allow user interaction, like tips and tricks."
                svgName="plasmaComponentBox"
                href="#/feedback/Tooltip"
            />
        </div>
    </Section>
);
