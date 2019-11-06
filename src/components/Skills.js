import React from 'react';
import Skill from './Skill';
import '../css/client_css/Skills.scss';

const Skills = props => {
  let skill = props.skills.map(skill => <Skill key={skill.id} skill={skill} />);

  return (
    <div id='skills'>
      <h2>
        <span>My</span> Skills
      </h2>
      {skill}
    </div>
  );
};

export default Skills;
