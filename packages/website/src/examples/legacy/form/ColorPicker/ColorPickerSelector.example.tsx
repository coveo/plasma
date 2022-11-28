import {useSelector} from 'react-redux';
import {ColorPicker, PlasmaState, InputSelectors} from '@coveord/plasma-react';

export default () => {
    const selected = useSelector((state: PlasmaState) =>
        InputSelectors.getValue(state, {
            id: 'color-picker-id-3',
        })
    );
    return (
        <>
            <ColorPicker id="color-picker-id-3" />
            Selected value: {selected}
        </>
    );
};
