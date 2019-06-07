import NavigationSection from './NavigationSection';
import NavigationLink from './NavigationLink';
import * as VaporSVG from 'coveo-styleguide';

const Navigation = () => {
    return (
        <nav className="navigation">
            <div className="navigation-menu">
                <ul className="navigation-menu-sections">
                    <NavigationSection
                        key="general"
                        icon={<span dangerouslySetInnerHTML={{__html: VaporSVG.svgEnum.info.svgString}} />}
                        title="General Guidelines"
                        pages={[
                            <NavigationLink key="content-number" href="/" name="Content / Numbers" />,
                            <NavigationLink
                                key="content-ui-text-and-error-messages"
                                href="/general-guidelines#content-ui-text-and-error-messages"
                                name="Content / UI texts and error messages"
                            />,
                        ]}
                    />
                    <NavigationSection
                        key="buttons"
                        icon={<span dangerouslySetInnerHTML={{__html: VaporSVG.svgEnum.open.svgString}} />}
                        title="Buttons"
                        pages={[
                            <NavigationLink key="overview" href="/buttons#overview" name="Overview" />,
                            <NavigationLink key="base" href="/buttons#base" name="Base" />,
                        ]}
                    />
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
