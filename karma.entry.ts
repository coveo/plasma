import * as $ from 'jquery';
import * as s from 'underscore.string';

beforeEach(() => {
  if (!$('#App').length) {
    $('body').append('<div id="App" class="coveo-styleguide">' +
      '<table id="AppTable">' +
      '<thead id="AppTableHead"><tr id="AppTableHeadRow"></tr></thead>' +
      '<tbody id="AppTableBody"><tr id="AppTableBodyRow"></tr></tbody>' +
      '</table></div>');
  }
});

afterEach(() => {
  $('body > div:not(.jasmine_html-reporter)').remove();
});

const testsContext = require.context('./src', true, /\.spec\.ts(x?)$/);
testsContext.keys().forEach(testsContext);

const coverageContext = require.context('./src', true, /.*\.ts(x?)$/);
coverageContext.keys()
  .filter(file => !s.contains(file, '.spec.') && !s.contains(file, 'Examples'))
  .forEach(coverageContext);
