import * as React from 'react';
import { mount, ReactWrapper, shallow } from 'enzyme';
import * as _ from 'underscore';
import { ITitleProps, Title } from '../Title';
import { Tooltip } from '../../tooltip/Tooltip';
import { ILinkSvgProps, LinkSvg } from '../../svg/LinkSvg';

describe('<Title/>', () => {

  const defaultProps: ITitleProps = {
    title: 'title',
  };
  let titleComponent: ReactWrapper<ITitleProps, any>;

  it('should render without errors', () => {
    expect(() => {
      shallow(<Title {...defaultProps} />);
    }).not.toThrow();
  });

  describe('<Title /> with default props', () => {

    beforeEach(() => {
      titleComponent = mount(
        <Title {...defaultProps} />,
        { attachTo: document.getElementById('App') },
      );
    });

    afterEach(() => {
      titleComponent.unmount();
      titleComponent.detach();
    });

    it('should render the default title', () => {
      expect(titleComponent.find('h1').text()).toEqual(defaultProps.title);
    });

    it('should not render the prefix', () => {
      expect(titleComponent.find('span.mr1').length).toEqual(0);
    });

    it('should not add the tooltip for the title', () => {
      expect(titleComponent.find(Tooltip).props().title).toBe('');
    });

    it('should not render the documentation link', () => {
      expect(titleComponent.find(LinkSvg).length).toBe(0);
    });
  });

  describe('<Title /> with custom props', () => {

    const customProps: ITitleProps = {
      prefix: 'prefix',
      title: 'title',
      withTitleTooltip: false,
    };

    const documentationLink: ILinkSvgProps = {
      link: {
        url: 'https://www.google.ca',
        target: '_blank',
      },
      svg: {
        svgName: 'help',
        svgClass: 'fill-orange icon mod-20',
      },
    };

    const renderTitle = (props: Partial<ITitleProps> = {}) => {
      titleComponent = mount(
        <Title {..._.defaults(props, customProps) } />,
        { attachTo: document.getElementById('App') },
      );
    };

    afterEach(() => {
      titleComponent.unmount();
      titleComponent.detach();
    });

    it('should render the prefix', () => {
      renderTitle();
      expect(titleComponent.find('span.mr1').text()).toEqual(customProps.prefix);
    });

    it('should add the tooltip for the title with withTitleTooltip to true', () => {
      renderTitle({
        withTitleTooltip: true,
      });
      expect(titleComponent.find(Tooltip).length).toBe(1);
    });

    it('should render the documentation link', () => {
      renderTitle({
        documentationLink,
      });
      expect(titleComponent.find(LinkSvg).length).toBe(1);
    });
  });
});
