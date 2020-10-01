import React from 'react';
import { WrapperContent, Content, HeaderContent } from './styles';

import PokeballIcon from '../../assets/svg/pokeball.svg'
import Display from '../Display';
import Search from '../Search';

const PokedexBack: React.FC = () => {
  return (
    <WrapperContent>
      <Content>

        <HeaderContent>
          <img src={PokeballIcon} alt="Pokeball"/>
          <h6>Pokedex 0.0.1v</h6>
        </HeaderContent>
        <Display 
          PokeName="Charmander"
          PokeNumber="1"
          PokeType="fire"
        />
        <Search />
      </Content>
    </WrapperContent>
  )
}

export default PokedexBack