import React from 'react';
import { WrapperContent, PokedexHeader, HeaderContent } from './styles';

import PokeballIcon from '../../assets/svg/pokeball.svg'

const PokedexBack: React.FC = () => {
  return (
    <WrapperContent>
      <PokedexHeader>
        <HeaderContent>
          <img src={PokeballIcon} alt="Pokeball"/>
          <h6>Pokedex 0.0.1v</h6>
        </HeaderContent>
      </PokedexHeader>
    </WrapperContent>
  )
}

export default PokedexBack