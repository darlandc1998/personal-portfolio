import styled from 'styled-components';
import { Colors } from '@Styles/Colors';
import { View } from '@Components/Native';
import { Text, Image } from '@Components/Antd';

export const Container = styled(View)``;

export const ContainerCards = styled(View)`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  gap: 30px;
  transition: all 1s;

  @media screen and (max-width: 1500px) {
    grid-template-columns: auto auto auto;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: auto auto;
  }
`;

export const Card = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  align-items: center;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
    span {
      color: ${Colors.secondaryBackgroundColor};
    }
  }
`;

export const CardCover = styled(Image)`
  width: 150px !important;
  height: 150px !important;
`;

export const CardTitle = styled(Text)`
  background-color: transparent;
  width: 100%;
  text-align: center;
  font-size: 25px;
  padding-top: 20px;
  color: ${Colors.primaryTextColor};
`;
