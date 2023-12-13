import React from 'react';
import { useTranslation } from 'react-i18next';
import { ContainerFlags, Flag } from './styles';
import BrasilFlag from '@Images/Flags/brasil_flag.svg';
import EUAFlag from '@Images/Flags/eua_flag.svg';

const I18nFlags: React.FC = () => {
  const { i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <ContainerFlags>
      <Flag
        src={BrasilFlag}
        isSelected={selectedLanguage === 'pt-BR'}
        onClick={() => handleChangeLanguage('pt-BR')}
      />
      <Flag
        src={EUAFlag}
        isSelected={selectedLanguage === 'en-US'}
        onClick={() => handleChangeLanguage('en-US')}
      />
    </ContainerFlags>
  );
};

export default I18nFlags;
