import {CSSProperties} from 'react';
import {DomPositionVisibilityValidator, IBoundingLimit} from '../DomPositionVisibilityValidator';
import {DropPodPosition} from '../DropPod';

describe('DomPositionVisibilityValidator', () => {
    let validator: (buttonOffset: ClientRect | DOMRect, dropOffset: ClientRect | DOMRect, boundingLimit: IBoundingLimit) => Partial<CSSProperties>;

    describe('bottom', () => {
        beforeEach(() => {
            validator = DomPositionVisibilityValidator[DropPodPosition.bottom];
        });

        it('should return an empty style object if drop target position is bigger than the max Y bounding box', () => {
            expect(validator({bottom: 100} as any, {height: 10} as any, {maxY: 90} as any)).toEqual({});
        });

        it('should return button offset bottom and left position if the drop can render on bottom with left orientation', () => {
            expect(validator({bottom: 100, left: 100} as any, {height: 10, width: 10} as any, {maxY: 200, maxX: 200} as any)).toEqual({
                top: 100,
                left: 100,
            });
        });

        it('should return button offset top and left + width position if the drop can render on bottom with right orientation', () => {
            expect(validator({bottom: 100, left: 100, right: 110, top: 90, width: 10, height: 10} as any, {height: 10, width: 10} as any, {maxY: 200, maxX: 100, minX: 10} as any)).toEqual({
                top: 90,
                left: 110,
            });
        });

        it('should return an empty style if the drop do not have space in X to render inside the bounding box', () => {
            expect(validator({bottom: 100, left: 100, right: 110, top: 90, width: 10, height: 10} as any, {height: 10, width: 1000} as any, {maxY: 200, maxX: 100, minX: 10} as any)).toEqual({});
        });
    });

    describe('top', () => {
        beforeEach(() => {
            validator = DomPositionVisibilityValidator[DropPodPosition.top];
        });

        it('should return an empty style object if drop target position is smaller than the min Y bounding box', () => {
            expect(validator({top: 50} as any, {height: 100} as any, {minY: 0} as any)).toEqual({});
        });

        it('should return the button position left if the drop can render on top with left orientation', () => {
            expect(validator({top: 100, left: 100} as any, {height: 10, width: 10} as any, {minY: 0, maxX: 200} as any)).toEqual({
                top: 90,
                left: 100,
            });
        });

        it('should return the button position right if the drop can render on top with right orientation', () => {
            expect(validator({bottom: 100, left: 100, right: 110, top: 90, width: 10, height: 10} as any, {height: 10, width: 10} as any, {maxY: 200, maxX: 100, minX: 10, minY: 10} as any)).toEqual({
                top: 80,
                left: 100,
            });
        });

        it('should return an empty style if the drop do not have space in X to render inside the bounding box', () => {
            expect(validator({bottom: 100, left: 100, right: 110, top: 90, width: 10, height: 10} as any, {height: 10, width: 1000} as any, {maxY: 200, maxX: 100, minY: 0, minX: 10} as any)).toEqual({});
        });
    });

    describe('left', () => {
        beforeEach(() => {
            validator = DomPositionVisibilityValidator[DropPodPosition.left];
        });

        it('should return an empty style object if drop target position is smaller than the min X bounding box', () => {
            expect(validator({left: 50} as any, {width: 100} as any, {minY: 0} as any)).toEqual({});
        });

        it('should return the button position top if the drop can render on left with top orientation', () => {
            expect(validator({left: 100, top: 100} as any, {height: 10, width: 10} as any, {maxY: 200, maxX: 200, minY: 0, minX: 0} as any)).toEqual({
                top: 100,
                left: 90,
            });
        });

        it('should return the button position bottom if the drop can render on left with bottom orientation', () => {
            expect(validator({left: 100, top: 100, bottom: 120} as any, {height: 10, width: 10} as any, {maxY: 110, maxX: 100, minY: 0, minX: 10} as any)).toEqual({
                top: 110,
                left: 90,
            });
        });

        it('should return an empty style if the drop do not have space in Y to render inside the bounding box', () => {
            expect(validator({left: 100, top: 100} as any, {height: 20, width: 20} as any, {maxY: 110, maxX: 200, minY: 100, minX: 0} as any)).toEqual({});
        });
    });

    describe('right', () => {
        beforeEach(() => {
            validator = DomPositionVisibilityValidator[DropPodPosition.right];
        });

        it('should return an empty style object if drop target position is bigger than the max X bounding box', () => {
            expect(validator({right: 90} as any, {width: 100} as any, {maxX: 100} as any)).toEqual({});
        });

        it('should return the button position top if the drop can render on right with top orientation', () => {
            expect(validator({right: 100, top: 100} as any, {height: 10, width: 10} as any, {maxY: 200, maxX: 200, minY: 0, minX: 0} as any)).toEqual({
                top: 100,
                left: 100,
            });
        });

        it('should return the button position bottom if the drop can render on left with bottom orientation', () => {
            expect(validator({left: 100, top: 100, bottom: 150, right: 120} as any, {height: 50, width: 20} as any, {maxY: 110, maxX: 200, minY: 0, minX: 10} as any)).toEqual({
                top: 100,
                left: 120,
            });
        });

        it('should return an empty style if the drop do not have space in Y to render inside the bounding box', () => {
            expect(validator({left: 100, right: 90, top: 100} as any, {height: 20, width: 20} as any, {maxY: 110, maxX: 200, minY: 100, minX: 0} as any)).toEqual({});
        });
    });
});
