import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Content,
  ProfileContent,
  ProfilePicture,
  DetailContent,
  Name,
  Profession,
  Contacts,
  LinkedinOutlinedContact,
  GithubOutlinedContact,
  InstagramOutlinedContact,
  GitlabOutlinedContact,
} from './styles';
import profile from '@Images/Profiles/profile.png';

const ResumeSection: React.FC = () => {
  const { t } = useTranslation();

  const handleOpenLink = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <Content>
      <ProfileContent>
        <ProfilePicture src={profile}></ProfilePicture>
      </ProfileContent>
      <DetailContent>
        <Name>Darlan Domingos Candiotto</Name>
        <Profession>{t('resume.position')}</Profession>
        <Contacts>
          <LinkedinOutlinedContact
            onClick={() =>
              handleOpenLink(
                'https://www.linkedin.com/in/darlan-domingos-candiotto-6b2241133/?locale=en_US',
              )
            }
          />
          <GithubOutlinedContact
            onClick={() => handleOpenLink('https://github.com/darlandc1998')}
          />
          <GitlabOutlinedContact
            onClick={() => handleOpenLink('https://gitlab.com/darlan')}
          />
          <InstagramOutlinedContact onClick={() => handleOpenLink('')} />
        </Contacts>
      </DetailContent>
    </Content>
  );
};

export default ResumeSection;
