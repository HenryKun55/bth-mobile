import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Card,
  Property,
  Value,
  Button,
  ButtonText,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../../styles';
import { Incident } from '../../types/Incidents';

interface ListIncidentsProps {
  data: Incident[];
  load: Promise<void>;
}

const Header: React.FC<ListIncidentsProps> = ({ data, load }) => {

  const navigation = useNavigation();

  const handleDetails = (incident: Incident) => {
    navigation.navigate('Details', { incident });
    return true;
  };

  return (
    <Container
      data={data}
      keyExtractor={incident => String(incident.id)}
      // showsVerticalScrollIndicator={false}
      onEndReachedThreshold={0.1}
      onEndReached={load}
      renderItem={({ item }) => (
        <Card>
          <Property>ONG:</Property>
          <Value>{item.name}</Value>
          <Property>CASO:</Property>
          <Value>{item.title}</Value>
          <Property>VALOR:</Property>
          <Value>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.value)}</Value>
          <Button onPress={() => handleDetails(item)}>
            <ButtonText>Ver Mais Detalhes</ButtonText>
            <Icon name="arrow-right" size={16} color={colors.red} />
          </Button>
        </Card>
      )}
    >
    </Container>
  );
};

export default Header;
