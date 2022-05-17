import {render, screen} from '@test-utils';
import userEvent from '@testing-library/user-event';
import {shallow} from 'enzyme';
import {SearchBar} from '../SearchBar';
import {searchBarPropsScenarios} from './SearchBarPropsScenarios.mock';

describe('SearchBar', () => {
    const requiredProps = {...searchBarPropsScenarios[0]};

    it('does not throw', () => {
        expect(() => {
            searchBarPropsScenarios.forEach((props) => render(<SearchBar {...props} />));
        }).not.toThrow();
    });

    it('render the search bar', () => {
        render(<SearchBar {...requiredProps} />);

        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByRole('img', {name: 'search icon'})).toBeInTheDocument();
    });

    it('renders a loading animation when is searching', () => {
        render(<SearchBar {...requiredProps} searching />);

        expect(screen.getByRole('alert')).toBeInTheDocument();
        expect(screen.queryByRole('img', {name: 'search icon'})).not.toBeInTheDocument();
    });

    it('render a disabled search box if disabled is true', () => {
        render(<SearchBar {...requiredProps} disabled />);

        expect(screen.getByRole('textbox')).toBeDisabled();
    });

    it('render the search with extra classes', () => {
        const containerDiv = shallow(<SearchBar {...requiredProps} containerClassNames="extra-class" />)
            .find('div')
            .first();

        expect(containerDiv.prop('className')).toContain('extra-class');
    });

    it('render the input of the search bar with extra classes', () => {
        render(<SearchBar {...requiredProps} inputClassNames="extra-class" />);

        expect(screen.getByRole('textbox')).toHaveClass('extra-class');
    });

    it('calls onSearch when user click on the search icon', () => {
        const searchSpy = jest.fn();

        render(<SearchBar onSearch={searchSpy} />);
        userEvent.click(screen.queryByRole('img', {name: 'search icon'}));

        expect(searchSpy).toHaveBeenCalledTimes(1);
    });

    it('calls onSearch if user press enter', () => {
        const searchSpy = jest.fn();

        render(<SearchBar onSearch={searchSpy} />);
        userEvent.click(screen.getByRole('textbox'));
        userEvent.keyboard('{enter}');

        expect(searchSpy).toHaveBeenCalledTimes(1);
    });

    it('dont call onSearch will the user is typing', () => {
        const searchSpy = jest.fn();

        render(<SearchBar onSearch={searchSpy} />);
        userEvent.click(screen.getByRole('textbox'));
        userEvent.keyboard('Hello darkness my old friend');

        expect(searchSpy).not.toHaveBeenCalled();
    });

    it('dont calls onSearch if the search bar is disabled', () => {
        const searchSpy = jest.fn();

        render(<SearchBar onSearch={searchSpy} disabled />);
        userEvent.click(screen.queryByRole('img', {name: 'search icon'}));

        expect(searchSpy).toHaveBeenCalledTimes(0);

        userEvent.click(screen.getByRole('textbox'));
        userEvent.keyboard('{enter}');

        expect(searchSpy).toHaveBeenCalledTimes(0);
    });

    it('call onChange on input change if it is defined', () => {
        const onChangeSpy = jest.fn();

        render(<SearchBar onChange={onChangeSpy} />);
        userEvent.click(screen.getByRole('textbox'));
        userEvent.keyboard('hello darkness'); // 14 characters

        expect(onChangeSpy).toHaveBeenCalledTimes(14);
    });
});
