import '@testing-library/jest-dom';
import 'chosen-js';

import {cleanup, setup} from '@test-utils';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

beforeEach(setup);
afterEach(cleanup);
