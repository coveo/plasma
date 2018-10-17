import {IReactVaporState} from '../../../ReactVapor';

describe('Select', () => {
    describe('<selectWithFilter/>', () => {
        describe('mapStateToProps Selector', () => {
            const defaultId: string = 'a';
            const getDefaultState = (id: string, filterText: string = '', list: string[] = [], selected: string[] = []): IReactVaporState => ({
                filters: [{id, filterText}],
                selectWithFilter: {id: {id, list}},
                listBoxes: [{id, selected}],
            });
        });
    });
});
