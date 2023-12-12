import styled from 'styled-components';
import { device } from '@Styles/Devices';
import { Colors } from '@Styles/Colors';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  flex: 1;
  text-align: left;
`;

export const ProfilePicture = styled.img`
  position: relative;
  object-fit: cover;
  object-position: bottom;
  z-index: 1;
  @media ${device.laptop} {
    animation: pictureMove 3s both;
    @keyframes pictureMove {
      from {
        left: 0px;
      }
      to {
        left: 150px;
      }
    }
  }
  @media ${device.desktop} {
    animation: pictureMove 3s both;
    @keyframes pictureMove {
      from {
        left: 0px;
      }
      to {
        left: 250px;
      }
    }
  }
`;

export const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: right;
`;

export const Name = styled.div`
  position: relative;
  font-size: 70px;

  @media screen and (max-width: 1023px) {
    font-family: 'Courier New' !important;
    color: #76ff03;
    font-size: 45px;
    overflow: hidden;
    border-right: 0.15em solid ${Colors.secondaryBackgroundColor};
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: 0.15em;
    animation: typing 3.5s steps(30, end), blink-caret 0.5s step-end infinite;

    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }

    @keyframes blink-caret {
      from,
      to {
        border-color: transparent;
      }
      50% {
        border-color: ${Colors.secondaryBackgroundColor};
      }
    }
  }

  @media ${device.laptop} {
    font-size: 50px;
    animation: nameMove 3s both;
    @keyframes nameMove {
      from {
        right: 0px;
      }
      to {
        right: 150px;
      }
    }
  }

  @media ${device.desktop} {
    font-size: 70px;
    animation: nameMove 3s both;
    @keyframes nameMove {
      from {
        right: 0px;
      }
      to {
        right: 270px;
      }
    }
  }
`;

export const Profession = styled.div`
  position: relative;
  font-size: 40px;
  @media ${device.laptop} {
    font-size: 30px;
    animation: professionMove 3s both;
    @keyframes professionMove {
      from {
        right: 0px;
      }
      to {
        right: 150px;
      }
    }
  }
  @media ${device.desktop} {
    font-size: 40px;
    animation: professionMove 5s both;
    @keyframes professionMove {
      from {
        right: 0px;
      }
      to {
        right: 320px;
      }
    }
  }
`;
