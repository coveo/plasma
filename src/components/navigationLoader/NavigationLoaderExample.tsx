import * as React from 'react';
import { NavigationContainer } from './NavigationContainer';
import { NavigationMenuSectionItem } from './navigationMenuSectionItem';
import { NavigationMenuSection } from './NavigationMenuSection';

export class NavigationLoaderExample extends React.Component<any, any> {
  render() {
    return (
      <div className='mt2'>
        <label className='form-control-label'>Navigation Loading</label>
        <div className='flex flex-row flex-stretch'>
          <NavigationContainer className={'full-content-y'}>
            <NavigationMenuSection>
              <NavigationMenuSectionItem classes={['mod-width-30']} />
              <NavigationMenuSectionItem classes={['mod-width-50']} />
              <NavigationMenuSectionItem classes={['mod-width-40']} />
              <NavigationMenuSectionItem classes={['mod-width-60']} />
              <NavigationMenuSectionItem classes={['mod-width-50']} />
            </NavigationMenuSection>
            <NavigationMenuSection>
              <NavigationMenuSectionItem classes={['mod-width-30']} />
              <NavigationMenuSectionItem classes={['mod-width-50']} />
              <NavigationMenuSectionItem classes={['mod-width-60']} />
              <NavigationMenuSectionItem classes={['mod-width-30']} />
            </NavigationMenuSection>
            <NavigationMenuSection>
              <NavigationMenuSectionItem classes={['mod-width-30']} />
              <NavigationMenuSectionItem classes={['mod-width-40']} />
              <NavigationMenuSectionItem classes={['mod-width-50']} />
              <NavigationMenuSectionItem classes={['mod-width-30']} />
            </NavigationMenuSection>
          </NavigationContainer>
        </div>
      </div>
    );
  }
}
