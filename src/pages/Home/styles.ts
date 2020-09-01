import styled from 'styled-components/native';
import theme from '../../utils/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.background};
`;

export const Header = styled.View`
  margin: 10px;
  margin-top: 20px;
`;

export const Title = styled.Text`
  text-align: center;
  color: ${theme.font};
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 20px;
`;

export const WrapperImage = styled.View`
  margin: 140px auto;
`;
