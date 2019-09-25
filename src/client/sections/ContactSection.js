import React, { Component } from 'react';
import '../../css/client_css/ContactSection.scss';

class ContactSection extends Component {
    handleInput = () => {

    }

    handleInput = () => {
        
    }
    render() {
        return (
            <section id="contact">
                <div className="contact-content">
                        <h1>Contact Me</h1>
                        <form onSubmit={this.handleSubmit}>
                            <input name="name" type="text" placeholder="Name" onChange={this.handleInput}/>
                            <input name="email" type="email" placeholder="Email" onChange={this.handleInput}/>
                            <textarea name="message" type="text" placeholder="Message" onChange={this.handleInput}/>
                            <button>Send</button> 
                        </form>
                    </div>      
            </section>
        );
    }
    
};
export default ContactSection;