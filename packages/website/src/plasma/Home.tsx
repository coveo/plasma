import '@demo-styling/home.scss';

import React from 'react';

import {Section, Tile} from '@coveord/plasma-react';

export const Home: React.FunctionComponent = () => (
    <Section className="home flex-auto overflow-auto demo-content">
        <WelcomeToPlasma />
        <Foundations />
        <Layout />
        <Input />
        <Navigation />
        <FeedbackAndInfo />
        <DisplayAndUtilities />
        <Legacy />
    </Section>
);

const WelcomeToPlasma: React.FC = () => (
    <Section className=" section intro">
        <h5 className="welcome-to">Welcome to</h5>
        <div className="page-title">PLASMA</div>
        <div className="body-l-book plasma-description">
            {
                'Coveo’s platform design system & ionized Vapor.\n Learn more about our brand, our values and our story by visiting our brand page'
            }
        </div>
    </Section>
);

const Foundations: React.FC = () => (
    <Section className="section">
        <h2>Foundations</h2>
        <div className="body-l-book plasma-description">Colors, typekit, styles and effects.</div>
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
                href="#/foundations/typekit/Headings"
            />
            <Tile
                title="Icon colors"
                description="Change color for icon."
                svgName="plasmaComponentBox"
                href="#/foundations/typekit/IconColor"
            />
            <Tile
                title="Line-height"
                description="Change line-height for headings and paragraph."
                svgName="plasmaComponentBox"
                href="#/foundations/typekit/LineHeight"
            />
            <Tile
                title="Links"
                description="Links examples"
                svgName="plasmaComponentBox"
                href="#/foundations/typekit/Links"
            />
            <Tile
                title="Lists"
                description="Apply styles to unordered and ordered lists"
                svgName="plasmaComponentBox"
                href="#/foundations/typekit/Lists"
            />
            <Tile
                title="Text colors"
                description="Change color for text."
                svgName="plasmaComponentBox"
                href="/#/foundations/typekit/TextColor"
            />
            <Tile
                title="Utilities"
                description="Change typographic weights, styles, and alignment with these utility classes."
                svgName="plasmaComponentBox"
                href="/#/foundations/typekit/Utilities"
            />
            <Tile
                title="Whitespace"
                description="Whitespace"
                svgName="plasmaComponentBox"
                href="/#/foundations/typekit/Whitespace"
            />
        </div>
    </Section>
);

