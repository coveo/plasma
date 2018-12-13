import 'codemirror/lib/codemirror.css';
import 'coveo-styleguide/dist/css/CoveoStyleGuide.css';
import './style.scss';

import * as classNames from 'classnames';
import * as React from 'react';
import {render as ReactDOMRender} from 'react-dom';
import {Provider} from 'react-redux';

import {SlideYExamples} from '../src/animations/examples/SlideYExamples';
import {ActionableItemExamples} from '../src/components/actionable-item/examples/ActionableItemExamples';
import {ActionBarConnectedExamples} from '../src/components/actions/examples/ActionBarConnectedExamples';
import {ActionBarExamples} from '../src/components/actions/examples/ActionBarExamples';
import {ItemFilterConnectedExamples} from '../src/components/actions/filters/examples/ItemFilterConnectedExamples';
import {ItemFilterExamples} from '../src/components/actions/filters/examples/ItemFilterExamples';
import {AutocompleteExamples} from '../src/components/autocomplete/examples/AutocompleteExamples';
import {BadgeExamples} from '../src/components/badge/examples/BadgeExamples';
import {BannerExamples} from '../src/components/banner/examples/BannerExamples';
import {BlankSlateExample} from '../src/components/blankSlate/examples/BlankSlateExample';
import {BorderedLineExamples} from '../src/components/borderedLine/examples/BorderedLineExamples';
import {BreadcrumbsExamples} from '../src/components/breadcrumbs/examples/BreadcrumbsExamples';
import {ButtonExamples} from '../src/components/button/examples/ButtonExamples';
import {CalendarConnectedExamples} from '../src/components/calendar/examples/CalendarConnectedExamples';
import {CheckboxConnectedExamples} from '../src/components/checkbox/examples/CheckboxConnectedExamples';
import {CheckboxExamples} from '../src/components/checkbox/examples/CheckboxExamples';
import {GroupableCheckboxConnectedExamples} from '../src/components/checkbox/examples/GroupableCheckboxConnectedExamples';
import {ChildFormExamples} from '../src/components/childForm/examples/ChildFormExamples';
import {ChosenSelectExamples} from '../src/components/chosen/examples/ChosenSelectExamples';
import {CollapsibleContainerExamples} from '../src/components/collapsible/examples/CollapsibleContainerExamples';
import {CollapsibleExamples} from '../src/components/collapsible/examples/CollapsibleExamples';
import {CollapsibleInfoBoxExamples} from '../src/components/collapsible/examples/CollapsibleInfoBoxExamples';
import {ColorExamples} from '../src/components/color/examples/ColorExamples';
import {ColorBarExamples} from '../src/components/colorBar/ColorBarExamples';
import {ContentExamples} from '../src/components/content/examples/ContentExamples';
import {CornerRibbonExamples} from '../src/components/cornerRibbon/examples/CornerRibbonExamples';
import {DatePickerBoxConnectedExamples} from '../src/components/datePicker/examples/DatePickerBoxConnectedExamples';
import {DatePickerBoxExamples} from '../src/components/datePicker/examples/DatePickerBoxExamples';
import {DatePickerDropdownConnectedExamples} from '../src/components/datePicker/examples/DatePickerDropdownConnectedExamples';
import {
    DatePickerDropdownConnectedSingleDateExamples,
} from '../src/components/datePicker/examples/DatePickerDropdownConnectedSingleDateExamples';
import {DatesSelectionConnectedExamples} from '../src/components/datePicker/examples/DatesSelectionConnectedExamples';
import {DatesSelectionExamples} from '../src/components/datePicker/examples/DatesSelectionExamples';
import {DiffViewerExamples} from '../src/components/diffViewer/examples/DiffViewerExamples';
import {DropdownSearchExamples} from '../src/components/dropdownSearch/examples/DropdownSearchExamples';
import {CodeEditorExamples} from '../src/components/editor/examples/CodeEditorExamples';
import {JSONEditorExamples} from '../src/components/editor/examples/JSONEditorExamples';
import {FacetConnectedExamples} from '../src/components/facets/examples/FacetConnectedExamples';
import {FacetExamples} from '../src/components/facets/examples/FacetExamples';
import {FilterBoxConnectedExamples} from '../src/components/filterBox/examples/FilterBoxConnectedExamples';
import {FilterBoxExamples} from '../src/components/filterBox/examples/FilterBoxExamples';
import {FlatSelectExamples} from '../src/components/flatSelect/examples/FlatSelectExamples';
import {FlippableExamples} from '../src/components/flippable/exemples/FlippableExamples';
import {BasicHeaderExamples} from '../src/components/headers/examples/BasicHeaderExamples';
import {BreadcrumbHeaderExample} from '../src/components/headers/examples/BreadcrumbHeaderExample';
import {InfoBoxExamples} from '../src/components/infoBox/examples/InfoBoxExamples';
import {InputAndInputConnectedExamples} from '../src/components/input/examples/InputAndInputConnectedExamples';
import {ItemBoxExamples} from '../src/components/itemBox/examples/ItemBoxExamples';
import {LabeledValueExamples} from '../src/components/labeledValue/examples/LabeledValueExamples';
import {LastUpdatedConnectedExamples} from '../src/components/lastUpdated/examples/LastUpdatedConnectedExamples';
import {LastUpdatedExamples} from '../src/components/lastUpdated/examples/LastUpdatedExamples';
import {ListBoxExamples} from '../src/components/listBox/examples/ListBoxExamples';
import {LoadingExamples} from '../src/components/loading/LoadingExamples';
import {LogoCardExamples} from '../src/components/logoCard/examples/LogoCardExamples';
import {MenuExamples} from '../src/components/menu/examples/MenuExamples';
import {ModalCompositeConnectedExamples} from '../src/components/modal/examples/ModalCompositeConnectedExamples';
import {ModalCompositeExamples} from '../src/components/modal/examples/ModalCompositeExamples';
import {ModalConnectedExamples} from '../src/components/modal/examples/ModalConnectedExamples';
import {ModalExamples} from '../src/components/modal/examples/ModalExamples';
import {ModalPromptExamples} from '../src/components/modalPrompt/exemples/ModalPromptExamples';
import {MultilineInputExamples} from '../src/components/multilineInput/examples/MultilineInputExamples';
import {SplitMultilineInputExamples} from '../src/components/multilineInput/examples/SplitMultilineExamples';
import {MultiStepBarExamples} from '../src/components/multiStepBar/examples/MultiStepBarExamples';
import {NavigationConnectedExamples} from '../src/components/navigation/examples/NavigationConnectedExamples';
import {NavigationExamples} from '../src/components/navigation/examples/NavigationExamples';
import {OptionsCycleConnectedExamples} from '../src/components/optionsCycle/examples/OptionsCycleConnectedExamples';
import {OptionsCycleExamples} from '../src/components/optionsCycle/examples/OptionsCycleExamples';
import {PartialStringMatchExamples} from '../src/components/partial-string-match/PartialStringMatchExamples';
import {PopoverConnectedExamples} from '../src/components/popover/examples/PopoverConnectedExamples';
import {RadioExamples} from '../src/components/radio/examples/RadioExamples';
import {SearchBarExamples} from '../src/components/searchBar/SearchBarExamples';
import {MultiSelectExamples} from '../src/components/select/examples/MultiSelectExamples';
import {SingleSelectExamples} from '../src/components/select/examples/SingleSelectExamples';
import {SideNavigationExample} from '../src/components/sideNavigation/examples/SideNavigationExample';
import {SideNavigationLoadingExample} from '../src/components/sideNavigation/examples/SideNavigationLoadingExample';
import {SideNavigation} from '../src/components/sideNavigation/SideNavigation';
import {SliderExamples} from '../src/components/slider/examples/SliderExamples';
import {SplitLayoutExamples} from '../src/components/splitlayout/examples/SplitLayoutExamples';
import {StatusCardExamples} from '../src/components/statusCard/examples/StatusCardExamples';
import {StepProgressBarExamples} from '../src/components/stepProgressBar/examples/StepProgressBarExamples';
import {StickyFooterExamples} from '../src/components/stickyFooter/examples/StickyFooterExamples';
import {SubNavigationConnectedExamples} from '../src/components/subNavigation/examples/SubNavigationConnectedExamples';
import {SubNavigationExamples} from '../src/components/subNavigation/examples/SubNavigationExamples';
import {SubNavigation} from '../src/components/subNavigation/SubNavigation';
import {LinkSvgExamples} from '../src/components/svg/examples/LinkSvgExamples';
import {SvgExamples} from '../src/components/svg/examples/SvgExamples';
import {Svg} from '../src/components/svg/Svg';
import {SyncFeedbackExample} from '../src/components/syncFeedback/examples/SyncFeedbackExample';
import {TabsExamples} from '../src/components/tab/examples/TabConnectedExample';
import {TableHOCExamples} from '../src/components/table-hoc/examples/TableHOCExamples';
import {TableHOCServerExamples} from '../src/components/table-hoc/examples/TableHOCServerExamples';
import {TableWithDisabledRowsExamples} from '../src/components/tables/examples/TableDisabledRowsExamples';
import {TableEmptyRowExamples} from '../src/components/tables/examples/TableEmptyRowExamples';
import {TableExamples} from '../src/components/tables/examples/TableExamples';
import {TableHeaderExamples} from '../src/components/tables/examples/TableHeaderExamples';
import {TableRowConnectedExamples} from '../src/components/tables/examples/TableRowConnectedExamples';
import {TableRowExamples} from '../src/components/tables/examples/TableRowExamples';
import {TextAreaExamples} from '../src/components/textarea/examples/TextAreaExamples';
import {TitleExamples} from '../src/components/title/examples/TitleExamples';
import {ToastConnectedExamples} from '../src/components/toast/examples/ToastConnectedExamples';
import {ToastExamples} from '../src/components/toast/examples/ToastExamples';
import {TooltipExamples} from '../src/components/tooltip/examples/TooltipExamples';
import {UserFeedbackExample} from '../src/components/userFeedback/examples/UserFeedbackExample';
import {ComponentWithEditingExampleHOC} from '../src/hoc/withEditing/examples/withEditingExamples';
import {MembersExample} from './members-example/MembersExample';
import {ReactVaporStore} from './ReactVaporStore';

