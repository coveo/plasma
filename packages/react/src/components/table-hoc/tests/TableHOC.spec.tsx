import {render, screen} from '@test-utils';
import {shallow} from 'enzyme';
import * as _ from 'underscore';

import {ActionBarConnected} from '../../actions/ActionBar';
import {FilterBoxConnected} from '../../filterBox/FilterBoxConnected';
import {TableLoading} from '../../loading/components/TableLoading';
import {ITableHOCOwnProps, TableHOC} from '../TableHOC';

describe('TableHOC', () => {
    describe('<TableHOC/>', () => {
        const defaultProps: ITableHOCOwnProps = {
            id: 'table',
            data: [],
            renderBody: _.identity,
        };

        it('should not throw', () => {
            expect(() => shallow(<TableHOC id="table" data={[]} renderBody={_.identity} />)).not.toThrow();
            expect(() => shallow(<TableHOC id="table-2" data={null} renderBody={_.identity} />)).not.toThrow();
        });

        it('should call renderBody with an array when data is null', () => {
            const renderBody = jest.fn();
            render(<TableHOC id="table-2" data={null} renderBody={renderBody} />);
            expect(renderBody).toHaveBeenCalledWith([]);
        });

        it('should call renderBody with an array when data is undefined', () => {
            const renderBody = jest.fn();
            render(<TableHOC id="table-2" data={undefined} renderBody={renderBody} />);
            expect(renderBody).toHaveBeenCalledWith([]);
        });

        it('should render a table', () => {
            const wrapper = shallow(<TableHOC {...defaultProps} />);

            expect(wrapper.find('table').exists()).toBe(true);
        });

        it('should render the data', () => {
            const data = _.map(_.range(10), (i: number) => ({value: i}));
            const wrapper = shallow(
                <TableHOC
                    id="a"
                    data={data}
                    renderBody={(d: any[]) => _.map(d, ({value}) => <tr className={`row-${value}`}></tr>)}
                />,
            );
            _.each(data, ({value}) => {
                expect(wrapper.find(`tr.row-${value}`).exists()).toBe(true);
            });
        });

        it('should allow custom classes on the table', () => {
            const expectedClass = 'some-class';
            const wrapper = shallow(<TableHOC {...defaultProps} className={expectedClass} />);

            expect(wrapper.find('table').hasClass(expectedClass)).toBe(true);
        });

        it('should render a .table-container', () => {
            const wrapper = shallow(<TableHOC {...defaultProps} />);

            expect(wrapper.find('.table-container').exists()).toBe(true);
        });

        it('should allow custom classes on the .table-container', () => {
            const expectedClass = 'some-class';
            const wrapper = shallow(<TableHOC {...defaultProps} containerClassName={expectedClass} />);

            expect(wrapper.find('.table-container').hasClass(expectedClass)).toBe(true);
        });

        it('should add the TableLoading.Body Component instead of the tbody if isLoading is true', () => {
            const wrapper = shallow(<TableHOC {...defaultProps} isLoading />);

            expect(wrapper.find(TableLoading.Body).length).toBe(1);
        });

        it('should not render the  TableLoading.Body Component if isLoading is false', () => {
            const wrapper = shallow(<TableHOC {...defaultProps} isLoading={false} />);

            expect(wrapper.find(TableLoading.Body).length).toBe(0);
        });

        it('should not render an ActionBarConnected if the table prop hasActionButtons is false and the table have no actions', () => {
            const wrapper = shallow(<TableHOC {...defaultProps} hasActionButtons={false} actions={[]} />);

            expect(wrapper.find(ActionBarConnected).exists()).toBe(false);
        });

        it('should render an ActionBarConnected if the table prop hasActionButtons is true', () => {
            const wrapper = shallow(<TableHOC {...defaultProps} hasActionButtons />);

            expect(wrapper.find(ActionBarConnected).exists()).toBe(true);
        });

        it('should render an ActionBarConnected with a top border if the "showBorderTop" is set to true', () => {
            const wrapper = shallow(<TableHOC {...defaultProps} hasActionButtons showBorderTop />);

            expect(wrapper.find(ActionBarConnected).prop('extraContainerClasses')).toContain('mod-border-top');
        });

        it('should render an ActionBarConnected with a top border if the "showBorderBottom" is set to true (default)', () => {
            const wrapper = shallow(<TableHOC {...defaultProps} hasActionButtons />);

            expect(wrapper.find(ActionBarConnected).prop('extraContainerClasses')).toContain('mod-border-bottom');
        });

        it('should render an ActionBarConnected without a top border if the "showBorderBottom" is set to false', () => {
            const wrapper = shallow(<TableHOC {...defaultProps} hasActionButtons showBorderBottom={false} />);

            expect(wrapper.find(ActionBarConnected).prop('extraContainerClasses')).not.toContain('mod-border-bottom');
        });

        it('should render an ActionBarConnected if the table prop hasActionButtons is false but the table have some actions', () => {
            const wrapper = shallow(
                <TableHOC {...defaultProps} actions={[<FilterBoxConnected />]} hasActionButtons={false} />,
            );

            expect(wrapper.find(ActionBarConnected).exists()).toBe(true);
        });

        it('should render an ActionBarConnected if the table prop has an action bar prefix', () => {
            const wrapper = shallow(<TableHOC {...defaultProps} actionBarPrefixContent={{content: <div />}} />);

            expect(wrapper.find(ActionBarConnected).exists()).toBe(true);
        });

        it('should pass the action bar prefix to ActionBarConnected', () => {
            const content = {content: <div id="someContent" />};
            const wrapper = shallow(<TableHOC {...defaultProps} actionBarPrefixContent={content} />);

            expect(wrapper.find(ActionBarConnected).props().prefixContent).toBe(content);
        });

        it('renders a status during the loading', () => {
            const {rerender} = render(<TableHOC {...defaultProps} isLoading />);

            expect(screen.getByRole('status')).toBeVisible();

            rerender(<TableHOC {...defaultProps} isLoading={false} />);

            expect(screen.queryByRole('status')).not.toBeInTheDocument();
        });

        it('hides the real rows during the loading', () => {
            render(<TableHOC {...defaultProps} isLoading />);

            const hiddenBody = screen.getByRole('rowgroup', {hidden: true});

            expect(hiddenBody).toBeInTheDocument();
        });

        it('should disabled actions on loading', () => {
            const wrapper = shallow(<TableHOC {...defaultProps} actions={[<div />]} hasActionButtons isLoading />);

            expect(wrapper.find(ActionBarConnected).props().disabled).toBe(true);
        });

        it('should not disabled actions on loading is off', () => {
            const wrapper = shallow(
                <TableHOC {...defaultProps} actions={[<div />]} hasActionButtons isLoading={false} />,
            );

            expect(wrapper.find(ActionBarConnected).props().disabled).toBe(false);
        });

        it('should render a negative top margin on the table if there is an ActionBar', () => {
            const wrapper = shallow(<TableHOC {...defaultProps} hasActionButtons />);

            expect(wrapper.find('table').prop('style').marginTop).toBe('-1px');
        });

        it('should not render a negative top margin on the table if there is an ActionBar', () => {
            const wrapper = shallow(<TableHOC {...defaultProps} />);

            expect(wrapper.find('table').prop('style').marginTop).toBe(0);
        });
    });
});