const Layout: React.FC = () => (
    <Section className="section">
        <h2>Layout</h2>
        <div className="body-l-book plasma-description">Colors, typekit, styles and effects.</div>
        <div className="tile-grid">
            <Tile
                title="Action Bar"
                description="Different uses of the Action Bar"
                svgName="plasmaComponentBox"
                href="#/layout/ActionBar"
            />
            <Tile
                title="Action Bar Connected"
                description="Action Bar Connected"
                svgName="plasmaComponentBox"
                href="#/layout/ActionBarConnected"
            />
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
            <Tile title="Footer" description="Footer" svgName="plasmaComponentBox" href="#/layout/Footer" />
            <Tile
                title="Icon / Logo Card"
                description="Icon / Logo Card"
                svgName="plasmaComponentBox"
                href="#/layout/IconCard"
            />
            <Tile title="Card" description="Card" svgName="plasmaComponentBox" href="#/layout/Card" />
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
            <Tile
                title="Sections"
                description="Customizing the display and behavior of the interface displayed."
                svgName="plasmaComponentBox"
                href="#/layout/Sections"
            />
            <Tile
                title="Split Layout"
                description="Split Layout"
                svgName="plasmaComponentBox"
                href="#/layout/SplitLayout"
            />
            <Tile title="Tabs" description="Tabs" svgName="plasmaComponentBox" href="#/layout/Tabs" />
            <Tile
                title="Tabs Connected"
                description="Tabs Connected"
                svgName="plasmaComponentBox"
                href="#/layout/TabsConnected"
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

const Input: React.FC = () => (
    <Section className="section">
        <h2>Input</h2>
        <div className="body-l-book plasma-description">Colors, typekit, styles and effects.</div>
        <div className="tile-grid">
            <Tile
                title="Actionable Item"
                description="Actionable Item"
                svgName="plasmaComponentBox"
                href="#/input/ActionableItem"
            />
            <Tile
                title="Buttons"
                description="Buttons communicate actions, and, when clicked, initialize those actions"
                svgName="plasmaComponentBox"
                href="#/input/Button"
            />
            <Tile
                title="Checkbox"
                description="Whereas checkboxes can be used to toggle options on and off, using a toggle switch or radio buttons is preferable."
                svgName="plasmaComponentBox"
                href="#/input/Checkbox"
            />
            <Tile
                title="Child Form"
                description="Try to display only one Child Form at a time in a given option set."
                svgName="plasmaComponentBox"
                href="#/input/ChildForm"
            />
            <Tile
                title="Code Editor"
                description="Code Editor"
                svgName="plasmaComponentBox"
                href="#/input/CodeEditor"
            />
            <Tile
                title="Date Picker"
                description="Date Picker"
                svgName="plasmaComponentBox"
                href="#/input/DatePicker"
            />
            <Tile
                title="Diff Viewer"
                description="Diff Viewer"
                svgName="plasmaComponentBox"
                href="#/input/DiffViewer"
            />
            <Tile
                title="File Picker"
                description="File Picker"
                svgName="plasmaComponentBox"
                href="#/input/Filepicker"
            />
            <Tile title="Filter Box" description="Filter Box" svgName="plasmaComponentBox" href="#/input/FilterBox" />
            <Tile
                title="JSON Editor"
                description="JSON Editor"
                svgName="plasmaComponentBox"
                href="#/input/JSONEditor"
            />
            <Tile
                title="Multiline Box"
                description="Multiline Box"
                svgName="plasmaComponentBox"
                href="#/input/MultilineBox"
            />
            <Tile
                title="Numeric Inputs"
                description="The input field should be large enough to display all the user input in most cases."
                svgName="plasmaComponentBox"
                href="#/input/NumericInput"
            />
            <Tile
                title="Radio Buttons"
                description="Radio Buttons"
                svgName="plasmaComponentBox"
                href="#/input/RadioButton"
            />
            <Tile title="Search Bar" description="Search Bar" svgName="plasmaComponentBox" href="#/input/SearchBar" />
            <Tile
                title="Single Select"
                description="If space allows, and there are no more than 7 options to choose from, consider using radio buttons instead."
                svgName="plasmaComponentBox"
                href="#/input/SingleSelect"
            />
            <Tile
                title="Multi Select"
                description="If space allows, and there are no more than 7 options in total, consider using checkboxes instead."
                svgName="plasmaComponentBox"
                href="#/input/MultiSelect"
            />
            <Tile
                title="Slider"
                description="For binary settings, use a slide toggle, toggle, or checkbox instead."
                svgName="plasmaComponentBox"
                href="#/input/Slider"
            />
            <Tile title="Text Area" description="Text Area" svgName="plasmaComponentBox" href="#/input/TextArea" />
            <Tile
                title="Text Input"
                description="Display an inline validation message when the user is done interacting with the input."
                svgName="plasmaComponentBox"
                href="#/input/TextInput"
            />
            <Tile
                title="Value Popup"
                description="This is the filter picker control used to define a filter on a field."
                svgName="plasmaComponentBox"
                href="#/input/ValuePopup"
            />
        </div>
    </Section>
);

const Navigation: React.FC = () => (
    <Section className="section">
        <h2>Navigation</h2>
        <div className="body-l-book plasma-description">Colors, typekit, styles and effects.</div>
        <div className="tile-grid">
            <Tile
                title="Breadcrumbs"
                description="Breadcrumbs"
                svgName="plasmaComponentBox"
                href="#/navigation/Breadcrumbs"
            />
            <Tile
                title="Flat Select"
                description="Flat Select"
                svgName="plasmaComponentBox"
                href="#/navigation/FlatSelect"
            />
            <Tile
                title="Options Cycle"
                description="Options Cycle"
                svgName="plasmaComponentBox"
                href="#/navigation/OptionsCycle"
            />
            <Tile
                title="Pagination"
                description="Pagination"
                svgName="plasmaComponentBox"
                href="#/navigation/Pagination"
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
        </div>
    </Section>
);

const FeedbackAndInfo: React.FC = () => (
    <Section className="section">
        <h2>Feedback & Information</h2>
        <div className="body-l-book plasma-description">Colors, typekit, styles and effects.</div>
        <div className="tile-grid">
            <Tile title="Badge" description="Badge/Tag" svgName="plasmaComponentBox" href="#/feedback-and-info/Badge" />
            <Tile
                title="Feedback"
                description="Feedback"
                svgName="plasmaComponentBox"
                href="#/feedback-and-info/Feedback"
            />
            <Tile
                title="Info Box"
                description="Info Box"
                svgName="plasmaComponentBox"
                href="#/feedback-and-info/InfoBox"
            />
            <Tile
                title="Info Token"
                description="Info Token"
                svgName="plasmaComponentBox"
                href="#/feedback-and-info/InfoToken"
            />
            <Tile
                title="Limit Card"
                description="Limit Card"
                svgName="plasmaComponentBox"
                href="#/feedback-and-info/Limit"
            />
            <Tile
                title="Loading"
                description="Loading"
                svgName="plasmaComponentBox"
                href="#/feedback-and-info/Loading"
            />
            <Tile
                title="Popover Connected"
                description="Do not display more than one Popover at a time to keep interactions simple and avoid confusion."
                svgName="plasmaComponentBox"
                href="#/feedback-and-info/Popover"
            />
            <Tile
                title="Progress bar"
                description="Show a progression between 0 and 100%."
                svgName="plasmaComponentBox"
                href="#/feedback-and-info/ProgressBar"
            />
            <Tile
                title="Status Card"
                description="Status Card"
                svgName="plasmaComponentBox"
                href="#/feedback-and-info/StatusCard"
            />
            <Tile
                title="Step Progress Bar"
                description="Step Progress Bar"
                svgName="plasmaComponentBox"
                href="#/feedback-and-info/StepProgressBar"
            />
            <Tile
                title="Toast"
                description="Only include information that is relevant to the performed action."
                svgName="plasmaComponentBox"
                href="#/feedback-and-info/Toast"
            />
            <Tile
                title="Toast Connected"
                description="Only include information that is relevant to the performed action."
                svgName="plasmaComponentBox"
                href="#/feedback-and-info/ToastConnected"
            />
            <Tile
                title="Toast Content"
                description="Toast Content"
                svgName="plasmaComponentBox"
                href="#/feedback-and-info/ToastContent"
            />
            <Tile
                title="Tooltip"
                description="Tooltips are short descriptions that appear when hovering an element. They are used to provide explanations that do not require nor allow user interaction, like tips and tricks."
                svgName="plasmaComponentBox"
                href="#/feedback-and-info/Tooltip"
            />
        </div>
    </Section>
);

const DisplayAndUtilities: React.FC = () => (
    <Section className="section">
        <h2>Display & Utilities</h2>
        <div className="body-l-book plasma-description">Colors, typekit, styles and effects.</div>
        <div className="tile-grid">
            <Tile
                title="Borders"
                description="Clearly define the edge of components or layouts."
                svgName="plasmaComponentBox"
                href="#/display-and-utilities/Borders"
            />
            <Tile
                title="Collapsible"
                description="Clearly define the edge of components or layouts."
                svgName="plasmaComponentBox"
                href="#/display-and-utilities/Collapsible"
            />
        </div>
    </Section>
);

const Legacy: React.FC = () => (
    <Section className="section">
        <h2>Legacy</h2>
        <div className="body-l-book plasma-description">Legacy pages and components from React- vapor</div>
        <div className="tile-grid">
            <Tile
                title="Browser Preview"
                description="Browser Preview"
                svgName="plasmaComponentBox"
                href="#/legacy/BrowserPreview"
            />
            <Tile title="Home Card" description="Home Card" svgName="plasmaComponentBox" href="#/legacy/cards/Home" />
            <Tile
                title="Material Card"
                description="A container to display content"
                svgName="plasmaComponentBox"
                href="#/legacy/cards/Material"
            />
            <Tile
                title="Wizard Card"
                description="Use it with configuration wizards"
                svgName="plasmaComponentBox"
                href="#/legacy/cards/Wizard"
            />
            <Tile title="Charts" description="Charts" svgName="plasmaComponentBox" href="#/legacy/Chart" />
            <Tile title="Color Bar" description="Color Bar" svgName="plasmaComponentBox" href="#/legacy/ColorBar" />
            <Tile
                title="Color Dot"
                description="Display a status."
                svgName="plasmaComponentBox"
                href="#/legacy/ColorDot"
            />
            <Tile
                title="Color Picker"
                description="Color Picker"
                svgName="plasmaComponentBox"
                href="#/legacy/ColorPicker"
            />
            <Tile
                title="Cursor"
                description="Set a specific cursor style on any element."
                svgName="plasmaComponentBox"
                href="#/legacy/Cursor"
            />
            <Tile
                title="Facet Connected"
                description="Facet Connected"
                svgName="plasmaComponentBox"
                href="#/legacy/FacetConnected"
            />
            <Tile title="Icon Badge" description="Icon Badge" svgName="plasmaComponentBox" href="#/legacy/IconBadge" />
            <Tile
                title="Inputs (legacy)"
                description="Inputs (legacy) - Use the new TextInput instead."
                svgName="plasmaComponentBox"
                href="#/legacy/Input"
            />
            <Tile
                title="Item Filter"
                description="Item Filter"
                svgName="plasmaComponentBox"
                href="#/legacy/ItemFilter"
            />
            <Tile
                title="Item Filter Connected"
                description="Item Filter Connected"
                svgName="plasmaComponentBox"
                href="#/legacy/ItemFilterConnected"
            />
            <Tile
                title="Labeled Value"
                description="Labeled Value"
                svgName="plasmaComponentBox"
                href="#/legacy/LabeledValue"
            />
            <Tile
                title="Last Updated"
                description="Last Updated"
                svgName="plasmaComponentBox"
                href="#/legacy/LastUpdated"
            />
            <Tile
                title="Last Updated Connected"
                description="Last Updated Connected"
                svgName="plasmaComponentBox"
                href="#/legacy/LastUpdatedConnected"
            />
            <Tile title="Link SVG" description="Link SVG" svgName="plasmaComponentBox" href="#/legacy/LinkSvg" />
            <Tile title="List Box" description="List Box" svgName="plasmaComponentBox" href="#/legacy/ListBox" />
            <Tile
                title="Member"
                description="Use when displaying a user or member thumbnail."
                svgName="plasmaComponentBox"
                href="#/legacy/Member"
            />
            <Tile
                title="Pagination Connected"
                description="Pagination Connected"
                svgName="plasmaComponentBox"
                href="#/legacy/PaginationConnected"
            />
            <Tile
                title="Partial String Match"
                description="Partial String Match"
                svgName="plasmaComponentBox"
                href="#/legacy/PartialStringMatch"
            />
            <Tile title="Refresh" description="Refresh" svgName="plasmaComponentBox" href="#/legacy/Refresh" />
            <Tile title="Separator" description="Separator" svgName="plasmaComponentBox" href="#/legacy/Separator" />
            <Tile
                title="SideNavigation Loading"
                description="SideNavigation Loading"
                svgName="plasmaComponentBox"
                href="#/legacy/SideNavigationLoading"
            />
            <Tile title="Slide-Y" description="Slide-Y" svgName="plasmaComponentBox" href="#/legacy/SlideY" />
            <Tile title="Spaced box" description="Spaced box" svgName="plasmaComponentBox" href="#/legacy/SpacedBox" />
            <Tile
                title="Transparency"
                description="Utility to modify the transparency."
                svgName="plasmaComponentBox"
                href="#/legacy/Transparency"
            />
        </div>
    </Section>
);
