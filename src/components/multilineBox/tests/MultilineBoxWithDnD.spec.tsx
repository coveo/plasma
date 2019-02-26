import * as React from 'react';
import * as _ from 'underscore';
import {RTestUtils} from '../../../utils/tests/RTestUtils';
import {DnDContainer} from '../../dragAndDrop/DnDContainer';
import {DnDUtils} from '../../dragAndDrop/DnDUtils';
import {multilineBoxWithDnD} from '../hoc/MultilineBoxWithDnD';
import {MultilineBox} from '../MultilineBox';

describe('Multiline box with drag & drop', () => {
    describe('<MultilineBoxWithDnD/>', () => {

        const DefaultMultilineBoxWithDnD = _.compose(
            multilineBoxWithDnD(),
        )(MultilineBox);

        const id = 'multiline-box';

        beforeAll(() => {
            RTestUtils.mockTagContext();
        });

        it('should mount without errors', () => {
            expect(() => {
                RTestUtils.renderComponent(DefaultMultilineBoxWithDnD, {
                    id,
                    data: [],
                    renderBody: () => <div></div>,
                    defaultProps: {},
                });
            }).not.toThrow();
        });

        it('should unmount without errors', () => {
            const component = RTestUtils.renderComponent(DefaultMultilineBoxWithDnD, {
                id,
                data: [],
                renderBody: () => <div></div>,
                defaultProps: {},
            });

            expect(() => {
                component.ret.unmount();
            }).not.toThrow();
        });

        it('should use the default renderBody if not defined', () => {
            expect(() => {
                RTestUtils.renderComponent(DefaultMultilineBoxWithDnD, {
                    id,
                    data: [],
                    defaultProps: {},
                });
            }).not.toThrow();
        });

        describe('once rendered', () => {

            it('should dispatch a reorder action on onReorder', () => {
                const component: any = RTestUtils.renderComponent(DefaultMultilineBoxWithDnD, {
                    id,
                    data: [],
                    renderBody: () => <div></div>,
                    defaultProps: {},
                });

                component.ret.find(MultilineBox).props().onReorder(['a']);

                expect(component.store.getState().multilineIds[id].list).toEqual(['a']);
            });

            it('should call the DnDUtils move function on props move set on DnDContainer', () => {
                const spy = spyOn(DnDUtils, 'move').and.returnValue([]);

                const component: any = RTestUtils.renderComponent(DefaultMultilineBoxWithDnD, {
                    id,
                    data: [],
                    renderBody: () => <div></div>,
                    defaultProps: {},
                });

                component.ret.find(DnDContainer).props().move();

                expect(spy).toHaveBeenCalledTimes(1);
            });
        });

        describe('with supplier', () => {

            const CustomMultilineBoxWithDnD = _.compose(
                multilineBoxWithDnD({
                    DnDContainerProps: {
                        draggableContainerProps: {
                            className: 'select-me-plz',
                        },
                    },
                }),
            )(MultilineBox);

            it('should add props on DnDContainer if added in the supplier for the hoc', () => {
                const component: any = RTestUtils.renderComponent(CustomMultilineBoxWithDnD, {
                    id,
                    data: [],
                    renderBody: () => <div></div>,
                    defaultProps: {},
                });

                expect(component.ret.find('.select-me-plz').length).toBe(1);
            });
        });
    });
});
