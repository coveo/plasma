import * as $ from 'jquery';

beforeEach(() => {
  if (!$('#App').length) {
    $('body').append('<div id="App" class="coveo-styleguide"></div>');
  }
});

afterEach(() => {
  $('body > div:not(.jasmine_html-reporter)').remove();
});

const testsContext = require.context('./tests', true, /\.spec\.tsx$/);
testsContext.keys().forEach(testsContext);

const coverageContext = require.context('./src', true, /.*\.tsx$/);
coverageContext.keys().forEach(coverageContext);
