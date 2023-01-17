import {mount, ReactWrapper, shallow} from 'enzyme';
import {Title} from '../../title/Title.js';
import {BasicHeader, IBasicHeaderProps} from '../BasicHeader.js';
import {HeaderWrapper} from '../HeaderWrapper.js';

describe('<BasicHeader/>', () => {
    const defaultProps: IBasicHeaderProps = {
        title: {
            text: 'test',
        },
    };

    let basicHeaderComponent: ReactWrapper<IBasicHeaderProps, any>;

    it('should render without errors', () => {
        expect(() => {
            shallow(<BasicHeader {...defaultProps} />);
        }).not.toThrow();
    });

    describe('<Breadcrumb /> with default props', () => {
        beforeEach(() => {
            basicHeaderComponent = mount(<BasicHeader {...defaultProps} />, {attachTo: document.getElementById('App')});
        });

        afterEach(() => {
            basicHeaderComponent?.unmount();
        });

        it('should render the default title', () => {
            const titleComponent = basicHeaderComponent.find(Title);

            expect(titleComponent.length).toBe(1);
            expect(titleComponent.props().text).toBe(defaultProps.title.text);
        });

        it('should render the HeaderWrapper', () => {
            expect(basicHeaderComponent.find(HeaderWrapper).length).toBe(1);
        });
    });
});
