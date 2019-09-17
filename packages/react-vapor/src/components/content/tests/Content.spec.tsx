import {shallow, ShallowWrapper} from 'enzyme';
import * as React from 'react';
import {Loading} from '../../loading/Loading';
import {Content, IContentProps} from '../Content';

describe('Content', () => {
    let contentComponent: ShallowWrapper<IContentProps, any>;

    it('should render without errors', () => {
        expect(() => {
            shallow(<Content content="test" />);
        }).not.toThrow();
    });

    describe('<BoxItem /> with custom props', () => {
        const renderContent = (props: IContentProps) => {
            contentComponent = shallow(<Content {...props} />);
        };

        it('should render with a string', () => {
            renderContent({
                content: 'test',
            });
            expect(contentComponent.find('span').text()).toBe('test');
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

        it('should render with a ReactNode', () => {
            renderContent({
                content: <div>React.ion</div>,
            });
            expect(contentComponent.find('div').text()).toBe('React.ion');
        });

        it('should render with a number', () => {
            renderContent({
                content: 420,
            });
            expect(contentComponent.find('span').text()).toBe('420');
        });
    });
});
