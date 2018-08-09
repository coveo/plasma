import * as React from 'react';
import * as classNames from 'classnames';
import * as _ from 'underscore';

import * as styles from './styles/Banner.scss';
import {Svg} from '../svg/Svg';

export interface BannerProps {
    name: string;
    nameSubtitle?: string;
    messageTitle?: string;
    messageDescription?: React.ReactNode;
    messageState?: string;
    alignCenter?: boolean;
    topRightInfos?: React.ReactNode;
    bottomRightInfos?: React.ReactNode;
}

export const BannerMessageStates = {
    Normal: 'normal',
    Warning: 'warning',
    Error: 'error',
};

export class Banner extends React.PureComponent<BannerProps> {
    static defaultProps: Partial<BannerProps> = {
        messageState: BannerMessageStates.Normal,
    };

    render() {
        const mainClasses: string = classNames(
            styles.bannerMain,
            {
                center: this.props.alignCenter,
            },
        );
        const titleClasses: string = classNames(
            styles.bannerTitle,
            {
                [styles.bannerWarningTitle]: this.props.messageState === BannerMessageStates.Warning,
                [styles.bannerErrorTitle]: this.props.messageState === BannerMessageStates.Error,
            },
        );
        return (
            <div className={styles.banner}>
                <div className={styles.bannerTop}>
                    <div>
                        <h1 className={styles.bannerName}>{this.props.name}</h1>
                        {this.props.nameSubtitle && <h2 className={styles.bannerSubtitle}>{this.props.nameSubtitle}</h2>}
                    </div>
                    {this.props.topRightInfos && <div className={styles.bannerRight}>{this.props.topRightInfos}</div>}
                </div>
                <div className={mainClasses}>
                    {this.props.messageTitle && <h3 className={titleClasses}>{this.getTitleSvg()}{this.props.messageTitle}</h3>}
                    {this.props.messageDescription && <div className={styles.bannerDescription}>{this.props.messageDescription}</div>}
                </div>
                {this.props.bottomRightInfos && <div className={classNames(styles.bannerRight, 'right-align')}>
                    <div className={styles.bannerBottomRightInfos}>{this.props.bottomRightInfos}</div>
                </div>}
            </div>
        );
    }

    private getTitleSvg(): JSX.Element {
        if (_.contains([BannerMessageStates.Warning, BannerMessageStates.Error], this.props.messageState)) {
            return <Svg svgName='info' svgClass='icon mx1' className={styles.bannerWarningIcon} />;
        }
    }
}
