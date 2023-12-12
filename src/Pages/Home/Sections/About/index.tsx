import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../Header';
import { Content, ContentCard, Description } from './styles';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Content>
      <ContentCard>
        <Header title={t('about.title')} />
        <Description>{t('about.description')}</Description>
      </ContentCard>
    </Content>
  );
};

export default AboutSection;
