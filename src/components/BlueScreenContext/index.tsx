import React from 'react';
import { Content, Id, Name } from './styles';

interface Props {
  PokeName: string
  PokeNumber?: number
  onClick?: any
  imageUrl?: string
}


const BlueScreenContent: React.FC<Props> = ({ PokeNumber, PokeName, imageUrl, children, onClick }) => {
  return (
    <Content
      onClick={onClick}
    >
      <Name>{ PokeName }</Name>
      <img src={imageUrl} alt=""/>
      <Id>#{ PokeNumber }</Id>
       { children }
    </Content>
  )
}

export default BlueScreenContent