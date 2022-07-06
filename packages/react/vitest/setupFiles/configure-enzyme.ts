import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import * as Enzyme from 'enzyme';

Enzyme.configure({adapter: new Adapter()});
