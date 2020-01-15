import {mount} from 'enzyme';
import * as React from 'react';

import {ITableProps} from '../Table';
import {TableChildBlankSlate} from '../table-children/TableChildBlankSlate';
import {DEFAULT_TABLE_DATA, TOGGLE_ARROW_CELL_COUNT} from '../TableConstants';
import {tablePropsMock} from './TableTestCommon';

describe('<TableChildBlankSlate />', () => {
    describe('render', () => {
        const mountComponentWithProps = (props: ITableProps) => {
            return mount(<TableChildBlankSlate {...props} />, {attachTo: document.getElementById('App')});
        };

        describe('render without error', () => {
            it('should render without error if basic props are passed', () => {
                expect(() => {
                    mountComponentWithProps(tablePropsMock);
                }).not.toThrow();
            });

            it('should render without error if the table is loading', () => {
                expect(() => {
                    mountComponentWithProps({...tablePropsMock, tableCompositeState: {isLoading: true}} as any);
                }).not.toThrow();
            });

            it('should render without error if the table has displayed rows', () => {
                expect(() => {
                    mountComponentWithProps({
                        ...tablePropsMock,
                        tableCompositeState: {
                            data: {...DEFAULT_TABLE_DATA, displayedIds: ['some rows are displayed']},
                        },
                    } as any);
                }).not.toThrow();
            });

            it('should render without error if the table has a blankslate on action and filter is non empty', () => {
                expect(() => {
                    mountComponentWithProps({
                        ...tablePropsMock,
                        blankSlateNoResultsOnAction: {title: 'no results'},
                        tableCompositeState: {filter: 'non empty'},
                    } as any);
                }).not.toThrow();
            });

            it('should render without error if the table has a blankslate on action and from (datePicker) is non empty', () => {
                expect(() => {
                    mountComponentWithProps({
                        ...tablePropsMock,
                        blankSlateNoResultsOnAction: {title: 'no results'},
                        tableCompositeState: {from: Date.now()},
                    } as any);
                }).not.toThrow();
            });

            it('should render without error if the table has a blankslate on action and to (datePicker) is non empty', () => {
                expect(() => {
                    mountComponentWithProps({
                        ...tablePropsMock,
                        blankSlateNoResultsOnAction: {title: 'no results'},
                        tableCompositeState: {to: Date.now()},
                    } as any);
                }).not.toThrow();
            });

            it('should render without error if the table has a blankslate on action and some predicates have a non default value', () => {
                expect(() => {
                    mountComponentWithProps({
                        ...tablePropsMock,
                        blankSlateNoResultsOnAction: {title: 'no results'},
                        tableCompositeState: {predicates: [{attribute1: 'non default value'}]},
                    } as any);
                }).not.toThrow();
            });

            it('should render without error if the table has no blankslate on action and filter is non empty', () => {
                expect(() => {
                    mountComponentWithProps({
                        ...tablePropsMock,
                        tableCompositeState: {filter: 'non empty'},
                    } as any);
                }).not.toThrow();
            });

            it('should render without error if the table has no blankslate on action and from (datePicker) is non empty', () => {
                expect(() => {
                    mountComponentWithProps({
                        ...tablePropsMock,
                        tableCompositeState: {from: Date.now()},
                    } as any);
                }).not.toThrow();
            });

            it('should render without error if the table has no blankslate on action and to (datePicker) is non empty', () => {
                expect(() => {
                    mountComponentWithProps({
                        ...tablePropsMock,
                        tableCompositeState: {to: Date.now()},
                    } as any);
                }).not.toThrow();
            });

            it('should render without error if the table has no blankslate on action and some predicates have a non default value', () => {
                expect(() => {
                    mountComponentWithProps({
                        ...tablePropsMock,
                        tableCompositeState: {predicates: [{attribute1: 'non default value'}]},
                    } as any);
                }).not.toThrow();
            });

            it('should render without error if the table is in error and has a blankslateOnError', () => {
                expect(() => {
                    mountComponentWithProps({
                        ...tablePropsMock,
                        blankSlateOnError: {title: 'table on error'},
                        tableCompositeState: {isInError: true},
                    } as any);
                }).not.toThrow();
            });

            it('should render without error if the table is in error and has no blankslateOnError', () => {
                expect(() => {
                    mountComponentWithProps({
                        ...tablePropsMock,
                        tableCompositeState: {isInError: true},
                    } as any);
                }).not.toThrow();
            });
        });

        describe('render content', () => {
            it('should render the default blankslate if no results without actions and without table being in error', () => {
                expect(mountComponentWithProps(tablePropsMock).text()).toContain(
                    tablePropsMock.blankSlateDefault.title as string
                );
            });

            it('should render the default blanslate that spans accross all table columns', () => {
                expect(
                    mountComponentWithProps(tablePropsMock)
                        .find('td')
                        .prop('colSpan')
                ).toBe(tablePropsMock.headingAttributes.length);
            });

            it(
                'should render the default blanslate that spans accross all table columns + the collapsible toggle column ' +
                    'when the table has at least one collapsible column',
                () => {
                    expect(
                        mountComponentWithProps({
                            ...tablePropsMock,
                            collapsibleFormatter: () => null,
                        })
                            .find('td')
                            .prop('colSpan')
                    ).toBe(tablePropsMock.headingAttributes.length + TOGGLE_ARROW_CELL_COUNT);
                }
            );

            it('should render the blankSlateNoResultsOnAction if the table has a blankslate on action and filter is non empty', () => {
                const blankslateTitleOnAction = 'no results on action!';
                expect(
                    mountComponentWithProps({
                        ...tablePropsMock,
                        blankSlateNoResultsOnAction: {title: blankslateTitleOnAction},
                        tableCompositeState: {filter: 'non empty'},
                    } as any).text()
                ).toContain(blankslateTitleOnAction);
            });

            it('should render the blankSlateNoResultsOnAction if the table has a blankslate on action and from (datePicker) is non empty', () => {
                const blankslateTitleOnAction = 'no results on action!';
                expect(
                    mountComponentWithProps({
                        ...tablePropsMock,
                        blankSlateNoResultsOnAction: {title: blankslateTitleOnAction},
                        tableCompositeState: {from: Date.now()},
                    } as any).text()
                ).toContain(blankslateTitleOnAction);
            });

            it('should render the blankSlateNoResultsOnAction if the table has a blankslate on action and to (datePicker) is non empty', () => {
                const blankslateTitleOnAction = 'no results on action!';
                expect(
                    mountComponentWithProps({
                        ...tablePropsMock,
                        blankSlateNoResultsOnAction: {title: blankslateTitleOnAction},
                        tableCompositeState: {to: Date.now()},
                    } as any).text()
                ).toContain(blankslateTitleOnAction);
            });

            it('should render the blankSlateNoResultsOnAction if the table has a blankslate on action and some predicates have a non default value', () => {
                const blankslateTitleOnAction = 'no results on action!';
                expect(
                    mountComponentWithProps({
                        ...tablePropsMock,
                        blankSlateNoResultsOnAction: {title: blankslateTitleOnAction},
                        tableCompositeState: {predicates: [{attribute1: 'non default value'}]},
                    } as any).text()
                ).toContain(blankslateTitleOnAction);
            });

            it('should render blankSlateDefault if the table has no blankslate on action and filter is non empty', () => {
                expect(
                    mountComponentWithProps({
                        ...tablePropsMock,
                        tableCompositeState: {filter: 'non empty'},
                    } as any).text()
                ).toContain(tablePropsMock.blankSlateDefault.title as string);
            });

            it('should render blankSlateDefault if the table has no blankslate on action and from (datePicker) is non empty', () => {
                expect(
                    mountComponentWithProps({
                        ...tablePropsMock,
                        tableCompositeState: {from: Date.now()},
                    } as any).text()
                ).toContain(tablePropsMock.blankSlateDefault.title as string);
            });

            it('should render blankSlateDefault if the table has no blankslate on action and to (datePicker) is non empty', () => {
                expect(
                    mountComponentWithProps({
                        ...tablePropsMock,
                        tableCompositeState: {to: Date.now()},
                    } as any).text()
                ).toContain(tablePropsMock.blankSlateDefault.title as string);
            });

            it('should render blankSlateDefault if the table has no blankslate on action and some predicates have a non default value', () => {
                expect(
                    mountComponentWithProps({
                        ...tablePropsMock,
                        tableCompositeState: {predicates: [{attribute1: 'non default value'}]},
                    } as any).text()
                ).toContain(tablePropsMock.blankSlateDefault.title as string);
            });

            it('should render blankslateOnError if the table is in error and has a blankslateOnError', () => {
                const blankslateTitleOnAction = 'no results on action!';
                expect(
                    mountComponentWithProps({
                        ...tablePropsMock,
                        blankSlateOnError: {title: blankslateTitleOnAction},
                        tableCompositeState: {isInError: true},
                    } as any).text()
                ).toContain(blankslateTitleOnAction);
            });

            it('should render blankSlateDefault if the table is in error and has no blankslateOnError', () => {
                expect(
                    mountComponentWithProps({
                        ...tablePropsMock,
                        tableCompositeState: {isInError: true},
                    } as any).text()
                ).toContain(tablePropsMock.blankSlateDefault.title as string);
            });
        });
    });
});
