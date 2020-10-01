import React from 'react';
import Search from '../Search';
import { WrapperContent, BlueScreen, List, Box } from './styles';

interface Props {
  PokeName: string
  PokeNumber: string
  PokeType: string
}

const Display: React.FC<Props> = ({ PokeNumber, PokeName, PokeType }) => {
  return (
    <WrapperContent>
      <BlueScreen>
        {/* front_default */}
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt=""/>
      </BlueScreen>
      <List>

        {/* name */}
        {/* game_indices/9/game_index */}
        {/* types */}

        <Box>Name: { PokeName }</Box>
        <Box>Game Id: { PokeNumber }</Box>
        <Box>Type: { PokeType }</Box>
      </List>
    </WrapperContent>
  )
}

export default Display