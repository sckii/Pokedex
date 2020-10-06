import React from 'react';
import { Box, Content } from './styles';

interface Props {
  PokeName: string
  PokeNumber?: string
  PokeType?: string
  imageUrl?: string
}


const BlueScreenContent: React.FC<Props> = ({ PokeNumber, PokeName, PokeType, imageUrl }) => {
  return (
    <Content>
      <img src={imageUrl} alt=""/>
      <Box>Name: { PokeName }</Box>
      <Box>Game Id: { PokeNumber }</Box>
      <Box>Type: { PokeType }</Box>
    </Content>
  )
}

export default BlueScreenContent