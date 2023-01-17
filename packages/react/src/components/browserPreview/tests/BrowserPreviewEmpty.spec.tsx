import {render, screen} from '@test-utils';
import {mount, ReactWrapper, shallow} from 'enzyme';
import {ReactNode} from 'react';

import {BrowserPreviewEmpty, BrowserPreviewEmptyProps} from '../BrowserPreviewEmpty.js';

describe('BrowserPreviewEmpty', () => {
    let component: ReactWrapper<BrowserPreviewEmptyProps>;
    const defaultProps: BrowserPreviewEmptyProps = {
        onClick: jest.fn(),
    };

    const mountWithProps = (props: BrowserPreviewEmptyProps, children?: ReactNode) => {
        component = mount(<BrowserPreviewEmpty {...props}>{children}</BrowserPreviewEmpty>);
    };

    it('renders without errors', () => {
        expect(() => {
            shallow(<BrowserPreviewEmpty />);
        }).not.toThrow();
    });

    it('has cursor-pointer class if the content is clickable', () => {
        mountWithProps(defaultProps);

        expect(component.find('.browser-preview__state').hasClass('cursor-pointer')).toBeTruthy();
    });

    it('does not have cursor-pointer class if onClick prop is undefined', () => {
        mountWithProps({onClick: undefined});

        expect(component.find('.browser-preview__state').hasClass('cursor-pointer')).toBeFalsy();
    });

    it('calls the onClick prop when clicking on the content', () => {
        mountWithProps(defaultProps);
        component.find('.browser-preview__state').simulate('click');

        expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
    });

    it('renders a Svg as child by default', async () => {
        render(<BrowserPreviewEmpty />);

        expect(await screen.findByRole('img', {name: /undo/i})).toBeInTheDocument();
    });

    it('renders the specified node instead of the default image', () => {
        const image = <img src="fake" />;
        mountWithProps({...defaultProps, image});

        expect(component.find('img[src*="fake"]').exists()).toBe(true);
    });

    it('renders the specified description as child', () => {
        const description = '💖';
        mountWithProps(defaultProps, description);

        expect(component.find('.browser-preview__state').childAt(1).text()).toEqual(description);
    });
});
