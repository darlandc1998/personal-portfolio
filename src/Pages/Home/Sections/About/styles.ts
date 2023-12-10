import styled from 'styled-components';
import { Colors } from '@Styles/Colors';
import { Text } from '@Components/Antd';
import { View } from '@Components/Native';

export const Content = styled(View)`
  display: flex;
`;

export const ContentCard = styled(View)`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Description = styled(Text)`
  color: ${Colors.primaryTextColor};
  font-size: 30px;
  margin-left: 5px;
`;
