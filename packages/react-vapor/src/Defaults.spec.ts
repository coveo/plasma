import ReactModal from 'react-modal';

import {Defaults} from './Defaults';

jest.mock('react-modal');

describe('Defaults', () => {
    describe('APP_ELEMENT', () => {
        it('should call ReactModal.setAppElement', () => {
            const expectedAppElement = '#app-element';

            Defaults.APP_ELEMENT = expectedAppElement;

            expect(ReactModal.setAppElement).toHaveBeenCalledTimes(1);
            expect(ReactModal.setAppElement).toHaveBeenCalledWith(expectedAppElement);
        });
    });
});
