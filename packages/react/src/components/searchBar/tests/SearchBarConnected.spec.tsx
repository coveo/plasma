import {mountWithStore} from '@test-utils';

import {getStoreMock} from '../../../utils/tests/TestUtils.js';
import {addSearchBar, removeSearchBar, setSearchBarValue} from '../SearchBarActions.js';
import {SearchBarConnected} from '../SearchBarConnected.js';
import {searchBarConnectedPropsScenarios} from './SearchBarPropsScenarios.mock.js';

describe('SearchBarConnected', () => {
    const requiredProps = {...searchBarConnectedPropsScenarios[0]};

    it('should not throw on mount and unmount in different props scenarios', () => {
        expect(() => {
            searchBarConnectedPropsScenarios.forEach((props) => {
                mountWithStore(<SearchBarConnected {...props} />, getStoreMock()).unmount();
            });
        }).not.toThrow();
    });

    it('should add and remove the search bar on mount and unmount respectively', () => {
        const store = getStoreMock();
        const component = mountWithStore(<SearchBarConnected {...requiredProps} />, store);

        expect(store.getActions()).toContainEqual(addSearchBar(requiredProps.id, false));

        component.unmount();

        expect(store.getActions()).toContainEqual(removeSearchBar(requiredProps.id));
    });

    it('should add itself to the store with disabled if disabledOnMount is passed as true', () => {
        const store = getStoreMock();
        const disabledOnMount = true;
        mountWithStore(<SearchBarConnected {...requiredProps} disabledOnMount />, store);

        expect(store.getActions()).toContainEqual(addSearchBar(requiredProps.id, disabledOnMount));
    });

    it('should change the value in the state on input change', () => {
        const store = getStoreMock();
        const component = mountWithStore(<SearchBarConnected {...requiredProps} />, store);
        component.find('input').prop('onChange')({target: {value: 'new value'}} as any);

        expect(store.getActions()).toContainEqual(setSearchBarValue(requiredProps.id, 'new value'));
    });
});
