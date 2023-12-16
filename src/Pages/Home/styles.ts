import styled from 'styled-components';
import { device } from '@Styles/Devices';

export const Container = styled.div``;

export const Content = styled.div`
  padding: 0px 50px;

  @media ${device.laptop} {
    padding: 0px 130px;
  }
`;

export const ContentGapTop = styled.div`
  margin-top: 50px;
`;
