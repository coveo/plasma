import {ColorBar} from '@coveord/plasma-react';

const Demo = () => (
    <ColorBar
        widthPerColor={{'#1372ec': 30, '#ffe300': 15, '#f05245': 10, '#1cebcf': 25, '#7d458f': 20}}
        tooltipPerColor={{
            '#1372ec': {title: 'blue', placement: 'top'},
            '#ffe300': {title: 'yellow', placement: 'top'},
        }}
    />
);
export default Demo;
