import React from 'react';
import { Content } from './styles';

const PageDefault: React.FC = ({ children }) => {
  return (
    <Content>
      { children }
    </Content>
  )
}

export default PageDefault