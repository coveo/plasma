import * as React from 'react';
import { render as ReactDOMRender } from 'react-dom';
import { Provider } from 'react-redux';
import { ReactVaporStore } from './ReactVaporStore';
import { ChosenSelect } from '../src/components/chosen/ChosenSelect';
import { Svg } from '../src/components/svg/Svg';
import { Tooltip } from '../src/components/tooltip/Tooltip';
import { MembersExample } from './members-example/MembersExample';
import './style.scss';
import 'coveo-styleguide/dist/css/CoveoStyleGuide.css';
import { LastUpdatedExamples } from '../src/components/lastUpdated/examples/LastUpdatedExamples';
import { LastUpdatedConnectedExamplesConnected } from '../src/components/lastUpdated/examples/LastUpdatedConnectedExamples';

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
          <LastUpdatedExamples />
          <LastUpdatedConnectedExamplesConnected />
        </div>
      </Provider>
    );
  }
}

ReactDOMRender(<App />, document.getElementById('App'));
