import {mount, ReactWrapper} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import {IReactVaporState} from '../../../ReactVapor';
import {TestUtils} from '../../../utils/tests/TestUtils';
import {LoadingConnected} from '../LoadingConnected';

describe('<LoadingConnected />', () => {
    it('should render without errors', () => {
        const store: Store<IReactVaporState> = TestUtils.buildStore();
        expect(() => {
            const wrapper: ReactWrapper<any, any> = mount(
                <Provider store={store}>
                    <div>
                        <LoadingConnected id="loading" />
                    </div>
                </Provider>,
                {attachTo: document.getElementById('App')}
            );
            wrapper.unmount();
            wrapper.detach();
        }).not.toThrow();
    });
});
