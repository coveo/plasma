import {mount, ReactWrapper} from 'enzyme';
import {Provider} from 'react-redux';
import {Store} from 'redux';

import {PlasmaState} from '../../../PlasmaState.js';
import {clearState} from '../../../utils/ReduxUtils.js';
import {TestUtils} from '../../../utils/tests/TestUtils.js';
import {addFacet, toggleMoreFacetRows} from '../FacetActions.js';
import {FacetMoreToggle, IFacetMoreToggleProps} from '../FacetMoreToggle.js';
import {FacetMoreToggleConnected} from '../FacetMoreToggleConnected.js';

describe('Facets', () => {
    describe('<FacetMoreToggleConnected />', () => {
        const facet: string = 'facet title';
        let wrapper: ReactWrapper<any, any>;
        let facetMoreToggle: ReactWrapper<IFacetMoreToggleProps, any>;
        let store: Store<PlasmaState>;

        beforeEach(() => {
            store = TestUtils.buildStore();

            wrapper = mount(
                <Provider store={store}>
                    <FacetMoreToggleConnected facet={facet} />
                </Provider>,
                {attachTo: document.getElementById('App')}
            );
            store.dispatch(addFacet(facet));
            wrapper.update();
            facetMoreToggle = wrapper.find(FacetMoreToggle);
        });

        afterEach(() => {
            store.dispatch(clearState());
            wrapper?.unmount();
        });

        it('should get its state (opened or not) as a prop', () => {
            const openedProp = facetMoreToggle.props().isOpened;

            expect(openedProp).toBeDefined();
            expect(openedProp).toBe(false);
        });

        it('should get what to do when toggling it as a prop', () => {
            const onToggleProp = facetMoreToggle.props().onToggleMore;

            expect(onToggleProp).toBeDefined();
        });

        it('should call onToggleMore on change', () => {
            expect(facetMoreToggle.props().isOpened).toBe(false);

            facetMoreToggle.find('input').simulate('change');
            wrapper.update();

            expect(wrapper.find(FacetMoreToggle).props().isOpened).toBe(true);
        });

        it('should be hidden when the other rows are opened', () => {
            expect(facetMoreToggle.find('li').hasClass('hidden')).toBe(false);

            store.dispatch(toggleMoreFacetRows(facet));
            wrapper.update();

            expect(wrapper.find(FacetMoreToggle).find('li').hasClass('hidden')).toBe(true);
        });
    });
});
