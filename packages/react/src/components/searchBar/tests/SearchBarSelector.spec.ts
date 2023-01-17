import {SearchBarSelector} from '../SearchBarSelector.js';

describe('SearchBarSelector', () => {
    const id = '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧';

    describe('getValue', () => {
        it('should return an empty string if the search bar id is not in the state', () => {
            expect(
                SearchBarSelector.getValue(
                    {
                        searchBars: [],
                    },
                    id
                )
            ).toEqual('');
        });

        it('should return an empty string if the search bar value is not defined', () => {
            expect(
                SearchBarSelector.getValue(
                    {
                        searchBars: [
                            {
                                id,
                                value: undefined,
                                searching: true,
                                disabled: false,
                            },
                        ],
                    },
                    id
                )
            ).toEqual('');
        });

        it('should return the value if the search bar value is defined in the state', () => {
            const value = '(◕‿◕✿)';

            expect(
                SearchBarSelector.getValue(
                    {
                        searchBars: [
                            {
                                id,
                                value,
                                searching: true,
                                disabled: false,
                            },
                        ],
                    },
                    id
                )
            ).toEqual(value);
        });
    });
});
