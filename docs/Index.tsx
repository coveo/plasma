import * as React from 'react';
import { render as ReactDOMRender } from 'react-dom';
import { Provider } from 'react-redux';
import { ReactVaporStore } from './ReactVaporStore';
import { Svg } from '../src/components/svg/Svg';
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
import './style.scss';
import 'coveo-styleguide/dist/css/CoveoStyleGuide.css';
import { ButtonExamples } from '../src/components/button/examples/ButtonExamples';
import { BlankSlateExample } from '../src/components/blankSlate/examples/BlankSlateExample';
import { ChosenSelectExamples } from '../src/components/chosen/examples/ChosenSelectExamples';
import { DropdownSearchExamples } from '../src/components/dropdownSearch/examples/DropdownSearchExamples';
import { BoxItemExamples } from '../src/components/boxItem/examples/BoxItemExamples';
import { ContentExamples } from '../src/components/content/examples/ContentExamples';
import { ListBoxExamples } from '../src/components/listBox/examples/ListBoxExamples';

class App extends React.Component<any, any> {

  render() {
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
          <div className='form-group'>
            <label className='form-control-label'>
              Include an SVG
            </label>
            <div className='form-control'>
              <Svg svgName='domain-google' className='icon mod-2x' />
            </div>
          </div>
          <div className='form-group'>
            <label className='form-control-label'>
              Include another SVG
            </label>
            <div className='form-control'>
              <Svg svgName='clear' className='icon mod-2x' svgClass='fill-medium-blue' />
            </div>
          </div>
          <ContentExamples />
          <BoxItemExamples />
          <ListBoxExamples />
          <ButtonExamples />
          <DropdownSearchExamples />
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
        </div>
      </Provider>
    );
  }
}

ReactDOMRender(<App />, document.getElementById('App'));
