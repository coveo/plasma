import * as React from 'react';
import {TextLoadingPlaceholder} from '../loading/components/TextLoadingPlaceholder';

interface TableRowNumberHeaderProps {
    isLoading?: boolean;
    fixWidth?: boolean;
    id?: string;
}

export const TableRowNumberHeader: React.FC<TableRowNumberHeaderProps> = ({id, isLoading, fixWidth}) => {
    const targetRef = React.useRef<HTMLTableHeaderCellElement>();
    const [dimensions, setDimensions] = React.useState({width: 0, height: 0});

    // set column width in localStorage if fixWidth prop is passed
    // could use a hook since section is repeated?
    React.useLayoutEffect(() => {
        if (fixWidth && targetRef.current) {
            setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetHeight,
            });
        }
    }, []);

    React.useEffect(() => {
        if (id && dimensions.height && dimensions.width) {
            window.localStorage.setItem(`th-dimensions-${id}`, JSON.stringify(dimensions));
            targetRef.current.style.width = `${dimensions.width}px`;
        }
    }, [dimensions, isLoading]);

    return <th ref={targetRef}>{isLoading && <TextLoadingPlaceholder tiny className="p-0" />}</th>;
};
