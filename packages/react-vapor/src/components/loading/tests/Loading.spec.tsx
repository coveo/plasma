import {mount, ReactWrapper, shallow, ShallowWrapper} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {ILoadingProps, Loading} from '../Loading';

describe('<Loading />', () => {
    it('should render without errors', () => {
        expect(() => {
            shallow(<Loading />);
        }).not.toThrow();
    });

    it('should render the spinner', () => {
        const loading: ShallowWrapper<ILoadingProps, any> = shallow(<Loading />);
        expect(loading.find('.spinner').length).toBe(1);
    });

    it('should render the optional classes if any in addition to the default spinner class', () => {
        const loading: ShallowWrapper<ILoadingProps, any> = shallow(<Loading className="p2" />);
        expect(loading.find('.spinner.p2').length).toBe(1);
    });

    it('should call onRender if prop is set when mounting', () => {
        const onRenderSpy = jasmine.createSpy('onRender');
        const loading: ReactWrapper<ILoadingProps, any> = mount(<Loading onRender={onRenderSpy} />, {
            attachTo: document.getElementById('App'),
        });
        expect(onRenderSpy).toHaveBeenCalled();
        loading.unmount();
        loading.detach();
    });

    it('should call onDestroy if prop is set when unmounting', () => {
        const onDestroySpy = jasmine.createSpy('onDestroy');
        const loading: ReactWrapper<ILoadingProps, any> = mount(<Loading onDestroy={onDestroySpy} />, {
            attachTo: document.getElementById('App'),
        });
        loading.unmount();
        expect(onDestroySpy).toHaveBeenCalled();
        loading.detach();
    });
});
