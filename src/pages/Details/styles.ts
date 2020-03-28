import styled from 'styled-components/native';
import { colors } from '../../styles';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    top: -16px;
    right: 24px;
`;

export const Card = styled.View`
  padding: 24px;
  margin-top: 24px;
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
  margin-bottom: ${({ last }: { last?: boolean }) => last ? 0 : 24}px;
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

export const Contact = styled.View`
  padding: 24px;
  border-radius: 8px;
  background: ${colors.white};
`;

export const ContactTitle = styled.Text`
  font-size: ${RFPercentage(3)}px;
  font-weight: bold;
  color: ${({ spotlight }: { spotlight?: boolean }) => spotlight ? colors.red : colors.grey} ;
  line-height: 30px;
`;

export const ContactSubtitle = styled.Text`
  font-size: ${RFPercentage(2)}px;
  color: ${colors.subtitle};
  margin-top: 16px;
`;

export const ContactActions = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContactButton = styled.TouchableOpacity`
  background: ${colors.red};
  border-radius: 8px;
  height: 50px;
  width: 48%;
  align-items: center;
  justify-content: center;
`;

export const ContactButtonText = styled.Text`
  font-size: ${RFPercentage(2.1)}px;
  font-weight: bold;
  color: ${colors.white};
`;