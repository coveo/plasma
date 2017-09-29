import * as React from 'react';
import { IFlatSelectOptionProps } from '../FlatSelectOption';
import { UUID } from '../../../utils/UUID';
import { FlatSelectConnected } from '../FlatSelectConnected';
import { ISvgProps, Svg } from '../../svg/Svg';
import { IContentProps } from '../../content/Content';

export class FlatSelectExamples extends React.Component<any, void> {

  render() {
    const defaultFlatSelectOption: IFlatSelectOptionProps[] = [
      {
        option: { content: 'Option 1' },
      }, {
        option: { content: 'Option 2' },
      }, {
        option: { content: 'Option 3' },
      },
    ];

    const svg: ISvgProps = {
      svgName: 'domain-google',
      svgClass: 'icon',
    };
    const getPrepend: IContentProps = { content: () => <Svg {...svg} />, classes: ['mr1'] };
    const getAppend: IContentProps = { content: () => <Svg {...svg} />, classes: ['ml1'] };

    return (
      <div className='mt2'>
        <h1 className='text-blue mb1'>Flat Select List</h1>

        <div className='form-group'>
          <label className='form-control-label'>Default Flat Select</label>
          <div className='form-control'>
            <FlatSelectConnected {...{
              id: UUID.generate(),
              options: defaultFlatSelectOption,
            }} />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Flat Select mod group</label>
          <div className='form-control'>
            <FlatSelectConnected {...{
              id: UUID.generate(),
              options: defaultFlatSelectOption,
              group: true,
            }} />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Flat Select mod option picker</label>
          <div className='form-control'>
            <FlatSelectConnected {...{
              id: UUID.generate(),
              options: defaultFlatSelectOption,
              optionPicker: true,
            }} />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Flat Select with option tooltip</label>
          <div className='form-control'>
            <FlatSelectConnected {...{
              id: UUID.generate(),
              options: [{
                option: { content: 'Option 1' },
                tooltip: { title: 'Option 1 tooltip', container: 'body', placement: 'bottom' },
              }, {
                option: { content: 'Option 2' },
                tooltip: { title: 'Option 2 tooltip', container: 'body', placement: 'bottom' },
              },
              ],
            }} />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Flat Select mod group with option tooltip</label>
          <div className='form-control'>
            <FlatSelectConnected {...{
              id: UUID.generate(),
              options: [{
                option: { content: 'Option 1' },
                tooltip: { title: 'Option 1 tooltip', container: 'body', placement: 'bottom' },
              }, {
                option: { content: 'Option 2' },
                tooltip: { title: 'Option 2 tooltip', container: 'body', placement: 'bottom' },
              },
              ],
              group: true,
            }} />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Flat Select with option prepend</label>
          <div className='form-control'>
            <FlatSelectConnected {...{
              id: UUID.generate(),
              options: [{
                option: { content: 'Option 1' },
                prepend: getPrepend,
              }, {
                option: { content: 'Option 2' },
                prepend: getPrepend,
              },
              ],
            }} />
          </div>
        </div>
        <div>
          <div className='form-group'>
            <label className='form-control-label'>Flat Select with option append</label>
            <div className='form-control'>
              <FlatSelectConnected {...{
                id: UUID.generate(),
                options: [{
                  option: { content: 'Option 1' },
                  append: getAppend,
                }, {
                  option: { content: 'Option 2' },
                  append: getAppend,
                },
                ],
              }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
