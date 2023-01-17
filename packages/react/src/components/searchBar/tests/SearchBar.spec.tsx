import {render, screen, waitFor} from '@test-utils';
import userEvent from '@testing-library/user-event';
import {shallow} from 'enzyme';
import {SearchBar} from '../SearchBar.js';
import {searchBarPropsScenarios} from './SearchBarPropsScenarios.mock.js';

describe('SearchBar', () => {
    const requiredProps = {...searchBarPropsScenarios[0]};

    it('does not throw', () => {
        expect(() => {
            searchBarPropsScenarios.forEach((props) => render(<SearchBar {...props} />));
        }).not.toThrow();
    });

    it('render the search bar', async () => {
        render(<SearchBar {...requiredProps} />);

        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(await screen.findByRole('img', {name: 'search'})).toBeInTheDocument();
    });

    it('renders a loading animation when is searching', () => {
        render(<SearchBar {...requiredProps} searching />);

        expect(screen.getByRole('alert')).toBeInTheDocument();
        expect(screen.queryByRole('img', {name: 'search'})).not.toBeInTheDocument();
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

    it('calls onSearch when user click on the search icon', async () => {
        const searchSpy = jest.fn();

        render(<SearchBar onSearch={searchSpy} />);
        await userEvent.click(await screen.findByRole('img', {name: 'search'}));

        await waitFor(() => expect(searchSpy).toHaveBeenCalledTimes(1));
    });

    it('dont call onSearch will the user is typing', async () => {
        const searchSpy = jest.fn();

        render(<SearchBar onSearch={searchSpy} />);
        await userEvent.click(screen.getByRole('textbox'));
        await userEvent.keyboard('Hello darkness my old friend');

        expect(searchSpy).not.toHaveBeenCalled();
    });

    it('dont calls onSearch if the search bar is disabled', async () => {
        const searchSpy = jest.fn();

        render(<SearchBar onSearch={searchSpy} disabled />);
        await userEvent.click(await screen.findByRole('img', {name: 'search'}));

        expect(searchSpy).toHaveBeenCalledTimes(0);

        await userEvent.click(screen.getByRole('textbox'));
        await userEvent.keyboard('{enter}');

        expect(searchSpy).toHaveBeenCalledTimes(0);
    });

    it('call onChange on input change if it is defined', async () => {
        const onChangeSpy = jest.fn();

        render(<SearchBar onChange={onChangeSpy} />);
        await userEvent.click(screen.getByRole('textbox'));
        await userEvent.keyboard('hello darkness'); // 14 characters

        expect(onChangeSpy).toHaveBeenCalledTimes(14);
    });
});
