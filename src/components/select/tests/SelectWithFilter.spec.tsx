import {IReactVaporState} from '../../../ReactVapor';
import {EmptyComponent} from '../../../utils/ReactTestUtils';
import {selectWithFilter} from '../SelectWithFilter';

describe('Select', () => {
    describe('<selectWithFilter/>', () => {
        const generateComponentHOC = () => {
            return selectWithFilter(EmptyComponent as any);
        };

        describe('mapStateToProps', () => {
            const defaultId: string = 'a';
            const getDefaultState = (id: string, filterText: string = '', list: string[] = [], selected: string[] = []): IReactVaporState => ({
                filters: [{id, filterText}],
                selectWithFilter: {id: {id, list}},
                listBoxes: [{id, selected}],
            });
        });
    });
});
