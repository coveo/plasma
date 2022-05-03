import {Icon} from '@coveord/plasma-react-icons';
import classNames from 'classnames';
import {Component} from 'react';

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
    icon: Icon;
}

export type IBadgeProps = BadgeWithLabelProps | BadgeWithIconProps | (BadgeWithLabelProps & BadgeWithIconProps);

export class Badge extends Component<IBadgeProps> {
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
                    <this.props.icon
                        height={this.isSmall ? 14 : 18}
                        className={classNames({mr1: 'label' in this.props && this.props.label})}
                    />
                ) : null}
                {'label' in this.props ? <span>{this.props.label}</span> : null}
            </span>
        );
    }
}
