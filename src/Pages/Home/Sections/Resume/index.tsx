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

const ResumeSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Content>
      <ProfileContent>
        <ProfilePicture src="https://res.cloudinary.com/du5rnoez4/image/upload/v1702084682/cf96c943-de92-4858-86f9-a7c07996ed7f-removebg-preview.png"></ProfilePicture>
      </ProfileContent>
      <DetailContent>
        <Name>Darlan Domingos Candiotto</Name>
        <Profession>{t('resume.position')}</Profession>
      </DetailContent>
    </Content>
  );
};

export default ResumeSection;
