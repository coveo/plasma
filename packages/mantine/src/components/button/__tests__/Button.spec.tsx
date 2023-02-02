import {render} from '@test-utils';

import {Button} from '../Button';

describe('Button', () => {
    it('exposes a Button Group component', () => {
        expect(Button.Group).toBeDefined();
        expect(() => {
            render(<Button.Group></Button.Group>);
        }).not.toThrow();
    });
});
