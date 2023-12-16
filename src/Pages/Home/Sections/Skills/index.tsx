import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../Header';
import {
  Container,
  ContainerCards,
  Card,
  CardCover,
  CardTitle,
} from './styles';

interface IStacks {
  label: string;
  icon: string;
}

const stacks: IStacks[] = [
  {
    label: 'JavaScript',
    icon: 'https://res.cloudinary.com/du5rnoez4/image/upload/v1702683461/PersonalPortfolio/Skills/javascript.png',
  },
  {
    label: 'TypeScript',
    icon: 'https://res.cloudinary.com/du5rnoez4/image/upload/v1702683467/PersonalPortfolio/Skills/typescript.png',
  },
  {
    label: 'ReactJS',
    icon: 'https://res.cloudinary.com/du5rnoez4/image/upload/v1702683465/PersonalPortfolio/Skills/reactjs.png',
  },
  {
    label: 'NodeJS',
    icon: 'https://res.cloudinary.com/du5rnoez4/image/upload/v1702683464/PersonalPortfolio/Skills/nodejs.png',
  },
  {
    label: 'Java',
    icon: 'https://res.cloudinary.com/du5rnoez4/image/upload/v1702683461/PersonalPortfolio/Skills/java.png',
  },
  {
    label: 'SpringBoot',
    icon: 'https://res.cloudinary.com/du5rnoez4/image/upload/v1702683466/PersonalPortfolio/Skills/spring.png',
  },
  {
    label: 'HTML',
    icon: 'https://res.cloudinary.com/du5rnoez4/image/upload/v1702683460/PersonalPortfolio/Skills/html5.png',
  },
  {
    label: 'CSS',
    icon: 'https://res.cloudinary.com/du5rnoez4/image/upload/v1702683460/PersonalPortfolio/Skills/css3.png',
  },
  {
    label: 'MySQL',
    icon: 'https://res.cloudinary.com/du5rnoez4/image/upload/v1702683463/PersonalPortfolio/Skills/mysql.png',
  },
  {
    label: 'PostgreSQL',
    icon: 'https://res.cloudinary.com/du5rnoez4/image/upload/v1702683465/PersonalPortfolio/Skills/postgresql.png',
  },
  {
    label: 'MongoDB',
    icon: 'https://res.cloudinary.com/du5rnoez4/image/upload/v1702683463/PersonalPortfolio/Skills/mongodb.png',
  },
  {
    label: 'Redis',
    icon: 'https://res.cloudinary.com/du5rnoez4/image/upload/v1702683466/PersonalPortfolio/Skills/redis.png',
  },
  {
    label: 'Docker',
    icon: 'https://res.cloudinary.com/du5rnoez4/image/upload/v1702683460/PersonalPortfolio/Skills/docker.png',
  },
  {
    label: 'Kafka',
    icon: 'https://res.cloudinary.com/du5rnoez4/image/upload/v1702683462/PersonalPortfolio/Skills/kafka.png',
  },
  {
    label: 'Linux',
    icon: 'https://res.cloudinary.com/du5rnoez4/image/upload/v1702683462/PersonalPortfolio/Skills/linux.png',
  },
];

const SkillsSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Header title={t('skills.title')}></Header>
      <ContainerCards>
        {stacks.map((stack, index) => (
          <Card key={index}>
            <CardCover preview={false} src={stack.icon} />
            <CardTitle>{stack.label}</CardTitle>
          </Card>
        ))}
      </ContainerCards>
    </Container>
  );
};

export default SkillsSection;
