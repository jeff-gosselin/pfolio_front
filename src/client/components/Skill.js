import React, { Component } from 'react';
import '../../css/client_css/Skill.scss';

class Skill extends Component {
    state = {
        divStyle: {}
    }

    componentDidMount() {
        const {level} = this.props.skill;
        const barLength = `${level}%`;
        const skillSection = document.querySelector('#skills');
        const iObserver = new IntersectionObserver(entries => {
        console.log("level: ", level);
        if (!entries[0].isIntersecting) {
            this.setState({
                divStyle: {
                    height: '100%',
                    width: '0%',
                    transitionDuration: '2s'
                }
            })
        } else {
            this.setState({
                divStyle: {
                    height: '100%',
                    width: barLength,
                    transitionDuration: '2s'
                }
            })
        }
        });

        iObserver.observe(skillSection);
    }
    
    render() {
        console.log("divStyle: ", this.state.divStyle);
        const {name} = this.props.skill;
        return (
            <div class="skill">
                <h3>{name}</h3>
                <div className="skill-meter">
                    <div className="skill-level" style={this.state.divStyle}></div>
                </div>
            </div>
            
        );
    }   
};
export default Skill;