interface ExampleProps {
    componentName: string;
    component: any;
}

interface HeaderState {
    sideNavOpened: boolean;
}

interface AppState {
    activeComponentId: string;
    sideNavOpened: boolean;
}

class Header extends React.Component<{}, HeaderState> {
    constructor(props: {}, state: HeaderState) {
        super(props, state);

        this.state = {
            sideNavOpened: true,
        };
    }

    componentDidMount() {
        document.addEventListener(SideNavigation.toggleEvent, () => {
            this.setState({sideNavOpened: !this.state.sideNavOpened});
        });
    }

    render() {
        return (
            <div className='flex flex-colum flex-center'>
                <div
                    className='cursor-pointer'
                    onClick={() => document.dispatchEvent(new Event(SideNavigation.toggleEvent))}
                >
                    <Svg
                        svgName={this.state.sideNavOpened ? 'arrow-left' : 'hamburger'}
                        svgClass='icon mod-lg ml2 fill-pure-white'
                    />
                </div>
                <div className='h1 p2'>React Vapor</div>
            </div>
        );
    }
}
class App extends React.Component<{}, AppState> {
    private components = [
        {component: MenuExamples, componentName: 'Menu'},
        {component: CollapsibleInfoBoxExamples, componentName: 'CollapsibleInfoBox'},
        {component: MembersExample, componentName: 'Members'},
        {component: BorderedLineExamples, componentName: 'BorderedLine'},
        {component: AutocompleteExamples, componentName: 'Autocomplete'},
        {component: TextAreaExamples, componentName: 'TextArea'},
        {component: SearchBarExamples, componentName: 'SearchBar'},
        {component: ColorBarExamples, componentName: 'ColorBar'},
        {component: PartialStringMatchExamples, componentName: 'PartialStringMatch'},
        {component: BadgeExamples, componentName: 'Badge'},
        {component: CornerRibbonExamples, componentName: 'CornerRibbon'},
        {component: LogoCardExamples, componentName: 'LogoCard'},
        {component: FlippableExamples, componentName: 'Flippable'},
        {component: SliderExamples, componentName: 'Slider'},
        {component: SvgExamples, componentName: 'Svg'},
        {component: LinkSvgExamples, componentName: 'LinkSvg'},
        {component: TitleExamples, componentName: 'Title'},
        {component: ContentExamples, componentName: 'Content (deprecated)'},
        {component: ItemBoxExamples, componentName: 'ItemBox'},
        {component: ListBoxExamples, componentName: 'ListBox'},
        {component: ButtonExamples, componentName: 'Button'},
        {component: BreadcrumbsExamples, componentName: 'Breadcrumbs'},
        {component: BasicHeaderExamples, componentName: 'BasicHeader'},
        {component: BreadcrumbHeaderExample, componentName: 'BreadcrumbHeader'},
        {component: SingleSelectExamples, componentName: 'SingleSelect'},
        {component: MultiSelectExamples, componentName: 'MultiSelect'},
        {component: FlatSelectExamples, componentName: 'FlatSelect'},
        {component: TooltipExamples, componentName: 'Tooltip'},
        {component: ChosenSelectExamples, componentName: 'ChosenSelect (deprecated)'},
        {component: UserFeedbackExample, componentName: 'UserFeedback'},
        {component: SyncFeedbackExample, componentName: 'SyncFeedback'},
        {component: LastUpdatedExamples, componentName: 'LastUpdated'},
        {component: LastUpdatedConnectedExamples, componentName: 'LastUpdatedConnected'},
        {component: LoadingExamples, componentName: 'Loading'},
        {component: FilterBoxExamples, componentName: 'FilterBox'},
        {component: FilterBoxConnectedExamples, componentName: 'FilterBoxConnected'},
        {component: FacetExamples, componentName: 'Facet'},
        {component: FacetConnectedExamples, componentName: 'FacetConnected'},
        {component: ModalExamples, componentName: 'Modal'},
        {component: ModalConnectedExamples, componentName: 'ModalConnected'},
        {component: ModalCompositeExamples, componentName: 'ModalComposite'},
        {component: ModalCompositeConnectedExamples, componentName: 'ModalCompositeConnected'},
        {component: ModalPromptExamples, componentName: 'ModalPrompt'},
        {component: NavigationExamples, componentName: 'Navigation'},
        {component: NavigationConnectedExamples, componentName: 'NavigationConnected'},
        {component: SubNavigationExamples, componentName: 'SubNavigation'},
        {component: SubNavigationConnectedExamples, componentName: 'SubNavigationConnected'},
        {component: SideNavigationExample, componentName: 'SideNavigation'},
        {component: SideNavigationLoadingExample, componentName: 'SideNavigationLoading'},
        {component: TabsExamples, componentName: 'Tabs'},
        {component: ActionBarExamples, componentName: 'ActionBar'},
        {component: ActionBarConnectedExamples, componentName: 'ActionBarConnected'},
        {component: ItemFilterExamples, componentName: 'ItemFilter'},
        {component: ItemFilterConnectedExamples, componentName: 'ItemFilterConnected'},
        {component: TableRowExamples, componentName: 'TableRow'},
        {component: TableRowConnectedExamples, componentName: 'TableRowConnected'},
        {component: TableEmptyRowExamples, componentName: 'TableEmptyRow'},
        {component: TableHeaderExamples, componentName: 'TableHeader'},
        {component: TableExamples, componentName: 'Table (Deprecated)'},
        {component: TableWithDisabledRowsExamples, componentName: 'TableWithDisabledRows'},
        {component: OptionsCycleExamples, componentName: 'OptionsCycle'},
        {component: OptionsCycleConnectedExamples, componentName: 'OptionsCycleConnected'},
        {component: CalendarConnectedExamples, componentName: 'CalendarConnected'},
        {component: DatesSelectionExamples, componentName: 'DatesSelection'},
        {component: DatesSelectionConnectedExamples, componentName: 'DatesSelectionConnected'},
        {component: DatePickerBoxExamples, componentName: 'DatePickerBox'},
        {component: DatePickerBoxConnectedExamples, componentName: 'DatePickerBoxConnected'},
        {component: DatePickerDropdownConnectedExamples, componentName: 'DatePickerDropdownConnected'},
        {component: DatePickerDropdownConnectedSingleDateExamples, componentName: 'DatePickerDropdownConnectedSingleDate'},
        {component: MultilineInputExamples, componentName: 'MultilineInput'},
        {component: BlankSlateExample, componentName: 'BlankSlate'},
        {component: ToastExamples, componentName: 'Toast'},
        {component: ToastConnectedExamples, componentName: 'ToastConnected'},
        {component: InputAndInputConnectedExamples, componentName: 'InputAndInputConnected'},
        {component: RadioExamples, componentName: 'Radio'},
        {component: CheckboxExamples, componentName: 'Checkbox'},
        {component: CheckboxConnectedExamples, componentName: 'CheckboxConnected'},
        {component: GroupableCheckboxConnectedExamples, componentName: 'GroupableCheckboxConnected'},
        {component: ChildFormExamples, componentName: 'ChildForm'},
        {component: StepProgressBarExamples, componentName: 'StepProgressBar'},
        {component: MultiStepBarExamples, componentName: 'MultiStepBar'},
        {component: LabeledValueExamples, componentName: 'LabeledValue'},
        {component: CollapsibleContainerExamples, componentName: 'CollapsibleContainer'},
        {component: CollapsibleExamples, componentName: 'Collapsible'},
        {component: SplitLayoutExamples, componentName: 'SplitLayout'},
        {component: SplitMultilineInputExamples, componentName: 'SplitMultilineInput'},
        {component: JSONEditorExamples, componentName: 'JSONEditor'},
        {component: CodeEditorExamples, componentName: 'CodeEditor'},
        {component: DropdownSearchExamples, componentName: 'DropdownSearch (deprecated)'},
        {component: DiffViewerExamples, componentName: 'DiffViewer'},
        {component: BannerExamples, componentName: 'Banner'},
        {component: SlideYExamples, componentName: 'SlideY'},
        {component: StatusCardExamples, componentName: 'StatusCard'},
        {component: ActionableItemExamples, componentName: 'ActionableItem'},
        {component: PopoverConnectedExamples, componentName: 'Popover'},
        {component: TableHOCExamples, componentName: 'Table (hoc)'},
        {component: TableHOCServerExamples, componentName: 'Table (server + hoc)'},
        {component: ColorExamples, componentName: 'Color'},
        {component: InfoBoxExamples, componentName: 'Info Box'},
        {component: StickyFooterExamples, componentName: 'StickyFooter'},
        {component: ComponentWithEditingExampleHOC, componentName: 'ComponentWithEditing'},
    ];

