import styled from 'styled-components';
import { Colors } from '@Styles/Colors';
import { View } from '@Components/Native';

export const ContainerHeader = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const LineHeader = styled(View)`
  background-color: ${Colors.secondaryBackgroundColor};
  height: 4px;
  flex: 1;
  border-radius: 5px;
`;

export const Header = styled(View)`
  color: ${Colors.primaryTextColor};
  font-size: 50px;
  padding: 10px 0px;
`;
