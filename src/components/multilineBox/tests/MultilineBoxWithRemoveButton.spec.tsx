import {shallowWithState, shallowWithStore} from 'enzyme-redux';
import * as React from 'react';
import * as _ from 'underscore';
import {RTestUtils} from '../../../utils/tests/RTestUtils';
import {multilineBoxWithRemoveButton} from '../hoc/MultilineBoxWithRemoveButton';
import {IMultilineSingleBoxProps, MultilineBox} from '../MultilineBox';
import {Button, IButtonProps} from '../../button/Button';
import {mockStore} from 'redux-test-utils';
import {IReactVaporState} from '../../../ReactVapor';
import {StringListActions} from '../../../reusableState/customList/StringListActions';

describe('Multiline box with remove button', () => {
    describe('<MultilineBoxWithRemoveButton/>', () => {

        let store: mockStore<IReactVaporState>;

        const id = 'multiline-box';
        const DefaultMultilineBoxWithRemoveButton = _.compose(
            multilineBoxWithRemoveButton(),
        )(MultilineBox);

        it('should mount without errors', () => {
            expect(() => shallowWithState(
                <DefaultMultilineBoxWithRemoveButton
                    id={id}
                    data={[]}
                    renderBody={_.identity}
                    defaultProps={{}}
                />, {}).dive().dive().dive(),
            ).not.toThrow();
        });

        it('should unmount without errors', () => {
            const wrapper = shallowWithState(
                <DefaultMultilineBoxWithRemoveButton
                    id={id}
                    data={[]}
                    renderBody={() => <div></div>}
                    defaultProps={{}}
                />, {}).dive().dive().dive();

            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('should not throw if the containerNode and data is not defined', () => {
            expect(() => shallowWithState(
                <DefaultMultilineBoxWithRemoveButton
                    id={id}
                />, {}).dive().dive().dive()).not.toThrow();
        });

        it('should not throw if the containerNode is not defined without data', () => {
            const testId = 'id';
            RTestUtils.mockUUID(testId);
            expect(() => shallowWithState(
                <DefaultMultilineBoxWithRemoveButton
                    id={id}
                    renderBody={(data: IMultilineSingleBoxProps[]) => <div />}
                />,
                {
                    multilineIds: {
                        [id]: {
                            id: id,
                            list: [testId],
                        },
                    },
                },
            ).dive().dive().dive()).not.toThrow();
        });

        it('should not throw if he containerNode is not defined and the data is defined ', () => {
            const testId = 'id';
            RTestUtils.mockUUID(testId);
            expect(() => shallowWithState(
                <DefaultMultilineBoxWithRemoveButton
                    id={id}
                    renderBody={(data: IMultilineSingleBoxProps[]) => <div />}
                    data={[{name: 'test'}]}
                />,
                {
                    multilineIds: {
                        [id]: {
                            id: id,
                            list: [testId],
                        },
                    },
                },
            ).dive().dive().dive()).not.toThrow();
        });

        describe('once rendered', () => {

            it('should contains a Button inside the remove button element sent as arguments', () => {
                store = RTestUtils.buildMultilineStore();
                const wrapper = shallowWithStore(
                    <DefaultMultilineBoxWithRemoveButton
                        id={id}
                        data={[]}
                        renderBody={() => <div></div>}
                        defaultProps={{}}
                    />, store).dive().dive().dive();

                expect(wrapper.find(Button).length).toBe(1);
            });

            it('should trigger a dispatch to remove the id from the multiline box on click button', () => {
                const testId = 'testid';

                RTestUtils.mockUUID(testId);
                store = RTestUtils.buildMultilineStore({
                    multilineIds: {
                        [id]: {
                            id: id,
                            list: [testId, '1234'],
                        },
                    },
                });
                const wrapper = shallowWithStore(
                    <DefaultMultilineBoxWithRemoveButton
                        id={id}
                        data={[{name: 'potatos'}]}
                        renderBody={() => <div></div>}
                        defaultProps={{}}
                    />, store).dive().dive().dive();

                wrapper.find(Button).first().props().onClick();

                expect(store.isActionTypeDispatched(StringListActions.removeValue)).toBe(true);
            });
        });

        describe('with a containerNode', () => {

            const ModifiedMultilineBoxWithRemoveButton = _.compose(
                multilineBoxWithRemoveButton({
                    containerNode: (child: React.ReactNode, getRemoveButton: (props?: Partial<IButtonProps>) => React.ReactNode): React.ReactNode =>
                        <div className={'pick-me-plz'}>{child}{getRemoveButton({})}</div>,
                }),
            )(MultilineBox);

            it('should render de container node', () => {
                const testId = 'testid';

                RTestUtils.mockUUID(testId);
                store = RTestUtils.buildMultilineStore({
                    multilineIds: {
                        [id]: {
                            id: id,
                            list: [testId, '1234'],
                        },
                    },
                });
                const wrapper = shallowWithStore(
                    <ModifiedMultilineBoxWithRemoveButton
                        id={id}
                        data={[{name: 'potatos'}]}
                        renderBody={() => <div></div>}
                        defaultProps={{}}
                    />, store).dive().dive().dive();

                expect(wrapper.find('.pick-me-plz').length).toBe(1);
            });
        });
    });
});
