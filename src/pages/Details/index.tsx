import React from 'react';
import { Alert, Linking } from 'react-native';
import { 
  BackButton, 
  Container, 
  Card,
  Property,
  Value,
  Contact,
  ContactTitle,
  ContactSubtitle,
  ContactActions,
  ContactButton,
  ContactButtonText,
 } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../../styles';
import { Incident } from '../../types/Incidents';

const Details = () => {

  const navigation = useNavigation();
  const route = useRoute();

  const incident: Incident = route.params.incident;

  const value = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)

  const message = `Olá, eu vim através do BE THE HERO, pra resolver o caso ${incident.title} no valor de ${value} e estou disponível pra ser o herói do seu caso!`

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={28} color={colors.red} />
      </BackButton>

      <Card>
        <Property>TÍTULO:</Property>
        <Value>{incident.title}</Value>
        <Property>DESCRIÇÃO:</Property>
        <Value>{incident.description}</Value>
        <Property>VALOR:</Property>
        <Value last>{value}</Value>
      </Card>

      <Contact>
        <ContactTitle>Salve o dia!</ContactTitle>
        <ContactTitle>Seja o <ContactTitle spotlight>herói</ContactTitle> desse caso.</ContactTitle>
        <ContactSubtitle>Entre em contato: </ContactSubtitle>

        <ContactActions>

          <ContactButton onPress={() => Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)}>
            <ContactButtonText>WhatsApp</ContactButtonText>
          </ContactButton>

          <ContactButton onPress={() => Linking.openURL(`mailto:${incident.email}`)}>
            <ContactButtonText>E-mail</ContactButtonText>
          </ContactButton>

        </ContactActions>
      </Contact>
    </Container>
  );
};

export default Details;
