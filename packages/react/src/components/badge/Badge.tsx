import {SvgName} from '@coveord/plasma-style';
import classNames from 'classnames';
import * as React from 'react';
import {Svg} from '../svg';

export const DEFAULT_BADGE_CLASSNAME = 'badge';

interface BadgeBasicProps {
    /**
     * CSS class for the badge
     *
     */
    extraClasses?: string[];
}

interface BadgeWithLabelProps extends BadgeBasicProps {
    /**
     * The label of the badge (Required if no icon)
     */
    label: string;
}
interface BadgeWithIconProps extends BadgeBasicProps {
    /**
     * Add an icon to the badge (Required if no label)
     */
    icon: SvgName;
}

export type IBadgeProps = BadgeWithLabelProps | BadgeWithIconProps | (BadgeWithLabelProps & BadgeWithIconProps);

export class Badge extends React.Component<IBadgeProps> {
    static defaultProps: Partial<IBadgeProps> = {
        extraClasses: [],
    };

    private get isSmall(): boolean {
        return this.className.includes('mod-small');
    }

    private get className(): string {
        return classNames(DEFAULT_BADGE_CLASSNAME, this.props.extraClasses);
    }

    render() {
        return (
            <span className={this.className} aria-label="badge">
                {'icon' in this.props ? (
                    <Svg
                        svgName={this.props.icon}
                        svgClass={classNames('icon', {'mod-16': !this.isSmall, 'mod-12': this.isSmall})}
                        className={classNames({mr1: 'label' in this.props && this.props.label})}
                    />
                ) : null}
                {'label' in this.props ? <span>{this.props.label}</span> : null}
            </span>
        );
    }
}
