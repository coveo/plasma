import { shallow, ShallowWrapper } from 'enzyme';
import { Loading } from './Loading';

describe('<Loading />', () => {
  it('should render without errors', () => {
    expect(() => {
      shallow(<Loading />);
    }).not.toThrow();
  });

  it('should render the spinner', () => {
    let loadingView: ShallowWrapper<any, any> = shallow(<Loading />);
    expect(loadingView.find('.spinner').length).toBe(1);
  });
});
