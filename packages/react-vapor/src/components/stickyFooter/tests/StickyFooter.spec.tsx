import {shallow} from 'enzyme';
import * as React from 'react';
import {StickyFooter} from '../StickyFooter';
import * as styles from '../StickyFooter.scss';

describe('StickyFooter', () => {
    it('should render without error', () => {
        expect(() => shallow(<StickyFooter isOpened={true} />)).not.toThrow();
        expect(() => shallow(<StickyFooter isOpened={false} />)).not.toThrow();
        expect(() => shallow(<StickyFooter className="someclass" isOpened={true} />)).not.toThrow();
        expect(() => shallow(<StickyFooter id="oyeah" isOpened={true} />)).not.toThrow();
    });

    it('should render with extra classes on container if classes is passed as prop', () => {
        const classes = 'some classes';
        const component = shallow(<StickyFooter className={classes} isOpened={true} />);
        expect(component.find('.some.classes').exists()).toBe(true);
    });

    it('should render with id if passed as prop', () => {
        const id = 'someid';
        const component = shallow(<StickyFooter id={id} isOpened={true} />);
        expect(component.find(`#${id}`).exists()).toBe(true);
    });

    it('should render opened class if it is opened', () => {
        const component = shallow(<StickyFooter isOpened={true} />);
        expect(component.find('#StickyFooter').hasClass(styles.stickyFooterOpened)).toBe(true);
    });

    it('should not render opened class if it is closed', () => {
        const component = shallow(<StickyFooter isOpened={false} />);
        expect(component.find('#StickyFooter').hasClass(styles.stickyFooterOpened)).toBe(false);
    });
});
