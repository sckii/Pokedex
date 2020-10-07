import React from 'react';
import { Box, Content, Id, Name } from './styles';

interface Props {
  PokeName: string
  PokeNumber?: number
  
  imageUrl?: string
}


const BlueScreenContent: React.FC<Props> = ({ PokeNumber, PokeName, imageUrl, children }) => {
  return (
    <Content>
      <Name>{ PokeName }</Name>
      <img src={imageUrl} alt=""/>
      <Id>#{ PokeNumber }</Id>
       { children }
    </Content>
  )
}

export default BlueScreenContent