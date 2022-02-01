import React, {useEffect, useRef, useCallback, FunctionComponent} from 'react';

interface ItemProps {
    value: string;
    focus?: boolean;
    index?: number;
    setFocus?: any;
    onClick?: () => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLElement>, value: string) => void;
}

const Item: FunctionComponent<ItemProps> = (props) => {
    const {focus, index, setFocus, value, onClick, onKeyDown} = props;

    const ref = useRef(null);

    useEffect(() => {
        if (focus) {
            ref.current.focus();
        }
    }, [focus]);

    const handleSelect = useCallback(() => {
        setFocus(index);
    }, [value, index, setFocus]);

    return (
        <li
            ref={ref}
            key={value}
            data-value={value}
            className={'item-box'}
            tabIndex={focus ? 0 : -1}
            role="option"
            onClick={onClick}
            onKeyPress={handleSelect}
            onKeyDown={(event) => onKeyDown(event, value)}
        >
            {value}
        </li>
    );
};

export default Item;
