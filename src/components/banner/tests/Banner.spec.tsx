import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import {Banner, BannerMessageStates, BannerProps} from '../Banner';
import * as styles from '../styles/Banner.scss';

describe('Banner', () => {
    const basicProps: BannerProps = {
        name: 'some name',
    };
    let banner: ReactWrapper<BannerProps>;

    it('should render without errors', () => {
        expect(() => {
            shallow(<Banner {...basicProps} />);
        }).not.toThrow();
    });

    describe('<Banner />', () => {
        const mountWithProps = (props?: Partial<BannerProps>) => {
            banner = mount(
                <Banner {...basicProps} {...props} />,
                {attachTo: document.getElementById('App')},
            );
        };

        beforeEach(() => {
            mountWithProps();
        });

        afterEach(() => {
            banner.unmount();
            banner.detach();
        });

        it('should get the props correctly', () => {
            const props: Partial<BannerProps> = {
                nameSubtitle: 'jhdkj',
                messageTitle: 'hsjkashk',
                messageState: 'a',
                alignCenter: true,
                topRightInfos: <div>Help</div>,
                bottomRightInfos: <div></div>,
            };
            mountWithProps(props);

            const bannerProps = banner.props();
            expect(bannerProps.name).toBe(basicProps.name);
            expect(bannerProps.nameSubtitle).toBe(props.nameSubtitle);
            expect(bannerProps.messageTitle).toBe(props.messageTitle);
            expect(bannerProps.messageState).toBe(props.messageState);
            expect(bannerProps.alignCenter).toBe(props.alignCenter);
            expect(bannerProps.topRightInfos).toBe(props.topRightInfos);
            expect(bannerProps.bottomRightInfos).toBe(props.bottomRightInfos);
        });

        it('should have the class "center" if the prop alignCenter is set', () => {
            expect(banner.find('.center').length).toBe(0);

            mountWithProps({alignCenter: true});

            expect(banner.find('.center').length).toBe(1);
        });

        it('should have the class styles.bannerWarningTitle on the title if messageCondition is set to Warning', () => {
            expect(banner.find(`.${styles.bannerWarningTitle}`).length).toBe(0);

            mountWithProps({messageState: BannerMessageStates.Warning, messageTitle: 'something'});

            expect(banner.find(`.${styles.bannerWarningTitle}`).length).toBe(1);
        });

        it('should have the class styles.bannerErrorTitle on the title if messageCondition is set to Error', () => {
            expect(banner.find(`.${styles.bannerErrorTitle}`).length).toBe(0);

            mountWithProps({messageState: BannerMessageStates.Error, messageTitle: 'something'});

            expect(banner.find(`.${styles.bannerErrorTitle}`).length).toBe(1);
        });

        it('should display a <h2> if there is a nameSubtitle', () => {
            expect(banner.find('h2').length).toBe(0);

            mountWithProps({nameSubtitle: 'something'});

            expect(banner.find('h2').length).toBe(1);
        });

        it('should display a bannerRight if there are some topRightInfos or bottomRightInfos', () => {
            expect(banner.find(`.${styles.bannerRight}`).length).toBe(0);

            mountWithProps({topRightInfos: <div></div>});

            expect(banner.find(`.${styles.bannerRight}`).length).toBe(1);

            mountWithProps({topRightInfos: <div></div>, bottomRightInfos: <div></div>});

            expect(banner.find(`.${styles.bannerRight}`).length).toBe(2);
        });

        it('should display a <h3> if there is a messageTitle', () => {
            expect(banner.find('h3').length).toBe(0);

            mountWithProps({messageTitle: 'something'});

            expect(banner.find('h3').length).toBe(1);
        });

        it('should display a bannerDescription if there are children', () => {
            expect(banner.find(`.${styles.bannerDescription}`).length).toBe(0);

            banner = mount(
                <Banner {...basicProps}>I am a child!</Banner>,
                {attachTo: document.getElementById('App')},
            );

            expect(banner.find(`.${styles.bannerDescription}`).length).toBe(1);
        });

        it('should display a bannerWarningIcon if the messageState is either set to Warning or Error', () => {
            expect(banner.find(`.${styles.bannerWarningIcon}`).length).toBe(0);

            mountWithProps({messageTitle: 'something', messageState: BannerMessageStates.Warning});

            expect(banner.find(`.${styles.bannerWarningIcon}`).length).toBe(1);

            mountWithProps({messageTitle: 'something', messageState: BannerMessageStates.Error});

            expect(banner.find(`.${styles.bannerWarningIcon}`).length).toBe(1);
        });
    });
});
