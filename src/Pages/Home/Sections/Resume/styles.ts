import styled from 'styled-components';
import {
  LinkedinOutlined,
  GithubOutlined,
  InstagramOutlined,
  GitlabOutlined,
} from '@ant-design/icons';
import { device } from '@Styles/Devices';
import { Colors } from '@Styles/Colors';
import cover from '@Images/Profiles/cover.jpg';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(rgba(40, 42, 54, 0.92), rgba(40, 42, 54, 0.92)),
    url(${cover});

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  flex: 1;
  text-align: left;
  background-color: transparent;
`;

export const ProfilePicture = styled.img`
  background-color: transparent;
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
  background-color: transparent;
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: right;
`;

export const Name = styled.div`
  background-color: transparent;
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
  background-color: transparent;
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

export const Contacts = styled.div`
  background-color: transparent;
  position: relative;
  padding-top: 10px;

  @media ${device.laptop} {
    animation: ContactsMove 3s both;
    @keyframes ContactsMove {
      from {
        right: 0px;
      }
      to {
        right: 150px;
      }
    }
  }
  @media ${device.desktop} {
    animation: ContactsMove 5s both;
    @keyframes ContactsMove {
      from {
        right: 0px;
      }
      to {
        right: 320px;
      }
    }
  }
`;

export const LinkedinOutlinedContact = styled(LinkedinOutlined)`
  color: ${Colors.primaryTextColor};
  font-size: 40px;
  margin: 10px;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
`;

export const GithubOutlinedContact = styled(GithubOutlined)`
  color: ${Colors.primaryTextColor};
  font-size: 40px;
  margin: 10px;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
`;

export const InstagramOutlinedContact = styled(InstagramOutlined)`
  color: ${Colors.primaryTextColor};
  font-size: 40px;
  margin: 10px;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
`;

export const GitlabOutlinedContact = styled(GitlabOutlined)`
  color: ${Colors.primaryTextColor};
  font-size: 40px;
  margin: 10px;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
`;
