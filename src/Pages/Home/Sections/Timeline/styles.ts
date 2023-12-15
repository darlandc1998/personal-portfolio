import styled from 'styled-components';
import { Colors } from '@Styles/Colors';

interface ITimelineProps {
  iconType: string;
}

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

  @media screen and (max-width: 1000px) {
    ::after {
      left: 5% !important;
    }
  }
`;

export const ContainerLeft = styled.div<ITimelineProps>`
  padding-top: 25px;
  padding-bottom: 25px;
  padding-right: 50px;
  position: relative;
  background-color: inherit;
  width: 50%;
  left: 0;

  ::after {
    content: '';
    position: absolute;
    width: 60px;
    height: 60px;
    right: -33px;
    background: url(${props => props.iconType}), ${Colors.primaryTextColor};
    background-repeat: no-repeat;
    background-position: center;
    border: 4px solid ${Colors.secondaryBackgroundColor};
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }

  ::before {
    content: ' ';
    height: 0;
    position: absolute;
    top: 40px;
    width: 0;
    z-index: 1;
    right: 40px;
    border: medium solid ${Colors.primaryTextColor};
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent ${Colors.primaryTextColor};
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    padding-left: 100px;
    padding-bottom: 50px;
    ::before {
      left: 91px;
      border: medium solid ${Colors.primaryTextColor};
      border-width: 10px 10px 10px 0;
      border-color: transparent ${Colors.primaryTextColor} transparent
        transparent;
    }
    ::after {
      left: 10px;
    }
  }
`;

export const ContainerRight = styled.div<ITimelineProps>`
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 50px;
  position: relative;
  background-color: inherit;
  width: 50%;
  left: 50%;

  ::after {
    content: '';
    position: absolute;
    width: 60px;
    height: 60px;
    right: -17px;
    background: url(${props => props.iconType}), ${Colors.primaryTextColor};
    background-repeat: no-repeat;
    background-position: center;
    border: 4px solid ${Colors.secondaryBackgroundColor};
    top: 15px;
    border-radius: 50%;
    z-index: 1;
    left: -35px;
  }

  ::before {
    content: ' ';
    height: 0;
    position: absolute;
    top: 40px;
    width: 0;
    z-index: 1;
    left: 40px;
    border: medium solid ${Colors.primaryTextColor};
    border-width: 10px 10px 10px 0;
    border-color: transparent ${Colors.primaryTextColor} transparent transparent;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    padding-left: 100px;
    padding-right: 50px;
    padding-bottom: 50px;
    left: 0%;
    ::before {
      left: 91px;
      border: medium solid ${Colors.primaryTextColor};
      border-width: 10px 10px 10px 0;
      border-color: transparent ${Colors.primaryTextColor} transparent
        transparent;
    }
    ::after {
      left: 10px;
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
  background-color: ${Colors.primaryTextColor};
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  background-color: ${Colors.primaryTextColor};
  color: ${Colors.primaryBackgroundColor};
  font-size: 35px;
  font-weight: bold;
`;

export const ContentPeriod = styled.div`
  background-color: ${Colors.primaryTextColor};
  display: flex;
  flex-direction: row;
  flex: 1;
  align-self: flex-end;
  padding: 10px 0px;
`;

export const Period = styled.span`
  background-color: ${Colors.primaryTextColor};
  color: rgb(92, 84, 112);
  font-size: 20px;
  padding: 0px 5px;
  border-bottom: 3px solid ${Colors.secondaryBackgroundColor};
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
`;

export const Description = styled.span`
  background-color: ${Colors.primaryTextColor};
  color: black;
  font-size: 28px;
`;

export const ContainerTech = styled.div`
  background-color: ${Colors.primaryTextColor};
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
`;

export const TechTitle = styled.span`
  background-color: ${Colors.primaryTextColor};
  color: black;
  font-size: 23px;
  margin-right: 5px;
`;

export const ContentTech = styled.div`
  background-color: ${Colors.primaryTextColor};
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 15px;
  margin-top: 10px;

  @media screen and (min-width: 1169px) and (max-width: 1440px) {
    grid-template-columns: auto auto;
  }

  @media screen and (max-width: 1168px) {
    grid-template-columns: auto auto;
    border-radius: 5px;
  }
`;

export const Tech = styled.span`
  background-color: ${Colors.primaryBackgroundColor};
  color: ${Colors.primaryTextColor};
  font-size: 20px;
  border-radius: 3px;
  padding: 3px 15px;
  text-align: center;
`;
