import {render, screen, waitFor} from '@testing-library/react';
import * as React from 'react';
import {Provider} from 'react-redux';

import {TestUtils} from '../../../utils/tests/TestUtils';
import {CollapsibleInfoBox, CollapsibleInfoBoxProps} from '../CollapsibleInfoBox';

describe('CollapsibleInfoBox', () => {
    const basicProps: CollapsibleInfoBoxProps = {
        id: 'my-collapsible-info-box',
        title: 'wanna-buy-some-magic?',
    };

    it('render a CollapsibleInfoBox component', () => {
        render(
            <Provider store={TestUtils.buildStore()}>
                <CollapsibleInfoBox {...basicProps} />
            </Provider>
        );

        expect(screen.getByRole('heading', {name: /wanna\-buy\-some\-magic\?/i})).toBeInTheDocument();
    });

    it('render an icon in header', async () => {
        render(
            <Provider store={TestUtils.buildStore()}>
                <CollapsibleInfoBox {...basicProps} />
            </Provider>
        );

        await waitFor(() => screen.findByRole('img', {name: 'arrowHeadDown'}));

        expect(screen.getByRole('img', {name: 'arrowHeadDown'})).toBeInTheDocument();
    });

    it('does not render an icon in header if isSection is true', async () => {
        const props: CollapsibleInfoBoxProps = {
            id: 'my-collapsible-info-box',
            title: 'wanna-buy-some-magic?',
            isSection: true,
        };
        render(
            <Provider store={TestUtils.buildStore()}>
                <CollapsibleInfoBox {...props} />
            </Provider>
        );

        expect(screen.queryByRole('img', {name: 'arrowHeadDown'})).not.toBeInTheDocument();
    });

    it('display the sectionAdditionalContent if there is any and it is a section', () => {
        const props: CollapsibleInfoBoxProps = {
            id: 'my-collapsible-info-box',
            title: 'wanna-buy-some-magic?',
            isSection: true,
            sectionAdditionalContent: 'some content',
        };
        render(
            <Provider store={TestUtils.buildStore()}>
                <CollapsibleInfoBox {...props} />
            </Provider>
        );
        expect(screen.getByText(/some content/i)).toBeInTheDocument();
    });

    it('display the sectionAdditionalContent if sectionAdditionalContentCondition is true', () => {
        const props: CollapsibleInfoBoxProps = {
            id: 'my-collapsible-info-box',
            title: 'wanna-buy-some-magic?',
            isSection: true,
            sectionAdditionalContent: 'some content',
            sectionAdditionalContentCondition: () => true,
        };
        render(
            <Provider store={TestUtils.buildStore()}>
                <CollapsibleInfoBox {...props} />
            </Provider>
        );

        expect(screen.getByText(/some content/i)).toBeVisible();
    });

    it('does not display the sectionAdditionalContent if sectionAdditionalContentCondition is false', () => {
        const props: CollapsibleInfoBoxProps = {
            id: 'my-collapsible-info-box',
            title: 'wanna-buy-some-magic?',
            isSection: true,
            sectionAdditionalContent: 'some content',
            sectionAdditionalContentCondition: () => false,
        };
        render(
            <Provider store={TestUtils.buildStore()}>
                <CollapsibleInfoBox {...props} />
            </Provider>
        );

        expect(screen.queryByText(/some content/i)).toHaveClass('hidden');
    });

    it('have the class passed as a prop for the additional content', () => {
        const classes: string = 'something';

        const props: CollapsibleInfoBoxProps = {
            id: 'my-collapsible-info-box',
            title: 'wanna-buy-some-magic?',
            isSection: true,
            sectionAdditionalContent: 'some content',
            sectionAdditionalContentClasses: classes,
        };
        render(
            <Provider store={TestUtils.buildStore()}>
                <CollapsibleInfoBox {...props} />
            </Provider>
        );

        expect(screen.queryByText(/some content/i)).toHaveClass('something');
    });
});
