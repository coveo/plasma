import * as VaporSVG from 'coveo-styleguide';
import Svg from '../Svg';

export default function Navigation() {
    return (
        <nav className="navigation ml1">
            <div className="navigation-menu" style={{maxHeight: 300}}>
                <ul className="navigation-menu-sections">
                    <li className="block navigation-menu-section">
                        <header className="navigation-menu-section-header">
                            <Svg
                                name={VaporSVG.svg.menuContent.name}
                                className="navigation-menu-section-header-icon icon fill-white mod-lg"
                            />
                            Section 1
                            <Svg
                                name={VaporSVG.svg.arrowBottomRounded.name}
                                className="collapsible-arrow icon fill-white open"
                            />
                        </header>
                        <ul className="navigation-menu-section-items">
                            <li className="navigation-menu-section-item state-active">
                                <a href="#" className="block navigation-menu-section-item-link">
                                    Super Item 1
                                </a>
                            </li>
                            <li className="navigation-menu-section-item">
                                <a href="#" className="block navigation-menu-section-item-link">
                                    Item 2
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="block navigation-menu-section">
                        <header className="navigation-menu-section-header">
                            <Svg
                                name={VaporSVG.svg.menuContent.name}
                                className="navigation-menu-section-header-icon icon fill-white mod-lg"
                            />
                            Section Collapsed
                            <Svg
                                name={VaporSVG.svg.arrowTopRounded.name}
                                className="collapsible-arrow icon fill-white"
                            />
                        </header>
                        <ul className="navigation-menu-section-items hide" />
                    </li>
                    <li className="block navigation-menu-section">
                        <header className="navigation-menu-section-header">
                            <Svg
                                name={VaporSVG.svg.menuContent.name}
                                className="navigation-menu-section-header-icon icon fill-white mod-lg"
                            />
                            Section 3
                            <Svg
                                name={VaporSVG.svg.arrowBottomRounded.name}
                                className="collapsible-arrow icon fill-white"
                            />
                        </header>
                        <ul className="navigation-menu-section-items">
                            <li className="navigation-menu-section-item">
                                <a href="#" className="block navigation-menu-section-item-link">
                                    Item 1
                                </a>
                            </li>
                            <li className="navigation-menu-section-item">
                                <a
                                    href="#"
                                    className="block navigation-menu-section-item-link state-locked"
                                    title="This menu item is locked."
                                >
                                    Item 2
                                    <Svg
                                        name={VaporSVG.svg.lock.name}
                                        className="navigation-menu-section-item-link-icon"
                                        svgClass="icon mod-lg fill-white"
                                    />
                                </a>
                            </li>
                            <li className="navigation-menu-section-item">
                                <a href="#" className="block navigation-menu-section-item-link">
                                    Item 3
                                </a>
                            </li>
                            <li className="navigation-menu-section-item">
                                <a href="#" className="block navigation-menu-section-item-link">
                                    Item with tag<span className="navigation-tag">new</span>
                                </a>
                            </li>
                            <li className="navigation-menu-section-item">
                                <a
                                    href="#"
                                    className="block navigation-menu-section-item-link state-locked"
                                    title="This menu item is locked."
                                >
                                    Locked/Tagged
                                    <span className="navigation-tag">new</span>
                                    <Svg
                                        name={VaporSVG.svg.lock.name}
                                        className="navigation-menu-section-item-link-icon"
                                        svgClass="icon mod-lg fill-white"
                                    />
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
