import {CriticalSize24Px} from '@coveord/plasma-react-icons';
import {ComponentClass, PureComponent} from 'react';

import {IBlankSlateProps} from './BlankSlate.js';

/**
 * @deprecated Use Plasmantine Blank-slate instead
 */
export const blankSlateWithError = (Component: ComponentClass<IBlankSlateProps>): ComponentClass<IBlankSlateProps> => {
    class BlankSlateWithErrorComponent extends PureComponent<IBlankSlateProps> {
        render() {
            return (
                <Component
                    {...this.props}
                    title={
                        <div className="flex center-align">
                            <CriticalSize24Px className="mr1" />
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
