import * as React from 'react';
import {ChromePicker, ChromePickerProps, ColorResult} from 'react-color';
import {connect} from 'react-redux';
import {isString, noop, uniqueId} from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {IDispatch} from '../../utils/ReduxUtils';
import {addInput, changeInputValue, removeInput} from '../input/InputActions';
import {InputConnected} from '../input/InputConnected';
import {InputSelectors} from '../input/InputSelectors';

export interface IColorPickerProps extends ChromePickerProps {
    id: string;
    defaultColor?: string;
}

const mapStateToProps = (state: IReactVaporState, ownProps: IColorPickerProps) => {
    const color = InputSelectors.getValue(state, {id: ownProps.id}) || ownProps.defaultColor;
    return {
        color,
    };
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IColorPickerProps) => ({
    componentDidMount: (value: string = '', valid = true, disabled = false) => {
        dispatch(addInput(ownProps.id, value, valid, disabled));
        dispatch(changeInputValue(ownProps.id, value, true));
    },
    onDestroy: () => dispatch(removeInput(ownProps.id)),
    onChangeComplete: (colorPicked: ColorResult) => {
        ownProps.onChangeComplete && ownProps.onChangeComplete(colorPicked);
        dispatch(changeInputValue(ownProps.id, colorPicked.hex, true));
    },
});

class ColorPickerDisconnected extends React.Component<IColorPickerProps & ReturnType<typeof mapDispatchToProps>> {
    static defaultProps: Partial<IColorPickerProps & ReturnType<typeof mapDispatchToProps>> = {
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

    componentDidMount() {
        if (this.props.componentDidMount) {
            this.props.componentDidMount(this.colorForInput);
        }
    }

    componentWillUnmount() {
        if (this.props.onDestroy) {
            this.props.onDestroy();
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

export const ColorPicker = connect(
    mapStateToProps,
    mapDispatchToProps
)(ColorPickerDisconnected);
