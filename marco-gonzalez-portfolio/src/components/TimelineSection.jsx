import React from "react";
import "./TimelineSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import wellsFargoIcon from "../companyIcons/wellsfargo.png";
import we2LinkIcon from "../companyIcons/we2link.png";
import jnjIcon from "../companyIcons/jnj.png";
import engineerFactory from "../companyIcons/engineerFactory.jpg";
import tacc from "../companyIcons/tacc.jpg";
import nasa from "../companyIcons/nasa.jpg";

const TimelineSection = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(53, 121, 245)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(53, 121, 245)" }}
        date="January 2024 - Present"
        iconStyle={{
          backgroundImage: `url(${wellsFargoIcon})`,
          backgroundSize: "120%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        icon=""
      >
        <h4 className="vertical-timeline-element-title">Wells Fargo</h4>
        <h6 className="vertical-timeline-element-subtitle">
          Software Engineering Associate
        </h6>
        <p>
          <p>
            ● Shipped a modernized internal application from start to finish
            using Java Spring Boot and React TypeScript. Built 4 RESTful APIs
            with JUnit and Karate tests and developed 6 frontend pages and 8
            reusable React components with Jest and Playwright tests. Continue
            supporting production enhancements and maintenance.
          </p>
          <p>
            ● Drove investigation, remediation, and validation of Severity 1 and
            Severity 2 security vulnerabilities identified through AI-assisted
            security scans across two large-scale enterprise applications.
            Performed root cause analysis and implemented secure code fixes
            using internal MCP servers, AI-assisted workflows, and prompt
            engineering techniques, strengthening application security and
            supporting an ongoing company-wide remediation initiative.
          </p>
          <p>
            ● Independently refactored the tool’s initial Playwright test suite
            of 81 automated tests to resolve flaky tests caused by premature
            assertions and data race conditions during parallel execution. This
            resulted in improvement of manageability, reliability, and readiness
            for HyperExecute and Harness deployment pipelines, while preventing
            CI/CD slowdowns from unnecessary test restarts due to false
            positives.
          </p>
          <p>
            ● Took project ownership across full-stack components, managing
            CI/CD release workflows using GitHub Actions, release branching, and
            Harness deployments, while coordinating production releases through
            Change Requests in ServiceNow, including implementation plans,
            rollback strategies, and release documentation.
          </p>
          <p>
            ● Serve as the primary technical liaison between engineering teams
            and business stakeholders to triage defects, coordinate UAT
            deployments, and provide release status updates for
            production-impacting issues.
          </p>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "rgb(53, 58, 63)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(53, 58, 63)" }}
        date="May 2023"
        iconStyle={{ background: "rgb(53, 58, 63)", color: "#fff" }}
        icon={<FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>}
      >
        <h4 className="vertical-timeline-element-title">
          California State University, Los Angeles
        </h4>
        <p>Graduated with a Bachelor's of Science in Computer Science</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(53, 58, 63)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(53, 58, 63)" }}
        date="August 2022 - May 2023"
        iconStyle={{
          backgroundImage: `url(${we2LinkIcon})`,
          backgroundSize: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        icon=""
      >
        <h4 className="vertical-timeline-element-title">We2Link</h4>
        <h6 className="vertical-timeline-element-subtitle">
          Full Stack Software Engineer Intern
        </h6>
        <p>
          ● Migrated a React Native application to a web-based platform using
          React TypeScript, Tailwind CSS, and Firebase by building 5 React
          components and an accessibility settings page.
        </p>
        <p>
          ● Used Jira to track user stories and collaborated on GitHub pull
          requests to ensure code quality, stability, and adherence to best
          coding practices, improving release stability by reducing production
          defects by 50%.
        </p>
        <p>
          ● Assisted in preparing comprehensive reports, software documentation,
          and presentations for potential investors under the guidance of the
          We2Link staff.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(53, 58, 63)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(53, 58, 63)" }}
        date="June 2022 - August 2022"
        iconStyle={{
          backgroundImage: `url(${jnjIcon})`,
          backgroundSize: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        icon=""
      >
        <h4 className="vertical-timeline-element-title">Johnson & Johnson</h4>
        <h6 className="vertical-timeline-element-subtitle">
          Technology Intern
        </h6>
        <p>
          ● Shaped the Strategic Customer Group website by crafting agile user
          stories in Jira through collaborative discussions with 4 tech leads
          and 2 stakeholders to capture business requirements and ensure
          top-notch UI/UX design
        </p>
        <p>
          ● Led Ponvory SharePoint site development, guiding brand integration,
          strategizing structure, and enhancing user experience with existing
          UI, while aligning it with the brand identity.
        </p>
        <p>
          ● Pulled data with Google Analytics. Developed 2 Google Data Studio
          dashboards to analyze metrics before and after a website redesign. Led
          a demo for leadership, business teams, and stakeholders to support
          future decision-making.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(53, 58, 63)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(53, 58, 63)" }}
        date="January 2022 - May 2022"
        iconStyle={{
          backgroundImage: `url(${engineerFactory})`,
          backgroundSize: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        icon=""
      >
        <h4 className="vertical-timeline-element-title">Community Partners</h4>
        <h6 className="vertical-timeline-element-subtitle">
          Computer Science Tutor
        </h6>
        <p>
          ● Conducted lectures on programming fundamentals such as procedural
          programming, scope, functions, data structures, and algorithms.
          Proceeded to teach app development and introduce the event-driven
          programming paradigm using the JavaScript language on the Code.org
          platform.
        </p>
        <p>
          ● Created review sessions and practice exams to prepare students for
          the AP CSP exam. This includes creating powerpoint presentations,
          thinking of effective coding samples to demo live, and creating
          effective practice programming problems that correlate with concepts
          learned.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(53, 58, 63)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(53, 58, 63)" }}
        date="June 2020 - August 2020"
        iconStyle={{
          backgroundImage: `url(${tacc})`,
          backgroundSize: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        icon=""
      >
        <h4 className="vertical-timeline-element-title">
          Texas Advanced Computing Center (TACC)
        </h4>
        <h6 className="vertical-timeline-element-subtitle">
          Data Science Research Intern
        </h6>
        <p>
          ● Collaborated with 7 multidisciplinary team members to apply data
          science and computational methods to a social impact research project.
        </p>
        <p>
          ● Used Python’s Matplotlib, Pandas, and NumPy libraries to parse CSV
          files, clean data, and initialize DataFrames. Created 4 effective and
          engaging data visualizations to support my research question.
        </p>
        <p>
          ● Ran, tracked, and stopped Jupyter Notebook jobs on TACC’s
          supercomputers via the terminal.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(53, 58, 63)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(53, 58, 63)" }}
        date="August 2019 - March 2020"
        iconStyle={{
          backgroundImage: `url(${nasa})`,
          backgroundSize: "230%",
          backgroundPosition: "48% center", // Adjust the percentage as needed
          backgroundRepeat: "no-repeat",
        }}
        icon=""
      >
        <h4 className="vertical-timeline-element-title">NASA</h4>
        <h6 className="vertical-timeline-element-subtitle">Pre-Trainee</h6>
        <p>
          ● Selected as 1 of 50 students to participate in NASA DIRECT STEM,
          where I attended workshops by JPL, UCI, and TACC to enhance Python and
          Linux skills for advanced computation and programming.
        </p>
        <p>
          ● Cleaned data and conducted data analysis on 2D and 3D visualizations
          by utilizing Python and libraries such as NumPy, Pandas, and Seaborn.
        </p>
        <p>
          ● Gained hands-on experience with high performance computing,
          including job management by using the command prompt and Linux
          commands.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "rgb(53, 58, 63)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(53, 58, 63)" }}
        date="August 2018"
        iconStyle={{ background: "rgb(53, 58, 63)", color: "#fff" }}
        icon={<FontAwesomeIcon icon={faSchool}></FontAwesomeIcon>}
      >
        <h4 className="vertical-timeline-element-title">
          California State University, Los Angeles
        </h4>
        <p>Began attending Cal State LA</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default TimelineSection;
