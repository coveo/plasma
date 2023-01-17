import ReactModal from 'react-modal';

import {Defaults} from './Defaults.js';

describe('Defaults', () => {
    describe('APP_ELEMENT', () => {
        it('should call ReactModal.setAppElement', () => {
            const setAppElementSpy = jest.spyOn(ReactModal, 'setAppElement').mockImplementation(() => null);
            const expectedAppElement = '#app-element';

            Defaults.APP_ELEMENT = expectedAppElement;

            expect(setAppElementSpy).toHaveBeenCalledTimes(1);
            expect(setAppElementSpy).toHaveBeenCalledWith(expectedAppElement);
        });
    });
});
