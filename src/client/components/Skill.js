import React from 'react';
import '../../css/client_css/Skill.scss';

// icons
import { FaGithub } from 'react-icons/fa';

const Skill = (props) => {
    console.log("props: ", props.skill.name);
    const {name, level} = props.skill;
    const barLength = `${level}%`;
    const divStyle = {
        height: '100%',
        width: barLength,
    };

    return (
        <div class="skill">
            <h3>{name}</h3>
            <div className="skill-meter">
                <div className="skill-level" style={divStyle}></div>
            </div>
        </div>
        
    );
};
export default Skill;