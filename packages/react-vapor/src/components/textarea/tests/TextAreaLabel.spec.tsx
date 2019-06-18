import {shallow} from 'enzyme';
import * as React from 'react';
import {TextArea, TextAreaConnected} from '../TextArea';
import {TextAreaLabel} from '../TextAreaLabel';

describe('TextAreaLabel', () => {
    it('should render without error with TextArea or TextAreaConnected inside it', () => {
        expect(() =>
            shallow(
                <TextAreaLabel label="label">
                    <TextArea id="test" />
                </TextAreaLabel>
            )
        ).not.toThrow();
        expect(() =>
            shallow(
                <TextAreaLabel label="label">
                    <TextAreaConnected id="test" />
                </TextAreaLabel>
            )
        ).not.toThrow();
    });

    it('should render with a container div containing the textarea and a label', () => {
        const containerDiv = shallow(
            <TextAreaLabel label="label">
                <TextArea id="test" />
            </TextAreaLabel>
        ).find('div');
        expect(containerDiv.first()).toBeDefined();
        expect(containerDiv.children().length).toBe(2);
        expect(containerDiv.find(TextArea).length).toBe(1);
        expect(containerDiv.find('label').length).toBe(1);
    });

    it('should have a label with the same id as the textarea', () => {
        const textAreaId = 'text-area-id';
        const containerDiv = shallow(
            <TextAreaLabel label="label">
                <TextArea id={textAreaId} />
            </TextAreaLabel>
        ).find('div');
        expect(containerDiv.find('label').prop('htmlFor')).toBe(textAreaId);
    });

    it('should render with extra classes on the container div if passed as prop', () => {
        const extraClass = 'extra-class';

        let component = shallow(
            <TextAreaLabel label="label">
                <TextArea id="test" />
            </TextAreaLabel>
        );
        expect(component.find('div').prop('className')).not.toContain(extraClass);

        component = shallow(
            <TextAreaLabel label="label" containerClassName={extraClass}>
                <TextArea id="test" />
            </TextAreaLabel>
        );
        expect(component.find('div').prop('className')).toContain(extraClass);
    });
});
