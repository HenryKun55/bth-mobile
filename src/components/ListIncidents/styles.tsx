import styled from 'styled-components/native';
import { colors } from '../../styles';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native-gesture-handler';
import { Incident } from 'src/types/Incidents';

export const Container = styled(FlatList as new () => FlatList<Incident>)`
  margin-top: 32px;
`;

export const Card = styled.View`
  padding: 24px;
  border-radius: 8px;
  background: ${colors.white};
  margin-bottom: 16px;
`;

export const Property = styled.Text`
  font-size: ${RFPercentage(2)}px;
  color: ${colors.greyDark};
  font-weight: bold;
`;

export const Value = styled.Text`
  font-size: ${RFPercentage(2.1)}px;
  margin-top: 8px;
  margin-bottom: 24px;
  color: ${colors.subtitle};
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: ${RFPercentage(2.1)}px;
  color: ${colors.red};
  font-weight: bold;
`;
