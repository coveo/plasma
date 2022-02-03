import * as React from 'react';
import {ChromePicker, ChromePickerProps, ColorResult} from 'react-color';
import {connect} from 'react-redux';
import {isString, noop, uniqueId} from 'underscore';
import {PlasmaState} from '../../PlasmaState';
import {IDispatch} from '../../utils/ReduxUtils';
import {changeInputValue} from '../input/InputActions';
import {InputConnected} from '../input/Input';
import {InputSelectors} from '../input/InputSelectors';

export interface IColorPickerProps extends ChromePickerProps {
    id: string;
    defaultColor?: string;
}

const mapStateToProps = (state: PlasmaState, ownProps: IColorPickerProps) => {
    const color = InputSelectors.getValue(state, {id: ownProps.id}) || ownProps.defaultColor;
    return {
        color,
    };
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IColorPickerProps) => ({
    onChangeComplete: (colorPicked: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => {
        ownProps.onChangeComplete?.(colorPicked, event);
        dispatch(changeInputValue(ownProps.id, colorPicked.hex, true));
    },
});

class ColorPickerDisconnected extends React.Component<
    IColorPickerProps & ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>
> {
    static defaultProps = {
        id: uniqueId('colorpicker'),
        onChangeComplete: noop as any,
    };

    get colorForInput() {
        if (this.props.color && isString(this.props.color)) {
            return this.props.color;
        }

        if (this.props.defaultColor) {
            return this.props.defaultColor;
        }
    }

    render() {
        return (
            <>
                <ChromePicker {...this.props} />
                <InputConnected
                    id={this.props.id}
                    style={{display: 'none'}}
                    defaultValue={this.colorForInput}
                    value={this.colorForInput}
                />
            </>
        );
    }
}

export const ColorPicker = connect<
    ReturnType<typeof mapStateToProps>,
    ReturnType<typeof mapDispatchToProps>,
    IColorPickerProps
>(
    mapStateToProps,
    mapDispatchToProps
)(ColorPickerDisconnected as any);
