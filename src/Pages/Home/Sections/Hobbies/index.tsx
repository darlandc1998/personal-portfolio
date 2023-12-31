import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../Header';
import {
  Description,
  Card,
  CardContainer,
  Cover,
  Container,
  RowContainer,
  ColContainer,
} from './styles';

interface IHobbies {
  image: string | undefined;
  description: string;
}

const hobbiesFakes: IHobbies[] = [
  {
    image:
      'https://res.cloudinary.com/du5rnoez4/image/upload/v1702216011/PersonalPortfolio/Hobbies/football_867329.png',
    description: 'play_soccer',
  },
  {
    image:
      'https://res.cloudinary.com/du5rnoez4/image/upload/v1702216142/PersonalPortfolio/Hobbies/tv_8936507.png',
    description: 'watch_soccer_game',
  },
  {
    image:
      'https://res.cloudinary.com/du5rnoez4/image/upload/v1702216237/PersonalPortfolio/Hobbies/dispute_5110046.png',
    description: 'hanging_out_family_and_friends',
  },
  {
    image:
      'https://res.cloudinary.com/du5rnoez4/image/upload/v1702216377/PersonalPortfolio/Hobbies/pizza-shop_7845627.png',
    description: 'going_out_family_and_friends',
  },
  {
    image:
      'https://res.cloudinary.com/du5rnoez4/image/upload/v1702216441/PersonalPortfolio/Hobbies/cinema_2809590.png',
    description: 'going_movies',
  },
  {
    image:
      'https://res.cloudinary.com/du5rnoez4/image/upload/v1702216489/PersonalPortfolio/Hobbies/vacations_2664593.png',
    description: 'going_beach',
  },
];

const HobbiesSection: React.FC = () => {
  const { t } = useTranslation();
  const [hobbies, setHobbies] = useState<IHobbies[]>();

  useEffect(() => {
    setHobbies(hobbiesFakes);
  }, []);

  return (
    <Container>
      <Header title="Hobbies" />
      <RowContainer gutter={[16, 16]} wrap align="middle" justify="center">
        {hobbies?.map((hobby, index) => (
          <ColContainer xxl={{ span: 8 }} lg={{ span: 12 }} key={index}>
            <CardContainer>
              <Card>
                <Cover src={hobby.image} preview={false} />
                <Description>{t('hobbies.' + hobby.description)}</Description>
              </Card>
            </CardContainer>
          </ColContainer>
        ))}
      </RowContainer>
    </Container>
  );
};

export default HobbiesSection;
