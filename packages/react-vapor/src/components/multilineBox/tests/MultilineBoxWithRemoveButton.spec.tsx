import {ShallowWrapper} from 'enzyme';
import {shallowWithState, shallowWithStore} from 'enzyme-redux';
import * as React from 'react';
import * as _ from 'underscore';

import {StringListActions} from '../../../reusableState/customList/StringListActions';
import {RTestUtils} from '../../../utils/tests/RTestUtils';
import {getStoreMock, ReactVaporMockStore} from '../../../utils/tests/TestUtils';
import {Button, IButtonProps} from '../../button/Button';
import {multilineBoxWithRemoveButton} from '../hoc/MultilineBoxWithRemoveButton';
import {IMultilineBoxOwnProps, MultilineBox} from '../MultilineBox';

describe('Multiline box with remove button', () => {
    describe('<MultilineBoxWithRemoveButton/>', () => {
        let store: ReactVaporMockStore;

        const id = 'multiline-box';
        const DefaultMultilineBoxWithRemoveButton = _.compose(multilineBoxWithRemoveButton())(MultilineBox);

        const shallowComponent = (
            Component: any,
            props: Partial<IMultilineBoxOwnProps> = {},
            state = {}
        ): ShallowWrapper => {
            return shallowWithState(<Component {...props} id={id} />, state)
                .dive()
                .dive()
                .dive();
        };

        it('should mount without errors', () => {
            expect(() =>
                shallowComponent(DefaultMultilineBoxWithRemoveButton, {
                    data: [],
                    renderBody: () => _.identity,
                    defaultProps: {},
                })
            ).not.toThrow();
        });

        it('should unmount without errors', () => {
            const wrapper = shallowComponent(DefaultMultilineBoxWithRemoveButton, {
                data: [],
                renderBody: () => _.identity,
                defaultProps: {},
            });

            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('should not throw if the containerNode and data is not defined', () => {
            expect(() => shallowComponent(DefaultMultilineBoxWithRemoveButton, {id})).not.toThrow();
        });

        it('should not throw if the containerNode is not defined without data', () => {
            const testId = 'id';
            RTestUtils.mockUUID(testId);

            expect(() =>
                shallowComponent(
                    DefaultMultilineBoxWithRemoveButton,
                    {},
                    {
                        multilineIds: {
                            [id]: {
                                id: id,
                                list: [testId],
                            },
                        },
                    }
                )
            ).not.toThrow();
        });

        it('should not throw if he containerNode is not defined and the data is defined ', () => {
            const testId = 'id';
            RTestUtils.mockUUID(testId);

            expect(() =>
                shallowComponent(
                    DefaultMultilineBoxWithRemoveButton,
                    {
                        data: [{name: 'test'}],
                    },
                    {
                        multilineIds: {
                            [id]: {
                                id: id,
                                list: [testId],
                            },
                        },
                    }
                )
            ).not.toThrow();
        });

        describe('once rendered', () => {
            const shallowComponentWithStore = (
                Component: any,
                props: Partial<IMultilineBoxOwnProps> = {},
                s: any
            ): ShallowWrapper => {
                return shallowWithStore(<Component {...props} id={id} />, s)
                    .dive()
                    .dive()
                    .dive();
            };

            it('should contains a Button inside the remove button element sent as arguments', () => {
                store = getStoreMock();

                const wrapper = shallowComponentWithStore(
                    DefaultMultilineBoxWithRemoveButton,
                    {
                        data: [],
                    },
                    store
                );

                expect(wrapper.find(Button).length).toBe(1);
            });

            it('should trigger a dispatch to remove the id from the multiline box on click button', () => {
                const testId = 'testid';

                RTestUtils.mockUUID(testId);
                store = getStoreMock({
                    multilineIds: {
                        [id]: {
                            id: id,
                            list: [testId, '1234'],
                        },
                    },
                });

                const wrapper = shallowComponentWithStore(
                    DefaultMultilineBoxWithRemoveButton,
                    {
                        data: [{name: 'potatos'}],
                    },
                    store
                );

                wrapper
                    .find(Button)
                    .first()
                    .props()
                    .onClick();

                expect(_.pluck(store.getActions(), 'type')).toContain(StringListActions.removeValue);
            });

            describe('with a containerNode', () => {
                const ModifiedMultilineBoxWithRemoveButton = _.compose(
                    multilineBoxWithRemoveButton({
                        containerNode: (
                            child: React.ReactNode,
                            getRemoveButton: (props?: Partial<IButtonProps>) => React.ReactNode
                        ): React.ReactNode => (
                            <div className={'pick-me-plz'}>
                                {child}
                                {getRemoveButton({})}
                            </div>
                        ),
                    })
                )(MultilineBox);

                it('should render the container node', () => {
                    const testId = 'testid';

                    RTestUtils.mockUUID(testId);
                    store = getStoreMock({
                        multilineIds: {
                            [id]: {
                                id: id,
                                list: [testId, '1234'],
                            },
                        },
                    });

                    const wrapper = shallowComponentWithStore(
                        ModifiedMultilineBoxWithRemoveButton,
                        {
                            data: [{name: 'potatos'}],
                        },
                        store
                    );

                    expect(wrapper.find('.pick-me-plz').length).toBe(1);
                });
            });
        });
    });
});
