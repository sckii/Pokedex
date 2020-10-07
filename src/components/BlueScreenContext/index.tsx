import React from 'react';
import { Box, Content, Id, Name } from './styles';

interface Props {
  PokeName: string
  PokeNumber?: number
  PokeType?: string
  imageUrl?: string
}


const BlueScreenContent: React.FC<Props> = ({ PokeNumber, PokeName, PokeType, imageUrl }) => {
  return (
    <Content>
      <Name>{ PokeName }</Name>
      <img src={imageUrl} alt=""/>
      <Id>#{ PokeNumber }</Id>
      <Box> { PokeType }</Box>
    </Content>
  )
}

export default BlueScreenContent