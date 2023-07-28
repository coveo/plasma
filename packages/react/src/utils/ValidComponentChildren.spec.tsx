import {ValidComponentChildren} from './ValidComponentChildren';

describe('ValidComponentChildren', () => {
    it('should call function for valid component', () => {
        let counter = 0;
        ValidComponentChildren.map(
            <div></div>,
            () => {
                counter++;
            },
            null,
        );

        expect(counter).toBe(1);
    });

    it('should not call function for non react node children only', () => {
        let counter = 0;
        ValidComponentChildren.map(
            'Teenage mutan ninja trouts',
            () => {
                counter++;
            },
            null,
        );

        expect(counter).toBe(0);
    });
});
