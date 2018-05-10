import * as React from 'react';
import {Svg} from '../../svg/Svg';

export interface ISelectedOptionProps {
    value: string;
    label: string;
    onRemoveClick?: (value: string) => void;
    key: string;
}

export class SelectedOption extends React.Component<ISelectedOptionProps, any> {

    handleOnRemove() {
        if (this.props.onRemoveClick) {
            this.props.onRemoveClick(this.props.value);
        }
    }

    render() {
        return (
            <div className='selected-option' >

                <div className='selected-option-value'>
                    {this.props.label}
                </div>

                <div className='remove-option' onClick={() => this.handleOnRemove()} >
                    <Svg svgName='clear' svgClass='icon fill-medium-blue mod-small' />
                </div>
            </div>
        );
    }
}
