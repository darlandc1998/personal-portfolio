import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import Header from '../Header';
import {
  Timeline,
  ContainerLeft,
  ContainerRight,
  Content,
  ContentInformation,
  Title,
  Period,
  Description,
} from './styles';

interface IExperience {
  title: string;
  start: Date;
  end: Date;
  description: string;
}

const fakeExperiences: IExperience[] = [
  {
    title: 'Experience 1',
    description: 'Description',
    start: new Date(),
    end: new Date(),
  },
  {
    title: 'Experience 2',
    description: 'Description',
    start: new Date(),
    end: new Date(),
  },
  {
    title: 'Experience 3',
    description: 'Description',
    start: new Date(),
    end: new Date(),
  },
];

const TimelineSection: React.FC = () => {
  const { t } = useTranslation();
  const [experiences, setExperiences] = useState<IExperience[]>();

  useEffect(() => {
    setExperiences(fakeExperiences);
  }, []);

  return (
    <>
      <Header title={t('timeline.title')} />
      <Timeline>
        {experiences?.map((data, index) =>
          index % 2 > 0 ? (
            <ContainerRight key={index}>
              <Content>
                <ContentInformation>
                  <Title>{data.title}</Title>
                  <Period>
                    {moment(data.start).format('LL')}
                    {moment(data.end).format('LL')}
                  </Period>
                  <Description>{data.description}</Description>
                </ContentInformation>
              </Content>
            </ContainerRight>
          ) : (
            <ContainerLeft key={index}>
              <Content>
                <ContentInformation>
                  <Title>{data.title}</Title>
                  <Period>
                    {moment(data.start).format('LL')} to
                    {moment(data.end).format('LL')}
                  </Period>
                  <Description>{data.description}</Description>
                </ContentInformation>
              </Content>
            </ContainerLeft>
          ),
        )}
      </Timeline>
    </>
  );
};

export default TimelineSection;
