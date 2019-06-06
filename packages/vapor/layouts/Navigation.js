import NavigationSection from './NavigationSection';
import NavigationLink from './NavigationLink';
import Info from '../resources/icons/svg/info.svg';
import Open from '../resources/icons/svg/open.svg';

const Navigation = () => {
    return (
        <nav className="navigation">
            <div className="navigation-menu">
                <ul className="navigation-menu-sections">
                    <NavigationSection
                        key="general"
                        icon={<Info />}
                        title="General Guidelines"
                        pages={[
                            <NavigationLink key="content-number" href="/general-guidelines" name="Content / Numbers" />,
                            <NavigationLink
                                key="content-ui-text-and-error-messages"
                                href="/general-guidelines#content-ui-text-and-error-messages"
                                name="Content / UI texts and error messages"
                            />,
                        ]}
                    />
                    <NavigationSection
                        key="buttons"
                        icon={<Open />}
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
