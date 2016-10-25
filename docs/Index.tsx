///<reference path="../node_modules/@types/redux/index.d.ts"/>

import * as React from 'react';
import { render as ReactDOMRender } from 'react-dom';
import { Provider } from 'react-redux';
import { ChosenSelect } from '../src/components/ChosenSelect';
import { Svg } from '../src/components/Svg';
import { Tooltip } from '../src/components/Tooltip';
import { MemberModel, IMemberModelAttributes } from './members-example/models/MemberModel';
import { MemberCollection } from './members-example/models/MemberCollection';
import { MembersCompositeView } from './members-example/views/MembersCompositeView';
import { MembersStore } from './members-example/Store';
import { MembersCompositeActions } from './members-example/actions/MembersActions';
import './style.scss';
import 'coveo-styleguide/dist/css/CoveoStyleGuide.css';

class App extends React.Component<any, any> {
  constructor(a: any, b: any, c: any) {
    super(a, b, c);

    MembersStore.dispatch(MembersCompositeActions.setMemberCollection(new MemberCollection([{
      id: '1',
      email: 'test1@coveo.com',
      sendEmail: true
    }])));
  }

  render() {
    return (
      <div className='coveo-form'>
        <div className='form-group'>
          <label className='form-control-label'>
            My list of members
          </label>
          <div className='form-control'>
            <Provider store={MembersStore}>
              <MembersCompositeView
                onSaveMember={(memberModel: MemberModel, memberModelAttributes: IMemberModelAttributes) =>
                  this.onSaveMember(memberModel, memberModelAttributes)}
                />
            </Provider>
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
      </div>
    );
  }

  private onSaveMember(memberModel: MemberModel, memberModelAttributes: IMemberModelAttributes) {
    let existingModel = MembersStore.getState().membersCompositeState.memberCollection.get(memberModel);

    if (existingModel) {
      // Since cid is the MemberEditView key, we cannot create a new model here and we are breaking the immutability rule
      existingModel.set(memberModelAttributes);

      MembersStore.dispatch(MembersCompositeActions.updateCollectionMember(existingModel));
    } else {
      memberModel.newlyCreated = false;
      memberModel.set(memberModelAttributes);

      MembersStore.dispatch(MembersCompositeActions.addMemberToCollection(memberModel));
    }
  }
}

ReactDOMRender(<App />, document.getElementById('App'));
