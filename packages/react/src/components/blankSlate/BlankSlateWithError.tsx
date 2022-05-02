import {svg} from '@coveord/plasma-style';
import {ComponentClass, PureComponent} from 'react';

import {Svg} from '../svg/Svg';
import {IBlankSlateProps} from './BlankSlate';

export const blankSlateWithError = (Component: ComponentClass<IBlankSlateProps>): ComponentClass<IBlankSlateProps> => {
    class BlankSlateWithErrorComponent extends PureComponent<IBlankSlateProps> {
        render() {
            return (
                <Component
                    {...this.props}
                    title={
                        <div className="flex center-align">
                            <Svg svgName={svg.info.name} className="icon mr1 flex center-align" />
                            {this.props.title}
                        </div>
                    }
                    description={<span className="bold">{this.props.description}</span>}
                    classes={['mod-error']}
                >
                    {this.props.children}
                </Component>
            );
        }
    }

    return BlankSlateWithErrorComponent;
};
