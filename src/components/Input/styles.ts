import styled from 'styled-components/native';
import theme from '../../utils/theme';

export const Container = styled.View`
  margin: 10px;
  background-color: ${theme.font};
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  margin: 0 8px;
`;

export const View = styled.View`
  padding: 16px;
  background-color: ${theme.details};
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;
