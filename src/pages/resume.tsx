import * as React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {
  databases,
  devOps,
  frameworks,
  jobs,
  languages,
  Skill,
  tools,
} from '../data/resume';

import { Chip } from '../components/Chip';

import '../assets/scss/resume.scss';
import { Row, Col } from 'antd';
import { Layout } from '../components/Layout';

const JobSection = () => (
  <div className="section__experience">
    {jobs.map((job, index: number) => (
      <div className="resume-item" key={index}>
        <div className="avatar">
          <img src={job.logo} alt={job.employer + ' Logo'} />
          <div className="meta">
            <h3>
              {job.title} @ {job.employer}
            </h3>
            <span className="resume-item__dates">
              {job.fromDate} · {job.toDate}
            </span>
          </div>
        </div>
        <div className="resume-item__summary">
          {ReactHtmlParser(job.description)}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {job.tags.map(tag => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const LanguageSection = () => (
  <div>
    <h2 className="section__heading">Languages</h2>
    {languages.map((language: Skill, i: number) => (
      <div key={i} className="skill">
        <a href={language.link} target="_blank">
          <span>{language.skill}</span>
          <i
            className={language.icon}
            style={{ fontSize: 16, color: '#000' }}
          />
        </a>
      </div>
    ))}
  </div>
);

const DatabaseSection = () => (
  <div>
    <h2 className="section__heading">Databases</h2>
    {databases.map(({ skill, icon, link }: Skill, i: number) => (
      <div key={i} className="skill">
        <a href={link} target="_blank">
          <span>{skill}</span>
          <i className={icon} style={{ fontSize: 16, color: '#000' }} />
        </a>
      </div>
    ))}
  </div>
);

const FrameworkSection = () => (
  <div>
    <h2 className="section__heading">Frameworks</h2>
    {frameworks.map(({ skill, icon, link }: Skill, i: number) => (
      <div key={i} className="skill">
        <a href={link} target="_blank">
          <span>{skill}</span>
          <i className={icon} style={{ fontSize: 16, color: '#000' }} />
        </a>
      </div>
    ))}
  </div>
);

const ToolingSection = () => (
  <div>
    <h2 className="section__heading">Tooling</h2>
    {tools.map(({ skill, icon, link }: Skill, i: number) => (
      <div key={i} className="skill">
        <a href={link} target="_blank">
          <span>{skill}</span>
          <i className={icon} style={{ fontSize: 16, color: '#000' }} />
        </a>
      </div>
    ))}
  </div>
);

const DevOpsSection = () => (
  <div>
    <h2 className="section__heading">Dev Ops</h2>
    {devOps.map(({ skill, icon, link }: Skill, i: number) => (
      <div key={i} className="skill">
        <a href={link} target="_blank">
          <span>{skill}</span>
          <i className={icon} style={{ fontSize: 16, color: '#000' }} />
        </a>
      </div>
    ))}
  </div>
);

const ResumePage = () => {
  return (
    <Layout>
      <div>
        <div className="intro-section">
          <h1>Clayton Ray</h1>
          <h2>Software Engineer</h2>
        </div>
        <Row style={{ marginTop: 40 }}>
          <Col span={5} />
          <Col span={14}>
            <JobSection />
          </Col>
          <Col span={5} />
        </Row>
        <Row>
          <div className="skills__section">
            <Col span={6} />
            <Col span={6}>
              <LanguageSection />
              <FrameworkSection />
            </Col>
            <Col span={6}>
              <ToolingSection />
              <DatabaseSection />
              <DevOpsSection />
            </Col>
            <Col span={6} />
          </div>
        </Row>
      </div>
    </Layout>
  );
};

export default ResumePage;
