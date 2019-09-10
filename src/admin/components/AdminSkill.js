import React, { Component } from 'react';
// icons
import { FaMinusCircle } from 'react-icons/fa'; 


const AdminSkill = (props) => {
    console.log("AdminSkill: ", props.skill.id);
    return (
        <li>
            <h3>{props.skill.name}</h3>
            <p>{props.skill.level}%</p>
            <div><FaMinusCircle className="delete" onClick={() => props.skillDelete(props.skill.id)} /></div>
        </li>
    );
}

export default AdminSkill;