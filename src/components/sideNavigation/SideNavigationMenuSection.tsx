import * as React from 'react';
import {SlideY} from '../../animations/SlideY';
import {Svg} from '../svg/Svg';
import {ISideNavigationHeaderProps, SideNavigationHeader} from './SideNavigationHeader';
import {SideNavigationLoadingHeader} from './SideNavigationLoadingHeader';

export interface ISideNavigationSectionOwnProps {
    header?: ISideNavigationHeaderProps;
    expandable?: boolean;
}

export interface ISideNavigationSectionStateProps {
    expanded?: boolean;
}

export interface ISideNavigationSectionDispatchProps {
    onClick?: () => void;
}

export interface ISideNavigationSectionProps extends ISideNavigationSectionOwnProps, ISideNavigationSectionStateProps, ISideNavigationSectionDispatchProps {}

const arrowClassName = 'collapsible-arrow icon fill-white';

export class SideNavigationMenuSection extends React.Component<ISideNavigationSectionProps> {
    private handleClick() {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }

    render() {
        return (
            <div className='block navigation-menu-section'>
                {this.buildHeader()}
                <SlideY in={!(this.props.expandable && !this.props.expanded)} timeout={350}>
                    <div className='navigation-menu-section-items'>
                        {this.props.children}
                    </div>
                </SlideY>
            </div>
        );
    }

    private buildHeader(): JSX.Element {
        if (this.props.header) {
            let arrow = null;
            if (this.props.expandable) {
                arrow = this.props.expanded
                    ? <Svg svgName='arrow-top-rounded' className={arrowClassName} />
                    : <Svg svgName='arrow-bottom-rounded' className={arrowClassName} />;
            }
            return (
                <SideNavigationHeader {...this.props.header} onClick={() => this.handleClick()}>
                    {arrow}
                </SideNavigationHeader>
            );
        }
        return <SideNavigationLoadingHeader />;
    }
}
