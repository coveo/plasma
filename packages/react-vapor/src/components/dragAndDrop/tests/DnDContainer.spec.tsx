import * as React from 'react';
import {RTestUtils} from '../../../utils/tests/RTestUtils';
import {DnDContainer} from '../DnDContainer';

describe('DnDContainer', () => {
    const id = 'im an id, OK!!';

    describe('<DnDContainer />', () => {
        it('should mount without errors', () => {
            expect(() => {
                RTestUtils.renderComponent(DnDContainer, {
                    id,
                });
            }).not.toThrow();
        });

        it('should unmount without errors', () => {
            const component = RTestUtils.renderComponent(DnDContainer, {
                id,
            });

            expect(() => {
                component.wrapper.unmount();
            }).not.toThrow();
        });

        describe('once rendered', () => {
            describe('icon to drag and drop', () => {
                it('should set additional props on draggable icon if draggableIconProps is defined', () => {
                    const component = RTestUtils.renderComponent(DnDContainer, {
                        id,
                        draggableIconProps: {className: 'select-me'},
                        isDraggable: false,
                    });

                    expect(component.wrapper.find('.select-me').length).toBe(1);
                });

                it('should set visibility to hidden on svg wrapper if the isDraggable is set to false', () => {
                    const component = RTestUtils.renderComponent(DnDContainer, {
                        id,
                        draggableIconProps: {className: 'select-me'},
                        isDraggable: false,
                    });

                    expect(component.wrapper.find('.select-me').props().style.visibility).toBe('hidden');
                });

                it('should set visibility to visible on svg wrapper if the isDraggable is set to true', () => {
                    const component = RTestUtils.renderComponent(DnDContainer, {
                        id,
                        draggableIconProps: {className: 'select-me'},
                        isDraggable: true,
                    });

                    expect(component.wrapper.find('.select-me').props().style.visibility).toBe('visible');
                });

                it('should set cursor to default on svg wrapper if the isDraggable is set to false', () => {
                    const component = RTestUtils.renderComponent(DnDContainer, {
                        id,
                        draggableIconProps: {className: 'select-me'},
                        isDraggable: false,
                    });

                    expect(component.wrapper.find('.select-me').props().style.cursor).toBe('default');
                });

                it('should set cursor to move on svg wrapper if the isDraggable is set to true', () => {
                    const component = RTestUtils.renderComponent(DnDContainer, {
                        id,
                        draggableIconProps: {className: 'select-me'},
                        isDraggable: true,
                    });

                    expect(component.wrapper.find('.select-me').props().style.cursor).toBe('move');
                });

                it('should set the icon if defined as prop', () => {
                    const component = RTestUtils.renderComponent(DnDContainer, {
                        id,
                        icon: <div className="select-me">test</div>,
                    });

                    expect(component.wrapper.find('.select-me').length).toBe(1);
                });
            });

            describe('drag and drop content', () => {
                it('should set additional props on draggable container if draggableContainerProps is defined', () => {
                    const component = RTestUtils.renderComponent(DnDContainer, {
                        id,
                        draggableContainerProps: {className: 'select-me'},
                    });

                    expect(component.wrapper.find('.select-me').length).toBe(1);
                });

                it('should render a clone of the child with its own props', () => {
                    const props = {className: 'test'};

                    const component = RTestUtils.renderComponent(DnDContainer, {
                        id,
                        child: <div {...props} />,
                    });

                    expect(component.wrapper.find(`.${props.className}`).props()).toEqual(props);
                });
            });
        });
    });
});
