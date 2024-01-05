import React from 'react';
import './TechnicalSkillsComponent.css';

const TechnicalSkillsComponent = () => {
  const icons = [
    { name: 'Java', file: 'java.png', link: 'https://docs.oracle.com/en/java/' },
    { name: 'Python', file: 'python.png', link: 'https://www.python.org/' },
    { name: 'Kotlin', file: 'kotlin.png', link: 'https://kotlinlang.org/' },
    { name: 'C++', file: 'cpp.png', link: 'https://en.cppreference.com/w/' },
    { name: 'JavaScript', file: 'javascript.png', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'TypeScript', file: 'typescript.png', link: 'https://www.typescriptlang.org/' },
    { name: 'React', file: 'react.png', link: 'https://legacy.reactjs.org/' },
    { name: 'HTML', file: 'html.png', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', file: 'css.png', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'Bootstrap', file: 'bootstrap.png', link: 'https://getbootstrap.com/' },
    { name: 'Firebase', file: 'firebase.png', link: 'https://firebase.google.com/' },
    { name: 'PostgreSQL', file: 'postgreSQL.png', link: 'https://www.postgresql.org/'},
    { name: 'GitHub', file: 'github.png', link: 'https://docs.github.com/en' },
    { name: 'Jira', file: 'jira.png', link: 'https://www.atlassian.com/software/jira' },
  ];

  const containerStyle = {
    backgroundColor: 'rgb(55, 58, 62)',
    padding: '20px',
    display: 'flex',
    justifyContent: 'flex-start', // Align to the left
    maxWidth: '92%', // Set it to the desired width for both big and small screens
    margin: 'auto', // Center the component on the page
    borderRadius: '4px', // Add rounded corners
  };

  const imageStyle = {
    width: '60px', // Adjust the width as needed
    height: '60px',
    margin: '10px',
  };

  const mediaQuery = `@media (max-width: 768px) {
    ${containerStyle}
    max-width: 90%; // Adjust the width as needed for smaller screens
  }`;

  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-md-12">
          <div style={containerStyle} className="row">
            {icons.map((icon, index) => (
              <div key={index} className="col-md-3 col-6">
                <a href={icon.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={process.env.PUBLIC_URL + `/icons/${icon.file}`}
                    alt={icon.name}
                    title={icon.name}
                    style={imageStyle}
                    class = "technicalSkillsImage"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{mediaQuery}</style>
    </div>
  );
};

export default TechnicalSkillsComponent;
