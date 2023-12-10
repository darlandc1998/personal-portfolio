import React from 'react';
import { ContainerHeader, LineHeader, Header } from './styles';

interface IProps {
  title: string;
}

const HeaderComponent: React.FC<IProps> = ({ title }) => (
  <ContainerHeader>
    <LineHeader />
    <Header>{title}</Header>
    <LineHeader />
  </ContainerHeader>
);

export default HeaderComponent;
