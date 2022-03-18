import * as React from 'react';
import {ChromePicker, ChromePickerProps, ColorChangeHandler, ColorResult} from 'react-color';
import {useDispatch} from 'react-redux';
import {uniqueId} from 'underscore';
import {IDispatch} from '../../utils/ReduxUtils';
import {changeInputValue} from '../input/InputActions';
import {InputConnected} from '../input/Input';

export interface IColorPickerProps extends ChromePickerProps {
    /**
     * Id of the element
     */
    id: string;
    /**
     * Hex value of the color
     */
    defaultColor?: string;
}

export const ColorPicker: React.FunctionComponent<IColorPickerProps> = ({
    id = uniqueId('colorpicker'),
    defaultColor = '#000',
    onChangeComplete,
    onChange,
    ...props
}) => {
    const [color, setColor] = React.useState(defaultColor);
    const dispatch: IDispatch = useDispatch();

    React.useEffect(() => {
        // sync the state on the first render
        dispatch(changeInputValue(id, defaultColor, true));
    }, []);

    const onColorChange: ColorChangeHandler = (colorChanged, event) => {
        setColor(colorChanged.hex);
        onChange?.(colorChanged, event);
    };

    const onUpdate: ColorChangeHandler = React.useCallback(
        (colorPicked: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => {
            onChangeComplete?.(colorPicked, event);
            dispatch(changeInputValue(id, colorPicked.hex, true));
        },
        []
    );

    return (
        <>
            <ChromePicker {...props} color={color} onChange={onColorChange} onChangeComplete={onUpdate} />
            <InputConnected id={id} style={{display: 'none'}} defaultValue={defaultColor} />
        </>
    );
};
