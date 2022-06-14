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
            {
                value: '4',
                displayValue: 'Option 4',
            },
            {
                value: '5',
                displayValue: 'Option 5',
            },
            {
                value: '6',
                displayValue: 'Option 6',
            },
            {
                value: '7',
                displayValue: 'Option 7',
            },
            {
                value: '8',
                displayValue: 'Option 8',
            },
            {
                value: '9',
                displayValue: 'Option 9',
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
