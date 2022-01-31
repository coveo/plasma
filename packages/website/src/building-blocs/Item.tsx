import React, {useEffect, useRef, useCallback, FunctionComponent} from 'react';

interface ItemProps {
    value: string;
    displayValue?: string;
    focus?: boolean;
    index?: number;
    setFocus?: any;
}

const Item: FunctionComponent<ItemProps> = (props) => {
    const {displayValue, focus, index, setFocus, value} = props;

    const ref = useRef(null);

    useEffect(() => {
        if (focus) {
            // Move element into view when it is focused
            ref.current.focus();
        }
    }, [focus]);

    // const handleSelect = useCallback(() => {
    //     // debugger;
    //     alert(`${value}`);
    //     // setting focus to that element when it is selected
    //     setFocus(index);
    // }, [displayValue, index, setFocus]);

    return (
        <li
            ref={ref}
            key={value}
            data-value={value}
            className={'item-box'}
            tabIndex={focus ? 0 : -1}
            role="option"
            // onKeyPress={handleSelect}
            onMouseDown={(event) => event.preventDefault()}
        >
            <span dangerouslySetInnerHTML={{__html: displayValue}}></span>
        </li>
    );
};

export default Item;
