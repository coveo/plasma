import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import * as _ from 'underscore';
import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {Button} from '../../button/Button';
import {Content, IContentProps} from '../../content/Content';
import {HeaderWrapper, IHeaderWrapperProps} from '../HeaderWrapper';
import {TabsHeader} from '../TabsHeader';

describe('<HeaderWrapper/>', () => {

    let headerWrapperComponent: ReactWrapper<IHeaderWrapperProps, any>;
    let store: Store<IReactVaporState>;

    beforeEach(() => {
        store = TestUtils.buildStore();
    });

    afterEach(() => {
        store.dispatch(clearState());
    });

    it('should render without errors', () => {
        expect(() => {
            shallow(<HeaderWrapper />);
        }).not.toThrow();
    });

    describe('<HeaderWrapper /> with custom props', () => {

        const customProps: IHeaderWrapperProps = {
            description: 'description test',
            actions: [{content: Button}, {content: Button}],
            classes: ['class-test'],
            tabs: [{id: '1', title: '1'}, {id: '2', title: '2'}],
        };

        const renderComponent = (props: IHeaderWrapperProps = {}) => {
            headerWrapperComponent = mount(
                <Provider store={store}>
                    <HeaderWrapper {..._.extend({}, customProps, props)} />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
        };

        afterEach(() => {
            headerWrapperComponent.detach();
        });

        it('should render the description', () => {
            renderComponent();
            expect(headerWrapperComponent.find('h4').text()).toEqual(customProps.description);
        });

        it('should render actions', () => {
            renderComponent();
            const contents = headerWrapperComponent.find(Content);

            expect(contents.length).toEqual(2);
            expect((contents.first().props() as IContentProps).content).toEqual(Button);
            expect((contents.last().props() as IContentProps).content).toEqual(Button);
        });

        it('should render tabs', () => {
            renderComponent();
            const tabs = headerWrapperComponent.find(TabsHeader);

            expect(tabs.length).toEqual(1);
        });

        it('should render without the border bottom', () => {
            renderComponent({
                hasBorderBottom: false,
            });
            const tabs = headerWrapperComponent.find('.mod-border-bottom');

            expect(tabs.length).toEqual(0);
        });

        it('should render with the border bottom', () => {
            renderComponent({
                hasBorderBottom: true,
                tabs: undefined,
            });
            const tabs = headerWrapperComponent.find('.mod-border-bottom');

            expect(tabs.length).toEqual(1);
        });

        it('should render without padding', () => {
            renderComponent({
                hasPadding: false,
            });
            const tabs = headerWrapperComponent.find('.mod-header-padding');

            expect(tabs.length).toEqual(0);
        });

        it('should render with padding', () => {
            renderComponent({
                hasPadding: true,
            });
            const tabs = headerWrapperComponent.find('.mod-header-padding');

            expect(tabs.length).toEqual(1);
        });
    });
});
