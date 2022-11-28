import {ColorPicker} from '@coveord/plasma-react';
import {ColorResult} from 'react-color';

export default () => {
    const logColor = (color: ColorResult) => console.log(color);
    return <ColorPicker id="color-picker-id" defaultColor="#F37231" onChangeComplete={logColor} />;
};
