import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  ContainerWaves,
  ContainerForm,
  TitleForm,
  NameInput,
  EmailInput,
  MessageInput,
  ButtonInput,
  SendOutlinedIcon,
  ContentImage,
  ImageCover,
  ContentContactMe,
} from './styles';

const ContactMeSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <ContainerWaves />
      <ContentContactMe>
        <ContentImage>
          <ImageCover
            preview={false}
            height={300}
            src="https://res.cloudinary.com/du5rnoez4/image/upload/v1702764070/PersonalPortfolio/Contact/contact_cover.svg"
          />
        </ContentImage>
        <ContainerForm>
          <TitleForm>{t('contact.title')}</TitleForm>
          <NameInput placeholder={t('contact.name')}></NameInput>
          <EmailInput placeholder={t('contact.email')}></EmailInput>
          <MessageInput
            placeholder={t('contact.message')}
            rows={6}
            autoSize={false}
          ></MessageInput>
          <ButtonInput type="primary">
            <SendOutlinedIcon />
            {t('contact.send_button')}
          </ButtonInput>
        </ContainerForm>
      </ContentContactMe>
    </Container>
  );
};

export default ContactMeSection;
