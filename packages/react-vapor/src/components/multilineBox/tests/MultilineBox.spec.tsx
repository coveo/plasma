import {shallowWithState, shallowWithStore} from 'enzyme-redux';
import * as React from 'react';
import * as _ from 'underscore';

import {StringListActions} from '../../../reusableState/customList/StringListActions';
import {RTestUtils} from '../../../utils/tests/RTestUtils';
import {getStoreMock, ReactVaporMockStore} from '../../../utils/tests/TestUtils';
import {IMultilineBoxOwnProps, IMultilineParentProps, IMultilineSingleBoxProps, MultilineBox} from '../MultilineBox';

describe('MultilineBox', () => {
    describe('<MultilineBox/>', () => {
        let store: ReactVaporMockStore;
        const id = 'multiline-box';
        const defaultProps: IMultilineBoxOwnProps = {
            id,
            data: [],
            renderBody: () => <div className="multiline-box" />,
        };

        it('should not throw on create', () => {
            expect(() => shallowWithState(<MultilineBox {...defaultProps} />, {})).not.toThrow();
        });

        it('should mount without errors', () => {
            expect(() => shallowWithState(<MultilineBox {...defaultProps} />, {}).dive()).not.toThrow();
        });

        it('should unmount without errors', () => {
            const wrapper = shallowWithState(<MultilineBox {...defaultProps} />, {}).dive();

            expect(() => wrapper.unmount()).not.toThrow();
        });

        it('should render a multiline box', () => {
            const wrapper = shallowWithState(<MultilineBox {...defaultProps} />, {}).dive();
            expect(wrapper.find('div').exists()).toBe(true);
        });

        describe('store actions', () => {
            const propsWithData: IMultilineBoxOwnProps = {
                id,
                data: [{name: 'princess'}],
                renderBody: () => <div className="multiline-box" />,
            };

            it('should add an additional ids in the store on mount', () => {
                store = getStoreMock();
                shallowWithStore(<MultilineBox {...defaultProps} />, store).dive();

                expect(_.pluck(store.getActions(), 'type')).toContain(StringListActions.add);
            });

            it('should remove ids in the store on unmount', () => {
                store = getStoreMock();
                const wrapper = shallowWithStore(<MultilineBox {...defaultProps} />, store).dive();
                wrapper.unmount();

                expect(_.pluck(store.getActions(), 'type')).toContain(StringListActions.remove);
            });

            describe('parentProps sent to the renderBody', () => {
                it('should dispatch action to remove the current box id from the list on removeBox sent with the ParentProps object', () => {
                    store = getStoreMock();
                    shallowWithStore(
                        <MultilineBox
                            {...propsWithData}
                            renderBody={(data: IMultilineSingleBoxProps[], parentProps: IMultilineParentProps) => {
                                parentProps.removeBox('id');
                                return <div />;
                            }}
                        />,
                        store
                    ).dive();

                    expect(_.pluck(store.getActions(), 'type')).toContain(StringListActions.removeValue);
                });

                it('should dispatch action to add a new id on addNewBox sent with the ParentProps object', () => {
                    store = getStoreMock();
                    shallowWithStore(
                        <MultilineBox
                            {...propsWithData}
                            renderBody={(data: IMultilineSingleBoxProps[], parentProps: IMultilineParentProps) => {
                                parentProps.addNewBox();
                                return <div />;
                            }}
                        />,
                        store
                    ).dive();

                    expect(_.pluck(store.getActions(), 'type')).toContain(StringListActions.addValue);
                });

                it('should dispatch action to add a new id on addNewBox sent with the ParentProps object', () => {
                    let parentId: string = '';
                    store = getStoreMock();
                    shallowWithStore(
                        <MultilineBox
                            {...propsWithData}
                            renderBody={(data: IMultilineSingleBoxProps[], parentProps: IMultilineParentProps) => {
                                parentId = parentProps.parentId;
                                return <div />;
                            }}
                        />,
                        store
                    ).dive();

                    expect(parentId).toBe(id);
                });
            });

            describe('data sent to the renderBody', () => {
                let dataToBody: any[] = [];

                it('should return an array of data with an generated id for the initial data object and and an other one for the default box at the end', () => {
                    const testId = 'cream';

                    RTestUtils.mockUUID(testId);
                    shallowWithState(
                        <MultilineBox
                            {...propsWithData}
                            renderBody={(data: IMultilineSingleBoxProps[]) => {
                                dataToBody = data;
                                return <div />;
                            }}
                        />,
                        {
                            multilineIds: {
                                [id]: {
                                    id: id,
                                    list: [testId],
                                },
                            },
                        }
                    ).dive();

                    expect(dataToBody[0].id).toBe(testId);
                });

                it('should return an array of data with the isLast set to true for the last element only', () => {
                    const testId = 'cream';

                    RTestUtils.mockUUID(testId);
                    shallowWithState(
                        <MultilineBox
                            {...propsWithData}
                            renderBody={(data: IMultilineSingleBoxProps[]) => {
                                dataToBody = data;
                                return <div />;
                            }}
                        />,
                        {
                            multilineIds: {
                                [id]: {
                                    id: id,
                                    list: [testId, '1234'],
                                },
                            },
                        }
                    ).dive();

                    expect(dataToBody[0].isLast).toBe(false);
                    expect(dataToBody[1].isLast).toBe(true);
                });

                it('should return props from initial data if rendered', () => {
                    const testId = 'cream';

                    RTestUtils.mockUUID(testId);
                    shallowWithState(
                        <MultilineBox
                            {...propsWithData}
                            renderBody={(data: IMultilineSingleBoxProps[]) => {
                                dataToBody = data;
                                return <div />;
                            }}
                        />,
                        {
                            multilineIds: {
                                [id]: {
                                    id: id,
                                    list: [testId],
                                },
                            },
                        }
                    ).dive();

                    expect(dataToBody[0].props).toEqual({name: 'princess'});
                });

                it('should return an empty object if the default props is not defined and its not a box from the initial data', () => {
                    const testId = 'cream';

                    RTestUtils.mockUUID(testId);
                    shallowWithState(
                        <MultilineBox
                            {...propsWithData}
                            defaultProps={undefined}
                            renderBody={(data: IMultilineSingleBoxProps[]) => {
                                dataToBody = data;
                                return <div />;
                            }}
                        />,
                        {
                            multilineIds: {
                                [id]: {
                                    id: id,
                                    list: ['uniqueID'],
                                },
                            },
                        }
                    ).dive();

                    expect(dataToBody[0].props).toEqual({});
                });

                it('should return the default props defined as own props', () => {
                    const testId = 'cream';
                    const theInitialProps = {
                        name: 'myName',
                    };

                    RTestUtils.mockUUID(testId);
                    shallowWithState(
                        <MultilineBox
                            {...propsWithData}
                            defaultProps={theInitialProps}
                            renderBody={(data: IMultilineSingleBoxProps[]) => {
                                dataToBody = data;
                                return <div />;
                            }}
                        />,
                        {
                            multilineIds: {
                                [id]: {
                                    id: id,
                                    list: ['uniqueID'],
                                },
                            },
                        }
                    ).dive();

                    expect(dataToBody[0].props).toEqual(theInitialProps);
                });

                it('should allow empty string as the default props', () => {
                    const testId = 'cream';
                    RTestUtils.mockUUID(testId);
                    shallowWithState(
                        <MultilineBox
                            {...propsWithData}
                            defaultProps=""
                            renderBody={(data: IMultilineSingleBoxProps[]) => {
                                dataToBody = data;
                                return <div />;
                            }}
                        />,
                        {
                            multilineIds: {
                                [id]: {
                                    id: id,
                                    list: ['uniqueID'],
                                },
                            },
                        }
                    ).dive();

                    expect(dataToBody[0].props).toBe('');
                });
            });

            describe('on component did update', () => {
                it('should not call updateData if the previous data is equal than the old props data', () => {
                    const dataToTest: any = [{name: 'princess'}];

                    store = getStoreMock();
                    const wrapper = shallowWithStore(
                        <MultilineBox {...defaultProps} data={dataToTest} />,
                        store
                    ).dive();

                    wrapper.setProps({
                        data: dataToTest,
                    });

                    expect(_.pluck(store.getActions(), 'type')).not.toContain(StringListActions.updateValues);
                });

                it('should call updateData if the previous data is not equal than the old props data', () => {
                    store = getStoreMock();
                    const wrapper = shallowWithStore(
                        <MultilineBox {...defaultProps} data={[{name: 'princess'}]} />,
                        store
                    ).dive();

                    wrapper.setProps({
                        data: {name: 'Succubus'},
                    });

                    expect(_.pluck(store.getActions(), 'type')).toContain(StringListActions.updateValues);
                });
            });
        });
    });
});
