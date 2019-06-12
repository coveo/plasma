import NavigationSection from './NavigationSection';
import NavigationLink from './NavigationLink';
import * as VaporSVG from 'coveo-styleguide';
import Svg from '../components/Svg';

const Navigation = () => {
    return (
        <nav className="navigation">
            <div className="navigation-menu">
                <ul className="navigation-menu-sections">
                    <NavigationSection
                        key="general"
                        icon={<Svg name={VaporSVG.svg.info.name} className="icon mod-20" />}
                        title="General Guidelines"
                        pages={[
                            <NavigationLink key="content-number" href="/" name="Content / Numbers" />,
                            <NavigationLink
                                key="content-ui-text-and-error-messages"
                                href="/general-guidelines#content-ui-text-and-error-messages"
                                name="Content / UI texts and error messages"
                            />,
                            <NavigationLink key="dialog" href="/general-guidelines#dialog" name="Dialog" />,
                            <NavigationLink
                                key="messages-error"
                                href="/general-guidelines#messages-error"
                                name="Messages / Error"
                            />,
                            <NavigationLink
                                key="messages-success"
                                href="/general-guidelines#messages-success"
                                name="Messages / Success"
                            />,
                            <NavigationLink
                                key="messages-warning"
                                href="/general-guidelines#messages-warning"
                                name="Messages / Warning"
                            />,
                            <NavigationLink key="hit-zones" href="/general-guidelines#hit-zones" name="Hit Zones" />,
                        ]}
                    />
                    <NavigationSection
                        key="buttons"
                        icon={<Svg name={VaporSVG.svg.open.name} className="icon mod-20" />}
                        title="Buttons"
                        pages={[
                            <NavigationLink key="overview" href="/buttons#overview" name="Overview" />,
                            <NavigationLink key="base" href="/buttons#base" name="Base" />,
                            <NavigationLink
                                key="color-modifiers"
                                href="/buttons#color-modifiers"
                                name="Color modifiers"
                            />,
                            <NavigationLink
                                key="size-modifiers"
                                href="/buttons#size-modifiers"
                                name="Size modifiers"
                            />,
                            <NavigationLink
                                key="append-prepend"
                                href="/buttons#append-prepend"
                                name="Append and Prepend"
                            />,
                            <NavigationLink key="alignment" href="/buttons#alignment" name="Alignment" />,
                        ]}
                    />

                    <NavigationSection
                        key="cards"
                        icon={
                            <svg viewBox="0 0 20 20">
                                <path d="M2 19V1c0-.607.399-1 1-1h14c.603 0 1 .395 1 1v18c0 .605-.399.998-1 1H3c-.603 0-1-.393-1-1m2-1V2h12v16" />
                                <path d="M11 15a.75.75 0 0 1 0-1.061L12.939 12 11 10.061A.75.75 0 1 1 12.061 9l3 3-3 3A.75.75 0 0 1 11 15M7.939 11l-3-3 3-3A.75.75 0 1 1 9 6.061L7.061 8 9 9.939A.75.75 0 1 1 7.939 11" />
                            </svg>
                        }
                        title="Cards"
                        pages={[
                            <NavigationLink key="flippable" href="/cards#flippable" name="Flippable" />,
                            <NavigationLink key="home" href="/cards#home" name="Home" />,
                            <NavigationLink key="logo" href="/cards#logo" name="Logo" />,
                            <NavigationLink key="limit" href="/cards#limit" name="Limit" />,
                            <NavigationLink key="material" href="/cards#material" name="Material" />,
                            <NavigationLink key="wizard" href="/cards#wizard" name="Wizard" />,
                        ]}
                    />

                    <NavigationSection
                        key="colors"
                        icon={<span className="smaller bold">rgb</span>}
                        title="Colors"
                        pages={[<NavigationLink href="/colors" name="Palette" />]}
                    />

                    <NavigationSection
                        key="others"
                        icon={<Svg name={VaporSVG.svg.more.name} className="icon mod-20" />}
                        title="Other Components"
                        pages={[
                            <NavigationLink href="/components#badge" name="Badge" />,
                            <NavigationLink href="/components#banner" name="Banner" />,
                            <NavigationLink href="/components#blank-slate" name="Blank Slate" />,
                            <NavigationLink href="/components#breadcrumbs" name="Breadcrumbs" />,
                            <NavigationLink href="/components#calendar-date-picker" name="Calendar & Date Picker" />,
                            <NavigationLink href="/components#collapsible" name="Collapsible" />,
                            <NavigationLink href="/components#content-placeholder" name="Content placeholder" />,
                            <NavigationLink href="/components#corner-ribbon" name="Corner ribbon" />,
                            <NavigationLink href="/components#facet" name="Facet" />,
                            <NavigationLink href="/components#card" name="Card" />,
                            <NavigationLink href="/components#search-field" name="Search Field" />,
                            <NavigationLink href="/components#list-box" name="List Box" />,
                            <NavigationLink href="/components#loading" name="Loading" />,
                            <NavigationLink href="/components#member" name="Member" />,
                            <NavigationLink href="/components#modal" name="Modal" />,
                            <NavigationLink href="/components#multi-step-bar" name="Multi step bar" />,
                            <NavigationLink href="/components#sync-feedback" name="Sync Feedback" />,
                            <NavigationLink href="/components#tabs" name="Tabs" />,
                        ]}
                    />

                    <NavigationSection
                        key="filtering"
                        icon={<Svg name={VaporSVG.svg.filter.name} className="icon mod-20" />}
                        title="Filtering Controls"
                        pages={[
                            <NavigationLink href="/filtering#picker" name="Picker" />,
                            <NavigationLink href="/filtering#pickers" name="Pickers" />,
                            <NavigationLink href="/filtering#list-popup" name="List Popup" />,
                            <NavigationLink href="/filtering#value-popup" name="Value Popup" />,
                        ]}
                    />

                    <NavigationSection
                        key="form-controls"
                        icon={<Svg name={VaporSVG.svg.menuOptimization.name} className="icon mod-20" />}
                        title="Form Controls"
                        pages={[
                            <NavigationLink href="/form-controls#text-input" name="Text input" />,
                            <NavigationLink href="/form-controls#numeric-spinner" name="Numeric spinner" />,
                            <NavigationLink href="/form-controls#checkboxes-infos" name="Checkboxes / Infos" />,
                            <NavigationLink href="/form-controls#checkboxes" name="Checkboxes" />,
                            <NavigationLink href="/form-controls#radio-buttons" name="Radio buttons" />,
                            <NavigationLink href="/form-controls#slide-toggle" name="Slide toggle" />,
                            <NavigationLink
                                href="/form-controls#slide-toggle-modifiers"
                                name="Slide toggle modifiers"
                            />,
                            <NavigationLink href="/form-controls#slide-toggle-double" name="Slide toggle double" />,
                            <NavigationLink href="/form-controls#filter-box" name="Filter box" />,
                            <NavigationLink href="/form-controls#input-slider" name="Input slider" />,
                            <NavigationLink href="/form-controls#dropdown" name="Dropdown" />,
                            <NavigationLink href="/form-controls#dropdown-modifiers" name="Dropdown modifiers" />,
                            <NavigationLink href="/form-controls#flat-select" name="Flat select" />,
                            <NavigationLink href="/form-controls#flat-select-prepend" name="Prepended flat select" />,
                            <NavigationLink href="/form-controls#flat-select-modifiers" name="Flat select modifiers" />,
                            <NavigationLink href="/form-controls#multiline-input" name="Multiline input" />,
                            <NavigationLink href="/form-controls#progress-bar" name="Progress bar" />,
                            <NavigationLink href="/form-controls#step=progress-bar" name="Step progress bar" />,
                            <NavigationLink href="/form-controls#file-input" name="File input" />,
                        ]}
                    />

                    <NavigationSection
                        key="form-layout"
                        icon={<Svg name={VaporSVG.svg.dashboard.name} className="icon mod-20" />}
                        title="Form Layout"
                        pages={[
                            <NavigationLink href="/form-layout#groups" name="Groups" />,
                            <NavigationLink href="/form-layout#child-element" name="Child element" />,
                            <NavigationLink href="/form-layout#split-layout" name="Split layout" />,
                            <NavigationLink href="/form-layout#child-section-element" name="Child section element" />,
                        ]}
                    />

                    <NavigationSection
                        key="headers"
                        icon={<Svg name={VaporSVG.svg.explorer.name} className="icon mod-20" />}
                        title="Headers"
                        pages={[
                            <NavigationLink href="/headers#panel" name="Panel" />,
                            <NavigationLink href="/headers#site" name="Site" />,
                        ]}
                    />

                    <NavigationSection
                        key="Icons"
                        icon={<Svg name={VaporSVG.svg.noContent.name} className="icon mod-20" />}
                        title="Icons"
                        pages={[
                            <NavigationLink href="/icons#modifiers" name="Icon modifiers" />,
                            <NavigationLink href="/icons#fillers" name="Icon fillers" />,
                            <NavigationLink href="/icons#list" name="Icons" />,
                        ]}
                    />

                    <NavigationSection
                        key="Messages"
                        icon={<Svg name={VaporSVG.svg.ftList.name} className="icon mod-20" />}
                        title="Messages"
                        pages={[
                            <NavigationLink href="/messages#popover" name="Popover" />,
                            <NavigationLink href="/messages#prompt" name="Prompt" />,
                            <NavigationLink href="/messages#toast" name="Toast" />,
                            <NavigationLink href="/messages#tooltip" name="Tooltip" />,
                        ]}
                    />

                    <NavigationSection
                        key="Navigation"
                        icon={<Svg name={VaporSVG.svg.invert.name} className="icon mod-20" />}
                        title="Navigation"
                        pages={[
                            <NavigationLink href="/navigation#navigation" name="Navigation" />,
                            <NavigationLink href="/navigation#sub-navigation" name="Sub Navigation" />,
                            <NavigationLink href="/navigation#navigation-loading" name="Navigation Loading" />,
                        ]}
                    />

                    <NavigationSection
                        key="Tables"
                        icon={<Svg name={VaporSVG.svg.filterFacet.name} className="icon mod-20" />}
                        title="Tables"
                        pages={[
                            <NavigationLink href="/tables#base" name="Base" />,
                            <NavigationLink href="/tables#drag-and-drop" name="Drag and drop" />,
                            <NavigationLink href="/tables#fixed-header" name="Fixed header" />,
                            <NavigationLink href="/tables#actions-container" name="Actions container" />,
                            <NavigationLink href="/tables#small-actions-container" name="Small actions container" />,
                            <NavigationLink href="/tables#collapsible-rows" name="Collapsible rows" />,
                            <NavigationLink href="/tables#alternating-color-rows" name="Alternating color rows" />,
                            <NavigationLink href="/tables#pagination" name="Pagination" />,
                            <NavigationLink href="/tables#smaller-rows" name="Smaller rows" />,
                            <NavigationLink href="/tables#loading" name="Loading" />,
                        ]}
                    />

                    <NavigationSection
                        key="Typography"
                        icon={<span className="bold">T</span>}
                        title="Typography"
                        pages={[
                            <NavigationLink href="/typography#headings" name="Headings" />,
                            <NavigationLink href="/typography#colors" name="Colors" />,
                            <NavigationLink href="/typography#utilities" name="Utilities" />,
                            <NavigationLink href="/typography#lists" name="Lists" />,
                            <NavigationLink href="/typography#line-height" name="Line-height" />,
                        ]}
                    />

                    <NavigationSection
                        key="Utility"
                        icon={<Svg name={VaporSVG.svg.maintenance.name} className="icon mod-20" />}
                        title="Utility"
                        pages={[
                            <NavigationLink href="/utility#whitespace" name="Whitespace" />,
                            <NavigationLink href="/utility#spaced-box" name="Spaced box" />,
                            <NavigationLink href="/utility#cursor" name="Cursor" />,
                            <NavigationLink href="/utility#color-dots" name="Color dots" />,
                            <NavigationLink href="/utility#borders" name="Borders" />,
                            <NavigationLink href="/utility#transparency" name="Transparency" />,
                            <NavigationLink href="/utility#hover" name="Hover" />,
                        ]}
                    />
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
