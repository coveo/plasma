import { TableSort, SortTypes } from '../TableSort';

describe('TableSort', () => {
  let tableSort: TableSort;
  let title: string = 'a title';
  let className: string = 'aclass';
  let onClick: () => void = () => { };

  it('should get title as a prop when title is set', () => {
    tableSort = new TableSort({
      title: title,
      sortType: SortTypes.None
    });

    expect(tableSort.title).toBeDefined();
    expect(tableSort.title).toBe(title);
  });

  it('should get onClick as a prop when onClick is set', () => {
    tableSort = new TableSort({
      title: title,
      sortType: SortTypes.None,
      onClick: onClick
    });

    expect(tableSort.onClick).toBeDefined();
  });

  describe('className', () => {
    it('should get its class name as a prop', () => {
      tableSort = new TableSort({
        title: title,
        sortType: SortTypes.None,
        className: className
      });

      let classNameProp = tableSort.className;

      expect(classNameProp).toBeDefined();
      expect(classNameProp).toBe(className + ' admin-sort');
    });

    it('should get ascending class name when type is ascending', () => {
      tableSort = new TableSort({
        title: title,
        sortType: SortTypes.Ascending,
        className: className
      });

      let classNameProp = tableSort.className;

      expect(classNameProp).toContain('admin-sort admin-sort-ascending');
    });

    it('should get descending class name when type is descending', () => {
      tableSort = new TableSort({
        title: title,
        sortType: SortTypes.Descending,
        className: className
      });

      let classNameProp = tableSort.className;

      expect(classNameProp).toContain('admin-sort admin-sort-descending');
    });
  });

  describe('cellContent', () => {
    it('should get its cell content as a prop', () => {
      tableSort = new TableSort({
        title: title,
        sortType: SortTypes.None
      });
      let cellContentProp = tableSort.cellContent;

      expect(cellContentProp).toBeDefined();
    });

    it('should get its cell content as a prop when isFixedHeader is true', () => {
      tableSort = new TableSort({
        title: title,
        sortType: SortTypes.None,
        isFixedHeader: true
      });
      let cellContentProp = tableSort.cellContent;

      expect(cellContentProp).toBeDefined();
    });
  });
});
