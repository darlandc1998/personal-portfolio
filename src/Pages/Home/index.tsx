import React from 'react';
import { Container, Content, ContentGapTop } from './styles';

import ResumeSection from './Sections/Resume';
import AboutSection from './Sections/About';
import TimelineSection from './Sections/Timeline';
import HobbiesSection from './Sections/Hobbies';

const HomePage: React.FC = () => (
  <Container>
    <ResumeSection />
    <Content>
      <AboutSection />
      <ContentGapTop />
      <TimelineSection />
      <ContentGapTop />
      <HobbiesSection />
    </Content>
  </Container>
);

export default HomePage;
