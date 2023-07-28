import {mount, ReactWrapper} from 'enzyme';
import {Provider} from 'react-redux';
import {Store} from 'redux';

import {PlasmaState} from '../../../PlasmaState';
import {TestUtils} from '../../../utils/tests/TestUtils';
import {LoadingConnected} from '../LoadingConnected';

describe('<LoadingConnected />', () => {
    it('should render without errors', () => {
        const store: Store<PlasmaState> = TestUtils.buildStore();

        expect(() => {
            const wrapper: ReactWrapper<any, any> = mount(
                <Provider store={store}>
                    <div>
                        <LoadingConnected id="loading" />
                    </div>
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            wrapper.unmount();
        }).not.toThrow();
    });
});
