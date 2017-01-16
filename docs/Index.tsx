import * as React from 'react';
import { render as ReactDOMRender } from 'react-dom';
import { Provider } from 'react-redux';
import { ReactVaporStore } from './ReactVaporStore';
import { ChosenSelect } from '../src/components/chosen/ChosenSelect';
import { Svg } from '../src/components/svg/Svg';
import { Tooltip } from '../src/components/tooltip/Tooltip';
import { UserFeedback } from '../src/components/userFeedback/UserFeedback';
import { MembersExample } from './members-example/MembersExample';
import { LastUpdatedExamples } from '../src/components/lastUpdated/examples/LastUpdatedExamples';
import { LastUpdatedConnectedExamples } from '../src/components/lastUpdated/examples/LastUpdatedConnectedExamples';
import { LoadingExamples } from '../src/components/loading/LoadingExamples';
import { FilterBoxExamples } from '../src/components/filterBox/examples/FilterBoxExamples';
import { FilterBoxConnectedExamples } from '../src/components/filterBox/examples/FilterBoxConnectedExamples';
import { FacetConnectedExamples } from '../src/components/facets/examples/FacetConnectedExamples';
import { FacetExamples } from '../src/components/facets/examples/FacetExamples';
import { NavigationExamples } from '../src/components/navigation/examples/NavigationExamples';
import { NavigationConnectedExamples } from '../src/components/navigation/examples/NavigationConnectedExamples';
import { ActionBarExamples } from '../src/components/actions/examples/ActionBarExamples';
import { ActionBarConnectedExamples } from '../src/components/actions/examples/ActionBarConnectedExamples';
import { TableRowExamples } from '../src/components/tables/examples/TableRowExamples';
import { TableRowConnectedExamples } from '../src/components/tables/examples/TableRowConnectedExamples';
import { TableHeaderExamples } from '../src/components/tables/examples/TableHeaderExamples';
import './style.scss';
import 'coveo-styleguide/dist/css/CoveoStyleGuide.css';

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
          <div className='form-group'>
            <label className='form-control-label'>
              Chosen single select
            </label>
            <div className='form-control'>
              <ChosenSelect placeholderTextSingle='Choose a country' value='France' width='400px'
                onChosenChange={(event: JQueryEventObject, args: Chosen.SelectedData) => console.log('Changed: ', args)}>
                <option value='Canada'>Canada</option>
                <option value='France'>France</option>
                <option value='United States'>United States</option>
              </ChosenSelect>
            </div>
          </div>
          <div className='form-group'>
            <label className='form-control-label'>
              Chosen multi select
            </label>
            <div className='form-control'>
              <ChosenSelect placeholderTextSingle='Choose a country' defaultValue={['Canada']} multiple width='400px'
                onChosenChange={(event: JQueryEventObject, args: Chosen.SelectedData) => console.log('Changed: ', args)}>
                <option value='Canada'>Canada</option>
                <option value='France'>France</option>
                <option value='United States'>United States</option>
              </ChosenSelect>
            </div>
          </div>
          <div className='form-group'>
            <label className='form-control-label'>
              Tooltip example
            </label>
            <div className='form-control'>
              <Tooltip title='I am a tooltip!' placement='right'>
                <button type='button' className='btn'>Hover me!</button>
              </Tooltip>
            </div>
          </div>
          <div className='form-group'>
            <label className='form-control-label'>
              UserFeedback
            </label>
            <div className='form-control'>
              <button type='button' className='btn'>UserFeedback 1</button>
              <UserFeedback
                constantClasses='mt1 mb2'
                state='WARNING'
                displayOnShow='block'
                feedbackText='This message is a UserFeedback component on state WARNING' />
              <button type='button' className='btn'>UserFeedback 2</button>
              <UserFeedback
                constantClasses='mt1 mb2'
                state='ERROR'
                displayOnShow='block'
                feedbackText='This message is a UserFeedback component on state ERROR' />
              <div className='mb2'>
                <button type='button' className='btn'>UserFeedback 3</button>
                <UserFeedback
                  constantClasses='ml1'
                  state='WARNING'
                  displayOnShow='inline-block'
                  feedbackText='This message is a UserFeedback component placed beside its related element' />
              </div>
              <div className='mb2'>
                <button type='button' className='btn'>UserFeedback 4</button>
                <UserFeedback
                  constantClasses='ml2 bold italic'
                  state='WARNING'
                  displayOnShow='inline-block'
                  feedbackText='extra classes for styling can be passed to the constantClasses prop' />
              </div>
              <div className='mb2'>
                A UserFeedback component on state VALID is invisible.
              </div>
            </div>
          </div>
          <LastUpdatedExamples />
          <LastUpdatedConnectedExamples />
          <LoadingExamples />
          <FilterBoxExamples />
          <FilterBoxConnectedExamples />
          <FacetExamples />
          <FacetConnectedExamples />
          <NavigationExamples />
          <NavigationConnectedExamples />
          <ActionBarExamples />
          <ActionBarConnectedExamples />
          <TableRowExamples />
          <TableRowConnectedExamples />
          <TableHeaderExamples />
        </div>
      </Provider>
    );
  }
}

ReactDOMRender(<App />, document.getElementById('App'));
