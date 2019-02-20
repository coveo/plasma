import * as ReactModal from 'react-modal';

import {Defaults} from './Defaults';

describe('Defaults', () => {
    class DumbClassForCoverage extends Defaults {}

    describe('APP_ELEMENT', () => {
        it('should call ReactModal.setAppElement', () => {
            const expectedAppElement = '#app-element';
            const setAppElementSpy = spyOn(ReactModal, 'setAppElement');

            Defaults.APP_ELEMENT = expectedAppElement;
            expect(setAppElementSpy).toHaveBeenCalledTimes(1);
            expect(setAppElementSpy).toHaveBeenCalledWith(expectedAppElement);
        });

        it('should satisfy coverage', () => {
            new DumbClassForCoverage();
        });
    });
});
