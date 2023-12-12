import styled, { css } from 'styled-components';

export const ContainerFlags = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  padding: 10px;
  right: 35px;
`;

interface IFlagProps {
  isSelected: boolean;
}

export const Flag = styled.img<IFlagProps>`
  cursor: pointer;
  width: 48px;
  height: 48px;
  margin: 10px;
  filter: grayscale(1);

  :hover {
    filter: grayscale(0.5);
  }

  ${props =>
    props.isSelected &&
    css`
      filter: grayscale(0);
    `}
`;
