import {mount} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import * as _ from 'underscore';
import {RTestUtils} from '../../../utils/tests/RTestUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {multilineBoxWithDnD} from '../hoc/MultilineBoxWithDnD';
import {MultilineBox} from '../MultilineBox';
import {DragDropContext} from '../../../../types/react-dnd';
import TestBackend from "react-dnd-test-backend";

describe('Multiline box with drag & drop', () => {
    describe('<MultilineBoxWithDnD/>', () => {

        let store: any;
        let DefaultMultilineBoxWithDnD: any;

        const identity = el => el;
        const id = 'multiline-box';

        beforeAll(() => {
            RTestUtils.mockTagContext();
            store = TestUtils.buildStore();

            DefaultMultilineBoxWithDnD = DragDropContext(TestBackend)(_.compose(
                multilineBoxWithDnD(),
            )(MultilineBox).DecoratedComponent);
        });

        it('should mount without errors', () => {
            expect(() => mount(
                <Provider store={store}>
                    <DefaultMultilineBoxWithDnD
                        id={id}
                        data={[]}
                        renderBody={() => <div></div>}
                        defaultProps={{}}
                        connectDropTarget={identity}
                    />
                </Provider>,
                ),
            ).not.toThrow();
        });

        it('should unmount without errors', () => {
            const wrapper = mount(
                <Provider store={store}>
                    <DefaultMultilineBoxWithDnD
                        id={id}
                        data={[]}
                        renderBody={() => <div></div>}
                        defaultProps={{}}
                        connectDragSource={identity}
                    />
                </Provider>);

            expect(() => wrapper.unmount()).not.toThrow();
        });
    });
});
