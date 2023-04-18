import {ColorPicker} from '@coveord/plasma-react';
import {ColorResult} from 'react-color';

const Demo = () => {
    const logColor = (color: ColorResult) => console.log(color);
    return <ColorPicker id="color-picker-id" defaultColor="#F37231" onChangeComplete={logColor} />;
};
export default Demo;
