import React from 'react';
import { Container, Content, ContentGapTop } from './styles';

import { I18nFlags } from '@Components/Native';
import ResumeSection from './Sections/Resume';
import AboutSection from './Sections/About';
import TimelineSection from './Sections/Timeline';
import HobbiesSection from './Sections/Hobbies';
import SkillsSection from './Sections/Skills';
import ContactMeSection from './Sections/Contact';

const HomePage: React.FC = () => (
  <Container>
    <I18nFlags />
    <ResumeSection />
    <Content>
      <AboutSection />
      <ContentGapTop />
      <TimelineSection />
      <ContentGapTop />
      <SkillsSection />
      <ContentGapTop />
      <HobbiesSection />
      <ContactMeSection />
    </Content>
  </Container>
);

export default HomePage;
