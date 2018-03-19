import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import {Loading} from '../../loading/Loading';
import {ISvgProps, Svg} from '../../svg/Svg';
import {Content, IContentProps} from '../Content';

describe('Content', () => {

    let contentComponent: ReactWrapper<IContentProps, any>;
    const svg: ISvgProps = {
        svgName: 'domain-google',
        svgClass: 'icon',
    };

    it('should render without errors', () => {
        expect(() => {
            shallow(<Content
                content='test'
            />);
        }).not.toThrow();
    });

    describe('<BoxItem /> with custom props', () => {

        const renderContent = (props: IContentProps) => {
            contentComponent = mount(
                <Content {...props} />,
                {attachTo: document.getElementById('App')},
            );
        };

        it('should render with a string', () => {
            renderContent({
                content: 'test',
            });
            expect(contentComponent.find('span').text()).toBe('test');
        });

        it('should render with a function that returns <Svg/>', () => {
            renderContent({
                content: () => <Svg {...svg} />,
            });
            expect(contentComponent.find(Svg).length).toBe(1);
        });

        it('should render with a component <Loading/>', () => {
            renderContent({
                content: Loading,
            });
            expect(contentComponent.find(Loading).length).toBe(1);
        });

        it('should render with an custom tag div', () => {
            renderContent({
                content: 'test',
                tag: 'div',
            });
            expect(contentComponent.find('div').text()).toBe('test');
        });
    });
});
