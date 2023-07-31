import {shallowWithStore} from '@test-utils';

import {getStoreMock} from '../../../../utils/tests/TestUtils';
import {StickyFooter} from '../../../stickyFooter/StickyFooter';
import {withDirtyStickyFooterHOC} from '../WithDirtyStickyFooter';

describe('WithDirtyStickyFooter', () => {
    const StickyFooterWithHOC = withDirtyStickyFooterHOC(StickyFooter);

    const A_COMPONENT_ID = 'some-input-id';

    const STICKY_FOOTER_PROPS = {
        id: '🌮',
        validationIds: [A_COMPONENT_ID],
    };

    const store = getStoreMock();

    beforeEach(() => {
        store.clearActions();
    });

    describe('<StickyFooterWithHOC />', () => {
        it('should render without error', () => {
            expect(() =>
                shallowWithStore(<StickyFooterWithHOC {...STICKY_FOOTER_PROPS} />, store)
                    .dive()
                    .dive(),
            ).not.toThrow();
        });

        it('should mount and unmount/detach without error', () => {
            expect(() => {
                const stickyFooterWrapper = shallowWithStore(<StickyFooterWithHOC {...STICKY_FOOTER_PROPS} />, store)
                    .dive()
                    .dive();
                stickyFooterWrapper.unmount();
            }).not.toThrow();
        });

        describe('after mount', () => {
            const getStoreWithDirty = (isDirty: boolean) =>
                getStoreMock({
                    validation: {
                        [A_COMPONENT_ID]: {
                            isDirty: [
                                {
                                    validationType: 'default',
                                    value: isDirty,
                                },
                            ],
                            error: [],
                            warning: [],
                        },
                    },
                });

            it('should set isOpened to true if the selector returns true', () => {
                const storeWithDirty = getStoreWithDirty(true);

                const stickyFooter = shallowWithStore(<StickyFooterWithHOC {...STICKY_FOOTER_PROPS} />, storeWithDirty)
                    .dive()
                    .dive();
                const isOpened = stickyFooter.find(StickyFooter).prop('isOpened');

                expect(isOpened).toBe(true);
            });

            it('should set isOpened to false if the selector returns false', () => {
                const storeWithDirty = getStoreWithDirty(false);

                const stickyFooter = shallowWithStore(<StickyFooterWithHOC {...STICKY_FOOTER_PROPS} />, storeWithDirty)
                    .dive()
                    .dive();
                const isOpened = stickyFooter.find(StickyFooter).prop('isOpened');

                expect(isOpened).toBe(false);
            });

            it('should fallback to the original isOpened if the selector returns false', () => {
                const storeWithDirty = getStoreWithDirty(false);

                const stickyFooter = shallowWithStore(
                    <StickyFooterWithHOC {...STICKY_FOOTER_PROPS} isOpened={true} />,
                    storeWithDirty,
                )
                    .dive()
                    .dive();
                const isOpened = stickyFooter.find(StickyFooter).prop('isOpened');

                expect(isOpened).toBe(true);
            });
        });
    });
});
