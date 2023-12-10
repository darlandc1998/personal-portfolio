import React, { useState, useEffect } from 'react';
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
      'https://res.cloudinary.com/du5rnoez4/image/upload/v1702216011/football_867329.png',
    description: 'Playing soccer',
  },
  {
    image:
      'https://res.cloudinary.com/du5rnoez4/image/upload/v1702216142/tv_8936507.png',
    description: 'Watching soccer games',
  },
  {
    image:
      'https://res.cloudinary.com/du5rnoez4/image/upload/v1702216237/dispute_5110046.png',
    description: 'Hanging out with family and friends',
  },
  {
    image:
      'https://res.cloudinary.com/du5rnoez4/image/upload/v1702216377/pizza-shop_7845627.png',
    description: 'Going out with family and friends',
  },
  {
    image:
      'https://res.cloudinary.com/du5rnoez4/image/upload/v1702216441/cinema_2809590.png',
    description: 'Going to the movies',
  },
  {
    image:
      'https://res.cloudinary.com/du5rnoez4/image/upload/v1702216489/vacations_2664593.png',
    description: 'Going to the beaches',
  },
];

const HobbiesSection: React.FC = () => {
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
                <Description>{hobby.description}</Description>
              </Card>
            </CardContainer>
          </ColContainer>
        ))}
      </RowContainer>
    </Container>
  );
};

export default HobbiesSection;
