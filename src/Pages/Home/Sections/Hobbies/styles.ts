import styled from 'styled-components';
import { Colors } from '@Styles/Colors';
import { Image, Text, Row, Col } from '@Components/Antd';
import { View } from '@Components/Native';

export const Container = styled(View)`
  flex: 1;
`;

export const RowContainer = styled(Row)`
  margin-left: 0px !important;
  margin-right: 0px !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
`;

export const ColContainer = styled(Col)``;

export const CardContainer = styled(View)`
  align-items: center;
`;

export const Card = styled(View)`
  display: flex;
  flex-direction: row;
  padding: 20px;
  align-items: center;
  cursor: pointer;
  width: 500px;
  height: 200px;
  margin: 5px;
  border: 1px solid;
  border-radius: 5px;
  border-color: ${Colors.primaryTextColor};
  filter: brightness(0.85);

  span {
    color: ${Colors.primaryTextColor};
  }

  :hover {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
    border-color: ${Colors.secondaryBackgroundColor};
    span {
      color: ${Colors.secondaryBackgroundColor};
    }
  }
`;

export const Cover = styled(Image)`
  object-fit: cover;
  max-width: 150px;
`;

export const Description = styled(Text)`
  font-size: 25px;
  margin-left: 20px;
`;
