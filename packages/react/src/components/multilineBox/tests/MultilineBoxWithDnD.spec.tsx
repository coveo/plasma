import * as React from 'react';
import * as _ from 'underscore';
import {RTestUtils} from '../../../utils/tests/RTestUtils';
import {DnDContainer} from '../../dragAndDrop/DnDContainer';
import {DnDUtils} from '../../dragAndDrop/DnDUtils';
import {multilineBoxWithDnD} from '../hoc/MultilineBoxWithDnD';
import {MultilineBox} from '../MultilineBox';

describe('Multiline box with drag & drop', () => {
    describe('<MultilineBoxWithDnD/>', () => {
        const DefaultMultilineBoxWithDnD = _.compose(multilineBoxWithDnD())(MultilineBox);

        const id = 'multiline-box';

        beforeAll(() => {
            RTestUtils.mockTagContext();
        });

        it('should mount without errors', () => {
            expect(() => {
                RTestUtils.renderComponent(DefaultMultilineBoxWithDnD, {
                    id,
                    data: [],
                });
            }).not.toThrow();
        });

        it('should unmount without errors', () => {
            const view = RTestUtils.renderComponent(DefaultMultilineBoxWithDnD, {
                id,
                data: [],
            });

            expect(() => {
                view.wrapper.unmount();
            }).not.toThrow();
        });

        it('should not throw if the renderBody is not defined', () => {
            expect(() => {
                RTestUtils.renderComponent(DefaultMultilineBoxWithDnD, {
                    id,
                    data: [],
                });
            }).not.toThrow();
        });

        it('should use the default renderBody if defined', () => {
            const view = RTestUtils.renderComponent(DefaultMultilineBoxWithDnD, {
                id,
                data: [],
                renderBody: () => <div className="pick-me" />,
            });

            expect(view.wrapper.find('.pick-me').length).toBe(1);
        });

        describe('once rendered', () => {
            it('should dispatch a reorder action on onReorder', () => {
                const view: any = RTestUtils.renderComponent(DefaultMultilineBoxWithDnD, {
                    id,
                    data: [],
                });

                view.wrapper.find(MultilineBox).props().onReorder(['a']);

                expect(view.store.getState().multilineIds[id].list).toEqual(['a']);
            });

            it('should call the DnDUtils move function on props move set on DnDContainer', () => {
                const spy = jest.spyOn(DnDUtils, 'move').mockImplementation(() => []);

                const view: any = RTestUtils.renderComponent(DefaultMultilineBoxWithDnD, {
                    id,
                    data: [],
                });

                view.wrapper.find(DnDContainer).props().move();

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
                })
            )(MultilineBox);

            it('should add props on DnDContainer if added in the supplier for the hoc', () => {
                const view: any = RTestUtils.renderComponent(CustomMultilineBoxWithDnD, {
                    id,
                    data: [],
                });

                expect(view.wrapper.find('.select-me-plz').length).toBe(1);
            });
        });
    });
});
