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
import {BadgeExamples} from '../src/components/badge/examples/BadgeExamples';
import {BlankSlateExample} from '../src/components/blankSlate/examples/BlankSlateExample';
import {BreadcrumbsExamples} from '../src/components/breadcrumbs/examples/BreadcrumbsExamples';
import {ButtonExamples} from '../src/components/button/examples/ButtonExamples';
import {CalendarConnectedExamples} from '../src/components/calendar/examples/CalendarConnectedExamples';
import {CheckboxConnectedExamples} from '../src/components/checkbox/examples/CheckboxConnectedExamples';
import {CheckboxExamples} from '../src/components/checkbox/examples/CheckboxExamples';
import {ChildFormExamples} from '../src/components/childForm/examples/ChildFormExamples';
import {ChosenSelectExamples} from '../src/components/chosen/examples/ChosenSelectExamples';
import {CollapsibleContainerExamples} from '../src/components/collapsibleContainer/examples/CollapsibleContainerExamples';
import {ColorBarExamples} from '../src/components/colorBar/ColorBarExamples';
import {ContentExamples} from '../src/components/content/examples/ContentExamples';
import {CornerRibbonExamples} from '../src/components/cornerRibbon/examples/CornerRibbonExamples';
import {DatePickerBoxConnectedExamples} from '../src/components/datePicker/examples/DatePickerBoxConnectedExamples';
import {DatePickerBoxExamples} from '../src/components/datePicker/examples/DatePickerBoxExamples';
import {
    DatePickerDropdownConnectedExamples,
} from '../src/components/datePicker/examples/DatePickerDropdownConnectedExamples';
import {
    DatePickerDropdownConnectedSingleDateExamples,
} from '../src/components/datePicker/examples/DatePickerDropdownConnectedSingleDateExamples';
import {DatesSelectionConnectedExamples} from '../src/components/datePicker/examples/DatesSelectionConnectedExamples';
import {DatesSelectionExamples} from '../src/components/datePicker/examples/DatesSelectionExamples';
import {DropdownSearchExamples} from '../src/components/dropdownSearch/examples/DropdownSearchExamples';
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
import {NavigationConnectedExamples} from '../src/components/navigation/examples/NavigationConnectedExamples';
import {NavigationExamples} from '../src/components/navigation/examples/NavigationExamples';
import {OptionsCycleConnectedExamples} from '../src/components/optionsCycle/examples/OptionsCycleConnectedExamples';
import {OptionsCycleExamples} from '../src/components/optionsCycle/examples/OptionsCycleExamples';
import {PartialStringMatchExamples} from '../src/components/partial-string-match/PartialStringMatchExamples';
import {RadioExamples} from '../src/components/radio/examples/RadioExamples';
import {SearchBarExamples} from '../src/components/searchBar/SearchBarExamples';
import {MultiSelectExamples} from '../src/components/select/examples/MultiSelectExamples';
import {SingleSelectExamples} from '../src/components/select/examples/SingleSelectExamples';
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
import {TitleExamples} from '../src/components/title/examples/TitleExamples';
import {ToastConnectedExamples} from '../src/components/toast/examples/ToastConnectedExamples';
import {ToastExamples} from '../src/components/toast/examples/ToastExamples';
import {TooltipExamples} from '../src/components/tooltip/examples/TooltipExamples';
import {UserFeedbackExample} from '../src/components/userFeedback/examples/UserFeedbackExample';
import {MembersExample} from './members-example/MembersExample';
import {ReactVaporStore} from './ReactVaporStore';

class App extends React.Component<any, any> {

    render() {
        (window as any).store = ReactVaporStore;
        return (
            <Provider store={ReactVaporStore}>
                <div className='coveo-form'>
                    <div className='form-group'>
                        <label className='form-control-label'>
                            My list of members
                        </label>
                        <div className='form-control'>
                            <MembersExample />
                        </div>
                    </div>
                    <SearchBarExamples />
                    <ColorBarExamples />
                    <PartialStringMatchExamples />
                    <BadgeExamples />
                    <CornerRibbonExamples />
                    <LogoCardExamples />
                    <FlippableExamples />
                    <SliderExamples />
                    <SvgExamples />
                    <LinkSvgExamples />
                    <TitleExamples />
                    <ContentExamples />
                    <ItemBoxExamples />
                    <ListBoxExamples />
                    <ButtonExamples />
                    <BreadcrumbsExamples />
                    <BasicHeaderExamples />
                    <BreadcrumbHeaderExample />
                    <SingleSelectExamples />
                    <MultiSelectExamples />
                    <DropdownSearchExamples />
                    <FlatSelectExamples />
                    <TooltipExamples />
                    <ChosenSelectExamples />
                    <UserFeedbackExample />
                    <SyncFeedbackExample />
                    <LastUpdatedExamples />
                    <LastUpdatedConnectedExamples />
                    <LoadingExamples />
                    <FilterBoxExamples />
                    <FilterBoxConnectedExamples />
                    <FacetExamples />
                    <FacetConnectedExamples />
                    <ModalExamples />
                    <ModalConnectedExamples />
                    <ModalCompositeExamples />
                    <ModalCompositeConnectedExamples />
                    <ModalPromptExamples />
                    <NavigationExamples />
                    <NavigationConnectedExamples />
                    <SubNavigationExamples />
                    <SubNavigationConnectedExamples />
                    <SideNavigationLoadingExample />
                    <TabsExamples />
                    <ActionBarExamples />
                    <ActionBarConnectedExamples />
                    <ItemFilterExamples />
                    <ItemFilterConnectedExamples />
                    <TableRowExamples />
                    <TableRowConnectedExamples />
                    <TableEmptyRowExamples />
                    <TableHeaderExamples />
                    <TableExamples />
                    <TableWithDisabledRowsExamples />
                    <OptionsCycleExamples />
                    <OptionsCycleConnectedExamples />
                    <CalendarConnectedExamples />
                    <DatesSelectionExamples />
                    <DatesSelectionConnectedExamples />
                    <DatePickerBoxExamples />
                    <DatePickerBoxConnectedExamples />
                    <DatePickerDropdownConnectedExamples />
                    <DatePickerDropdownConnectedSingleDateExamples />
                    <MultilineInputExamples />
                    <BlankSlateExample />
                    <ToastExamples />
                    <ToastConnectedExamples />
                    <InputAndInputConnectedExamples />
                    <RadioExamples />
                    <CheckboxExamples />
                    <CheckboxConnectedExamples />
                    <ChildFormExamples />
                    <StepProgressBarExamples />
                    <LabeledValueExamples />
                    <CollapsibleContainerExamples />
                    <SplitLayoutExamples />
                    <JSONEditorExamples />
                </div>
            </Provider>
        );
    }
}

ReactDOMRender(<App />, document.getElementById('App'));
