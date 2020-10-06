import React from 'react';
import { WrapperContent } from './styles';

const Button: React.FC = ({children}) => {
  return (
    <WrapperContent>
      { children }
    </WrapperContent>
  )
}

export default Button