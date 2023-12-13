import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Content,
  ProfileContent,
  ProfilePicture,
  DetailContent,
  Name,
  Profession,
} from './styles';
import profile from '@Images/Profiles/profile.png';

const ResumeSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Content>
      <ProfileContent>
        <ProfilePicture src={profile}></ProfilePicture>
      </ProfileContent>
      <DetailContent>
        <Name>Darlan Domingos Candiotto</Name>
        <Profession>{t('resume.position')}</Profession>
      </DetailContent>
    </Content>
  );
};

export default ResumeSection;
