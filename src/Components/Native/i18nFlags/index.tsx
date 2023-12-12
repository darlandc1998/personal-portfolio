import React from 'react';
import { useTranslation } from 'react-i18next';
import { ContainerFlags, Flag } from './styles';

const I18nFlags: React.FC = () => {
  const { i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <ContainerFlags>
      <Flag
        src="https://res.cloudinary.com/du5rnoez4/image/upload/v1702344184/brasil-flag.svg"
        isSelected={selectedLanguage === 'pt-BR'}
        onClick={() => handleChangeLanguage('pt-BR')}
      />
      <Flag
        src="https://res.cloudinary.com/du5rnoez4/image/upload/v1702344184/eua-flag.svg"
        isSelected={selectedLanguage === 'en-US'}
        onClick={() => handleChangeLanguage('en-US')}
      />
    </ContainerFlags>
  );
};

export default I18nFlags;
