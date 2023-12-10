import styled from 'styled-components';
import { Colors } from '@Styles/Colors';

export const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  ::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: ${Colors.primaryTextColor};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }

  @media screen and (max-width: 600px) {
    ::after {
      left: 31px;
    }
  }
`;

export const ContainerLeft = styled.div`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  left: 0;

  ::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: ${Colors.primaryTextColor};
    border: 4px solid ${Colors.secondaryBackgroundColor};
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }

  ::before {
    content: ' ';
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    right: 30px;
    border: medium solid ${Colors.primaryTextColor};
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent ${Colors.primaryTextColor};
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    ::before {
      left: 60px;
      border: medium solid ${Colors.primaryTextColor};
      border-width: 10px 10px 10px 0;
      border-color: transparent ${Colors.primaryTextColor} transparent
        transparent;
    }
    ::after {
      left: 15px;
    }
  }
`;

export const ContainerRight = styled.div`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  left: 50%;

  ::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: ${Colors.primaryTextColor};
    border: 4px solid ${Colors.secondaryBackgroundColor};
    top: 15px;
    border-radius: 50%;
    z-index: 1;
    left: -16px;
  }

  ::before {
    content: ' ';
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 30px;
    border: medium solid ${Colors.primaryTextColor};
    border-width: 10px 10px 10px 0;
    border-color: transparent ${Colors.primaryTextColor} transparent transparent;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0%;
    ::before {
      left: 60px;
      border: medium solid ${Colors.primaryTextColor};
      border-width: 10px 10px 10px 0;
      border-color: transparent ${Colors.primaryTextColor} transparent
        transparent;
    }
    ::after {
      left: 15px;
    }
  }
`;

export const Content = styled.div`
  padding: 20px 30px;
  background-color: ${Colors.primaryTextColor};
  position: relative;
  border-radius: 6px;
`;

export const ContentInformation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  background-color: ${Colors.primaryTextColor};
  color: black;
  font-size: 35px;
  font-weight: bold;
`;

export const Period = styled.span`
  background-color: ${Colors.primaryTextColor};
  color: rgb(92, 84, 112);
  font-size: 20px;
  flex: 1;
  text-align: right;
`;

export const Description = styled.span`
  background-color: ${Colors.primaryTextColor};
  color: black;
  font-size: 28px;
`;
