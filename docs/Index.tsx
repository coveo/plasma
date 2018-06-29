import 'codemirror/lib/codemirror.css';
import 'coveo-styleguide/dist/css/CoveoStyleGuide.css';
import './style.scss';

import * as React from 'react';
import {render as ReactDOMRender} from 'react-dom';
import {Provider} from 'react-redux';

import {ActionBarConnectedExamples} from '../src/components/actions/examples/ActionBarConnectedExamples';
import {ActionBarExamples} from '../src/components/actions/examples/ActionBarExamples';
import {ItemFilterConnectedExamples} from '../src/components/actions/filters/examples/ItemFilterConnectedExamples';
import {ItemFilterExamples} from '../src/components/actions/filters/examples/ItemFilterExamples';
import {AutocompleteExamples} from '../src/components/autocomplete/examples/AutocompleteExamples';
import {BadgeExamples} from '../src/components/badge/examples/BadgeExamples';
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
import {CollapsibleContainerExamples} from '../src/components/collapsibleContainer/examples/CollapsibleContainerExamples';
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
import {InputAndInputConnectedExamples} from '../src/components/input/examples/InputAndInputConnectedExamples';
import {ItemBoxExamples} from '../src/components/itemBox/examples/ItemBoxExamples';
import {LabeledValueExamples} from '../src/components/labeledValue/examples/LabeledValueExamples';
import {LastUpdatedConnectedExamples} from '../src/components/lastUpdated/examples/LastUpdatedConnectedExamples';
import {LastUpdatedExamples} from '../src/components/lastUpdated/examples/LastUpdatedExamples';
import {ListBoxExamples} from '../src/components/listBox/examples/ListBoxExamples';
import {LoadingExamples} from '../src/components/loading/LoadingExamples';
import {LogoCardExamples} from '../src/components/logoCard/examples/LogoCardExamples';
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
import {RadioExamples} from '../src/components/radio/examples/RadioExamples';
import {SearchBarExamples} from '../src/components/searchBar/SearchBarExamples';
import {MultiSelectExamples} from '../src/components/select/examples/MultiSelectExamples';
import {SingleSelectExamples} from '../src/components/select/examples/SingleSelectExamples';
import {SideNavigationExample} from '../src/components/sideNavigation/examples/SideNavigationExample';
import {SideNavigationLoadingExample} from '../src/components/sideNavigation/examples/SideNavigationLoadingExample';
import {SliderExamples} from '../src/components/slider/examples/SliderExamples';
import {SplitLayoutExamples} from '../src/components/splitlayout/examples/SplitLayoutExamples';
import {StepProgressBarExamples} from '../src/components/stepProgressBar/examples/StepProgressBarExamples';
import {SubNavigationConnectedExamples} from '../src/components/subNavigation/examples/SubNavigationConnectedExamples';
import {SubNavigationExamples} from '../src/components/subNavigation/examples/SubNavigationExamples';
import {LinkSvgExamples} from '../src/components/svg/examples/LinkSvgExamples';
import {SvgExamples} from '../src/components/svg/examples/SvgExamples';
import {SyncFeedbackExample} from '../src/components/syncFeedback/examples/SyncFeedbackExample';
import {TabsExamples} from '../src/components/tab/examples/TabConnectedExample';
import {TableWithDisabledRowsExamples} from '../src/components/tables/examples/TableDisabledRowsExamples';
import {TableEmptyRowExamples} from '../src/components/tables/examples/TableEmptyRowExamples';
import {TableExamples} from '../src/components/tables/examples/TableExamples';
import {TableHeaderExamples} from '../src/components/tables/examples/TableHeaderExamples';
import {TableRowConnectedExamples} from '../src/components/tables/examples/TableRowConnectedExamples';
import {TableRowExamples} from '../src/components/tables/examples/TableRowExamples';
import {TextAreaExamples} from '../src/components/textarea/TextAreaExamples';
import {TitleExamples} from '../src/components/title/examples/TitleExamples';
import {ToastConnectedExamples} from '../src/components/toast/examples/ToastConnectedExamples';
import {ToastExamples} from '../src/components/toast/examples/ToastExamples';
import {TooltipExamples} from '../src/components/tooltip/examples/TooltipExamples';
import {UserFeedbackExample} from '../src/components/userFeedback/examples/UserFeedbackExample';
import {MembersExample} from './members-example/MembersExample';
import {ReactVaporStore} from './ReactVaporStore';

