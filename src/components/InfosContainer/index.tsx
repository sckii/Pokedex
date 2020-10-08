import React from 'react';
import { Content } from './styles';

const InfosContainer: React.FC = ({ children }) => {
  return (
    <Content>
      {children}
    </Content>
  )
}

export default InfosContainer