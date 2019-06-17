import {shallowWithState} from 'enzyme-redux';
import * as React from 'react';
import * as _ from 'underscore';
import {RTestUtils} from '../../../utils/tests/RTestUtils';
import {multilineBoxContainer} from '../hoc/MultilineBoxContainer';
import {IMultilineSingleBoxProps, MultilineBox} from '../MultilineBox';

describe('Multiline box container', () => {
    describe('<MultilineBoxContainer/>', () => {
        const id = 'multiline-box';
        const MultilineBoxContainer = _.compose(multilineBoxContainer())(MultilineBox);

        it('should not throw if the containerNode and data is not defined', () => {
            expect(() =>
                shallowWithState(<MultilineBoxContainer id={id} />, {})
                    .dive()
                    .dive()
            ).not.toThrow();
        });

        it('should not throw if the containerNode is not defined without data', () => {
            const testId = 'id';
            RTestUtils.mockUUID(testId);
            expect(() =>
                shallowWithState(
                    <MultilineBoxContainer id={id} renderBody={(data: IMultilineSingleBoxProps[]) => <div />} />,
                    {
                        multilineIds: {
                            [id]: {
                                id: id,
                                list: [testId],
                            },
                        },
                    }
                )
                    .dive()
                    .dive()
            ).not.toThrow();
        });

        it('should not throw if he containerNode is not defined and the data is defined ', () => {
            const testId = 'id';
            RTestUtils.mockUUID(testId);
            expect(() =>
                shallowWithState(
                    <MultilineBoxContainer
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
                    }
                )
                    .dive()
                    .dive()
            ).not.toThrow();
        });

        it('should mount without errors', () => {
            expect(() =>
                shallowWithState(
                    <MultilineBoxContainer id={id} data={[]} renderBody={_.identity} defaultProps={{}} />,
                    {}
                )
                    .dive()
                    .dive()
            ).not.toThrow();
        });

        it('should unmount without errors', () => {
            const wrapper = shallowWithState(
                <MultilineBoxContainer id={id} data={[]} renderBody={_.identity} defaultProps={{}} />,
                {}
            )
                .dive()
                .dive();

            expect(() => wrapper.unmount()).not.toThrow();
        });

        describe('once rendered without errors', () => {
            let MultilineBoxContainerWithSpy: any;
            let spyContainerNode: jasmine.Spy;

            beforeEach(() => {
                spyContainerNode = jasmine.createSpy('containerNode').and.returnValue(<div></div>);

                MultilineBoxContainerWithSpy = _.compose(
                    multilineBoxContainer({
                        containerNode: spyContainerNode,
                    })
                )(MultilineBox);
            });

            it('should call the containerNode function on mount', () => {
                shallowWithState(
                    <MultilineBoxContainerWithSpy
                        id={id}
                        data={[{name: 'name'}]}
                        defaultProps={{}}
                        containerNode={spyContainerNode}
                    />,
                    {
                        multilineIds: {
                            [id]: {
                                id: id,
                                list: ['imNotAnId'],
                            },
                        },
                    }
                )
                    .dive()
                    .dive();

                expect(spyContainerNode).toHaveBeenCalledTimes(1);
            });

            it('should call the containerNode if defined as an ownProps', () => {
                shallowWithState(<MultilineBoxContainerWithSpy id={id} data={[{name: 'name'}]} defaultProps={{}} />, {
                    multilineIds: {
                        [id]: {
                            id: id,
                            list: ['imNotAnId'],
                        },
                    },
                })
                    .dive()
                    .dive();

                expect(spyContainerNode).toHaveBeenCalledTimes(1);
            });
        });
    });
});
