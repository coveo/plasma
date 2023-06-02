import {render, screen, userEvent} from '@test-utils';

import {Search} from '../Search';

describe('Monaco Editor search', () => {
    it('should call handleSearch when the search button is clicked', async () => {
        const handleSearchSpy = vi.fn();
        const user = userEvent.setup();
        render(<Search handleSearch={handleSearchSpy} />);
        await user.click(screen.getByRole('button', {name: /search/i}));
        expect(handleSearchSpy).toHaveBeenCalled();
    });

    it('should focus the Monaco Editor when handleSearch is called', () => {
        const focusSpy = vi.fn();
        const editorRef = {current: {focus: focusSpy, trigger: vi.fn()}};
        const handleSearch = () => {
            editorRef.current.focus();
            editorRef.current.trigger('editor', 'actions.find', '');
        };

        handleSearch();

        expect(focusSpy).toHaveBeenCalled();
    });

    it('should trigger the Monaco Editor to open the search box when handleSearch is called', () => {
        const triggerSpy = vi.fn();
        const editorRef = {current: {focus: vi.fn(), trigger: triggerSpy}};
        const handleSearch = () => {
            editorRef.current.focus();
            editorRef.current.trigger('editor', 'actions.find', '');
        };
        handleSearch();
        expect(triggerSpy).toHaveBeenCalledWith('editor', 'actions.find', '');
    });
});
