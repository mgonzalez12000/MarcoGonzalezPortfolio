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
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="January 2024 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon>}
  >
    <h3 className="vertical-timeline-element-title">Wells Fargo</h3>
    <h4 className="vertical-timeline-element-subtitle">Associate Engineer</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
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
    <h3 className="vertical-timeline-element-title">California State University, Los Angeles</h3>
    <p>
      Graduate with a Bachelor's of Science in Computer Science
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
    <h3 className="vertical-timeline-element-title">We2Link</h3>
    <h4 className="vertical-timeline-element-subtitle">Full Stack Software Engineer Intern</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
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
    <h3 className="vertical-timeline-element-title">Johnson & Johnson</h3>
    <h4 className="vertical-timeline-element-subtitle">Technology Intern</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
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
    <h3 className="vertical-timeline-element-title">Community Partners</h3>
    <h4 className="vertical-timeline-element-subtitle">Computer Science Tutor</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
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
    <h3 className="vertical-timeline-element-title">Texas Advanced Computing Center (TACC)</h3>
    <h4 className="vertical-timeline-element-subtitle">Data Science Research Intern</h4>
    <p>
      User Experience, Visual Design
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
    <h3 className="vertical-timeline-element-title">NASA</h3>
    <h4 className="vertical-timeline-element-subtitle">Pre-Trainee</h4>
    <p>
      User Experience, Visual Design
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
    <h3 className="vertical-timeline-element-title">California State University, Los Angeles</h3>
    <p>
      Began 4 year degree in Computer Science
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
  )
}
export default TimelineSection