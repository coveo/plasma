// https://a11y-solutions.stevenwoodson.com/solutions/focus/roving-focus/
import {useCallback, useState, useEffect} from 'react';

const useRoveFocus = (size: number) => {
    const [currentFocus, setCurrentFocus] = useState(-1);
    const handleKeyDown = useCallback(
        (event) => {
            if (event.key === 'ArrowDown') {
                event.preventDefault();
                setCurrentFocus(currentFocus === size - 1 ? 0 : currentFocus + 1);
            } else if (event.key === 'ArrowUp') {
                event.preventDefault();
                setCurrentFocus(currentFocus === 0 ? size - 1 : currentFocus - 1);
            } else {
                return;
            }
        },
        [currentFocus, setCurrentFocus]
    );

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown, false);
        return () => {
            document.removeEventListener('keydown', handleKeyDown, false);
        };
    }, [handleKeyDown]);

    return [currentFocus, setCurrentFocus];
};

export default useRoveFocus;
