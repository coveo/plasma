import {mount, ReactWrapper, shallow} from 'enzyme';

import {Svg} from '../../svg';
import {BrowserPreviewError, BrowserPreviewErrorProps} from '../BrowserPreviewError';

describe('BrowserPreviewError', () => {
    let component: ReactWrapper<BrowserPreviewErrorProps>;
    const defaultProps: BrowserPreviewErrorProps = {
        onClick: vi.fn(),
        description: '💖',
        errorMessage: '😮',
    };

    const mountWithProps = (props: BrowserPreviewErrorProps) => {
        component = mount(<BrowserPreviewError {...props} />);
    };

    it('renders without errors', () => {
        expect(() => {
            shallow(<BrowserPreviewError />);
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

    it('renders a Svg as child', () => {
        mountWithProps(defaultProps);

        expect(component.find('.browser-preview__state').childAt(0).find(Svg)).toBeTruthy();
    });

    it('renders the specified description as child', () => {
        mountWithProps(defaultProps);

        expect(component.find('.browser-preview__state').childAt(1).text()).toEqual(defaultProps.description);
    });

    it('renders an error message if defined', () => {
        mountWithProps(defaultProps);

        expect(component.find('.browser-preview__state').childAt(2).text()).toEqual(defaultProps.errorMessage);
    });
});
