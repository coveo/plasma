import {HocUtils} from './HocUtils';

describe('HocUtils', () => {
    describe('supplyConfig', () => {
        it('should return the supplier directly if it is not a function', () => {
            const supplier = {key: 'value'};

            expect(HocUtils.supplyConfig(supplier)).toBe(supplier);
        });

        it('should call the supplier if it is a function and return the value of that function', () => {
            const config = {key: 'value'};
            const supplier = () => config;

            expect(HocUtils.supplyConfig(supplier)).toBe(config);
        });
    });
});
