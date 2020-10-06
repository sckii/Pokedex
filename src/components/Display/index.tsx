import React from 'react';

import { WrapperContent, BlueScreen, List, ButtonFake, SoundFake } from './styles';


const Display: React.FC = ({ children }) => {
  
  
  return (
    <WrapperContent>
      <BlueScreen>
        {children}
      </BlueScreen>
      
      <List>
        <ButtonFake />
        <SoundFake>
          <div></div>
          <div></div>
          <div></div>
        </SoundFake>

      </List>
    </WrapperContent>
  )
}

export default Display