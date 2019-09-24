import React from 'react';
import '../../css/client_css/Skill.scss';

// icons
import { FaGithub } from 'react-icons/fa';

const Skill = (props) => {
    console.log("props: ", props.skill.name);
    const {name, level} = props.skill;
    return (
        <div class="skill">
            <h3>{name}</h3>

        </div>
        
    );
};
export default Skill;