import {shallow} from 'enzyme';
import * as React from 'react';

import {Filepicker, FilepickerProps} from '../Filepicker';

describe('Filepicker', () => {
    const basicProps: FilepickerProps = {
        id: '🐟',
    };

    it('should render and unmount without throwing errors', () => {
        expect(() => {
            const filepicker = shallow(<Filepicker {...basicProps} />);
            filepicker.unmount();
        }).not.toThrow();
    });

    it('should render an input of type "file"', () => {
        const filepicker = shallow(<Filepicker {...basicProps} />)
            .children()
            .first();
        expect(filepicker.type()).toBe('input');
        expect(filepicker.prop('type')).toBe('file');
    });

    it('should render the placeholder in the input label when no file is selected', () => {
        const inputLabel = shallow(<Filepicker {...basicProps} placeholder="🔥" />)
            .children()
            .last();

        expect(inputLabel.text()).toBe('🔥');
    });
});
