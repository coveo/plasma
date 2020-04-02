import {shallow} from 'enzyme';
import * as React from 'react';
import {range} from 'underscore';
import {JSXRenderable} from '../../utils/JSXUtils';
import {ISplitLayoutProps, SplitLayout, SplitLayoutMods} from './SplitLayout';

describe('SplitLayout', () => {
    const testClassesString = 'some classes';
    const testClassesArray = ['some', 'classes'];

    const basicProps: ISplitLayoutProps = {
        leftChildren: <div className="left"></div>,
        rightChildren: <div className="right"></div>,
    };

    it('should render without error with basic props and one child on each side', () => {
        expect(() => shallow(<SplitLayout {...basicProps} />)).not.toThrow();
    });

    it('should render without error with basic props and multiple children on each side', () => {
        const leftChildren = range(2).map(() => basicProps.leftChildren) as JSXRenderable;
        const rightChildren = range(2).map(() => basicProps.rightChildren) as JSXRenderable;
        expect(() => shallow(<SplitLayout leftChildren={leftChildren} rightChildren={rightChildren} />)).not.toThrow();
    });

    it('should render without error with basic props and extra classes as string on containers', () => {
        expect(() =>
            shallow(
                <SplitLayout
                    {...basicProps}
                    className={testClassesString}
                    leftContainerClassName={testClassesString}
                    rightContainerClassName={testClassesString}
                />
            )
        ).not.toThrow();
    });

    it('should render without error with basic props and extra classes as array on containers', () => {
        expect(() =>
            shallow(
                <SplitLayout
                    {...basicProps}
                    className={testClassesArray}
                    leftContainerClassName={testClassesArray}
                    rightContainerClassName={testClassesArray}
                />
            )
        ).not.toThrow();
    });

    describe('SplitLayout Content', () => {
        it('should render with a left child in first column and a right child in right column', () => {
            const splitLayout = shallow(<SplitLayout {...basicProps} />);

            expect(
                splitLayout
                    .find('.column')
                    .first()
                    .find('.left').length
            ).toBe(1);
            expect(
                splitLayout
                    .find('.column')
                    .last()
                    .find('.right').length
            ).toBe(1);
        });

        it('should render with a left child in first column and a right child in right column', () => {
            const splitLayout = shallow(<SplitLayout {...basicProps} mods={SplitLayoutMods.noBorder} />);

            expect(splitLayout.hasClass('no-border')).toBe(true);
        });

        it('should render with left children in first column and right children in right column with multiple children', () => {
            const leftChildren = range(2).map(() => basicProps.leftChildren) as JSXRenderable;
            const rightChildren = range(2).map(() => basicProps.rightChildren) as JSXRenderable;
            const splitLayout = shallow(<SplitLayout leftChildren={leftChildren} rightChildren={rightChildren} />);

            expect(
                splitLayout
                    .find('.column')
                    .first()
                    .html()
                    .match(/left/g).length
            ).toBe(2);
            expect(
                splitLayout
                    .find('.column')
                    .last()
                    .html()
                    .match(/right/g).length
            ).toBe(2);
        });

        it('should render with extra classes on container if passed in props as string', () => {
            const splitLayout = shallow(<SplitLayout {...basicProps} className={testClassesString} />);
            testClassesString.split(' ').forEach((testClass) => {
                expect(splitLayout.find('.split-layout').hasClass(testClass)).toBe(true);
            });
        });

        it('should render with extra classes on container if passed in props as array', () => {
            const splitLayout = shallow(<SplitLayout {...basicProps} className={testClassesArray} />);
            testClassesArray.forEach((testClass) => {
                expect(splitLayout.find('.split-layout').hasClass(testClass)).toBe(true);
            });
        });

        it('should render with extra classes on left children container if passed in props as string', () => {
            const splitLayout = shallow(<SplitLayout {...basicProps} leftContainerClassName={testClassesString} />);
            testClassesString.split(' ').forEach((testClass) => {
                expect(
                    splitLayout
                        .find('.column')
                        .first()
                        .hasClass(testClass)
                ).toBe(true);
            });
        });

        it('should render with extra classes on left children container if passed in props as array', () => {
            const splitLayout = shallow(<SplitLayout {...basicProps} leftContainerClassName={testClassesArray} />);
            testClassesArray.forEach((testClass) => {
                expect(
                    splitLayout
                        .find('.column')
                        .first()
                        .hasClass(testClass)
                ).toBe(true);
            });
        });

        it('should render with extra classes on right children container if passed in props as string', () => {
            const splitLayout = shallow(<SplitLayout {...basicProps} rightContainerClassName={testClassesString} />);
            testClassesString.split(' ').forEach((testClass) => {
                expect(
                    splitLayout
                        .find('.column')
                        .last()
                        .hasClass(testClass)
                ).toBe(true);
            });
        });

        it('should render with extra classes on right children container if passed in props as array', () => {
            const splitLayout = shallow(<SplitLayout {...basicProps} rightContainerClassName={testClassesArray} />);
            testClassesArray.forEach((testClass) => {
                expect(
                    splitLayout
                        .find('.column')
                        .last()
                        .hasClass(testClass)
                ).toBe(true);
            });
        });
    });
});
