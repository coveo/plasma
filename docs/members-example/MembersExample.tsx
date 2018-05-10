import * as React from 'react';
import {ReactVaporStore} from '../ReactVaporStore';
import {setMembers} from './actions/MembersActions';
import {MembersCompositeView} from './views/MembersCompositeView';

export class MembersExample extends React.Component<any, any> {
    componentWillMount() {
        ReactVaporStore.dispatch(setMembers([
            {
                email: 'test@coveo.com',
                sendEmail: true,
            }, {
                email: 'test-more@test.test',
                sendEmail: false,
            },
        ]));
    }

    render() {
        return (
            <MembersCompositeView />
        );
    }
}
