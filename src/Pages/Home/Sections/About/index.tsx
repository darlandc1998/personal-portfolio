import React from 'react';
import Header from '../Header';
import { Content, ContentCard, Description } from './styles';

const AboutSection: React.FC = () => (
  <Content>
    <ContentCard>
      <Header title="About me" />
      <Description>
        I have been working with programming since 2015 (Over 8 years of
        experience), I am a full-stack developer, working with a range of
        technologies, like Java, JavaScript, and other web frameworks. I have
        experience in developing and maintaining software applications, ensuring
        code quality, and optimizing performance. Moreover, I have led a team
        with 3 people, I was responsible for creating their tasks and analyzing
        them as well. I really believe that code quality is one of the most
        important things for excellent software work. So that is the reason I am
        all the time reading articles and keeping me updated about the new
        technologies on the market. Therefore, I believe that my ability to work
        very well in the group and my hard work to deliver high-quality code
        align with the values of the company. I am excited about the opportunity
        to work at Avanade, because like me you are constantly innovating about
        technologies and ideas for the better of the people. I am confident that
        my skills, problem- solving abilities, and dedication to keeping updated
        can make me the right candidate for this software developer role.
        Moreover, I am an Italian citizen and have my passport on hand so I can
        travel there when necessary.
      </Description>
    </ContentCard>
  </Content>
);

export default AboutSection;
