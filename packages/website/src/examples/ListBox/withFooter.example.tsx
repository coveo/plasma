import {ListBox, Svg} from '@coveord/plasma-react';

export default () => (
    <ListBox
        items={[
            {
                value: '1',
                displayValue: 'Option 1',
            },
            {
                value: '2',
                displayValue: 'Option 2',
            },
            {
                value: '3',
                displayValue: 'Option 3',
            },
        ]}
        footer={
            <div className="select-footer">
                <Svg svgName="clock24px" className="icon mod-lg" />
                Look at my Footer
            </div>
        }
    />
);
