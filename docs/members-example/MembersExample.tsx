import * as React from 'react';
import { ReactVaporStore } from '../ReactVaporStore';
import { MembersCompositeActions } from './actions/MembersActions';
import { MembersCompositeView } from './views/MembersCompositeView';

export class MembersExample extends React.Component<any, any> {

  constructor(props?: any, context?: any) {
    super(props, context);

    ReactVaporStore.dispatch(MembersCompositeActions.setMembers([
      {
        email: 'test@coveo.com',
        sendEmail: true
      }, {
        email: 'test-more@test.test',
        sendEmail: false
      }
    ]));
  }

  render() {
    return (
      <MembersCompositeView />
    );
  }
}
