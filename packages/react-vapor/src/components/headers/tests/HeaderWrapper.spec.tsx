import {shallow} from 'enzyme';
import * as React from 'react';

import {HeaderWrapper} from '../HeaderWrapper';
import {TabsHeader} from '../TabsHeader';

describe('<HeaderWrapper/>', () => {
    it('should render without errors', () => {
        expect(() => {
            const header = shallow(<HeaderWrapper />);
            header.unmount();
        }).not.toThrow();
    });

    it('should render the description when specified', () => {
        const money = '💰';
        const header = shallow(<HeaderWrapper description={money} />);
        expect(header.find('h4').text()).toBe(money);
    });

    it('should render actions when specified', () => {
        const myActions = [{content: '📗'}, {content: '📘'}, {content: '📙'}];
        const header = shallow(<HeaderWrapper actions={myActions} />);
        const actions = header.find('.action-bar').children();

        expect(actions.length).toBe(myActions.length);
        actions.forEach((action, index) => {
            expect(action.prop('content')).toBe(myActions[index].content);
        });
    });

    it('should render tabs when specified', () => {
        const myTabs = [
            {id: 'tomato', title: '🍅'},
            {id: 'sweet-potato', title: '🍠'},
        ];
        const header = shallow(<HeaderWrapper tabs={myTabs} />);

        expect(header.find(TabsHeader).exists()).toBe(true);
        expect(header.find(TabsHeader).prop('tabs')).toBe(myTabs);
    });

    it('should not render a border on the bottom', () => {
        const header = shallow(<HeaderWrapper hasBorderBottom={false} />);

        expect(header.find('.panel-header').hasClass('mod-no-border-bottom')).toBe(true);
    });

    it('should render without padding', () => {
        const header = shallow(<HeaderWrapper hasPadding={false} />);

        expect(header.find('.panel-header').hasClass('px0')).toBe(true);
    });
});
