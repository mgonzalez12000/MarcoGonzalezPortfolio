import React from 'react'
import './TimelineSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const TimelineSection = () => {
    return (
      <VerticalTimeline>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(53, 121, 245)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(53, 121, 245)' }}
        date="January 2024 - Present"
        iconStyle={{ background: 'rgb(53, 121, 245)', color: '#fff' }}
        icon={<FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon>}
        >
          <h4 className="vertical-timeline-element-title">Wells Fargo</h4>
          <h6 className="vertical-timeline-element-subtitle">Associate Engineer</h6>
          <p>
            TBD
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: 'rgb(53, 58, 63)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(53, 58, 63)' }}
        date="May 2023"
        iconStyle={{ background: 'rgb(53, 58, 63)', color: '#fff' }}
        icon={<FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>}
        >
          <h4 className="vertical-timeline-element-title">California State University, Los Angeles</h4>
          <p>
            Graduated with a Bachelor's of Science in Computer Science
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(53, 58, 63)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(53, 58, 63)' }}
          date="August 2022 - May 2023"
          iconStyle={{ background: 'rgb(53, 58, 63)', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon>}
        >
          <h4 className="vertical-timeline-element-title">We2Link</h4>
          <h6 className="vertical-timeline-element-subtitle">Full Stack Software Engineer Intern</h6>
          <p>
            ●	Successfully migrated a React Native application to a web-based platform using ReactJS, Tailwind CSS, TypeScript, and Google Firebase by developing and implementing 5 new react components and 1 new accessibility settings page.
          </p>
          <p>
            ●	Utilized Github and Jira to promptly diagnose and resolve production issues by conducting PR reviews. Ensured for clean and stable code to be merged, allowing for smooth operation and minimal downtime by 50% within an agile environment.
          </p>
          <p>
            ●	Assisted in preparing comprehensive reports, software documentation, and presentations for potential investors under the guidance of the We2Link staff.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(53, 58, 63)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(53, 58, 63)' }}
          date="June 2022 - August 2022"
          iconStyle={{ background: 'rgb(53, 58, 63)', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon>}
        >
          <h4 className="vertical-timeline-element-title">Johnson & Johnson</h4>
          <h6 className="vertical-timeline-element-subtitle">Technology Intern</h6>
          <p>
            ●	Shaped the Strategic Customer Group website by crafting Agile User Stories in Jira through collaborative discussions with 4 tech leads and 2 stakeholders to capture business requirements and ensure top-notch UI/UX design.
          </p>
          <p>
            ●	Led Ponvory SharePoint site development, guiding brand integration, strategizing structure, and enhancing user experience with existing UI, while aligning it with the brand identity.
          </p>
          <p>
            ●	Extracted site data with Google Analytics and developed 2 Google Data Studio dashboards to analyze metrics before and after a website redesign. Led a demo for leadership, business teams, and stakeholders to support future decision-making.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(53, 58, 63)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(53, 58, 63)' }}
          date="January 2022 - May 2022"
          iconStyle={{ background: 'rgb(53, 58, 63)', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon>}
        >
          <h4 className="vertical-timeline-element-title">Community Partners</h4>
          <h6 className="vertical-timeline-element-subtitle">Computer Science Tutor</h6>
          <p>
            ● Conducted lectures on programming fundamentals such as procedural programming, scope, functions, data structures, and algorithms. Proceeded to teach app development and introduce the event-driven programming paradigm using the JavaScript language on the Code.org platform.
          </p>
          <p>
            ● Created review sessions and practice exams to prepare students for the AP CSP exam. This includes creating powerpoint presentations, thinking of effective coding samples to demo live, and creating effective practice programming problems that correlate with concepts learned.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(53, 58, 63)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(53, 58, 63)' }}
          date="June 2020 - August 2020"
          iconStyle={{ background: 'rgb(53, 58, 63)', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon>}
        >
          <h4 className="vertical-timeline-element-title">Texas Advanced Computing Center (TACC)</h4>
          <h6 className="vertical-timeline-element-subtitle">Data Science Research Intern</h6>
          <p>
            ●	As part of the ACSC program, I collaborated with 7 other multidisciplinary teams to apply data science, computational thinking, and enabled computational research experience towards a social challenge.
          </p>
          <p>
            ●	Used Python’s Matplotlib, Pandas, and NumPy libraries to parse CSV files, clean data, and initialize DataFrames. Created 4 effective, and engaging data visualizations to support my research question.
          </p>
          <p>
            ●	Ran, tracked, and stopped Jupyter Notebook jobs on TACC’s supercomputers via the terminal.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(53, 58, 63)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(53, 58, 63)' }}
          date="August 2019 - March 2020"
          iconStyle={{ background: 'rgb(53, 58, 63)', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon>}
        >
          <h4 className="vertical-timeline-element-title">NASA</h4>
          <h6 className="vertical-timeline-element-subtitle">Pre-Trainee</h6>
          <p>
            ●	Selected as 1 of 50 students to participate in NASA DIRECT STEM, where I attended workshops by JPL, UCI, and TACC to enhance Python and Linux skills for advanced computation and programming.
          </p>
          <p>
            ●	Cleaned data and conducted data analysis on 2D and 3D visualizations by utilizing Python and libraries such as NumPy, Pandas, and Seaborn.
          </p>
          <p>
            ●	Gained hands-on experience with high performance computing, including job management by using the command prompt and Linux commands.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: 'rgb(53, 58, 63)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(53, 58, 63)' }}
          date="August 2018"
          iconStyle={{ background: 'rgb(53, 58, 63)', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faSchool}></FontAwesomeIcon>}
        >
          <h4 className="vertical-timeline-element-title">California State University, Los Angeles</h4>
          <p>
            Began attending Cal State LA
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
  );
};

export default TimelineSection;