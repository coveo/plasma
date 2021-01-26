import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';
import {Svg} from '../svg/Svg';
import {IBlankSlateProps} from './BlankSlate';

export const blankSlateWithError = (
    Component: React.ComponentClass<IBlankSlateProps>
): React.ComponentClass<IBlankSlateProps> => {
    class BlankSlateWithErrorComponent extends React.PureComponent<IBlankSlateProps> {
        render() {
            return (
                <Component
                    {...this.props}
                    title={
                        <div className="text-orange-8 flex center-align">
                            <Svg svgName={VaporSVG.svg.info.name} className="icon mr1 flex center-align" />
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
