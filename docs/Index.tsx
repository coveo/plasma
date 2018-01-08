import * as React from 'react';
import { Provider } from 'react-redux';
import { ReactVaporStore } from './ReactVaporStore';
import { render as ReactDOMRender } from 'react-dom';
import './style.scss';
import 'coveo-styleguide/dist/css/CoveoStyleGuide.css';
import { UserFeedbackExample } from '../src/components/userFeedback/examples/UserFeedbackExample';
import { SyncFeedbackExample } from '../src/components/syncFeedback/examples/SyncFeedbackExample';
import { MembersExample } from './members-example/MembersExample';
import { LastUpdatedExamples } from '../src/components/lastUpdated/examples/LastUpdatedExamples';
import { LastUpdatedConnectedExamples } from '../src/components/lastUpdated/examples/LastUpdatedConnectedExamples';
import { LoadingExamples } from '../src/components/loading/LoadingExamples';
import { FilterBoxExamples } from '../src/components/filterBox/examples/FilterBoxExamples';
import { FilterBoxConnectedExamples } from '../src/components/filterBox/examples/FilterBoxConnectedExamples';
import { FacetConnectedExamples } from '../src/components/facets/examples/FacetConnectedExamples';
import { FacetExamples } from '../src/components/facets/examples/FacetExamples';
import { ModalConnectedExamples } from '../src/components/modal/examples/ModalConnectedExamples';
import { NavigationExamples } from '../src/components/navigation/examples/NavigationExamples';
import { NavigationConnectedExamples } from '../src/components/navigation/examples/NavigationConnectedExamples';
import { ActionBarExamples } from '../src/components/actions/examples/ActionBarExamples';
import { ActionBarConnectedExamples } from '../src/components/actions/examples/ActionBarConnectedExamples';
import { TableExamples } from '../src/components/tables/examples/TableExamples';
import { TableRowExamples } from '../src/components/tables/examples/TableRowExamples';
import { TableRowConnectedExamples } from '../src/components/tables/examples/TableRowConnectedExamples';
import { TableHeaderExamples } from '../src/components/tables/examples/TableHeaderExamples';
import { ItemFilterExamples } from '../src/components/actions/filters/examples/ItemFilterExamples';
import { ItemFilterConnectedExamples } from '../src/components/actions/filters/examples/ItemFilterConnectedExamples';
import { TableEmptyRowExamples } from '../src/components/tables/examples/TableEmptyRowExamples';
import { OptionsCycleExamples } from '../src/components/optionsCycle/examples/OptionsCycleExamples';
import { SubNavigationExamples } from '../src/components/subNavigation/examples/SubNavigationExamples';
import { SubNavigationConnectedExamples } from '../src/components/subNavigation/examples/SubNavigationConnectedExamples';
import { OptionsCycleConnectedExamples } from '../src/components/optionsCycle/examples/OptionsCycleConnectedExamples';
import { CalendarConnectedExamples } from '../src/components/calendar/examples/CalendarConnectedExamples';
import { DatePickerBoxExamples } from '../src/components/datePicker/examples/DatePickerBoxExamples';
import { DatesSelectionExamples } from '../src/components/datePicker/examples/DatesSelectionExamples';
import { DatesSelectionConnectedExamples } from '../src/components/datePicker/examples/DatesSelectionConnectedExamples';
import { DatePickerBoxConnectedExamples } from '../src/components/datePicker/examples/DatePickerBoxConnectedExamples';
import { DatePickerDropdownConnectedExamples } from '../src/components/datePicker/examples/DatePickerDropdownConnectedExamples';
import { DatePickerDropdownConnectedSingleDateExamples } from '../src/components/datePicker/examples/DatePickerDropdownConnectedSingleDateExamples';
import { ModalExamples } from '../src/components/modal/examples/ModalExamples';
import { TabsExamples } from '../src/components/tab/examples/TabConnectedExample';
import { ModalPromptExamples } from '../src/components/modalPrompt/exemples/ModalPromptExamples';
import { MultilineInputExamples } from '../src/components/multilineInput/examples/MultilineInputExamples';
import { TooltipExamples } from '../src/components/tooltip/examples/TooltipExamples';
import { ButtonExamples } from '../src/components/button/examples/ButtonExamples';
import { BlankSlateExample } from '../src/components/blankSlate/examples/BlankSlateExample';
import { ChosenSelectExamples } from '../src/components/chosen/examples/ChosenSelectExamples';
import { DropdownSearchExamples } from '../src/components/dropdownSearch/examples/DropdownSearchExamples';
import { ToastExamples } from '../src/components/toast/examples/ToastExamples';
import { ToastConnectedExamples } from '../src/components/toast/examples/ToastConnectedExamples';
import { RadioExamples } from '../src/components/radio/examples/RadioExamples';
import { ChildFormExamples } from '../src/components/childForm/examples/ChildFormExamples';
import { CheckboxExamples } from '../src/components/checkbox/examples/CheckboxExamples';
import { ContentExamples } from '../src/components/content/examples/ContentExamples';
import { ListBoxExamples } from '../src/components/listBox/examples/ListBoxExamples';
import { ItemBoxExamples } from '../src/components/itemBox/examples/ItemBoxExamples';
import { InputExamples } from '../src/components/input/examples/InputExamples';
import { LinkSvgExamples } from '../src/components/svg/examples/LinkSvgExamples';
import { SvgExamples } from '../src/components/svg/examples/SvgExamples';
import { TitleExamples } from '../src/components/title/examples/TitleExamples';
import { BreadcrumbsExamples } from '../src/components/breadcrumbs/examples/BreadcrumbsExamples';
import { BasicHeaderExamples } from '../src/components/headers/examples/BasicHeaderExamples';
import { BreadcrumbHeaderExample } from '../src/components/headers/examples/BreadcrumbHeaderExample';
import { FlatSelectExamples } from '../src/components/flatSelect/examples/FlatSelectExamples';
import { SliderExamples } from '../src/components/slider/SliderExamples';

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
          <ModalPromptExamples />
          <NavigationExamples />
          <NavigationConnectedExamples />
          <SubNavigationExamples />
          <SubNavigationConnectedExamples />
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
          <InputExamples />
          <RadioExamples />
          <CheckboxExamples />
          <ChildFormExamples />
        </div>
      </Provider>
    );
  }
}

ReactDOMRender(<App />, document.getElementById('App'));
