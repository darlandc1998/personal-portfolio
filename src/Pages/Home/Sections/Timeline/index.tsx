import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../Header';
import {
  Timeline,
  ContainerLeft,
  ContainerRight,
  Content,
  ContentInformation,
  Title,
  ContentPeriod,
  Period,
  Description,
  Tech,
  ContainerTech,
  TechTitle,
  ContentTech,
} from './styles';

const TimelineSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header title={t('timeline.title')} />
      <Timeline>
        <ContainerLeft>
          <Content>
            <ContentInformation>
              <Title>{t('work_experiences.segware_position')}</Title>
              <ContentPeriod>
                <Period>{t('work_experiences.segware_start')}</Period>
                <Period>{t('work_experiences.prefix_duration')}</Period>
                <Period>{t('work_experiences.segware_end')}</Period>
              </ContentPeriod>
              <Description>
                {t('work_experiences.segware_description')}
              </Description>
              <ContainerTech>
                <TechTitle>{t('timeline.technologies')}: </TechTitle>
                <ContentTech>
                  <Tech>Java</Tech>
                  <Tech>Spring Boot</Tech>
                  <Tech>Kafka</Tech>
                  <Tech>Redis</Tech>
                  <Tech>MongoDB</Tech>
                  <Tech>MySQL</Tech>
                </ContentTech>
              </ContainerTech>
            </ContentInformation>
          </Content>
        </ContainerLeft>
        <ContainerRight>
          <Content>
            <ContentInformation>
              <Title>{t('work_experiences.teammove_position')}</Title>
              <ContentPeriod>
                <Period>{t('work_experiences.teammove_start')}</Period>
                <Period>{t('work_experiences.prefix_duration')}</Period>
                <Period>{t('work_experiences.teammove_end')}</Period>
              </ContentPeriod>
              <Description>
                {t('work_experiences.teammove_description')}
              </Description>
              <ContainerTech>
                <TechTitle>{t('timeline.technologies')}: </TechTitle>
                <ContentTech>
                  <Tech>ReactJS</Tech>
                  <Tech>ReactNative</Tech>
                  <Tech>NodeJS</Tech>
                  <Tech>PostgreSQL</Tech>
                  <Tech>Java Server Faces</Tech>
                </ContentTech>
              </ContainerTech>
            </ContentInformation>
          </Content>
        </ContainerRight>
        <ContainerLeft>
          <Content>
            <ContentInformation>
              <Title>{t('coursers_experiences.unesc_position')}</Title>
              <ContentPeriod>
                <Period>{t('coursers_experiences.unesc_start')}</Period>
                <Period>{t('coursers_experiences.prefix_duration')}</Period>
                <Period>{t('coursers_experiences.unesc_end')}</Period>
              </ContentPeriod>
              <Description>
                {t('coursers_experiences.unesc_description')}
              </Description>
            </ContentInformation>
          </Content>
        </ContainerLeft>
        <ContainerRight>
          <Content>
            <ContentInformation>
              <Title>{t('work_experiences.tw_position')}</Title>
              <ContentPeriod>
                <Period>{t('work_experiences.tw_start')}</Period>
                <Period>{t('work_experiences.prefix_duration')}</Period>
                <Period>{t('work_experiences.tw_end')}</Period>
              </ContentPeriod>
              <Description>{t('work_experiences.tw_description')}</Description>
              <ContainerTech>
                <TechTitle>{t('timeline.technologies')}: </TechTitle>
                <ContentTech>
                  <Tech>Java Server Faces</Tech>
                  <Tech>Android</Tech>
                  <Tech>PostgreSQL</Tech>
                </ContentTech>
              </ContainerTech>
            </ContentInformation>
          </Content>
        </ContainerRight>
        <ContainerLeft>
          <Content>
            <ContentInformation>
              <Title>{t('coursers_experiences.satc_position')}</Title>
              <ContentPeriod>
                <Period>{t('coursers_experiences.satc_start')}</Period>
                <Period>{t('coursers_experiences.prefix_duration')}</Period>
                <Period>{t('coursers_experiences.satc_end')}</Period>
              </ContentPeriod>
              <Description>
                {t('coursers_experiences.satc_description')}
              </Description>
            </ContentInformation>
          </Content>
        </ContainerLeft>
      </Timeline>
    </>
  );
};

export default TimelineSection;
