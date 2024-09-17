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
          Engineering Associate (Software)
        </h6>
        <p>
          <p>
            ● I'm currently taking on a full-stack role for a rewrite project of
            an internal web application from VB.Net to Java/Spring (back-end)
            and VB.net to React/TypeScript (front-end). When working on the
            back-end, I've been responsible to develop RESTful APIs (GET/POST)
            to interact with tables from a Microsoft SQL Server database. On the
            front-end, I've created 10 new pages by using Wells Fargo's internal
            React library and 8 re-usable React components. Both of these
            responsabilities modernize the legacy internal app's user interface,
            while also ensuring to meet business needs by persistantly
            communicating and presenting demo's to project owners. In additiona
            to creating new pages and components, I've also been responsible to
            'connecting' my API services to the front-end by effectively
            triggering them within my developed pages. Last but not least, I
            also wrote tests for all of my new code. For back-end development, I
            used JUnit and Karate, and used Postman to ensure the mappings,
            payloads, and tokens are working as expected. On the front-end, I
            utilized Jest to ensure both front-end components and API calls are
            rendering onto the screen.
          </p>
          <p>
            ● Created detailed low-level designs for RESTful APIs before
            development, ensuring alignment with project requirements from the
            start. This facilitated smoother implementation, minimized downtime,
            and avoided rework caused by misalignment or unexpected challenges
            during development.
          </p>
          <p>
            ● Wrote comprehensive and detail-oriented API documentation for
            existing APIs. Which included the creation of sample payloads. As a
            result of this documentation, it increased developers' understanding
            of such services and facilitated seamless integration.
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
          ● Successfully migrated a React Native application to a web-based
          platform using ReactJS, Tailwind CSS, TypeScript, and Google Firebase
          by developing and implementing 5 new react components and 1 new
          accessibility settings page.
        </p>
        <p>
          ● Utilized Github and Jira to promptly diagnose and resolve production
          issues by conducting PR reviews. Ensured for clean and stable code to
          be merged, allowing for smooth operation and minimal downtime by 50%
          within an agile environment.
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
          ● Shaped the Strategic Customer Group website by crafting Agile User
          Stories in Jira through collaborative discussions with 4 tech leads
          and 2 stakeholders to capture business requirements and ensure
          top-notch UI/UX design.
        </p>
        <p>
          ● Led Ponvory SharePoint site development, guiding brand integration,
          strategizing structure, and enhancing user experience with existing
          UI, while aligning it with the brand identity.
        </p>
        <p>
          ● Extracted site data with Google Analytics and developed 2 Google
          Data Studio dashboards to analyze metrics before and after a website
          redesign. Led a demo for leadership, business teams, and stakeholders
          to support future decision-making.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(53, 58, 63)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(53, 58, 63)" }}
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
          ● As part of the ACSC program, I collaborated with 7 other
          multidisciplinary teams to apply data science, computational thinking,
          and enabled computational research experience towards a social
          challenge.
        </p>
        <p>
          ● Used Python’s Matplotlib, Pandas, and NumPy libraries to parse CSV
          files, clean data, and initialize DataFrames. Created 4 effective, and
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
