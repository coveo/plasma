import {render, screen} from '@test-utils';

import {CollapsibleInfoBox, CollapsibleInfoBoxProps} from '../CollapsibleInfoBox.js';

describe('CollapsibleInfoBox', () => {
    const basicProps: CollapsibleInfoBoxProps = {
        id: 'my-collapsible-info-box',
        title: 'wanna-buy-some-magic?',
    };

    it('render a CollapsibleInfoBox component', () => {
        render(<CollapsibleInfoBox {...basicProps} />);

        expect(screen.getByRole('heading', {name: /wanna\-buy\-some\-magic\?/i})).toBeInTheDocument();
    });

    it('render an icon in header', async () => {
        render(<CollapsibleInfoBox {...basicProps} />);

        await screen.findByRole('img', {name: 'arrowHeadDown'});

        expect(screen.getByRole('img', {name: 'arrowHeadDown'})).toBeInTheDocument();
    });

    it('does not render an icon in header if isSection is true', async () => {
        const props: CollapsibleInfoBoxProps = {
            id: 'my-collapsible-info-box',
            title: 'wanna-buy-some-magic?',
            isSection: true,
        };
        render(<CollapsibleInfoBox {...props} />);

        expect(screen.queryByRole('img', {name: 'info'})).not.toBeInTheDocument();
    });

    it('display the sectionAdditionalContent if there is any and it is a section', () => {
        const props: CollapsibleInfoBoxProps = {
            id: 'my-collapsible-info-box',
            title: 'wanna-buy-some-magic?',
            isSection: true,
            sectionAdditionalContent: 'some content',
        };
        render(<CollapsibleInfoBox {...props} />);
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
        render(<CollapsibleInfoBox {...props} />);

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
        render(<CollapsibleInfoBox {...props} />);

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
        render(<CollapsibleInfoBox {...props} />);

        expect(screen.queryByText(/some content/i)).toHaveClass('something');
    });
});
