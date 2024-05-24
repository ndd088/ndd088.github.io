import React from 'react';
import '../assets/styles/App.css';

const MyTools = () => {
  const tools = [
    { name: 'HTML', category: 'Frontend' },
    { name: 'CSS/SCSS', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'ES6', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'React', category: 'Frontend' },
    { name: 'Wordpress', category: 'CMS' },
    { name: 'jQuery', category: 'Frontend' },
    { name: 'Fetch API', category: 'Frontend' },
    { name: 'XML', category: 'Data' },
    { name: 'JSON', category: 'Data' },
    { name: 'Bootstrap', category: 'Frontend' },
    { name: 'Git', category: 'Tools' },
    { name: 'NodeJS', category: 'Backend' },
    { name: 'SQL', category: 'Backend' },
    { name: 'Photoshop', category: 'Design' },
    { name: 'Illustrator', category: 'Design' },
    { name: 'CorelDraw', category: 'Design' },
    { name: 'Figma', category: 'Design' },
  ];

  return (
    <div className="my-tools-container">
      <h2 className="my-tools-title">My Tools</h2>
      <div className="tools-grid">
        {tools.map((tool, index) => (
          <div key={index} className={`tool-item ${tool.name.toLowerCase().replace(/\s/g, '-')}`}>
            <div>{tool.name}</div>
            <span>{tool.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTools;
