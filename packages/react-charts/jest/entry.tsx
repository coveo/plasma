import '@testing-library/jest-dom';

import {cleanup, setup} from '@test-utils';
import * as Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({adapter: new Adapter()});

beforeEach(setup);
afterEach(cleanup);
