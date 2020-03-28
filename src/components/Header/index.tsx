import React from 'react';
import {Container, Logo} from './styles';

import {logo} from '../../assets';
import {StackHeaderProps} from '@react-navigation/stack';

const Header: React.FC<StackHeaderProps> = ({...props}) => {
  return (
    <Container {...props}>
      <Logo source={logo} />
    </Container>
  );
};

export default Header;
