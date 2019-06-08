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
                        icon={<span dangerouslySetInnerHTML={{__html: VaporSVG.svg.info.svgString}} />}
                        title="General Guidelines"
                        pages={[
                            <NavigationLink key="content-number" href="/" name="Content / Numbers" />,
                            <NavigationLink
                                key="content-ui-text-and-error-messages"
                                href="/general-guidelines#content-ui-text-and-error-messages"
                                name="Content / UI texts and error messages"
                            />,
                            <NavigationLink key="dialog" href="/general-guidelines#dialog" name="Dialog" />,
                            <NavigationLink key="messages-error" href="/general-guidelines#messages-error" name="Messages / Error" />,
                            <NavigationLink key="messages-success" href="/general-guidelines#messages-success" name="Messages / Success" />,
                            <NavigationLink key="messages-warning" href="/general-guidelines#messages-warning" name="Messages / Warning" />,
                            <NavigationLink key="hit-zones" href="/general-guidelines#hit-zones" name="Hit Zones" />,
                        ]}
                    />
                    <NavigationSection
                        key="buttons"
                        icon={<span dangerouslySetInnerHTML={{__html: VaporSVG.svg.open.svgString}} />}
                        title="Buttons"
                        pages={[
                            <NavigationLink key="overview" href="/buttons#overview" name="Overview" />,
                            <NavigationLink key="base" href="/buttons#base" name="Base" />,
                            <NavigationLink key="color-modifiers" href="/buttons#color-modifiers" name="Color modifiers" />,
                            <NavigationLink key="size-modifiers" href="/buttons#size-modifiers" name="Size modifiers" />,
                            <NavigationLink key="append-prepend" href="/buttons#append-prepend" name="Append and Prepend" />,
                            <NavigationLink key="alignment" href="/buttons#alignment" name="Alignment" />,
                        ]}
                    />

                    <NavigationSection
                        key="cards"
                        icon={(
                            <svg viewBox="0 0 20 20">
                                <path d="M2 19V1c0-.607.399-1 1-1h14c.603 0 1 .395 1 1v18c0 .605-.399.998-1 1H3c-.603 0-1-.393-1-1m2-1V2h12v16"></path><path d="M11 15a.75.75 0 0 1 0-1.061L12.939 12 11 10.061A.75.75 0 1 1 12.061 9l3 3-3 3A.75.75 0 0 1 11 15M7.939 11l-3-3 3-3A.75.75 0 1 1 9 6.061L7.061 8 9 9.939A.75.75 0 1 1 7.939 11" />
                            </svg>
                        )}
                        title="Cards"
                        pages={[
                            <NavigationLink key="flippable" href="/cards#flippable" name="Flippable" />,
                            <NavigationLink key="home" href="/cards#home" name="Home" />,
                            <NavigationLink key="logo" href="/cards#logo" name="Logo" />,
                            <NavigationLink key="limit" href="/cards#limit" name="Limit" />,
                            <NavigationLink key="material" href="/cards#material" name="Material" />,
                            <NavigationLink key="wizard" href="/cards#wizard" name="Wizard" />,
                        ]}
                    />

                    <NavigationSection
                        key="colors"
                        icon={<span className="smaller bold">rgb</span>}
                        title="Colors"
                        pages={[
                            <NavigationLink href="/colors" name="Palette" />,
                        ]}
                    />
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
