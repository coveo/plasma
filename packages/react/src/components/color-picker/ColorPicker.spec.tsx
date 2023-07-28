import {render, screen} from '@test-utils';
import {FunctionComponent} from 'react';
import {useSelector} from 'react-redux';

import {PlasmaState} from '../../PlasmaState';
import {InputSelectors} from '../input';
import {ColorPicker} from './ColorPicker';

describe('ColorPicker', () => {
    it('should mount and unmount without error', () => {
        expect(() => {
            const {unmount} = render(<ColorPicker id="🆔" />);
            unmount();
        }).not.toThrow();
    });

    it('should render a ChromeColorPicker', () => {
        const {container} = render(<ColorPicker id="🆔" />);

        // eslint-disable-next-line testing-library/no-container
        expect(container.querySelector('.chrome-picker')).toBeVisible();
    });

    it('should sync the default color to the redux state', () => {
        const Child: FunctionComponent = () => {
            const selected = useSelector((state: PlasmaState) =>
                InputSelectors.getValue(state, {
                    id: 'foo',
                }),
            );
            return <div>Selected:{selected}</div>;
        };
        render(
            <>
                <ColorPicker id="foo" defaultColor="#abc" />
                <Child />
            </>,
        );

        expect(screen.getByText('Selected:#abc')).toBeVisible();
    });
});