    constructor(props: {}, state: AppState) {
        super(props, state);

        this.state = {
            activeComponentId: this.getActiveComponentId(),
            sideNavOpened: true,
        };
    }

    componentDidMount() {
        const el = document.querySelector(`[href="#${this.getHash()}"]`);

        if (el) {
            el.scrollIntoView({behavior: 'instant', block: 'center'});
        }

        document.addEventListener(SideNavigation.toggleEvent, () => {
            this.setState({sideNavOpened: !this.state.sideNavOpened});
        });

        window.onhashchange = () => {
            this.setState({
                activeComponentId: this.getActiveComponentId(),
            });
        };
    }

    render() {
        return (
            <Provider store={ReactVaporStore}>
                <div className='coveo-form flex full-content'>
                    <div className={classNames('flex flex-column', {'hide': !this.state.sideNavOpened, 'navigation-wrapper-opened': this.state.sideNavOpened})} style={{maxWidth: '245px'}}>
                        <SubNavigation
                            selected={this.state.activeComponentId}
                            items={this.components.sort(this.sortComponentsByName).map(this.formatComponentsExamples)}
                            onClickItem={this.activateItem}
                        />
                    </div>
                    <div className='flex-auto mod-header-padding mt2 overflow-auto'>
                        {
                            this.state.activeComponentId
                            && React.createElement(this.getSelectedComponent(this.state.activeComponentId))
                        }
                    </div>
                </div>
            </Provider>
        );
    }

    private sortComponentsByName = (a: ExampleProps, b: ExampleProps) => a.componentName.toLowerCase().localeCompare(b.componentName.toLowerCase());
    private formatComponentsExamples = (example: ExampleProps) => ({label: example.componentName, id: example.componentName, link: `#${example.componentName}`});
    private getSelectedComponent = (id: string): any => {
        const selected = this.components.filter((component: ExampleProps) => component.componentName === id);
        return selected.length && selected[0].component;
    }

    private activateItem = (id: string) => {
        this.setState({activeComponentId: id});
        window.location.hash = id;
    }

    private getHash = () => {
        return decodeURIComponent(window.location.hash.replace(/^#/, ''));
    }

    private getActiveComponentId() {
        const componentIdFromHash = this.getHash();
        const firstComponentId = this.components.sort(this.sortComponentsByName);
        return (this.getSelectedComponent(componentIdFromHash) && componentIdFromHash)
            || firstComponentId[0].componentName;
    }
}

ReactDOMRender(<Header />, document.getElementById('header'));
ReactDOMRender(<App />, document.getElementById('App'));
