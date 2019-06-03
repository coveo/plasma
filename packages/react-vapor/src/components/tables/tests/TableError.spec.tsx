import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import * as _ from 'underscore';
import {
    DESCRIPTION_LABEL, ERROR_CODE_LABEL, IErrorSection, ITableErrorProps, TableError,
    TROUBLESHOOTING_LABEL,
} from '../TableError';

describe('Tables', () => {
    const error: IErrorSection = {
        errorDescription: 'error',
        errorPrecision: 'the row is in error',
        errorTroubleshoot: 'you should do something',
        errorStatus: 'urgent',
        errorCode: 'error_1',
    };

    describe('<TableError />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <TableError
                        error={error}
                    />,
                );
            }).not.toThrow();
        });
    });

    describe('<TableError />', () => {
        let tableError: ReactWrapper<ITableErrorProps, any>;

        beforeEach(() => {
            tableError = mount(
                <TableError
                    error={error}
                />,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            tableError.detach();
        });

        it('should get the error as a prop', () => {
            const errorProp = tableError.props().error;

            expect(errorProp).toBeDefined();
            expect(errorProp).toBe(error);
        });

        it('should render an error-description-precision div if there is an error precision in the error', () => {
            const errorNoPrecision = _.extend({}, error, {errorPrecision: undefined});

            expect(tableError.find('.error-description-precision').length).toBe(1);

            tableError.setProps({error: errorNoPrecision});

            expect(tableError.find('.error-description-precision').length).toBe(0);
        });

        it('should display the error precision if there is an error precision in the error', () => {
            const errorNoPrecision = _.extend({}, error, {errorPrecision: undefined});

            expect(tableError.html()).toContain(error.errorPrecision);

            tableError.setProps({error: errorNoPrecision});

            expect(tableError.html()).not.toContain(error.errorPrecision);
        });

        it('should display the error status', () => {
            expect(tableError.html()).toContain(error.errorStatus);
        });

        it('should display the error description', () => {
            expect(tableError.html()).toContain(error.errorDescription);
        });

        it('should display the error troubleshoot if there is an erro troubleshoot in the error', () => {
            const errorNoTroubleshoot = _.extend({}, error, {errorTroubleshoot: undefined});

            expect(tableError.html()).toContain(error.errorTroubleshoot);

            tableError.setProps({error: errorNoTroubleshoot});

            expect(tableError.html()).not.toContain(error.errorTroubleshoot);
        });

        it('should display the error code', () => {
            expect(tableError.html()).toContain(error.errorCode);
        });

        it('should display the description label passed as a prop or the default one', () => {
            const expectedLabel = 'expected label';

            expect(tableError.html()).toContain(DESCRIPTION_LABEL);
            expect(tableError.html()).not.toContain(expectedLabel);

            tableError.setProps({error: error, descriptionLabel: expectedLabel});
            expect(tableError.html()).toContain(expectedLabel);
            expect(tableError.html()).not.toContain(DESCRIPTION_LABEL);
        });

        it('should display the troubleshooting label passed as a prop or the default one', () => {
            const expectedLabel = 'expected label';

            expect(tableError.html()).toContain(TROUBLESHOOTING_LABEL);
            expect(tableError.html()).not.toContain(expectedLabel);

            tableError.setProps({error: error, troubleshootingLabel: expectedLabel});
            expect(tableError.html()).toContain(expectedLabel);
            expect(tableError.html()).not.toContain(TROUBLESHOOTING_LABEL);
        });

        it('should display the error code label passed as a prop or the default one', () => {
            const expectedLabel = 'expected label';

            expect(tableError.html()).toContain(ERROR_CODE_LABEL);
            expect(tableError.html()).not.toContain(expectedLabel);

            tableError.setProps({error: error, errorCodeLabel: expectedLabel});
            expect(tableError.html()).toContain(expectedLabel);
            expect(tableError.html()).not.toContain(ERROR_CODE_LABEL);
        });
    });
});
