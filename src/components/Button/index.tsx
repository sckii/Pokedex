import React from 'react';
import { WrapperContent } from './styles';

import SearchIcon from '../../assets/svg/search-outline.svg'

interface Props {
  change: any
}

const Button: React.FC<Props> = ({change}) => {
  return (
    <WrapperContent
      type={change}
    >
      <img src={SearchIcon} alt=""/>
    </WrapperContent>
  )
}

export default Button