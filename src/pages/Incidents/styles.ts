import styled from 'styled-components/native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {colors} from '../../styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 24px;
`;

export const Total = styled.Text`
  position: absolute;
  right: 24px;
  color: ${colors.subtitle};
`;

export const Bold = styled.Text`
  font-weight: bold;
  color: ${colors.grey};
`;

export const Title = styled.Text`
  font-size: ${RFPercentage(4)}px;
  margin-top: 24px;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: ${RFPercentage(2.2)}px;
  margin-top: 16px;
  line-height: 24px;
  color: ${colors.subtitle};
`;