interface ExampleWrapperState {
    shown: boolean;
}
class ExampleWrapper extends React.Component<{component: any, componentName: string}, ExampleWrapperState> {
    state: ExampleWrapperState = {shown: false};

    render() {
        return (
            <div className='px2 py2 mod-border-bottom'>
                <h2 className='link' onClick={() => this.setState({shown: !this.state.shown})}>{this.props.componentName}</h2>
                <div id={this.props.componentName} className='mb1 mt1'>
                    {this.state.shown && <this.props.component />}
                </div>
            </div>
        );
    }
}

class App extends React.Component<any, any> {
    render() {
        return (
            <Provider store={ReactVaporStore}>
                <div className='coveo-form'>
                    {[
                        {component: MembersExample, componentName: 'MembersExample'},
                        {component: BorderedLineExamples, componentName: 'BorderedLineExamples'},
                        {component: AutocompleteExamples, componentName: 'AutocompleteExamples'},
                        {component: TextAreaExamples, componentName: 'TextAreaExamples'},
                        {component: SearchBarExamples, componentName: 'SearchBarExamples'},
                        {component: ColorBarExamples, componentName: 'ColorBarExamples'},
                        {component: PartialStringMatchExamples, componentName: 'PartialStringMatchExamples'},
                        {component: BadgeExamples, componentName: 'BadgeExamples'},
                        {component: CornerRibbonExamples, componentName: 'CornerRibbonExamples'},
                        {component: LogoCardExamples, componentName: 'LogoCardExamples'},
                        {component: FlippableExamples, componentName: 'FlippableExamples'},
                        {component: SliderExamples, componentName: 'SliderExamples'},
                        {component: SvgExamples, componentName: 'SvgExamples'},
                        {component: LinkSvgExamples, componentName: 'LinkSvgExamples'},
                        {component: TitleExamples, componentName: 'TitleExamples'},
                        {component: ContentExamples, componentName: 'ContentExamples'},
                        {component: ItemBoxExamples, componentName: 'ItemBoxExamples'},
                        {component: ListBoxExamples, componentName: 'ListBoxExamples'},
                        {component: ButtonExamples, componentName: 'ButtonExamples'},
                        {component: BreadcrumbsExamples, componentName: 'BreadcrumbsExamples'},
                        {component: BasicHeaderExamples, componentName: 'BasicHeaderExamples'},
                        {component: BreadcrumbHeaderExample, componentName: 'BreadcrumbHeaderExample'},
                        {component: SingleSelectExamples, componentName: 'SingleSelectExamples'},
                        {component: MultiSelectExamples, componentName: 'MultiSelectExamples'},
                        {component: FlatSelectExamples, componentName: 'FlatSelectExamples'},
                        {component: TooltipExamples, componentName: 'TooltipExamples'},
                        {component: ChosenSelectExamples, componentName: 'ChosenSelectExamples'},
                        {component: UserFeedbackExample, componentName: 'UserFeedbackExample'},
                        {component: SyncFeedbackExample, componentName: 'SyncFeedbackExample'},
                        {component: LastUpdatedExamples, componentName: 'LastUpdatedExamples'},
                        {component: LastUpdatedConnectedExamples, componentName: 'LastUpdatedConnectedExamples'},
                        {component: LoadingExamples, componentName: 'LoadingExamples'},
                        {component: FilterBoxExamples, componentName: 'FilterBoxExamples'},
                        {component: FilterBoxConnectedExamples, componentName: 'FilterBoxConnectedExamples'},
                        {component: FacetExamples, componentName: 'FacetExamples'},
                        {component: FacetConnectedExamples, componentName: 'FacetConnectedExamples'},
                        {component: ModalExamples, componentName: 'ModalExamples'},
                        {component: ModalConnectedExamples, componentName: 'ModalConnectedExamples'},
                        {component: ModalCompositeExamples, componentName: 'ModalCompositeExamples'},
                        {component: ModalCompositeConnectedExamples, componentName: 'ModalCompositeConnectedExamples'},
                        {component: ModalPromptExamples, componentName: 'ModalPromptExamples'},
                        {component: NavigationExamples, componentName: 'NavigationExamples'},
                        {component: NavigationConnectedExamples, componentName: 'NavigationConnectedExamples'},
                        {component: SubNavigationExamples, componentName: 'SubNavigationExamples'},
                        {component: SubNavigationConnectedExamples, componentName: 'SubNavigationConnectedExamples'},
                        {component: SideNavigationExample, componentName: 'SideNavigationExample'},
                        {component: SideNavigationLoadingExample, componentName: 'SideNavigationLoadingExample'},
                        {component: TabsExamples, componentName: 'TabsExamples'},
                        {component: ActionBarExamples, componentName: 'ActionBarExamples'},
                        {component: ActionBarConnectedExamples, componentName: 'ActionBarConnectedExamples'},
                        {component: ItemFilterExamples, componentName: 'ItemFilterExamples'},
                        {component: ItemFilterConnectedExamples, componentName: 'ItemFilterConnectedExamples'},
                        {component: TableRowExamples, componentName: 'TableRowExamples'},
                        {component: TableRowConnectedExamples, componentName: 'TableRowConnectedExamples'},
                        {component: TableEmptyRowExamples, componentName: 'TableEmptyRowExamples'},
                        {component: TableHeaderExamples, componentName: 'TableHeaderExamples'},
                        {component: TableExamples, componentName: 'TableExamples'},
                        {component: TableWithDisabledRowsExamples, componentName: 'TableWithDisabledRowsExamples'},
                        {component: OptionsCycleExamples, componentName: 'OptionsCycleExamples'},
                        {component: OptionsCycleConnectedExamples, componentName: 'OptionsCycleConnectedExamples'},
                        {component: CalendarConnectedExamples, componentName: 'CalendarConnectedExamples'},
                        {component: DatesSelectionExamples, componentName: 'DatesSelectionExamples'},
                        {component: DatesSelectionConnectedExamples, componentName: 'DatesSelectionConnectedExamples'},
                        {component: DatePickerBoxExamples, componentName: 'DatePickerBoxExamples'},
                        {component: DatePickerBoxConnectedExamples, componentName: 'DatePickerBoxConnectedExamples'},
                        {component: DatePickerDropdownConnectedExamples, componentName: 'DatePickerDropdownConnectedExamples'},
                        {component: DatePickerDropdownConnectedSingleDateExamples, componentName: 'DatePickerDropdownConnectedSingleDateExamples'},
                        {component: MultilineInputExamples, componentName: 'MultilineInputExamples'},
                        {component: BlankSlateExample, componentName: 'BlankSlateExample'},
                        {component: ToastExamples, componentName: 'ToastExamples'},
                        {component: ToastConnectedExamples, componentName: 'ToastConnectedExamples'},
                        {component: InputAndInputConnectedExamples, componentName: 'InputAndInputConnectedExamples'},
                        {component: RadioExamples, componentName: 'RadioExamples'},
                        {component: CheckboxExamples, componentName: 'CheckboxExamples'},
                        {component: CheckboxConnectedExamples, componentName: 'CheckboxConnectedExamples'},
                        {component: GroupableCheckboxConnectedExamples, componentName: 'GroupableCheckboxConnectedExamples'},
                        {component: ChildFormExamples, componentName: 'ChildFormExamples'},
                        {component: StepProgressBarExamples, componentName: 'StepProgressBarExamples'},
                        {component: MultiStepBarExamples, componentName: 'MultiStepBarExamples'},
                        {component: LabeledValueExamples, componentName: 'LabeledValueExamples'},
                        {component: CollapsibleContainerExamples, componentName: 'CollapsibleContainerExamples'},
                        {component: SplitLayoutExamples, componentName: 'SplitLayoutExamples'},
                        {component: SplitMultilineInputExamples, componentName: 'SplitMultilineInputExamples'},
                        {component: JSONEditorExamples, componentName: 'JSONEditorExamples'},
                        {component: CodeEditorExamples, componentName: 'CodeEditorExamples'},
                        {component: DropdownSearchExamples, componentName: 'DropdownSearchExamples'},
                        {component: DiffViewerExamples, componentName: 'DiffViewerExamples'},
                    ].map((component) => <ExampleWrapper key={component.componentName} componentName={component.componentName} component={component.component} />)}
                </div>
            </Provider>
        );
    }
}

ReactDOMRender(<App />, document.getElementById('App'));
