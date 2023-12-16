import styled from 'styled-components';
import { Colors } from '@Styles/Colors';
import { View } from '@Components/Native';
import { Input, Button, Text, Image } from '@Components/Antd';
import { lightenColor } from '@Utils/Colors';
import { SendOutlined } from '@ant-design/icons';

export const Container = styled(View)`
  background: ${lightenColor(Colors.primaryBackgroundColor, 10)};
  height: 520px;
`;

export const ContainerWaves = styled(View)`
  position: relative;
  height: 100px;
  background: ${Colors.primaryBackgroundColor};

  ::before {
    content: '';
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 53%;
    height: 100px;
    background: ${lightenColor(Colors.primaryBackgroundColor, 10)};
    right: 0px;
    top: 70px;
  }

  ::after {
    content: '';
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 58%;
    height: 100px;
    background-color: ${Colors.primaryBackgroundColor};
    left: 0px;
    top: 33px;
  }
`;

export const ContentContactMe = styled(View)`
  display: flex;
  flex-direction: row;
  background: ${lightenColor(Colors.primaryBackgroundColor, 10)};
  align-items: center;
  gap: 15px;
`;

export const ContentImage = styled(View)`
  flex: 1;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const ImageCover = styled(Image)`
  height: 400px;
  background: ${lightenColor(Colors.primaryBackgroundColor, 10)};
`;

export const Developer = styled(Text)`
  text-align: center;
  color: ${Colors.secondaryBackgroundColor};
  background: ${lightenColor(Colors.primaryBackgroundColor, 10)};
  padding-top: 5px;
  font-weight: bold;
`;

export const ContainerForm = styled(View)`
  display: block;
  background-color: transparent;
  padding-top: 35px;
  padding-left: 50px;
  padding-right: 50px;
  text-align: center;
  align-self: center;
  z-index: 1;
  flex: 1;
`;

export const TitleForm = styled(Text)`
  font-size: 25px;
  color: ${Colors.secondaryBackgroundColor};
  background: transparent;
`;

export const NameInput = styled(Input)`
  margin-bottom: 10px;
  background: ${Colors.primaryBackgroundColor};
  border-color: ${Colors.secondaryBackgroundColor};
  color: ${Colors.secondaryBackgroundColor};
  padding: 10px;
  ::placeholder {
    color: ${Colors.secondaryBackgroundColor};
  }
`;

export const EmailInput = styled(Input)`
  margin-bottom: 10px;
  background: ${Colors.primaryBackgroundColor};
  border-color: ${Colors.secondaryBackgroundColor};
  color: ${Colors.secondaryBackgroundColor};
  padding: 10px;
  ::placeholder {
    color: ${Colors.secondaryBackgroundColor};
  }
`;

export const MessageInput = styled(Input.TextArea)`
  margin-bottom: 10px;
  background: ${Colors.primaryBackgroundColor};
  border-color: ${Colors.secondaryBackgroundColor};
  color: ${Colors.secondaryBackgroundColor};
  padding: 10px;
  ::placeholder {
    color: ${Colors.secondaryBackgroundColor};
  }
`;

export const ButtonInput = styled(Button)`
  height: 50px;
  background: ${Colors.secondaryBackgroundColor};
  font-size: 20px;
  display: flex;
  align-items: center;
  padding: 10px 30px;
  span {
    background-color: transparent;
    color: ${Colors.primaryBackgroundColor};
    font-weight: bold;
  }
  :hover {
    background: ${lightenColor(Colors.secondaryBackgroundColor, 10)} !important;
  }
`;

export const SendOutlinedIcon = styled(SendOutlined)`
  font-size: 25px;

  * {
    background: transparent !important;
    color: ${Colors.primaryBackgroundColor};
  }
`;
