import classNames from 'classnames';
import * as React from 'react';
import {keyCode} from '../../utils';

export interface ITabNavigationProps {
    title?: string;
}

export const TabNavigation: React.FunctionComponent<React.HTMLAttributes<HTMLDivElement>> = ({
    className,
    children,
    title,
    ...divProps
}) => {
    const [currentFocus, setCurrentFocus] = React.useState(0);
    const tabListRef = React.useRef<HTMLDivElement>();
    const findTabs = () => tabListRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]:enabled');

    const moveFocus = (newFocus: number) => {
        const tabs = findTabs();
        tabs[currentFocus].setAttribute('tabindex', '-1');
        tabs[newFocus].setAttribute('tabindex', '0');
        tabs[newFocus].focus();
        setCurrentFocus(newFocus);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
        const tabs = findTabs();
        if ((event.keyCode === keyCode.rightArrow || event.keyCode === keyCode.leftArrow) && tabs) {
            if (event.keyCode === keyCode.rightArrow) {
                if (currentFocus + 1 >= tabs.length) {
                    // If we're at the end, move focus to the start
                    moveFocus(0);
                } else {
                    moveFocus(currentFocus + 1);
                }
            } else if (event.keyCode === keyCode.leftArrow) {
                if (currentFocus - 1 < 0) {
                    // If we're at the start, move focus to the end
                    moveFocus(tabs.length - 1);
                } else {
                    moveFocus(currentFocus - 1);
                }
            }
        }
    };

    return (
        <div
            {...divProps}
            className={classNames('tab-navigation', className)}
            role="tablist"
            aria-label={title}
            onKeyDown={handleKeyDown}
            ref={tabListRef}
        >
            {children}
        </div>
    );
};
